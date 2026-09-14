import React, { useState } from "react";
import { motion } from "framer-motion";
import { editorialProjects } from "../data/tsaData";
import { ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-28 bg-[#0B0F17] text-[#F8FAFC] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-[#3B82F6] uppercase tracking-widest mb-2">
              PORTFOLIO & CASE STUDIES
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#F8FAFC]">
              EDITORIAL PROJECTS
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-normal max-w-md">
            High-stakes government advocacy, GovTech software systems, diplomatic assemblies, and broadcast studio productions.
          </p>
        </div>

        {/* Clean Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {editorialProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#111827] border border-slate-800 hover:border-[#3B82F6]/70 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Soft Rounded Corners */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B0F17]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0B0F17]/90 text-[11px] font-mono text-[#3B82F6] font-semibold uppercase tracking-wider rounded-lg border border-slate-800">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Text Info Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="font-mono text-xs text-[#3B82F6] font-semibold uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors uppercase tracking-tight">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-300 font-normal line-clamp-2 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Footer Bar inside Card */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400">
                    {project.impact}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-[#3B82F6] text-slate-300 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
