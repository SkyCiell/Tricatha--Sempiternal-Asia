import React from "react";
import { motion } from "framer-motion";
import { approachStages } from "../data/tsaData";

export default function Approach() {
  return (
    <section id="approach" className="py-28 bg-[#0B0F17] text-[#F8FAFC] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-[#3B82F6] uppercase tracking-widest mb-2">
              METHODOLOGY & PRACTICE
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#F8FAFC]">
              STRATEGIC APPROACH
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-normal max-w-md">
            A disciplined, protocol-cleared framework for delivering sovereign policy, technology systems, and media engagements.
          </p>
        </div>

        {/* Clean Editorial Stages List */}
        <div className="space-y-4">
          {approachStages.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 sm:p-8 bg-[#111827] border border-slate-800 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              {/* Stage Name & Subtitle */}
              <div className="md:w-5/12">
                <span className="font-mono text-[11px] text-[#3B82F6] font-semibold uppercase tracking-wider block mb-1">
                  {stage.subtitle}
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#F8FAFC] uppercase tracking-tight">
                  {stage.stage}
                </h3>
              </div>

              {/* Description */}
              <div className="md:w-7/12">
                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
