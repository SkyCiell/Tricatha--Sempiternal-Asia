import React, { useState } from "react";
import { ArrowUpRight, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import { editorialInsights } from "../data/tsaData";
import { EVENTS_DATA } from "../data/eventsData";

export default function NewsPage({ navigateTo }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Events & Exhibitions", "Government & Protocol", "Corporate Governance", "Event Bulletins"];

  // Merge real editorial insights with verified event bulletins from existing data
  const newsItems = [
    ...editorialInsights.map((insight) => ({
      id: insight.id,
      type: "Analysis & Brief",
      category: insight.category,
      title: insight.title,
      date: insight.date,
      readTime: insight.readTime,
      excerpt: insight.excerpt,
      image: insight.image,
      author: insight.author || "TSA Research Group",
      url: "/articles"
    })),
    // Real recent event updates from verified eventsData
    {
      id: "bulletin-ai-expo-2026",
      type: "Event Bulletin",
      category: "Events & Exhibitions",
      title: "TSA Commences Multi-Hall Scenography Engineering for AI Global EXPO 2026 at ICE BSD",
      date: "March 2026",
      readTime: "3 min read",
      excerpt: "Operational deployment begins across Halls 1, 2, and 3 at Indonesia Convention Exhibition (ICE) BSD City, accommodating 50,000+ delegates and international technology pavilions.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      author: "TSA Event Operations",
      url: "/events/ai-global-expo-2026"
    },
    {
      id: "bulletin-asean-summit",
      type: "Event Bulletin",
      category: "Government & Protocol",
      title: "Diplomatic Protocol Clearances Completed for Multilateral Plenary Assembly at JCC",
      date: "February 2026",
      readTime: "4 min read",
      excerpt: "The TSA Executive Secretariat has formalized bilateral precedence schedules, encrypted telepresence conduits, and sovereign security perimeters at Jakarta Convention Center.",
      image: EVENTS_DATA[1]?.img || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      author: "Executive Secretariat",
      url: "/events/asean-diplomacy-summit"
    }
  ];

  const filteredItems = activeCategory === "All"
    ? newsItems
    : newsItems.filter(item => item.category === activeCategory || (activeCategory === "Event Bulletins" && item.type === "Event Bulletin"));

  const leadItem = filteredItems[0] || newsItems[0];
  const secondaryItems = filteredItems.slice(1);

  const handleItemClick = (item) => {
    if (navigateTo && item.url) {
      navigateTo(item.url);
    }
  };

  return (
    <div className="pt-20 bg-[#071731] min-h-screen text-[#F1F5F9] font-sans selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. Page Header - Deep Navy Editorial Banner */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.08]">
                News &amp; <br />
                <span className="text-slate-300 font-normal">Operational Updates.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
                Official dispatches, event management bulletins, and policy monographs issued directly from the Executive Secretariat at The City Tower in Central Jakarta.
              </p>
            </div>

            <div className="shrink-0 self-start lg:self-auto font-mono text-xs text-slate-400 space-y-1">
              <div>DISPATCH FREQUENCY: BI-WEEKLY</div>
              <div className="text-white font-semibold">HEADQUARTERS: THE CITY TOWER, JAKARTA</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Category Filter Bar (Sticky, Deep Navy) */}
      <section className="sticky top-16 sm:top-20 z-30 bg-[#071731]/95 backdrop-blur-md border-b border-white/10 py-3.5">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          <div className="overflow-x-auto scrollbar-none pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 flex-grow">
            <div className="flex items-center gap-2 whitespace-nowrap font-mono text-xs">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded transition-all cursor-pointer border ${
                      isActive
                        ? "bg-[#C8102E] text-white border-[#C8102E] font-semibold shadow-xs"
                        : "bg-[#0A1F44] text-slate-300 border-white/10 hover:border-white/30"
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-400 shrink-0">
            <Tag className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>{filteredItems.length} Published Updates</span>
          </div>
        </div>
      </section>

      {/* 3. Main News Grid */}
      <section className="py-16 sm:py-24 bg-[#071731] border-b border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 space-y-12 sm:space-y-16">
          
          {/* Lead Featured Story */}
          {leadItem && (
            <div
              onClick={() => handleItemClick(leadItem)}
              className="group bg-[#0A1F44] rounded border border-white/10 overflow-hidden shadow-lg hover:border-white/25 transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px] sm:min-h-[400px] overflow-hidden bg-[#050F22]">
                <img
                  src={leadItem.image}
                  alt={leadItem.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#C8102E] text-white font-mono text-[10px] font-semibold uppercase tracking-wider rounded">
                    FEATURED DISPATCH
                  </span>
                  <span className="px-2.5 py-1 bg-[#071731]/90 text-slate-300 font-mono text-[10px] uppercase tracking-wider rounded border border-white/10">
                    {leadItem.type}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                    <span className="text-[#C8102E] font-medium uppercase">{leadItem.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {leadItem.date}
                    </span>
                    {leadItem.readTime && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {leadItem.readTime}
                        </span>
                      </>
                    )}
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-slate-100 transition-colors leading-tight">
                    {leadItem.title}
                  </h2>

                  <p className="font-sans text-sm text-slate-300 leading-relaxed font-normal">
                    {leadItem.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-400">By {leadItem.author}</span>
                  <span className="text-slate-200 group-hover:text-white flex items-center gap-1.5 font-medium transition-colors">
                    <span>Read Full Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8102E]" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Secondary News Matrix */}
          {secondaryItems.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {secondaryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="group bg-[#0A1F44] rounded border border-white/10 overflow-hidden shadow-xs hover:border-white/25 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="editorial-image-frame aspect-[16/10] overflow-hidden bg-[#050F22] relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2 py-0.5 bg-[#071731]/90 backdrop-blur-xs font-mono text-[10px] text-white rounded border border-white/10">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </div>

                      <h3 className="font-heading font-semibold text-lg text-white group-hover:text-slate-100 transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 font-normal">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex items-center justify-between text-xs font-mono border-t border-white/10 mt-4 pt-4">
                    <span className="text-slate-400">{item.type}</span>
                    <span className="text-slate-300 group-hover:text-white flex items-center gap-1 transition-colors">
                      <span>Examine</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. Press & Media Office Strip */}
      <section className="py-20 bg-[#050F22]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
            PRESS &amp; MEDIA SECRETARIAT
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-medium text-white tracking-tight">
            Media Inquiries &amp; Accreditation
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Accredited domestic and international press corps requiring media access to plenary sessions, interviews with executive directors, or syndicated broadcast footage may contact our press desk.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                if (navigateTo) navigateTo("/contact");
              }}
              className="btn-editorial-red inline-flex items-center gap-2"
            >
              <span>Contact Press Secretariat</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
