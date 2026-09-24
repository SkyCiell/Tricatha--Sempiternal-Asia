import React from "react";
import { companyInfo } from "../data/tsaData";

export default function ImpactNumbers() {
  return (
    <section className="py-20 sm:py-24 bg-[#0A1F44] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-semibold text-[#C8102E] uppercase tracking-wider block">
              VERIFIED OPERATIONAL REACH
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Operational Scale &amp; Proven Impact
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-300 max-w-md leading-relaxed">
            Every metric reflects actual event milestones delivered across Indonesia's primary convention hubs and international ministerial forums.
          </p>
        </div>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {companyInfo.statsSummary.map((stat, index) => (
            <div
              key={stat.id}
              className="p-8 bg-[#0E2552] border border-white/10 rounded space-y-4 hover:border-white/20 transition-colors"
            >
              {/* Visually Dominant Metric */}
              <div className="flex items-baseline gap-1">
                <span className={`font-heading text-5xl sm:text-6xl font-bold tracking-tight ${
                  index === 0 ? "text-[#C8102E]" : "text-white"
                }`}>
                  {stat.value}
                </span>
                <span className="font-heading text-3xl sm:text-4xl font-semibold text-[#C8102E]">
                  {stat.suffix}
                </span>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-white/10">
                <div className="font-heading text-base font-bold text-white">
                  {stat.label}
                </div>
                <div className="font-sans text-xs text-slate-300 leading-relaxed">
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Provenance Venues Strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
            <span className="text-slate-200 font-semibold uppercase">ACCREDITED FIELD VENUES:</span>
          </div>
          <div className="text-slate-300">
            Jakarta Convention Center (JCC) · ICE BSD City · JIExpo Kemayoran · The Ritz-Carlton · Fairmont Jakarta
          </div>
        </div>

      </div>
    </section>
  );
}
