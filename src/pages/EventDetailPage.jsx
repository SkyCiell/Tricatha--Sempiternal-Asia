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
      
      {/* 1. FULL UNINTERRUPTED COVER PHOTO (Clean Floating Back, Never Cropped) */}
      <section className="relative w-full bg-[#050F22] text-white overflow-hidden select-none border-b border-[#071731]/10">
        
        {/* Floating Back Control - No Dividing Line */}
        <div className="absolute top-24 sm:top-28 left-4 sm:left-8 lg:left-12 z-20">
          <button
            onClick={handleBackToEvents}
            className="group inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-200 hover:text-white transition-colors cursor-pointer bg-[#071731]/80 hover:bg-[#071731] backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-[#C8102E]" />
            <span>Return to Events Gallery</span>
          </button>
        </div>

        {/* Full Cover Photo Stage - Never Cropped */}
        <div className="relative w-full min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] max-h-[85vh] bg-[#050F22] flex items-center justify-center overflow-hidden py-4 sm:py-6">
          {/* Ambient blurred backdrop for subtle cinematic depth */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
            <img
              src={event.img}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover blur-3xl scale-110"
            />
          </div>

          {/* Full uncropped cover photo */}
          <motion.img
            src={event.img}
            alt={event.title}
            onError={(e) => {
              if (event.fallbackImg && e.currentTarget.src !== event.fallbackImg) {
                e.currentTarget.src = event.fallbackImg;
              }
            }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-full max-h-[80vh] w-auto h-auto object-contain mx-auto cursor-pointer drop-shadow-2xl"
            onClick={() => setSelectedPhoto(event.img)}
            title="Click to view full image"
            loading="eager"
          />
        </div>

      </section>

      {/* 2. EDITORIAL EVENT TITLE & CORE METADATA */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 max-w-5xl"
        >
          {/* Category, Year, Date */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#64748B]">
            <span className="text-[#C8102E] font-semibold uppercase">{event.category}</span>
            <span>·</span>
            <span>{event.year}</span>
            {event.date && (
              <>
                <span>·</span>
                <span>{event.date}</span>
              </>
            )}
          </div>

          {/* Monumental Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold font-heading text-[#071731] tracking-tight leading-[1.08]">
            {event.title}
          </h1>

          {/* Venue & Telemetry */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#475569] pt-1">
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
