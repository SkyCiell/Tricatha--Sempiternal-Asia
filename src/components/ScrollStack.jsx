import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ScrollStackItem({ project, index, total, onClick }) {
  const topOffset = 100 + index * 24;

  return (
    <motion.div
      style={{ top: `${topOffset}px` }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onClick && onClick(project)}
      className="sticky w-full bg-[#071A2B] border border-white/15 rounded-3xl overflow-hidden shadow-2xl cursor-pointer group transition-all duration-300 hover:border-[#42D3A5] mb-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[320px] sm:min-h-[360px]">
        {/* Left Column: Visual Image Accent */}
        <div className="lg:col-span-6 relative overflow-hidden h-56 sm:h-64 lg:h-full min-h-[220px]">
          <img
            src={project.image}
            alt={project.name || project.title}
            className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#071A2B]" />
        </div>

        {/* Right Column: Project Info & Typography */}
        <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          {/* Category & Year */}
          <div className="flex items-center justify-between font-mono text-xs text-slate-400">
            <span className="text-[#42D3A5] uppercase tracking-widest font-semibold">
              {project.category}
            </span>
            <span className="font-mono text-slate-400">{project.year}</span>
          </div>

          {/* Project Headline */}
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F4F6F2] group-hover:text-[#42D3A5] transition-colors uppercase tracking-tight leading-tight mb-3">
              {project.name || project.title}
            </h3>
            <p className="text-slate-300 font-mono text-xs sm:text-sm leading-relaxed line-clamp-2">
              {project.shortDesc || project.description}
            </p>
          </div>

          {/* Bottom Action / Impact */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
            <div className="min-w-0 pr-2">
              <span className="text-slate-400 uppercase text-[10px] block mb-0.5">IMPACT</span>
              <span className="text-[#155EEF] font-bold uppercase truncate block">
                {project.impact}
              </span>
            </div>

            <button className="flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wider text-[#F4F6F2] group-hover:text-[#42D3A5] transition-colors shrink-0">
              <span className="hidden xs:inline">EXPLORE CASE STUDY</span>
              <ArrowUpRight className="w-4 h-4 text-[#42D3A5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ScrollStack({ children, className = "" }) {
  return (
    <div className={`relative w-full space-y-6 ${className}`}>
      {children}
    </div>
  );
}
