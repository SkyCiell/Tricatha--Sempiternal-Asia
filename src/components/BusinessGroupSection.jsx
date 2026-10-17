import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, Video, Megaphone, Scale, Terminal, UtensilsCrossed, Check, MapPin, Award } from "lucide-react";
import { businessGroupData } from "../data/tsaData";

const techPhoto = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop";
const culinaryPhoto = "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop";
const plenaryPhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop";
const aseanPhoto = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop";
const gwiPhoto = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop";

const iconMap = {
  "TSA TECH": Terminal,
  ENCHANTE: UtensilsCrossed,
  "DNA STUDIO": Video,
  GWI: Megaphone,
  GOADV: Scale
};

const visualMap = {
  "TSA TECH": {
    photo: techPhoto,
    caption: "Purpose-Built Technology for Mission-Critical Operations",
    venue: "Indonesian Law Enforcement Agencies",
    statLabel: "Track Record",
    statValue: "Delivered Since 2018",
    route: "/business-group#tsa-tech"
  },
  ENCHANTE: {
    photo: culinaryPhoto,
    caption: "Thoughtfully Prepared Culinary Products & Catering",
    venue: "Corporate, Social & Private Occasions",
    statLabel: "Occasion Scope",
    statValue: "Corporate, Social & Private",
    route: "/business-group#enchante"
  },
  "DNA STUDIO": {
    photo: aseanPhoto,
    caption: "4K Broadcast Suite & Telecast Command",
    venue: "The City Tower 12th Fl · Central Jakarta",
    statLabel: "Broadcasting Reach",
    statValue: "2.4M+ Syndicated Viewers",
    route: "/business-group#dna-studio"
  },
  GWI: {
    photo: gwiPhoto,
    caption: "Bringing the Right Audience to the Right Experience",
    venue: "National & International Conferences · Business-Matching Forums",
    statLabel: "Target Audience Network",
    statValue: "20,000+ Curated Contacts",
    route: "/business-group#gwi"
  },
  GOADV: {
    photo: plenaryPhoto,
    caption: "Navigating Institutions, Advancing Strategic Objectives",
    venue: "Government Ministries, Public Institutions & Diplomatic Communities",
    statLabel: "Engagement Scope",
    statValue: "Discretion & Institutional Trust",
    route: "/business-group#govadv"
  }
};

