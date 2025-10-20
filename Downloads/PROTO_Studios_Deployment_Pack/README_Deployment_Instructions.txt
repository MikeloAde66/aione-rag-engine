# PROTO Studios — NEXUS (Next.js on Vercel)

Owner: jamminwithbiglu@gmail.com

This is a Next.js App Router project with Tailwind and example API routes for OpenAI, GitHub, Stripe, and n8n. Deploy on **Vercel** and connect a subdomain from **Bluehost**: `proto.digitaldigestglobal.com`.

## Quick Start
```bash
npm i
npm run dev
```
Then open http://localhost:3000

## Deploy (Vercel)
1. Push this folder to a new GitHub repo (e.g., `proto-studios`).
2. Create a new Vercel Project → Import your repo.
3. Add Environment Variables from `.env.example`.
4. Deploy. You will get a URL like `https://proto-studios.vercel.app`.
5. Add your domain: `proto.digitaldigestglobal.com` in Vercel → Settings → Domains.

## Environment Variables
Set these in Vercel → Project → Settings → Environment Variables.
- `OPENAI_API_KEY`
- `GITHUB_TOKEN`
- `STRIPE_SECRET_KEY`
- `N8N_WEBHOOK_URL`
- `PROTO_API_KEY`

## API Routes
- `POST /api/openai` → calls OpenAI Chat Completions (`gpt-4o-mini`).
- `GET /api/github` → returns authenticated GitHub user data.
- `POST /api/stripe` → creates a Checkout Session (replace `price_12345`).
- `POST /api/n8n` → forwards payload to your n8n webhook.

## Security
- Never commit real keys. Use Vercel env vars.
- Rotate keys regularly.
- Consider adding authentication for the API Console.
