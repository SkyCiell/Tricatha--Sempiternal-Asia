import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowLeft,
  MapPin,
  Users,
  ArrowUpRight,
  Maximize2,
  X,
  Building2,
  ChevronRight
} from "lucide-react";
import { getEventBySlug, EVENTS_DATA } from "../data/eventsData";

function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useParallax(speed = 0.25) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Disable parallax on mobile to prevent overflow and performance issues
    if (window.matchMedia("(max-width: 767px)").matches) return;
    let rafId;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!el) return;
        const rect = el.parentElement?.getBoundingClientRect();
        if (!rect) return;
        el.style.transform = `translateY(${-rect.top * speed}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(rafId); };
  }, [speed]);
  return ref;
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useScrollReveal(0.1);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(22px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

export default function EventDetailPage({ slug, navigateTo }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const imgParallax = useParallax(0.28);

  useEffect(() => {
    if (!selectedPhoto) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (window.__lenis) window.__lenis.stop();
    const onKey = (e) => { if (e.key === "Escape") setSelectedPhoto(null); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      if (window.__lenis) window.__lenis.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedPhoto]);

  const event = getEventBySlug(slug) || EVENTS_DATA[0];

  const go = useCallback((path) => {
    if (navigateTo) { navigateTo(path); }
    else { window.history.pushState(null, "", path); window.dispatchEvent(new PopStateEvent("popstate")); }
  }, [navigateTo]);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#071731] text-[#F1F5F9] pt-28 pb-16 flex items-center justify-center px-4">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-2xl font-medium font-heading text-white">Event Record Not Found</h2>
          <p className="text-sm text-slate-400">The requested event archive could not be located.</p>
          <button onClick={() => go("/events")} className="btn-editorial-red">Back to Events Archive</button>
        </div>
      </div>
    );
  }

  const galleryImages = event.gallery?.length > 0 ? event.gallery : [event.img];

  return (
    <div className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans selection:bg-[#C8102E] selection:text-white">

      {/* BREADCRUMB */}
      <div className="pt-20 sm:pt-24">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 py-4 border-b border-white/10 flex items-center justify-between gap-4">
          <button onClick={() => go("/events")} className="group inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-400 hover:text-white transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-[#C8102E]" />
            <span>Events Archive</span>
          </button>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500">
            <button onClick={() => go("/events")} className="hover:text-slate-300 transition-colors cursor-pointer">EVENTS</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-300 font-medium truncate max-w-[300px]">{event.title}</span>
          </div>
        </div>
      </div>

      {/* EDITORIAL HERO — Parallax on desktop, static on mobile */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(340px, 58vh, 720px)" }}>
        <div ref={imgParallax} className="absolute inset-0 w-full" style={{ top: "-12%", height: "124%" }}>
          <img src={event.img} alt={event.title} className="w-full h-full object-cover object-center" loading="eager" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/55 to-[#071731]/10 pointer-events-none z-10" />
        <div className="absolute inset-0 z-20 flex flex-col justify-end">
          <div className="max-w-[1520px] mx-auto px-4 sm:px-8 pb-8 sm:pb-14 w-full">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs text-slate-400 mb-3 sm:mb-4" style={{ animation: "fadeUp 0.7s ease 0.1s both" }}>
              <span className="uppercase tracking-wider text-[#C8102E] font-semibold">{event.category}</span>
              <span className="text-slate-600">·</span>
              <span>{event.year}</span>
              {event.date && (<><span className="text-slate-600">·</span><span>{event.date}</span></>)}
            </div>
            <h1 className="font-heading font-semibold text-white tracking-tight leading-[1.1] max-w-4xl" style={{ fontSize: "clamp(1.6rem, 4.5vw, 3.4rem)", animation: "fadeUp 0.75s ease 0.18s both" }}>
              {event.title}
            </h1>
            <div className="flex items-center gap-2 mt-3 sm:mt-4 text-xs sm:text-sm text-slate-300" style={{ animation: "fadeUp 0.75s ease 0.28s both" }}>
              <MapPin className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
              <span className="font-normal line-clamp-1">{event.venue}</span>
            </div>
          </div>
        </div>
      </section>

      {/* KEY PARAMETERS STRIP */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-6">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded overflow-hidden bg-[#0A1F44]">
            {[
              { label: "Client Organization", value: event.client || "Corporate Partner" },
              { label: "Practice Category",   value: event.category },
              { label: "Venue",               value: event.venue },
              { label: "Scale & Attendance",  value: event.attendees || `${event.year} Edition` },
            ].map((item, i) => (
              <div key={i} className={`px-4 sm:px-7 py-4 sm:py-6 space-y-1.5 ${i < 3 ? "border-b md:border-b-0 md:border-r border-white/10" : ""}`}>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-500 block">{item.label}</span>
                <span className="font-heading font-medium text-xs sm:text-[15px] text-white block leading-snug">{item.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* NARRATIVE + SCOPE */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 pb-14">
        <Reveal className="border-t border-white/10 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            <div className="lg:col-span-7 space-y-8">
              <Reveal delay={60}>
                <h2 className="font-heading text-xl sm:text-2xl font-medium text-white tracking-tight mb-4">Overview & Context</h2>
                <p className="text-base sm:text-[17px] text-slate-300 leading-[1.75] font-normal">{event.description}</p>
              </Reveal>
              {event.scope && (
                <Reveal delay={120}>
                  <div className="space-y-3 pt-2">
                    <h3 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-semibold">Scope of Protocol & Technical Execution</h3>
                    <div className="border-l-2 border-[#C8102E]/50 pl-5 py-1">
                      <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">{event.scope}</p>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            <Reveal delay={80} className="lg:col-span-5">
              <div className="bg-[#0A1F44] border border-white/10 rounded p-6 sm:p-7 space-y-5 lg:sticky lg:top-28">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-slate-500 block pb-4 border-b border-white/10">Production Record</span>
                <div className="space-y-4 text-sm">
                  {[
                    { label: "Event Title",          value: event.title,                                      red: false },
                    { label: "Client Partner",        value: event.client,                                     red: false },
                    { label: "Practice Category",     value: event.category,                                   red: true  },
                    { label: "Spatial Location",      value: event.venue,                                      red: false },
                    { label: "Period",                value: `${event.year}${event.date ? ` · ${event.date}` : ""}`, red: false },
                    event.attendees ? { label: "Delegates / Attendance", value: event.attendees,              red: false } : null,
                  ].filter(Boolean).map((row, i) => (
                    <div key={i} className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">{row.label}</span>
                      <span className={`font-medium leading-snug ${row.red ? "text-[#C8102E]" : "text-white"}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10">
                  <button onClick={() => go("/contact")} className="btn-editorial-red w-full flex items-center justify-center gap-2 text-xs">
                    <span>Inquire Similar Format</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </Reveal>

          </div>
        </Reveal>
      </section>

      {/* GALLERY */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pb-16">
        <Reveal>
          <div className="flex items-end justify-between gap-3 border-t border-white/10 pt-8 pb-6">
            <h2 className="text-xl sm:text-2xl font-medium font-heading text-white tracking-tight">Event Gallery</h2>
            <span className="text-xs font-mono text-slate-500">{galleryImages.length} Records</span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((imgSrc, idx) => (
            <Reveal key={idx} delay={idx * 55}>
              <div onClick={() => setSelectedPhoto(imgSrc)} className="group relative overflow-hidden rounded bg-[#050F22] aspect-[4/3] cursor-pointer border border-white/10 hover:border-[#C8102E]/45 transition-colors duration-300">
                <img src={imgSrc} alt={`${event.title} · ${idx + 1}`} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-[#071731]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-9 h-9 rounded bg-white/15 text-white flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BOTTOM NAV */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pb-16">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-7 border-t border-white/10">
            <button onClick={() => go("/events")} className="group flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-400 hover:text-white transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#C8102E]" />
              <span>Return to Events Gallery</span>
            </button>
            <button onClick={() => go("/contact")} className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer">
              <span>Consult Event Directors at Jakarta HQ</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
            </button>
          </div>
        </Reveal>
      </section>

      {/* LIGHTBOX */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050F22]/96 backdrop-blur-md" onClick={() => setSelectedPhoto(null)} role="dialog" aria-modal="true">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedPhoto(null)} className="absolute -top-12 right-0 w-10 h-10 rounded bg-white/10 text-white hover:bg-[#C8102E] flex items-center justify-center transition-colors cursor-pointer border border-white/20" aria-label="Close photo preview">
              <X className="w-5 h-5" />
            </button>
            <img src={selectedPhoto} alt="Event documentation" className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl border border-white/15" />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
