import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { coreCapabilities } from "../data/tsaData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhatWeDoIntro({ navigateTo }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create scroll-driven synchronization for the capabilities list
      itemsRef.current.forEach((el, index) => {
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top center+=100",
          end: "bottom center+=100",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const activeCapability = coreCapabilities[activeIndex] || coreCapabilities[0];

  const handleInquiry = () => {
    if (navigateTo) {
      navigateTo("/contact");
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEventsArchive = () => {
    if (navigateTo) {
      navigateTo("/events");
    }
  };

  const scrollToItem = (index) => {
    const el = itemsRef.current[index];
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -120 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={containerRef}
      id="services"
      className="bg-[#071731] text-white py-20 sm:py-28 border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#C8102E]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C8102E] font-semibold">
                Operational Capabilities
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.12]">
              Integrated Event Architecture &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                End-to-End Delivery.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1 max-w-2xl">
              Operating across five accredited disciplines, TSA provides institutional clients with turnkey governance, sovereign protocol execution, multi-hall exhibition management, and cinematic broadcast production.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
            <button
              onClick={handleEventsArchive}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 group py-2"
            >
              <span>Explore Delivered Portfolio</span>
              <ArrowUpRight className="w-4 h-4 text-[#C8102E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Desktop Sticky Scroll Storytelling Composition */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 lg:gap-16 pt-14 items-start relative">
          
          {/* Left Sticky Media Showcase (5 cols, pinned to viewport) */}
          <div className="lg:col-span-5 sticky top-28 h-[calc(100vh-10rem)] max-h-[640px] flex flex-col justify-between">
            <div className="relative w-full h-full rounded bg-[#050F22] border border-white/15 overflow-hidden shadow-2xl flex flex-col justify-between">
              
              {/* Image & Video Layers with Smooth Transitions */}
              <div className="absolute inset-0 overflow-hidden">
                {coreCapabilities.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      idx === activeIndex
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 z-0 pointer-events-none"
                    }`}
                  >
                    {idx === 0 ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        src="/hero-bg-720p.mp4"
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#071731]/60 via-transparent to-transparent" />
                  </div>
                ))}
              </div>

              {/* Top Operational Category Indicator */}
              <div className="relative z-20 p-6 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/90 bg-[#071731]/80 px-3 py-1 rounded border border-white/10 backdrop-blur-sm">
                  {activeCapability.category}
                </span>
                <span className="font-mono text-xs text-slate-300">
                  {activeIndex + 1} / {coreCapabilities.length}
                </span>
              </div>

              {/* Bottom In-Frame Active Focus */}
              <div className="relative z-20 p-6 sm:p-8 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                    {activeCapability.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {activeCapability.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-slate-400">
                    Sovereign &amp; Enterprise Standard
                  </span>
                  <button
                    onClick={handleInquiry}
                    className="text-xs text-[#C8102E] hover:text-white font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Mandate Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Quick Navigation Trackers */}
            <div className="pt-4 flex items-center gap-2">
              {coreCapabilities.map((cap, idx) => (
                <button
                  key={cap.id}
                  onClick={() => scrollToItem(idx)}
                  className={`flex-1 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "bg-[#C8102E] ring-2 ring-[#C8102E]/30"
                      : "bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`Jump to ${cap.title}`}
                />
              ))}
            </div>
          </div>

          {/* Right Scrolling Narrative Track (7 cols) */}
          <div className="lg:col-span-7 space-y-24 py-8">
            {coreCapabilities.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className={`p-8 sm:p-10 rounded border transition-all duration-500 ${
                    isActive
                      ? "bg-[#0A1F44] border-white/20 shadow-xl"
                      : "bg-[#071731] border-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  {/* Category Identifier */}
                  <div className="flex items-center gap-2 font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider mb-2">
                    <span>{item.category}</span>
                  </div>

                  {/* Discipline Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                    {item.title}
                  </h3>

                  {/* Comprehensive Short Description */}
                  <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8">
                    {item.shortDesc}
                  </p>

                  {/* Core Deliverables Matrix */}
                  <div className="border-t border-white/10 pt-6">
                    <div className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                      Institutional Scope &amp; Deliverables
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {item.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5">
                          <span className="text-[#C8102E] font-bold shrink-0 mt-0.5">—</span>
                          <span className="font-sans text-xs text-slate-200 leading-relaxed">
                            {deliv}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={handleInquiry}
                      className="btn-editorial-outline text-xs py-2 px-5 cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>Inquire This Discipline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile & Tablet Reflow Composition (<lg) */}
        <div className="lg:hidden space-y-12 pt-10">
          {coreCapabilities.map((item, _index) => (
            <div
              key={item.id}
              className="bg-[#0A1F44] rounded border border-white/10 overflow-hidden shadow-lg"
            >
              {/* Large Visual Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#050F22]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 z-10">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white bg-[#071731]/90 px-2.5 py-1 rounded border border-white/10">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content Narrative */}
              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  {item.shortDesc}
                </p>

                <div className="border-t border-white/10 pt-4 space-y-2">
                  <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    Core Scope:
                  </div>
                  {item.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-200">
                      <span className="text-[#C8102E] font-bold shrink-0">—</span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={handleInquiry}
                    className="btn-editorial-red text-xs w-full py-2.5 cursor-pointer justify-center"
                  >
                    <span>Inquire Discipline</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
