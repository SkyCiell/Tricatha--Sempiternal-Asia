import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, MapPin, Users, ChevronRight } from "lucide-react";
import { featuredProjects } from "../data/tsaData";
import CaseStudyModal from "./CaseStudyModal";

const EVENT_FILTERS = [
  "All Events",
  "MICE & Expos",
  "Government & Plenary",
  "Corporate & AGM"
];

export default function EventSection({ navigateTo, onOpenWorkModal }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All Events");

  // Lead Flagship / Upcoming Spotlight (AI Global EXPO 2026)
  const leadEvent = featuredProjects[0];

  // Filter remaining projects
  const filteredEvents = featuredProjects.slice(1).filter((event) => {
    if (activeCategory === "All Events") return true;
    if (activeCategory === "MICE & Expos") {
      return (
        event.category.toLowerCase().includes("expo") ||
        event.category.toLowerCase().includes("mice") ||
        event.category.toLowerCase().includes("exhibition")
      );
    }
    if (activeCategory === "Government & Plenary") {
      return (
        event.category.toLowerCase().includes("government") ||
        event.category.toLowerCase().includes("diplomatic") ||
        event.category.toLowerCase().includes("sovereign")
      );
    }
    if (activeCategory === "Corporate & AGM") {
      return (
        event.category.toLowerCase().includes("corporate") ||
        event.category.toLowerCase().includes("shareholder") ||
        event.category.toLowerCase().includes("agm")
      );
    }
    return true;
  });

  const handleViewArchive = () => {
    if (navigateTo) {
      navigateTo("/events");
    }
  };

  return (
    <section id="event" className="py-20 sm:py-28 bg-white text-[#071731] border-b border-[#E2E8F0] relative overflow-hidden">

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">

        {/* 1. Section Header: Strong Editorial Typography Without Badges */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-[#E2E8F0]">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[46px] font-bold text-[#071731] tracking-tight leading-[1.12]">
              Monumental Trade Expos &amp; <br />
              <span className="font-editorial italic font-normal text-[#0A1F44]/80">
                High-Stakes Sovereign Plenaries.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed font-normal pt-1 max-w-2xl">
              From multi-hall international trade exhibitions with thousands of registered buyers to high-protocol diplomatic plenaries, TSA designs and orchestrates events that command authority and drive measurable commercial outcomes.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleViewArchive}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer flex items-center gap-2 shadow-xs"
            >
              <span>Explore Complete Event Archive</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      {/* 2. Featured Flagship Production: AI Global EXPO 2026 (100vw × 100vh Fullscreen Cinematic Scene) */}
      {leadEvent && (
        <div className="relative w-screen left-1/2 -translate-x-1/2 h-screen overflow-hidden bg-[#071731] my-10 select-none">
          {/* Fullscreen Photo (Edge-to-Edge 100vw × 100vh) */}
          <img
            src={leadEvent.image}
            alt={leadEvent.name}
            className="w-full h-full object-cover object-center scale-102 will-change-transform"
          />

          {/* Directional Cinematic Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/65 via-50% to-[#071731]/25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/45 to-transparent pointer-events-none" />

          {/* Typography Layered Directly Over Fullscreen Media */}
          <div className="absolute inset-0 p-6 sm:p-12 lg:p-16 flex flex-col justify-between z-10 text-white">
            
            {/* Top Bar Meta */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#C8102E] text-white font-semibold uppercase tracking-wider rounded text-[11px] shadow-md">
                  Upcoming Flagship Summit · {leadEvent.year}
                </span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-xs text-slate-200 border border-white/20 rounded text-[11px]">
                  {leadEvent.category}
                </span>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>{leadEvent.location}</span>
                </span>
                <span className="hidden sm:flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>24,000+ Trade Delegates</span>
                </span>
              </div>
            </div>

            {/* Main Editorial Composition Over Fullscreen Photo */}
            <div className="max-w-4xl space-y-5 my-auto">
              <div className="space-y-1">
                <span className="text-[#C8102E] font-mono text-xs uppercase tracking-widest font-semibold block">
                  OPERATIONAL MASTER BLUEPRINT · Q1 {leadEvent.year}
                </span>
                <h3
                  onClick={() => setSelectedProject(leadEvent)}
                  className="font-heading text-3xl sm:text-5xl lg:text-[60px] font-bold text-white tracking-tight leading-[1.08] cursor-pointer hover:text-slate-100 transition-colors drop-shadow-lg"
                >
                  {leadEvent.name}
                </h3>
              </div>

              <p className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl drop-shadow-md">
                {leadEvent.shortDesc}
              </p>

              {/* Integrated Production Figures Directly Over Media */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-4 border-t border-white/15 max-w-3xl">
                <div>
                  <div className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">180+</div>
                  <div className="text-[11px] font-mono text-slate-300 uppercase tracking-wider mt-0.5">Enterprise Pavilions</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">3 Multi-Hall Complexes</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold font-heading text-[#C8102E] tracking-tight">35</div>
                  <div className="text-[11px] font-mono text-slate-300 uppercase tracking-wider mt-0.5">Ministerial Keynotes</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Sovereign Protocol Cleared</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">24K+</div>
                  <div className="text-[11px] font-mono text-slate-300 uppercase tracking-wider mt-0.5">Trade Delegates</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">ASEAN &amp; Global Buyers</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">100%</div>
                  <div className="text-[11px] font-mono text-slate-300 uppercase tracking-wider mt-0.5">Turnkey Command</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Zero Third-Party Relies</div>
                </div>
              </div>

              {/* Direct Actions Over Media */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => setSelectedProject(leadEvent)}
                  className="btn-editorial-red text-xs py-3 px-6 cursor-pointer flex items-center gap-2 shadow-xl"
                >
                  <span>Inspect Full Event Record</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleViewArchive}
                  className="px-5 py-3 rounded bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-2 backdrop-blur-xs shadow-xl"
                >
                  <span>Browse All 2026 Summits</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
                </button>
              </div>
            </div>

            {/* Bottom Bar Info Over Media */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/10 pt-3">
              <span>VENUE PARTNER: INDONESIA CONVENTION EXHIBITION (ICE BSD)</span>
              <span className="hidden sm:inline">CENTRAL SECRETARIAT: THE CITY TOWER JAKARTA</span>
            </div>

          </div>
        </div>
      )}

        {/* 3. Event Archive Header & Integrated Filters */}
        <div className="mt-16 pt-10 border-t border-[#E2E8F0] flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#071731] tracking-tight">
              Selected Production Archive
            </h3>
            <p className="text-xs text-[#64748B] font-mono mt-1">
              Curated case records across sovereign, trade, and corporate engagements.
            </p>
          </div>

          {/* Clean Integrated Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {EVENT_FILTERS.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium uppercase tracking-wider transition-all cursor-pointer border ${
                    isActive
                      ? "bg-[#C8102E] text-white border-[#C8102E] shadow-xs"
                      : "bg-[#FAF9F6] text-[#334155] border-[#E2E8F0] hover:text-[#071731] hover:border-slate-400"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Editorial Portfolio Layout (Crisp Light Cards) */}
        <div className="space-y-8">
          
          {/* Top Tier: Two Wide Flagship Records */}
          {filteredEvents.length >= 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredEvents.slice(0, 2).map((event) => (
                <div
                  key={event.id}
                  onClick={() => setSelectedProject(event)}
                  className="group bg-white rounded-lg border border-[#E2E8F0] hover:border-[#071731]/40 transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  {/* Large Visual Frame (16:10) */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF9F6]">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/80 via-transparent to-transparent opacity-75 pointer-events-none" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[11px]">
                      <span className="px-2.5 py-0.5 bg-[#071731]/90 backdrop-blur-xs text-slate-200 border border-white/15 rounded">
                        {event.category}
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#C8102E] text-white font-bold rounded">
                        {event.year}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-200">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                        <span>{event.location.split(",")[0]}</span>
                      </span>
                      <span className="font-semibold text-white">{event.impact.split("·")[0]}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-heading font-bold text-xl sm:text-2xl text-[#071731] group-hover:text-[#0A1F44] transition-colors leading-snug">
                        {event.name}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                        {event.shortDesc}
                      </p>
                    </div>

                    {/* Footer Metric and Action */}
                    <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono">
                      <span className="text-[#C8102E] font-medium truncate max-w-[240px]">
                        {event.scope.split("·")[0]}
                      </span>
                      <span className="text-[#334155] group-hover:text-[#071731] transition-colors inline-flex items-center gap-1.5 font-medium">
                        <span>View Case Dossier</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Tier: 3-Column Structured Cadence */}
          {filteredEvents.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {filteredEvents.slice(2).map((event) => (
                <div
                  key={event.id}
                  onClick={() => setSelectedProject(event)}
                  className="group bg-white rounded-lg border border-[#E2E8F0] hover:border-[#071731]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md"
                >
                  {/* Card Visual Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF9F6]">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/80 via-transparent to-transparent opacity-75 pointer-events-none" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px]">
                      <span className="px-2.5 py-0.5 bg-[#071731]/90 backdrop-blur-xs text-slate-200 border border-white/15 rounded">
                        {event.category.split(" ")[0]}
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#C8102E] text-white font-bold rounded">
                        {event.year}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-200">
                      <span className="truncate max-w-[190px] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#C8102E] shrink-0" />
                        <span>{event.location.split(",")[0]}</span>
                      </span>
                      <span className="font-semibold text-white">{event.impact.split("·")[0]}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <h4 className="font-heading font-bold text-base sm:text-lg text-[#071731] group-hover:text-[#0A1F44] transition-colors line-clamp-2">
                        {event.name}
                      </h4>
                      <p className="font-sans text-xs text-[#475569] line-clamp-2 leading-relaxed">
                        {event.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono">
                      <span className="text-[#64748B] group-hover:text-[#071731] transition-colors">
                        View Case Dossier
                      </span>
                      <span className="w-7 h-7 rounded bg-slate-100 group-hover:bg-[#C8102E] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* When single event filtered */}
          {filteredEvents.length === 1 && (
            <div className="max-w-2xl mx-auto">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  onClick={() => setSelectedProject(event)}
                  className="group bg-white rounded-lg border border-[#E2E8F0] hover:border-[#071731]/40 transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF9F6]">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/80 via-transparent to-transparent opacity-75 pointer-events-none" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[11px]">
                      <span className="px-2.5 py-0.5 bg-[#071731]/90 backdrop-blur-xs text-slate-200 border border-white/15 rounded">
                        {event.category}
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#C8102E] text-white font-bold rounded">
                        {event.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h4 className="font-heading font-bold text-2xl text-[#071731] group-hover:text-[#0A1F44] transition-colors">
                      {event.name}
                    </h4>
                    <p className="font-sans text-sm text-[#475569] leading-relaxed font-normal">
                      {event.shortDesc}
                    </p>
                    <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono">
                      <span className="text-[#64748B]">{event.location}</span>
                      <span className="text-[#334155] group-hover:text-[#071731] inline-flex items-center gap-1 font-medium">
                        <span>View Case Dossier</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* 5. Bottom Corporate Action Bar */}
        <div className="mt-14 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#64748B]">
            TSA manages strategic partnerships with ICE BSD City, JCC Senayan, JIExpo Kemayoran, and BICC Bali.
          </div>
          <button
            onClick={onOpenWorkModal ? onOpenWorkModal : handleViewArchive}
            className="px-5 py-2.5 rounded bg-[#071731] hover:bg-[#0A1F44] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
          >
            <span>Inquire Mandate for Upcoming Event</span>
            <ArrowRight className="w-4 h-4 text-[#C8102E]" />
          </button>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onWorkTogether={() => {
            setSelectedProject(null);
            if (onOpenWorkModal) onOpenWorkModal();
          }}
        />
      )}
    </section>
  );
}
