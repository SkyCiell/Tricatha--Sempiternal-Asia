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
    <div className="bg-[#FFFFFF] min-h-screen text-[#0A1F44] font-sans pt-20 sm:pt-28 pb-20">
      
      {/* 1. ARCHITECTURAL HEADER - illoca Typography & Framing */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-[#0A1F44]/15">
          
          {/* Left Title & Statement (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0A1F44] tracking-tight leading-[1.05]">
              Selected Works &amp; Plenary Assemblies
            </h1>
            
            <p className="text-[#5B6B84] text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              A curated portfolio of sovereign conferences, ministerial assemblies, nationwide trade expos, and high-level corporate retreats orchestrated with protocol rigor across Southeast Asia.
            </p>
          </div>

          {/* Right Editorial Telemetry (4 cols) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-5">
            <div className="space-y-1 text-left lg:text-right font-mono text-xs text-[#5B6B84]">
              <div>16 Curated Sovereign &amp; Enterprise Works</div>
              <div className="text-[#C8102E] font-semibold">Corridor: Jakarta / ASEAN Plenaries</div>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-tech-red group focus:outline-none"
            >
              <div className="w-10 h-full bg-[#A50D25] flex items-center justify-center text-white border-r border-white/20">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="px-5 h-full flex items-center font-mono text-xs font-semibold">
                Inquire Plenary Mandate
              </div>
            </button>
          </div>

        </div>
      </section>

      {/* 2. MINIMAL DRAFTING FILTER BAR */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-8 py-3 sticky top-16 sm:top-20 z-30 bg-[#FFFFFF] border-b border-[#0A1F44]/15">
        <div className="flex items-center justify-between gap-4 pb-2">
          
          {/* Scrollable Track */}
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
                    className={`px-3.5 py-1.5 rounded-[2px] transition-all cursor-pointer border flex items-center gap-2 ${
                      isActive
                        ? "bg-[#C8102E] text-white border-[#A50D25] font-semibold shadow-xs"
                        : "bg-[#FFFFFF] text-[#0A1F44] border-[#0A1F44]/20 hover:border-[#0A1F44]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-[2px] ${
                        isActive
                          ? "bg-white/25 text-white"
                          : "text-[#5B6B84] bg-[#F8F9FA]"
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

      {/* 3. MASONRY GALLERY - Photography Dominant, Clean Visual Flow */}
      <section className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-2 sm:px-6 pt-6 pb-20">
        <Masonry
          items={filteredEvents}
          ease="power3.out"
          duration={0.6}
          stagger={0.03}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.99}
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
              className="mt-2 px-5 py-2.5 bg-[#0A1F44] hover:bg-[#C8102E] text-white text-xs font-medium uppercase tracking-wide rounded-md cursor-pointer transition-colors"
            >
              Show All Events
            </button>
          </div>
        )}
      </section>

      {/* 4. CLOSING INQUIRY PANEL - Editorial Light-Neutral #F5F6F8 Section */}
      <section className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 mt-6">
        <div className="bg-[#F5F6F8] text-[#0A1F44] rounded-lg p-10 sm:p-14 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C8102E] font-medium uppercase">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>The City Tower, Jakarta · Executive Mandates</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-[#0A1F44] tracking-tight font-heading leading-tight">
                Planning your next flagship assembly?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                From ministerial plenaries and nationwide trade expos to exclusive corporate retreats, our protocol and spatial engineering teams ensure world-class delivery with zero tolerance for error.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={handleInquiry}
                className="px-7 py-3.5 bg-[#0A1F44] hover:bg-[#C8102E] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-editorial flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02]"
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

