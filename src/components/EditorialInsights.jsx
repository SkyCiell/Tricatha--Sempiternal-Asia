import React from "react";
import { editorialInsights } from "../data/tsaData";

export default function EditorialInsights({ onSelectArticle }) {
  return (
    <section id="insights" className="py-20 sm:py-28 bg-[#071731] text-white border-b border-white/10">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Strategic Insights &amp; Market Dynamics
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-300 max-w-md leading-relaxed">
            Executive perspectives on event strategy, international trade exhibition trends, sovereign protocol architecture, and hybrid governance summits.
          </p>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {editorialInsights.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle && onSelectArticle(article)}
              className="group cursor-pointer bg-[#0A1F44] rounded border border-white/10 overflow-hidden hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="editorial-image-frame aspect-[16/10] bg-[#050F22] overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-slate-100 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-6 sm:p-7 pt-0 border-t border-white/8 flex items-center justify-between text-xs font-mono">
                <span className="text-white group-hover:text-[#C8102E] transition-colors font-semibold uppercase tracking-wider">
                  Read Executive Brief
                </span>
                <span className="text-slate-400">Jakarta Practice</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
