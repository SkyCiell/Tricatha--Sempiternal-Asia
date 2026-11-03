import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { leadershipTeam } from "../data/tsaData";
import { X, Quote } from "lucide-react";

export default function Leadership() {
  const [activeLeader, setActiveLeader] = useState(null);

  return (
    <section
      id="team"
      data-nav-theme="dark"
      className="py-20 sm:py-28 bg-[#071731] text-white relative border-b border-white/10 overflow-hidden"
      aria-label="Executive Leadership"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/10">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Executive Leadership.
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Directing sovereign protocol, mission-critical digital architecture, and large-scale MICE operations across Southeast Asia.
            </p>
          </div>
        </div>

        {/* 4 Art-Directed Executive Portraits */}
        <div className="pt-12 sm:pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
              className="group flex flex-col cursor-pointer select-none text-left"
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
              {/* Clean Portrait Frame without Artificial Ribbons or Rounded Blobs */}
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-[#0A1F44] border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-sm">
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
              <div className="pt-4 space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#C8102E] font-medium">
                  {leader.badge || leader.role}
                </div>

                <h3 className="font-heading font-bold text-white text-lg sm:text-xl tracking-tight leading-snug group-hover:text-slate-200 transition-colors">
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

      {/* Bio Modal on Click */}
      <AnimatePresence>
        {activeLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLeader(null)}
              className="absolute inset-0 bg-[#050F22]/90 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-[#0A1F44] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveLeader(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-20 border border-white/10"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
                {/* Modal Photo */}
                <div className="md:col-span-5">
                  <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-[#071731] border border-white/10">
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
                <div className="md:col-span-7 flex flex-col justify-center space-y-4 text-left">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C8102E] font-medium">
                      {activeLeader.badge || activeLeader.role}
                    </span>
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight">
                      {activeLeader.name}
                    </h3>
                    <p className="font-sans text-xs text-slate-300">
                      {activeLeader.role}
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/10">
                    {activeLeader.bio}
                  </p>

                  {activeLeader.quote && (
                    <div className="p-3.5 bg-black/25 rounded border border-white/10 flex items-start gap-2.5">
                      <Quote className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                      <p className="font-editorial italic text-xs text-slate-200 leading-relaxed">
                        "{activeLeader.quote}"
                      </p>
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
