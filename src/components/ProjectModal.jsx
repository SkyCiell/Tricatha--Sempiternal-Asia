import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#071A33]/85 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl sm:max-w-4xl bg-[#0B1F3A] text-white border border-white/20 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Image */}
          <div className="relative h-48 sm:h-60 w-full overflow-hidden shrink-0 bg-[#071A33]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover grayscale contrast-115"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-[#071A33] text-white hover:bg-[#C62828] transition-colors cursor-pointer border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-4 bg-[#C62828] text-white px-3 py-1 font-mono text-[11px] uppercase tracking-wider font-semibold">
              CASE STUDY BRIEF
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-10 space-y-8 overflow-y-auto flex-1">
            <div>
              <div className="font-mono text-xs text-[#C62828] uppercase tracking-widest mb-2 font-bold">
                {project.category}
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                {project.name}
              </h2>
            </div>

            {/* Metadata Grid */}
            <div className="py-5 border-y border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
              <div>
                <div className="text-[10px] text-[#94A3B8] uppercase tracking-widest mb-1">CLIENT / SECTOR</div>
                <div className="font-semibold text-white leading-snug">{project.client}</div>
              </div>
              <div>
                <div className="text-[10px] text-[#94A3B8] uppercase tracking-widest mb-1">TIMELINE</div>
                <div className="font-semibold text-white leading-snug">{project.year}</div>
              </div>
              <div>
                <div className="text-[10px] text-[#94A3B8] uppercase tracking-widest mb-1">MEASURED IMPACT</div>
                <div className="font-semibold text-[#C62828] leading-snug">{project.impact}</div>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h3 className="font-heading text-xs uppercase tracking-widest text-white font-bold">
                EXECUTIVE OVERVIEW
              </h3>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Key Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-heading text-xs uppercase tracking-widest text-white font-bold">
                  KEY EXECUTION DELIVERABLES
                </h3>
                <div className="space-y-3 pt-1">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="pb-3 border-b border-white/10 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#C62828] shrink-0 mt-2" />
                      <span className="text-xs sm:text-sm text-[#CBD5E1] font-mono leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-5 px-8 border-t border-white/15 bg-[#071A33] flex items-center justify-between shrink-0">
            <div className="text-xs font-mono text-[#94A3B8]">
              PT TRICATHA SEMPITERNAL ASIA · THE CITY TOWER
            </div>
            <button
              onClick={onClose}
              className="text-xs font-mono font-bold uppercase tracking-widest text-white hover:text-[#C62828] transition-colors cursor-pointer"
            >
              CLOSE BRIEF
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
