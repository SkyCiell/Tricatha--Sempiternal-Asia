import React, { useState } from "react";
import { motion } from "framer-motion";
import { processSteps } from "../data/tsaData";
import { Search, Compass, Palette, Play, BarChart3, ArrowRight } from "lucide-react";

const stepIcons = [Search, Compass, Palette, Play, BarChart3];

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="approach" className="py-24 bg-[#071A2B] relative border-b border-[#1677FF]/20 tech-dots-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono text-[#20B486] uppercase tracking-[0.25em] mb-2 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#20B486]" />
              OPERATIONAL METHODOLOGY
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F5F7F4] tracking-tight uppercase">
              How TSA <span className="text-[#1677FF]">Works.</span>
            </h2>
          </div>
          <div className="max-w-md text-slate-400 text-sm font-mono">
            A 5-phase strategic framework designed for precision, accountability, and measurable impact.
          </div>
        </div>

        {/* Process Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {processSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 text-left transition-all duration-300 border font-mono text-xs ${
                  isActive
                    ? "bg-[#1677FF] border-[#1677FF] text-white shadow-lg shadow-[#1677FF]/30 font-bold"
                    : "bg-[#0B2238] border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                }`}
              >
                <div className="text-[10px] opacity-75 mb-1">{step.number} //</div>
                <div className="uppercase tracking-widest">{step.step}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Highlight Card */}
        <motion.div
          key={activeStepIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0B2238] border border-[#1677FF]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Stage Number & Icon */}
            <div className="lg:col-span-4 flex items-center gap-6">
              <div className="w-20 h-20 bg-[#071A2B] border border-[#20B486]/40 flex items-center justify-center text-[#20B486] shrink-0">
                {React.createElement(stepIcons[activeStepIndex] || Search, { className: "w-10 h-10" })}
              </div>
              <div>
                <span className="font-mono text-sm font-bold text-[#1677FF]">
                  PHASE {processSteps[activeStepIndex].number}
                </span>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                  {processSteps[activeStepIndex].step}
                </h3>
              </div>
            </div>

            {/* Title & Description */}
            <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <h4 className="text-2xl font-bold text-white mb-3">
                {processSteps[activeStepIndex].title}
              </h4>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {processSteps[activeStepIndex].description}
              </p>

              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#071A2B] border border-[#20B486]/30 text-xs font-mono text-[#20B486]">
                <span className="font-bold text-white">DELIVERABLE:</span>
                <span>{processSteps[activeStepIndex].deliverable}</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Horizontal Process Steps Flow */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((s, idx) => (
            <div
              key={s.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 bg-[#0B2238] border border-white/10 hover:border-[#20B486]/60 cursor-pointer transition-colors ${
                activeStepIndex === idx ? "border-l-4 border-l-[#20B486]" : ""
              }`}
            >
              <div className="font-mono text-xs text-[#20B486] font-bold mb-1">
                {s.number} {s.step}
              </div>
              <div className="text-xs text-slate-300 font-semibold truncate">
                {s.title}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
