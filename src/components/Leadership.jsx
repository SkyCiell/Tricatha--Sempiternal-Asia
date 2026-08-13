import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { leadershipTeam } from "../data/tsaData";
import { X, Quote, ArrowRight } from "lucide-react";

export default function Leadership() {
  const [activeLeader, setActiveLeader] = useState(null);

  return (
    <section id="leadership" className="py-24 bg-[#071A2B] relative border-b border-[#1677FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono text-[#20B486] uppercase tracking-[0.25em] mb-2 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#20B486]" />
              EXECUTIVE LEADERSHIP
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F5F7F4] tracking-tight uppercase">
              Governed by <span className="text-[#1677FF]">Visionaries.</span>
            </h2>
          </div>
          <div className="max-w-md text-slate-400 text-sm font-mono">
            Multidisciplinary leaders uniting sovereign policy, enterprise software architecture, and broadcast direction.
          </div>
        </div>

        {/* Leadership Portrait Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveLeader(leader)}
              className="group bg-[#0B2238] border border-white/10 hover:border-[#42D3A5] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between rounded-2xl shadow-lg"
            >
              <div>
                {/* Portrait Canvas */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#071A2B] rounded-t-2xl">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2238] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-2.5 py-1 bg-[#071A2B]/90 font-mono text-[10px] text-[#42D3A5] uppercase tracking-wider block truncate rounded-full">
                      {leader.division}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#20B486] transition-colors mb-1">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-mono text-[#1677FF] font-bold uppercase mb-3">
                    {leader.role}
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    "{leader.quote}"
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                <span className="text-[11px] uppercase tracking-wider">VIEW PROFILE</span>
                <ArrowRight className="w-4 h-4 text-[#20B486]" />
              </div>
            </motion.div>
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
              className="fixed inset-0 bg-[#071A2B]/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0B2238] border border-white/20 p-6 sm:p-8 overflow-hidden z-10"
            >
              <button
                onClick={() => setActiveLeader(null)}
                className="absolute top-4 right-4 p-2 bg-[#071A2B] text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
                <img
                  src={activeLeader.image}
                  alt={activeLeader.name}
                  className="w-24 h-28 object-cover border border-white/20 shrink-0"
                />
                <div>
                  <span className="text-xs font-mono text-[#20B486] uppercase tracking-widest block mb-1">
                    {activeLeader.division}
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase mb-1">
                    {activeLeader.name}
                  </h3>
                  <div className="text-xs font-mono text-[#1677FF] font-bold uppercase mb-3">
                    {activeLeader.role}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#071A2B] border-l-4 border-[#1677FF] mb-6">
                <Quote className="w-4 h-4 text-[#1677FF] mb-2" />
                <p className="text-xs sm:text-sm text-slate-200 italic font-serif leading-relaxed">
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
                  className="px-4 py-2 bg-[#1677FF] text-white font-mono text-xs uppercase"
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
