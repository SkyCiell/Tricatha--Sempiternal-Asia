import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { coreCapabilities } from "../data/tsaData";

export default function WhatWeDoIntro({ navigateTo }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeItem = coreCapabilities[selectedIndex] || coreCapabilities[0];
  const activeFormattedIdx = selectedIndex + 1 < 10 ? `0${selectedIndex + 1}` : selectedIndex + 1;

  const handleInquiry = () => {
    if (navigateTo) {
      navigateTo("/contact");
    } else {
      window.history.pushState(null, "", "/contact");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const handleEventArchive = () => {
    if (navigateTo) {
      navigateTo("/events");
    } else {
      window.history.pushState(null, "", "/events");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <section
      id="services"
      className="bg-[#071731] text-white border-b border-white/10 relative overflow-hidden py-12 sm:py-16 lg:py-5 lg:h-[calc(100vh-4.5rem)] lg:min-h-[580px] lg:max-h-[900px] flex flex-col justify-between scroll-mt-[72px]"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 w-full h-full flex flex-col justify-between">

        {/* 1. COMPACT EDITORIAL HEADER BAR */}
        <div className="shrink-0 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#C8102E] tracking-widest uppercase font-semibold mb-1">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>OPERATIONAL CAPABILITIES</span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-[28px] font-semibold text-white tracking-tight leading-tight">
              Integrated Capabilities &amp; <span className="font-editorial italic font-normal text-slate-200">Event Delivery</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-slate-400">
            <span className="hidden sm:inline text-slate-300">5 Accredited Disciplines</span>
            <button
              onClick={handleEventArchive}
              className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5 text-slate-300"
            >
              <span>Events Archive</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
            </button>
          </div>
        </div>

        {/* 2. BALANCED SINGLE-VIEWPORT TWO-COLUMN COMPOSITION */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-3 sm:pt-4 min-h-0">

          {/* Left Column: Full-Height Integrated Visual Area (5 cols) */}
          <div className="lg:col-span-5 h-full flex flex-col min-h-0">
            <div className="editorial-image-frame rounded-lg w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full relative overflow-hidden bg-[#050F22] border border-white/15 shadow-xl flex flex-col justify-between">

              {/* Full-Cover Background Image with natural aspect-ratio preservation */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.title}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Scrim Gradient Overlays for Readability & Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/45 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#071731]/70 via-transparent to-transparent pointer-events-none" />

              {/* Top In-Composition Telemetry Badge */}
              <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 bg-[#071731]/90 backdrop-blur-xs font-mono text-[10px] text-[#C8102E] uppercase tracking-wider font-semibold rounded border border-white/10">
                  DISCIPLINE {activeFormattedIdx} / 0{coreCapabilities.length}
                </span>
              </div>

              {/* Bottom In-Composition Active Operational Focus Overlay */}
              <div className="relative z-10 p-4 sm:p-5 lg:p-6 space-y-2.5">
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-[#C8102E] uppercase tracking-widest font-semibold">
                    ACTIVE OPERATIONAL MANDATE
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug">
                    {activeItem.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal line-clamp-2">
                    {activeItem.shortDesc}
                  </p>
                </div>

                {/* Key Deliverables Line */}
                <div className="pt-2 border-t border-white/10 hidden sm:block">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    DISCIPLINE DELIVERABLES:
                  </div>
                  <div className="space-y-0.5 font-sans text-xs text-slate-200">
                    {activeItem.deliverables.slice(0, 2).map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="font-mono text-[#C8102E] font-semibold shrink-0">—</span>
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-0.5">
                  <button
                    onClick={handleInquiry}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-[#C8102E] transition-colors cursor-pointer group uppercase tracking-wider"
                  >
                    <span>Commission {activeItem.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8102E] transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Numbered Capability Index (7 cols, 5 Balanced Items) */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10 h-full min-h-0 flex flex-col justify-between">
            {coreCapabilities.map((item, index) => {
              const isSelected = index === selectedIndex;
              const formattedIdx = index + 1 < 10 ? `0${index + 1}` : index + 1;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedIndex(index)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex-1 flex flex-col justify-center px-4 sm:px-6 py-2.5 sm:py-3 lg:py-2 transition-all duration-200 cursor-pointer group ${isSelected
                    ? "bg-white/[0.035] pl-5 sm:pl-7 border-l-2 border-l-[#C8102E]"
                    : "hover:bg-white/[0.015] border-l-2 border-l-transparent"
                    }`}
                >
                  <div className="flex items-center justify-between gap-4 w-full">
                    {/* Left: Number & Main Content */}
                    <div className="space-y-1 max-w-xl min-w-0 flex-grow">
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-sm sm:text-base font-bold transition-colors w-6 shrink-0 ${isSelected ? "text-[#C8102E]" : "text-slate-400 group-hover:text-slate-200"
                          }`}>
                          {formattedIdx}
                        </span>

                        <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-slate-400 font-medium truncate">
                          {item.category}
                        </span>
                      </div>

                      <div className="pl-9 sm:pl-9">
                        <h3 className={`font-heading text-base sm:text-lg lg:text-xl font-semibold tracking-tight transition-all duration-200 leading-snug ${isSelected
                          ? "text-white translate-x-1"
                          : "text-slate-200 group-hover:text-white group-hover:translate-x-1"
                          }`}>
                          {item.title}
                        </h3>

                        <p className={`font-sans text-xs sm:text-sm font-normal leading-relaxed pt-0.5 transition-colors line-clamp-1 lg:line-clamp-2 ${isSelected ? "text-slate-200" : "text-slate-400 group-hover:text-slate-300"
                          }`}>
                          {item.shortDesc}
                        </p>
                      </div>
                    </div>

                    {/* Right: Restrained Arrow Indicator */}
                    <div className="shrink-0 pl-2">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${isSelected
                        ? "bg-[#C8102E] text-white shadow-xs"
                        : "bg-white/5 text-slate-400 group-hover:text-white group-hover:bg-white/10"
                        }`}>
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isSelected ? "translate-x-0.5" : "group-hover:translate-x-0.5"
                          }`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
