import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { coreCapabilities } from "../data/tsaData";

export default function WhatWeDoIntro({ navigateTo }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeItem = coreCapabilities[selectedIndex] || coreCapabilities[0];

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
      className="relative w-screen left-1/2 -translate-x-1/2 h-screen min-h-[680px] bg-[#071731] text-white overflow-hidden flex flex-col justify-between select-none scroll-mt-[72px]"
    >
      {/* 1. 100vw x 100vh FULLSCREEN MEDIA LAYER */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeItem.id}
            src={activeItem.image}
            alt={activeItem.title}
            initial={{ opacity: 0, scale: 1.06, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.98, x: -20 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Directional Scrim for Supreme Readability without Obscuring Imagery */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/75 via-45% to-[#071731]/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/60 via-55% to-transparent pointer-events-none" />
      </div>

      {/* 2. TOP EDITORIAL NAVIGATION OVERLAY */}
      <div className="relative z-10 w-full pt-8 sm:pt-10 px-6 sm:px-12 lg:px-16 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h2 className="font-heading text-lg sm:text-2xl font-semibold text-white tracking-tight leading-tight">
            Integrated Capabilities &amp; <span className="font-editorial italic font-normal text-slate-300">Event Delivery</span>
          </h2>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-slate-300">
          <span className="hidden sm:inline text-slate-400">5 Sovereign Disciplines</span>
          <button
            onClick={handleEventArchive}
            className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5 text-slate-300"
          >
            <span>Events Archive</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
          </button>
        </div>
      </div>

      {/* 3. CENTER / LOWER DIRECT TYPOGRAPHY OVER MEDIA */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 my-auto py-6">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#C8102E] tracking-widest uppercase font-semibold">
                  {activeItem.category}
                </span>
                <span className="text-white/30 text-xs">/</span>
                <span className="text-slate-300 font-mono text-xs">DISCIPLINE 0{selectedIndex + 1}</span>
              </div>

              <h3 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
                {activeItem.title}
              </h3>

              <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
                {activeItem.shortDesc}
              </p>

              {/* Key Deliverables Chips Directly Over Media */}
              <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3">
                {activeItem.deliverables.map((deliv, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-sans text-slate-200"
                  >
                    {deliv}
                  </span>
                ))}
              </div>

              {/* Action Trigger */}
              <div className="pt-3">
                <button
                  onClick={handleInquiry}
                  className="btn-editorial-red text-xs sm:text-sm py-3 px-6 cursor-pointer inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Inquire Institutional Mandate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 4. BOTTOM INTERACTIVE DISCIPLINE SELECTOR STRIP OVER MEDIA */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 pt-4 border-t border-white/15">
          {coreCapabilities.map((item, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                className={`text-left p-3 sm:p-4 rounded transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "bg-white/15 backdrop-blur-md border-white/30 text-white shadow-lg"
                    : "bg-black/25 backdrop-blur-sm border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <div className={`font-mono text-[10px] uppercase tracking-wider mb-1 font-semibold ${isSelected ? "text-[#C8102E]" : "text-slate-400"}`}>
                  {item.category}
                </div>
                <div className="font-heading text-xs sm:text-sm font-semibold truncate">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
