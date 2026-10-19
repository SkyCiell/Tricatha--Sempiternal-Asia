import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <div className="bg-[#FAF9F6] min-h-screen text-[#071731] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-[#071731]/10">
          
          {/* Left Title & Statement (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#071731] tracking-tight leading-[1.08]">
              Portfolio &amp; <br />
              <span className="font-editorial italic font-normal text-slate-600">
                Verified Case Records.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Explore documentation of diplomatic summits, inter-agency digital platforms, experiential cultural assemblies, and executive broadcast media executed across Southeast Asia.
            </p>
          </div>

          {/* Right Action (4 cols) */}
          <div className="lg:col-span-4 flex items-start lg:items-end justify-start lg:justify-end">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red"
            >
              <span>Commission Similar Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="sticky top-16 sm:top-20 z-30 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#071731]/10 py-3.5">
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
                        ? "bg-[#071731] text-white border-[#071731] font-semibold shadow-xs"
                        : "bg-white text-slate-700 border-[#071731]/10 hover:border-[#071731]/30"
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-500 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>{filteredProjects.length} Verified Case Studies</span>
          </div>
        </div>
      </section>

      {/* 3. Image-Led Editorial Showcase */}
      <section className="py-16 sm:py-24 border-b border-[#071731]/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 space-y-16 sm:space-y-24">
          
          {/* Lead Hero Project (Natural Responsive Editorial Showcase) */}
          {leadProject && (
            <div
              onClick={() => setSelectedProject(leadProject)}
              className="relative w-full rounded-2xl sm:rounded-3xl bg-[#071731] text-white overflow-hidden flex flex-col justify-between select-none cursor-pointer group shadow-2xl border border-white/10"
            >
              {/* Fullscreen Photo Layer */}
              <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <motion.img
                  src={leadProject.image}
                  alt={leadProject.name}
                  initial={{ scale: 1.05, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
                {/* Directional Scrim for Supreme Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/80 via-45% to-[#071731]/40 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/75 via-55% to-transparent pointer-events-none" />
              </div>

              {/* Top Header Over Media */}
              <div className="relative z-10 w-full pt-6 sm:pt-8 px-6 sm:px-10 lg:px-14 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#C8102E] text-white font-mono text-[11px] font-semibold uppercase tracking-wider rounded">
                    FLAGSHIP MANDATE
                  </span>
                  <span className="text-white/30 text-xs">/</span>
                  <span className="text-slate-300 font-mono text-xs uppercase">{leadProject.category}</span>
                </div>

                <div className="hidden sm:block font-mono text-xs text-slate-300">
                  PERIOD: {leadProject.year}
                </div>
              </div>

              {/* Center / Direct Typography Over Media */}
              <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
                <div className="max-w-4xl space-y-4 sm:space-y-6">
                  <div className="text-xs font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                    CLIENT: {leadProject.client}
                  </div>

                  <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
                    {leadProject.name}
                  </h2>

                  <p className="font-sans text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
                    {leadProject.shortDesc}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button className="btn-editorial-red text-xs sm:text-sm py-3 px-6 cursor-pointer inline-flex items-center gap-2 shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>Inspect Project Case Dossier</span>
                    </button>

                    <div className="text-xs font-mono text-slate-300 px-4 py-2.5 rounded bg-white/10 backdrop-blur-md border border-white/15">
                      VERIFIED IMPACT: {leadProject.impact}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Spec Footer Over Media */}
              <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 pb-6 sm:pb-8">
                <div className="flex items-center justify-between pt-4 border-t border-white/15 font-mono text-xs text-slate-300">
                  <span>SINGLE-SOURCE PROTOCOL ACCOUNTABILITY</span>
                  <span>CLICK ANYWHERE TO EXPAND FULL DOSSIER</span>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Case Studies Grid (White Cards on Off-White Canvas) */}
          {secondaryProjects.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {secondaryProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white rounded border border-[#071731]/10 overflow-hidden shadow-xs hover:border-[#071731]/30 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="editorial-image-frame aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/90 backdrop-blur-xs font-mono text-[10px] text-[#071731] font-medium rounded border border-[#071731]/10">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 font-mono text-xs text-white bg-[#071731]/80 backdrop-blur-xs px-2.5 py-0.5 rounded font-medium">
                        {project.year}
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-3">
                      <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                        {project.client}
                      </div>
                      <h3 className="font-heading font-semibold text-xl text-[#071731] group-hover:text-[#C8102E] transition-colors leading-snug">
                        {project.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0 flex items-center justify-between text-xs font-mono border-t border-[#071731]/10 mt-4 pt-4">
                    <span className="text-[#071731] font-semibold">{project.impact}</span>
                    <span className="text-slate-600 font-medium inline-flex items-center gap-1 group-hover:text-[#C8102E] transition-colors">
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

      {/* 4. Bottom Mandate Invitation Panel (Selective Navy Contrast Moment) */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          <div className="bg-[#071731] text-white border border-[#071731] p-8 sm:p-14 rounded-xl shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
                EXECUTIVE SECRETARIAT · JAKARTA
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                Commission a Turnkey Mandate.
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Our protocol directors and spatial engineering teams evaluate feasibility, regulatory compliance, and broadcast infrastructure for prospective state and enterprise summits.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red flex items-center justify-center gap-2"
              >
                <span>Initiate Mandate Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
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
