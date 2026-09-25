import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "../data/tsaData";
import CaseStudyModal from "./CaseStudyModal";

export default function FeaturedProjectsSection({ navigateTo, onOpenWorkModal }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const leadProject = featuredProjects[0];
  const secondaryProjects = featuredProjects.slice(1, 5);

  return (
    <section id="projects" className="py-12 sm:py-16 bg-[#071731] text-white border-b border-white/10">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-6 sm:pb-8 border-b border-white/10"
        >
          <div className="space-y-2.5 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Selected Event Records &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Event Highlights.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
            Multi-hall trade exhibitions, corporate assemblies, and grand-scale productions delivered across Southeast Asia.
          </p>
        </motion.div>

        {/* 1. Lead Flagship Case Showcase */}
        {leadProject && (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="pt-6 sm:pt-7"
          >
            <div
              onClick={() => setSelectedProject(leadProject)}
              className="group bg-[#0A1F44] rounded border border-white/12 overflow-hidden hover:border-white/25 transition-colors cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Visual Frame (7 cols) */}
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[400px] overflow-hidden bg-[#050F22]">
                <img
                  src={leadProject.image}
                  alt={leadProject.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-80 pointer-events-none" />

                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>{leadProject.location}</span>
                  <span>Year: {leadProject.year}</span>
                </div>
              </div>

              {/* Information Column (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-slate-100 transition-colors">
                    {leadProject.name}
                  </h3>

                  <p className="font-sans text-sm text-slate-300 leading-relaxed font-normal">
                    {leadProject.shortDesc}
                  </p>

                  <div className="space-y-1 pt-1.5">
                    <p className="font-sans text-xs text-slate-200 leading-snug">
                      {leadProject.scope}
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 pt-3.5 border-t border-white/10">
                  <div className="p-3.5 bg-[#0E2552] rounded border border-white/8 font-mono text-xs space-y-1">
                    <span className="text-[#C8102E] font-bold text-sm block">{leadProject.impact}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="btn-editorial-red text-xs">
                      View Event Details
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      ICE BSD City
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. Secondary Curated Case Records (2x2 Grid) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-5 sm:pt-6"
        >
          {secondaryProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
              }}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#0A1F44] rounded border border-white/10 overflow-hidden hover:border-white/20 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="editorial-image-frame aspect-[16/10] overflow-hidden bg-[#050F22] relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-80 pointer-events-none" />

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-2.5">
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-slate-100 transition-colors leading-snug">
                    {project.name}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 space-y-3.5">
                <div className="p-3 bg-[#0E2552] rounded border border-white/6 font-mono text-xs">
                  <span className="text-[#C8102E] font-semibold">{project.impact}</span>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="text-white group-hover:text-[#C8102E] transition-colors font-semibold uppercase tracking-wider">
                    View Event Details
                  </span>
                  <span className="text-slate-400">{project.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Button to Full Events Archive */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="pt-8 sm:pt-9 flex justify-center"
        >
          <button
            onClick={() => (navigateTo ? navigateTo("/events") : null)}
            className="btn-editorial-outline text-white border-white/20 hover:bg-white/10 hover:border-white transition-colors cursor-pointer"
          >
            <span>Explore Complete Events Archive</span>
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
