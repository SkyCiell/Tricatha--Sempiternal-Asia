import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import "./Masonry.css";

export default function Masonry({
  items = [],
  columns = 4,
  onItemClick
}) {
  const handleClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    } else if (item.url && item.url !== "#") {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  };

  // Responsive Grid container: clean and natural proportions without forced cropping
  const gridContainerClass =
    columns === 4
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 items-stretch"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch";

  return (
    <div className={`w-full ${gridContainerClass}`}>
      {items.map((item, index) => {
        const venueName = (item.location || item.venue || "").split(",")[0];

        return (
          <motion.div
            key={item.id || item.slug || index}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration: 0.45,
              delay: Math.min(index * 0.05, 0.25),
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -5 }}
            className="group flex flex-col h-full bg-white rounded-md border border-[#E2E8F0] hover:border-[#C8102E]/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer select-none"
            onClick={() => handleClick(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick(item);
              }
            }}
            aria-label={`${item.title} — ${item.category} (${item.year})`}
          >
            {/* 1. Clear & crisp photography without dark text overlays */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 border-b border-[#E2E8F0]/80">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  if (item.fallbackImg && e.currentTarget.src !== item.fallbackImg) {
                    e.currentTarget.src = item.fallbackImg;
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
            </div>

            {/* 2. Title, category & event details neatly below the photo */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
              <div>
                {/* Category Badge & Year */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[#C8102E] bg-[#C8102E]/10 border border-[#C8102E]/25 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-xs uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500 font-medium">
                    {item.year}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-heading font-bold text-[#071731] group-hover:text-[#C8102E] text-base sm:text-lg leading-snug tracking-tight line-clamp-2 transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Location / Venue */}
                {venueName && (
                  <p className="mt-2 text-xs text-slate-500 font-sans flex items-center gap-1.5 line-clamp-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{venueName}</span>
                  </p>
                )}
              </div>

              {/* Action Footer */}
              <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-mono text-[#071731] group-hover:text-[#C8102E] font-semibold uppercase tracking-wider transition-colors duration-200">
                <span>Explore Record</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
