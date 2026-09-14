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
    <div className="pt-20 bg-[#FFFFFF] min-h-screen text-[#0A1F44] font-sans selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. Page Header - Deep Navy #0A1F44 Editorial Banner */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>MANDATE ARCHIVE &amp; CASE STUDIES</span>
              </div>

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

      {/* 2. Category Filter Bar (Sticky, Clean, Restrained) */}
      <section className="sticky top-16 sm:top-20 z-30 bg-[#FFFFFF] border-b border-slate-200/80 py-3.5">
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
                        ? "bg-[#C8102E] text-white border-[#A50D25] font-semibold shadow-xs"
                        : "bg-[#FFFFFF] text-[#0A1F44] border-slate-200 hover:border-[#0A1F44]"
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

      {/* 3. Image-Led Editorial Showcase (Asymmetric & Art-Directed) */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF] border-b border-slate-100">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 space-y-16 sm:space-y-24">
          
          {/* Lead Hero Project (Wide Asymmetric Editorial Composition) */}
          {leadProject && (
            <div
              onClick={() => setSelectedProject(leadProject)}
              className="group bg-[#F5F6F8] rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[420px] overflow-hidden bg-slate-900">
                <img
                  src={leadProject.image}
                  alt={leadProject.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-transparent to-transparent pointer-events-none" />
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
                    <span className="text-slate-400">{leadProject.year}</span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#0A1F44] tracking-tight group-hover:text-[#C8102E] transition-colors leading-tight">
                    {leadProject.name}
                  </h2>

                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    Client: {leadProject.client}
                  </div>

                  <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                    {leadProject.shortDesc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="p-3.5 bg-white rounded border border-slate-200/70 font-mono text-xs flex items-center justify-between">
                    <span className="text-slate-400 uppercase text-[10px]">VERIFIED IMPACT:</span>
                    <span className="text-[#C8102E] font-semibold">{leadProject.impact}</span>
                  </div>

                  <button className="btn-editorial-navy w-full flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>Examine Complete Case Dossier</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Case Studies Grid (Asymmetric 2-Column Editorial Spread) */}
          {secondaryProjects.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {secondaryProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-[#FFFFFF] rounded-lg border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="editorial-image-frame aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/75 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-[#0A1F44]/90 backdrop-blur-xs font-mono text-[10px] text-white rounded border border-white/10">
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
                      <h3 className="font-heading font-semibold text-xl text-[#0A1F44] group-hover:text-[#C8102E] transition-colors leading-snug">
                        {project.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0 flex items-center justify-between text-xs font-mono border-t border-slate-100 mt-4 pt-4">
                    <span className="text-[#C8102E] font-medium">{project.impact}</span>
                    <span className="text-[#0A1F44] font-medium inline-flex items-center gap-1 group-hover:text-[#C8102E] transition-colors">
                      <span>View Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. Bottom Mandate Invitation */}
      <section className="py-20 bg-[#F5F6F8]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
            CENTRAL JAKARTA LEDGER
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-medium text-[#0A1F44] tracking-tight">
            Commission a Turnkey Case Mandate
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            Our directors evaluate spatial engineering, protocol requirements, and digital infrastructure for prospective state and enterprise summits.
          </p>
          <div className="pt-2">
            <button
              onClick={handleInquiry}
              className="btn-editorial-navy inline-flex items-center gap-2"
            >
              <span>Request Detailed Case Dossiers</span>
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
