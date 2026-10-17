import React from "react";
import { motion } from "framer-motion";
import { companyInfo } from "../data/tsaData";
import AnimatedCounter from "./AnimatedCounter";

export default function ImpactNumbers() {
  return (
    <section className="py-20 sm:py-24 bg-[#071731] text-white border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10"
        >
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Operational Scale &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Industry Milestones.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-300 max-w-md leading-relaxed">
            Every metric reflects actual event milestones delivered across Indonesia's primary convention hubs and international ministerial forums.
          </p>
        </motion.div>

        {/* 4 Metrics Strip (Architectural Telemetry Columns, No Generic Boxed Cards) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
        >
          {companyInfo.statsSummary.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
              }}
              className={`space-y-3 pt-6 sm:pt-0 ${index > 0 ? "sm:pl-8" : ""}`}
            >
              {/* Visually Dominant Metric */}
              <div className="flex items-baseline gap-1">
                <span className={`font-heading text-5xl sm:text-6xl font-bold tracking-tight tabular-nums ${index === 0 ? "text-[#C8102E]" : "text-white"
                  }`}>
                  <AnimatedCounter
                    to={stat.value}
                    duration={1.8}
                    delay={0.15 + index * 0.12}
                  />
                </span>
                <span className="font-heading text-3xl sm:text-4xl font-semibold text-[#C8102E]">
                  {stat.suffix}
                </span>
              </div>

              <div className="space-y-1">
                <div className="font-heading text-base font-bold text-white tracking-tight">
                  {stat.label}
                </div>
                <div className="font-sans text-xs text-slate-300 leading-relaxed max-w-xs">
                  {stat.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Provenance Venues Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate-400"
        >
          <div className="text-slate-300 font-medium">
            TRUSTED VENUE CORRIDORS:
          </div>
          <div className="text-slate-300">
            Jakarta Convention Center (JCC) · ICE BSD City · JIExpo Kemayoran · The Ritz-Carlton · Fairmont Jakarta
          </div>
        </motion.div>

      </div>
    </section>
  );
}
