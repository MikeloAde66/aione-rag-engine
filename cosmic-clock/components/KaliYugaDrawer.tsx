"use client";

import React from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KaliYugaDrawer({ isOpen, onClose }: DrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end transition-opacity bg-slate-950/70 backdrop-blur-sm">
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Drawer Panel */}
      <div className="relative flex flex-col justify-between w-full h-full max-w-md p-6 overflow-y-auto font-mono border-l shadow-2xl bg-slate-900 border-amber-500/30 text-slate-200">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
            <div>
              <span className="text-[10px] text-cyan-400 tracking-widest block">COSMIC CHRONOLOGY</span>
              <h2 className="text-xl font-bold tracking-wider text-amber-300">KALI YUGA LORE</h2>
            </div>
            <button
              onClick={onClose}
              className="px-2 py-1 text-xs transition-all border rounded border-amber-500/30 text-amber-400 hover:bg-amber-500/20"
            >
              ✕ CLOSE
            </button>
          </div>

          {/* Body Content */}
          <div className="mt-6 space-y-6 text-xs leading-relaxed text-slate-300">
            <div className="p-3 border rounded bg-slate-950/60 border-amber-500/20">
              <span className="block mb-1 font-bold text-amber-400">THE FOUR YUGAS CYCLE</span>
              <p className="text-slate-400">
                A complete Mahayuga lasts 4,320,000 solar years and consists of four distinct ages of declining harmonic order:
              </p>
              <ul className="mt-2 space-y-1 text-[11px] list-disc list-inside text-slate-300">
                <li><strong className="text-amber-200">Satya Yuga:</strong> 1,728,000 years (Golden Age)</li>
                <li><strong className="text-amber-200">Treta Yuga:</strong> 1,296,000 years</li>
                <li><strong className="text-amber-200">Dvapara Yuga:</strong> 864,000 years</li>
                <li><strong className="text-amber-300">Kali Yuga:</strong> 432,000 years (Current Age)</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-bold text-cyan-300">✦ HARMONIC RESONANCE &amp; 432 Hz</h3>
              <p>
                The durations of the Yugas follow a proportional mathematical ratio of 4:3:2:1. Notice that the base unit of the current age, <strong className="text-amber-300">432,000 years</strong>, mirrors the fundamental <strong className="text-cyan-300">432 Hz</strong> natural harmonic frequency.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-bold text-amber-300">✦ CURRENT TIMELINE POSITION</h3>
              <p>
                According to traditional astronomical calculations, the current Kali Yuga began in 3102 BCE (the transition following the departure of Krishna). At Year 5,128, the current epoch is approximately <strong className="text-amber-400">1.187% complete</strong>.
              </p>
            </div>

            <div className="p-3 border rounded bg-slate-950/60 border-cyan-500/20">
              <span className="block mb-1 font-bold text-cyan-400">PRECESSION OF THE EQUINOXES</span>
              <p className="text-slate-400">
                The Earth's axial wobble spans approximately 25,772 years, completing one full Great Year. This slow physical rotation directly mirrors the micro-movements displayed in your HUD centerpiece.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-amber-500/20 text-center text-[10px] text-slate-500">
          COSMIC ALMANAC // HARMONIC ARCHIVE MODULE
        </div>
      </div>
    </div>
  );
}