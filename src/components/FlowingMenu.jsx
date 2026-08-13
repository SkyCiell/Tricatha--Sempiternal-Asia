import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function MenuItem({ item, onClick }) {
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    if (!marqueeInnerRef.current) return;

    // Create infinite smooth GSAP loop
    const inner = marqueeInnerRef.current;
    tweenRef.current = gsap.to(inner, {
      xPercent: -50,
      repeat: -1,
      duration: 14,
      ease: "none",
      paused: true
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      tweenRef.current.play();
    }
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
        onComplete: () => {
          if (tweenRef.current) {
            tweenRef.current.pause();
          }
        }
      });
    }
  };

  // Repeated chunk for seamless continuous marquee loop
  const marqueeChunk = (
    <div className="flex items-center gap-8 pr-8 whitespace-nowrap shrink-0">
      <span className="font-heading text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#42D3A5] tracking-tight">
        {item.title}
      </span>
      {item.image && (
        <div className="w-24 sm:w-36 h-12 sm:h-16 rounded-xl overflow-hidden border border-white/20 shrink-0 bg-[#071A2B]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>
      )}
    </div>
  );

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick && onClick(item.title)}
      className="relative overflow-hidden border-b border-white/10 py-7 sm:py-9 cursor-pointer group"
    >
      {/* Default Stationary Title */}
      <div className="px-4 sm:px-8 flex items-center justify-between">
        <h3 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#F4F6F2] group-hover:text-transparent transition-colors duration-300 tracking-tight">
          {item.title}
        </h3>
      </div>

      {/* GSAP Marquee Overlay on Hover */}
      <div
        ref={marqueeRef}
        className="absolute inset-0 pointer-events-none opacity-0 flex items-center bg-[#071A2B] z-10 overflow-hidden"
      >
        <div ref={marqueeInnerRef} className="flex items-center w-max">
          {marqueeChunk}
          {marqueeChunk}
          {marqueeChunk}
          {marqueeChunk}
        </div>
      </div>
    </div>
  );
}

export default function FlowingMenu({ items, onItemClick }) {
  return (
    <div className="w-full border-t border-white/10 divide-y divide-white/10 bg-[#071A2B]">
      {items.map((item) => (
        <MenuItem
          key={item.title}
          item={item}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
}
