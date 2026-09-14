import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { editorialProjects } from "../data/tsaData";
import ProjectModal from "./ProjectModal";

export default function SelectedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    "ALL",
    "Spatial Scenography",
    "Diplomatic Protocol",
    "Digital Governance",
    "Strategic Media"
  ];

  const filteredProjects = activeCategory === "ALL"
    ? editorialProjects
    : editorialProjects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#071A33] text-white border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-white/10 gap-6">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
              PORTFOLIO &amp; <br />
              <span className="text-[#C62828]">CASE ARCHIVES.</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-[#CBD5E1] leading-relaxed">
            Click any case study below to open the complete mandate dossier, including stakeholder briefs, spatial specifications, and verified outcomes.
          </p>
        </div>

        {/* Category Filter Tabs (MAIN EO Style) */}
        <div className="pt-8 flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#C62828] text-white shadow-lg"
                  : "bg-[#0B1F3A] text-[#94A3B8] hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Large Editorial Portfolio Grid in Dark Navy */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-[#0B1F3A] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-end aspect-[4/3] border border-white/15"
            >
              {/* Background Image with Zoom on Hover */}
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 opacity-80"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Top Corner Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 bg-[#071A33]/90 backdrop-blur-sm border border-white/20 text-white font-mono text-[10px] uppercase tracking-wider rounded-md">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-[#C62828] text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-md">
                  {project.year}
                </span>
              </div>

              {/* Bottom Information Card */}
              <div className="relative z-10 p-6 space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-[11px] font-mono text-[#CBD5E1] uppercase tracking-wider">
                  {project.client}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#CBD5E1] transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs text-[#CBD5E1] line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.shortDesc}
                </p>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#C62828] font-bold">{project.impact}</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-[#C62828] text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Bottom Edge Red Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C62828] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
