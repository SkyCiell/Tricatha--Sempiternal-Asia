import React from "react";
import { testimonials } from "../data/tsaData";

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-semibold text-[#C8102E] uppercase tracking-wider block">
              STAKEHOLDER GOVERNANCE RECORDS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Executive Feedback &amp; Review
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-300 max-w-sm leading-relaxed">
            Reflections from sovereign delegates, corporate secretaries, and exhibition consortium directors on TSA event delivery.
          </p>
        </div>

        {/* 3 Executive Testimonial Statements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 bg-[#0E2552] rounded border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/20 transition-colors"
            >
              <div className="space-y-4">
                <div className="font-mono text-[10px] text-[#C8102E] uppercase tracking-wider font-semibold">
                  MANDATE: {t.context}
                </div>
                
                <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-1">
                <div className="font-heading text-sm font-bold text-white">
                  {t.author}
                </div>
                <div className="font-mono text-xs text-slate-300">
                  {t.organization}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Post-Event Audit Note */}
        <div className="pt-8 text-center">
          <span className="inline-block text-[11px] font-mono text-slate-400">
            [Post-Event Performance Audits · Executive Secretariat Records]
          </span>
        </div>

      </div>
    </section>
  );
}
