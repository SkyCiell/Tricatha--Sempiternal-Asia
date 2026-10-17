import React from "react";
import Insights from "../components/Insights";
import { ArrowUpRight } from "lucide-react";

export default function ArticlesPage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#071731] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">
      {/* 1. Hero Banner */}
      <section className="relative py-16 sm:py-24 border-b border-[#071731]/10 overflow-hidden">
        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
                TSA Research Group · The City Tower, Jakarta
              </div>
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-[#071731] leading-[1.14]">
                Executive Journal &amp; <br />
                <span className="font-editorial italic font-normal text-slate-600">Policy Monographs.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl pt-1">
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
      <section className="py-16 sm:py-24 border-b border-[#071731]/10">
        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8">
          <div className="pb-8 border-b border-[#071731]/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
                RESEARCH INTEGRITY
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-semibold tracking-tight text-[#071731]">
                TSA Research Group Standards
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-sm">
              Non-partisan policy intelligence prepared for ministers, sovereign wealth funds, and corporate boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-10">
            <div className="p-6 bg-white border border-[#071731]/10 rounded shadow-xs space-y-3">
              <h3 className="font-heading text-lg font-semibold text-[#071731]">Primary Sovereign Liaison</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Direct synthesis from accredited bilateral communiqués, ministerial hearings, and sovereign policy gazettes across ASEAN member states.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#071731]/10 rounded shadow-xs space-y-3">
              <h3 className="font-heading text-lg font-semibold text-[#071731]">Strict Non-Partisanship</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Independent structural evaluation of economic reform bills, trade corridor pacts, and FDI capital flow directives.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#071731]/10 rounded shadow-xs space-y-3">
              <h3 className="font-heading text-lg font-semibold text-[#071731]">Discretion &amp; Clearance</h3>
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
