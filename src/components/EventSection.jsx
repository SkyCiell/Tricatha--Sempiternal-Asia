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
    <section id="event" className="py-20 sm:py-28 bg-[#071731] text-white border-b border-white/10 relative overflow-hidden">

      {/* Subtle Structural Ambient Glow */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#C8102E]/6 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-[#0E2552]/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">

        {/* 1. Section Header: Strong Editorial Typography Without Badges */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-white/10">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.12]">
              Monumental Trade Expos &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                High-Stakes Sovereign Plenaries.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1 max-w-2xl">
              From multi-hall international trade exhibitions with thousands of registered buyers to high-protocol diplomatic plenaries, TSA designs and orchestrates events that command authority and drive measurable commercial outcomes.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleViewArchive}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <span>Explore Complete Event Archive</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. Featured Flagship Production: AI Global EXPO 2026 */}
        {leadEvent && (
          <div className="pt-10 sm:pt-12">
            <div className="bg-[#0A1F44] rounded-lg border border-white/12 hover:border-[#C8102E]/50 transition-colors duration-300 grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-xl">
              
              {/* Left Column: Monumental Visual Frame (7 cols) */}
              <div 
                onClick={() => setSelectedProject(leadEvent)}
                className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[460px] overflow-hidden bg-[#050F22] cursor-pointer group"
              >
                <img
                  src={leadEvent.image}
                  alt={leadEvent.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/20 to-transparent opacity-85 pointer-events-none" />

                {/* Top Subtle Timing & Category Overlays */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 bg-[#C8102E] text-white font-semibold uppercase tracking-wider rounded text-[11px] shadow-sm">
                    Upcoming Flagship · {leadEvent.year}
                  </span>
                  <span className="px-3 py-1 bg-[#071731]/90 backdrop-blur-xs text-slate-200 border border-white/15 rounded text-[11px]">
                    {leadEvent.category}
                  </span>
                </div>

                {/* Bottom Frame Coordinates */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-200">
                  <span className="flex items-center gap-1.5 bg-[#071731]/85 backdrop-blur-xs px-3 py-1.5 rounded border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>{leadEvent.location}</span>
                  </span>
                  <span className="hidden sm:flex items-center gap-1.5 bg-[#071731]/85 backdrop-blur-xs px-3 py-1.5 rounded border border-white/10">
                    <Users className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>24,000+ Trade Delegates</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Editorial Case Dossier (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#C8102E] font-semibold tracking-wider uppercase">
                      Operational Master Blueprint
                    </span>
                    <span className="text-slate-400 font-mono">Q1 {leadEvent.year}</span>
                  </div>

                  <h3 
                    onClick={() => setSelectedProject(leadEvent)}
                    className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-snug cursor-pointer hover:text-slate-100 transition-colors"
                  >
                    {leadEvent.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {leadEvent.shortDesc}
                  </p>
                </div>

                {/* Integrated Production Figures (Hairline Dividers, High Typographic Weight) */}
                <div className="py-4 border-t border-b border-white/10 space-y-3 font-mono text-xs">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">180+</div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Enterprise Pavilions</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">3 Multi-Hall Complexes</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-heading text-[#C8102E] tracking-tight">35</div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Ministerial Keynotes</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Sovereign Protocol Cleared</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-300">
                    <span>Attendance: <strong className="text-white font-medium">24,000+ Trade Delegates</strong></span>
                    <span className="text-slate-400">ICE BSD City</span>
                  </div>
                </div>

                {/* Scope of Mandate */}
                <div className="text-xs font-mono text-slate-300 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Production Mandate:</span>
                  <p className="text-slate-200 line-clamp-2 leading-relaxed">{leadEvent.scope}</p>
                </div>

                {/* Footer Action */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(leadEvent)}
                    className="btn-editorial-red text-xs py-2.5 px-5 cursor-pointer flex items-center gap-2 shadow-sm"
                  >
                    <span>Inspect Event Record</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
                    Full case study available
                  </span>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 3. Event Archive Header & Integrated Filters */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white tracking-tight">
              Selected Production Archive
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
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
                  className={`px-3.5 py-1.5 rounded font-mono text-xs font-medium uppercase tracking-wider transition-all cursor-pointer border ${
                    isActive
                      ? "bg-[#C8102E] text-white border-[#C8102E] shadow-xs"
                      : "bg-[#0A1F44] text-slate-300 border-white/10 hover:text-white hover:border-white/30"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Asymmetric Editorial Portfolio Layout */}
        <div className="space-y-8">
          
          {/* Top Tier: Two Wide Asymmetric Flagship Records (when all or matching events) */}
          {filteredEvents.length >= 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredEvents.slice(0, 2).map((event) => (
                <div
                  key={event.id}
                  onClick={() => setSelectedProject(event)}
                  className="group bg-[#0A1F44] rounded-lg border border-white/10 hover:border-[#C8102E]/60 transition-all duration-300 cursor-pointer overflow-hidden shadow-md flex flex-col justify-between"
                >
                  {/* Large Visual Frame (16:10) */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#050F22]">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-85 pointer-events-none" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[11px]">
                      <span className="px-2.5 py-0.5 bg-[#071731]/90 backdrop-blur-xs text-slate-200 border border-white/15 rounded">
                        {event.category}
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#C8102E] text-white font-bold rounded">
                        {event.year}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-300">
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
                      <h4 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-slate-100 transition-colors leading-snug">
                        {event.name}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {event.shortDesc}
                      </p>
                    </div>

                    {/* Footer Metric and Action */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#C8102E] font-medium truncate max-w-[240px]">
                        {event.scope.split("·")[0]}
                      </span>
                      <span className="text-slate-300 group-hover:text-white transition-colors inline-flex items-center gap-1.5 font-medium">
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
                  className="group bg-[#0A1F44] rounded-lg border border-white/10 hover:border-[#C8102E]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-md"
                >
                  {/* Card Visual Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#050F22]">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-85 pointer-events-none" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px]">
                      <span className="px-2.5 py-0.5 bg-[#071731]/90 backdrop-blur-xs text-slate-200 border border-white/15 rounded">
                        {event.category.split(" ")[0]}
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#C8102E] text-white font-bold rounded">
                        {event.year}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
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
                      <h4 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-slate-100 transition-colors line-clamp-2">
                        {event.name}
                      </h4>
                      <p className="font-sans text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {event.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 group-hover:text-white transition-colors">
                        View Case Dossier
                      </span>
                      <span className="w-7 h-7 rounded bg-[#071731] group-hover:bg-[#C8102E] text-slate-300 group-hover:text-white flex items-center justify-center transition-colors">
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
                  className="group bg-[#0A1F44] rounded-lg border border-white/10 hover:border-[#C8102E]/60 transition-all duration-300 cursor-pointer overflow-hidden shadow-md flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#050F22]">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-85 pointer-events-none" />
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
                    <h4 className="font-heading font-bold text-2xl text-white group-hover:text-slate-100 transition-colors">
                      {event.name}
                    </h4>
                    <p className="font-sans text-sm text-slate-300 leading-relaxed font-normal">
                      {event.shortDesc}
                    </p>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">{event.location}</span>
                      <span className="text-slate-300 group-hover:text-white inline-flex items-center gap-1 font-medium">
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
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-400">
            TSA manages strategic partnerships with ICE BSD City, JCC Senayan, JIExpo Kemayoran, and BICC Bali.
          </div>
          <button
            onClick={onOpenWorkModal ? onOpenWorkModal : handleViewArchive}
            className="btn-editorial-navy text-xs py-2.5 px-5 cursor-pointer flex items-center gap-2"
          >
            <span>Inquire Mandate for Upcoming Event</span>
            <ArrowRight className="w-4 h-4" />
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
