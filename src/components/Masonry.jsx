import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

  // Responsive Grid container: proporsi rapi seragam tanpa card persegi panjang lebar (col-span-2)
  const gridContainerClass =
    columns === 4
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 auto-rows-[340px] sm:auto-rows-[380px] lg:auto-rows-[400px]"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 auto-rows-[340px] sm:auto-rows-[380px] lg:auto-rows-[400px]";

  return (
    <div className={`w-full ${gridContainerClass}`}>
      {items.map((item, index) => {
        return (
          <motion.div
            key={item.id || item.slug || index}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.5,
              delay: Math.min(index * 0.05, 0.3),
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -4 }}
            className="group relative w-full h-full cursor-pointer select-none col-span-1"
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
            <div className="relative w-full h-full overflow-hidden rounded-[4px] bg-[#071731] border border-white/10 group-hover:border-[#C8102E]/60 shadow-md group-hover:shadow-2xl transition-all duration-300 flex flex-col justify-end">
              {/* Native Image with dark-to-bright illumination on hover and smooth zoom */}
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
                className="absolute inset-0 w-full h-full object-cover brightness-[0.70] contrast-[1.05] group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500 ease-out group-hover:scale-105 pointer-events-none"
              />

              {/* Ambient Dark Scrim: Aktif secara default (gelap), memudar saat di-hover (terang) */}
              <div className="absolute inset-0 bg-[#071731]/40 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

              {/* Permanent directional gradient for guaranteed text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/95 via-[#071731]/45 to-transparent pointer-events-none" />

              {/* Content metadata */}
              <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end pointer-events-none">
                <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[11px]">
                  <span className="text-[#C8102E] bg-[#C8102E]/10 border border-[#C8102E]/30 px-2.5 py-0.5 rounded-xs uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                  <span className="text-slate-300 font-medium">
                    {item.year}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-white text-base sm:text-lg lg:text-xl leading-snug tracking-tight mb-1.5 drop-shadow-sm">
                  {item.title}
                </h3>

                {/* Extra Metadata Revealed Smoothly on Hover */}
                <div className="space-y-1.5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {(item.location || item.venue) && (
                    <div className="text-xs text-slate-300 font-sans truncate">
                      {(item.location || item.venue).split(",")[0]}
                    </div>
                  )}

                  <div className="font-mono text-[10px] text-white/90 uppercase tracking-widest flex items-center gap-1.5 pt-0.5">
                    <span className="text-[#C8102E] font-semibold">Inspect Record</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
