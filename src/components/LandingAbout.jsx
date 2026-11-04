import React from "react";
import { ArrowUpRight } from "lucide-react";

const plenaryPhoto = "/brands/di-bawah-about-us.png";

export default function LandingAbout({ navigateTo }) {
  const handleReadCharter = () => {
    if (navigateTo) {
      navigateTo("/about");
    }
  };

  const capabilities = [
    {
      title: "Strategic Insight",
      desc: "Institutional analysis, regulatory awareness, and strategic clarity to navigate complex stakeholder environments."
    },
    {
      title: "Creative Thinking",
      desc: "Original event concepts, distinctive culinary experiences, and spatial narratives that command attention."
    },
    {
      title: "Technical Expertise",
      desc: "Broadcast engineering, secure mission-critical software, and turnkey logistical execution."
    },
    {
      title: "Trusted Networks",
      desc: "Active relationships across Indonesian ministries, state enterprises, regional trade councils, and industry leaders."
    }
  ];

  return (
    <section
      id="about"
      data-nav-theme="light"
      className="bg-[#FAF9F6] text-[#071731] border-b border-[#E2E8F0] relative overflow-hidden"
      aria-label="About PT Tricatha Sempiternal Asia"
    >
      {/* 1. Concise Editorial Typography and Narrative */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-[#E2E8F0]">
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#071731] tracking-tight leading-[1.15]">
              A Multidisciplinary Organization Built for Purpose and Impact.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <p className="font-sans text-sm sm:text-base lg:text-lg text-[#334155] leading-relaxed font-normal">
              PT Tricatha Sempiternal Asia is an Indonesian multidisciplinary company delivering integrated solutions across technology, event management, government advocacy, food and beverage, and digital content production.
            </p>
            <p className="font-sans text-xs sm:text-base text-[#64748B] leading-relaxed font-normal">
              Through our specialized business units, we combine strategic insight, creative thinking, technical expertise, and trusted networks to help organizations navigate challenges, activate opportunities, and achieve meaningful, sustainable impact.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleReadCharter}
                className="w-full sm:w-auto btn-editorial-red text-xs py-3.5 sm:py-3 px-6 cursor-pointer inline-flex items-center justify-center gap-2 shadow-xs min-h-[44px] touch-manipulation active:scale-[0.99]"
              >
                <span>Read Corporate Charter</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Core Principles: Typographic Columns without Card Boxes */}
        <div className="pt-10 sm:pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {capabilities.map((item) => (
            <div key={item.title} className="space-y-1.5 sm:space-y-2 border-t border-[#071731]/15 pt-3.5 sm:pt-4">
              <h3 className="font-heading font-bold text-[#071731] text-sm sm:text-base tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Authentic Assembly Staging: Jakarta Geopolitical Forum Plenary */}
      <div data-nav-theme="dark" className="relative w-full bg-[#071731] border-t border-[#E2E8F0] select-none">
        <div className="max-w-[1520px] mx-auto">
          {/* Framed 3:2 Photographic Showcase matching exact 1600x1066 photo aspect ratio */}
          <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#071731]">
            <img
              src={plenaryPhoto}
              alt="TSA Sovereign Plenary Delegation at Jakarta Geopolitical Forum IX"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

        {/* Editorial Context & Framing Caption Bar */}
        <div className="bg-[#071731] text-white border-t border-white/10 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="max-w-[1520px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
                  National Forum Execution &bull; Jakarta Geopolitical Forum IX
                </span>
              </div>
              <h3 className="font-heading text-lg sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                Delivering with sovereign protocol standards and multidisciplinary coordination.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Whether orchestrating inter-ministerial plenaries, enterprise software architecture, or curated dining, TSA maintains single-source accountability.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 pt-2 lg:pt-0">
              <div className="px-3.5 py-2 rounded bg-white/5 border border-white/10 text-left sm:text-right">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Execution Standard</div>
                <div className="text-xs sm:text-sm font-semibold text-white font-heading">Ministerial Grade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
