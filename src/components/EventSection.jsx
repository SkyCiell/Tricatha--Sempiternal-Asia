import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";
import { featuredProjects } from "../data/tsaData";
import CaseStudyModal from "./CaseStudyModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EventSection({ navigateTo, onOpenWorkModal }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const flagshipMediaRef = useRef(null);
  const flagshipTextRef = useRef(null);

  // Key Projects
  const flagship = featuredProjects[0]; // AI Global EXPO 2026
  const asean = featuredProjects[2];    // ASEAN Strategic Diplomacy Plenary
  const energy = featuredProjects[4];   // Energy Transition Expo
  const bankArtha = featuredProjects[5]; // Bank Artha Raya AGM

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Flagship media expands to nearly full viewport width on scroll
      if (flagshipMediaRef.current && sectionRef.current) {
        gsap.fromTo(
          flagshipMediaRef.current,
          { width: "88%", scale: 0.98, borderRadius: "8px" },
          {
            width: "100%",
            scale: 1.04,
            borderRadius: "0px",
            ease: "none",
            scrollTrigger: {
              trigger: flagshipMediaRef.current,
              start: "top center+=150",
              end: "bottom center",
              scrub: 1,
            }
          }
        );
      }

      // 2. Parallax text floating independently from media
      if (flagshipTextRef.current) {
        gsap.fromTo(
          flagshipTextRef.current,
          { y: 50 },
          {
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: flagshipTextRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            }
          }
        );
      }

      // 3. Parallax movement across all major event media frames
      const parallaxImages = sectionRef.current?.querySelectorAll(".event-scroll-media");
      parallaxImages?.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -15, scale: 1.1 },
          {
            yPercent: 15,
            scale: 1.0,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });

      // 4. Independent displacement on event text dossiers
      const textLayers = sectionRef.current?.querySelectorAll(".event-independent-text");
      textLayers?.forEach((txt) => {
        gsap.fromTo(
          txt,
          { y: 40 },
          {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: txt,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleViewArchive = () => {
    if (navigateTo) {
      navigateTo("/events");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="event"
      className="py-24 sm:py-36 bg-[#071731] text-white border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/10">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#C8102E]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8102E] font-semibold">
                Major Events &amp; Sovereign Plenaries
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08]">
              Monumental Trade Expos &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                High-Stakes Sovereign Plenaries.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1 max-w-2xl">
              From multi-hall international trade exhibitions with thousands of registered buyers to high-protocol diplomatic plenaries, TSA designs and orchestrates events that command authority and drive measurable commercial outcomes.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleViewArchive}
              className="btn-editorial-red text-xs py-3.5 px-7 cursor-pointer flex items-center gap-2"
            >
              <span>Explore Complete Event Archive</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 
          SCROLL SEQUENCE:
          1. FLAGSHIP MEDIA (Expands to nearly full viewport width)
          2. ASEAN DIPLOMACY (Cinematic wide with independent floating text)
          3. ENERGY TRANSITION EXPO & BANK ARTHA RAYA AGM (Asymmetric scale transitions)
        */}
        <div className="pt-20 sm:pt-28 space-y-36 sm:space-y-48">

          {/* 1. FLAGSHIP: AI GLOBAL EXPO 2026 (Expanding Full-Width Canvas) */}
          <div className="space-y-8">
            <div className="flex flex-col items-center">
              <div
                ref={flagshipMediaRef}
                onClick={() => setSelectedProject(flagship)}
                className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[380px] sm:min-h-[560px] overflow-hidden bg-[#050F22] cursor-pointer shadow-2xl transition-shadow hover:shadow-[0_20px_60px_rgba(200,16,46,0.2)]"
              >
                <img
                  src={flagship.image}
                  alt={flagship.name}
                  className="event-scroll-media absolute -inset-10 w-[calc(100%+5rem)] h-[calc(100%+5rem)] object-cover will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/90 via-transparent to-black/30" />
                
                {/* Top Corner Identity */}
                <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-white bg-[#071731]/90 px-3.5 py-1.5 rounded border border-white/20">
                    FLAGSHIP SPOTLIGHT · {flagship.year}
                  </span>
                  <span className="font-mono text-xs text-[#C8102E] font-semibold bg-[#071731]/90 px-3 py-1.5 rounded border border-white/10 hidden sm:inline">
                    {flagship.category}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                  <div className="space-y-1">
                    <div className="font-mono text-xs text-slate-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                      <span>{flagship.location}</span>
                    </div>
                    <div className="font-heading text-2xl sm:text-4xl font-bold">
                      {flagship.name}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(flagship);
                    }}
                    className="btn-editorial-red text-xs py-2.5 px-5 self-start sm:self-auto cursor-pointer flex items-center gap-2"
                  >
                    <span>View Case Study Dossier</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Independent Typography Block Below Flagship */}
            <div ref={flagshipTextRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-start">
              <div className="lg:col-span-4">
                <div className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider mb-1">
                  MICE Floor Architecture
                </div>
                <div className="font-heading text-xl font-bold text-white">
                  3 Full Exhibition Halls · Dual Keynote Plenary Stages
                </div>
              </div>
              <div className="lg:col-span-5 font-sans text-sm text-slate-300 leading-relaxed">
                {flagship.shortDesc}
              </div>
              <div className="lg:col-span-3 border-l border-white/15 pl-6 font-mono text-xs space-y-1 text-slate-400">
                <div className="text-white font-semibold">{flagship.impact}</div>
                <div>Turnkey Spatial Delivery</div>
              </div>
            </div>
          </div>

          {/* 2. ASEAN SOVEREIGN STRATEGIC DIPLOMACY PLENARY (Media Left / Independent Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Large Visual Canvas (7 cols) */}
            <div
              onClick={() => setSelectedProject(asean)}
              className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] rounded-lg overflow-hidden bg-[#050F22] cursor-pointer shadow-2xl group"
            >
              <img
                src={asean.image}
                alt={asean.name}
                className="event-scroll-media absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/80 via-transparent to-transparent" />
              
              <div className="absolute top-6 left-6 z-10">
                <span className="font-mono text-xs uppercase tracking-wider text-white bg-[#071731]/90 px-3 py-1 rounded border border-white/15">
                  SOVEREIGN PLENARY · {asean.year}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-1">
                <div className="font-mono text-xs text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>{asean.location}</span>
                </div>
                <div className="font-heading text-xl sm:text-2xl font-bold">
                  {asean.name}
                </div>
              </div>
            </div>

            {/* Independent Floating Typography Dossier (5 cols) */}
            <div className="lg:col-span-5 event-independent-text space-y-6">
              <div>
                <div className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider mb-2">
                  Head-of-State Diplomatic Protocol
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  Multilateral Plenary &amp; Accord Architecture
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {asean.shortDesc}
              </p>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  TSA Protocol Mandate:
                </div>
                <p className="font-sans text-xs text-slate-200 leading-relaxed">
                  {asean.role}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-heading text-xl font-bold text-white">18 Sovereign Delegations</div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Zero Protocol Incidents</div>
                </div>

                <button
                  onClick={() => setSelectedProject(asean)}
                  className="btn-editorial-outline text-xs py-2 px-5 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* 3. SOUTHEAST ASIA CLEAN TECH EXPO & BANK ARTHA RAYA AGM (Media Right & Edge-to-Edge Transitions) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Independent Typography Left (5 cols) */}
            <div className="lg:col-span-5 event-independent-text space-y-6 lg:order-1 order-2">
              <div>
                <div className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider mb-2">
                  {energy.category}
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  {energy.name}
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {energy.shortDesc}
              </p>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  MICE Execution Scope:
                </div>
                <div className="font-sans text-xs text-slate-200 leading-relaxed">
                  {energy.scope}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-heading text-xl font-bold text-white">200+ Global Exhibitors</div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">$320M Investment Pipeline</div>
                </div>

                <button
                  onClick={() => setSelectedProject(energy)}
                  className="btn-editorial-outline text-xs py-2 px-5 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Media Right (7 cols) */}
            <div
              onClick={() => setSelectedProject(energy)}
              className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] rounded-lg overflow-hidden bg-[#050F22] cursor-pointer shadow-2xl lg:order-2 order-1"
            >
              <img
                src={energy.image}
                alt={energy.name}
                className="event-scroll-media absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/80 via-transparent to-transparent" />
              
              <div className="absolute top-6 left-6 z-10">
                <span className="font-mono text-xs uppercase tracking-wider text-white bg-[#071731]/90 px-3 py-1 rounded border border-white/15">
                  INTERNATIONAL EXPO · {energy.year}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-1">
                <div className="font-mono text-xs text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>{energy.location}</span>
                </div>
                <div className="font-heading text-xl sm:text-2xl font-bold">
                  {energy.name}
                </div>
              </div>
            </div>

          </div>

          {/* 4. BANK ARTHA RAYA AGM (Wide Architectural Ballroom Showcase) */}
          <div
            onClick={() => setSelectedProject(bankArtha)}
            className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[380px] sm:min-h-[480px] rounded-lg overflow-hidden bg-[#050F22] cursor-pointer shadow-2xl group"
          >
            <img
              src={bankArtha.image}
              alt={bankArtha.name}
              className="event-scroll-media absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/60 to-transparent" />
            
            <div className="absolute top-6 left-6 z-10">
              <span className="font-mono text-xs uppercase tracking-wider text-white bg-[#071731]/90 px-3 py-1 rounded border border-white/15">
                CORPORATE AGM · {bankArtha.year}
              </span>
            </div>

            <div className="absolute bottom-8 left-8 sm:left-12 max-w-2xl z-10 text-white space-y-3">
              <div className="font-mono text-xs text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>{bankArtha.location}</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight">
                {bankArtha.name}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                {bankArtha.shortDesc}
              </p>

              <div className="pt-2 flex items-center gap-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(bankArtha);
                  }}
                  className="btn-editorial-red text-xs py-2 px-5 cursor-pointer"
                >
                  <span>Inspect AGM Telemetry</span>
                </button>
                <span className="font-mono text-xs text-slate-300">
                  {bankArtha.impact}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenWorkModal={onOpenWorkModal}
        />
      )}
    </section>
  );
}
