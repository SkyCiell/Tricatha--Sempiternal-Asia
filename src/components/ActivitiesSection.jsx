import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight, MapPin, Users2, Landmark, GraduationCap, Radio } from "lucide-react";
import { activitiesData } from "../data/tsaData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const activityIconMap = {
  "act-team-building": Users2,
  "act-civic-heritage": Landmark,
  "act-academic-fellowship": GraduationCap,
  "act-thought-dialogues": Radio
};

export default function ActivitiesSection({ navigateTo, onOpenWorkModal }) {
  const [activeActivityId, setActiveActivityId] = useState("act-team-building");
  const sectionRef = useRef(null);

  const activeActivity = activitiesData.find((a) => a.id === activeActivityId) || activitiesData[0];
  const ActiveIcon = activityIconMap[activeActivity.id] || Users2;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const activityImgs = sectionRef.current?.querySelectorAll(".activity-parallax-img");
      activityImgs?.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -8, scale: 1.06 },
          {
            yPercent: 8,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeActivityId]);

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

  const handleFullActivities = () => {
    if (navigateTo) {
      navigateTo("/activities");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="activities"
      data-theme="light"
      className="py-20 sm:py-28 bg-[#F6F6F2] text-[#0F172A] border-b border-[#E5E5DE] relative overflow-hidden"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        
        {/* Section Header: Warm Off-White Editorial Magazine Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E5E5DE]">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#C8102E]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C8102E] font-semibold">
                Programs &amp; Collaborations
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[46px] font-bold text-[#0F172A] tracking-tight leading-[1.12]">
              Corporate Activities, <br />
              <span className="font-editorial italic font-normal text-[#1E3A8A]">
                Collaborative Programs &amp; Initiatives.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1 max-w-2xl">
              Beyond event day management, TSA spearheads nationwide civic activations, executive leadership immersions, academic talent fellowships with leading universities, and cross-border thought leadership dialogues.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
            <button
              onClick={handleFullActivities}
              className="text-[#0F172A] hover:text-[#C8102E] transition-colors cursor-pointer inline-flex items-center gap-2 group font-semibold py-2"
            >
              <span>Explore All Initiatives</span>
              <ArrowUpRight className="w-4 h-4 text-[#C8102E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 1. Four Pillar Selector (Clean minimal tabs, no generic pills) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activitiesData.map((act) => {
            const isSelected = act.id === activeActivityId;
            const Icon = activityIconMap[act.id] || Users2;

            return (
              <button
                key={act.id}
                onClick={() => setActiveActivityId(act.id)}
                className={`p-5 text-left rounded border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[96px] ${
                  isSelected
                    ? "bg-white border-[#0F172A] shadow-md ring-1 ring-[#0F172A] text-[#0F172A]"
                    : "bg-[#FFFFFF]/70 border-[#E5E5DE] text-slate-700 hover:bg-white hover:border-slate-400"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                    {act.category}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? "text-[#C8102E]" : "text-slate-400"}`} />
                </div>
                <div className="font-heading font-bold text-sm tracking-tight leading-snug">
                  {act.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. Structured Editorial Initiative Showcase */}
        <div className="bg-white rounded border border-[#E5E5DE] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Photographic Canvas with Parallax Scrub (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden bg-[#071731]">
              <img
                src={activeActivity.image}
                alt={activeActivity.title}
                className="activity-parallax-img absolute inset-0 w-full h-full object-cover will-change-transform scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-black/20" />
              
              <div className="absolute top-6 left-6 z-10">
                <span className="font-mono text-xs uppercase tracking-wider text-white bg-[#0F172A]/90 px-3 py-1 rounded border border-white/15">
                  {activeActivity.year}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-1">
                <div className="font-mono text-xs text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>{activeActivity.location}</span>
                </div>
                <div className="font-heading font-semibold text-lg text-white">
                  Partner: {activeActivity.partnerOrClient}
                </div>
              </div>
            </div>

            {/* Right Editorial Dossier (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C8102E] font-semibold uppercase tracking-wider mb-2">
                    <ActiveIcon className="w-4 h-4 text-[#C8102E]" />
                    <span>{activeActivity.category}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#0F172A] tracking-tight leading-snug">
                    {activeActivity.title}
                  </h3>
                  <div className="font-sans text-xs text-slate-500 font-medium mt-1">
                    {activeActivity.subtitle}
                  </div>
                </div>

                <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                  {activeActivity.description}
                </p>

                {/* Highlights List */}
                <div className="border-t border-[#E5E5DE] pt-4 space-y-2">
                  <div className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Key Program Highlights:
                  </div>
                  <div className="space-y-1.5">
                    {activeActivity.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="text-[#C8102E] font-bold shrink-0 mt-0.5">—</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantitative Impact Metrics */}
                <div className="border-t border-[#E5E5DE] pt-4 grid grid-cols-3 gap-3">
                  {activeActivity.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="space-y-0.5">
                      <div className="font-heading text-lg font-bold text-[#0F172A]">
                        {metric.value}
                      </div>
                      <div className="font-mono text-[10px] text-slate-500 uppercase">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Direct Mandate Action */}
              <div className="pt-8 border-t border-[#E5E5DE] flex items-center justify-between">
                <button
                  onClick={handlePartnerInquiry}
                  className="btn-editorial-red text-xs py-2.5 px-6 cursor-pointer inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Initiate Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <span className="font-mono text-xs text-slate-500">
                  {activeActivity.location.split(",")[0]}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
