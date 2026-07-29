"use client";

import React from "react";

interface EmbeddedVideoCardProps {
  onExploreLore?: () => void;
  videoUrl?: string;
}

export default function EmbeddedVideoCard({
  onExploreLore,
  videoUrl = "https://www.youtube-nocookie.com/embed/1CUqs1uAqpQ",
}: EmbeddedVideoCardProps) {
  return (
    <div className="p-4 border rounded-xl border-amber-500/20 bg-slate-950/80 backdrop-blur-sm">
      {/* Header with Prominent Lore Channel Button */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[10px] tracking-wider text-amber-400">
          CURRENT EPOCH
        </span>
        
        {/* Lore Interactive Button */}
        <button
          onClick={onExploreLore}
          className="font-mono text-[11px] text-cyan-300 bg-cyan-950/60 hover:bg-cyan-500/20 border border-cyan-500/40 px-2.5 py-1 rounded-md transition-all shadow-sm hover:shadow-cyan-500/20 active:scale-95 cursor-pointer flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          EXPLORE LORE
        </button>
      </div>

      {/* Epoch Title & Details */}
      <h2 className="font-mono text-2xl font-bold tracking-wider text-amber-300">
        KALI YUGA
      </h2>
      <p className="mt-1 font-mono text-xs text-slate-400">
        YEAR 5,128 / 432,000
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
        <div className="bg-amber-400 h-full w-[1.187%]" />
      </div>
      <span className="font-mono text-[10px] text-amber-400/80 mt-1 block">
        PROGRESS: 1.1870%
      </span>

      {/* Embedded Video Monitor */}
      <div className="relative w-full mt-4 overflow-hidden bg-black border rounded-lg aspect-video border-slate-800">
        <iframe
          src={videoUrl}
          title="Kali Yuga Media Monitor"
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}