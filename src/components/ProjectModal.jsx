import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (window.__lenis) {
      window.__lenis.stop();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      if (window.__lenis) {
        window.__lenis.start();
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overscroll-contain"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop: Translucent with subtle 20% blur allowing background visibility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050F22]/50 backdrop-blur-[5px]"
        />

        {/* Modal Container: Compact, centered, doesn't overwhelm viewport */}
        <motion.div
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative w-full max-w-[560px] sm:max-w-[620px] bg-[#0A1F44] text-[#F1F5F9] border border-white/20 shadow-2xl overflow-hidden z-10 max-h-[82vh] flex flex-col rounded-xl overscroll-contain"
        >
          {/* Header Image */}
          <div className="relative h-40 sm:h-48 w-full overflow-hidden shrink-0 bg-[#050F22]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/50 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 rounded-full flex items-center justify-center bg-black/60 hover:bg-[#C8102E] text-white transition-colors cursor-pointer z-10 shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="absolute bottom-3 left-4 right-4">
              <span className="px-2.5 py-0.5 bg-[#C8102E] text-white font-mono text-[10px] uppercase tracking-wider font-semibold rounded">
                EVENT CASE STUDY
              </span>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight mt-1 leading-tight drop-shadow-md">
                {project.name}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div data-lenis-prevent className="p-4 sm:p-5 space-y-4 overflow-y-auto overscroll-contain flex-1 font-sans">
            {/* Metadata Strip */}
            <div className="p-3 bg-[#071731] rounded-lg border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
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
            <div className="space-y-1">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-slate-300 font-semibold">
                EXECUTIVE BRIEF &amp; STRATEGIC CONTEXT
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Key Deliverables */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2 pt-1 border-t border-white/10">
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-slate-300 font-semibold">
                  ACCREDITED EXECUTION HIGHLIGHTS
                </h3>
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="p-2.5 bg-[#071731] rounded border border-white/10 flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3.5 sm:p-4 border-t border-white/10 bg-[#071731] flex items-center justify-end shrink-0">
            <button
              onClick={onClose}
              className="btn-editorial-red text-xs py-2 px-5"
            >
              Close Dossier
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
