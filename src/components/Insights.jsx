import React from "react";
import { ArrowUpRight, Clock, BookOpen, FileText } from "lucide-react";
import { editorialInsights } from "../data/tsaData";

export default function Insights({ scrollToSection }) {
  const leadArticle = editorialInsights[0];
  const secondaryArticles = editorialInsights.slice(1);

  return (
    <section id="insights" className="py-16 sm:py-24 bg-[#FAF9F6] text-[#071731] border-b border-[#071731]/10 overflow-hidden">
      <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 sm:pb-10 border-b border-[#071731]/10 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C8102E] font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>TSA Sovereign Research Group · Policy Monographs</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#071731] leading-tight">
              Executive Journal &amp; Strategic Briefs
            </h2>
          </div>

          <p className="max-w-md text-sm text-slate-600 font-normal leading-relaxed">
            Analytical commentaries, regulatory horizon briefs, and diplomatic protocol essays curated by TSA's policy architects and researchers in Jakarta.
          </p>
        </div>

      </div>

      {/* FULLSCREEN 100vw × 100vh LEAD MONOGRAPH SCENE */}
      {leadArticle && (
        <div className="relative w-screen left-1/2 -translate-x-1/2 h-screen overflow-hidden bg-[#071731] my-8 select-none">
          {/* Fullscreen Photo (Edge-to-Edge 100vw × 100vh) */}
          <img
            src={leadArticle.image}
            alt={leadArticle.title}
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
                  <FileText className="w-3.5 h-3.5" />
                  <span>{leadArticle.category}</span>
                </span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-xs text-slate-200 border border-white/20 rounded text-[11px]">
                  {leadArticle.date}
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>READ TIME: {leadArticle.readTime}</span>
              </div>
            </div>

            {/* Main Editorial Story Composition Over Media */}
            <div className="max-w-4xl space-y-5 my-auto">
              <div className="space-y-1">
                <span className="text-[#C8102E] font-mono text-xs uppercase tracking-widest font-semibold block">
                  LEAD POLICY MONOGRAPH · DISPATCH FROM JAKARTA
                </span>
                <h3
                  onClick={scrollToSection}
                  className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.08] cursor-pointer hover:text-slate-100 transition-colors drop-shadow-lg"
                >
                  {leadArticle.title}
                </h3>
              </div>

              <p className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl drop-shadow-md">
                {leadArticle.excerpt}
              </p>

              {/* Direct Action Over Media */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToSection}
                  className="btn-editorial-red text-xs py-3 px-6 cursor-pointer flex items-center gap-2 shadow-xl"
                >
                  <span>Read Full Monograph</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-300">
                  Authored by <strong className="text-white">{leadArticle.author}</strong>
                </span>
              </div>
            </div>

            {/* Bottom Bar Info Over Media */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/10 pt-3">
              <span>SECURITY PROTOCOL: PUBLIC MONOGRAPH</span>
              <span>TSA RESEARCH GROUP · THE CITY TOWER JAKARTA</span>
            </div>

          </div>
        </div>
      )}

      {/* Secondary Articles Editorial Archive */}
      <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 pt-8">
        <div className="text-xs font-mono uppercase tracking-widest text-[#071731] pb-3 border-b border-[#071731]/10 font-semibold flex items-center justify-between">
          <span>ADDITIONAL MONOGRAPHS &amp; HORIZON PAPERS</span>
          <span className="text-slate-500 font-normal">SOVEREIGN ARCHIVE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-6">
          {secondaryArticles.map((art) => (
            <div
              key={art.id}
              onClick={scrollToSection}
              className="bg-white border border-[#071731]/10 rounded p-6 space-y-4 hover:border-[#071731]/30 transition-all cursor-pointer group shadow-2xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="text-[#C8102E] font-semibold uppercase">{art.category}</span>
                  <span>{art.date}</span>
                </div>

                <h4 className="font-heading text-lg font-semibold text-[#071731] group-hover:text-[#C8102E] transition-colors leading-snug">
                  {art.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-[#071731]/10 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>By {art.author}</span>
                <span className="text-[#071731] group-hover:text-[#C8102E] flex items-center gap-1 font-medium">
                  Read <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

