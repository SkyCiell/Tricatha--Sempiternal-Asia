import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { featuredProjects } from "../data/tsaData";
import CaseStudyModal from "./CaseStudyModal";

export default function FeaturedProjectsSection({ navigateTo, onOpenWorkModal }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const leadProject = featuredProjects[0];
  const secondaryProjects = featuredProjects.slice(1, 5);

  return (
    <section id="projects" className="py-10 sm:py-14 bg-[#071731] text-white border-b border-white/10">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">

        {/* Section Header - Refined & Proportional */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5 sm:pb-6 border-b border-white/10"
        >
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#C8102E] uppercase font-semibold tracking-wider">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>ACCREDITED PRODUCTIONS · VERIFIED CASE RECORDS</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Selected Event Records &amp; <br className="hidden sm:inline" />
              <span className="font-editorial italic font-normal text-slate-200">
                Event Highlights.
              </span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
            Multi-hall trade exhibitions, corporate assemblies, and grand-scale productions delivered across Southeast Asia with sovereign protocol rigor.
          </p>
        </motion.div>

        {/* 1. Lead Flagship Case Showcase (AI Global EXPO 2026 - Compact Two-Column Feature Card) */}
        {leadProject && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="pt-5 sm:pt-6"
          >
            <div
              onClick={() => setSelectedProject(leadProject)}
              className="group bg-[#0A1F44] rounded-lg border border-white/12 hover:border-white/25 transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-md"
            >
              {/* Left Column: Visual Frame (7 cols) */}
              <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[320px] overflow-hidden bg-[#050F22]">
                <img
                  src={leadProject.image}
                  alt={leadProject.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 max-h-[360px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Status Badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2 font-mono text-[10px]">
                  <span className="px-2.5 py-1 bg-[#C8102E] text-white font-semibold uppercase tracking-wider rounded">
                    FLAGSHIP EXPO
                  </span>
                  <span className="px-2.5 py-1 bg-[#071731]/85 backdrop-blur-xs text-slate-200 border border-white/15 rounded">
                    {leadProject.category}
                  </span>
                </div>

                {/* Location & Year Badge */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>{leadProject.location}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{leadProject.year}</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Information Panel (5 cols) */}
              <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#C8102E] font-semibold tracking-wider uppercase text-[11px]">
                      {leadProject.year} Turnkey Mandate
                    </span>
                    <span className="text-slate-400 text-[11px]">ICE BSD City</span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-slate-100 transition-colors">
                    {leadProject.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal line-clamp-3">
                    {leadProject.shortDesc}
                  </p>
                </div>

                {/* Client-Look Micro-Specs Grid */}
                <div className="grid grid-cols-2 gap-2.5 p-3 bg-[#071731]/80 rounded border border-white/8 font-mono text-xs">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">PROJECT SCALE</div>
                    <div className="text-white font-semibold text-xs mt-0.5 truncate">
                      180+ Enterprise Pavilions
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">ATTENDANCE</div>
                    <div className="text-[#FFFFFF] font-semibold text-xs mt-0.5 truncate">
                      24,000+ Delegates
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(leadProject);
                    }}
                    className="btn-editorial-red text-xs py-2 px-4 inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Event Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-xs font-mono text-slate-400">
                    Protocol Cleared
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. Secondary Curated Case Records (4-Column Clean Client-Look Grid) */}
        <div className="pt-5 sm:pt-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/8 mb-4">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
              Curated Highlights Archive (4 Key Summits)
            </span>
            <span className="font-mono text-xs text-slate-400 hidden sm:inline">
              SELECT RECORD TO INSPECT
            </span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {secondaryProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                onClick={() => setSelectedProject(project)}
                className="group bg-[#0A1F44] rounded-lg border border-white/10 hover:border-white/25 hover:bg-[#0c2450] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm"
              >
                {/* Thumbnail Frame */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#050F22]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-80 pointer-events-none" />

                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 bg-[#071731]/90 backdrop-blur-xs text-[10px] font-mono text-slate-200 border border-white/15 rounded">
                        {project.year}
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-3 right-3 text-[10px] font-mono text-slate-300 truncate">
                      {project.location.split(",")[0]}
                    </div>
                  </div>

                  {/* Information Body */}
                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#C8102E] block truncate">
                      {project.category}
                    </span>
                    <h4 className="font-heading text-sm sm:text-base font-bold text-white tracking-tight leading-snug group-hover:text-slate-100 transition-colors line-clamp-2">
                      {project.name}
                    </h4>

                    {/* Compact Impact Pill */}
                    <div className="pt-1.5">
                      <div className="px-2.5 py-1.5 bg-[#071731] rounded border border-white/6 font-mono text-[11px] text-slate-300 truncate">
                        <span className="text-[#FFFFFF] font-semibold">{project.impact.split("·")[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="px-4 py-2.5 bg-[#081b3b] border-t border-white/8 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  <span className="text-[11px] uppercase tracking-wider text-slate-300 font-medium">
                    Inspect Dossier
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8102E] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Action Button to Full Events Archive */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="pt-7 sm:pt-8 flex justify-center"
        >
          <button
            onClick={() => (navigateTo ? navigateTo("/events") : null)}
            className="btn-editorial-outline text-xs sm:text-sm py-2.5 px-6 text-white border-white/20 hover:bg-white/10 hover:border-white transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>Explore All 16 Events in Archive</span>
            <ArrowRight className="w-4 h-4 text-[#C8102E]" />
          </button>
        </motion.div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onWorkTogether={onOpenWorkModal}
        />
      )}
    </section>
  );
}
