"use client";

import React, { useState } from "react";

export default function CosmicConverter() {
  const [inputYear, setInputYear] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const handleConvert = (e: React.FormEvent) => {
    e.preventDefault();
    const year = parseInt(inputYear, 10);
    if (isNaN(year)) {
      setResult("Invalid Year");
      return;
    }
    const kaliYear = year + 3102;
    setResult(kaliYear > 0 ? `Kali Yuga Year ${kaliYear.toLocaleString()}` : "Pre-Kali Yuga Era");
  };

  return (
    <div className="p-4 rounded-xl border border-amber-500/30 bg-slate-950/80 backdrop-blur-md w-full">
      <div className="text-[10px] tracking-widest text-amber-500 mb-2 uppercase">
        EPOCH CONVERTER
      </div>
      <form onSubmit={handleConvert} className="flex gap-2">
        <input
          type="number"
          placeholder="e.g. 2026"
          value={inputYear}
          onChange={(e) => setInputYear(e.target.value)}
          className="bg-slate-900 border border-amber-500/20 rounded px-2 py-1 text-xs text-amber-200 outline-none focus:border-amber-400 w-full"
        />
        <button
          type="submit"
          className="px-3 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded text-xs hover:bg-amber-500/40 transition-all cursor-pointer"
        >
          CONVERT
        </button>
      </form>
      {result && <div className="mt-2 text-xs text-emerald-400 font-bold">{result}</div>}
    </div>
  );
}
