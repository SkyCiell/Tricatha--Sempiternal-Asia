import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ScrollStackItem({ project, index, total, onClick }) {
  const containerRef = useRef(null);
  const topOffset = 100 + index * 26;

  // Track progress of this card relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  // Calculate subtle scaling as cards stack over each other
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        top: `${topOffset}px`,
        scale,
        opacity
      }}
      onClick={() => onClick && onClick(project)}
      className="sticky w-full bg-[#FFFFFF] border border-[#0A1F44]/20 rounded-[4px] overflow-hidden shadow-[6px_6px_0px_rgba(10,31,68,0.08)] cursor-pointer group transition-colors duration-300 hover:border-[#C8102E]/60 mb-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[340px]">
        {/* Left Column: Architectural Blueprint Illustration */}
        <div className="lg:col-span-6 relative overflow-hidden bg-[#F8F9FA] border-b lg:border-b-0 lg:border-r border-[#0A1F44]/15 min-h-[260px] flex items-center justify-center p-4">
          <img
            src={project.image || project.blueprintImage}
            alt={project.name || project.title}
            className="w-full h-full object-contain rounded-[2px] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
          <div className="absolute top-3 left-3 bg-[#FFFFFF] border border-[#0A1F44]/20 px-2 py-0.5 rounded-[2px] font-mono text-[9px] text-[#0A1F44] tracking-wider uppercase shadow-2xs">
            {project.blueprintLabel || "ARCHITECTURAL DRAFT"}
          </div>
          <div className="absolute bottom-3 right-3 bg-[#FFFFFF] border border-[#0A1F44]/20 px-2 py-0.5 rounded-[2px] font-mono text-[9px] text-[#C8102E] tracking-wider uppercase shadow-2xs">
            {project.scale || "SCALE 1:100 METRIC"}
          </div>
        </div>

        {/* Right Column: Mandate Specification & Typography */}
        <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          {/* Category & Year */}
          <div className="flex items-center justify-between font-mono text-xs text-[#5B6B84]">
            <span className="text-[#C8102E] uppercase tracking-widest font-semibold">
              {project.category}
            </span>
            <span className="font-mono text-[#5B6B84]">{project.year || "2024–2026"}</span>
          </div>

          {/* Project Headline */}
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#0A1F44] group-hover:text-[#C8102E] transition-colors tracking-tight leading-tight mb-2.5">
              {project.name || project.title}
            </h3>
            <p className="text-[#5B6B84] text-xs sm:text-sm font-normal leading-relaxed line-clamp-3">
              {project.shortDesc || project.description}
            </p>
          </div>

          {/* Bottom Action / Outcome */}
          <div className="pt-4 border-t border-[#0A1F44]/15 flex items-center justify-between font-mono text-xs">
            <div className="min-w-0 pr-2">
              <span className="text-[#5B6B84] uppercase text-[9px] block mb-0.5 tracking-wider">MANDATE OUTCOME</span>
              <span className="text-[#0A1F44] font-semibold uppercase truncate block">
                {project.impact || "VERIFIED DIPLOMATIC ACCORD"}
              </span>
            </div>

            <button className="btn-tech-red px-4 py-2 text-xs font-semibold uppercase tracking-wider shrink-0">
              <div className="flex items-center gap-1.5">
                <span>View Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ScrollStack({ children, className = "" }) {
  return (
    <div className={`relative w-full pb-12 ${className}`}>
      {children}
    </div>
  );
}