export default function BusinessGroupSection({ navigateTo }) {
  const [activeUnitId, setActiveUnitId] = useState("tsa-tech");

  const activeUnit = businessGroupData.find((u) => u.id === activeUnitId) || businessGroupData[0];
  const activeVisual = visualMap[activeUnit.code] || visualMap["TSA TECH"];
  const ActiveIcon = iconMap[activeUnit.code] || Terminal;

  const handleConsult = () => {
    if (navigateTo) {
      navigateTo("/contact");
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFullDossier = () => {
    if (navigateTo) {
      navigateTo("/business-group");
    }
  };

  return (
    <section id="business-group" className="py-16 sm:py-24 bg-[#FAF9F6] text-[#071731] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">

        {/* Section Header: Blue & White Corporate Identity */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12 pb-6 border-b border-[#E2E8F0]">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#071731] font-bold uppercase tracking-wider bg-white px-3 py-1 rounded border border-[#E2E8F0]">
              <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
              <span>TSA OPERATING DIVISIONS · SPECIALIZED PRACTICE GROUPS</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[46px] font-bold text-[#071731] tracking-tight leading-[1.12]">
              Specialized Business Entities. <br />
              <span className="font-editorial italic font-normal text-[#0A1F44]/80">
                One Unified Strategic Organization.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
              Headquartered at The City Tower in Central Jakarta, PT Tricatha Sempiternal Asia operates specialized practice groups spanning mission-critical technology, bespoke food &amp; beverage, 4K broadcast production, experiential event management, and government advisory.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleFullDossier}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <span>Explore Group Dossier</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Structured Entity Selector: Exactly 1 Row of 5 Business Group Cards matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-10 items-stretch">
          {businessGroupData.map((unit) => {
            const isSelected = unit.id === activeUnitId;
            const Icon = iconMap[unit.code] || Terminal;
            return (
              <button
                key={unit.id}
                onClick={() => setActiveUnitId(unit.id)}
                className={`p-4 sm:p-5 text-left rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-between min-h-[88px] sm:min-h-[96px] h-full ${
                  isSelected
                    ? "bg-white border-[#071731] shadow-md ring-1 ring-[#071731]/15 text-[#071731]"
                    : "bg-white/60 border-[#E2E8F0] text-[#475569] hover:bg-white hover:border-slate-400 hover:text-[#071731]"
                }`}
              >
                <div className="space-y-1 pr-2">
                  <div className={`font-heading font-bold text-sm tracking-tight leading-snug ${isSelected ? "text-[#071731]" : "text-[#334155]"}`}>
                    {unit.name}
                  </div>
                  <div className="text-[11px] font-mono text-[#64748B] truncate max-w-[170px]">
                    {unit.badge}
                  </div>
                </div>

                <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 transition-colors ${
                  isSelected ? "bg-[#071731] text-white" : "bg-slate-100 text-[#64748B]"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Structured Multi-Content Block Dossier */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Block 1: Left Content Pillar - Mandate, Metrics, and Focus Areas (7 cols) */}
            <div className="lg:col-span-7 space-y-6">

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#C8102E] uppercase tracking-wider">
                  <ActiveIcon className="w-3.5 h-3.5" />
                  <span>PRACTICE SPECIALIZATION · {activeUnit.badge}</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#071731] tracking-tight leading-tight">
                  {activeUnit.fullName}
                </h3>

                <p className="font-editorial text-base sm:text-lg text-slate-600 italic">
                  "{activeUnit.tagline}"
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {activeUnit.description}
              </p>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {activeUnit.metrics && activeUnit.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-[#FAF9F6] p-3.5 rounded-lg border border-[#E2E8F0] shadow-2xs">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{metric.label}</div>
                    <div className="text-xl sm:text-2xl font-heading font-bold text-[#071731] mt-0.5">{metric.value}</div>
                  </div>
                ))}
                <div className="bg-[#FAF9F6] p-3.5 rounded-lg border border-[#E2E8F0] shadow-2xs">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{activeVisual.statLabel}</div>
                  <div className="text-sm sm:text-base font-heading font-bold text-[#071731] mt-1 truncate">{activeVisual.statValue}</div>
                </div>
              </div>

              {/* Operational Focus Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
                  CORE OPERATIONAL DELIVERABLES:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeUnit.focusAreas.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-[#FAF9F6] p-2.5 rounded border border-[#E2E8F0]">
                      <span className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#071731] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleConsult}
                  className="btn-editorial-red text-xs py-3 px-6 cursor-pointer flex items-center gap-2"
                >
                  <span>Inquire Mandate with {activeUnit.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {activeVisual.route && (
                  <button
                    onClick={() => (navigateTo ? navigateTo(activeVisual.route) : null)}
                    className="px-5 py-3 rounded bg-white hover:bg-slate-50 text-[#071731] border border-[#CBD5E1] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-2 shadow-2xs"
                  >
                    <span>Explore Division Portfolio</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
                  </button>
                )}
              </div>

            </div>

            {/* Block 2: Right Visual Pillar - Verified Facility & Production Scenography (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-[#CBD5E1] bg-[#071731] aspect-[4/3] sm:aspect-[16/11] shadow-lg group">
                <img
                  src={activeVisual.photo}
                  alt={activeUnit.fullName}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/90 via-[#071731]/30 to-transparent pointer-events-none" />

                {/* Floating Venue Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#071731] text-white text-[11px] font-mono font-semibold uppercase tracking-wider rounded shadow-sm border border-white/20">
                    VERIFIED PRODUCTION
                  </span>
                </div>

                {/* Bottom Frame Details */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-200 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>{activeVisual.venue}</span>
                  </div>
                  <div className="text-sm font-heading font-bold text-white leading-snug">
                    {activeVisual.caption}
                  </div>
                </div>
              </div>

              {/* Quick Facility Provenance Strip */}
              <div className="p-4 bg-[#FAF9F6] rounded-lg border border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#071731]" />
                  <span className="font-semibold text-[#071731]">EXECUTIVE INTEGRATION:</span>
                </div>
                <span className="text-slate-500">The City Tower, Jakarta Pusat</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
