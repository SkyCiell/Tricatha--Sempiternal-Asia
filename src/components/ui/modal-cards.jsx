import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, ArrowRight, Check } from "lucide-react";

/**
 * ModalCards - React Bits Pro compliant animated modal cards component
 * Optimized for desktop, tablet, and mobile with responsive sheet transitions,
 * 44px touch targets, safe-area insets, body scroll lock, and Escape key navigation.
 */
export default function ModalCards({
  items = [],
  onNavigate,
  className = "",
  cardGridClassName = "grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 pt-8 sm:pt-10"
}) {
  const [activeItem, setActiveItem] = useState(null);
  const modalContentRef = useRef(null);

  // Close on Escape & manage body/Lenis scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    };

    if (activeItem) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      if (window.__lenis) {
        window.__lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if (window.__lenis) {
        window.__lenis.start();
      }
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [activeItem]);

  const handleCardClick = (item) => {
    setActiveItem(item);
  };

  const handleClose = () => {
    setActiveItem(null);
  };

  const handleModalCta = (route) => {
    handleClose();
    if (onNavigate && route) {
      onNavigate(route);
    } else if (route) {
      window.location.href = route;
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Cards Grid */}
      <div className={cardGridClassName}>
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-container-${item.id}`}
            onClick={() => handleCardClick(item)}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            aria-expanded={activeItem?.id === item.id}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCardClick(item);
              }
            }}
            className={`group relative flex flex-col justify-end rounded-lg sm:rounded-xl overflow-hidden cursor-pointer select-none border border-[#071731]/10 hover:border-[#071731]/40 shadow-xs hover:shadow-xl transition-[border-color,box-shadow] duration-300 bg-[#071731] focus:outline-none focus:ring-2 focus:ring-[#C8102E] touch-manipulation ${item.gridSpan || "col-span-1 md:col-span-6 lg:col-span-4"} ${item.heightClass || "h-[280px] sm:h-[340px] lg:h-[400px]"}`}
          >
            {/* Background Photography with Shared Layout Transition */}
            <motion.div
              layoutId={`card-image-wrap-${item.id}`}
              className="absolute inset-0 w-full h-full overflow-hidden"
            >
              <img
                src={item.photo}
                alt={item.photoAlt || item.name}
                loading="lazy"
                className={`w-full h-full object-cover ${item.imgPosition || "object-center"} transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none`}
              />
              {/* Natural Editorial Scrim: Legibility without hiding authentic imagery */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/60 via-45% to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[#071731]/20 transition-opacity duration-300 group-hover:bg-[#071731]/10 pointer-events-none" />
            </motion.div>

            {/* Card Content Overlay */}
            <div className="relative z-10 p-5 sm:p-7 space-y-2 sm:space-y-2.5">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] sm:text-xs tracking-wider text-slate-300 uppercase font-semibold">
                  {item.discipline}
                </span>
                <span className="text-white/60 group-hover:text-white transition-colors duration-200">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
              </div>

              <motion.h3
                layoutId={`card-title-${item.id}`}
                className="font-heading text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-white transition-colors"
              >
                {item.name}
              </motion.h3>

              <p className="font-sans text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                {item.summary || item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen / Responsive Modal Sheet with Shared Element Morph */}
      <AnimatePresence>
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 lg:p-10 overscroll-contain"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${activeItem.id}`}
          >
            {/* Backdrop Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={handleClose}
              className="absolute inset-0 bg-[#071731]/85 cursor-pointer"
            />

            {/* Expanded Modal Canvas: Native bottom-sheet on phone (<640px), floating card on tablet/desktop */}
            <motion.div
              layoutId={`card-container-${activeItem.id}`}
              ref={modalContentRef}
              data-lenis-prevent
              tabIndex={-1}
              className="relative w-full max-w-4xl h-[92dvh] sm:h-auto sm:max-h-[92vh] bg-white text-[#071731] rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 border border-[#E2E8F0] focus:outline-none"
            >
              {/* Mobile Drag Indicator Pill (Visual Cue for Sheet) */}
              <div className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <div className="w-10 h-1 rounded-full bg-white/70 shadow-xs" />
              </div>

              {/* Modal Top Bar with Accessible 44px Close Button */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close modal dialog (Esc)"
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-black/75 hover:bg-black active:scale-95 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md focus:ring-2 focus:ring-white focus:outline-none touch-manipulation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Container with data-lenis-prevent */}
              <div
                data-lenis-prevent
                className="overflow-y-auto overscroll-contain flex-1 divide-y divide-[#E2E8F0]"
              >
                {/* Hero Scenography & Photography */}
                <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full bg-[#071731] overflow-hidden">
                  <motion.div
                    layoutId={`card-image-wrap-${activeItem.id}`}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={activeItem.photo}
                      alt={activeItem.photoAlt || activeItem.name}
                      className={`w-full h-full object-cover ${activeItem.imgPosition || "object-center"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/55 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Header Overlay inside Hero */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 text-white space-y-1.5 sm:space-y-2 z-10">
                    <div className="font-mono text-xs text-[#FF8596] sm:text-slate-300 uppercase tracking-widest font-semibold">
                      {activeItem.discipline}
                    </div>

                    <motion.h2
                      id={`modal-title-${activeItem.id}`}
                      layoutId={`card-title-${activeItem.id}`}
                      className="font-heading text-xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
                    >
                      {activeItem.name}
                    </motion.h2>

                    {activeItem.tagline && (
                      <p className="font-editorial italic text-xs sm:text-base text-slate-200 max-w-2xl line-clamp-2 sm:line-clamp-none">
                        "{activeItem.tagline}"
                      </p>
                    )}
                  </div>
                </div>

                {/* Main Body Content with Responsive Spacing */}
                <div className="p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 bg-[#FAF9F6]">
                  {/* Executive Overview */}
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#64748B] font-semibold">
                      Executive Overview & Mandate
                    </h4>
                    <p className="font-sans text-sm sm:text-base lg:text-lg text-[#071731] leading-relaxed font-normal">
                      {activeItem.fullDescription || activeItem.summary || activeItem.description}
                    </p>
                  </div>

                  {/* Operational Deliverables / Practice Focus */}
                  {activeItem.deliverables && activeItem.deliverables.length > 0 && (
                    <div className="space-y-2.5 sm:space-y-3">
                      <h4 className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#64748B] font-semibold">
                        Core Capabilities & Operational Scope
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {activeItem.deliverables.map((itemText, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 bg-white rounded-lg border border-[#E2E8F0] shadow-2xs"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#071731] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </span>
                            <span className="font-sans text-xs sm:text-sm text-[#334155] font-medium leading-snug">
                              {itemText}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Verified Metrics / Credentials */}
                  {activeItem.metrics && activeItem.metrics.length > 0 && (
                    <div className="space-y-2.5 sm:space-y-3">
                      <h4 className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#64748B] font-semibold">
                        Institutional Track Record
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                        {activeItem.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="p-3 sm:p-4 bg-white rounded-lg border border-[#E2E8F0] shadow-2xs space-y-0.5 sm:space-y-1"
                          >
                            <div className="text-[10px] sm:text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                              {metric.label}
                            </div>
                            <div className="text-sm sm:text-base lg:text-lg font-heading font-bold text-[#071731] truncate">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Official Action Bar (Touch-friendly stacked on mobile) */}
                  <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#E2E8F0] pb-2 sm:pb-0">
                    <div className="text-[11px] sm:text-xs font-mono text-[#64748B] text-center sm:text-left">
                      PT Tricatha Sempiternal Asia · Operating Division
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-[#64748B] hover:text-[#071731] active:bg-slate-200/60 transition-colors cursor-pointer min-h-[44px] flex items-center justify-center touch-manipulation"
                      >
                        Close
                      </button>

                      <button
                        type="button"
                        onClick={() => handleModalCta(activeItem.route)}
                        className="w-full sm:w-auto btn-editorial-red text-xs py-3.5 sm:py-3 px-6 cursor-pointer inline-flex items-center justify-center gap-2 shadow-xs min-h-[48px] touch-manipulation"
                      >
                        <span>Explore Dedicated Division</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
