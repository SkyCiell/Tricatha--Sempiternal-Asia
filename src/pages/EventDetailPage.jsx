import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    } else {
      window.history.pushState(null, "", "/contact");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] text-[#071731] pt-28 pb-16 flex items-center justify-center px-4">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-2xl font-medium font-heading text-[#071731]">
            Event Record Not Found
          </h2>
          <p className="text-sm text-[#475569]">
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
    <div className="bg-[#FAF9F6] min-h-screen text-[#071731] font-sans pb-20 selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. NATURAL RESPONSIVE EVENT HEADER */}
      <section className="relative w-full bg-[#071731] text-white overflow-hidden flex flex-col justify-between select-none border-b border-white/10 min-h-[460px] sm:min-h-[520px]">
        
        {/* Fullscreen Photo Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <motion.img
            src={event.img}
            alt={event.title}
            onError={(e) => {
              if (event.fallbackImg && e.currentTarget.src !== event.fallbackImg) {
                e.currentTarget.src = event.fallbackImg;
              }
            }}
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />

          {/* Precise Directional Scrim for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/75 via-45% to-[#071731]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/55 via-50% to-transparent pointer-events-none" />
        </div>

        {/* Top Floating Back Bar Over Media */}
        <div className="relative z-10 w-full pt-28 sm:pt-32 px-6 sm:px-12 lg:px-16 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <button
            onClick={handleBackToEvents}
            className="group inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-[#C8102E]" />
            <span>Return to Events Gallery</span>
          </button>
        </div>

        {/* Bottom Prominent Typography Directly Layered Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 pb-12 sm:pb-16 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-5xl space-y-4 sm:space-y-6"
          >
            {/* Category, Year, Date */}
            <div className="text-xs font-mono text-slate-300">
              <span className="text-[#C8102E] font-semibold uppercase">{event.category}</span>
              <span className="mx-2">·</span>
              <span>{event.year}</span>
              {event.date && (
                <>
                  <span className="mx-2">·</span>
                  <span>{event.date}</span>
                </>
              )}
            </div>

            {/* Monumental Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-bold font-heading text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]">
              {event.title}
            </h1>

            {/* Venue & Telemetry Directly Over Media */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-200 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8102E] shrink-0" />
                <span className="font-normal">{event.venue}</span>
              </div>
              {event.attendees && (
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#C8102E] shrink-0" />
                  <span className="font-mono text-xs">{event.attendees}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>

      </section>

      {/* 2. EVENT INFORMATION STRIP (Off-White Foundation) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
        <div className="bg-white rounded p-6 sm:p-8 border border-[#071731]/10 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#071731]/10">
            
            {/* 1. Client */}
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-[#64748B] block">
                Client Organization
              </span>
              <span className="font-heading font-semibold text-sm sm:text-base text-[#071731] tracking-tight block truncate">
                {event.client || "Corporate Partner"}
              </span>
            </div>

            {/* 2. Category */}
            <div className="pt-4 md:pt-0 md:pl-8 space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-[#64748B] block">
                Practice Category
              </span>
              <span className="font-heading font-semibold text-sm sm:text-base text-[#071731] tracking-tight block truncate">
                {event.category}
              </span>
            </div>

            {/* 3. Venue */}
            <div className="pt-4 md:pt-0 md:pl-8 space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-[#64748B] block">
                Spatial Location
              </span>
              <span className="font-heading font-semibold text-sm sm:text-base text-[#071731] tracking-tight block truncate">
                {event.venue}
              </span>
            </div>

            {/* 4. Scope / Delegates */}
            <div className="pt-4 md:pt-0 md:pl-8 space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-[#64748B] block">
                Scale &amp; Attendance
              </span>
              <span className="font-heading font-semibold text-sm sm:text-base text-[#071731] tracking-tight block truncate">
                {event.attendees || `${event.year} Plenary`}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. EVENT GALLERY */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-8 sm:pt-12">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#071731]/10 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold font-heading text-[#071731] tracking-tight">
              Event Documentation Archive
            </h2>
          </div>
          <span className="text-xs font-mono text-[#64748B]">
            {galleryImages.length} High-Resolution Photographic Records
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((imgSrc, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(imgSrc)}
              className="editorial-image-frame group relative overflow-hidden rounded bg-white aspect-[4/3] cursor-pointer shadow-xs border border-[#071731]/10"
            >
              <img
                src={imgSrc}
                alt={`${event.title} record ${idx + 1}`}
                onError={(e) => {
                  if (event.fallbackImg && e.currentTarget.src !== event.fallbackImg) {
                    e.currentTarget.src = event.fallbackImg;
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Soft Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-[#071731]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="w-9 h-9 rounded bg-white/20 text-white flex items-center justify-center backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EVENT NARRATIVE & SPECIFICATIONS */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-12 sm:pt-16">
        <div className="border-t border-[#071731]/10 pt-10 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Left Column: Narrative Summary */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold font-heading text-[#071731] tracking-tight mb-4">
                  Overview &amp; Context
                </h3>
                <p className="text-base text-[#334155] leading-relaxed font-normal">
                  {event.description}
                </p>
              </div>

              {event.scope && (
                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2 font-medium">
                    Scope of Protocol &amp; Technical Execution
                  </h4>
                  <div className="p-5 bg-white border border-[#071731]/10 rounded text-sm text-[#334155] font-normal leading-relaxed shadow-xs">
                    {event.scope}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Structured Key Parameters (Selective Navy Contrast Moment) */}
            <div className="lg:col-span-4 bg-[#071731] text-white p-6 sm:p-7 rounded border border-white/10 space-y-4 shadow-md">
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
                  className="btn-editorial-red w-full flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire Similar Format</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM NAVIGATION BAR */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-[#071731]/10">
          <button
            onClick={handleBackToEvents}
            className="group flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-[#475569] hover:text-[#071731] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#C8102E]" />
            <span>Return to Events Gallery</span>
          </button>

          <button
            onClick={handleContact}
            className="text-xs font-medium text-[#475569] hover:text-[#071731] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Consult Event Directors at Jakarta HQ</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
          </button>
        </div>
      </section>

      {/* 6. LIGHTBOX IMAGE PREVIEW MODAL */}
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
