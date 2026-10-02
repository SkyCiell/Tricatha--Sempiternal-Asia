import React, { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import broadcastUplink from "../assets/illustrations/broadcast-uplink.jpg";
import dsc08824 from "../assets/DSC08824.JPG";

gsap.registerPlugin(ScrollTrigger);

export default function ActivitiesPage({ navigateTo }) {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const media = pageRef.current?.querySelectorAll(".act-portal-media");
      media?.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -7, scale: 1.05 },
          {
            yPercent: 7,
            scale: 1,
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
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleNav = (path) => {
    if (navigateTo) navigateTo(path);
  };

  return (
    <div
      ref={pageRef}
      className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white"
    >
      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <header className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-8 sm:pt-14 pb-12 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.02]">
              Activities &amp; <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Corporate Initiatives.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl pt-2">
              Beyond event-day execution, TSA spearheads authoritative newsroom dispatches, operational fellowships with top universities, and cross-sector institutional programs across Southeast Asia.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-5">
            <div className="font-mono text-xs text-slate-400 space-y-1 text-left lg:text-right">
              <div>PORTAL: NEWSROOM &amp; FELLOWSHIP</div>
              <div className="text-white font-semibold">ALLIANCES ACROSS 14+ MINISTRIES</div>
              <div>SUDIRMAN PARK · CENTRAL JAKARTA</div>
            </div>

            <button
              onClick={() => handleNav("/contact")}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer"
            >
              <span>Consult Secretariat</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. DIRECT VISUAL NAVIGATION CHAPTER 1: NEWS */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-white/10">
        <div
          onClick={() => handleNav("/news")}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center group cursor-pointer"
        >
          {/* Media Left (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded bg-[#050F22] border border-white/15 shadow-2xl">
              <img
                src={broadcastUplink}
                alt="TSA Newsroom Dispatches"
                className="act-portal-media w-full h-full object-cover scale-105 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-70 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-slate-300">
                <span>The City Tower, Jakarta</span>
                <span className="text-white font-medium">Official Dispatch Bureau</span>
              </div>
            </div>
          </div>

          {/* Typography Right (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-[#C8102E] font-semibold">
                Official Newsroom
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight group-hover:text-slate-200 transition-colors">
                Newsroom &amp; <br />
                <span className="font-editorial italic font-normal text-slate-300">
                  Executive Dispatches.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1">
                Explore official press communiqués, event management bulletins, and policy monographs issued directly from the Executive Secretariat at The City Tower in Central Jakarta.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="btn-editorial-red text-xs py-2.5 px-6 inline-flex items-center gap-2 group-hover:bg-[#A50D25] transition-colors">
                <span>Enter Newsroom Archive</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>

              <span className="font-mono text-xs text-slate-400">
                Pan-ASEAN Coverage
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIRECT VISUAL NAVIGATION CHAPTER 2: INTERNSHIP */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-white/10">
        <div
          onClick={() => handleNav("/internship")}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center group cursor-pointer"
        >
          {/* Typography Left (6 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-[#C8102E] font-semibold">
                Operational Fellowship
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight group-hover:text-slate-200 transition-colors">
                Executive Fellowship &amp; <br />
                <span className="font-editorial italic font-normal text-slate-300">
                  Operational Immersion.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1">
                An immersive professional development program designed for exceptional candidates seeking front-line mastery in sovereign event management, digital telemetry, spatial scenography, and corporate communications.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="btn-editorial-red text-xs py-2.5 px-6 inline-flex items-center gap-2 group-hover:bg-[#A50D25] transition-colors">
                <span>Explore Fellowship Program</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>

              <span className="font-mono text-xs text-slate-400">
                Cohort 2026 Admissions
              </span>
            </div>
          </div>

          {/* Media Right: Authentic TSA Crew Photo (6 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded bg-[#050F22] border border-white/15 shadow-2xl">
              <img
                src={dsc08824}
                alt="TSA Operational Control Center Fellowship"
                className="act-portal-media w-full h-full object-cover scale-105 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-70 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-slate-300">
                <span>Field Deployment</span>
                <span className="text-white font-medium">Command Center Apprenticeship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INSTITUTIONAL ALLIANCE STRIP */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-16 sm:mt-24">
        <div className="bg-[#0A1F44] border border-white/15 rounded p-8 sm:p-14 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Propose an Institutional Program or Academic Alliance
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                TSA partners with government ministries, universities, and enterprise secretariats to co-create high-impact corporate retreats, talent mentoring, and civic initiatives.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => handleNav("/contact")}
                className="btn-editorial-red text-xs py-3 px-6 flex items-center gap-2"
              >
                <span>Consult Practice Directorate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
