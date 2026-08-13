import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

export default function AccordionGallery({ items, onSelectProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // GSAP animation on active item change
    itemsRef.current.forEach((el, index) => {
      if (!el) return;
      const isExpanded = index === activeIndex;

      gsap.to(el, {
        flex: isExpanded ? (window.innerWidth < 768 ? 3 : 3.5) : 1,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto"
      });

      const img = el.querySelector(".accordion-img");
      if (img) {
        gsap.to(img, {
          scale: isExpanded ? 1.05 : 1.15,
          filter: isExpanded ? "brightness(1) contrast(1.1)" : "brightness(0.6) contrast(1)",
          duration: 0.6,
          ease: "power3.out"
        });
      }

      const content = el.querySelector(".accordion-content");
      if (content) {
        gsap.to(content, {
          opacity: isExpanded ? 1 : 0,
          y: isExpanded ? 0 : 20,
          pointerEvents: isExpanded ? "auto" : "none",
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[560px] sm:h-[600px] flex flex-col md:flex-row gap-4 overflow-hidden"
    >
      {items.map((item, index) => {
        const isExpanded = index === activeIndex;

        return (
          <div
            key={item.id || item.name}
            ref={(el) => (itemsRef.current[index] = el)}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => {
              setActiveIndex(index);
              if (onSelectProject) onSelectProject(item);
            }}
            className="relative h-full border border-white/15 rounded-3xl overflow-hidden cursor-pointer bg-[#0B2238] transition-all duration-300 group"
            style={{ flex: isExpanded ? 3.5 : 1 }}
          >
            {/* Image Canvas (Layer z-0) */}
            <div className="absolute inset-0 overflow-hidden z-0">
              <img
                src={item.image}
                alt={item.name}
                className="accordion-img w-full h-full object-cover grayscale-0 transition-transform z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/40 to-transparent z-10" />
            </div>

            {/* Top Badge Overlay (Layer z-30: Clean spacing at top) */}
            <div className="absolute top-3 sm:top-6 left-3 sm:left-6 right-3 sm:right-6 flex items-center justify-between z-30 font-mono text-[10px] sm:text-xs text-white pointer-events-none">
              <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#155EEF] font-bold uppercase tracking-widest rounded-full shadow-md truncate max-w-[60%]">
                {item.category}
              </span>
              <span className="font-bold text-[#42D3A5] bg-[#071A2B]/90 px-3 sm:px-4 py-1 sm:py-1.5 border border-white/20 rounded-full shrink-0">
                {item.year}
              </span>
            </div>

            {/* Vertical Label (Shown when collapsed on desktop) */}
            {!isExpanded && (
              <div className="absolute bottom-8 left-6 z-30 hidden md:block">
                <div className="font-heading text-base lg:text-lg font-bold text-white uppercase tracking-widest rotate-[-90deg] origin-left whitespace-nowrap opacity-80 group-hover:text-[#42D3A5] transition-colors">
                  {item.name}
                </div>
              </div>
            )}

            {/* Expanded Content Details (Layer z-40: Clean readable overlay) */}
            <div className="accordion-content absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-10 z-40 flex flex-col justify-end bg-gradient-to-t from-[#071A2B] via-[#071A2B]/95 to-transparent pointer-events-auto">
              <div className="font-mono text-[10px] sm:text-xs text-[#42D3A5] uppercase tracking-widest mb-1">
                FEATURED SHOWCASE
              </div>
              
              <h3 className="font-heading text-xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-2 sm:mb-3">
                {item.name}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm font-mono leading-relaxed line-clamp-2 mb-3 sm:mb-4">
                {item.shortDesc || item.impact}
              </p>

              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10 font-mono text-[10px] sm:text-xs">
                <span className="text-[#2F80FF] font-bold uppercase truncate">
                  IMPACT: {item.impact}
                </span>
                <span className="flex items-center gap-1 text-[#42D3A5] font-bold uppercase tracking-wider shrink-0">
                  <span className="hidden xs:inline">EXPLORE PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
