import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { leadershipTeam } from "../data/tsaData";
import { X, Quote, ArrowRight } from "lucide-react";

export default function Leadership() {
  const [activeLeader, setActiveLeader] = useState(null);

  return (
    <section id="leadership" className="py-20 sm:py-28 bg-[#0A1F44] text-white relative border-b border-white/10">
      <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-8 border-b border-white/10">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium font-heading text-white tracking-tight leading-tight">
              Governed by Multidisciplinary Practice Leaders
            </h2>
          </div>
          <div className="max-w-md text-slate-300 text-sm font-normal leading-relaxed">
            Uniting sovereign policy advisors, enterprise systems architects, and broadcast creative directors.
          </div>
        </div>

        {/* Leadership Portrait Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {leadershipTeam.map((leader) => (
            <div
              key={leader.name}
              onClick={() => setActiveLeader(leader)}
              className="group bg-white/5 border border-white/10 hover:border-[#C8102E]/60 transition-editorial cursor-pointer overflow-hidden flex flex-col justify-between rounded-lg shadow-xs hover:shadow-md"
            >
              <div>
                {/* Portrait Frame */}
                <div className="editorial-image-frame relative aspect-[3/4] overflow-hidden bg-slate-900 rounded-t-lg">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-2.5 py-1 bg-[#0A1F44]/85 backdrop-blur-xs font-mono text-[10px] text-white/90 uppercase tracking-wider block truncate rounded-sm border border-white/10">
                      {leader.division}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-medium text-white group-hover:text-[#C8102E] transition-colors mb-1 font-heading">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-mono text-[#C8102E] font-medium mb-3">
                    {leader.role}
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-normal">
                    "{leader.quote}"
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                <span className="text-[11px] uppercase tracking-wider">Practice Profile</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C8102E] transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {activeLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLeader(null)}
              className="fixed inset-0 bg-[#0A1F44]/85 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-[#0A1F44] border border-white/20 p-6 sm:p-8 rounded-lg shadow-2xl overflow-hidden z-10 text-white"
            >
              <button
                onClick={() => setActiveLeader(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-[#C8102E] text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close leader profile"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col sm:flex-row gap-5 items-start mb-6">
                <img
                  src={activeLeader.image}
                  alt={activeLeader.name}
                  className="w-24 h-28 object-cover rounded-md border border-white/20 shrink-0"
                />
                <div>
                  <span className="text-xs font-mono text-[#C8102E] uppercase tracking-widest block mb-1">
                    {activeLeader.division}
                  </span>
                  <h3 className="text-2xl font-medium font-heading text-white mb-1">
                    {activeLeader.name}
                  </h3>
                  <div className="text-xs font-mono text-slate-300 font-medium mb-3">
                    {activeLeader.role}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/5 border-l-2 border-[#C8102E] rounded-r-md mb-6">
                <Quote className="w-4 h-4 text-[#C8102E] mb-1" />
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{activeLeader.quote}"
                </p>
              </div>

              <div className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                {activeLeader.bio}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>PT Tricatha Sempiternal Asia</span>
                <button
                  onClick={() => setActiveLeader(null)}
                  className="px-4 py-2 bg-white/10 hover:bg-[#C8102E] text-white font-sans text-xs font-semibold uppercase tracking-wider rounded cursor-pointer transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
