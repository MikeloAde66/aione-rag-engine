"use client";
import { useState } from "react";
import APIConsole from "@/components/APIConsole";

export default function ProtoLanding() {
  const [lang, setLang] = useState<'curl' | 'node' | 'python'>('curl');

  const code = {
    curl: `# Quickstart: call the PROTO Orchestrator
curl -X POST https://api.proto.studio/v1/agents/run \  -H "Authorization: Bearer <YOUR_API_KEY>" \  -H "Content-Type: application/json" \  -d '{
    "agent": "sam-super-agent",
    "task": "summarize repo and create n8n workflow",
    "inputs": {"repo": "github:you/project"}
  }'`,
    node: `// npm i axios
import axios from "axios";
const res = await axios.post(
  "https://api.proto.studio/v1/agents/run",
  {
    agent: "sam-super-agent",
    task: "create-checkout-session",
    inputs: { tier: "commercial", track: "beat_042" },
  },
  { headers: { Authorization: \`Bearer \${process.env.PROTO_API_KEY}\` } }
);
console.log(res.data);`,
    python: `# pip install requests
import os, requests
r = requests.post(
  "https://api.proto.studio/v1/agents/run",
  json={
    "agent": "inventory-agent",
    "task": "sync-shopify",
    "inputs": {"store": "proto-studios-shop"}
  },
  headers={"Authorization": f"Bearer {os.environ['PROTO_API_KEY']}"}
)
print(r.json())`,
  } as const;

  const apis = [
    { name: "OpenAI", tag: "LLMs & embeddings", status: "available" },
    { name: "Google Cloud", tag: "storage, video, TTS", status: "available" },
    { name: "GitHub", tag: "repos & actions", status: "available" },
    { name: "n8n", tag: "workflows", status: "available" },
    { name: "Stripe", tag: "payments", status: "available" },
    { name: "Shopify", tag: "commerce", status: "available" },
    { name: "WooCommerce", tag: "WP shop", status: "available" },
    { name: "Firebase", tag: "auth & realtime", status: "available" },
    { name: "ElevenLabs", tag: "voice", status: "coming" },
    { name: "RunwayML", tag: "video gen", status: "coming" },
  ];

  const quicklinks = [
    { title: "API Keys", desc: "Create and manage project tokens.", cta: "Open Keys" },
    { title: "Projects", desc: "Organize apps, envs, and secrets.", cta: "View Projects" },
    { title: "Agents", desc: "Ship autonomous workers w/ guardrails.", cta: "Browse Agents" },
    { title: "Pipelines", desc: "ETL + inference + automations.", cta: "Open Pipelines" },
  ];

  const tracks = [
    { level: "Beginner", bullets: [
      "Hello World agent with OpenAI",
      "n8n trigger → HTTP node → Slack alert",
      "Stripe test mode checkout",
    ]},
    { level: "Advanced", bullets: [
      "Multi-agent orchestration + memory",
      "Repo → CI → Deploy (GitHub Actions)",
      "Telemetry, retries, and idempotency",
    ]},
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
            <span className="font-semibold tracking-wide">NEXUS • PROTO Studios</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-white" href="#api">API</a>
            <a className="hover:text-white" href="#agents">Agents</a>
            <a className="hover:text-white" href="#integrations">Integrations</a>
            <a className="hover:text-white" href="#classroom">Classroom</a>
            <a className="hover:text-white" href="#docs">Docs</a>
          </nav>
          <div className="flex items-center gap-2">
            <input className="hidden sm:block bg-neutral-900/60 border border-neutral-800 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-700" placeholder="Search docs" />
            <button className="rounded-xl bg-white/10 hover:bg-white/15 px-3 py-2 text-sm">Sign in</button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Build Automations. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Ship Super Agents.</span>
            </h1>
            <p className="mt-5 text-neutral-400 max-w-2xl">
              PROTO Studios is the developer core of <span className="text-neutral-200">DDG</span>. Short, direct, and engineered for speed — NEXUS is where ideas become systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quickstart" className="px-4 py-2 rounded-xl bg-white text-neutral-900 text-sm font-medium">Start building</a>
              <a href="#docs" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-sm">Read the docs</a>
            </div>
          </div>
        </div>
      </section>

      <section id="quickstart" className="border-t border-neutral-900 bg-neutral-980/50">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-4">
          {quicklinks.map((q) => (
            <div key={q.title} className="rounded-2xl border border-neutral-900 bg-neutral-900/40 p-5 hover:border-neutral-700 transition">
              <div className="text-sm text-neutral-400">{q.title}</div>
              <div className="mt-2 text-neutral-200 text-sm">{q.desc}</div>
              <button className="mt-4 text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15">{q.cta}</button>
            </div>
          ))}
        </div>
      </section>

      <section id="api" className="border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">API Catalog</h2>
            <a href="#docs" className="text-sm text-neutral-400 hover:text-neutral-200">Full reference →</a>
          </div>
          <div className="grid md:grid-cols-5 gap-4 mt-6">
            {apis.map((a) => (
              <div key={a.name} className="rounded-2xl border border-neutral-900 bg-neutral-900/40 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{a.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${a.status === 'available' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-amber-500/15 text-amber-300'}`}>{a.status}</span>
                </div>
                <div className="mt-1 text-xs text-neutral-400">{a.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="docs" className="border-t border-neutral-900 bg-neutral-980/50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-semibold">Quickstart</h3>
            <div className="flex gap-1 rounded-lg bg-neutral-900/60 p-1 border border-neutral-800">
              {(['curl','node','python'] as const).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`text-xs px-3 py-1.5 rounded-md ${lang===l ? 'bg-white text-neutral-900' : 'text-neutral-300 hover:text-white'}`}>{l}</button>
              ))}
            </div>
          </div>
          <pre className="mt-4 rounded-2xl border border-neutral-900 bg-neutral-950 p-4 overflow-auto text-sm">
{code[lang]}
          </pre>
          <div className="mt-4 text-xs text-neutral-400">Use project-scoped keys. Rotate regularly. Store secrets in .env and never commit them.</div>
        </div>
      </section>

      <section id="agents" className="border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h3 className="text-xl md:text-2xl font-semibold">Featured Super Agents</h3>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              { name: "Sam", desc: "Multilingual outreach + deal-flow negotiator." },
              { name: "Inventory", desc: "Tracks digital packages, syncs Shopify/Woo, alerts low stock." },
              { name: "Black Ops", desc: "Scouts APIs, prototypes workflows, writes docs." },
            ].map((a) => (
              <div key={a.name} className="rounded-2xl border border-neutral-900 bg-neutral-900/40 p-5">
                <div className="font-medium">{a.name} Agent</div>
                <div className="mt-2 text-sm text-neutral-400">{a.desc}</div>
                <button className="mt-4 text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15">Open template</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="integrations" className="border-t border-neutral-900 bg-neutral-980/50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h3 className="text-xl md:text-2xl font-semibold">Install & Integrate</h3>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-2xl border border-neutral-900 bg-neutral-900/40 p-6">
              <div className="font-medium">Mac (Terminal)</div>
              <pre className="mt-3 text-sm overflow-auto">{`# Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Node + n8n + VS Code
brew install node
npm i -g n8n
brew install --cask visual-studio-code

# Clone starter and run
git clone https://github.com/proto-studios/nexus-starter.git
cd nexus-starter && cp .env.example .env
npm i && npm run dev`}</pre>
            </div>
            <div className="rounded-2xl border border-neutral-900 bg-neutral-900/40 p-6">
              <div className="font-medium">Windows (PowerShell)</div>
              <pre className="mt-3 text-sm overflow-auto">{`# Node from winget
winget install OpenJS.NodeJS.LTS

# n8n globally
npm i -g n8n

# VS Code
winget install Microsoft.VisualStudioCode

# Starter
git clone https://github.com/proto-studios/nexus-starter.git
cd nexus-starter; copy .env.example .env
npm i; npm run dev`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section id="classroom" className="border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between">
            <h3 className="text-xl md:text-2xl font-semibold">NEXUS Classroom</h3>
            <a className="text-sm text-neutral-400 hover:text-neutral-200" href="#">All lessons →</a>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {tracks.map((t) => (
              <div key={t.level} className="rounded-2xl border border-neutral-900 bg-neutral-900/40 p-6">
                <div className="text-sm uppercase tracking-wide text-neutral-400">{t.level}</div>
                <ul className="mt-3 space-y-2 text-sm list-disc list-inside text-neutral-300">
                  {t.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <button className="mt-4 text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15">Start track</button>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <APIConsole />
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 py-10 text-xs text-neutral-500 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} DDG • NEXUS / PROTO Studios</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-300">Status</a>
            <a href="#" className="hover:text-neutral-300">Terms</a>
            <a href="#" className="hover:text-neutral-300">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
