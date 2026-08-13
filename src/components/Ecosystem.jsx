import React, { useState } from "react";
import { motion } from "framer-motion";
import { ecosystemNodes } from "../data/tsaData";
import { Target, Cpu, Sparkles, Zap, Film, TrendingUp, ArrowDown, ArrowRight } from "lucide-react";

const iconMap = {
  Target: Target,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Zap: Zap,
  Film: Film,
  TrendingUp: TrendingUp
};

export default function Ecosystem() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);

  return (
    <section className="py-24 bg-[#071A2B] relative border-b border-[#1677FF]/20 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono text-[#20B486] uppercase tracking-[0.25em] mb-2 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#20B486]" />
              INTEGRATED ARCHITECTURE
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F5F7F4] tracking-tight uppercase">
              The TSA <span className="text-[#1677FF]">Ecosystem.</span>
            </h2>
          </div>
          <div className="max-w-md text-slate-400 text-sm font-mono">
            How strategy, technology, creative, activation, and production seamlessly flow to generate real-world impact.
          </div>
        </div>

        {/* Modern Interactive Ecosystem Architecture Diagram */}
        <div className="bg-[#0B2238] border border-[#1677FF]/30 p-8 sm:p-12 shadow-2xl relative">
          
          {/* Ecosystem Flow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center relative z-10">
            {ecosystemNodes.map((node, index) => {
              const IconComp = iconMap[node.icon] || Target;
              const isSelected = activeNodeIndex === index;
              const isBlue = node.theme === "blue";

              return (
                <React.Fragment key={node.id}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    onClick={() => setActiveNodeIndex(index)}
                    className={`p-6 border cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[160px] ${
                      isSelected
                        ? isBlue
                          ? "bg-[#1677FF] border-[#1677FF] text-white shadow-lg shadow-[#1677FF]/40"
                          : "bg-[#087F5B] border-[#20B486] text-white shadow-lg shadow-[#20B486]/40"
                        : "bg-[#071A2B] border-white/10 hover:border-white/40 text-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold opacity-75">0{index + 1}</span>
                      <IconComp
                        className={`w-5 h-5 ${
                          isSelected
                            ? "text-white"
                            : isBlue
                            ? "text-[#1677FF]"
                            : "text-[#20B486]"
                        }`}
                      />
                    </div>
                    <div>
                      <div className="font-mono text-xs uppercase tracking-widest font-black mb-1">
                        {node.label}
                      </div>
                      <div className="text-[11px] opacity-80 line-clamp-2">
                        {node.desc}
                      </div>
                    </div>
                  </motion.div>

                  {/* Flow Arrow Connector */}
                  {index < ecosystemNodes.length - 1 && (
                    <div className="hidden md:flex justify-center text-slate-500">
                      <ArrowRight className="w-4 h-4 text-[#20B486] animate-pulse" />
                    </div>
                  )}
                  {index < ecosystemNodes.length - 1 && (
                    <div className="md:hidden flex justify-center py-2 text-slate-500">
                      <ArrowDown className="w-4 h-4 text-[#20B486] animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="mt-12 p-6 bg-[#071A2B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0B2238] border border-[#1677FF]/40 flex items-center justify-center text-[#1677FF] font-mono font-bold text-sm">
                0{activeNodeIndex + 1}
              </div>
              <div>
                <div className="text-xs font-mono text-[#20B486] uppercase tracking-wider">
                  ACTIVE ECOSYSTEM STAGE
                </div>
                <div className="text-lg font-bold text-white uppercase">
                  {ecosystemNodes[activeNodeIndex].label} — {ecosystemNodes[activeNodeIndex].desc}
                </div>
              </div>
            </div>

            <div className="font-mono text-xs text-slate-400">
              Integrated Practice Flow → Continuous Strategic Value Handover
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
