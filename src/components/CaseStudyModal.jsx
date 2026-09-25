import React, { useEffect } from "react";
import { X, MapPin, ArrowRight } from "lucide-react";

export default function CaseStudyModal({ project, onClose, onWorkTogether }) {
  useEffect(() => {
    if (!project) return;

    // Prevent background scrolling and freeze Lenis
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (window.__lenis) {
      window.__lenis.stop();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
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
    <div
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#050F22]/50 backdrop-blur-[5px] overscroll-contain"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
    >
      <div 
        data-lenis-prevent
        className="relative w-full max-w-[560px] sm:max-w-[620px] bg-[#0A1F44] text-[#F1F5F9] rounded-xl border border-white/20 shadow-2xl overflow-hidden my-auto flex flex-col max-h-[82vh] overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="shrink-0 flex items-center justify-between px-5 py-3.5 bg-[#071731] border-b border-white/10">
          <div className="flex items-center gap-2.5 text-xs font-sans">
            <span className="px-2.5 py-0.5 bg-[#C8102E] text-white font-semibold rounded text-[10px] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-slate-300 font-mono text-[11px]">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div 
          data-lenis-prevent
          className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5 space-y-4"
        >
          
          {/* Main Title & Location */}
          <div className="space-y-1">
            <h2 id="modal-case-title" className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white">
              {project.name}
            </h2>
            {project.location && (
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>{project.location}</span>
              </div>
            )}
          </div>

          {/* Large Image Frame */}
          <div className="editorial-image-frame rounded-lg aspect-[16/9] max-h-[200px] bg-[#071731] overflow-hidden border border-white/10">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Summary Impact */}
          <div className="p-3 bg-[#071731] rounded-lg border border-white/10">
            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
              Verified Operational Impact
            </div>
            <div className="text-sm sm:text-base font-heading font-semibold text-white">
              {project.impact}
            </div>
          </div>

          {/* Overview & Execution Scope */}
          <div className="space-y-3 text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans">
            <div>
              <h3 className="font-heading text-xs uppercase tracking-wider font-semibold text-slate-200 mb-1">
                Executive Overview
              </h3>
              <p className="text-slate-300">{project.overview || project.shortDesc}</p>
            </div>

            {project.role && (
              <div className="pt-2 border-t border-white/10">
                <h3 className="font-heading text-xs uppercase tracking-wider font-semibold text-slate-200 mb-1">
                  TSA Delivery Scope &amp; Role
                </h3>
                <p className="text-slate-300">{project.role}</p>
              </div>
            )}
          </div>

          {/* Image Gallery */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="space-y-2 pt-3 border-t border-white/10">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Event Documentation Records
              </div>
              <div className="grid grid-cols-3 gap-2">
                {project.gallery.map((imgUrl, i) => (
                  <div key={i} className="aspect-[4/3] rounded overflow-hidden bg-[#071731] border border-white/10">
                    <img src={imgUrl} alt={`${project.name} record ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-end">
            <button
              onClick={() => {
                onClose();
                if (onWorkTogether) onWorkTogether();
              }}
              className="btn-editorial-red text-xs py-2.5 px-5 w-full sm:w-auto flex items-center justify-center gap-2 rounded-full shadow-lg"
            >
              <span>Consult on Similar Event</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
