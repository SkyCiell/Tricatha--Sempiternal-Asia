import React, { useState } from "react";
import { ArrowUpRight, Clock, Calendar, ArrowRight, BookOpen, Newspaper } from "lucide-react";
import { editorialInsights } from "../data/tsaData";
import { EVENTS_DATA } from "../data/eventsData";

export default function NewsPage({ navigateTo }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Events & Exhibitions", "Government & Protocol", "Corporate Governance", "Event Bulletins"];

  // Real dispatches & monographs from TSA editorial data
  const newsItems = [
    {
      id: "bulletin-ai-expo-2026",
      type: "Flagship Bulletin",
      category: "Events & Exhibitions",
      title: "TSA Commences Multi-Hall Scenography Engineering for AI Global EXPO 2026 at ICE BSD",
      date: "March 2026",
      readTime: "4 min read",
      excerpt: "Operational deployment begins across Halls 1, 2, and 3 at Indonesia Convention Exhibition (ICE) BSD City, accommodating 50,000+ delegates and international technology pavilions with zero margin for error.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      author: "TSA Event Operations Directorate",
      url: "/events/sea-energy-transition-clean-tech-mice-expo-2025"
    },
    {
      id: "bulletin-asean-summit",
      type: "Protocol Dispatch",
      category: "Government & Protocol",
      title: "Diplomatic Protocol Clearances Completed for Multilateral Plenary Assembly at JCC Senayan",
      date: "February 2026",
      readTime: "3 min read",
      excerpt: "The TSA Executive Secretariat has formalized bilateral precedence schedules, encrypted telepresence conduits, and sovereign security perimeters uniting 18 ministerial delegations.",
      image: EVENTS_DATA[0]?.img || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      author: "Executive Secretariat",
      url: "/events/asean-sovereign-strategic-diplomacy-plenary-2025"
    },
    ...editorialInsights.map((insight) => ({
      id: insight.id,
      type: "Research Monograph",
      category: insight.category,
      title: insight.title,
      date: insight.date,
      readTime: insight.readTime,
      excerpt: insight.excerpt,
      image: insight.image,
      author: insight.author || "TSA Research Group",
      url: "/events"
    }))
  ];

  const filteredItems = activeCategory === "All"
    ? newsItems
    : newsItems.filter(item => item.category === activeCategory || (activeCategory === "Event Bulletins" && (item.type.includes("Bulletin") || item.type.includes("Dispatch"))));

  const leadArticle = filteredItems[0] || newsItems[0];
  const secondaryArticles = filteredItems.slice(1, 3);
  const archivedDispatches = filteredItems.slice(3);

  const handleArticleClick = (item) => {
    if (navigateTo && item.url) {
      navigateTo(item.url);
    }
  };

  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  return (
    <div className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-white/10">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>Official Newsroom · The City Tower, Jakarta</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.08]">
              Newsroom &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Executive Dispatches.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Official communiqués, event management bulletins, and policy monographs issued directly from the Executive Secretariat at The City Tower in Central Jakarta.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-5">
            <div className="space-y-1 text-left lg:text-right font-mono text-xs text-slate-400">
              <div>DISPATCH FREQUENCY: BI-WEEKLY</div>
              <div className="text-white font-semibold">PAN-ASEAN OPERATIONAL COVERAGE</div>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red"
            >
              <span>Press &amp; Media Inquiries</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. DRAFTING FILTER BAR (Matching Events Benchmark) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-3 sticky top-16 sm:top-20 z-30 bg-[#071731]/95 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between gap-4 pb-1">
          <div className="overflow-x-auto scrollbar-none pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 flex-grow">
            <div className="flex items-center gap-2 whitespace-nowrap min-w-max font-mono text-xs">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                const count = cat === "All"
                  ? newsItems.length
                  : newsItems.filter(i => i.category === cat || (cat === "Event Bulletins" && (i.type.includes("Bulletin") || i.type.includes("Dispatch")))).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded transition-all cursor-pointer border flex items-center gap-2 ${
                      isActive
                        ? "bg-[#C8102E] text-white border-[#C8102E] font-semibold shadow-xs"
                        : "bg-[#0A1F44] text-slate-300 border-white/10 hover:border-white/30"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      isActive ? "bg-white/25 text-white" : "text-slate-400 bg-[#071731]"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-2 text-xs text-slate-400 shrink-0 font-mono">
            <Newspaper className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>Showing {filteredItems.length} Dispatches</span>
          </div>
        </div>
      </section>

      {/* 3. LEAD FLAGSHIP ARTICLE (Magazine Feature Split) */}
      {leadArticle && (
        <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-10 sm:py-14 border-b border-white/10">
          <div
            onClick={() => handleArticleClick(leadArticle)}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#0A1F44] border border-white/12 hover:border-white/25 rounded overflow-hidden transition-all duration-300"
          >
            {/* Visual Frame (7 cols) */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[16/10] overflow-hidden bg-[#050F22]">
              <img
                src={leadArticle.image}
                alt={leadArticle.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-80 pointer-events-none" />

              <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[11px]">
                <span className="px-2.5 py-1 rounded bg-[#C8102E] text-white font-semibold uppercase tracking-wider">
                  FEATURED DISPATCH
                </span>
                <span className="px-2.5 py-1 rounded bg-[#071731]/90 backdrop-blur-xs text-slate-200 border border-white/15">
                  {leadArticle.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>{leadArticle.author}</span>
                <span>{leadArticle.date}</span>
              </div>
            </div>

            {/* Editorial Lead Text (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="text-[#C8102E] font-semibold">{leadArticle.type}</span>
                <span>•</span>
                <span>{leadArticle.readTime}</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-semibold text-white tracking-tight leading-snug group-hover:text-slate-100 transition-colors">
                {leadArticle.title}
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                {leadArticle.excerpt}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="btn-editorial-red text-xs py-2 px-4 inline-flex items-center gap-1.5">
                  <span>Read Full Dispatch</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Jakarta Press Desk
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. SECONDARY FEATURED DISPATCHES (Asymmetric Magazine Spread) */}
      {secondaryArticles.length > 0 && (
        <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-12 sm:py-16 border-b border-white/10">
          <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-8">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C8102E]">
                Recent Coverage
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Secondary Monographs &amp; Bulletins
              </h3>
            </div>
            <div className="font-mono text-xs text-slate-400">
              EDITORIAL CURATION
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => handleArticleClick(article)}
                className="group cursor-pointer bg-[#0A1F44] border border-white/10 hover:border-white/25 rounded overflow-hidden flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#050F22]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-80 pointer-events-none" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded bg-[#071731]/90 backdrop-blur-xs text-[10px] font-mono text-white border border-white/15">
                        {article.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-300">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <h4 className="font-heading text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:text-slate-100 transition-colors leading-snug">
                      {article.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  <span>{article.author}</span>
                  <span className="text-[#C8102E] font-medium flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. ARCHIVAL DISPATCHES LIST (Clean Editorial List Rows, NOT cards) */}
      {archivedDispatches.length > 0 && (
        <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-12 sm:py-16 border-b border-white/10">
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-2">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C8102E]">
              Archived Publications
            </span>
            <span className="font-mono text-xs text-slate-400">
              CHRONOLOGICAL DISPATCH REGISTRY
            </span>
          </div>

          <div className="divide-y divide-white/10">
            {archivedDispatches.map((dispatch) => (
              <div
                key={dispatch.id}
                onClick={() => handleArticleClick(dispatch)}
                className="py-6 px-4 -mx-4 rounded hover:bg-white/3 transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                    <span className="text-[#C8102E] font-semibold">{dispatch.date}</span>
                    <span>•</span>
                    <span>{dispatch.category}</span>
                    <span>•</span>
                    <span>{dispatch.readTime}</span>
                  </div>

                  <h4 className="font-heading text-base sm:text-lg font-semibold text-white tracking-tight group-hover:text-slate-200 transition-colors">
                    {dispatch.title}
                  </h4>

                  <p className="font-sans text-xs text-slate-300 font-normal leading-relaxed line-clamp-2">
                    {dispatch.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-[#C8102E] shrink-0 self-end md:self-center">
                  <span>View Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. CLOSING INQUIRY PANEL (Matching Events Benchmark) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-16">
        <div className="bg-[#0A1F44] text-white rounded p-10 sm:p-14 border border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>The City Tower, Jakarta · Media Directorate</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight font-heading leading-tight">
                Accredited Media &amp; Communiqué Inquiries.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                For ministerial press liaison, embargoed corporate briefings, or broadcast satellite downlink parameters, contact our communications desk directly.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red"
              >
                <span>Contact Media Desk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
