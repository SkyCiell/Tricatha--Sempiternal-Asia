import React from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import { editorialInsights } from "../data/tsaData";

export default function Insights({ scrollToSection }) {
  const leadArticle = editorialInsights[0];
  const secondaryArticles = editorialInsights.slice(1);

  return (
    <section id="insights" className="py-20 sm:py-28 bg-[#FFFFFF] text-[#0A1F44] border-b border-slate-100">
      <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-slate-100 gap-6">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-[#0A1F44] leading-tight">
              Executive Journal &amp; Briefs
            </h2>
          </div>

          <p className="max-w-md text-sm text-slate-600 font-normal leading-relaxed">
            Analytical commentaries, regulatory horizon briefs, and diplomatic protocol essays curated by TSA's policy architects and researchers in Jakarta.
          </p>
        </div>

        {/* Broadsheet Spread */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Lead Journal Feature (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-slate-200/80 rounded-lg p-6 sm:p-8 space-y-6 shadow-xs hover:border-[#C8102E]/60 transition-editorial">
            <div className="editorial-image-frame relative aspect-[16/9] w-full overflow-hidden rounded-md bg-slate-900">
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

              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-[#0A1F44] leading-snug hover:text-[#C8102E] transition-colors cursor-pointer">
                {leadArticle.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {leadArticle.excerpt}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">By {leadArticle.author}</span>
              <button
                onClick={scrollToSection}
                className="editorial-underline-link text-xs font-medium uppercase tracking-wider text-[#0A1F44] hover:text-[#C8102E] inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Read Monograph</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Secondary Articles List (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 pb-2 border-b border-slate-100">
              RECENT PAPERS &amp; ESSAYS
            </div>

            <div className="space-y-4 divide-y divide-slate-100">
              {secondaryArticles.map((art) => (
                <div key={art.id} className="pt-4 first:pt-0 space-y-2 group cursor-pointer" onClick={scrollToSection}>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="text-[#C8102E] font-medium uppercase">{art.category}</span>
                    <span>·</span>
                    <span>{art.date}</span>
                  </div>

                  <h4 className="font-heading text-base font-medium text-[#0A1F44] group-hover:text-[#C8102E] transition-colors leading-snug">
                    {art.title}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
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
