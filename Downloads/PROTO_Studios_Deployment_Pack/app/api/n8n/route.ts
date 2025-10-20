export async function POST(req: Request) {
  const { payload } = await req.json();
  const res = await fetch(process.env.N8N_WEBHOOK_URL as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload || { ping: "from PROTO" })
  });
  const data = await res.json();
  return Response.json(data);
}
