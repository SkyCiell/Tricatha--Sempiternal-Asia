import React from "react";
import { trustedPartners } from "../data/tsaData";

export default function ClientsPartnersSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#071731] text-white border-b border-white/10">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Sovereign &amp; Enterprise Sectors
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-300 max-w-md leading-relaxed">
            Delivering high-stakes assemblies and commercial trade expositions in coordination with government ministries, listed holdings, and bilateral trade missions.
          </p>
        </div>

        {/* Corporate Trust Network Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {trustedPartners.map((item) => (
            <div
              key={item.name}
              className="p-6 bg-[#0A1F44] rounded border border-white/10 flex flex-col justify-between space-y-4 hover:border-white/25 transition-colors"
            >
              <div className="space-y-2">
                <div className="font-heading text-lg font-bold text-white leading-snug">
                  {item.name}
                </div>
              </div>

              <div className="pt-3 border-t border-white/8 font-sans text-xs text-slate-300">
                {item.scope}
              </div>
            </div>
          ))}
        </div>

        {/* Non-Disclosure and Governance Covenant Note */}
        <div className="mt-10 p-4 bg-[#050F22] rounded border border-white/8 text-center text-xs font-mono text-slate-400">
          Individual sovereign treaties, state ministerial details, and non-public enterprise contracts are held under strict non-disclosure covenants.
        </div>

      </div>
    </section>
  );
}
