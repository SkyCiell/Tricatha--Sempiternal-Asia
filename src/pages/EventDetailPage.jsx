import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Users,
  ArrowUpRight,
  Maximize2,
  X
} from "lucide-react";
import { getEventBySlug, EVENTS_DATA } from "../data/eventsData";

export default function EventDetailPage({ slug, navigateTo }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Retrieve event by slug or fallback to the first event
  const event = getEventBySlug(slug) || EVENTS_DATA[0];

  const handleBackToEvents = () => {
    if (navigateTo) {
      navigateTo("/events");
    } else {
      window.history.pushState(null, "", "/events");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const handleContact = () => {
    if (navigateTo) {
      navigateTo("/contact");
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-[#FFFFFF] text-[#0A1F44] pt-24 pb-16 flex items-center justify-center px-4">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-2xl font-medium font-heading text-[#0A1F44]">
            Event Record Not Found
          </h2>
          <p className="text-sm text-slate-500">
            The requested event archive could not be located in our active directory.
          </p>
          <button
            onClick={handleBackToEvents}
            className="btn-editorial px-6 py-2.5 bg-[#0A1F44] hover:bg-[#C8102E] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-editorial cursor-pointer"
          >
            Back to Events Archive
          </button>
        </div>
      </div>
    );
  }

  const galleryImages = event.gallery && event.gallery.length > 0
    ? event.gallery
    : [event.img];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0A1F44] font-sans pt-16 sm:pt-20 pb-20 selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. TOP BREADCRUMB & BACK CONTROL BAR */}
      <section className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
        <button
          onClick={handleBackToEvents}
          className="group inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-[#0A1F44] hover:text-[#C8102E] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-[#C8102E]" />
          <span>Back to Selected Works</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>PORTAL ARCHIVE</span>
          <span className="text-slate-200">/</span>
          <button
            onClick={handleBackToEvents}
            className="hover:text-[#C8102E] transition-colors cursor-pointer"
          >
            EVENTS
          </button>
          <span className="text-slate-200">/</span>
          <span className="text-[#0A1F44] font-medium truncate max-w-[280px]">
            {event.title}
          </span>
        </div>
      </section>

      {/* 2. EDITORIAL HERO SECTION - Controlled cinematic aspect ratio with refined typography */}
      <section className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 pt-6 pb-6">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[360px] max-h-[580px] rounded-lg overflow-hidden bg-slate-900 shadow-sm border border-slate-200/80">
          
          {/* Main Visual Image */}
          <img
            src={event.img}
            alt={event.title}
            className="w-full h-full object-cover object-center"
            loading="eager"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          {/* Soft Dark Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/55 to-[#0A1F44]/15 pointer-events-none" />

          {/* Prominent Event Title & Meta in Hero */}
          <div className="absolute inset-0 p-6 sm:p-10 lg:p-14 flex flex-col justify-end z-10">
            <div className="max-w-4xl space-y-3 sm:space-y-4">
              
              {/* Category & Year Tag */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 bg-[#C8102E] text-white text-[11px] font-mono font-semibold uppercase tracking-wider rounded-sm shadow-xs">
                  {event.category}
                </span>
                <span className="text-white/80 text-xs font-mono">
                  {event.year}
                </span>
                {event.date && (
                  <>
                    <span className="text-white/40 text-xs">•</span>
                    <span className="text-white/85 text-xs font-sans">
                      {event.date}
                    </span>
                  </>
                )}
              </div>

              {/* Event Title - Calm, Refined, Non-aggressive */}
              <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-medium font-heading text-white tracking-tight leading-[1.14]">
                {event.title}
              </h1>

              {/* Venue Subtitle */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/85 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                <span className="font-normal truncate">{event.venue}</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. EVENT INFORMATION STRIP - Borderless horizontal strip with quiet elegance */}
      <section className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 py-4">
        <div className="bg-[#F5F6F8] rounded-lg p-6 sm:p-8 border border-slate-200/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            
            {/* 1. Client */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 block">
                Client Organization
              </span>
              <span className="font-heading font-medium text-sm sm:text-base text-[#0A1F44] tracking-tight block truncate">
                {event.client || "Corporate Partner"}
              </span>
            </div>

            {/* 2. Category */}
            <div className="pt-4 md:pt-0 md:pl-8 space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 block">
                Practice Category
              </span>
              <span className="font-heading font-medium text-sm sm:text-base text-[#0A1F44] tracking-tight block truncate">
                {event.category}
              </span>
            </div>

            {/* 3. Venue */}
            <div className="pt-4 md:pt-0 md:pl-8 space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 block">
                Spatial Location
              </span>
              <span className="font-heading font-medium text-sm sm:text-base text-[#0A1F44] tracking-tight block truncate">
                {event.venue}
              </span>
            </div>

            {/* 4. Scope / Delegates */}
            <div className="pt-4 md:pt-0 md:pl-8 space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 block">
                Scale &amp; Attendance
              </span>
              <span className="font-heading font-medium text-sm sm:text-base text-[#C8102E] tracking-tight block truncate">
                {event.attendees || `${event.year} Plenary`}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 4. EVENT GALLERY - Multi-column photographic documentation */}
      <section className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 pt-10 sm:pt-14">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-0.5 bg-[#C8102E]" />
              <span className="text-xs font-mono tracking-widest text-[#C8102E] font-medium uppercase">
                Field Documentation
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-medium font-heading text-[#0A1F44] tracking-tight">
              Photographic Records
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {galleryImages.length} High-Resolution Photographic Records
          </span>
        </div>

        {/* Gallery Grid with Restrained Zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((imgSrc, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(imgSrc)}
              className="editorial-image-frame group relative overflow-hidden rounded-md bg-slate-100 aspect-[4/3] cursor-pointer shadow-xs border border-slate-200/70"
            >
              <img
                src={imgSrc}
                alt={`${event.title} record ${idx + 1}`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Soft Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-[#0A1F44]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EVENT NARRATIVE & SPECIFICATIONS - Editorial two-column split */}
      <section className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 pt-12 sm:pt-16">
        <div className="border-t border-slate-100 pt-10 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Left Column: Narrative Summary */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C8102E] font-medium uppercase mb-2">
                  <span className="w-2 h-0.5 bg-[#C8102E]" />
                  <span>Case Overview</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium font-heading text-[#0A1F44] tracking-tight mb-4">
                  Executive Brief &amp; Strategic Context
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {event.description}
                </p>
              </div>

              {event.scope && (
                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Scope of Protocol &amp; Technical Execution
                  </h4>
                  <div className="p-5 bg-[#F5F6F8] border border-slate-200/80 rounded-md text-sm text-[#0A1F44] font-normal leading-relaxed">
                    {event.scope}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Structured Key Parameters on Light-Neutral */}
            <div className="lg:col-span-4 bg-[#F5F6F8] p-6 sm:p-7 rounded-lg border border-slate-200/60 space-y-4">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#0A1F44] block pb-3 border-b border-slate-200/80">
                Key Parameters
              </span>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Event Title</span>
                  <span className="font-medium text-[#0A1F44] text-sm">{event.title}</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Client Partner</span>
                  <span className="font-medium text-[#0A1F44]">{event.client}</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Practice Category</span>
                  <span className="font-medium text-[#C8102E]">{event.category}</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Spatial Location</span>
                  <span className="font-medium text-[#0A1F44]">{event.venue}</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Period</span>
                  <span className="font-mono text-[#0A1F44]">{event.year} ({event.date || event.year})</span>
                </div>

                {event.attendees && (
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Delegates / Attendance</span>
                    <span className="font-medium text-[#0A1F44] flex items-center gap-1.5 mt-0.5">
                      <Users className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>{event.attendees}</span>
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <button
                  onClick={handleContact}
                  className="btn-editorial w-full py-3 bg-[#0A1F44] hover:bg-[#C8102E] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-editorial flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <span>Inquire Similar Format</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM NAVIGATION BAR */}
      <section className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-slate-100">
          <button
            onClick={handleBackToEvents}
            className="group flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-[#0A1F44] hover:text-[#C8102E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#C8102E]" />
            <span>Return to Events Gallery</span>
          </button>

          <button
            onClick={handleContact}
            className="editorial-underline-link text-xs font-medium text-[#0A1F44] hover:text-[#C8102E] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Consult Event Directors at Jakarta HQ</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
          </button>
        </div>
      </section>

      {/* 7. LIGHTBOX IMAGE PREVIEW MODAL */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1F44]/90 backdrop-blur-xs animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-white text-[#0A1F44] hover:bg-[#C8102E] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto}
              alt="High resolution documentation preview"
              className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl border border-white/20"
            />
          </div>
        </div>
      )}

    </div>
  );
}
