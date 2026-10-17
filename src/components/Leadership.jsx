import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { leadershipTeam } from "../data/tsaData";
import { X, Quote, ArrowRight, ArrowUpRight } from "lucide-react";

export default function Leadership() {
  const [activeLeader, setActiveLeader] = useState(null);

  return (
    <section
      id="team"
      data-nav-theme="dark"
      className="py-20 sm:py-28 bg-[#0E1B3E] text-white relative border-b border-white/10 overflow-hidden"
      aria-label="Meet Our Team"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section matching User's Presentation Slide */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20 space-y-4">
          <h2 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase leading-none drop-shadow-sm">
            <span>MEET OUR </span>
            <span className="text-[#C8102E]">TEAM</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            Uniting technological expertise, government insight, and creative excellence to deliver innovative strategies and measurable impact. We operate as your strategic partner, bridging the gap between digital innovation and experiential event management.
          </p>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-[1360px] mx-auto">
          {leadershipTeam.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveLeader(leader)}
              className="group flex flex-col items-center text-center cursor-pointer select-none"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveLeader(leader);
                }
              }}
              aria-label={`View profile of ${leader.name}, ${leader.role}`}
            >
              {/* Photo Frame with Rounded Corners & Red Accent Bar */}
              <div className="relative w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#071731] border border-white/10 group-hover:border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-300 flex flex-col justify-end">
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  onError={(e) => {
                    if (leader.fallbackImage && e.currentTarget.src !== leader.fallbackImage) {
                      e.currentTarget.src = leader.fallbackImage;
                    }
                  }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none"
                />

                {/* Subtle bottom shadow vignette behind red bar */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                {/* Solid Red Accent Strip at bottom of photo (Matching slide design) */}
                <div className="relative z-10 w-full bg-[#C8102E] py-1.5 px-3 text-center pointer-events-none">
                  <span className="font-mono text-[10px] text-white/95 uppercase tracking-wider font-semibold block truncate">
                    {leader.badge || leader.role}
                  </span>
                </div>
              </div>

              {/* Text Info Below Photo */}
              <div className="mt-4 sm:mt-5 space-y-1 w-full px-2">
                <h3 className="font-heading font-bold text-white text-xl sm:text-2xl tracking-tight group-hover:text-[#FF6B81] transition-colors leading-tight">
                  {leader.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-300 font-normal leading-snug">
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
              className="fixed inset-0 bg-[#071731]/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-[#0A1F44] border border-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl z-10 text-white max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setActiveLeader(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-[#C8102E] text-white rounded-full transition-colors cursor-pointer z-20"
                aria-label="Close leader profile"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col sm:flex-row gap-5 items-start mb-5 shrink-0 pr-8">
                <img
                  src={activeLeader.image}
                  alt={activeLeader.name}
                  className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-xl border border-white/20 shrink-0 shadow-md"
                  onError={(e) => {
                    if (activeLeader.fallbackImage && e.currentTarget.src !== activeLeader.fallbackImage) {
                      e.currentTarget.src = activeLeader.fallbackImage;
                    }
                  }}
                />
                <div>
                  <span className="text-[11px] font-mono text-[#C8102E] uppercase tracking-widest font-semibold block mb-1">
                    {activeLeader.division}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-1 leading-snug">
                    {activeLeader.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-sans text-slate-300 font-medium mb-1">
                    {activeLeader.role}
                  </div>
                  {activeLeader.mandateScope && (
                    <div className="text-[11px] font-mono text-slate-400">
                      {activeLeader.mandateScope}
                    </div>
                  )}
                </div>
              </div>

              {/* Scrollable Body Container for Bio and Quote */}
              <div className="overflow-y-auto pr-2 space-y-4 my-2 flex-1 scrollbar-thin scrollbar-thumb-white/20">
                {activeLeader.quote && (
                  <div className="p-4 bg-white/5 border-l-2 border-[#C8102E] rounded-r-md">
                    <Quote className="w-4 h-4 text-[#C8102E] mb-1" />
                    <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                      "{activeLeader.quote}"
                    </p>
                  </div>
                )}

                <div className="text-slate-200 text-xs sm:text-sm leading-relaxed space-y-3 font-sans">
                  {activeLeader.bio.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 shrink-0 mt-3">
                <span>PT Tricatha Sempiternal Asia</span>
                <button
                  onClick={() => setActiveLeader(null)}
                  className="px-4 py-2 bg-white/10 hover:bg-[#C8102E] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded cursor-pointer transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
