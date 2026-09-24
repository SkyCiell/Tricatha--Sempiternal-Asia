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
    <section id="projects" className="py-20 sm:py-28 bg-[#071731] text-white border-b border-white/10">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-semibold text-[#C8102E] uppercase tracking-wider block">
              VERIFIED MANDATE ARCHIVE & FIELD CASE STUDIES
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Selected Event Records &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Field Case Archives.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
            Multi-hall trade exhibitions, sovereign ministerial plenaries, and audited corporate assemblies delivered across Southeast Asia.
          </p>
        </motion.div>

        {/* 1. Lead Flagship Case Showcase */}
        {leadProject && (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="pt-12"
          >
            <div
              onClick={() => setSelectedProject(leadProject)}
              className="group bg-[#0A1F44] rounded border border-white/12 overflow-hidden hover:border-white/25 transition-colors cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Visual Frame (7 cols) */}
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[340px] sm:min-h-[440px] overflow-hidden bg-[#050F22]">
                <img
                  src={leadProject.image}
                  alt={leadProject.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-80 pointer-events-none" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#C8102E] text-white font-mono text-[10px] font-semibold uppercase tracking-wider rounded">
                    FLAGSHIP EXHIBITION MANDATE
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>{leadProject.location}</span>
                  <span>Year: {leadProject.year}</span>
                </div>
              </div>

              {/* Information Column (5 cols) */}
              <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="font-mono text-xs font-semibold text-[#C8102E] uppercase tracking-wider">
                    {leadProject.category}
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-slate-100 transition-colors">
                    {leadProject.name}
                  </h3>

                  <p className="font-sans text-sm text-slate-300 leading-relaxed font-normal">
                    {leadProject.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="font-mono text-[11px] text-slate-400 uppercase">ACCREDITED SCOPE:</div>
                    <p className="font-sans text-xs text-slate-200 leading-snug">
                      {leadProject.scope}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="p-4 bg-[#0E2552] rounded border border-white/8 font-mono text-xs space-y-1">
                    <span className="text-slate-400 text-[10px] uppercase block">VERIFIED EVENT TELEMETRY</span>
                    <span className="text-[#C8102E] font-bold text-sm block">{leadProject.impact}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="btn-editorial-red text-xs">
                      Examine Complete Case Dossier
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10"
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
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-[#071731]/90 font-mono text-[10px] text-white rounded border border-white/10 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <h4 className="font-heading font-bold text-xl text-white group-hover:text-slate-100 transition-colors leading-snug">
                    {project.name}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 space-y-4">
                <div className="p-3 bg-[#0E2552] rounded border border-white/6 font-mono text-xs">
                  <span className="text-slate-400 text-[10px] uppercase block mb-0.5">EVENT OUTCOME:</span>
                  <span className="text-[#C8102E] font-semibold">{project.impact}</span>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="text-white group-hover:text-[#C8102E] transition-colors font-semibold uppercase tracking-wider">
                    View Case Dossier
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
          className="pt-12 flex justify-center"
        >
          <button
            onClick={() => (navigateTo ? navigateTo("/events") : null)}
            className="btn-editorial-outline text-white border-white/20 hover:bg-white/10 hover:border-white transition-colors cursor-pointer"
          >
            <span>Explore Complete Events &amp; Plenary Archive</span>
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
