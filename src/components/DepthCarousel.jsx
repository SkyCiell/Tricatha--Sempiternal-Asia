import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export default function DepthCarousel({
  items = [],
  onCardClick,
  depth = 260,
  spread = 120,
  tilt = 10,
  tiltDirection = "right",
  perspective = 1600,
  visibleCards = 4,
  falloff = 0.15,
  blur = 2,
  autoplay = false,
  loop = true,
  cardWidth = 420,
  cardHeight = 540,
  radius = 20,
  duration = 700,
  ease = "power3.out",
  showControls = true,
  showIndicators = true,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);

  const totalItems = items.length;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsiveWidth =
    windowWidth < 640
      ? Math.min(310, windowWidth - 48)
      : windowWidth < 1024
      ? 350
      : cardWidth;

  const responsiveHeight =
    windowWidth < 640
      ? 420
      : windowWidth < 1024
      ? 460
      : cardHeight;

  const responsiveSpread =
    windowWidth < 640 ? 40 : windowWidth < 1024 ? 75 : spread;

  const handleNext = () => {
    if (!totalItems) return;
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    if (!totalItems) return;
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    if (!totalItems) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      let offset = index - activeIndex;
      if (loop) {
        if (offset > totalItems / 2) offset -= totalItems;
        if (offset < -totalItems / 2) offset += totalItems;
      }

      const absOffset = Math.abs(offset);
      const isVisible = absOffset <= visibleCards;

      if (!isVisible) {
        gsap.to(card, {
          opacity: 0,
          scale: 0.7,
          pointerEvents: "none",
          duration: duration / 1000,
          ease
        });
        return;
      }

      const tiltAngle = tiltDirection === "right" ? tilt * offset : -tilt * offset;
      const xPos = offset * responsiveSpread;
      const zPos = -absOffset * depth;
      const cardScale = Math.max(0.8, 1 - absOffset * falloff);
      const cardBlur = absOffset === 0 ? 0 : blur * Math.min(absOffset, 2);
      const cardOpacity = Math.max(0.4, 1 - absOffset * 0.2);

      gsap.to(card, {
        x: xPos,
        z: zPos,
        rotateY: tiltAngle,
        scale: cardScale,
        opacity: cardOpacity,
        filter: `blur(${cardBlur}px)`,
        zIndex: 100 - absOffset * 10,
        pointerEvents: "auto",
        duration: duration / 1000,
        ease,
        overwrite: "auto"
      });
    });
  }, [activeIndex, totalItems, depth, responsiveSpread, tilt, tiltDirection, visibleCards, falloff, blur, loop, duration, ease]);

  const handlePointerDown = (e) => {
    isDraggingRef.current = false;
    startXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handlePointerMove = (e) => {
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    if (Math.abs(currentX - startXRef.current) > 8) {
      isDraggingRef.current = true;
    }
  };

  const handlePointerUp = (e, item, index) => {
    const currentX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
    const diff = currentX - startXRef.current;

    if (isDraggingRef.current) {
      if (diff < -40) handleNext();
      else if (diff > 40) handlePrev();
    } else {
      if (index !== activeIndex) {
        setActiveIndex(index);
      } else {
        if (onCardClick) onCardClick(item);
      }
    }
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full py-12 flex flex-col items-center justify-center overflow-hidden bg-[#071A2B]"
      style={{ perspective: `${perspective}px` }}
    >
      {/* 3D Stage Container */}
      <div
        className="relative flex items-center justify-center w-full"
        style={{
          height: `${responsiveHeight + 80}px`,
          transformStyle: "preserve-3d"
        }}
      >
        {items.map((item, index) => {
          return (
            <div
              key={item.id || item.name || index}
              ref={(el) => (cardsRef.current[index] = el)}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={(e) => handlePointerUp(e, item, index)}
              className="absolute cursor-pointer border border-white/15 bg-[#0B2238] shadow-2xl transition-shadow duration-300 overflow-hidden select-none group"
              style={{
                width: `${responsiveWidth}px`,
                height: `${responsiveHeight}px`,
                borderRadius: `${radius}px`,
                transformStyle: "preserve-3d"
              }}
            >
              {/* Image Banner */}
              <div className="relative w-full h-3/5 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name || item.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2238] via-[#0B2238]/30 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-6 h-2/5 flex flex-col justify-between bg-[#0B2238] text-white">
                <div>
                  <div className="text-xs font-mono text-[#42D3A5] uppercase tracking-wider mb-1.5 font-semibold">
                    {item.category}
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight line-clamp-2 text-white group-hover:text-[#42D3A5] transition-colors leading-snug">
                    {item.name || item.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-3.5 border-t border-white/10 font-mono text-xs">
                  <span className="text-[#155EEF] font-bold uppercase truncate max-w-[65%]">
                    {item.impact}
                  </span>
                  <span className="flex items-center gap-1.5 text-[#42D3A5] font-bold uppercase tracking-wider shrink-0">
                    <span>EXPLORE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls & Indicators */}
      <div className="flex items-center gap-6 mt-8 z-30">
        {showControls && (
          <button
            onClick={handlePrev}
            className="p-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all cursor-pointer shadow-lg"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-6 h-6 text-[#42D3A5]" />
          </button>
        )}

        {showIndicators && (
          <div className="flex items-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-9 bg-[#42D3A5]"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {showControls && (
          <button
            onClick={handleNext}
            className="p-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all cursor-pointer shadow-lg"
            aria-label="Next Project"
          >
            <ChevronRight className="w-6 h-6 text-[#42D3A5]" />
          </button>
        )}
      </div>
    </div>
  );
}
