import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, Compass, Users2, Landmark, GraduationCap, Radio, CheckCircle2, MapPin, Award } from "lucide-react";
import { activitiesData } from "../data/tsaData";

const activityIconMap = {
  "act-team-building": Users2,
  "act-civic-heritage": Landmark,
  "act-academic-fellowship": GraduationCap,
  "act-thought-dialogues": Radio
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
    <section id="activities" className="py-20 sm:py-28 bg-[#F6F6F2] text-[#0F172A] border-b border-[#E5E5DE] relative overflow-hidden">

      {/* Subtle Warm Tone Structural Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FAF7EE] rounded-br-[100px] pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EEF2F6] rounded-tl-[100px] pointer-events-none -z-0" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">

        {/* Section Header: Warm Off-White Editorial Magazine Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-[#E5E5DE]">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] tracking-tight leading-[1.12]">
              Corporate Activities &{" "}
              <span className="font-editorial italic font-normal text-[#1E3A8A]">
                Collaborative Programs &amp; Initiatives.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
              Beyond event day management, TSA spearheads nationwide civic activations, executive leadership immersions, academic talent fellowships with leading universities, and cross-border thought leadership dialogues.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={handlePartnerInquiry}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded bg-[#0F172A] hover:bg-[#1E293B] text-white font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase transition-colors cursor-pointer shadow-sm w-full sm:w-auto"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-4 h-4 text-white/80 shrink-0" />
            </button>
          </div>
        </div>

        {/* 1. Interactive 4-Pillar Track Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 mb-8">
          {activitiesData.map((act) => {
            const isSelected = act.id === activeActivityId;
            const Icon = activityIconMap[act.id] || Compass;

            return (
              <button
                key={act.id}
                onClick={() => setActiveActivityId(act.id)}
                className={`p-4 sm:p-5 text-left rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-between min-h-[76px] ${isSelected
                    ? "bg-white border-[#0F172A] shadow-md ring-2 ring-[#0F172A]/10 text-[#0F172A]"
                    : "bg-[#FFFFFF]/70 border-[#E5E5DE] text-slate-700 hover:bg-white hover:border-slate-400"
                  }`}
              >
                <div className="space-y-0.5">
                  <div className={`font-heading font-bold text-sm tracking-tight ${isSelected ? "text-[#0F172A]" : "text-slate-800"}`}>
                    {act.title}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 truncate max-w-[170px]">
                    {act.badge} · {act.year}
                  </div>
                </div>

                <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 transition-colors ${isSelected ? "bg-[#0F172A] text-white" : "bg-[#F6F6F2] text-slate-600"
                  }`}>
                  <Icon className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. Structured Editorial Initiative Showcase (Multi-Block Layout) */}
        <div className="bg-white rounded-xl border border-[#E5E5DE] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Left Column: Scope, Metrics & Deliverables (7 cols) */}
            <div className="lg:col-span-7 space-y-6">

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-600">
                  <span className="px-2.5 py-0.5 bg-[#EFF6FF] text-[#1E40AF] font-bold rounded inline-flex items-center gap-1.5">
                    <ActiveIcon className="w-3.5 h-3.5" />
                    <span>{activeActivity.category}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>{activeActivity.location}</span>
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
                  {activeActivity.title}
                </h3>

                <div className="font-editorial text-base sm:text-lg text-slate-600 italic">
                  Partner / Mandate: {activeActivity.partnerOrClient}
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {activeActivity.description}
              </p>

              {/* Verified Activity Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {activeActivity.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-[#FAF9F6] p-3 sm:p-4 rounded-lg border border-[#E5E5DE] text-left">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{metric.label}</div>
                    <div className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] mt-1">{metric.value}</div>
                  </div>
                ))}
              </div>

              {/* Highlights & Concrete Initiatives */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-semibold text-slate-800 uppercase tracking-wider">
                  PROGRAM FOCUS &amp; KEY HIGHLIGHTS:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeActivity.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-[#FAF9F6] p-2.5 rounded border border-[#E5E5DE]">
                      <span className="w-5 h-5 rounded-full bg-white text-[#0F172A] border border-[#CBD5E1] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E40AF]" />
                      </span>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={handlePartnerInquiry}
                  className="btn-editorial-red text-xs py-3 px-6 cursor-pointer flex items-center gap-2"
                >
                  <span>Inquire Program Collaboration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Documentation Photography & Partner Strip (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-lg overflow-hidden border border-[#CBD5E1] bg-[#0F172A] aspect-[4/3] sm:aspect-[16/11] shadow-md group">
                <img
                  src={activeActivity.image}
                  alt={activeActivity.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/25 to-transparent pointer-events-none" />

                {/* Bottom Frame Info */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white space-y-0.5">
                  <div className="text-xs font-mono text-slate-300">
                    {activeActivity.subtitle}
                  </div>
                  <div className="text-sm font-heading font-bold text-white leading-tight">
                    {activeActivity.partnerOrClient}
                  </div>
                </div>
              </div>

              {/* Partner Endorsement Strip */}
              <div className="p-4 bg-[#FAF9F6] rounded-lg border border-[#E5E5DE] flex items-center justify-between text-xs font-mono text-slate-600">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#1E40AF]" />
                  <span className="font-semibold text-[#0F172A]">STATUS:</span>
                </div>
                <span className="text-[#0F172A] font-medium">{activeActivity.year} · Active Framework</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Academic & Institutional Collaborations Strip */}
        <div className="mt-12 pt-8 border-t border-[#E5E5DE]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest">
                STRATEGIC COLLABORATION MATRIX
              </div>
              <h4 className="font-heading text-lg font-bold text-[#0F172A] mt-1">
                Institutional Partnerships Across Public &amp; Private Sectors
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-500">Jakarta · Bandung · Bogor · ASEAN</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-lg border border-[#E5E5DE] shadow-2xs space-y-2">
              <div className="text-xs font-mono font-semibold text-[#1E40AF] uppercase">
                ACADEMIC &amp; TALENT ALLIANCE
              </div>
              <div className="font-heading font-bold text-sm text-[#0F172A]">
                University Apprenticeship Consortium
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct MICE protocol and 4K broadcast apprenticeships with top national universities (UI, ITB, UGM, Unpad) training future summit directors.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-[#E5E5DE] shadow-2xs space-y-2">
              <div className="text-xs font-mono font-semibold text-[#1E40AF] uppercase">
                ENTERPRISE OFF-SITES &amp; SYNERGY
              </div>
              <div className="font-heading font-bold text-sm text-[#0F172A]">
                BP TAPERA &amp; Corporate Immersions
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strategic retreats in Ciwidey and Bogor blending executive decision-making challenges with outdoor resilience and team cohesion drills.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-[#E5E5DE] shadow-2xs space-y-2">
              <div className="text-xs font-mono font-semibold text-[#1E40AF] uppercase">
                CIVIC CULTURAL SCALE
              </div>
              <div className="font-heading font-bold text-sm text-[#0F172A]">
                GWI Heritage Activations
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Engaging over 45,000 citizens through architectural projection mapping and digital heritage preservation at GBK Arena and national monuments.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
