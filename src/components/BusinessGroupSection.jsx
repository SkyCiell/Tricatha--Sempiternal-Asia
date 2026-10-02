import React, { useRef, useEffect } from "react";
import { ArrowUpRight, ArrowRight, ShieldCheck, Video, Megaphone, Scale } from "lucide-react";
import { businessGroupData } from "../data/tsaData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import plenaryDraft from "../assets/illustrations/plenary-draft.jpg";
import protocolPavilion from "../assets/illustrations/protocol-pavilion.jpg";
import scenographyTruss from "../assets/illustrations/scenography-truss.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function BusinessGroupSection({ navigateTo }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax choreography on all business group media elements
      const mediaContainers = containerRef.current?.querySelectorAll(".editorial-media-container");
      mediaContainers?.forEach((container) => {
        const media = container.querySelector(".editorial-media");
        if (!media) return;

        gsap.fromTo(
          media,
          { yPercent: -12, scale: 1.08 },
          {
            yPercent: 12,
            scale: 1.0,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });

      // Parallax on text blocks to move at different speed from media
      const textBlocks = containerRef.current?.querySelectorAll(".editorial-text-block");
      textBlocks?.forEach((block) => {
        gsap.fromTo(
          block,
          { y: 30 },
          {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: block,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleConsult = () => {
    if (navigateTo) {
      navigateTo("/contact");
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFullDossier = () => {
    if (navigateTo) {
      navigateTo("/business-group");
    }
  };

  // Find individual entities from data
  const enchante = businessGroupData.find((b) => b.id === "enchante") || businessGroupData[0];
  const dnaStudio = businessGroupData.find((b) => b.id === "dna-studio") || businessGroupData[1];
  const gwi = businessGroupData.find((b) => b.id === "gwi") || businessGroupData[2];
  const goadv = businessGroupData.find((b) => b.id === "goadv") || businessGroupData[3];

  return (
    <section
      ref={containerRef}
      id="business-group"
      className="bg-[#F8FAFC] text-[#071731] py-24 sm:py-32 border-b border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 border-b border-[#E2E8F0]">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#C8102E]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C8102E] font-semibold">
                Autonomous Practices · Unified Command
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#071731] tracking-tight leading-[1.08]">
              Four Specialized Entities. <br />
              <span className="font-editorial italic font-normal text-[#1E3A8A]">
                One Unified Strategic Organization.
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1 max-w-2xl">
              PT Tricatha Sempiternal Asia operates four autonomous business practices spanning sovereign diplomatic protocol, 4K multi-camera broadcast production, mass civic activations, and cross-ministry regulatory compliance.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
            <button
              onClick={handleFullDossier}
              className="text-[#071731] hover:text-[#C8102E] transition-colors cursor-pointer inline-flex items-center gap-2 group font-semibold py-2"
            >
              <span>Explore Business Group Dossier</span>
              <ArrowUpRight className="w-4 h-4 text-[#C8102E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 
          CHOREOGRAPHED ALTERNATING RHYTHM:
          1. MEDIA LEFT -> 2. MEDIA RIGHT -> 3. FULL-WIDTH MEDIA -> 4. SPLIT COMPOSITION
        */}
        <div className="pt-20 sm:pt-28 space-y-32 sm:space-y-44">

          {/* 1. ENCHANTÉ: MEDIA LEFT (Portrait / Large Vertical Frame) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Media (7 cols) */}
            <div className="lg:col-span-7 editorial-media-container relative aspect-[4/3] sm:aspect-[16/11] rounded-lg overflow-hidden bg-[#071731] shadow-2xl">
              <img
                src={protocolPavilion}
                alt={enchante.fullName}
                className="editorial-media absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/80 via-transparent to-black/20" />
              <div className="absolute top-6 left-6 z-10">
                <span className="font-mono text-xs uppercase tracking-wider text-white bg-[#071731]/90 px-3 py-1 rounded border border-white/15">
                  ENCHANTE · HAUTE PROTOCOL
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <div className="font-mono text-xs text-slate-300">
                  The Ritz-Carlton Jakarta &amp; Diplomatic Enclosures
                </div>
                <div className="font-heading text-lg font-bold text-white">
                  Head-of-State Precedence &amp; Sovereign Dining Protocol
                </div>
              </div>
            </div>

            {/* Right Typography (5 cols) */}
            <div className="lg:col-span-5 editorial-text-block space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#C8102E] font-semibold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
                  <span>{enchante.name}</span>
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#071731] tracking-tight leading-tight">
                  {enchante.tagline}
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {enchante.description}
              </p>

              <div className="border-t border-[#E2E8F0] pt-4 space-y-2">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Sovereign Capabilities:
                </div>
                <div className="space-y-1.5">
                  {enchante.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-[#C8102E] font-bold shrink-0 mt-0.5">—</span>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <button
                  onClick={handleConsult}
                  className="btn-editorial-navy text-xs py-2.5 px-6 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Consult Protocol Directorate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* 2. DNA STUDIO: MEDIA RIGHT (Video / Broadcast Suite) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Typography (5 cols) */}
            <div className="lg:col-span-5 editorial-text-block space-y-6 lg:order-1 order-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#C8102E] font-semibold uppercase tracking-wider mb-2">
                  <Video className="w-4 h-4 text-[#C8102E]" />
                  <span>{dnaStudio.name}</span>
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#071731] tracking-tight leading-tight">
                  {dnaStudio.tagline}
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {dnaStudio.description}
              </p>

              <div className="border-t border-[#E2E8F0] pt-4 space-y-2">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Broadcast Suite Architecture:
                </div>
                <div className="space-y-1.5">
                  {dnaStudio.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-[#C8102E] font-bold shrink-0 mt-0.5">—</span>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div>
                  <div className="font-heading text-2xl font-bold text-[#071731]">
                    2.4M+
                  </div>
                  <div className="font-mono text-[10px] text-slate-500 uppercase">
                    Syndicated Broadcast Viewers
                  </div>
                </div>

                <button
                  onClick={handleConsult}
                  className="btn-editorial-navy text-xs py-2.5 px-6 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Book Broadcast Suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Media with authentic video loop (7 cols) */}
            <div className="lg:col-span-7 editorial-media-container relative aspect-[4/3] sm:aspect-[16/11] rounded-lg overflow-hidden bg-[#071731] shadow-2xl lg:order-2 order-1">
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/hero-bg-720p.mp4"
                className="editorial-media absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/80 via-transparent to-black/20" />
              <div className="absolute top-6 left-6 z-10">
                <span className="font-mono text-xs uppercase tracking-wider text-white bg-[#071731]/90 px-3 py-1 rounded border border-white/15">
                  DNA STUDIO · 4K CINEMA &amp; TELEPRESENCE
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <div className="font-mono text-xs text-slate-300">
                  The City Tower 12th Floor · Central Jakarta
                </div>
                <div className="font-heading text-lg font-bold text-white">
                  Turnkey Multi-Camera Telecast &amp; Leader Dialogue Soundstage
                </div>
              </div>
            </div>

          </div>

          {/* 3. GWI: FULL-WIDTH MEDIA (Monumental Civic Panorama) */}
          <div className="editorial-media-container relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[440px] sm:min-h-[540px] rounded-lg overflow-hidden bg-[#071731] shadow-2xl">
            <img
              src={scenographyTruss}
              alt={gwi.fullName}
              className="editorial-media absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/60 to-transparent" />
            
            {/* Top Indicator */}
            <div className="absolute top-8 left-8 z-10">
              <div className="flex items-center gap-2 font-mono text-xs text-white uppercase tracking-wider bg-[#071731]/90 px-3.5 py-1.5 rounded border border-white/15">
                <Megaphone className="w-3.5 h-3.5 text-[#C8102E]" />
                <span>GWI · CIVIC SCALE &amp; PUBLIC AFFAIRS</span>
              </div>
            </div>

            {/* Overlaid Editorial Typography with Parallax Depth */}
            <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 max-w-2xl z-10 text-white space-y-4">
              <h3 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight">
                Civic Assemblies, National Heritage Festivals &amp; Mass Crowd Flow Engineering.
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {gwi.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-8">
                <div>
                  <div className="font-heading text-3xl font-bold text-white">45,000+</div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Civic Participants</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-white">1.2M+</div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Digital Media Reach</div>
                </div>
                <button
                  onClick={handleConsult}
                  className="btn-editorial-red text-xs py-2.5 px-6 cursor-pointer"
                >
                  <span>Engage GWI Practice</span>
                </button>
              </div>
            </div>
          </div>

          {/* 4. GOADV: SPLIT ASYMMETRIC COMPOSITION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Media (6 cols) */}
            <div className="lg:col-span-6 editorial-media-container relative aspect-[4/3] rounded-lg overflow-hidden bg-[#071731] shadow-xl">
              <img
                src={plenaryDraft}
                alt={goadv.fullName}
                className="editorial-media absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/80 via-transparent to-transparent" />
              <div className="absolute top-6 left-6 z-10">
                <span className="font-mono text-xs uppercase tracking-wider text-white bg-[#071731]/90 px-3 py-1 rounded border border-white/15">
                  GOADV · GOVERNMENT RELATIONS
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <div className="font-mono text-xs text-slate-300">
                  National Ministry Plenaries &amp; Regulatory Conclaves
                </div>
              </div>
            </div>

            {/* Right Dossier (6 cols) */}
            <div className="lg:col-span-6 editorial-text-block space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#C8102E] font-semibold uppercase tracking-wider mb-2">
                  <Scale className="w-4 h-4 text-[#C8102E]" />
                  <span>{goadv.fullName}</span>
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#071731] tracking-tight leading-tight">
                  {goadv.tagline}
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {goadv.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#E2E8F0] pt-4">
                {goadv.focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="text-[#C8102E] font-bold shrink-0 mt-0.5">—</span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div>
                  <div className="font-heading text-2xl font-bold text-[#071731]">
                    14+ Ministries
                  </div>
                  <div className="font-mono text-[10px] text-slate-500 uppercase">
                    Institutional Alliances
                  </div>
                </div>

                <button
                  onClick={handleConsult}
                  className="btn-editorial-navy text-xs py-2.5 px-6 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Consult Advisory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
