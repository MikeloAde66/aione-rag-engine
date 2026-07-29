"use client";

import React, { useState, useEffect } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LoreItem {
  title?: string;
  question?: string;
  category?: string;
  content?: string;
  explanation?: string;
  answer?: string;
}

const TRETA_DATABASE = [
  {
    question: "What is the total duration of the current Yuga, Treta, on earth years?",
    answer: "Treta Yuga lasts 1,296,000 earth years.",
    category: "Chronology",
    explanation: "Complete Mahayuga consists of 4 ages: Satya, Treta, Dvapara, and Kali."
  },
  {
    question: "How do cosmic cycles impact human consciousness?",
    answer: "Each Yuga represents a shift in total cosmic harmony, virtue, and mental clarity.",
    category: "Cosmology",
    explanation: "As cycles progress from Satya to Kali, virtue decreases incrementally."
  }
];

const YUGAS = [
  {
    name: "Satya Yuga",
    years: "1,728,000 Earth Years",
    label: "Age of Truth",
    description: "Golden Age where humanity lives in total harmony with natural laws.",
    dharma: "100% Virtue",
    note: "Highest spiritual awareness."
  },
  {
    name: "Treta Yuga",
    years: "1,296,000 Earth Years",
    label: "Age of Ritual",
    description: "Silver Age marked by the beginning of sacrifice and structured duties.",
    dharma: "75% Virtue",
    note: "Slight decrease in divine alignment."
  },
  {
    name: "Dvapara Yuga",
    years: "864,000 Earth Years",
    label: "Age of Energy",
    description: "Bronze Age where dualities expand and material attachments grow.",
    dharma: "50% Virtue",
    note: "Energy structures and science dominate."
  },
  {
    name: "Kali Yuga",
    years: "432,000 Earth Years",
    label: "Age of Conflict",
    description: "Iron Age characterized by material density, rapid noise, and quick time distortion.",
    dharma: "25% Virtue",
    note: "Current age of spiritual concealment."
  }
];

export default function KaliYugaDrawer({ isOpen, onClose }: DrawerProps) {
  const [activeTab, setActiveTab] = useState<"trivia" | "lore" | "yugas">("trivia");
  const [lore, setLore] = useState<LoreItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    if (activeTab !== "lore") return;

    let isMounted = true;
    
    async function fetchLore() {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8000/api/v1/lore");
        const data = await res.json();
        if (isMounted) {
          setLore(Array.isArray(data) ? data : data.lore || []);
        }
      } catch (err) {
        console.error("Failed to fetch lore:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchLore();

    return () => {
      isMounted = false;
    };
  }, [activeTab]);
  if (!isOpen) return null;

  const currentQuestion = TRETA_DATABASE[currentIndex];

  const handleNextQuestion = () => {
    setCurrentIndex((prev) => (prev + 1) % TRETA_DATABASE.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="flex flex-col justify-between w-full h-full max-w-md p-6 overflow-y-auto border-l bg-slate-950 border-slate-800">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h2 className="font-mono text-xs tracking-widest uppercase text-amber-500">
                Cosmic Chronology
              </h2>
              <h3 className="text-sm font-bold text-slate-100">
                Lore & Treta Hub
              </h3>
            </div>
            <button
              onClick={onClose}
              className="px-2 py-1 font-mono text-xs transition-all border rounded cursor-pointer border-slate-700 hover:border-slate-500 text-slate-300"
            >
              × CLOSE
            </button>
          </div>

          {/* Navigation Switcher */}
          <div className="flex gap-2 mt-4 font-mono text-xs">
            <button
              onClick={() => setActiveTab("trivia")}
              className={`px-3 py-1.5 rounded border transition-all cursor-pointer ${
                activeTab === "trivia"
                  ? "bg-amber-500/20 text-amber-400 border-amber-500/50 font-bold"
                  : "border-slate-800 hover:border-slate-700 text-slate-400"
              }`}
            >
              TRETA GAME
            </button>
            <button
              onClick={() => setActiveTab("lore")}
              className={`px-3 py-1.5 rounded border transition-all cursor-pointer ${
                activeTab === "lore"
                  ? "bg-amber-500/20 text-amber-400 border-amber-500/50 font-bold"
                  : "border-slate-800 hover:border-slate-700 text-slate-400"
              }`}
            >
              LORE
            </button>
            <button
              onClick={() => setActiveTab("yugas")}
              className={`px-3 py-1.5 rounded border transition-all cursor-pointer ${
                activeTab === "yugas"
                  ? "bg-amber-500/20 text-amber-400 border-amber-500/50 font-bold"
                  : "border-slate-800 hover:border-slate-700 text-slate-400"
              }`}
            >
              YUGAS
            </button>
          </div>

          {/* TAB 1: TRETA GAME */}
          {activeTab === "trivia" && (
            <div className="mt-4 space-y-4">
              <div className="p-3 border rounded bg-slate-900/80 border-slate-800">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/70 block">
                  Question {currentIndex + 1} of {TRETA_DATABASE.length}
                </span>
                <h4 className="mt-1 text-sm font-bold text-slate-200">
                  {currentQuestion.question}
                </h4>
              </div>

              <div className="p-3 border rounded bg-slate-900/50 border-slate-800">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  Answer
                </span>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">
                  {currentQuestion.answer}
                </p>
              </div>

              <div className="p-3 border rounded bg-amber-500/5 border-amber-900/30">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/70 block">
                  Explanation
                </span>
                <p className="mt-1 text-xs text-slate-400">
                  {currentQuestion.explanation}
                </p>
              </div>

              <button
                onClick={handleNextQuestion}
                className="w-full py-2 font-mono text-xs font-bold transition-all border rounded cursor-pointer border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400"
              >
                NEXT QUESTION →
              </button>
            </div>
          )}

          {/* TAB 2: LORE */}
          {activeTab === "lore" && (
            <div className="space-y-3 mt-4 max-h-[60vh] overflow-y-auto pr-1">
              {loading ? (
                <p className="font-mono text-xs text-slate-400">Loading cosmic lore...</p>
              ) : lore.length === 0 ? (
                <p className="font-mono text-xs text-slate-500">No lore entries found.</p>
              ) : (
                lore.map((item: LoreItem, idx: number) => (
                  <div key={idx} className="p-3 border rounded bg-slate-900/80 border-slate-800">
                    <h4 className="text-sm font-bold text-amber-400">
                      {item.title || item.question}
                    </h4>
                    {item.category && (
                      <span className="text-[10px] text-amber-500/70 font-mono uppercase tracking-wider block mt-0.5">
                        {item.category}
                      </span>
                    )}
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">
                      {item.content || item.explanation || item.answer}
                    </p>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 3: YUGAS */}
          {activeTab === "yugas" && (
            <div className="mt-4 space-y-3">
              {YUGAS.map((yuga, index) => (
                <div key={index} className="p-3 border rounded bg-slate-900/80 border-slate-800">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-200">{yuga.name}</h4>
                    <span className="text-[10px] font-mono text-amber-400 bg-slate-800 px-2 py-0.5 rounded">
                      {yuga.dharma}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 block">
                    {yuga.years} • {yuga.label}
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    {yuga.description}
                  </p>
                  {yuga.note && (
                    <div className="mt-2 text-[10px] text-slate-400 italic bg-amber-500/5 p-2 rounded border border-amber-900/20">
                      {yuga.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function setSelectedOption(arg0: null) {
  throw new Error("Function not implemented.");
}
