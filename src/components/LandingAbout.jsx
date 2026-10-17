import React from "react";
import { ArrowUpRight } from "lucide-react";

const plenaryPhoto = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop";

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
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16 border-b border-[#E2E8F0]">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#071731] tracking-tight leading-[1.1]">
              A Multidisciplinary Organization Built for Purpose and Impact.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="font-sans text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
              PT Tricatha Sempiternal Asia is an Indonesian multidisciplinary company delivering integrated solutions across technology, event management, government advocacy, food and beverage, and digital content production.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Through our specialized business units, we combine strategic insight, creative thinking, technical expertise, and trusted networks to help organizations navigate challenges, activate opportunities, and achieve meaningful, sustainable impact.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleReadCharter}
                className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2 shadow-xs"
              >
                <span>Read Corporate Charter</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Core Principles: Typographic Columns without Card Boxes */}
        <div className="pt-12 sm:pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {capabilities.map((item) => (
            <div key={item.title} className="space-y-2 border-t border-[#071731]/15 pt-4">
              <h3 className="font-heading font-bold text-[#071731] text-base tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Fullscreen Photographic Composition: Authentic Plenary & Assembly Staging (100vw Edge-to-Edge) */}
      <div data-nav-theme="dark" className="relative w-screen left-1/2 -translate-x-1/2 h-[560px] sm:h-[680px] lg:h-[780px] overflow-hidden bg-[#071731] select-none">
        <img
          src={plenaryPhoto}
          alt="TSA Sovereign Plenary and Multidisciplinary Assembly Staging"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* Directional Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/40 to-transparent pointer-events-none" />

        {/* Integrated Framing Context Overlay */}
        <div className="absolute inset-0 p-6 sm:p-12 lg:p-16 flex flex-col justify-end text-white z-10">
          <div className="max-w-3xl space-y-3">
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              Delivering with sovereign protocol standards and multidisciplinary coordination.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Whether orchestrating inter-ministerial plenaries, enterprise software architecture, or curated dining, TSA maintains single-source accountability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
