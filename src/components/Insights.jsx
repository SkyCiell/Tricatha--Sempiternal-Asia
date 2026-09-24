import React from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import { editorialInsights } from "../data/tsaData";

export default function Insights({ scrollToSection }) {
  const leadArticle = editorialInsights[0];
  const secondaryArticles = editorialInsights.slice(1);

  return (
    <section id="insights" className="py-20 sm:py-28 bg-[#071731] text-[#F1F5F9] border-b border-white/10">
      <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-white/10 gap-6">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-white leading-tight">
              Executive Journal &amp; Briefs
            </h2>
          </div>

          <p className="max-w-md text-sm text-slate-300 font-normal leading-relaxed">
            Analytical commentaries, regulatory horizon briefs, and diplomatic protocol essays curated by TSA's policy architects and researchers in Jakarta.
          </p>
        </div>

        {/* Broadsheet Spread */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Lead Journal Feature (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-[#0A1F44] border border-white/10 rounded p-6 sm:p-8 space-y-6 shadow-lg hover:border-white/25 transition-all">
            <div className="editorial-image-frame relative aspect-[16/9] w-full overflow-hidden rounded bg-[#050F22]">
              <img
                src={leadArticle.image}
                alt={leadArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                <span className="text-[#C8102E] font-medium uppercase">{leadArticle.category}</span>
                <span>·</span>
                <span>{leadArticle.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {leadArticle.readTime}
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white leading-snug hover:text-white/90 transition-colors cursor-pointer">
                {leadArticle.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                {leadArticle.excerpt}
              </p>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">By {leadArticle.author}</span>
              <button
                onClick={scrollToSection}
                className="text-xs font-medium uppercase tracking-wider text-slate-200 hover:text-white inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Read Monograph</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
              </button>
            </div>
          </div>

          {/* Secondary Articles List (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 pb-2 border-b border-white/10">
              RECENT PAPERS &amp; ESSAYS
            </div>

            <div className="space-y-4 divide-y divide-white/10">
              {secondaryArticles.map((art) => (
                <div key={art.id} className="pt-4 first:pt-0 space-y-2 group cursor-pointer" onClick={scrollToSection}>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="text-[#C8102E] font-medium uppercase">{art.category}</span>
                    <span>·</span>
                    <span>{art.date}</span>
                  </div>

                  <h4 className="font-heading text-base font-medium text-white group-hover:text-white/80 transition-colors leading-snug">
                    {art.title}
                  </h4>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
                    {art.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
