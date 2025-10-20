"use client";
import { useState } from "react";

type Tab = "openai" | "github" | "stripe" | "n8n";

export default function APIConsole() {
  const [tab, setTab] = useState<Tab>("openai");
  const [prompt, setPrompt] = useState("Say hello from PROTO Studios.");
  const [output, setOutput] = useState<string>("");

  const run = async () => {
    let url = `/api/${tab}`;
    let res: Response;

    if (tab === "openai" || tab === "n8n") {
      res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, payload: { from: "console" } }),
      });
    } else if (tab === "stripe") {
      res = await fetch(url, { method: "POST" });
    } else {
      res = await fetch(url);
    }

    const data = await res.json();
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <div className="rounded-2xl border border-neutral-900 bg-neutral-900/40 p-6">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">API Console</div>
        <div className="flex gap-1 rounded-lg bg-neutral-900/60 p-1 border border-neutral-800">
          {(["openai","github","stripe","n8n"] as Tab[]).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`text-xs px-3 py-1.5 rounded-md ${tab===t ? 'bg-white text-neutral-900' : 'text-neutral-300 hover:text-white'}`}>{t}</button>
          ))}
        </div>
      </div>
      {(tab === "openai" || tab === "n8n") && (
        <textarea
          className="mt-3 w-full h-28 bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-sm"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      )}
      <div className="mt-3">
        <button onClick={run} className="px-4 py-2 rounded-xl bg-white text-neutral-900 text-sm font-medium">Run</button>
      </div>
      <pre className="mt-4 rounded-xl border border-neutral-900 bg-neutral-950 p-4 overflow-auto text-sm max-h-80">{output || "// results appear here"}</pre>
    </div>
  );
}
