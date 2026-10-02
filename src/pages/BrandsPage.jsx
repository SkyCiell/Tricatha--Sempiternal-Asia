import React, { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import protocolPavilion from "../assets/illustrations/protocol-pavilion.jpg";
import scenographyTruss from "../assets/illustrations/scenography-truss.jpg";
import plenaryDraft from "../assets/illustrations/plenary-draft.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function BrandsPage({ navigateTo }) {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mediaElements = pageRef.current?.querySelectorAll(".brand-parallax-media");
      mediaElements?.forEach((media) => {
        gsap.fromTo(
          media,
          { yPercent: -7, scale: 1.05 },
          {
            yPercent: 7,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: media.parentElement,
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

  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
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
              The Business Group &amp; <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Operating Practices.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl pt-2">
              Operating under parent holding PT Tricatha Sempiternal Asia, our four specialized practices form an integrated value chain spanning sovereign diplomatic protocol, 4K broadcast telepresence, mass civic assemblies, and inter-ministerial regulatory intelligence.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-5">
            <div className="font-mono text-xs text-slate-400 space-y-1 text-left lg:text-right">
              <div>UNIFIED EXECUTIVE COMMAND</div>
              <div className="text-white font-semibold">4 DEDICATED EVENT DISCIPLINES</div>
              <div>SUDIRMAN PARK · CENTRAL JAKARTA</div>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer"
            >
              <span>Inquire Group Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* 
        ALTERNATING EDITORIAL COMPOSITION:
        1. Large Media Left -> Typography Right (Enchanté)
        2. Full-Width Bleed Media (GWI)
        3. Media Right -> Typography Left (DNA Studio with 4K Video)
        4. Large Media Left -> Typography Right (GOADV)
      */}

      {/* 2. CHAPTER 1: ENCHANTE (Large Media Left -> Typography Right) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Media Left (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded bg-[#050F22] border border-white/15 shadow-2xl">
              <img
                src={protocolPavilion}
                alt="Enchanté Sovereign Protocol Dining Scenography"
                className="brand-parallax-media w-full h-full object-cover scale-105 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-60 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-slate-300">
                <span>The Ritz-Carlton Jakarta</span>
                <span className="text-white font-medium">VVIP Ceremonial Scenography</span>
              </div>
            </div>
          </div>

          {/* Typography Right (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-[#C8102E] font-semibold">
                Enchanté Protocol
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Haute Protocol &amp; <br />
                <span className="font-editorial italic font-normal text-slate-300">
                  Ceremonial Assemblies.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1">
                Enchanté specializes in high-precedence ceremonial dining, bilateral diplomatic receptions, and sovereign protocol etiquette. Operating under ministerial standards, Enchanté manages sovereign seating hierarchies, encrypted interpretation systems, and bilateral signing accouterments with flawless poise.
              </p>
            </div>

            {/* Scope Deliverables */}
            <div className="pt-4 border-t border-white/10 space-y-2.5 font-sans text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-[#C8102E] font-bold">—</span>
                <span>Sovereign Precedence Etiquette &amp; Seating Hierarchy Protocol</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8102E] font-bold">—</span>
                <span>Haute Banquet Table Scenography &amp; Floral Spatial Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8102E] font-bold">—</span>
                <span>Bilateral Accord Signing Ceremonial Command</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8102E] font-bold">—</span>
                <span>Encrypted Multi-Lingual Simultaneous Interpretation Conduits</span>
              </div>
            </div>

            <div className="pt-2 font-mono text-xs text-slate-400">
              Primary Venue Deployments: Grand Hyatt · The Ritz-Carlton · Fairmont Jakarta
            </div>
          </div>

        </div>
      </section>

      {/* 3. CHAPTER 2: GWI (Full-Width Media Bleed with Layered Typography) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-white/10">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#C8102E] font-semibold mb-2">
                GWI · Gema Waskita Interaktifa
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Civic Scale Public Assemblies &amp; Cultural Heritage
              </h2>
            </div>

            <div className="font-mono text-xs text-slate-400 shrink-0">
              SCALE: 45,000+ ATTENDEES · GELORA BUNG KARNO
            </div>
          </div>

          {/* Full-Width Panoramic Media Canvas */}
          <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded bg-[#050F22] border border-white/15 shadow-2xl">
            <img
              src={scenographyTruss}
              alt="GWI Monumental Public Scenography at Gelora Bung Karno"
              className="brand-parallax-media w-full h-full object-cover scale-105 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/30 to-black/30 pointer-events-none" />

            {/* Overlaid Editorial Pull Quote */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 max-w-2xl bg-[#071731]/90 backdrop-blur-md p-6 border border-white/15 rounded">
              <p className="font-editorial italic text-base sm:text-lg text-white leading-relaxed font-normal">
                "Balancing monumental public crowd ingress/egress telemetry with deeply moving architectural projection mapping across Indonesia's historic arenas."
              </p>
              <div className="mt-2 font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider">
                — GWI Public Affairs Operational Mandate
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 font-sans text-sm text-slate-300">
            <div className="md:col-span-8">
              <p className="leading-relaxed">
                Gema Waskita Interaktifa (GWI) executes monumental public engagement assemblies, civic cultural festivals, and interactive spatial projection mapping. Uniting government agencies with tens of thousands of citizens, GWI delivers rigorous crowd control engineering, eco-pavilion construction, and live civic broadcasting.
              </p>
            </div>
            <div className="md:col-span-4 border-l border-white/10 pl-6 font-mono text-xs space-y-1 text-slate-400">
              <div className="text-white font-semibold">VENUES:</div>
              <div>Gelora Bung Karno Arena · Taman Ismail Marzuki · Monas Enclosure</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHAPTER 3: DNA STUDIO (Media Right -> Typography Left) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Typography Left (6 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-[#C8102E] font-semibold">
                DNA Studio
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                4K Broadcast Scenography &amp; <br />
                <span className="font-editorial italic font-normal text-slate-300">
                  Leader Telepresence.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1">
                Headquartered at The City Tower in Central Jakarta, DNA Studio is TSA's dedicated media engineering soundstage. We engineer 4K multi-camera telecasts, virtual AGM electronic voting systems, live satellite uplinks, and high-stakes executive dialogue forums syndicated across Southeast Asia.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5 font-sans text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-[#C8102E] font-bold">—</span>
                <span>4K Multi-Camera Live Broadcast Switching &amp; Telepresence</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8102E] font-bold">—</span>
                <span>Audited Hybrid AGM Electronic Proxy Voting Telemetry</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8102E] font-bold">—</span>
                <span>Executive Dialogue Curation &amp; Regional Digital Syndication</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8102E] font-bold">—</span>
                <span>Kinetic Soundstage Lighting &amp; Acoustic Engineering</span>
              </div>
            </div>

            <div className="pt-2 font-mono text-xs text-slate-400">
              Studio Soundstage: The City Tower 12F, Central Jakarta
            </div>
          </div>

          {/* Media Right: Looping Production Video (6 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded bg-[#050F22] border border-white/15 shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                src="/hero-bg-720p.mp4"
                className="brand-parallax-media w-full h-full object-cover scale-105 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-60 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-slate-300">
                <span>The City Tower 12F</span>
                <span className="text-white font-medium">4K Live Telemetry Suite</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CHAPTER 4: GOADV (Large Media Left -> Typography Right) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Media Left (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded bg-[#050F22] border border-white/15 shadow-2xl">
              <img
                src={plenaryDraft}
                alt="GOADV Sovereign GovTech Conclave"
                className="brand-parallax-media w-full h-full object-cover scale-105 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-60 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-slate-300">
                <span>Inter-Ministerial Conclave</span>
                <span className="text-white font-medium">GovTech Scenography</span>
              </div>
            </div>
          </div>

          {/* Typography Right (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-[#C8102E] font-semibold">
                GOADV
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Government Relations &amp; <br />
                <span className="font-editorial italic font-normal text-slate-300">
                  Regulatory Conclaves.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1">
                GOADV bridges sovereign policy priorities with enterprise execution. We orchestrate inter-ministerial summits, national digital governance conclaves, and state-owned enterprise leadership retreats requiring strict protocol clearance and zero-downtime execution.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5 font-sans text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-[#C8102E] font-bold">—</span>
                <span>Cross-Ministry Secretarial Liaison &amp; Policy Alignment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8102E] font-bold">—</span>
                <span>Sovereign GovTech Plenary Scenography &amp; Staging</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8102E] font-bold">—</span>
                <span>Inter-Agency Multi-Stakeholder Consensus Roundtables</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8102E] font-bold">—</span>
                <span>State-Owned Enterprise Leadership Retreat Facilitation</span>
              </div>
            </div>

            <div className="pt-2 font-mono text-xs text-slate-400">
              Institutional Scope: 14+ Ministries &amp; Sovereign State Agencies
            </div>
          </div>

        </div>
      </section>

      {/* 6. CLOSING MANDATE INQUIRY */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-16 sm:mt-24">
        <div className="bg-[#0A1F44] border border-white/15 rounded p-8 sm:p-14 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Engage Our Specialized Practice Units
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Whether orchestrating a diplomatic banquet with Enchanté, a 4K broadcast with DNA Studio, a civic festival with GWI, or an inter-ministerial forum with GOADV, our executive secretariat delivers single-source accountability.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red text-xs py-3 px-6 flex items-center gap-2"
              >
                <span>Consult Secretariat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
