import React, { useState, useEffect } from "react";

export default function HudMarginalia() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.round((window.scrollY / totalScroll) * 100));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 select-none overflow-hidden hidden md:block">
      {/* Top Right: Architectural Contact Note */}
      <div className="absolute top-24 right-8 lg:right-12 pointer-events-auto">
        <a
          href="mailto:partnership@tricatha.com"
          className="font-architect text-[20px] text-[#0A1F44] hover:text-[#C8102E] transition-colors -rotate-3 inline-block"
        >
          partnership@tricatha.com
        </a>
      </div>



      {/* Top Fixed Scroll Progress Indicator (Architectural Line) */}
      <div className="absolute top-0 left-0 h-[2px] bg-[#C8102E] transition-all duration-75 z-40" style={{ width: `${scrollProgress}%` }} />

      {/* Right Edge: Architectural Drafting Metric Ruler & Elevation Tracker */}
      <div className="absolute right-3 top-1/3 -translate-y-1/2 flex items-center gap-1.5 font-mono text-[9px] text-[#5B6B84] z-20 pointer-events-none">
        <div className="flex flex-col items-end gap-3 select-none">
          <span className="tabular-nums">{(scrollProgress * 0.8).toFixed(1)}m</span>
          <div className="w-3 h-px bg-[#0A1F44]/20" />
          <div className="w-1.5 h-px bg-[#0A1F44]/15" />
          <div className="w-1.5 h-px bg-[#0A1F44]/15" />
          <div className="w-3 h-px bg-[#0A1F44]/20" />
          <div className="w-1.5 h-px bg-[#0A1F44]/15" />
          <div className="w-1.5 h-px bg-[#0A1F44]/15" />
          <div className="w-4 h-[2px] bg-[#C8102E]" />
          <div className="w-1.5 h-px bg-[#0A1F44]/15" />
          <div className="w-1.5 h-px bg-[#0A1F44]/15" />
          <div className="w-3 h-px bg-[#0A1F44]/20" />
        </div>
      </div>

      {/* Bottom Right: Signature Statement Badge */}
      <div className="absolute right-8 lg:right-12 bottom-6 font-display text-[13px] text-[#0A1F44] font-medium tracking-tight items-center gap-2.5 hidden xl:inline-flex bg-[#FFFFFF] px-3.5 py-1.5 rounded-[2px] border border-[#0A1F44]/25 shadow-[2px_2px_0px_rgba(10,31,68,0.06)] pointer-events-auto">
        <span>The sovereign orchestration architecture that thinks with you, not for you.</span>
        <div className="w-5 h-5 rounded-[2px] bg-[#C8102E] flex items-center justify-center text-white">
          <span className="text-xs font-bold leading-none">↗</span>
        </div>
      </div>
    </div>
  );
}
