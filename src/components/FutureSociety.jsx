import React from "react";
import { motion } from "framer-motion";
import { companyInfo } from "../data/tsaData";
import { ArrowDownUp } from "lucide-react";

export default function FutureSociety() {
  return (
    <section id="society" className="py-28 bg-[#071A2B] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag */}
        <div className="font-mono text-xs text-[#42D3A5] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-[#42D3A5]" />
          TSA CORE PHILOSOPHY
        </div>

        {/* Oversized Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F4F6F2] tracking-tighter uppercase leading-[0.92]">
            THE FUTURE IS <br />
            <span className="text-[#155EEF]">BUILT TOGETHER.</span>
          </h2>
        </motion.div>

        {/* Typographic Interconnected Pillars (PEOPLE ↕ TECHNOLOGY ↕ GOVERNMENT ↕ BUSINESS ↕ CREATIVITY) */}
        <div className="border border-white/10 p-8 sm:p-12 bg-white/5 relative rounded-3xl">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
            {companyInfo.societyPillars.map((pillar, idx) => (
              <React.Fragment key={pillar.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 bg-[#071A2B] border border-white/10 hover:border-[#155EEF] transition-all text-center rounded-2xl shadow-lg"
                >
                  <div className="font-mono text-[10px] text-[#42D3A5] uppercase mb-2">
                    PILLAR
                  </div>
                  <div className="font-heading text-xl sm:text-2xl font-extrabold text-white uppercase tracking-wider mb-2">
                    {pillar.title}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {pillar.desc}
                  </div>
                </motion.div>

                {/* Connector Lines */}
                {idx < companyInfo.societyPillars.length - 1 && (
                  <div className="hidden md:flex justify-center text-[#155EEF]">
                    <ArrowDownUp className="w-5 h-5 text-[#2F80FF] rotate-90" />
                  </div>
                )}
                {idx < companyInfo.societyPillars.length - 1 && (
                  <div className="md:hidden flex justify-center py-2 text-[#155EEF]">
                    <ArrowDownUp className="w-5 h-5 text-[#2F80FF]" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Statement Bar Below Diagram */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-400">
            <div>
              <span className="text-[#42D3A5] font-bold">SYSTEMIC ALIGNMENT:</span> TSA builds high-stakes bridges between state policy, digital systems, and cultural resonance.
            </div>
            <div className="text-[#155EEF] font-bold uppercase tracking-widest shrink-0">
              [ FUTURE SOCIETY ]
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
