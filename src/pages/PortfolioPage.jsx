import React, { useState } from "react";
import { ArrowUpRight, Eye, SlidersHorizontal } from "lucide-react";
import { editorialProjects } from "../data/tsaData";
import ProjectModal from "../components/ProjectModal";

export default function PortfolioPage({ navigateTo }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    "ALL",
    "Spatial Scenography",
    "Diplomatic Protocol",
    "Digital Governance",
    "Strategic Media"
  ];

  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  const filteredProjects = activeCategory === "ALL"
    ? editorialProjects
    : editorialProjects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const leadProject = filteredProjects[0];
  const secondaryProjects = filteredProjects.slice(1);

  return (
    <div className="pt-20 bg-[#071731] min-h-screen text-[#F1F5F9] font-sans selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. Page Header - Deep Navy Editorial Banner */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.08]">
                Portfolio &amp; <br />
                <span className="text-slate-300 font-normal">Verified Case Records.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
                Explore documentation of diplomatic summits, inter-agency digital platforms, experiential cultural assemblies, and executive broadcast media executed across Southeast Asia.
              </p>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red shrink-0 self-start lg:self-auto"
            >
              <span>Commission Similar Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. Category Filter Bar (Sticky, Clean, Restrained Deep Navy) */}
      <section className="sticky top-16 sm:top-20 z-30 bg-[#071731]/95 backdrop-blur-md border-b border-white/10 py-3.5">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          <div className="overflow-x-auto scrollbar-none pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 flex-grow">
            <div className="flex items-center gap-2 whitespace-nowrap font-mono text-xs">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded transition-all cursor-pointer border ${
                      isActive
                        ? "bg-[#C8102E] text-white border-[#C8102E] font-semibold shadow-xs"
                        : "bg-[#0A1F44] text-slate-300 border-white/10 hover:border-white/30"
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-400 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>{filteredProjects.length} Verified Case Studies</span>
          </div>
        </div>
      </section>

      {/* 3. Image-Led Editorial Showcase */}
      <section className="py-16 sm:py-24 bg-[#071731] border-b border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 space-y-16 sm:space-y-24">
          
          {/* Lead Hero Project */}
          {leadProject && (
            <div
              onClick={() => setSelectedProject(leadProject)}
              className="group bg-[#0A1F44] rounded border border-white/10 overflow-hidden shadow-lg hover:border-white/25 transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[420px] overflow-hidden bg-[#050F22]">
                <img
                  src={leadProject.image}
                  alt={leadProject.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#C8102E] text-white font-mono text-[10px] font-semibold uppercase tracking-wider rounded">
                    FLAGSHIP MANDATE
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#C8102E] font-medium uppercase tracking-wider">
                      {leadProject.category}
                    </span>
                    <span className="text-slate-400 font-mono">{leadProject.year}</span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-white transition-colors leading-tight">
                    {leadProject.name}
                  </h2>

                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Client: {leadProject.client}
                  </div>

                  <p className="font-sans text-sm text-slate-300 leading-relaxed font-normal">
                    {leadProject.shortDesc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="p-3.5 bg-[#071731] rounded border border-white/10 font-mono text-xs flex items-center justify-between">
                    <span className="text-slate-400 uppercase text-[10px]">VERIFIED IMPACT:</span>
                    <span className="text-[#FFFFFF] font-semibold">{leadProject.impact}</span>
                  </div>

                  <button className="btn-editorial-red w-full flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>View Project Details</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Case Studies Grid */}
          {secondaryProjects.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {secondaryProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-[#0A1F44] rounded border border-white/10 overflow-hidden shadow-xs hover:border-white/25 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="editorial-image-frame aspect-[16/10] overflow-hidden bg-[#050F22]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-[#071731]/90 backdrop-blur-xs font-mono text-[10px] text-white rounded border border-white/10">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 font-mono text-xs text-white/90 font-medium">
                        {project.year}
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-3">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {project.client}
                      </div>
                      <h3 className="font-heading font-semibold text-xl text-white group-hover:text-white transition-colors leading-snug">
                        {project.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0 flex items-center justify-between text-xs font-mono border-t border-white/10 mt-4 pt-4">
                    <span className="text-[#FFFFFF] font-medium">{project.impact}</span>
                    <span className="text-slate-300 font-medium inline-flex items-center gap-1 group-hover:text-white transition-colors">
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. Bottom Mandate Invitation */}
      <section className="py-20 bg-[#050F22]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 text-center space-y-4">
          <h2 className="font-heading text-2xl sm:text-4xl font-medium text-white tracking-tight">
            Commission a Turnkey Project
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Our team evaluates spatial engineering, protocol requirements, and digital infrastructure for prospective state and enterprise summits.
          </p>
          <div className="pt-2">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red inline-flex items-center gap-2"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Dossier Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
