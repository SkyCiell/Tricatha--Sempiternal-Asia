import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

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
          className="relative w-full max-w-3xl bg-[#0B1F3A] border border-white/20 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col text-white overscroll-contain"
        >
          {/* Header */}
          <div className="shrink-0 p-6 sm:p-8 border-b border-white/15 flex items-start justify-between bg-[#071A33]">
            <div>
              <div className="font-mono text-xs text-[#C62828] uppercase tracking-widest font-bold mb-1">
                {service.category}
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                {service.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white hover:text-[#C62828] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div data-lenis-prevent className="p-6 sm:p-8 overflow-y-auto overscroll-contain space-y-6 flex-1">
            <div>
              <h4 className="font-heading text-xs uppercase text-white font-bold tracking-wider mb-2">
                PRACTICE MANDATE & SCOPE
              </h4>
              <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
                {service.shortDesc}
              </p>
            </div>

            {service.deliverables && (
              <div>
                <h4 className="font-heading text-xs uppercase text-white font-bold tracking-wider mb-3">
                  CORE DELIVERABLES & PROTOCOLS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#071A33] border border-white/10 flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-[#C62828] shrink-0 mt-1.5" />
                      <span className="text-xs text-[#CBD5E1] font-mono leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/15 bg-[#071A33] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#94A3B8]">
              PT TRICATHA SEMPITERNAL ASIA · THE CITY TOWER
            </div>
            <button
              onClick={() => {
                onClose();
                if (onSelectContact) onSelectContact(service.title);
              }}
              className="w-full sm:w-auto px-7 py-3 bg-[#C62828] hover:bg-[#a82020] text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer rounded-full"
            >
              <span>INQUIRE FOR THIS DISCIPLINE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
