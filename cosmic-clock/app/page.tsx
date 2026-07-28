"use client";

import React, { useEffect, useState } from "react";
import { calculateCosmicTime, CosmicData } from "@/lib/cosmicMath";
import { fetchLiveNOAAData, NOAAKpData } from "@/lib/noaa";
import { audioEngine } from "@/lib/audioEngine";
import CosmicCanvas from "@/components/CosmicCanvas";
import CosmicConverter from "@/components/CosmicConverter";
import KaliYugaDrawer from "@/components/KaliYugaDrawer";
import ISSFeedModal from "@/components/ISSFeedModal";
import CenterpieceCanvas from "@/components/CenterpieceCanvas";
import EmbeddedVideoCard from "@/components/EmbeddedVideoCard";
export default function CosmicClockApp() {
  const [cosmic, setCosmic] = useState<CosmicData | null>(null);
  const [time, setTime] = useState<string>("");
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isIssOpen, setIsIssOpen] = useState<boolean>(false);
  const [noaa, setNoaa] = useState<NOAAKpData>({
    kpIndex: 2.1,
    label: "SYNCING NOAA...",
    color: "text-amber-300",
    timeTag: "",
  });

  useEffect(() => {
    setCosmic(calculateCosmicTime());
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toUTCString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function loadNOAA() {
      const data = await fetchLiveNOAAData();
      if (data) setNoaa(data);
    }
    loadNOAA();
  }, []);

  const handleAudioToggle = () => {
    const active = audioEngine.toggle(noaa.kpIndex);
    setIsAudioActive(active);
  };

  if (!cosmic) {
    return (
      <div className="p-10 font-mono text-amber-400">
        Loading Cosmic Clock...
      </div>
    );
  }

  return (
    <main className="relative flex flex-col justify-between min-h-screen p-6 overflow-hidden font-mono text-slate-100 bg-slate-950">
      {/* Dynamic Background Star Map */}
      <CosmicCanvas kpIndex={noaa.kpIndex} />

      {/* 3D Rotating Armillary Centerpiece */}
      <CenterpieceCanvas />

{/* Slide-Out Lore Drawer */}
<KaliYugaDrawer
  isOpen={isDrawerOpen}
  onClose={() => setIsDrawerOpen(false)}
/>


      {/* ISS Live Feed Overlay Modal */}
      <ISSFeedModal
        isOpen={isIssOpen}
        onClose={() => setIsIssOpen(false)}
      />

      {/* Top Header Controls */}
      <header className="relative z-10 flex items-start justify-between pb-4 border-b border-amber-500/20">
        <div>
          <h1 className="text-xl font-bold tracking-widest text-amber-400">
            COSMIC ALMANAC
          </h1>
          <p className="text-[10px] text-slate-400">
            REAL-TIME EPOCH &amp; HARMONIC RESONANCE HUD
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsIssOpen(true)}
            className="flex items-center gap-2 px-3 py-1 text-xs border rounded border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            LIVE ISS FEED
          </button>

          <button
            onClick={handleAudioToggle}
            className={`flex items-center gap-2 px-3 py-1 text-xs border rounded transition-all ${
              isAudioActive
                ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                : "border-slate-700 bg-slate-900 text-slate-400"
            }`}
          >
            <span>{isAudioActive ? "🔊 432Hz ON" : "🔇 432Hz OFF"}</span>
          </button>

          <div className="text-right text-[10px] text-slate-400">
            <div>UTC: {time}</div>
            <div className={noaa.color}>NOAA SYNC: ONLINE</div>
          </div>
        </div>
      </header>

      {/* Center Main HUD Area (Middle Viewport) */}
      <div className="relative z-10 flex items-center justify-between my-auto pointer-events-none">
        {/* Left Side: Epoch Converter & Lore Trigger */}
        <div className="max-w-xs space-y-4 pointer-events-auto">
          <CosmicConverter />

          <div className="p-4 border rounded bg-slate-900/80 border-amber-500/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-1 text-xs font-bold text-amber-400">
              <span>CURRENT EPOCH</span>
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="text-[10px] underline text-cyan-400 hover:text-cyan-300"
              >
                EXPLORE LORE
              </button>
            </div>
            <div className="text-2xl font-bold tracking-wider text-amber-300">
              KALI YUGA
            </div>
            <div className="mt-1 text-xs text-slate-400">
              YEAR 5,128 / 432,000
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-amber-400"
                style={{ width: "1.187%" }}
              />
            </div>
            <div className="text-[10px] text-amber-400/80 mt-1">
              PROGRESS: 1.1870%
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics HUD */}
      <footer className="relative z-10 grid grid-cols-4 gap-4 pt-4 text-xs border-t border-amber-500/20">
        <div className="p-3 border rounded bg-slate-900/80 border-slate-800">
          <div className="text-[10px] text-slate-400">EARTH AGE</div>
          <div className="font-bold text-amber-300">4,540,000,000 YRS</div>
        </div>
        <div className="p-3 border rounded bg-slate-900/80 border-slate-800">
          <div className="text-[10px] text-slate-400">AXIAL PRECESSION</div>
          <div className="font-bold text-amber-300">~25,772 YRS</div>
        </div>
        <div className="p-3 border rounded bg-slate-900/80 border-slate-800">
          <div className="text-[10px] text-slate-400">RESONANT TONE</div>
          <div className="font-bold text-cyan-300">432.0 Hz HARMONIC</div>
        </div>
        <div className="p-3 border rounded bg-slate-900/80 border-slate-800">
          <div className="text-[10px] text-slate-400">NOAA SPACE WEATHER</div>
          <div className={`font-bold ${noaa.color}`}>{noaa.label}</div>
        </div>
      </footer>
    </main>
  );
}