import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

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
          className="fixed inset-0 bg-[#0A1F44]/80 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl sm:max-w-4xl bg-[#FFFFFF] text-[#0A1F44] border border-slate-200 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col rounded-lg"
        >
          {/* Header Image */}
          <div className="relative h-52 sm:h-72 w-full overflow-hidden shrink-0 bg-slate-900">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-[#0A1F44]/40 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-[#C8102E] text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-xs"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
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
            <div className="p-4 bg-[#F5F6F8] rounded border border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">CLIENT PARTNER</span>
                <span className="font-semibold text-[#0A1F44] block mt-0.5">{project.client}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">TIMELINE</span>
                <span className="font-semibold text-[#0A1F44] block mt-0.5">{project.year}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">VERIFIED OUTCOME</span>
                <span className="font-semibold text-[#C8102E] block mt-0.5">{project.impact}</span>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#0A1F44] font-semibold">
                EXECUTIVE BRIEF &amp; STRATEGIC CONTEXT
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Key Deliverables */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#0A1F44] font-semibold">
                  ACCREDITED EXECUTION HIGHLIGHTS
                </h3>
                <div className="space-y-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="p-3.5 bg-[#F5F6F8] rounded border border-slate-200/60 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 px-6 sm:px-8 border-t border-slate-100 bg-[#F5F6F8] flex items-center justify-between shrink-0 font-mono text-xs">
            <span className="text-slate-500">THE CITY TOWER · JAKARTA HQ</span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#0A1F44] hover:bg-[#C8102E] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              Close Dossier
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
