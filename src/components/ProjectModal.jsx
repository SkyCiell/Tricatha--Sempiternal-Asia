import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#030B14]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl sm:max-w-4xl bg-[#071A2B] text-[#F4F6F2] border border-white/15 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col rounded-3xl"
          >
            {/* Top Minimal Image Header */}
            <div className="relative h-44 sm:h-52 md:h-56 w-full overflow-hidden shrink-0">
              <img
                src={project.image}
                alt={project.name || project.title}
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/40 to-transparent" />
              
              {/* Minimal Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 rounded-full bg-[#071A2B]/80 text-slate-300 hover:text-white hover:bg-[#071A2B] transition-all cursor-pointer z-20 border border-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Editorial Modal Content Body */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-10 space-y-10 overflow-y-auto flex-1"
            >
              {/* Main Dominant Editorial Headline */}
              <div>
                <div className="text-xs font-mono text-[#42D3A5] uppercase tracking-[0.2em] font-semibold mb-3">
                  {project.category}
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.1]">
                  {project.name || project.title}
                </h2>
              </div>

              {/* Minimal Metadata Text Row (No Cards!) */}
              <div className="py-5 border-y border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">CLIENT / SECTOR</div>
                  <div className="font-semibold text-white leading-snug">{project.client || "Tricatha Sempiternal Asia"}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">TIMELINE</div>
                  <div className="font-semibold text-white leading-snug">{project.year || "2025"}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">MEASURED IMPACT</div>
                  <div className="font-bold text-[#42D3A5] leading-snug">{project.impact || "High-Impact Practice"}</div>
                </div>
              </div>

              {/* Editorial Case Study Summary */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#42D3A5] font-bold">
                  CASE STUDY SUMMARY
                </div>
                <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-mono max-w-3xl">
                  {project.description || project.shortDesc || "Integrated strategic practice case study."}
                </p>
              </div>

              {/* Key Execution Highlights (Plain Text Lines) */}
              {(project.highlights || []).length > 0 && (
                <div className="space-y-4">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#42D3A5] font-bold">
                    KEY EXECUTION HIGHLIGHTS
                  </div>
                  <div className="space-y-4 pt-1">
                    {(project.highlights || []).map((highlight, idx) => (
                      <div key={idx} className="pb-3 border-b border-white/5 flex items-start gap-3.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#42D3A5] shrink-0 mt-2" />
                        <span className="text-xs sm:text-sm text-slate-200 font-mono leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Ultra Minimal Footer */}
            <div className="p-4 sm:p-5 px-6 sm:px-10 border-t border-white/10 bg-[#071A2B] flex items-center justify-between shrink-0">
              <div className="text-xs font-mono text-slate-400 tracking-wider">
                PT Tricatha Sempiternal Asia
              </div>
              <button
                onClick={onClose}
                className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#42D3A5] hover:text-white transition-colors cursor-pointer"
              >
                CLOSE SHOWCASE
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
