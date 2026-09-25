import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, ShieldCheck, Video, Megaphone, Scale, CheckCircle2, ChevronRight } from "lucide-react";
import { businessGroupData } from "../data/tsaData";
import gwiPhoto from "../assets/9c3a2a75-3f45-48d6-b86b-43955e71d699 (1).jpg";
import plenaryPhoto from "../assets/DSC08824.JPG";
import aseanPhoto from "../assets/20231130_131733_311.jpg";

const iconMap = {
  ENCHANTE: ShieldCheck,
  "DNA STUDIO": Video,
  GWI: Megaphone,
  GOADV: Scale
};

const visualMap = {
  ENCHANTE: {
    photo: plenaryPhoto,
    caption: "Ambassadorial Gala & Diplomatic Dinners",
    venue: "The Ritz-Carlton Jakarta · Ballroom",
    stats: "12+ Head-of-State Banquets Orchestrated"
  },
  "DNA STUDIO": {
    photo: aseanPhoto,
    caption: "4K Broadcast Suite & Telecast Command",
    venue: "The City Tower 12th Fl · Central Jakarta",
    stats: "2.4M+ Syndicated Broadcast Viewers"
  },
  GWI: {
    photo: gwiPhoto,
    caption: "Civic Scale Assembly & Cultural Activation",
    venue: "National Monument (Monas) Enclosure",
    stats: "45,000+ In-Person Attendees"
  },
  GOADV: {
    photo: plenaryPhoto,
    caption: "Cross-Ministry Regulatory Intelligence",
    venue: "Ministry of Communication & Digital Affairs",
    stats: "14 National Ministries Partnered"
  }
};

export default function BusinessGroupSection({ navigateTo }) {
  const [activeUnitId, setActiveUnitId] = useState("enchante");

  const activeUnit = businessGroupData.find((u) => u.id === activeUnitId) || businessGroupData[0];
  const activeVisual = visualMap[activeUnit.code] || visualMap.ENCHANTE;

  const handleNav = (anchorId) => {
    if (navigateTo) {
      navigateTo("/business-group");
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
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#0E2552]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 pb-8 border-b border-white/10">
          <div className="space-y-4 max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.1]">
              Four Specialized Entities. <br />
              <span className="font-editorial italic font-normal text-slate-200">
                One Integrated Strategic Ecosystem.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Operating under the unified executive governance of PT Tricatha Sempiternal Asia at The City Tower in Central Jakarta, our business group spans haute diplomatic protocol, 4K cinema broadcasting, civic public affairs, and state regulatory intelligence.
            </p>
          </div>

          <button
            onClick={handleFullGroup}
            className="btn-editorial-red shrink-0 self-start lg:self-auto cursor-pointer flex items-center gap-2"
          >
            <span>Explore All Entities</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Practice Selector Strip (Tabs) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {businessGroupData.map((unit) => {
            const isSelected = unit.id === activeUnitId;
            const Icon = iconMap[unit.code] || ShieldCheck;
            return (
              <button
                key={unit.id}
                onClick={() => setActiveUnitId(unit.id)}
                className={`p-4 sm:p-5 text-left rounded border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? "bg-[#0E2552] border-[#C8102E] text-white shadow-lg"
                    : "bg-[#0A1F44] border-white/10 text-slate-300 hover:border-white/25 hover:text-white"
                }`}
              >
                <div className="space-y-1">
                  <div className="font-heading font-bold text-sm sm:text-base text-white">
                    {unit.name}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 truncate max-w-[170px]">
                    {unit.badge}
                  </div>
                </div>

                <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 transition-colors ${
                  isSelected ? "bg-[#C8102E] text-white" : "bg-[#071731] text-slate-400"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Practice Dossier Showcase (Active Entity) */}
        <div className="bg-[#0A1F44] border border-white/15 rounded p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  {activeUnit.name}
                </h3>
                <p className="font-editorial italic text-base sm:text-lg text-slate-200 mt-1">
                  {activeUnit.fullName}
                </p>
              </div>

              <div className="p-4 bg-[#071731] rounded border-l-4 border-[#C8102E] text-sm text-slate-200 leading-relaxed">
                {activeUnit.description}
              </div>

              {/* Core Practice Focus Areas */}
              <div className="space-y-2 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  {activeUnit.focusAreas.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Row */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 font-mono text-xs">
                {activeUnit.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 bg-[#071731] rounded border border-white/10 min-w-[140px]">
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">
                      {m.label}
                    </span>
                    <span className="text-white text-base sm:text-lg font-bold mt-0.5 block">
                      {m.value}
                    </span>
                  </div>
                ))}

                <button
                  onClick={() => handleNav(activeUnit.anchorId)}
                  className="btn-editorial-red text-xs py-2.5 px-5 ml-auto cursor-pointer flex items-center gap-1.5"
                >
                  <span>Commission {activeUnit.code}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Visual Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded p-1.5 bg-[#071731] border border-white/15 shadow-xl">
                {/* Crosshairs */}
                <span className="absolute -top-1 -left-1 text-white/40 font-mono text-[9px]">+</span>
                <span className="absolute -top-1 -right-1 text-white/40 font-mono text-[9px]">+</span>
                <span className="absolute -bottom-1 -left-1 text-white/40 font-mono text-[9px]">+</span>
                <span className="absolute -bottom-1 -right-1 text-white/40 font-mono text-[9px]">+</span>

                <div className="editorial-image-frame rounded aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4] bg-[#050F22] overflow-hidden relative">
                  <img
                    src={activeVisual.photo}
                    alt={`${activeUnit.name} Field Provenance`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050F22] via-transparent to-transparent opacity-85 pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#071731]/95 backdrop-blur-xs rounded border border-white/15 text-white text-xs space-y-1">
                    <div className="font-mono text-[10px] text-slate-400">
                      <span>{activeVisual.venue}</span>
                    </div>
                    <div className="font-heading font-bold text-sm text-white">
                      {activeVisual.caption}
                    </div>
                    <div className="text-[11px] text-slate-300 font-mono">
                      {activeVisual.stats}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Integrated Holding Governance Footnote */}
        <div className="mt-10 p-5 bg-[#0A1F44] rounded border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 bg-[#C8102E] text-white font-bold rounded text-[10px] tracking-wider uppercase">
              HOLDING
            </span>
            <span className="text-white font-semibold">
              PT TRICATHA SEMPITERNAL ASIA
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Executive Holding &amp; Sovereign Strategic Advisory</span>
          </div>

          <button
            onClick={handleFullGroup}
            className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Review Full Group Charter</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#C8102E]" />
          </button>
        </div>

      </div>
    </section>
  );
}
