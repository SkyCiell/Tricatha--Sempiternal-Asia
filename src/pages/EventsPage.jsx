import React, { useState, useMemo } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  EVENTS_DATA,
  EVENT_CATEGORIES
} from "../data/eventsData";
import Masonry from "../components/Masonry";

export default function EventsPage({ navigateTo }) {
  const [activeCategory, setActiveCategory] = useState("All Events");

  // 9 event resmi TSA dengan ukuran seragam 3-kolom yang rapi dan proporsional untuk foto
  const allEvents = useMemo(() => {
    return EVENTS_DATA.map((evt) => ({
      ...evt,
      colSpan: 1,
      featured: false
    }));
  }, []);

  // Filtered list based on active category
  const filteredEvents = useMemo(() => {
    if (activeCategory === "All Events" || activeCategory === "All") {
      return allEvents;
    }
    return allEvents.filter(
      (evt) => evt.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [allEvents, activeCategory]);


  const getCategoryCount = (cat) => {
    if (cat === "All Events" || cat === "All") {
      return allEvents.length;
    }
    return allEvents.filter((e) => e.category.toLowerCase() === cat.toLowerCase()).length;
  };

  const handleEventClick = (item) => {
    const targetUrl = item.slug ? `/events/${item.slug}` : `/events/${item.id}`;
    if (navigateTo) {
      navigateTo(targetUrl);
    } else {
      window.history.pushState(null, "", targetUrl);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const handleInquiry = () => {
    if (navigateTo) {
      navigateTo("/contact");
    } else {
      window.history.pushState(null, "", "/contact");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#C8102E] selection:text-white">

      {/* 1. OPENING MASTHEAD & ARCHIVE HEADER — Off-White Canvas */}
      <section className="bg-[#FAF9F6] text-[#071731] border-b border-[#E2E8F0] pt-24 sm:pt-32 pb-10 sm:pb-16 relative">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-4">
            
            {/* Title & Editorial Narrative */}
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-[76px] font-bold text-[#071731] tracking-tight leading-[1.02]">
                Events &amp; <br />
                <span className="font-editorial italic font-normal text-[#0A1F44]">
                  Production Archive.
                </span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
                A curated visual record of sovereign plenaries, multilateral trade exhibitions, corporate assemblies, and high-stakes brand productions orchestrated across Southeast Asia.
              </p>
            </div>

            {/* Right Action */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                type="button"
                onClick={handleInquiry}
                className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Inquire Event Production</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. RESTRAINED STICKY CATEGORY FILTER BAR — Clean Light Track */}
      <nav
        aria-label="Events Category Filter"
        className="sticky top-16 sm:top-20 z-30 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E2E8F0]"
      >
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
          
          <div className="overflow-x-auto scrollbar-none flex-grow -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap min-w-max font-mono text-xs">
              {EVENT_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                const count = getCategoryCount(cat);

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`py-2 px-3 sm:px-4 rounded-xs transition-colors duration-200 cursor-pointer flex items-center gap-2 border-b-2 ${
                      isActive
                        ? "text-[#071731] font-semibold border-[#C8102E] bg-black/5"
                        : "text-slate-500 hover:text-[#071731] border-transparent hover:bg-black/[0.02]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[11px] font-mono ${isActive ? "text-[#C8102E]" : "text-slate-400"}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* 3. DYNAMIC COMPOSITION BODY: Unified Gallery with Strict Uniform Card Spacing */}
      <section className="bg-[#071731] text-[#F1F5F9] pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-white/10 relative">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="py-24 text-center space-y-3 bg-[#0A1F44] rounded-xs border border-white/10 p-12">
              <h2 className="text-xl font-medium text-white font-heading">
                No event records found in this category
              </h2>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                Please select another category or return to the complete production archive.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory("All Events")}
                className="mt-4 btn-editorial-red text-xs py-2.5 px-5 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Show All Events</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <Masonry
              items={filteredEvents}
              columns={3}
              onItemClick={handleEventClick}
            />
          )}
        </div>
      </section>

      {/* 4. CLOSING EXECUTIVE INQUIRY PANEL — Rich Navy & Crimson Accent */}
      <section className="bg-[#0A1F44] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight font-heading leading-tight">
                Structure Your Sovereign Plenary <br className="hidden sm:inline" />or Trade Exposition.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                From VVIP diplomatic protocol to 45,000-delegate industrial trade exhibitions, TSA deploys turnkey event infrastructure across Southeast Asia with zero margin for error.
              </p>
            </div>

            <button
              type="button"
              onClick={handleInquiry}
              className="btn-editorial-red shrink-0 text-xs py-3.5 px-7 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Initiate Event Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
