import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import aseanHeroPhoto from "../assets/20231130_131733_311.jpg";
import AnimatedCounter from "./AnimatedCounter";

const CORE_MANDATES = [
  {
    code: "MICE-01",
    title: "Commercial Trade Expos",
    venue: "ICE BSD & JIExpo Kemayoran",
    detail: "Multi-hall spatial floor architecture, 200+ enterprise pavilions, hosted buyer lounges, and trade matchmaking."
  },
  {
    code: "PLN-02",
    title: "Sovereign Plenaries",
    venue: "Jakarta Convention Center (JCC)",
    detail: "Head-of-state diplomatic protocol, bilateral negotiation suites, simultaneous encrypted translation, and motorcades."
  },
  {
    code: "CORP-03",
    title: "Corporate Conventions",
    venue: "Fairmont & The Ritz-Carlton",
    detail: "Audited hybrid electronic voting, executive assemblies, flagship shareholder AGMs, and confidential covenants."
  },
  {
    code: "DNA-04",
    title: "DNA Studio Broadcast",
    venue: "The City Tower Studio & Live Feeds",
    detail: "4K multi-camera broadcast cinema, kinetic stage lighting, immersive scenography, and syndicated live feeds."
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
    <section className="relative bg-[#071731] text-white pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 border-b border-white/10 overflow-hidden">
      {/* Background Architectural Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#C8102E]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0E2552]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Operational Coordinates Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-300 pb-8 border-b border-white/10 mb-10">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="font-semibold text-white tracking-wider uppercase">
              JAKARTA HEADQUARTERS
            </span>
            <span className="text-white/25">/</span>
            <span className="text-slate-300">THE CITY TOWER, 12TH FLOOR</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="hidden sm:inline">6°11'58.2"S 106°49'26.4"E</span>
            <span className="w-px h-3 bg-white/15 hidden sm:inline" />
            <span className="text-slate-300">ASEAN STRATEGIC CORRIDOR</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Authoritative Editorial Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Primary Headline with Editorial Serif Accent */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A1F44] border border-white/15 text-[11px] font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>UNIFIED EVENT GOVERNANCE &amp; PRACTICE</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-bold text-white tracking-tight leading-[1.07]">
                Strategic Business Events, <br />
                <span className="font-editorial italic font-normal text-slate-200">
                  Sovereign Plenaries,
                </span>{" "}
                &amp; Monumental Expos.
              </h1>
              
              <p className="font-sans text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
                PT Tricatha Sempiternal Asia delivers end-to-end event strategy, international trade expositions, ministerial conferences, and high-stakes corporate assemblies across Indonesia and the Southeast Asian corridor.
              </p>
            </div>

            {/* Direct Action Triggers */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onExploreWork ? onExploreWork : () => handleScrollTo("#projects")}
                className="btn-editorial-red text-xs sm:text-sm py-3 px-6 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Examine Case Records</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onLetsTalk ? onLetsTalk : () => handleScrollTo("#contact")}
                className="btn-editorial-navy text-xs sm:text-sm py-3 px-6 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Consult Event Directorate</span>
                <Calendar className="w-4 h-4 text-slate-300" />
              </button>
            </div>

            {/* Operational Metrics Sub-Bar */}
              <div className="p-3 bg-[#0A1F44]/50 border border-white/10 rounded">
                <div className="text-slate-400 text-[10px] uppercase tracking-wider">TRACK RECORD</div>
                <div className="text-lg font-bold text-white mt-1 tabular-nums">
                  <AnimatedCounter to={8} duration={1.6} delay={0.2} />+ Years
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Continuous Operation</div>
              </div>
              <div className="p-3 bg-[#0A1F44]/50 border border-white/10 rounded">
                <div className="text-slate-400 text-[10px] uppercase tracking-wider">DELIVERY</div>
                <div className="text-lg font-bold text-white mt-1 tabular-nums">
                  <AnimatedCounter to={120} duration={1.8} delay={0.3} />+ Events
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Tier-1 Conventions</div>
              </div>
              <div className="p-3 bg-[#0A1F44]/50 border border-white/10 rounded">
                <div className="text-slate-400 text-[10px] uppercase tracking-wider">DELEGATES</div>
                <div className="text-lg font-bold text-[#FFFFFF] mt-1 tabular-nums">
                  <AnimatedCounter to={85000} duration={2} delay={0.4} />+
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Verified Participants</div>
              </div>
              <div className="p-3 bg-[#0A1F44]/50 border border-white/10 rounded">
                <div className="text-slate-400 text-[10px] uppercase tracking-wider">PROTOCOL</div>
                <div className="text-lg font-bold text-[#C8102E] mt-1">100% Zero-Fault</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Sovereign Clearance</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Event Photography with Architectural Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Architectural Frame with Corner Crosshairs */}
            <div className="relative rounded p-1.5 bg-[#0A1F44] border border-white/15 shadow-2xl">
              
              {/* Corner crosshairs */}
              <span className="absolute -top-1.5 -left-1.5 text-white/40 font-mono text-[10px] leading-none select-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-white/40 font-mono text-[10px] leading-none select-none">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-white/40 font-mono text-[10px] leading-none select-none">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-white/40 font-mono text-[10px] leading-none select-none">+</span>

              <div className="editorial-image-frame rounded aspect-[4/5] sm:aspect-[3/4] bg-[#050F22] overflow-hidden relative">
                <img
                  src={aseanHeroPhoto}
                  alt="ASEAN Strategic Diplomacy Plenary organized by TSA at Jakarta Convention Center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050F22] via-transparent to-transparent opacity-90 pointer-events-none" />

                {/* Top Badge: Verified Protocol Record */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#071731]/90 backdrop-blur-xs border border-white/15 text-[10px] font-mono text-white font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                    <span>SOVEREIGN PLENARY ACCREDITED</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/60 font-mono text-[10px] text-slate-300">
                    JCC SENAYAN
                  </span>
                </div>

                {/* Verified Event Record Lower Plaque */}
                <div className="absolute bottom-4 left-4 right-4 p-5 bg-[#071731]/95 backdrop-blur-sm border border-white/15 rounded text-white text-xs space-y-2">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[#C8102E] font-semibold font-mono text-[10px] uppercase tracking-wider">
                      VERIFIED CASE ARCHIVE
                    </span>
                    <span className="text-slate-400 font-mono text-[10px]">TIER-1 MULTILATERAL</span>
                  </div>
                  
                  <div className="font-heading font-bold text-white text-sm sm:text-base leading-snug">
                    ASEAN Strategic Diplomacy Plenary
                  </div>
                  
                  <p className="text-slate-300 text-xs font-sans leading-relaxed">
                    18 Head-of-State Delegations, secure precedence seating etiquette, simultaneous multi-channel audio translation, and zero-downtime telemetry.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4 Core Mandates Sub-Grid */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
              OPERATIONAL PORTFOLIO DISCIPLINES
            </span>
            <span className="font-mono text-xs text-[#C8102E] font-medium">
              4 CORE MANDATES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_MANDATES.map((mandate) => (
              <div
                key={mandate.code}
                className="p-5 bg-[#0A1F44] border border-white/10 rounded space-y-2.5 hover:border-white/30 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#C8102E] font-bold tracking-wider">
                    {mandate.code}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 truncate max-w-[150px]">
                    {mandate.venue}
                  </span>
                </div>

                <div className="font-heading font-bold text-base text-white group-hover:text-slate-100 transition-colors">
                  {mandate.title}
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {mandate.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
