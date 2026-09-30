import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, ShieldCheck, Video, Megaphone, Scale, Check, MapPin, Award } from "lucide-react";
import { businessGroupData } from "../data/tsaData";

const plenaryPhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop";
const aseanPhoto = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop";
const gwiPhoto = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop";

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
    statLabel: "Precedence Record",
    statValue: "12+ Head-of-State Banquets",
    tagline: "Haute Protocol & Diplomatic Banquets"
  },
  "DNA STUDIO": {
    photo: aseanPhoto,
    caption: "4K Broadcast Suite & Telecast Command",
    venue: "The City Tower 12th Fl · Central Jakarta",
    statLabel: "Broadcasting Reach",
    statValue: "2.4M+ Syndicated Viewers",
    tagline: "Creative Broadcast & 4K Cinema Production Suite"
  },
  GWI: {
    photo: gwiPhoto,
    caption: "Civic Scale Assembly & Cultural Activation",
    venue: "Gelora Bung Karno & Monas Enclosure",
    statLabel: "In-Person Scale",
    statValue: "45,000+ Civic Attendees",
    tagline: "Public Affairs & Civic Activations"
  },
  GOADV: {
    photo: plenaryPhoto,
    caption: "Cross-Ministry Regulatory Intelligence",
    venue: "Ministry of Communication & Digital Affairs",
    statLabel: "State Liaison",
    statValue: "14 National Ministries Partnered",
    tagline: "Government Relations & Policy Compliance"
  }
};

export default function BusinessGroupSection({ navigateTo }) {
  const [activeUnitId, setActiveUnitId] = useState("enchante");

  const activeUnit = businessGroupData.find((u) => u.id === activeUnitId) || businessGroupData[0];
  const activeVisual = visualMap[activeUnit.code] || visualMap.ENCHANTE;
  const ActiveIcon = iconMap[activeUnit.code] || ShieldCheck;

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
    <section id="business-group" className="py-20 sm:py-28 bg-[#FFFFFF] text-[#0A1F44] border-b border-[#E2E8F0] relative overflow-hidden">

      {/* Subtle Blue Structural Accent Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-[#EFF6FF] rounded-bl-[80px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F0FDF4]/30 rounded-tr-[80px] pointer-events-none -z-0" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">

        {/* Section Header: Blue & White Corporate Identity */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14 pb-8 border-b border-[#E2E8F0]">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#1E40AF] font-bold uppercase tracking-wider bg-[#EFF6FF] px-3 py-1 rounded border border-[#DBEAFE]">
              <span className="w-2 h-2 rounded-full bg-[#1E40AF] shrink-0" />
              <span className="truncate">TSA OPERATING DIVISIONS</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[46px] font-bold text-[#071731] tracking-tight leading-[1.12]">
              Four Specialized Entities. <br />
              <span className="font-editorial italic font-normal text-[#1E40AF]">
                One Unified Strategic Organization.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
              Headquartered at The City Tower in Central Jakarta, PT Tricatha Sempiternal Asia operates four distinct practice groups spanning sovereign diplomatic protocol, 4K multi-camera broadcast production, civic scale public affairs, and state regulatory intelligence.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleFullDossier}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded bg-[#0A1F44] hover:bg-[#071731] text-white font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase transition-colors cursor-pointer shadow-sm"
            >
              <span>Explore Group Dossier</span>
              <ArrowUpRight className="w-4 h-4 text-white/80" />
            </button>
          </div>
        </div>

        {/* Structured Entity Selector: 4 Crisp Corporate Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {businessGroupData.map((unit) => {
            const isSelected = unit.id === activeUnitId;
            const Icon = iconMap[unit.code] || ShieldCheck;
            return (
              <button
                key={unit.id}
                onClick={() => setActiveUnitId(unit.id)}
                className={`p-4 sm:p-5 text-left rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-between min-h-[72px] ${isSelected
                  ? "bg-[#0A1F44] border-[#0A1F44] text-white shadow-md ring-2 ring-[#1E40AF]/20"
                  : "bg-[#F8FAFC] border-[#E2E8F0] text-slate-700 hover:bg-[#EFF6FF] hover:border-[#BFDBFE]"
                  }`}
              >
                <div className="space-y-0.5">
                  <div className={`font-heading font-bold text-sm sm:text-base tracking-tight ${isSelected ? "text-white" : "text-[#071731]"}`}>
                    {unit.name}
                  </div>
                  <div className={`text-[11px] font-mono truncate max-w-[160px] ${isSelected ? "text-blue-200" : "text-slate-500"}`}>
                    {unit.badge}
                  </div>
                </div>

                <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 transition-colors ${isSelected ? "bg-[#1E40AF] text-white" : "bg-[#FFFFFF] border border-[#CBD5E1] text-[#0A1F44]"
                  }`}>
                  <Icon className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Structured Multi-Content Block Dossier (Not Generic Service Cards) */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Block 1: Left Content Pillar - Mandate, Metrics, and Focus Areas (7 cols) */}
            <div className="lg:col-span-7 space-y-6">

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#1E40AF] uppercase tracking-wider">
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
              <div className="grid grid-cols-2 gap-3 pt-2">
                {activeUnit.metrics && activeUnit.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-lg border border-[#E2E8F0] shadow-2xs">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{metric.label}</div>
                    <div className="text-xl sm:text-2xl font-heading font-bold text-[#071731] mt-0.5">{metric.value}</div>
                  </div>
                ))}
                <div className="bg-white p-3.5 rounded-lg border border-[#E2E8F0] shadow-2xs">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{activeVisual.statLabel}</div>
                  <div className="text-sm sm:text-base font-heading font-bold text-[#1E40AF] mt-1 truncate">{activeVisual.statValue}</div>
                </div>
              </div>

              {/* Operational Focus Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
                  CORE OPERATIONAL DELIVERABLES:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeUnit.focusAreas.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded border border-[#E2E8F0]">
                      <span className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <button
                  onClick={handleConsult}
                  className="btn-editorial-red text-xs py-3 px-6 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Inquire Mandate with {activeUnit.name}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
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
                  <span className="px-3 py-1 bg-[#1E40AF] text-white text-[11px] font-mono font-semibold uppercase tracking-wider rounded shadow-sm">
                    VERIFIED PRODUCTION
                  </span>
                </div>

                {/* Bottom Frame Details */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-blue-200 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>{activeVisual.venue}</span>
                  </div>
                  <div className="text-sm font-heading font-bold text-white leading-snug">
                    {activeVisual.caption}
                  </div>
                </div>
              </div>

              {/* Quick Facility Provenance Strip */}
              <div className="p-4 bg-white rounded-lg border border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#1E40AF]" />
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
