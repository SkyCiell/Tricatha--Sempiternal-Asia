import React from "react";
import Insights from "../components/Insights";
import { ArrowUpRight } from "lucide-react";

export default function ArticlesPage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  return (
    <div className="pt-20 bg-[#071731] min-h-screen text-[#F1F5F9] font-sans selection:bg-[#C8102E] selection:text-white">
      {/* 1. Hero Banner - Deep Navy #0A1F44 */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-mono text-[#C8102E] font-medium uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
            <span>Sovereign Research &amp; Executive Briefs</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-white leading-[1.14]">
                Executive Journal &amp; <br />
                <span className="text-slate-300 font-normal">Policy Monographs.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Rigorous policy analyses, geopolitical risk briefings, and diplomatic protocol monographs authored by TSA’s policy architects and researchers in Jakarta.
              </p>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red shrink-0 self-start lg:self-auto"
            >
              <span>Request Research Briefing</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Main Editorial Broadsheet Section */}
      <Insights scrollToSection={() => handleInquiry()} />

      {/* 3. Research Pillars & Methodology */}
      <section className="py-20 sm:py-28 bg-[#050F22] border-b border-white/10">
        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8">
          <div className="pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C8102E] font-medium uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                <span>Analytical Rigor &amp; Governance</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-medium tracking-tight text-white">
                TSA Research Group Standards
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-sm">
              Non-partisan policy intelligence prepared for ministers, sovereign wealth funds, and corporate boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-10">
            <div className="p-6 bg-[#0A1F44] border border-white/10 rounded space-y-3">
              <div className="text-xs font-mono text-[#C8102E] font-medium">METHODOLOGY 01</div>
              <h3 className="font-heading text-lg font-medium text-white">Primary Sovereign Liaison</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Direct synthesis from accredited bilateral communiqués, ministerial hearings, and sovereign policy gazettes across ASEAN member states.
              </p>
            </div>

            <div className="p-6 bg-[#0A1F44] border border-white/10 rounded space-y-3">
              <div className="text-xs font-mono text-[#C8102E] font-medium">METHODOLOGY 02</div>
              <h3 className="font-heading text-lg font-medium text-white">Strict Non-Partisanship</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Independent structural evaluation of economic reform bills, trade corridor pacts, and FDI capital flow directives.
              </p>
            </div>

            <div className="p-6 bg-[#0A1F44] border border-white/10 rounded space-y-3">
              <div className="text-xs font-mono text-[#C8102E] font-medium">METHODOLOGY 03</div>
              <h3 className="font-heading text-lg font-medium text-white">Discretion &amp; Clearance</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                All customized corporate briefs are governed under binding bilateral confidentiality covenants enforceable under international law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
