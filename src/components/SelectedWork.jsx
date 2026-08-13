import React, { useState } from "react";
import { motion } from "framer-motion";
import { editorialProjects } from "../data/tsaData";
import AccordionGallery from "./AccordionGallery";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight } from "lucide-react";

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="work" className="py-28 bg-[#071A2B] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F4F6F2] tracking-tight uppercase">
              SELECTED <span className="text-[#42D3A5]">WORKS.</span>
            </h2>
          </div>
          <div className="max-w-md text-slate-300 text-sm font-mono leading-relaxed border-l-2 border-[#155EEF] pl-4">
            Interactive media gallery powered by GSAP. Hover or tap to expand project initiatives.
          </div>
        </div>

        {/* Core Focal Point: React Bits AccordionGallery (GSAP Powered) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <AccordionGallery
            items={editorialProjects}
            onSelectProject={(proj) => setActiveProject(proj)}
          />
        </motion.div>

        {/* Secondary Editorial Showcase Grid */}
        <div className="space-y-12">
          {editorialProjects.map((project, idx) => (
            <motion.div
              key={project.name || project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer border-b border-white/10 pb-8"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="text-xs font-mono text-[#42D3A5] uppercase tracking-widest mb-1.5 font-semibold">
                    {project.category}
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F4F6F2] uppercase tracking-tight group-hover:text-[#42D3A5] transition-colors leading-tight">
                    {project.name || project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                  <div className="font-mono text-xs text-slate-300 uppercase tracking-widest hidden sm:block">
                    MEASURED IMPACT: <span className="text-[#155EEF] font-bold">{project.impact}</span>
                  </div>
                  <button className="flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-[#F4F6F2] group-hover:text-[#42D3A5] transition-colors cursor-pointer">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight className="w-5 h-5 text-[#42D3A5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
