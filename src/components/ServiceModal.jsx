import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServiceModal({ service, onClose, onSelectContact }) {
  const isBlue = service?.theme === "blue";

  return (
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#071A2B]/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#0B2238] border border-white/20 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col rounded-2xl"
          >
          {/* Top Header */}
          <div className="relative h-48 sm:h-56 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2238] via-[#0B2238]/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 bg-[#071A2B]/80 text-white hover:text-[#42D3A5] rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <span
                className={`font-mono text-xl font-bold block mb-1 ${
                  isBlue ? "text-[#1677FF]" : "text-[#42D3A5]"
                }`}
              >
                {service.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                PRACTICE OVERVIEW
              </h4>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4">
                CORE DELIVERABLES & CAPABILITIES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#071A2B] border border-white/10 rounded-xl flex items-start gap-3"
                  >
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        isBlue ? "text-[#1677FF]" : "text-[#42D3A5]"
                      }`}
                    />
                    <span className="text-xs text-slate-200 font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10 bg-[#071A2B] flex items-center justify-between">
            <div className="text-xs font-mono text-slate-400">
              PT Tricatha Sempiternal Asia
            </div>
            <button
              onClick={() => {
                onClose();
                onSelectContact(service.title);
              }}
              className={`px-6 py-3 font-mono font-bold text-xs uppercase tracking-widest text-white flex items-center gap-2 rounded-full ${
                isBlue ? "bg-[#1677FF] hover:bg-[#087F5B]" : "bg-[#087F5B] hover:bg-[#42D3A5]"
              }`}
            >
              <span>Inquire For Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
