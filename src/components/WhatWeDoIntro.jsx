import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { coreCapabilities } from "../data/tsaData";

export default function WhatWeDoIntro({ navigateTo }) {
  const [activeId, setActiveId] = useState(coreCapabilities[0].id);

  const activeCapability = coreCapabilities.find((c) => c.id === activeId) || coreCapabilities[0];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10"
        >
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Integrated Capabilities &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Operational Event Delivery.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
            From strategic master planning and spatial scenography to sovereign protocol clearance and live 4K telecast, TSA unifies all facets of high-stakes event execution.
          </p>
        </motion.div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-12 items-start">
          
          {/* Left Column: Interactive Capability Index (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10"
          >
            {coreCapabilities.map((item) => {
              const isSelected = item.id === activeId;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`group py-5 px-5 -mx-4 sm:-mx-5 transition-all duration-150 cursor-pointer rounded border-l-2 ${
                    isSelected
                      ? "bg-[#0E2552] border-[#C8102E] text-white"
                      : "border-transparent hover:bg-white/5 text-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 pr-2">
                      <h3 className={`font-heading text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                        isSelected ? "text-white" : "text-slate-100 group-hover:text-white"
                      }`}>
                        {item.title}
                      </h3>

                      <p className="font-sans text-sm text-slate-300 leading-relaxed max-w-xl line-clamp-2">
                        {item.shortDesc}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <span className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors ${
                        isSelected
                          ? "bg-[#C8102E] text-white"
                          : "bg-white/10 text-slate-400 group-hover:bg-white/20 group-hover:text-white"
                      }`}>
                        {isSelected ? "Active View" : "Select"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: Complete Practice Dossier & Specifications (5 cols - Sticky Follow) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#0E2552] border border-white/15 rounded p-5 sm:p-6 shadow-2xl space-y-4"
            >
              {/* Visual Preview Frame */}
              <div className="editorial-image-frame rounded aspect-[16/10] bg-[#050F22] overflow-hidden relative shadow-lg">
                <img
                  src={activeCapability.image}
                  alt={activeCapability.title}
                  key={activeCapability.id}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/40 to-transparent opacity-90 pointer-events-none" />

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="font-heading font-bold text-base sm:text-lg leading-snug">
                    {activeCapability.title}
                  </div>
                  <div className="text-xs font-sans text-slate-300 mt-0.5">
                    Single-Source Turnkey Event Architecture
                  </div>
                </div>
              </div>

              {/* Scope & Description */}
              <div className="space-y-1">
                <div className="font-heading text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Practice Scope &amp; Mandate
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeCapability.shortDesc}
                </p>
              </div>

              {/* Key Deliverables & Verified Outputs */}
              <div className="space-y-2 pt-2.5 border-t border-white/10">
                <div className="text-[11px] font-semibold text-[#C8102E] tracking-wider uppercase">
                  Verified Deliverables &amp; Outputs
                </div>
                <div className="space-y-1.5 text-xs text-slate-200">
                  {activeCapability.deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                      <span className="font-sans leading-snug">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Action Button & Trust Assurance */}
              <div className="pt-2 border-t border-white/10 space-y-2.5">
                <button
                  onClick={() => (navigateTo ? navigateTo("/contact") : null)}
                  className="w-full btn-editorial-red text-xs py-3 px-5 cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Commission This Discipline</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Protocol Cleared · HSSE Certified · Strict NDA</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
