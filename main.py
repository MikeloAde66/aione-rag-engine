import os
import logging
from contextlib import asynccontextmanager
from typing import List, Optional
from fastapi import FastAPI, HTTPException, status
from fastapi.responses import HTMLResponse
from pydantic import BaseModel, Field
from dotenv import load_dotenv
from openai import OpenAI, OpenAIError
from pymongo import MongoClient
from pymongo.errors import PyMongoError
from pymongo.server_api import ServerApi

# 1. Setup Logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("aione_backend")

# Global clients
mongo_client: Optional[MongoClient] = None
openai_client: Optional[OpenAI] = None
db = None
collection = None

# 2. Lifecycle Management
@asynccontextmanager
async def lifespan(app: FastAPI):
    global mongo_client, openai_client, db, collection
    
    load_dotenv()
    mongo_uri = os.getenv("MONGODB_URI")
    openai_key = os.getenv("OPENAI_API_KEY")

    if not mongo_uri or not openai_key:
        logger.critical("Missing required environment variables: MONGODB_URI or OPENAI_API_KEY")
        raise RuntimeError("Environment variables not properly configured.")

    try:
        mongo_client = MongoClient(mongo_uri, server_api=ServerApi('1'), maxPoolSize=50)
        mongo_client.admin.command('ping')
        db = mongo_client["aione_knowledge"]
        collection = db["public_texts"]
        
        openai_client = OpenAI(api_key=openai_key)
        logger.info("Successfully connected to MongoDB Atlas and OpenAI API.")
    except Exception as e:
        logger.critical(f"Failed to initialize backend services: {e}")
        raise e

    yield

    if mongo_client:
        mongo_client.close()
        logger.info("MongoDB client connection closed.")

app = FastAPI(title="AiOne Knowledge Base API", version="1.0.0", lifespan=lifespan)

# 3. Data Models
class IngestRequest(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    author: str = Field(..., min_length=1, max_length=100)
    category: str = Field(..., min_length=1, max_length=100)
    text: str = Field(..., min_length=1, description="Content text to ingest")

class SearchRequest(BaseModel):
    query: str = Field(..., min_length=3, max_length=500)
    limit: int = Field(default=3, ge=1, le=20)

class SearchResult(BaseModel):
    title: Optional[str] = None
    author: Optional[str] = None
    category: Optional[str] = None
    content_chunk: Optional[str] = None
    score: float

class ChatRequest(BaseModel):
    question: str = Field(..., min_length=3, max_length=500)
    limit: int = Field(default=3, ge=1, le=10)

class ChatResponse(BaseModel):
    answer: str
    sources: List[SearchResult]

# Helper function for vector search
def perform_vector_search(query: str, limit: int = 3) -> List[SearchResult]:
    response = openai_client.embeddings.create(
        model="text-embedding-3-small",
        input=query
    )
    query_vector = response.data[0].embedding

    pipeline = [
        {
            "$vectorSearch": {
                "index": "vector_index",
                "path": "embedding",
                "queryVector": query_vector,
                "numCandidates": 100,
                "limit": limit
            }
        },
        {
            "$project": {
                "_id": 0,
                "title": 1,
                "author": 1,
                "category": 1,
                "content_chunk": 1,
                "score": {"$meta": "vectorSearchScore"}
            }
        }
    ]

    results = list(collection.aggregate(pipeline))
    return [SearchResult(**doc) for doc in results]

# 4. Web UI Endpoint
@app.get("/", response_class=HTMLResponse)
def get_dashboard():
    if os.path.exists("index.html"):
        with open("index.html", "r", encoding="utf-8") as f:
            return f.read()
    return "<h1>index.html not found</h1>"

# 5. API Endpoints
@app.get("/health")
def health_check():
    return {"status": "healthy", "database": "connected"}

@app.post("/ingest", status_code=status.HTTP_201_CREATED)
def ingest_document(payload: IngestRequest):
    try:
        response = openai_client.embeddings.create(
            model="text-embedding-3-small",
            input=payload.text
        )
        embedding = response.data[0].embedding

        doc = {
            "title": payload.title,
            "author": payload.author,
            "category": payload.category,
            "content_chunk": payload.text,
            "embedding": embedding
        }

        result = collection.insert_one(doc)
        logger.info(f"Ingested document ID: {result.inserted_id}")
        return {"status": "success", "inserted_id": str(result.inserted_id)}

    except OpenAIError as e:
        logger.error(f"OpenAI API error during ingestion: {e}")
        raise HTTPException(status_code=502, detail="Failed to generate text embeddings.")
    except PyMongoError as e:
        logger.error(f"MongoDB error during ingestion: {e}")
        raise HTTPException(status_code=500, detail="Database insertion failed.")

@app.post("/search", response_model=List[SearchResult])
def search_knowledge(payload: SearchRequest):
    try:
        return perform_vector_search(payload.query, payload.limit)
    except OpenAIError as e:
        logger.error(f"OpenAI API error during search: {e}")
        raise HTTPException(status_code=502, detail="Failed to process search query embedding.")
    except PyMongoError as e:
        logger.error(f"MongoDB error during vector search: {e}")
        raise HTTPException(status_code=500, detail="Vector search query failed.")

# 6. RAG Endpoint
@app.post("/chat", response_model=ChatResponse)
def rag_chat(payload: ChatRequest):
    try:
        context_chunks = perform_vector_search(payload.question, payload.limit)

        if not context_chunks:
            return ChatResponse(
                answer="I could not find any relevant information in the knowledge base to answer your query.",
                sources=[]
            )

        context_text = "\n\n".join([
            f"Source [{idx+1}] - {doc.title} by {doc.author}:\n{doc.content_chunk}"
            for idx, doc in enumerate(context_chunks)
        ])

        system_prompt = (
            "You are an intelligent knowledge base assistant. Answer the user's question strictly using "
            "the context provided below. If the answer cannot be deduced from the context, state clearly "
            "that the knowledge base does not contain enough information."
        )

        user_prompt = f"Context:\n{context_text}\n\nQuestion: {payload.question}"

        completion = openai_client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            temperature=0.2
        )

        ai_answer = completion.choices[0].message.content

        return ChatResponse(answer=ai_answer, sources=context_chunks)

    except OpenAIError as e:
        logger.error(f"OpenAI error during RAG synthesis: {e}")
        raise HTTPException(status_code=502, detail="Failed to generate synthesized response.")
    except Exception as e:
        logger.error(f"Error processing RAG pipeline: {e}")
        raise HTTPException(status_code=500, detail=f"RAG completion failed: {str(e)}")
