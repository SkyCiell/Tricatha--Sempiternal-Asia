import React, { useState } from "react";
import { strategicEngagementProcess } from "../data/tsaData";
import { ArrowUpRight, CheckCircle2, ShieldAlert } from "lucide-react";

export default function StrategicEngagement({ scrollToSection }) {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = strategicEngagementProcess[activeStep];

  return (
    <section id="engagement" className="py-20 sm:py-28 bg-[#071A33] text-white border-b border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 font-display text-[22vw] font-black text-white leading-none">
        MANDATE
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-white/10 gap-6">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
              STRATEGIC ENGAGEMENT <br />
              <span className="text-[#C62828]">PROCESS.</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-[#CBD5E1] leading-relaxed">
            Every sovereign advisory, diplomatic summit, and public affairs mandate follows our protocol-cleared lifecycle—ensuring multi-stakeholder consensus and zero margin for error.
          </p>
        </div>

        {/* 1. Five Dense Architectural Cards (MAIN EO Grid Layout) */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {strategicEngagementProcess.map((item, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#0B1F3A] border-[#C62828] shadow-2xl translate-y--2"
                    : "bg-[#0B1F3A]/40 border-white/10 hover:border-white/30 hover:bg-[#0B1F3A]/70"
                }`}
              >
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold ${isSelected ? "text-[#C62828]" : "text-[#94A3B8]"}`}>
                      METHODOLOGY
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#C62828] animate-ping" />
                    )}
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
                      {item.phase}
                    </h3>
                    <div className="font-mono text-[10px] text-[#C62828] font-bold uppercase mt-1">
                      {item.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-[#CBD5E1] leading-relaxed line-clamp-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 relative z-10 flex items-center justify-between text-xs font-mono">
                  <span className={isSelected ? "text-white font-bold" : "text-[#94A3B8]"}>
                    {isSelected ? "ACTIVE PHASE" : "INSPECT"}
                  </span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isSelected ? "text-[#C62828]" : "text-[#94A3B8]"}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Deep Operational Inspection Drawer for the Selected Phase */}
        <div className="mt-12 bg-[#0B1F3A] border border-white/15 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-3 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <div className="font-mono text-xs text-[#C62828] font-bold uppercase tracking-widest">
                PHASE DEEP DIVE
              </div>
              <h3 className="font-display text-3xl font-black uppercase text-white">
                {currentStep.phase}
              </h3>
              <p className="text-xs font-mono text-[#CBD5E1]">
                {currentStep.subtitle}
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#94A3B8]">
                Clearance: Ministerial liaison standard &amp; strict confidentiality covenants.
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 lg:px-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-bold">
                CORE PROTOCOLS &amp; DELIVERABLES
              </div>
              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                {currentStep.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#C62828]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Executive Steering Committee Signed Ledger</span>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-center items-start lg:items-end gap-3 pt-4 lg:pt-0">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-6 py-3 bg-[#C62828] hover:bg-white hover:text-[#071A33] text-white font-mono font-bold text-xs uppercase tracking-widest rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>DISCUSS THIS PROCESS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono text-[#94A3B8]">
                Protocol Verified · The City Tower HQ
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
