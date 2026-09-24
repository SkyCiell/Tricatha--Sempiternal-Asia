import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050F22]/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl sm:max-w-4xl bg-[#0A1F44] text-[#F1F5F9] border border-white/15 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col rounded"
        >
          {/* Header Image */}
          <div className="relative h-52 sm:h-72 w-full overflow-hidden shrink-0 bg-[#050F22]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/50 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded flex items-center justify-center bg-[#071731]/80 hover:bg-[#C8102E] text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-5 left-6 right-6">
              <span className="px-3 py-1 bg-[#C8102E] text-white font-mono text-[10px] uppercase tracking-wider font-semibold rounded">
                CASE STUDY DOSSIER
              </span>
              <h2 className="font-heading text-xl sm:text-3xl font-semibold text-white tracking-tight mt-2 leading-tight">
                {project.name}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 font-sans">
            {/* Metadata Strip */}
            <div className="p-4 bg-[#071731] rounded border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">CLIENT PARTNER</span>
                <span className="font-semibold text-white block mt-0.5">{project.client}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">TIMELINE</span>
                <span className="font-semibold text-white block mt-0.5">{project.year}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">VERIFIED OUTCOME</span>
                <span className="font-semibold text-[#FFFFFF] block mt-0.5">{project.impact}</span>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
                EXECUTIVE BRIEF &amp; STRATEGIC CONTEXT
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Key Deliverables */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
                  ACCREDITED EXECUTION HIGHLIGHTS
                </h3>
                <div className="space-y-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="p-3.5 bg-[#071731] rounded border border-white/10 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 px-6 sm:px-8 border-t border-white/10 bg-[#071731] flex items-center justify-between shrink-0 font-mono text-xs">
            <span className="text-slate-400">THE CITY TOWER · JAKARTA HQ</span>
            <button
              onClick={onClose}
              className="btn-editorial-red"
            >
              Close Dossier
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
