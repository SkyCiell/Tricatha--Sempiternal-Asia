import React from "react";
import { ArrowUpRight, ArrowRight, ShieldCheck, Video, Megaphone, Scale } from "lucide-react";
import { businessGroupData } from "../data/tsaData";

const iconMap = {
  ENCHANTE: ShieldCheck,
  "DNA STUDIO": Video,
  GWI: Megaphone,
  GOADV: Scale
};

export default function BusinessGroupSection({ navigateTo }) {
  const handleNav = (anchorId) => {
    if (navigateTo) {
      navigateTo("/business-group");
      // Optional smooth scroll after page transition
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const handleFullGroup = () => {
    if (navigateTo) navigateTo("/business-group");
  };

  return (
    <section className="py-20 sm:py-28 bg-[#071731] border-b border-white/10 relative overflow-hidden">
      {/* Subtle background ambient line */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 pb-8 border-b border-white/10">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C8102E] tracking-wider uppercase font-semibold">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>TSA BUSINESS GROUP &amp; SUBSIDIARIES</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[42px] font-semibold text-white tracking-tight leading-tight">
              Four Specialized Entities. <br />
              <span className="text-slate-300 font-normal">One Integrated Strategic Ecosystem.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Operating under the unified executive governance of PT Tricatha Sempiternal Asia at The City Tower in Central Jakarta, our business group delivers seamless multi-sector capability spanning haute protocol, cinema-grade broadcasting, civic public affairs, and state regulatory intelligence.
            </p>
          </div>

          <button
            onClick={handleFullGroup}
            className="btn-editorial-red shrink-0 self-start lg:self-auto cursor-pointer"
          >
            <span>Explore Business Group</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Grid - ENCHANTE, DNA STUDIO, GWI, GOADV */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessGroupData.map((unit) => {
            const Icon = iconMap[unit.code] || ShieldCheck;
            return (
              <div
                key={unit.id}
                className="bg-[#0A1F44] border border-white/10 rounded p-6 sm:p-7 flex flex-col justify-between hover:border-white/30 transition-all duration-200 group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Code Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-[#071731] border border-white/15 text-[#C8102E] font-mono text-xs font-bold rounded tracking-wider">
                      {unit.code}
                    </span>
                    <div className="w-9 h-9 rounded bg-[#071731] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-[#C8102E]/50 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white tracking-tight group-hover:text-slate-100 transition-colors">
                      {unit.name}
                    </h3>
                    <p className="font-mono text-xs text-slate-400 mt-1">
                      {unit.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {unit.description}
                  </p>

                  {/* Focus Areas List */}
                  <div className="pt-2 border-t border-white/10 space-y-1.5 font-sans text-xs text-slate-300">
                    {unit.focusAreas.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metrics & Deep Link */}
                <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
                  <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                    {unit.metrics.map((m, idx) => (
                      <div key={idx} className="p-2.5 bg-[#071731] rounded border border-white/10">
                        <span className="text-slate-400 block text-[9px] uppercase tracking-wider">
                          {m.label}
                        </span>
                        <span className="text-white font-semibold text-xs sm:text-sm mt-0.5 block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleNav(unit.anchorId)}
                    className="w-full py-2 px-3 rounded bg-white/5 hover:bg-[#C8102E] text-white border border-white/15 hover:border-[#C8102E] text-xs font-mono font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View {unit.code} Practice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated Ecosystem Footnote */}
        <div className="mt-12 p-6 bg-[#0A1F44] rounded border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#C8102E] text-white font-bold rounded text-[10px]">
              HOLDING
            </span>
            <span>PT TRICATHA SEMPITERNAL ASIA · Executive Holding &amp; Sovereign Advisory</span>
          </div>

          <div className="text-slate-400 flex items-center gap-2">
            <span>Corporate Secretariat: The City Tower, 12th Floor, Jakarta</span>
          </div>
        </div>

      </div>
    </section>
  );
}
