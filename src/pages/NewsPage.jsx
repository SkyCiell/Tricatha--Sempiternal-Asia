import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight, Newspaper, ChevronRight } from "lucide-react";
import { editorialInsights } from "../data/tsaData";
import { EVENTS_DATA } from "../data/eventsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NewsPage({ navigateTo }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const pageRef = useRef(null);

  const categories = [
    "All",
    "Events & Exhibitions",
    "Government & Protocol",
    "Corporate Governance",
    "Event Bulletins"
  ];

  // Authentic dispatches & monographs from TSA editorial archive
  const newsItems = [
    {
      id: "bulletin-ai-expo-2026",
      type: "Flagship Technical Bulletin",
      issueNumber: "DISPATCH 26-03",
      category: "Events & Exhibitions",
      title: "TSA Commences Multi-Hall Scenography Engineering for AI Global EXPO 2026 at ICE BSD",
      date: "March 2026",
      readTime: "4 min read",
      author: "TSA Event Operations Directorate",
      leadQuote: "Engineering 45,000 sqm of uninterrupted plenary infrastructure and sovereign cybersecurity perimeters with zero margin for operational latency.",
      excerpt: "Operational deployment begins across Halls 1, 2, and 3 at Indonesia Convention Exhibition (ICE) BSD City, accommodating 50,000+ delegates and international technology pavilions with zero margin for error.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop",
      video: "/hero-bg-720p.mp4",
      url: "/events/sea-energy-transition-clean-tech-mice-expo-2025"
    },
    {
      id: "bulletin-asean-summit",
      type: "Protocol Dispatch",
      issueNumber: "DISPATCH 26-02",
      category: "Government & Protocol",
      title: "Diplomatic Protocol Clearances Completed for Multilateral Plenary Assembly at JCC Senayan",
      date: "February 2026",
      readTime: "3 min read",
      author: "Executive Secretariat",
      leadQuote: "Bilateral precedence schedules, encrypted telepresence conduits, and sovereign security perimeters uniting 18 ministerial delegations.",
      excerpt: "The TSA Executive Secretariat has formalized bilateral precedence schedules, encrypted telepresence conduits, and sovereign security perimeters uniting 18 ministerial delegations across Southeast Asia.",
      image: EVENTS_DATA[0]?.img || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      url: "/events/asean-sovereign-strategic-diplomacy-plenary-2025"
    },
    ...editorialInsights.map((insight, idx) => ({
      id: insight.id,
      type: "Research Monograph",
      issueNumber: `MONOGRAPH 25-0${idx + 4}`,
      category: insight.category,
      title: insight.title,
      date: insight.date,
      readTime: insight.readTime,
      author: insight.author || "TSA Research Group",
      leadQuote: "Methodological framework for managing live stakeholder friction in high-stakes public affairs summits.",
      excerpt: insight.excerpt,
      image: insight.image,
      url: "/events"
    }))
  ];

  const filteredItems = activeCategory === "All"
    ? newsItems
    : newsItems.filter(
        item => item.category === activeCategory ||
        (activeCategory === "Event Bulletins" && (item.type.includes("Bulletin") || item.type.includes("Dispatch")))
      );

  const leadArticle = filteredItems[0] || newsItems[0];
  const secondaryArticles = filteredItems.slice(1, 3);
  const editorialArchive = filteredItems.slice(3);

  // Parallax animation on scroll for editorial media
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mediaFrames = pageRef.current?.querySelectorAll(".editorial-media-parallax");
      mediaFrames?.forEach((media) => {
        gsap.fromTo(
          media,
          { yPercent: -6, scale: 1.05 },
          {
            yPercent: 6,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: media.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const handleArticleClick = (item) => {
    if (navigateTo && item.url) {
      navigateTo(item.url);
    }
  };

  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  return (
    <div
      ref={pageRef}
      className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white"
    >
      {/* 1. EDITORIAL MASTHEAD */}
      <header className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-8 sm:pt-14 pb-12 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.02]">
              Dispatches &amp; <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Executive Monographs.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl pt-2">
              Authoritative briefings on large-scale trade exhibitions, diplomatic plenaries, stage scenography, and operational governance across Southeast Asia.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-5">
            <div className="font-mono text-xs text-slate-400 space-y-1 text-left lg:text-right">
              <div>OFFICIAL DISPATCH BUREAU</div>
              <div className="text-white font-semibold">THE CITY TOWER · CENTRAL JAKARTA</div>
              <div>BI-WEEKLY EDITORIAL RELEASE</div>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer"
            >
              <span>Connect Media Desk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. RESTRAINED CATEGORY FILTER BAR */}
      <nav aria-label="Newsroom Dispatches Filter" className="sticky top-16 sm:top-20 z-30 bg-[#071731]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="overflow-x-auto scrollbar-none flex-grow -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-2 whitespace-nowrap min-w-max font-mono text-xs">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                const count = cat === "All"
                  ? newsItems.length
                  : newsItems.filter(
                      i => i.category === cat ||
                      (cat === "Event Bulletins" && (i.type.includes("Bulletin") || i.type.includes("Dispatch")))
                    ).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded transition-all cursor-pointer border flex items-center gap-2 ${
                      isActive
                        ? "bg-[#C8102E] text-white border-[#C8102E] font-semibold"
                        : "bg-[#0A1F44] text-slate-300 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                        isActive ? "bg-white/20 text-white font-bold" : "text-slate-400 bg-[#071731]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400 shrink-0">
            <Newspaper className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>Archive: {filteredItems.length} Monographs</span>
          </div>
        </div>
      </nav>

      {/* 3. HERO COVER STORY: VISUALLY DOMINANT EDITORIAL SPREAD */}
      {leadArticle && (
        <article className="max-w-[1520px] mx-auto px-4 sm:px-8 py-14 sm:py-20 border-b border-white/10">
          <div
            onClick={() => handleArticleClick(leadArticle)}
            className="group cursor-pointer space-y-8"
          >
            {/* Top Meta Line */}
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-white font-semibold">{leadArticle.issueNumber}</span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-300">{leadArticle.category}</span>
              </div>
              <div className="flex items-center gap-4">
                <span>{leadArticle.author}</span>
                <span>•</span>
                <span>{leadArticle.date}</span>
                <span>•</span>
                <span>{leadArticle.readTime}</span>
              </div>
            </div>

            {/* Monumental Headline */}
            <div className="max-w-5xl">
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.06] group-hover:text-slate-200 transition-colors">
                {leadArticle.title}
              </h2>
            </div>

            {/* Large-Scale Media Canvas (Video / High-Res Photo) */}
            <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded bg-[#050F22] border border-white/15 shadow-2xl">
              {leadArticle.video ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={leadArticle.video}
                  className="editorial-media-parallax w-full h-full object-cover scale-105 will-change-transform"
                />
              ) : (
                <img
                  src={leadArticle.image}
                  alt={leadArticle.title}
                  className="editorial-media-parallax w-full h-full object-cover scale-105 will-change-transform"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-black/30 pointer-events-none" />

              {/* Overlaid Editorial Lead Quote */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
                <div className="max-w-2xl bg-[#071731]/90 backdrop-blur-md p-5 sm:p-6 border border-white/15 rounded">
                  <p className="font-editorial italic text-base sm:text-lg text-slate-100 leading-relaxed font-normal">
                    "{leadArticle.leadQuote}"
                  </p>
                  <div className="mt-3 font-mono text-[11px] text-[#C8102E] font-semibold uppercase tracking-wider">
                    — Operations Protocol Dispatch
                  </div>
                </div>

                <div className="shrink-0 hidden sm:block">
                  <span className="btn-editorial-red text-xs py-2.5 px-5 inline-flex items-center gap-2 group-hover:bg-[#A50D26] transition-colors pointer-events-auto">
                    <span>Read Full Monograph</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Synopsis Columns (Magazine Columns, NOT a card box) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
              <div className="md:col-span-8 space-y-3">
                <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed font-normal">
                  {leadArticle.excerpt}
                </p>
              </div>
              <div className="md:col-span-4 border-l border-white/10 pl-6 space-y-2 font-mono text-xs text-slate-400">
                <div className="text-white font-semibold uppercase tracking-wider text-[11px]">
                  DEPLOYMENT LOCATION
                </div>
                <div>Indonesia Convention Exhibition (ICE) BSD City</div>
                <div className="text-[#C8102E] font-semibold pt-1">
                  TARGET ATTENDANCE: 50,000+ DELEGATES
                </div>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* 4. ASYMMETRICAL EDITORIAL SPREAD (Varied Image Sizes & Positions, NO Cards) */}
      {secondaryArticles.length > 0 && (
        <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-20 border-b border-white/10">
          <div className="pb-8 border-b border-white/10 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Diplomatic Communiqués &amp; Governance
              </h3>
            </div>
            <div className="font-mono text-xs text-slate-400">
              EDITORIAL CURATION · SPREAD 02
            </div>
          </div>

          {/* Asymmetric 7-col / 5-col Magazine Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Primary Feature (7 cols): Wide landscape media */}
            {secondaryArticles[0] && (
              <div
                onClick={() => handleArticleClick(secondaryArticles[0])}
                className="lg:col-span-7 group cursor-pointer space-y-6"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded bg-[#050F22] border border-white/15">
                  <img
                    src={secondaryArticles[0].image}
                    alt={secondaryArticles[0].title}
                    className="editorial-media-parallax w-full h-full object-cover scale-105 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-80 pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span>{secondaryArticles[0].author}</span>
                    <span>{secondaryArticles[0].date}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                    <span className="text-[#C8102E] font-semibold">{secondaryArticles[0].category}</span>
                    <span>•</span>
                    <span>{secondaryArticles[0].readTime}</span>
                  </div>

                  <h4 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-slate-200 transition-colors">
                    {secondaryArticles[0].title}
                  </h4>

                  <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed font-normal">
                    {secondaryArticles[0].excerpt}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#C8102E] font-semibold">
                    <span>Inspect Diplomatic Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )}

            {/* Right Secondary Feature (5 cols): Portrait crop with vertical divider */}
            {secondaryArticles[1] && (
              <div
                onClick={() => handleArticleClick(secondaryArticles[1])}
                className="lg:col-span-5 group cursor-pointer space-y-6 lg:border-l lg:border-white/10 lg:pl-10"
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded bg-[#050F22] border border-white/15">
                  <img
                    src={secondaryArticles[1].image}
                    alt={secondaryArticles[1].title}
                    className="editorial-media-parallax w-full h-full object-cover scale-105 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-80 pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span>{secondaryArticles[1].author}</span>
                    <span>{secondaryArticles[1].date}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                    <span className="text-[#C8102E] font-semibold">{secondaryArticles[1].category}</span>
                    <span>•</span>
                    <span>{secondaryArticles[1].date}</span>
                  </div>

                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-slate-200 transition-colors">
                    {secondaryArticles[1].title}
                  </h4>

                  <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed font-normal">
                    {secondaryArticles[1].excerpt}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#C8102E] font-semibold">
                    <span>Review Monograph</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>
      )}

      {/* 5. ARCHIVAL EDITORIAL REGISTRY (Clean Broadsheet Format, NOT cards) */}
      {editorialArchive.length > 0 && (
        <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-20 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                Dispatches &amp; Executive Research Archive
              </h3>
            </div>
            <div className="font-mono text-xs text-slate-400">
              OFFICIAL MONOGRAPH RECORD
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {editorialArchive.map((item, idx) => (
              <div
                key={item.id || idx}
                onClick={() => handleArticleClick(item)}
                className="py-7 px-4 -mx-4 rounded hover:bg-white/[0.02] transition-colors cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group"
              >
                {/* Meta Column (3 cols) */}
                <div className="lg:col-span-3 space-y-1 font-mono text-xs">
                  <div className="text-[#C8102E] font-semibold">{item.date}</div>
                  <div className="text-slate-400 text-[11px]">{item.category}</div>
                  <div className="text-slate-500 text-[10px]">{item.readTime}</div>
                </div>

                {/* Headline & Abstract Column (7 cols) */}
                <div className="lg:col-span-7 space-y-1.5">
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 font-sans text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>

                {/* Action Column (2 cols) */}
                <div className="lg:col-span-2 flex items-center justify-end font-mono text-xs text-slate-400 group-hover:text-white transition-colors">
                  <span className="inline-flex items-center gap-1.5 text-[#C8102E]">
                    <span>Read Dossier</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. EDITORIAL MEDIA DESK LIAISON */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-16 sm:mt-24">
        <div className="bg-[#0A1F44] border border-white/15 rounded p-8 sm:p-14 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Accredited Media &amp; Embargoed Inquiries
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
                For ministerial press credentials, high-resolution scenography photography, broadcast satellite downlink parameters, or interview requests with TSA executive directors.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end items-start lg:items-end gap-4">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red text-xs py-3 px-6"
              >
                <span>Connect With Press Desk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs text-slate-400">
                Official Response: Under 4 Business Hours
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
