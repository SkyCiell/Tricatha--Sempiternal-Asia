import React from "react";
import Insights from "../components/Insights";
import { ArrowUpRight } from "lucide-react";

export default function ArticlesPage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  return (
    <div className="pt-20 bg-[#FFFFFF] min-h-screen text-[#0A1F44] font-sans selection:bg-[#C8102E] selection:text-white">
      {/* 1. Hero Banner - Deep Navy #0A1F44 */}
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
          <div className="flex items-center gap-2.5 text-xs font-mono text-[#C8102E] font-medium uppercase tracking-widest mb-4">
            <span className="w-2 h-0.5 bg-[#C8102E]" />
            <span>Sovereign Research &amp; Executive Briefs</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-white leading-[1.14]">
                Executive Journal &amp; <br />
                <span className="text-white/85 font-normal">Policy Monographs.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Rigorous policy analyses, geopolitical risk briefings, and diplomatic protocol monographs authored by TSA’s policy architects and researchers in Jakarta.
              </p>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial px-7 py-3.5 bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-editorial flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md shrink-0 self-start lg:self-auto"
            >
              <span>Request Research Briefing</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Main Editorial Broadsheet Section */}
      <Insights scrollToSection={() => handleInquiry()} />

      {/* 3. Research Pillars & Methodology - Light Neutral #F5F6F8 */}
      <section className="py-20 sm:py-28 bg-[#F5F6F8] border-b border-slate-200/60">
        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8">
          <div className="pb-8 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C8102E] font-medium uppercase">
                <span className="w-2 h-0.5 bg-[#C8102E]" />
                <span>Analytical Rigor &amp; Governance</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-medium tracking-tight text-[#0A1F44]">
                TSA Research Group Standards
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-sm">
              Non-partisan policy intelligence prepared for ministers, sovereign wealth funds, and corporate boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-10">
            <div className="p-6 bg-[#FFFFFF] border border-slate-200/80 rounded-lg space-y-3 shadow-xs">
              <div className="text-xs font-mono text-[#C8102E] font-medium">METHODOLOGY 01</div>
              <h3 className="font-heading text-lg font-medium text-[#0A1F44]">Primary Sovereign Liaison</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Direct synthesis from accredited bilateral communiqués, ministerial hearings, and sovereign policy gazettes across ASEAN member states.
              </p>
            </div>

            <div className="p-6 bg-[#FFFFFF] border border-slate-200/80 rounded-lg space-y-3 shadow-xs">
              <div className="text-xs font-mono text-[#C8102E] font-medium">METHODOLOGY 02</div>
              <h3 className="font-heading text-lg font-medium text-[#0A1F44]">Strict Non-Partisanship</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Independent structural evaluation of economic reform bills, trade corridor pacts, and FDI capital flow directives.
              </p>
            </div>

            <div className="p-6 bg-[#FFFFFF] border border-slate-200/80 rounded-lg space-y-3 shadow-xs">
              <div className="text-xs font-mono text-[#C8102E] font-medium">METHODOLOGY 03</div>
              <h3 className="font-heading text-lg font-medium text-[#0A1F44]">Discretion &amp; Clearance</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                All customized corporate briefs are governed under binding bilateral confidentiality covenants enforceable under international law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
