"use client";
/* cspell:ignore HDEV */
import React from "react";

export default function EmbeddedVideoCard() {
  return (
    <div className="flex flex-col w-full mt-4 overflow-hidden border rounded-lg bg-slate-900/80 backdrop-blur-md border-amber-500/30">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b bg-slate-950/90 border-amber-500/20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="font-mono text-[11px] font-bold tracking-wider text-amber-300">
            LIVE ISS HD EARTH VIEW
          </span>
        </div>
        <span className="font-mono text-[9px] text-slate-500">NASA HDEV</span>
      </div>

      {/* Embedded Video Container */}
      <div className="relative flex items-center justify-center w-full overflow-hidden bg-black aspect-video">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          src="/video/iss-loop.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Telemetry Footer */}
      <div className="grid grid-cols-2 gap-2 p-2 font-mono border-t bg-slate-950/80 border-amber-500/20">
        <div>
          <span className="block text-[8px] text-slate-500">ORBITAL SPEED</span>
          <span className="text-[10px] text-amber-400">~27,600 KM/H</span>
        </div>
        <div>
          <span className="block text-[8px] text-slate-500">ALTITUDE</span>
          <span className="text-[10px] text-cyan-400">~408 KM</span>
        </div>
      </div>
    </div>
  );
}