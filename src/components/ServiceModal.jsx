import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ServiceModal({ service, onClose, onSelectContact }) {
  useEffect(() => {
    if (!service) return;
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
  }, [service, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div data-lenis-prevent className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overscroll-contain">
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
          className="relative w-full max-w-[560px] sm:max-w-[620px] bg-[#0B1F3A] border border-white/20 shadow-2xl overflow-hidden z-10 max-h-[82vh] flex flex-col text-white overscroll-contain rounded-xl"
        >
          {/* Visual Photo Banner (if image available) */}
          {service.image ? (
            <div className="relative aspect-[16/9] max-h-[165px] sm:max-h-[185px] w-full overflow-hidden bg-[#050F22] shrink-0 border-b border-white/15">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/40 to-transparent" />
              
              {/* Floating Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-[#C8102E] text-white rounded-full transition-colors cursor-pointer z-10 shadow-lg"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title Overlay at bottom of banner */}
              <div className="absolute bottom-3 left-4 right-4">
                <div className="font-mono text-[10px] text-[#C8102E] uppercase tracking-wider font-semibold mb-0.5 drop-shadow">
                  {service.category || "TURNKEY DISCIPLINE"}
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-white drop-shadow-md">
                  {service.title}
                </h3>
              </div>
            </div>
          ) : (
            /* Standard Text Header (when no image) */
            <div className="shrink-0 p-4 sm:p-5 border-b border-white/15 flex items-start justify-between bg-[#071A33]">
              <div>
                <div className="font-mono text-[10px] text-[#C8102E] uppercase tracking-widest font-bold mb-0.5">
                  {service.category}
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                  {service.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-white hover:text-[#C8102E] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Content */}
          <div data-lenis-prevent className="p-4 sm:p-5 overflow-y-auto overscroll-contain space-y-4 flex-1">
            <div>
              <h4 className="font-heading text-[11px] uppercase text-slate-300 font-bold tracking-wider mb-1.5">
                PRACTICE MANDATE &amp; SCOPE
              </h4>
              <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed">
                {service.shortDesc}
              </p>
            </div>

            {service.deliverables && (
              <div>
                <h4 className="font-heading text-[11px] uppercase text-slate-300 font-bold tracking-wider mb-2">
                  CORE DELIVERABLES &amp; PROTOCOLS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-[#071A33] border border-white/10 rounded flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-sans leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Operational Assurance */}
            <div className="p-3 bg-[#071731] border border-white/10 rounded flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
              <div className="text-[11px] text-slate-300 leading-snug">
                <span className="font-semibold text-white block mb-0.5">Institutional Protocol &amp; HSSE Assurance</span>
                All operations are executed under certified health &amp; safety standards, strict non-disclosure agreements, and protocol-cleared command.
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-3.5 sm:p-4 border-t border-white/15 bg-[#071A33] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-[11px] font-mono text-slate-400">
              PT TRICATHA SEMPITERNAL ASIA · THE CITY TOWER
            </div>
            <button
              onClick={() => {
                onClose();
                if (onSelectContact) onSelectContact(service.title);
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#C8102E] hover:bg-[#a82020] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer rounded-full shadow-lg"
            >
              <span>COMMISSION THIS DISCIPLINE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
