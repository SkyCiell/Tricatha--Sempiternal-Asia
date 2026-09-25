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
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl bg-[#0B1F3A] border border-white/20 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-white overscroll-contain rounded-xl"
        >
          {/* Visual Photo Banner (if image available) */}
          {service.image ? (
            <div className="relative aspect-[16/8] sm:aspect-[21/9] max-h-[260px] w-full overflow-hidden bg-[#050F22] shrink-0 border-b border-white/15">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/40 to-transparent" />
              
              {/* Floating Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-[#C8102E] text-white rounded-full transition-colors cursor-pointer z-10 shadow-lg"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Overlay at bottom of banner */}
              <div className="absolute bottom-4 left-6 right-6">
                <div className="font-mono text-xs text-[#C8102E] uppercase tracking-wider font-semibold mb-1 drop-shadow">
                  {service.category || "TURNKEY DISCIPLINE"}
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white drop-shadow-md">
                  {service.title}
                </h3>
              </div>
            </div>
          ) : (
            /* Standard Text Header (when no image) */
            <div className="shrink-0 p-6 sm:p-8 border-b border-white/15 flex items-start justify-between bg-[#071A33]">
              <div>
                <div className="font-mono text-xs text-[#C8102E] uppercase tracking-widest font-bold mb-1">
                  {service.category}
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                  {service.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-white hover:text-[#C8102E] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Content */}
          <div data-lenis-prevent className="p-6 sm:p-8 overflow-y-auto overscroll-contain space-y-6 flex-1">
            <div>
              <h4 className="font-heading text-xs uppercase text-slate-300 font-bold tracking-wider mb-2">
                PRACTICE MANDATE &amp; SCOPE
              </h4>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {service.shortDesc}
              </p>
            </div>

            {service.deliverables && (
              <div>
                <h4 className="font-heading text-xs uppercase text-slate-300 font-bold tracking-wider mb-3">
                  CORE DELIVERABLES &amp; PROTOCOLS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#071A33] border border-white/10 rounded flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-sans leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Operational Assurance */}
            <div className="p-4 bg-[#071731] border border-white/10 rounded flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white block mb-0.5">Institutional Protocol &amp; HSSE Assurance</span>
                All operations are executed under certified health &amp; safety standards, strict non-disclosure agreements, and protocol-cleared command.
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-5 sm:p-6 border-t border-white/15 bg-[#071A33] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              PT TRICATHA SEMPITERNAL ASIA · THE CITY TOWER
            </div>
            <button
              onClick={() => {
                onClose();
                if (onSelectContact) onSelectContact(service.title);
              }}
              className="w-full sm:w-auto px-7 py-3 bg-[#C8102E] hover:bg-[#a82020] text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer rounded-full shadow-lg"
            >
              <span>COMMISSION THIS DISCIPLINE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
