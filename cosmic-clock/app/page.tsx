"use client";

import React, { useEffect, useState } from "react";
import { calculateCosmicTime, CosmicData } from "@/lib/cosmicMath";
import { audioEngine } from "@/lib/audioEngine";
import CosmicCanvas from "@/components/CosmicCanvas";
import CosmicConverter from "@/components/CosmicConverter";
import KaliYugaDrawer from "@/components/KaliYugaDrawer";
import ISSFeedModal from "@/components/ISSFeedModal";
import CenterpieceCanvas from "@/components/CenterpieceCanvas";
import EmbeddedVideoCard from "@/components/EmbeddedVideoCard";
import NoaaWidget from "@/components/NoaaWidget";

const CenterpieceCanvasTyped = CenterpieceCanvas as React.ComponentType<{ cosmic: CosmicData }>;

export default function CosmicClockApp() {
  const [cosmic, setCosmic] = useState<CosmicData | null>(null);
  const [time, setTime] = useState<string>("");
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isIssOpen, setIsIssOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
      const data = calculateCosmicTime(now);
      setCosmic(data);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAudioToggle = () => {
    if (isAudioActive) {
      audioEngine.stop();
      setIsAudioActive(false);
    } else {
      audioEngine.start();
      setIsAudioActive(true);
    }
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden font-sans bg-slate-950 text-slate-100">
      {/* Background Interactive Canvas */}
      <CosmicCanvas />

      {/* Main HUD Interface Overlay */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 mx-auto pointer-events-none max-w-7xl">
        
        {/* Top Header Controls */}
        <header className="flex items-center justify-between pointer-events-auto">
          <div>
            <h1 className="text-2xl font-black tracking-widest text-amber-400">COSMIC CLOCK</h1>
            <p className="font-mono text-xs text-slate-400">REAL-TIME EPOCH & HARMONIC RESONANCE HUD</p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleAudioToggle}
              className={`px-3 py-1.5 rounded text-xs font-mono border transition-all ${
                isAudioActive
                  ? "border-emerald-500 text-emerald-400 bg-emerald-950/40"
                  : "border-slate-800 text-slate-400 bg-slate-900/60 hover:border-slate-700"
              }`}
            >
              AUDIO: {isAudioActive ? "432 Hz ON" : "OFF"}
            </button>

            <button
              onClick={() => setIsIssOpen(true)}
              className="px-3 py-1.5 rounded text-xs font-mono border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition-all flex items-center space-x-2"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>LIVE ISS FEED</span>
            </button>
          </div>
        </header>

        {/* Center Grid Display */}
        <div className="grid items-center grid-cols-1 gap-6 my-auto md:grid-cols-3">
          
          {/* Left Panel: Controls, Epoch, NOAA Telemetry & Video */}
          <div className="space-y-4 pointer-events-auto">
            <CosmicConverter />

            <div className="p-4 border rounded-xl border-slate-800 bg-slate-950/80 backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-amber-500 uppercase">Current Epoch</span>
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="text-[10px] font-mono text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded bg-cyan-950/30 transition-all"
                >
                  ● EXPLORE LORE
                </button>
              </div>

              <h2 className="text-2xl font-extrabold tracking-wider text-amber-400">KALI YUGA</h2>
              <p className="mt-1 font-mono text-xs text-slate-400">YEAR 5,128 / 432,000</p>
              
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-amber-500 h-full w-[1.187%] transition-all duration-500" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 block mt-1">PROGRESS: 1.1870%</span>
            </div>

            {/* Live NOAA Telemetry & Satellite Grounding Widget */}
            <NoaaWidget />

            <EmbeddedVideoCard />
          </div>

          {/* Center Graphic */}
          <div className="col-span-1 md:col-span-2 relative h-[450px] flex items-center justify-center">
            {cosmic && <CenterpieceCanvasTyped cosmic={cosmic} />}
          </div>
        </div>

        {/* Bottom Metrics HUD */}
        <footer className="grid grid-cols-3 gap-4 pointer-events-auto">
          <div className="p-3 border rounded-lg border-slate-800/80 bg-slate-950/80">
            <span className="text-[10px] font-mono text-slate-500 uppercase">Earth Age</span>
            <p className="text-sm font-bold text-amber-400 mt-0.5">4,540,000,000 YRS</p>
          </div>

          <div className="p-3 border rounded-lg border-slate-800/80 bg-slate-950/80">
            <span className="text-[10px] font-mono text-slate-500 uppercase">Geomagnetic Field</span>
            <p className="text-sm font-bold text-emerald-400 mt-0.5">GEOMAGNETIC QUIET (0)</p>
          </div>

          <div className="p-3 border rounded-lg border-slate-800/80 bg-slate-950/80">
            <span className="text-[10px] font-mono text-slate-500 uppercase">System Time</span>
            <p className="text-sm font-bold text-slate-200 mt-0.5">{time || "SYNCING..."}</p>
          </div>
        </footer>
      </div>

      {/* Slide-over Drawers & Modals */}
      <KaliYugaDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <ISSFeedModal isOpen={isIssOpen} onClose={() => setIsIssOpen(false)} />
    </main>
  );
}