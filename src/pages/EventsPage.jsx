import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Users,
  SlidersHorizontal,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import {
  EVENTS_DATA,
  EVENT_CATEGORIES,
  AI_GLOBAL_EXPO_EVENT
} from "../data/eventsData";
import Masonry from "../components/Masonry";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import scenographyTruss from "../assets/illustrations/scenography-truss.jpg";
import plenaryDraft from "../assets/illustrations/plenary-draft.jpg";
import protocolPavilion from "../assets/illustrations/protocol-pavilion.jpg";
import broadcastUplink from "../assets/illustrations/broadcast-uplink.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function EventsPage({ navigateTo }) {
  const [activeCategory, setActiveCategory] = useState("All Events");
  const pageRef = useRef(null);
  const galleryScrollRef = useRef(null);

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

  // Subtle scroll parallax on event photography
  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = pageRef.current?.querySelectorAll(".event-media-parallax");
      images?.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -6, scale: 1.05 },
          {
            yPercent: 6,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
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

  const scrollGallery = (direction) => {
    if (galleryScrollRef.current) {
      const scrollAmount = direction === "left" ? -460 : 460;
      galleryScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // High-impact plenary visual records for the controlled horizontal sequence
  const plenaryMoments = [
    {
      title: "Plenary Scenography & Kinetic Staging",
      caption: "Indonesia Convention Exhibition (ICE) BSD City · Hall 1-3",
      image: scenographyTruss
    },
    {
      title: "Sovereign Plenary Chambers & VIP Dais",
      caption: "Jakarta Convention Center (JCC) Senayan · Plenary Hall",
      image: plenaryDraft
    },
    {
      title: "VVIP Protocol & Bilateral Accord Pavilion",
      caption: "The Ritz-Carlton Jakarta · Grand Ballroom",
      image: protocolPavilion
    },
    {
      title: "4K Master Control & Telepresence Hub",
      caption: "The City Tower 12F · Soundstage Command",
      image: broadcastUplink
    }
  ];

  return (
    <div
      ref={pageRef}
      className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white"
    >
      {/* 1. EDITORIAL MASTHEAD */}
      <header className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-8 sm:pt-14 pb-12 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.02]">
              Events &amp; <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Production Archive.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl pt-2">
              A curated visual record of sovereign plenaries, multilateral trade exhibitions, corporate assemblies, and high-stakes brand productions orchestrated across Southeast Asia.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-5">
            <div className="font-mono text-xs text-slate-400 space-y-1 text-left lg:text-right">
              <div>CURATED ARCHIVE: 16 PRODUCTION WORKS</div>
              <div className="text-white font-semibold">JAKARTA · BALI · PAN-ASEAN CORRIDOR</div>
              <div>MINISTERIAL &amp; ENTERPRISE MANDATES</div>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer"
            >
              <span>Inquire Event Production</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. FLAGSHIP FEATURED EVENT: AI GLOBAL EXPO 2026 (Large Composition, Expanding Presence) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-white/10">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <h2
                onClick={() => handleEventClick(featuredEvent)}
                className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight cursor-pointer hover:text-slate-200 transition-colors"
              >
                {featuredEvent.title}
              </h2>
            </div>

            <div className="font-mono text-xs text-slate-400 shrink-0">
              DEPLOYMENT: {featuredEvent.year} · ICE BSD CITY
            </div>
          </div>

          {/* Panoramic Visual Canvas with Parallax Scrub */}
          <div
            onClick={() => handleEventClick(featuredEvent)}
            className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded bg-[#050F22] border border-white/15 shadow-2xl cursor-pointer group"
          >
            <img
              src={featuredEvent.img}
              alt={featuredEvent.title}
              className="event-media-parallax w-full h-full object-cover scale-105 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-black/30 pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-200 pointer-events-none">
              <span className="flex items-center gap-2 bg-[#071731]/90 px-3.5 py-1.5 rounded border border-white/15">
                <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>{featuredEvent.location}</span>
              </span>

              <span className="flex items-center gap-2 bg-[#071731]/90 px-3.5 py-1.5 rounded border border-white/15">
                <Users className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>{featuredEvent.attendees}</span>
              </span>
            </div>
          </div>

          {/* Editorial Lead & Scope Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <div className="lg:col-span-8 space-y-3">
              <p className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {featuredEvent.description}
              </p>
              <div className="text-xs font-mono text-slate-400 pt-2">
                <span>Authority: </span>
                <span className="text-white font-medium">{featuredEvent.client}</span>
                <span className="mx-2">•</span>
                <span>Venue: </span>
                <span className="text-slate-200">{featuredEvent.venue}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex items-end justify-start lg:justify-end">
              <button
                onClick={() => handleEventClick(featuredEvent)}
                className="btn-editorial-red text-xs py-3 px-6 flex items-center gap-2"
              >
                <span>Inspect Event Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Integrated Production Metrics */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono">
            {featuredEvent.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RESTRAINED FILTER BAR */}
      <nav aria-label="Events Category Filter" className="sticky top-16 sm:top-20 z-30 bg-[#071731]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="overflow-x-auto scrollbar-none flex-grow -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-2 whitespace-nowrap min-w-max font-mono text-xs">
              {EVENT_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                const count = cat === "All Events"
                  ? EVENTS_DATA.length
                  : EVENTS_DATA.filter((e) => e.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded transition-all cursor-pointer border flex items-center gap-2 ${
                      isActive
                        ? "bg-[#C8102E] text-white border-[#C8102E] font-semibold"
                        : "bg-[#0A1F44] text-slate-300 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                        isActive ? "bg-white/20 text-white font-bold" : "text-slate-400 bg-[#071731]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>Archive: {filteredEvents.length} Records</span>
          </div>
        </div>
      </nav>

      {/* 4. REACT BITS MASONRY VISUAL ARCHIVE */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-12 sm:py-20 border-b border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <div className="font-mono text-xs text-[#C8102E] font-semibold tracking-wider uppercase">
              Visual Archive
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Production Portfolio &amp; Scenography Gallery
            </h2>
          </div>
          <div className="font-mono text-xs text-slate-400">
            Displaying {filteredEvents.length} Verified Mandates
          </div>
        </div>

        <Masonry
          items={filteredEvents}
          ease="power3.out"
          duration={0.6}
          stagger={0.04}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.98}
          blurToFocus={true}
          onItemClick={handleEventClick}
        />
      </section>

      {/* 5. CONTROLLED HORIZONTAL SCROLLING: PLENARY SPATIAL CHOREOGRAPHY */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-20 border-b border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-2">
            <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              On-Ground Scenography &amp; Stage Telemetry
            </h3>
            <p className="text-slate-400 font-sans text-sm max-w-xl">
              Direct field documentation across active TSA ministerial assemblies, convention halls, and broadcast command soundstages.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollGallery("left")}
              className="p-2.5 rounded bg-[#0A1F44] border border-white/15 hover:border-white/40 text-white transition-colors cursor-pointer"
              aria-label="Previous plenary frame"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollGallery("right")}
              className="p-2.5 rounded bg-[#0A1F44] border border-white/15 hover:border-white/40 text-white transition-colors cursor-pointer"
              aria-label="Next plenary frame"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Track */}
        <div
          ref={galleryScrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none py-8 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth snap-x snap-mandatory"
        >
          {plenaryMoments.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[320px] sm:min-w-[440px] lg:min-w-[500px] shrink-0 snap-start space-y-4 group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded bg-[#050F22] border border-white/15 shadow-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-60" />
              </div>

              <div className="space-y-1">
                <h4 className="font-heading text-lg font-bold text-white">
                  {item.title}
                </h4>
                <p className="font-mono text-xs text-slate-400">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ENTERPRISE MANDATE INTAKE */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#050F22] p-8 sm:p-14 rounded border border-white/15">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs text-[#C8102E] uppercase tracking-wider font-semibold">
              Commission Event Production
            </span>
            <h3 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Ready to Orchestrate Your Next High-Stakes Summit?
            </h3>
            <p className="text-slate-300 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
              From ministerial bilateral summits to enterprise congresses and high-impact brand showcases, our production units deliver turnkey execution across Southeast Asia.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red text-sm py-4 px-8 cursor-pointer flex items-center gap-3"
            >
              <span>Initiate Event Mandate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
