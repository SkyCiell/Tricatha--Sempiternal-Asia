import React from "react";
import SelectedProjects from "../components/SelectedProjects";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioPage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  return (
    <div className="pt-20 bg-[#FFFFFF] min-h-screen text-[#0A1F44] font-sans selection:bg-[#C8102E] selection:text-white">
      {/* 1. Page Header - Deep Navy #0A1F44 */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        {/* Subtle dot matrix */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />

        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 relative z-10">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-white leading-[1.14]">
                Portfolio &amp; <br />
                <span className="text-white/85 font-normal">Case Study Archives.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Explore verified case studies spanning diplomatic conventions, enterprise digital governance systems, experiential scenography, and broadcast media production.
              </p>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial px-7 py-3.5 bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-editorial flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md shrink-0 self-start lg:self-auto"
            >
              <span>Request Case Study Dossier</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Selected Projects Component */}
      <SelectedProjects />

    </div>
  );
}
