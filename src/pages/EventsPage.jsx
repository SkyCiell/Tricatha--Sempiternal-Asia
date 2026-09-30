import React, { useState, useMemo } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Users,
  SlidersHorizontal,
  ChevronRight,
  Building2,
  Calendar
} from "lucide-react";
import {
  EVENTS_DATA,
  EVENT_CATEGORIES,
  AI_GLOBAL_EXPO_EVENT
} from "../data/eventsData";

export default function EventsPage({ navigateTo }) {
  const [activeCategory, setActiveCategory] = useState("All Events");

  // The Star Featured Event: AI Global EXPO 2026
  const featuredEvent = AI_GLOBAL_EXPO_EVENT;

  // Filter events archive based on active category
  const filteredEvents = useMemo(() => {
    if (activeCategory === "All Events" || activeCategory === "All") {
      return EVENTS_DATA;
    }
    return EVENTS_DATA.filter(
      (evt) => evt.category.toLowerCase() === activeCategory.toLowerCase()
    );
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
    <div className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">

      {/* 1. EDITORIAL HEADER (No decorative badges, strong typography hierarchy) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-white/10">

          {/* Left Title & Explanation (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading text-2xl sm:text-4xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.08]">
              Events &{" "}
              <span className="font-editorial italic font-normal text-slate-200">
                Production Archive.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              A curated visual record of sovereign plenaries, multilateral trade exhibitions, corporate assemblies, and high-stakes brand productions orchestrated across Southeast Asia.
            </p>
          </div>

          {/* Right Editorial Telemetry (4 cols) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-5">
            <div className="space-y-1.5 text-left lg:text-right font-mono text-xs text-slate-400">
              <div className="text-slate-300 font-medium">16 Curated Works in Archive</div>
              <div>Jakarta · Bali · Across ASEAN</div>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red cursor-pointer flex items-center justify-center gap-2 shadow-sm text-xs py-3 px-6 w-full sm:w-auto"
            >
              <span>Inquire Event Production</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. FEATURED EVENT: AI GLOBAL EXPO 2026 (Large Visual Treatment & Integrated Composition) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pb-16">
        <div className="bg-[#0A1F44] rounded-lg border border-white/12 hover:border-[#C8102E]/50 transition-colors duration-300 overflow-hidden shadow-xl">
          
          {/* Wide Panoramic Visual Header */}
          <div
            onClick={() => handleEventClick(featuredEvent)}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[320px] sm:min-h-[440px] max-h-[580px] overflow-hidden bg-[#050F22] cursor-pointer group"
          >
            <img
              src={featuredEvent.img}
              alt={featuredEvent.title}
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/35 to-transparent pointer-events-none" />

            {/* Top Status & Category Badges */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between font-mono text-xs">
              <span className="px-3.5 py-1.5 bg-[#C8102E] text-white font-semibold uppercase tracking-wider rounded text-[11px] shadow-sm">
                Upcoming Flagship · {featuredEvent.year}
              </span>
              <span className="px-3.5 py-1.5 bg-[#071731]/90 backdrop-blur-xs text-slate-200 border border-white/15 rounded text-[11px]">
                {featuredEvent.category}
              </span>
            </div>

            {/* Bottom Meta Overlay */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-200">
              <span className="flex items-center gap-2 bg-[#071731]/85 backdrop-blur-xs px-3.5 py-1.5 rounded border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>{featuredEvent.location}</span>
              </span>
              <span className="flex items-center gap-2 bg-[#071731]/85 backdrop-blur-xs px-3.5 py-1.5 rounded border border-white/10">
                <Users className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>{featuredEvent.attendees}</span>
              </span>
            </div>
          </div>

          {/* Structured Adjacent Dossier Information */}
          <div className="p-6 sm:p-10 lg:p-12 space-y-8">
            
            {/* Title & Description Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-3 font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider">
                  <span>Operational Master Blueprint</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400 font-normal">Q1 {featuredEvent.year}</span>
                </div>

                <h2
                  onClick={() => handleEventClick(featuredEvent)}
                  className="font-heading text-2xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight cursor-pointer hover:text-slate-100 transition-colors"
                >
                  {featuredEvent.title}
                </h2>

                <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1">
                  {featuredEvent.description}
                </p>
              </div>

              {/* Scope & Mandate Summary (5 cols) */}
              <div className="lg:col-span-5 bg-[#071731]/70 border border-white/10 rounded-lg p-5 sm:p-6 space-y-3">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                  Production Mandate &amp; Scope
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {featuredEvent.scope}
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Client Authority</span>
                  <span className="text-white font-medium truncate max-w-[200px]">
                    {featuredEvent.client}
                  </span>
                </div>
              </div>
            </div>

            {/* Integrated Production Figures (Hairline Dividers & High Typographic Weight) */}
            <div className="pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 font-mono">
                {featuredEvent.stats.map((stat, idx) => (
                  <div key={idx} className={idx > 0 ? "pt-4 md:pt-0 md:pl-8" : ""}>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-medium">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {stat.subtext}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleEventClick(featuredEvent)}
                  className="btn-editorial-red cursor-pointer flex items-center gap-2 text-xs py-3 px-6 shadow-sm"
                >
                  <span>Inspect Event Record</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-400 hidden md:inline-block">
                  Complete operational blueprint &amp; plenary documentation
                </span>
              </div>

              <div className="text-xs font-mono text-slate-400">
                <span>Venue: </span>
                <span className="text-slate-200">{featuredEvent.venue}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. INTEGRATED ARCHIVE FILTER BAR (Clean, sticky, integrated) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-3 sticky top-[76px] sm:top-20 z-30 bg-[#071731]/95 backdrop-blur-md border-b border-white/10 mb-10">
        <div className="flex items-center justify-between gap-4 pb-1">

          {/* Horizontal Scrollable Category Track */}
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
                        ? "bg-[#C8102E] text-white border-[#C8102E] font-semibold shadow-xs"
                        : "bg-[#0A1F44] text-slate-300 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        isActive
                          ? "bg-white/25 text-white"
                          : "text-slate-400 bg-[#071731]"
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
            <span>Showing {filteredEvents.length} Production Records</span>
          </div>

        </div>
      </section>

      {/* 4. STRUCTURED EDITORIAL ARCHIVE (Alternating & Asymmetric Cadence) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pb-20 space-y-10">

        {/* Dynamic Editorial Layout based on filtered events */}
        {filteredEvents.length === 0 ? (
          <div className="py-24 text-center space-y-3 bg-[#0A1F44] rounded-lg border border-white/10 p-12">
            <h3 className="text-xl font-medium text-white font-heading">
              No event records found in this category
            </h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Please select another category or return to the complete production archive.
            </p>
            <button
              onClick={() => setActiveCategory("All Events")}
              className="mt-4 btn-editorial-red text-xs py-2.5 px-5"
            >
              Show All Events
            </button>
          </div>
        ) : (
          <>
            {/* ROW 1: Flagship Alternating Split (Event 1: 7/5 split, image on left) */}
            {filteredEvents[0] && (
              <div
                onClick={() => handleEventClick(filteredEvents[0])}
                className="group bg-[#0A1F44] rounded-lg border border-white/10 hover:border-[#C8102E]/60 transition-all duration-300 cursor-pointer overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-[#050F22]">
                  <img
                    src={filteredEvents[0].img}
                    alt={filteredEvents[0].title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-85 pointer-events-none" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-xs">
                    <span className="px-2.5 py-1 bg-[#071731]/90 backdrop-blur-xs text-slate-200 border border-white/15 rounded text-[11px]">
                      {filteredEvents[0].category}
                    </span>
                    <span className="px-2.5 py-1 bg-[#C8102E] text-white font-bold rounded text-[11px]">
                      {filteredEvents[0].year}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-1.5 bg-[#071731]/85 backdrop-blur-xs px-2.5 py-1 rounded border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>{filteredEvents[0].location.split(",")[0]}</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#071731]/85 backdrop-blur-xs px-2.5 py-1 rounded border border-white/10">
                      <Users className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>{filteredEvents[0].attendees}</span>
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                      Client: {filteredEvents[0].client}
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-slate-100 transition-colors leading-snug">
                      {filteredEvents[0].title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {filteredEvents[0].description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        Execution Scope:
                      </span>
                      <p className="text-xs text-slate-200 font-mono leading-relaxed line-clamp-2">
                        {filteredEvents[0].scope}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">{filteredEvents[0].venue}</span>
                      <span className="text-slate-200 group-hover:text-white transition-colors inline-flex items-center gap-1.5 font-medium">
                        <span>View Case Dossier</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#C8102E]" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ROW 2: Flagship Inverted Split (Event 2: 5 cols text on left, 7 cols image on right on desktop) */}
            {filteredEvents[1] && (
              <div
                onClick={() => handleEventClick(filteredEvents[1])}
                className="group bg-[#0A1F44] rounded-lg border border-white/10 hover:border-[#C8102E]/60 transition-all duration-300 cursor-pointer overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Text First on Desktop (5 cols) */}
                <div className="order-2 lg:order-1 lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                      Client: {filteredEvents[1].client}
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-slate-100 transition-colors leading-snug">
                      {filteredEvents[1].title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {filteredEvents[1].description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        Execution Scope:
                      </span>
                      <p className="text-xs text-slate-200 font-mono leading-relaxed line-clamp-2">
                        {filteredEvents[1].scope}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">{filteredEvents[1].venue}</span>
                      <span className="text-slate-200 group-hover:text-white transition-colors inline-flex items-center gap-1.5 font-medium">
                        <span>View Case Dossier</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#C8102E]" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image Second on Desktop (7 cols) */}
                <div className="order-1 lg:order-2 lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-[#050F22]">
                  <img
                    src={filteredEvents[1].img}
                    alt={filteredEvents[1].title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-85 pointer-events-none" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-xs">
                    <span className="px-2.5 py-1 bg-[#071731]/90 backdrop-blur-xs text-slate-200 border border-white/15 rounded text-[11px]">
                      {filteredEvents[1].category}
                    </span>
                    <span className="px-2.5 py-1 bg-[#C8102E] text-white font-bold rounded text-[11px]">
                      {filteredEvents[1].year}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-1.5 bg-[#071731]/85 backdrop-blur-xs px-2.5 py-1 rounded border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>{filteredEvents[1].location.split(",")[0]}</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#071731]/85 backdrop-blur-xs px-2.5 py-1 rounded border border-white/10">
                      <Users className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>{filteredEvents[1].attendees}</span>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* ROW 3: Asymmetric 2-Column Flagship Duo (Events 2 and 3) */}
            {filteredEvents.length > 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredEvents.slice(2, 4).map((evt) => (
                  <div
                    key={evt.id}
                    onClick={() => handleEventClick(evt)}
                    className="group bg-[#0A1F44] rounded-lg border border-white/10 hover:border-[#C8102E]/60 transition-all duration-300 cursor-pointer overflow-hidden shadow-md flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#050F22]">
                      <img
                        src={evt.img}
                        alt={evt.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-85 pointer-events-none" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[11px]">
                        <span className="px-2.5 py-0.5 bg-[#071731]/90 backdrop-blur-xs text-slate-200 border border-white/15 rounded">
                          {evt.category}
                        </span>
                        <span className="px-2.5 py-0.5 bg-[#C8102E] text-white font-bold rounded">
                          {evt.year}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-300">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                          <span>{evt.location.split(",")[0]}</span>
                        </span>
                        <span className="font-semibold text-white flex items-center gap-1">
                          <Users className="w-3 h-3 text-[#C8102E]" />
                          <span>{evt.attendees}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4">
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono text-slate-400">
                          Client: {evt.client}
                        </div>
                        <h4 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-slate-100 transition-colors leading-snug">
                          {evt.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {evt.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 space-y-2">
                        <div className="text-[11px] font-mono text-slate-400 truncate">
                          <span className="text-slate-500">Scope: </span>
                          <span>{evt.scope}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-mono pt-1">
                          <span className="text-slate-400 text-[11px]">{evt.venue}</span>
                          <span className="text-slate-300 group-hover:text-white transition-colors inline-flex items-center gap-1.5 font-medium">
                            <span>View Case Dossier</span>
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#C8102E]" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ROW 4: Structured 3-Column Editorial Grid (Events 4 through end) */}
            {filteredEvents.length > 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {filteredEvents.slice(4).map((evt) => (
                  <div
                    key={evt.id}
                    onClick={() => handleEventClick(evt)}
                    className="group bg-[#0A1F44] rounded-lg border border-white/10 hover:border-[#C8102E]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-md"
                  >
                    {/* Card Visual Frame */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#050F22]">
                      <img
                        src={evt.img}
                        alt={evt.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-85 pointer-events-none" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px]">
                        <span className="px-2.5 py-0.5 bg-[#071731]/90 backdrop-blur-xs text-slate-200 border border-white/15 rounded">
                          {evt.category.split(" ")[0]}
                        </span>
                        <span className="px-2.5 py-0.5 bg-[#C8102E] text-white font-bold rounded">
                          {evt.year}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                        <span className="truncate max-w-[180px] flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#C8102E] shrink-0" />
                          <span>{evt.location.split(",")[0]}</span>
                        </span>
                        <span className="font-semibold text-white">{evt.attendees.split(" ")[0]}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="text-[10px] font-mono text-slate-400">
                          {evt.client}
                        </div>
                        <h4 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-slate-100 transition-colors line-clamp-2 leading-snug">
                          {evt.title}
                        </h4>
                        <p className="font-sans text-xs text-slate-300 line-clamp-2 leading-relaxed">
                          {evt.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 space-y-2 text-xs font-mono">
                        <div className="text-[10px] text-slate-400 truncate">
                          <span className="text-slate-500">Scope: </span>
                          <span>{evt.scope}</span>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-slate-400 group-hover:text-white transition-colors">
                            View Case Dossier
                          </span>
                          <span className="w-7 h-7 rounded bg-[#071731] group-hover:bg-[#C8102E] text-slate-300 group-hover:text-white flex items-center justify-center transition-colors">
                            <ChevronRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

      </section>

      {/* 5. CLOSING EXECUTIVE INQUIRY PANEL (Clean architectural invitation) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-4">
        <div className="bg-[#0A1F44] text-white rounded-lg p-8 sm:p-14 border border-white/10 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>The City Tower, Jakarta · Executive Mandates</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight font-heading leading-tight">
                Planning your next flagship assembly?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                From ministerial plenaries and nationwide trade expos to exclusive corporate retreats, our protocol and spatial engineering teams ensure world-class delivery with zero margin for error.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red text-xs py-3 px-6 cursor-pointer flex items-center gap-2 shadow-sm"
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
