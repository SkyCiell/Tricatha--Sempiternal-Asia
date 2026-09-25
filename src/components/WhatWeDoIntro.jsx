import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { coreCapabilities } from "../data/tsaData";
import ServiceModal from "./ServiceModal";

export default function WhatWeDoIntro({ navigateTo }) {
  const [selectedCapability, setSelectedCapability] = useState(null);

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
            From strategic master planning and spatial scenography to sovereign protocol clearance and live 4K telecast, TSA unifies all facets of high-stakes event execution. Click any discipline to inspect technical deliverables and visual records.
          </p>
        </motion.div>

        {/* 2-Column Responsive Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-10">
          {coreCapabilities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedCapability(item)}
              className="bg-[#0E2552] border border-white/12 hover:border-[#C8102E]/60 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer group hover:bg-[#122e63] shadow-lg hover:shadow-2xl"
            >
              <div>
                {/* Category & Action Cue */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C8102E]">
                    {item.category || "Turnkey Discipline"}
                  </span>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                    <span>View Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C8102E]" />
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                {/* Short Description */}
                <p className="font-sans text-sm text-slate-300 leading-relaxed mb-5 line-clamp-2">
                  {item.shortDesc}
                </p>
              </div>

              {/* Bottom: Deliverables Preview Badges & Footer */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {item.deliverables.slice(0, 2).map((deliv) => (
                    <span
                      key={deliv}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-[#071731] border border-white/10 px-2.5 py-1 rounded"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#C8102E] shrink-0" />
                      <span className="truncate max-w-[200px]">{deliv}</span>
                    </span>
                  ))}
                  {item.deliverables.length > 2 && (
                    <span className="text-xs text-slate-400 self-center font-mono">
                      +{item.deliverables.length - 2} more outputs
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                    Click to view full photo &amp; specifications
                  </span>
                  <span className="text-[#C8102E] font-semibold flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Popup for Selected Capability */}
      {selectedCapability && (
        <ServiceModal
          service={selectedCapability}
          onClose={() => setSelectedCapability(null)}
          onSelectContact={() => (navigateTo ? navigateTo("/contact") : null)}
        />
      )}
    </section>
  );
}
