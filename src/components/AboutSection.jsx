import React from "react";
import { ArrowUpRight, ArrowRight, Compass, Sparkles, Cpu, Network, MapPin, Award } from "lucide-react";
import { companyInfo } from "../data/tsaData";

const plenaryPhoto = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop";

export default function AboutSection({ navigateTo }) {
  const handleReadCharter = () => {
    if (navigateTo) {
      navigateTo("/about");
    } else {
      window.history.pushState(null, "", "/about");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const handleExploreBusiness = () => {
    if (navigateTo) {
      navigateTo("/business-group");
    } else {
      window.history.pushState(null, "", "/business-group");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const solutionDomains = [
    "Technology",
    "Event Management",
    "Government Advocacy",
    "Food and Beverage",
    "Digital Content Production"
  ];

  const pillars = [
    {
      icon: Compass,
      title: "Strategic Insight",
      indonesian: "Wawasan Strategis",
      desc: "Combining institutional analysis, regulatory awareness, and strategic clarity to help partners navigate complex landscapes."
    },
    {
      icon: Sparkles,
      title: "Creative Thinking",
      indonesian: "Pemikiran Kreatif",
      desc: "Developing original event concepts, distinctive culinary experiences, and compelling narratives that inspire action."
    },
    {
      icon: Cpu,
      title: "Technical Expertise",
      indonesian: "Keahlian Teknis",
      desc: "Delivering 4K broadcast command, scalable technology infrastructure, and rigorous turnkey operational execution."
    },
    {
      icon: Network,
      title: "Trusted Networks",
      indonesian: "Jaringan Terpercaya",
      desc: "Connecting government ministries, corporate leaders, industry ecosystems, and venue complexes to activate opportunities."
    }
  ];

  return (
    <section
      id="about"
      className="bg-[#FAF9F6] text-[#071731] border-b border-[#E2E8F0] relative overflow-hidden scroll-mt-[72px]"
      aria-label="About PT Tricatha Sempiternal Asia"
    >
      {/* 1. EDITORIAL HEADER & POSITIONING (Crisp Light Canvas) */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16 border-b border-[#E2E8F0]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
          
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#071731] tracking-tight leading-[1.08]">
              An Indonesian Multidisciplinary Company <br />
              <span className="font-editorial italic font-normal text-[#0A1F44]/80 text-2xl sm:text-4xl lg:text-[44px]">
                Delivering Integrated Solutions Across Sectors.
              </span>
            </h2>

            <div className="space-y-3 pt-1">
              <p className="text-[#334155] text-base sm:text-lg font-normal leading-relaxed">
                PT Tricatha Sempiternal Asia is an Indonesian multidisciplinary company delivering integrated solutions across technology, event management, government advocacy, food and beverage, and digital content production.
              </p>
              <p className="text-[#64748B] text-sm sm:text-base font-normal leading-relaxed">
                Through our specialized business units, we combine strategic insight, creative thinking, technical expertise, and trusted networks to help organizations navigate challenges, activate opportunities, and achieve meaningful, sustainable impact.
              </p>
            </div>

            {/* Integrated Solution Domains */}
            <div className="pt-2 text-xs font-mono text-[#475569] tracking-wide">
              <span className="text-[#C8102E] font-semibold">Operational Disciplines:</span>{" "}
              {solutionDomains.join("  ·  ")}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-4">
            <div className="space-y-1 text-left lg:text-right font-mono text-xs text-[#64748B]">
              <div className="text-[#071731] font-semibold">HQ · The City Tower, Jakarta</div>
              <div>Indonesia · ASEAN Economic Corridor</div>
            </div>

            <div className="flex flex-col gap-2.5 w-full sm:w-auto items-stretch lg:items-end">
              <button
                type="button"
                onClick={handleReadCharter}
                className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Explore Corporate Charter</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 4 Architectural Pillars: Spacious 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-12 sm:pt-16">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-6 bg-white border border-[#E2E8F0] hover:border-[#071731]/30 transition-all duration-200 rounded-lg space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded bg-[#FAF9F6] border border-[#E2E8F0] flex items-center justify-center text-[#C8102E]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-[#64748B] uppercase tracking-wider">
                    {p.indonesian}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-[#071731] text-base tracking-tight">
                    {p.title}
                  </h4>
                  <p className="text-xs text-[#475569] font-sans leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. FULLSCREEN 100vw × 100vh CINEMATIC PLENARY STAGING SCENE */}
      <div className="relative w-screen h-screen overflow-hidden bg-[#071731] select-none">
        
        {/* Fullscreen Photo (Edge-to-Edge) */}
        <img
          src={plenaryPhoto}
          alt="TSA Multidisciplinary Operations and Plenary Staging"
          className="w-full h-full object-cover object-center scale-102"
          loading="eager"
        />

        {/* Directional Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/60 via-45% to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/40 to-transparent pointer-events-none" />

        {/* Content Positioned Directly Over Fullscreen Media */}
        <div className="absolute inset-0 p-6 sm:p-12 lg:p-16 flex flex-col justify-between z-10 text-white">
          
          {/* Top Bar Meta Over Media */}
          <div className="flex items-center justify-between font-mono text-xs text-white/90">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xs border border-white/20 rounded uppercase tracking-widest text-[11px]">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>MULTIDISCIPLINARY ARCHITECTURE · SCENIC OPERATIONAL COMMAND</span>
            </span>

            <div className="hidden sm:flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>THE CITY TOWER · JAKARTA PUSAT</span>
            </div>
          </div>

          {/* Monumental Headline & Narrative Over Media */}
          <div className="max-w-4xl space-y-5 my-auto">
            <h3 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-lg">
              Unified Multidisciplinary Command. <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Strategic Insight Meets Execution.
              </span>
            </h3>

            <p className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl drop-shadow-md">
              From closed-door diplomatic summits and mission-critical government software to turnkey 4K broadcast operations, TSA delivers end-to-end integration with zero third-party compromise.
            </p>

            {/* Operational Telemetry Metrics Directly Over Media */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-4 border-t border-white/15 max-w-3xl">
              {companyInfo.statsSummary.map((stat) => (
                <div key={stat.id} className="space-y-1">
                  <div className="flex items-baseline gap-1 font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    <span>{stat.value}</span>
                    <span className="text-[#C8102E] text-xl sm:text-2xl">{stat.suffix}</span>
                  </div>
                  <div className="font-mono text-[11px] text-slate-300 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Action Over Media */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={handleExploreBusiness}
                className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2 shadow-xl"
              >
                <span>Explore Specialized Business Units</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleReadCharter}
                className="px-5 py-3 rounded bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-2 backdrop-blur-xs shadow-xl"
              >
                <span>Read Full Doctrine</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
              </button>
            </div>
          </div>

          {/* Bottom Bar Info Over Media */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/10 pt-3">
            <span>LEGAL CHARTER: PT TRICATHA SEMPITERNAL ASIA</span>
            <span>ASEAN ECONOMIC CORRIDOR</span>
          </div>

        </div>

      </div>
    </section>
  );
}
