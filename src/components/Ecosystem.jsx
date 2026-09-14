import React, { useState } from "react";
import { ecosystemNodes } from "../data/tsaData";
import { Target, Cpu, Sparkles, Zap, Film, TrendingUp } from "lucide-react";

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
    <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#0A1F44] border-b border-slate-100">
      <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-slate-100">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium font-heading text-[#0A1F44] tracking-tight leading-tight">
              The TSA Operational Ecosystem
            </h2>
          </div>
          <div className="max-w-md text-slate-600 text-sm font-normal leading-relaxed">
            How advisory, technology, spatial design, activation, and media production flow seamlessly to deliver flawless sovereign execution.
          </div>
        </div>

        {/* Interactive Architecture Flow */}
        <div className="bg-[#F5F6F8] border border-slate-200/80 rounded-lg p-6 sm:p-10 shadow-xs relative">
          
          {/* Flow Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {ecosystemNodes.map((node, index) => {
              const IconComp = iconMap[node.icon] || Target;
              const isSelected = activeNodeIndex === index;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeIndex(index)}
                  className={`p-5 rounded-md cursor-pointer transition-editorial flex flex-col justify-between min-h-[140px] border ${
                    isSelected
                      ? "bg-[#0A1F44] border-[#0A1F44] text-white shadow-md scale-[1.02]"
                      : "bg-[#FFFFFF] border-slate-200/80 hover:border-[#C8102E]/60 text-slate-700 shadow-2xs"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <IconComp className={`w-5 h-5 ${isSelected ? "text-[#C8102E]" : "text-slate-400"}`} />
                    <span className={`font-mono text-[10px] uppercase tracking-wider ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                      0{index + 1}
                    </span>
                  </div>

                  <div className="pt-4">
                    <div className="font-heading text-sm font-medium tracking-tight">
                      {node.name || node.label}
                    </div>
                    <div className={`text-[11px] font-mono mt-0.5 ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                      {node.title || node.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          {ecosystemNodes[activeNodeIndex] && (
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#C8102E] font-medium uppercase tracking-wider">
                  DISCIPLINE {activeNodeIndex + 1} OF {ecosystemNodes.length} · {ecosystemNodes[activeNodeIndex].title || ecosystemNodes[activeNodeIndex].label}
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-medium text-[#0A1F44]">
                  {ecosystemNodes[activeNodeIndex].name || ecosystemNodes[activeNodeIndex].label}
                  {ecosystemNodes[activeNodeIndex].headline && `: ${ecosystemNodes[activeNodeIndex].headline}`}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-3xl leading-relaxed">
                  {ecosystemNodes[activeNodeIndex].description || ecosystemNodes[activeNodeIndex].desc}
                </p>
              </div>

              <div className="shrink-0 font-mono text-xs text-slate-400">
                PT Tricatha Sempiternal Asia
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
