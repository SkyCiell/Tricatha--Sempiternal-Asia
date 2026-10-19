import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, Compass, Users2, Landmark, GraduationCap, Radio, CheckCircle2, MapPin, Award } from "lucide-react";
import { activitiesData } from "../data/tsaData";

const activityIconMap = {
  "act-team-building": Users2,
  "act-civic-heritage": Landmark,
  "act-academic-fellowship": GraduationCap,
  "act-thought-dialogues": Radio
};

const activityTabTitles = {
  "act-team-building": (
    <>
      Executive Immersion &amp; <br className="hidden sm:inline" />Strategic Team Building
    </>
  ),
  "act-civic-heritage": (
    <>
      Civic &amp; Cultural Public <br className="hidden sm:inline" />Heritage Activations
    </>
  ),
  "act-academic-fellowship": (
    <>
      University Talent &amp; <br className="hidden sm:inline" />Apprenticeship Fellowship
    </>
  ),
  "act-thought-dialogues": (
    <>
      Cross-Border Thought <br className="hidden sm:inline" />Leadership Roundtables
    </>
  )
};

export default function ActivitiesSection({ navigateTo, onOpenWorkModal }) {
  const [activeActivityId, setActiveActivityId] = useState("act-team-building");

  const activeActivity = activitiesData.find((a) => a.id === activeActivityId) || activitiesData[0];
  const ActiveIcon = activityIconMap[activeActivity.id] || Compass;

  const handlePartnerInquiry = () => {
    if (onOpenWorkModal) {
      onOpenWorkModal();
    } else if (navigateTo) {
      navigateTo("/contact");
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="activities" className="py-20 sm:py-28 bg-[#FAF9F6] text-[#071731] border-b border-[#E2E8F0] relative overflow-hidden">

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">

        {/* Section Header: Warm Off-White Editorial Magazine Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-[#E2E8F0]">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[46px] font-bold text-[#071731] tracking-tight leading-[1.12]">
              Corporate Activities, <br />
              <span className="font-editorial italic font-normal text-[#0A1F44]/80">
                Collaborative Programs &amp; Initiatives.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed font-normal pt-1">
              Beyond event day management, TSA spearheads nationwide civic activations, executive leadership immersions, academic talent fellowships with leading universities, and cross-border thought leadership dialogues.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePartnerInquiry}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* 1. Interactive 4-Pillar Track Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 mb-10 items-stretch">
          {activitiesData.map((act) => {
            const isSelected = act.id === activeActivityId;
            const Icon = activityIconMap[act.id] || Compass;

            return (
              <button
                key={act.id}
                onClick={() => setActiveActivityId(act.id)}
                className={`p-4 sm:p-5 text-left rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-between min-h-[88px] sm:min-h-[96px] h-full ${isSelected
                    ? "bg-white border-[#071731] shadow-md ring-1 ring-[#071731]/15 text-[#071731]"
                    : "bg-white/60 border-[#E2E8F0] text-[#475569] hover:bg-white hover:border-slate-400 hover:text-[#071731]"
                  }`}
              >
                <div className="space-y-1 pr-2">
                  <div className={`font-heading font-bold text-sm tracking-tight leading-snug ${isSelected ? "text-[#071731]" : "text-[#334155]"}`}>
                    {activityTabTitles[act.id] || act.title}
                  </div>
                  <div className="text-[11px] font-mono text-[#64748B] truncate max-w-[170px]">
                    {act.badge} · {act.year}
                  </div>
                </div>

                <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 transition-colors ${isSelected ? "bg-[#C8102E] text-white" : "bg-slate-100 text-[#64748B]"
                  }`}>
                  <Icon className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* 2. FULLSCREEN 100vw × 100vh CINEMATIC INITIATIVE SCENE */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 h-screen overflow-hidden bg-[#071731] my-4 select-none">
        
        {/* Fullscreen Photo (Edge-to-Edge 100vw × 100vh) */}
        <img
          src={activeActivity.image}
          alt={activeActivity.title}
          className="w-full h-full object-cover object-center scale-102 will-change-transform"
        />

        {/* Directional Cinematic Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/65 via-50% to-[#071731]/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/45 to-transparent pointer-events-none" />

        {/* Typography Positioned Directly Over Media */}
        <div className="absolute inset-0 p-6 sm:p-12 lg:p-16 flex flex-col justify-between z-10 text-white">
          
          {/* Top Bar Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#C8102E] text-white font-semibold uppercase tracking-wider rounded text-[11px] shadow-md flex items-center gap-1.5">
                <ActiveIcon className="w-3.5 h-3.5" />
                <span>{activeActivity.category}</span>
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-xs text-slate-200 border border-white/20 rounded text-[11px] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>{activeActivity.location}</span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <Award className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>ACTIVE PROGRAM FRAMEWORK · {activeActivity.year}</span>
            </div>
          </div>

          {/* Main Editorial Story Composition Over Media */}
          <div className="max-w-4xl space-y-5 my-auto">
            <div className="space-y-1">
              <span className="text-[#C8102E] font-mono text-xs uppercase tracking-widest font-semibold block">
                PARTNER / INSTITUTIONAL MANDATE: {activeActivity.partnerOrClient}
              </span>
              <h3 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-lg">
                {activeActivity.title}
              </h3>
            </div>

            <p className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl drop-shadow-md">
              {activeActivity.description}
            </p>

            {/* Verified Activity Metrics Directly Over Media */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 border-t border-white/15 max-w-2xl">
              {activeActivity.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{metric.label}</div>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">{metric.value}</div>
                </div>
              ))}
            </div>

            {/* Direct Action Over Media */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <button
                onClick={handlePartnerInquiry}
                className="btn-editorial-red text-xs py-3 px-6 cursor-pointer flex items-center gap-2 shadow-xl"
              >
                <span>Inquire Program Collaboration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Bar Info Over Media */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/10 pt-3">
            <span>SUBTITLE: {activeActivity.subtitle}</span>
            <span>CENTRAL INITIATIVE: PT TRICATHA SEMPITERNAL ASIA</span>
          </div>

        </div>

      </div>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">

        {/* 3. Academic & Institutional Collaborations Strip */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="font-heading text-lg font-bold text-[#071731]">
                Institutional Partnerships Across Public &amp; Private Sectors
              </h4>
            </div>
            <span className="text-xs font-mono text-[#64748B]">Jakarta · Bandung · Bogor · ASEAN</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-lg border border-[#E2E8F0] shadow-xs space-y-2">
              <div className="text-xs font-mono font-semibold text-[#C8102E] uppercase">
                ACADEMIC &amp; TALENT ALLIANCE
              </div>
              <div className="font-heading font-bold text-sm text-[#071731]">
                University Apprenticeship Consortium
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Direct MICE protocol and 4K broadcast apprenticeships with top national universities (UI, ITB, UGM, Unpad) training future summit directors.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-[#E2E8F0] shadow-xs space-y-2">
              <div className="text-xs font-mono font-semibold text-[#C8102E] uppercase">
                ENTERPRISE OFF-SITES &amp; SYNERGY
              </div>
              <div className="font-heading font-bold text-sm text-[#071731]">
                BP TAPERA &amp; Corporate Immersions
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Strategic retreats in Ciwidey and Bogor blending executive decision-making challenges with outdoor resilience and team cohesion drills.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-[#E2E8F0] shadow-xs space-y-2">
              <div className="text-xs font-mono font-semibold text-[#C8102E] uppercase">
                CIVIC CULTURAL SCALE
              </div>
              <div className="font-heading font-bold text-sm text-[#071731]">
                GWI Heritage Activations
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Engaging over 45,000 citizens through architectural projection mapping and digital heritage preservation at GBK Arena and national monuments.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
