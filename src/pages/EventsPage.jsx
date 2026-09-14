import React, { useState, useMemo } from "react";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import Masonry from "../components/Masonry";
import { EVENTS_DATA, EVENT_CATEGORIES } from "../data/eventsData";

export default function EventsPage({ navigateTo }) {
  const [activeCategory, setActiveCategory] = useState("All Events");

  // Filter events based on active category
  const filteredEvents = useMemo(() => {
    const data =
      activeCategory === "All Events" || activeCategory === "All"
        ? EVENTS_DATA
        : EVENTS_DATA.filter(
            (evt) => evt.category.toLowerCase() === activeCategory.toLowerCase()
          );

    return data.map((evt) => ({
      ...evt,
      url: `/events/${evt.slug}`
    }));
  }, [activeCategory]);

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
    if (navigateTo) navigateTo("/contact");
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0A1F44] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-slate-200">
          
          {/* Left Title & Statement (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>FIELD DOCUMENTATION ARCHIVE</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#0A1F44] tracking-tight leading-[1.08]">
              Events &amp; Plenary Assemblies
            </h1>
            
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              A curated photographic record of sovereign conferences, ministerial assemblies, nationwide trade expos, and high-level corporate retreats orchestrated with protocol rigor across Southeast Asia.
            </p>
          </div>

          {/* Right Editorial Telemetry (4 cols) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-5">
            <div className="space-y-1 text-left lg:text-right font-mono text-xs text-slate-500">
              <div>16 Curated Works in Active Directory</div>
              <div className="text-[#C8102E] font-semibold">Corridor: Jakarta / ASEAN Plenaries</div>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red"
            >
              <span>Inquire Plenary Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. DRAFTING FILTER BAR (Clean, sticky, horizontally scrollable) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-3 sticky top-16 sm:top-20 z-30 bg-[#FFFFFF] border-b border-slate-200">
        <div className="flex items-center justify-between gap-4 pb-1">
          
          {/* Scrollable Category Track */}
          <div className="overflow-x-auto scrollbar-none pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 flex-grow">
            <div className="flex items-center gap-2 whitespace-nowrap min-w-max font-mono text-xs">
              {EVENT_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                const count =
                  cat === "All Events"
                    ? EVENTS_DATA.length
                    : EVENTS_DATA.filter((e) => e.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded transition-all cursor-pointer border flex items-center gap-2 ${
                      isActive
                        ? "bg-[#C8102E] text-white border-[#A50D25] font-semibold shadow-xs"
                        : "bg-[#FFFFFF] text-[#0A1F44] border-slate-200 hover:border-[#0A1F44]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-white/25 text-white"
                          : "text-slate-500 bg-[#F5F6F8]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-2 text-xs text-slate-400 shrink-0 font-mono">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>Showing {filteredEvents.length} Events</span>
          </div>

        </div>
      </section>

      {/* 3. MASONRY GALLERY - Required React Bits Specs */}
      <section className="max-w-[1520px] mx-auto px-2 sm:px-6 pt-8 pb-20">
        <Masonry
          items={filteredEvents}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          _colorShiftOnHover={false}
          onItemClick={handleEventClick}
        />

        {filteredEvents.length === 0 && (
          <div className="py-24 text-center space-y-3 col-span-full">
            <h3 className="text-lg font-medium text-[#0A1F44]">No events found in this category</h3>
            <p className="text-sm text-slate-500">
              Select another category or view our complete archive.
            </p>
            <button
              onClick={() => setActiveCategory("All Events")}
              className="mt-2 btn-editorial-navy"
            >
              Show All Events
            </button>
          </div>
        )}
      </section>

      {/* 4. CLOSING INQUIRY PANEL (Light Neutral #F5F6F8 Rhythm) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-6">
        <div className="bg-[#F5F6F8] text-[#0A1F44] rounded-lg p-10 sm:p-14 border border-slate-200/80">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>The City Tower, Jakarta · Executive Mandates</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-[#0A1F44] tracking-tight font-heading leading-tight">
                Planning your next flagship assembly?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                From ministerial plenaries and nationwide trade expos to exclusive corporate retreats, our protocol and spatial engineering teams ensure world-class delivery with zero margin for error.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial-navy"
              >
                <span>Consult Event Directors</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
