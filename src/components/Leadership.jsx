import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { leadershipTeam } from "../data/tsaData";
import { X } from "lucide-react";

export default function Leadership() {
  const [activeLeader, setActiveLeader] = useState(null);

  // Manage body / Lenis scroll locking while leader bio modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveLeader(null);
      }
    };

    if (activeLeader) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      if (window.__lenis) window.__lenis.stop();
    } else {
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    };
  }, [activeLeader]);

  return (
    <section
      id="team"
      data-nav-theme="dark"
      className="py-14 sm:py-28 bg-[#071731] text-white relative border-b border-white/10 overflow-hidden"
      aria-label="Executive Leadership"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 sm:pb-16 border-b border-white/10">
          <div className="space-y-2.5 sm:space-y-3 max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Executive Leadership.
            </h2>
            <p className="font-sans text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
              Directing sovereign protocol, mission-critical digital architecture, and large-scale MICE operations across Southeast Asia.
            </p>
          </div>
        </div>

        {/* 4 Art-Directed Executive Portraits */}
        <div className="pt-10 sm:pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {leadershipTeam.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: "easeOut"
              }}
              onClick={() => setActiveLeader(leader)}
              className="group flex flex-col cursor-pointer select-none text-left touch-manipulation active:scale-[0.985] transition-transform"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveLeader(leader);
                }
              }}
              aria-label={`View biography of ${leader.name}, ${leader.role}`}
            >
              {/* Clean Portrait Frame */}
              <div className="relative w-full aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden bg-[#0A1F44] border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-sm">
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  onError={(e) => {
                    if (leader.fallbackImage && e.currentTarget.src !== leader.fallbackImage) {
                      e.currentTarget.src = leader.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104 pointer-events-none"
                />
              </div>

              {/* Dignified Editorial Typography Below Portrait */}
              <div className="pt-3.5 sm:pt-4 space-y-1">
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#C8102E] font-semibold">
                  {leader.badge || leader.role}
                </div>

                <h3 className="font-heading font-bold text-white text-base sm:text-xl tracking-tight leading-snug group-hover:text-slate-200 transition-colors">
                  {leader.name}
                </h3>

                <p className="font-sans text-xs text-slate-400 leading-normal line-clamp-1">
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bio Modal on Click - Optimized for Mobile & Desktop */}
      <AnimatePresence>
        {activeLeader && (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 md:p-10 overscroll-contain"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeLeader.name} Biography`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLeader(null)}
              className="absolute inset-0 bg-[#050F22]/90 cursor-pointer"
            />

            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-[#0A1F44] border border-white/15 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden z-10 h-[90dvh] sm:h-auto sm:max-h-[90vh] overflow-y-auto overscroll-contain flex flex-col"
            >
              {/* Mobile Drag Pill */}
              <div className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <div className="w-10 h-1 rounded-full bg-white/40 shadow-xs" />
              </div>

              {/* Accessible 44px Close Button */}
              <button
                type="button"
                onClick={() => setActiveLeader(null)}
                className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer z-30 border border-white/15 touch-manipulation shadow-lg"
                aria-label="Close biography dialog (Esc)"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 p-5 sm:p-8 flex-1">
                {/* Modal Photo */}
                <div className="md:col-span-5">
                  <div className="w-full aspect-[16/10] sm:aspect-[3/4] rounded-lg overflow-hidden bg-[#071731] border border-white/10">
                    <img
                      src={activeLeader.image}
                      alt={activeLeader.name}
                      onError={(e) => {
                        if (activeLeader.fallbackImage && e.currentTarget.src !== activeLeader.fallbackImage) {
                          e.currentTarget.src = activeLeader.fallbackImage;
                        }
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Modal Info */}
                <div className="md:col-span-7 flex flex-col justify-center space-y-3 sm:space-y-4 text-left">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#C8102E] font-semibold">
                      {activeLeader.badge || activeLeader.role}
                    </span>
                    <h3 className="font-heading font-bold text-xl sm:text-3xl text-white tracking-tight">
                      {activeLeader.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-sans">
                      {activeLeader.role}
                    </p>
                  </div>

                  {activeLeader.quote && (
                    <div className="relative pl-3.5 sm:pl-4 border-l-2 border-[#C8102E] text-xs sm:text-sm italic font-editorial text-slate-200">
                      "{activeLeader.quote}"
                    </div>
                  )}

                  <div className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed space-y-2 pt-1 border-t border-white/10">
                    {activeLeader.bio.split("\n\n").map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {activeLeader.mandateScope && (
                    <div className="pt-2 text-[10px] sm:text-xs font-mono text-slate-400">
                      <span className="text-[#C8102E] uppercase font-bold">Mandate Scope:</span>{" "}
                      {activeLeader.mandateScope}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
