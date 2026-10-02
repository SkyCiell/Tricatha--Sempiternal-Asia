import React, { useRef, useEffect } from "react";
import { companyInfo } from "../data/tsaData";
import AnimatedCounter from "./AnimatedCounter";
import scenographyTruss from "../assets/illustrations/scenography-truss.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImpactNumbers() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 12,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#071731] text-white border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#C8102E]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C8102E] font-semibold">
                Operational Telemetry
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.12]">
              Operational Scale &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Industry Milestones.
              </span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
            Every metric reflects actual event milestones delivered across Indonesia's primary convention hubs and international ministerial forums.
          </p>
        </div>

        {/* Architectural Composition: 7 cols Metrics Matrix + 5 cols Photographic Scenography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 items-stretch">
          
          {/* Left: 4 Metrics Matrix (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded overflow-hidden">
            {companyInfo.statsSummary.map((stat, index) => (
              <div
                key={stat.id}
                className="p-8 sm:p-10 bg-[#0A1F44] hover:bg-[#0E2552] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className={`font-heading text-5xl sm:text-6xl font-bold tracking-tight tabular-nums ${
                        index === 0 ? "text-[#C8102E]" : "text-white"
                      }`}
                    >
                      <AnimatedCounter
                        to={stat.value}
                        duration={1.6}
                        delay={0.1 + index * 0.1}
                      />
                    </span>
                    <span className="font-heading text-3xl sm:text-4xl font-semibold text-[#C8102E]">
                      {stat.suffix}
                    </span>
                  </div>

                  <div className="font-heading text-base sm:text-lg font-bold text-white mt-4">
                    {stat.label}
                  </div>
                </div>

                <div className="font-sans text-xs text-slate-300 leading-relaxed pt-4 border-t border-white/10 mt-6">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Authentic Production Photography Window (5 cols) */}
          <div className="lg:col-span-5 relative rounded border border-white/15 overflow-hidden bg-[#050F22] flex flex-col justify-between min-h-[380px] lg:min-h-full">
            <div className="absolute inset-0 overflow-hidden">
              <img
                ref={imageRef}
                src={scenographyTruss}
                alt="TSA Stage Scenography and Production Architecture"
                className="w-full h-full object-cover will-change-transform scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/40 to-transparent" />
              <div className="absolute inset-0 bg-[#071731]/20" />
            </div>

            {/* Top Indicator */}
            <div className="relative z-10 p-6 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-white bg-[#071731]/90 px-3 py-1 rounded border border-white/10">
                SCENOGRAPHY &amp; PRODUCTION RIG
              </span>
            </div>

            {/* Bottom Telemetry Details */}
            <div className="relative z-10 p-6 sm:p-8 space-y-2">
              <div className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider">
                CENTRAL JAKARTA COMMAND CENTER
              </div>
              <div className="font-heading text-lg sm:text-xl font-bold text-white">
                Turnkey MICE &amp; Sovereign Production Standards
              </div>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Operating with in-house broadcast suites, encrypted plenary audio, and Tier-1 venue coordination across Southeast Asia.
              </p>
            </div>
          </div>

        </div>

        {/* Provenance Venues Strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
            <span className="text-white font-semibold uppercase">ACCREDITED CONVENTION VENUES:</span>
          </div>
          <div className="text-slate-300">
            Jakarta Convention Center (JCC) · ICE BSD City · JIExpo Kemayoran · The Ritz-Carlton · Fairmont Jakarta
          </div>
        </div>

      </div>
    </section>
  );
}
