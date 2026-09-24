import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
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
            <span className="font-mono text-xs font-semibold text-[#C8102E] uppercase tracking-wider block">
              OPERATIONAL DISCIPLINES & PRACTICE AREAS
            </span>
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
            {coreCapabilities.map((item, index) => {
              const isSelected = item.id === activeId;
              const num = String(index + 1).padStart(2, "0");
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`group py-6 px-5 -mx-4 sm:-mx-5 transition-all duration-150 cursor-pointer rounded ${
                    isSelected
                      ? "bg-[#0E2552] text-white"
                      : "hover:bg-white/5 text-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#C8102E]">
                          {num}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span className="font-mono text-[11px] font-semibold text-[#C8102E] uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      
                      <h3 className={`font-heading text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                        isSelected ? "text-white" : "text-slate-100 group-hover:text-white"
                      }`}>
                        {item.title}
                      </h3>

                      <p className="font-sans text-sm text-slate-300 leading-relaxed max-w-xl">
                        {item.shortDesc}
                      </p>
                    </div>

                    <div className="shrink-0 pt-1">
                      <span className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors ${
                        isSelected
                          ? "bg-[#C8102E] text-white"
                          : "bg-white/10 text-slate-300 group-hover:bg-white/20 group-hover:text-white"
                      }`}>
                        {isSelected ? "Active View" : "Select"}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Deliverables if Active */}
                  {isSelected && (
                    <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                      {item.deliverables.map((deliv) => (
                        <div key={deliv} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                          <span className="leading-snug">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: Sticky Supporting Preview & Specifications (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-24 space-y-6"
          >
            <div className="editorial-image-frame rounded aspect-[16/11] bg-[#050F22] shadow-xl relative overflow-hidden">
              <img
                src={activeCapability.image}
                alt={activeCapability.title}
                key={activeCapability.id}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/40 to-transparent opacity-90 pointer-events-none" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#050F22]/90 backdrop-blur-xs text-white text-xs font-mono font-semibold rounded border border-white/15 uppercase tracking-wider">
                  {activeCapability.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
                <div className="font-heading font-bold text-base sm:text-lg">
                  {activeCapability.title}
                </div>
                <div className="text-xs font-sans text-slate-300">
                  Orchestrated under strict institutional protocols and single-source accountability.
                </div>
              </div>
            </div>

            {/* Capability Brief Callout */}
            <div className="p-6 bg-[#0E2552] rounded border border-white/10 space-y-3">
              <div className="text-xs font-mono font-semibold text-[#C8102E] uppercase tracking-wider">
                COMMISSIONING THIS PRACTICE
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Our practice directors evaluate physical scenography, security perimeters, simultaneous audio-visual engineering, and attendee flow matched to your organization's milestone.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Headquarters Lead: Central Jakarta</span>
                <button
                  onClick={() => (navigateTo ? navigateTo("/contact") : null)}
                  className="font-semibold text-white hover:text-[#C8102E] transition-colors uppercase tracking-wider cursor-pointer"
                >
                  Inquire Discipline
                </button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
