import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (!selectedPhoto) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (window.__lenis) window.__lenis.stop();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      if (window.__lenis) window.__lenis.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

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
      <div className="min-h-screen bg-[#071731] text-[#F1F5F9] pt-28 pb-16 flex items-center justify-center px-4">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-2xl font-medium font-heading text-white">
            Event Record Not Found
          </h2>
          <p className="text-sm text-slate-400">
            The requested event archive could not be located in our active directory.
          </p>
          <button
            onClick={handleBackToEvents}
            className="btn-editorial-red"
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
    <div className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 sm:pt-24 pb-20 selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. TOP BREADCRUMB & BACK CONTROL BAR */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-4 border-b border-white/10 flex items-center justify-between gap-4">
        <button
          onClick={handleBackToEvents}
          className="group inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-[#C8102E]" />
          <span>Back to All Events</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>PORTAL ARCHIVE</span>
          <span className="text-slate-600">/</span>
          <button
            onClick={handleBackToEvents}
            className="hover:text-white transition-colors cursor-pointer"
          >
            EVENTS
          </button>
          <span className="text-slate-600">/</span>
          <span className="text-white font-medium truncate max-w-[280px]">
            {event.title}
          </span>
        </div>
      </section>

      {/* 2. EDITORIAL HERO SECTION */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 pb-6">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[360px] max-h-[580px] rounded overflow-hidden bg-[#050F22] shadow-sm border border-white/10">
          
          {/* Main Visual Image */}
          <img
            src={event.img}
            alt={event.title}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />

          {/* Soft Dark Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/60 to-transparent pointer-events-none" />

          {/* Prominent Event Title & Meta in Hero */}
          <div className="absolute inset-0 p-6 sm:p-10 lg:p-14 flex flex-col justify-end z-10">
            <div className="max-w-4xl space-y-3 sm:space-y-4">
              
              {/* Category & Year Tag */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 bg-[#C8102E] text-white text-[11px] font-mono font-semibold uppercase tracking-wider rounded shadow-xs">
                  {event.category}
                </span>
                <span className="text-slate-300 text-xs font-mono">
                  {event.year}
                </span>
                {event.date && (
                  <>
                    <span className="text-slate-500 text-xs">•</span>
                    <span className="text-slate-300 text-xs font-sans">
                      {event.date}
                    </span>
                  </>
                )}
              </div>

              {/* Event Title */}
              <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-semibold font-heading text-white tracking-tight leading-[1.14]">
                {event.title}
              </h1>

              {/* Venue Subtitle */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                <span className="font-normal truncate">{event.venue}</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. EVENT INFORMATION STRIP */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-4">
        <div className="bg-[#0A1F44] rounded p-6 sm:p-8 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* 1. Client */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 block">
                Client Organization
              </span>
              <span className="font-heading font-medium text-sm sm:text-base text-white tracking-tight block truncate">
                {event.client || "Corporate Partner"}
              </span>
            </div>

            {/* 2. Category */}
            <div className="pt-4 md:pt-0 md:pl-8 space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 block">
                Practice Category
              </span>
              <span className="font-heading font-medium text-sm sm:text-base text-white tracking-tight block truncate">
                {event.category}
              </span>
            </div>

            {/* 3. Venue */}
            <div className="pt-4 md:pt-0 md:pl-8 space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 block">
                Spatial Location
              </span>
              <span className="font-heading font-medium text-sm sm:text-base text-white tracking-tight block truncate">
                {event.venue}
              </span>
            </div>

            {/* 4. Scope / Delegates */}
            <div className="pt-4 md:pt-0 md:pl-8 space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 block">
                Scale &amp; Attendance
              </span>
              <span className="font-heading font-medium text-sm sm:text-base text-[#FFFFFF] tracking-tight block truncate">
                {event.attendees || `${event.year} Plenary`}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 4. EVENT GALLERY */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-10 sm:pt-14">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-medium font-heading text-white tracking-tight">
              Event Gallery
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {galleryImages.length} High-Resolution Photos
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((imgSrc, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(imgSrc)}
              className="editorial-image-frame group relative overflow-hidden rounded bg-[#050F22] aspect-[4/3] cursor-pointer shadow-xs border border-white/10"
            >
              <img
                src={imgSrc}
                alt={`${event.title} record ${idx + 1}`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Soft Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-[#071731]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="w-9 h-9 rounded bg-white/10 text-white flex items-center justify-center backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EVENT NARRATIVE & SPECIFICATIONS */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-12 sm:pt-16">
        <div className="border-t border-white/10 pt-10 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Left Column: Narrative Summary */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-medium font-heading text-white tracking-tight mb-4">
                  Overview &amp; Context
                </h3>
                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  {event.description}
                </p>
              </div>

              {event.scope && (
                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Scope of Protocol &amp; Technical Execution
                  </h4>
                  <div className="p-5 bg-[#0A1F44] border border-white/10 rounded text-sm text-slate-200 font-normal leading-relaxed">
                    {event.scope}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Structured Key Parameters */}
            <div className="lg:col-span-4 bg-[#0A1F44] p-6 sm:p-7 rounded border border-white/10 space-y-4">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-white block pb-3 border-b border-white/10">
                Key Parameters
              </span>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Event Title</span>
                  <span className="font-medium text-white text-sm">{event.title}</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Client Partner</span>
                  <span className="font-medium text-slate-200">{event.client}</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Practice Category</span>
                  <span className="font-medium text-[#C8102E]">{event.category}</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Spatial Location</span>
                  <span className="font-medium text-slate-200">{event.venue}</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Period</span>
                  <span className="font-mono text-slate-200">{event.year} ({event.date || event.year})</span>
                </div>

                {event.attendees && (
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Delegates / Attendance</span>
                    <span className="font-medium text-white flex items-center gap-1.5 mt-0.5">
                      <Users className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>{event.attendees}</span>
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={handleContact}
                  className="btn-editorial-red w-full flex items-center justify-center gap-2"
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
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/10">
          <button
            onClick={handleBackToEvents}
            className="group flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#C8102E]" />
            <span>Return to Events Gallery</span>
          </button>

          <button
            onClick={handleContact}
            className="text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Consult Event Directors at Jakarta HQ</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
          </button>
        </div>
      </section>

      {/* 7. LIGHTBOX IMAGE PREVIEW MODAL */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050F22]/95 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded bg-white/10 text-white hover:bg-[#C8102E] flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto}
              alt="High resolution documentation preview"
              className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl border border-white/20"
            />
          </div>
        </div>
      )}

    </div>
  );
}
