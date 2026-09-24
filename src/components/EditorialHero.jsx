import React from "react";
import { motion } from "framer-motion";
import aseanHeroPhoto from "../assets/20231130_131733_311.jpg";
import AnimatedCounter from "./AnimatedCounter";

const CORE_MANDATES = [
  {
    title: "Commercial Trade Expos",
    venue: "ICE BSD & JIExpo Kemayoran",
    detail: "Multi-hall spatial architecture, 200+ enterprise pavilions, hosted buyer lounges"
  },
  {
    title: "Sovereign Plenaries",
    venue: "Jakarta Convention Center (JCC)",
    detail: "Head-of-state diplomatic protocol, bilateral negotiation rooms, simultaneous translation"
  },
  {
    title: "Corporate Conventions",
    venue: "Fairmont & The Ritz-Carlton",
    detail: "Audited hybrid electronic voting, executive assemblies, flagship shareholder AGMs"
  },
  {
    title: "DNA Studio Broadcast",
    venue: "The City Tower Studio & Live Feeds",
    detail: "4K multi-camera broadcast cinema, kinetic stage lighting, immersive scenography"
  }
];

export default function EditorialHero({ onExploreWork, onLetsTalk }) {
  const handleScrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative bg-[#071731] text-white pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 border-b border-white/10 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authoritative Editorial Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Institutional Location Bar */}
            <div className="flex items-center gap-3 text-xs font-mono text-slate-300 tracking-wider uppercase">
              <span className="w-2 h-2 bg-[#C8102E] shrink-0" />
              <span className="font-semibold text-white">THE CITY TOWER, JAKARTA</span>
              <span className="text-white/20">/</span>
              <span className="text-slate-400">SOUTHEAST ASIAN OPERATIONS</span>
            </div>

            {/* Clear Primary Headline */}
            <div className="space-y-4">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.08]">
                Strategic Business Events, Sovereign Plenaries, and Monumental Exhibitions.
              </h1>
              
              <p className="font-sans text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                PT Tricatha Sempiternal Asia delivers end-to-end event strategy, trade exhibitions, ministerial conferences, and high-stakes corporate experiences across Indonesia and the ASEAN corridor.
              </p>
            </div>

            {/* Direct Action Triggers */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onExploreWork ? onExploreWork : () => handleScrollTo("#projects")}
                className="btn-editorial-red text-xs sm:text-sm py-3 px-6 cursor-pointer"
              >
                <span>Examine Case Records</span>
              </button>

              <button
                onClick={onLetsTalk ? onLetsTalk : () => handleScrollTo("#contact")}
                className="btn-editorial-outline text-xs sm:text-sm py-3 px-6 cursor-pointer"
              >
                <span>Consult Event Directors</span>
              </button>
            </div>

            {/* Operational Metrics Sub-Bar */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <div className="text-slate-400 text-[10px] uppercase">EXPERIENCE</div>
                <div className="text-base font-bold text-white mt-0.5 tabular-nums">
                  <AnimatedCounter to={8} duration={1.6} delay={0.2} />+ Years
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Field Track Record</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase">DELIVERY</div>
                <div className="text-base font-bold text-white mt-0.5 tabular-nums">
                  <AnimatedCounter to={120} duration={1.8} delay={0.3} />+ Events
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Tier-1 Conventions</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase">ATTENDEES</div>
                <div className="text-base font-bold text-[#C8102E] mt-0.5 tabular-nums">
                  <AnimatedCounter to={85000} duration={2} delay={0.4} />+
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Delegates &amp; Visitors</div>
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase">PROTOCOL</div>
                <div className="text-base font-bold text-white mt-0.5">Sovereign</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Clearance Standard</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Event Photography & Caption (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="editorial-image-frame rounded aspect-[4/5] sm:aspect-[3/4] bg-[#050F22] shadow-xl relative">
              <img
                src={aseanHeroPhoto}
                alt="ASEAN Strategic Diplomacy Plenary organized by TSA at Jakarta Convention Center"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-85 pointer-events-none" />

              {/* Verified Event Record Plaque */}
              <div className="absolute bottom-5 left-5 right-5 p-5 bg-[#0A1F44]/95 border border-white/15 rounded text-white text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[#C8102E] font-semibold font-mono text-[10px] uppercase tracking-wider">
                    DOCUMENTED EVENT RECORD
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">JCC SENAYAN, JAKARTA</span>
                </div>
                
                <div className="font-heading font-bold text-white text-sm sm:text-base">
                  ASEAN Strategic Diplomacy Plenary
                </div>
                
                <p className="text-slate-300 text-xs font-sans leading-relaxed">
                  18 Head-of-State Delegations · Secure Seating Precedence · Simultaneous Encrypted Interpretation · Zero-Downtime Telemetry
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4 Core Mandates Sub-Grid */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_MANDATES.map((mandate) => (
            <div
              key={mandate.title}
              className="p-5 bg-[#0A1F44]/60 border border-white/8 rounded space-y-2 hover:border-white/20 transition-colors"
            >
              <div className="text-[11px] font-mono text-[#C8102E] uppercase font-semibold">
                {mandate.venue}
              </div>
              <div className="font-heading font-bold text-sm text-white">
                {mandate.title}
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {mandate.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
