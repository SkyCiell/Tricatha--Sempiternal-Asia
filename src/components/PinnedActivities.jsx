import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight, GraduationCap, Newspaper, Landmark } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import dsc08824 from "../assets/DSC08824.JPG";
import broadcastUplink from "../assets/illustrations/broadcast-uplink.jpg";
import scenographyTruss from "../assets/illustrations/scenography-truss.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedActivities({ navigateTo }) {
  const containerRef = useRef(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  // Large primary image ref (begins full screen, moves upward)
  const primaryMediaRef = useRef(null);
  const secondaryMediaRef = useRef(null);
  const tertiaryMediaRef = useRef(null);

  // Typography refs
  const story1TextRef = useRef(null);
  const story2TextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP: Mixed Directional Transitions (Image Upward + Typography Horizontal + Secondary Lateral Entry)
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            start: "top top",
            end: `+=${window.innerWidth * 2.6}`,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = self.progress > 0.5 ? 1 : 0;
              setActiveStoryIndex(idx);
            }
          }
        });

        // Initial State (Story 1 - Fellowship):
        // Large image begins dominating full screen
        gsap.set(primaryMediaRef.current, {
          width: "86vw",
          maxWidth: "1440px",
          height: "70vh",
          xPercent: 0,
          yPercent: 0,
          scale: 1.0,
          transformOrigin: "center center"
        });

        // Typography starts hidden to the left
        gsap.set(story1TextRef.current, {
          xPercent: -40,
          opacity: 0
        });

        // Secondary image starts off-screen to the right
        gsap.set(secondaryMediaRef.current, {
          xPercent: 120,
          scale: 1.05,
          opacity: 0,
          filter: "blur(6px)"
        });

        // Story 2 elements start off-screen
        gsap.set(story2TextRef.current, {
          xPercent: 40,
          opacity: 0
        });
        gsap.set(tertiaryMediaRef.current, {
          yPercent: 100,
          opacity: 0
        });

        // PHASE 1: Image moves UPWARD, Typography moves HORIZONTALLY from left, Secondary image enters from right
        // 1. Primary image shifts UPWARD and reframes to the upper/right
        tl.to(primaryMediaRef.current, {
          width: "48vw",
          maxWidth: "760px",
          height: "56vh",
          xPercent: 24,
          yPercent: -12,
          scale: 0.98,
          duration: 4.5,
          ease: "power2.inOut"
        }, 1.0);

        // 2. Typography enters HORIZONTALLY from Left -> Right
        tl.to(story1TextRef.current, {
          xPercent: 0,
          opacity: 1,
          duration: 3.5,
          ease: "power2.out"
        }, 1.5);

        // 3. Secondary image enters laterally from the RIGHT with depth blur clearing
        tl.to(secondaryMediaRef.current, {
          xPercent: 0,
          scale: 1.0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 3.8,
          ease: "power2.out"
        }, 2.2);

        // PHASE 2: Transition into Story 2 (Newsroom & Ministerial Dispatches)
        // Primary media and Story 1 text slide away
        tl.to(primaryMediaRef.current, {
          yPercent: -80,
          opacity: 0,
          duration: 3.0,
          ease: "power2.in"
        }, 5.5);

        tl.to(story1TextRef.current, {
          xPercent: -30,
          opacity: 0,
          duration: 2.5,
          ease: "power2.in"
        }, 5.5);

        // Secondary media expands and takes the primary left-center focal position
        tl.to(secondaryMediaRef.current, {
          width: "50vw",
          maxWidth: "780px",
          height: "62vh",
          xPercent: -24,
          yPercent: -2,
          duration: 4.0,
          ease: "power2.inOut"
        }, 6.0);

        // Story 2 Typography enters HORIZONTALLY from the RIGHT
        tl.to(story2TextRef.current, {
          xPercent: 0,
          opacity: 1,
          duration: 3.5,
          ease: "power2.out"
        }, 6.8);

        // Tertiary image enters from bottom-right to complete the editorial frame
        tl.to(tertiaryMediaRef.current, {
          yPercent: 0,
          opacity: 1,
          duration: 3.0,
          ease: "power2.out"
        }, 7.5);

        // Buffer hold before unpin
        tl.to({}, { duration: 2.0 });
      });

      // MOBILE & TABLET (< 1024px)
      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            start: "top top",
            end: `+=${window.innerHeight * 2.2}`,
            scrub: 0.8,
            invalidateOnRefresh: true,
          }
        });

        gsap.set(primaryMediaRef.current, { width: "92vw", height: "46vh", yPercent: 0 });
        gsap.set(story1TextRef.current, { xPercent: 0, opacity: 0 });
        gsap.set(secondaryMediaRef.current, { opacity: 0 });
        gsap.set(story2TextRef.current, { opacity: 0 });

        tl.to(primaryMediaRef.current, { height: "36vh", yPercent: -10, duration: 3 }, 1);
        tl.to(story1TextRef.current, { opacity: 1, duration: 2.5 }, 1.5);
        tl.to(primaryMediaRef.current, { opacity: 0, duration: 2 }, 5);
        tl.to(story1TextRef.current, { opacity: 0, duration: 2 }, 5);
        tl.to(secondaryMediaRef.current, { opacity: 1, duration: 2.5 }, 6);
        tl.to(story2TextRef.current, { opacity: 1, duration: 2.5 }, 6.5);

        tl.to({}, { duration: 1.5 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleNav = (path) => {
    if (navigateTo) {
      navigateTo(path);
    }
  };

  return (
    <section
      ref={containerRef}
      id="activities"
      className="relative w-screen h-screen bg-[#071731] text-[#F1F5F9] overflow-hidden select-none border-b border-white/10"
    >
      {/* Top Activities Tracker Bar (Pinned) */}
      <div className="absolute top-0 left-0 right-0 z-40 pt-20 px-4 sm:px-10 pb-4 border-b border-white/10 bg-[#071731]/90 backdrop-blur-md">
        <div className="max-w-[1520px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-[#C8102E] font-semibold tracking-wider">
              04 / ACTIVITIES &amp; NEWSROOM
            </span>
            <span className="text-white/30">•</span>
            <span className="text-white">
              MIXED DIRECTIONAL TRANSITION · FELLOWSHIP &amp; DISPATCHES
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-[11px]">
            <span
              className={`transition-all duration-300 font-medium ${
                activeStoryIndex === 0
                  ? "text-white font-bold scale-105"
                  : "text-slate-500 opacity-60"
              }`}
            >
              01 FELLOWSHIP IMMERSION
            </span>
            <span className="text-white/20">/</span>
            <span
              className={`transition-all duration-300 font-medium ${
                activeStoryIndex === 1
                  ? "text-white font-bold scale-105"
                  : "text-slate-500 opacity-60"
              }`}
            >
              02 EDITORIAL NEWSROOM
            </span>
          </div>
        </div>
      </div>

      {/* Main Fullscreen Mixed Directional Stage */}
      <div className="w-full h-full max-w-[1520px] mx-auto px-4 sm:px-10 pt-28 pb-14 flex items-center justify-center relative">
        
        {/* STORY 1 TYPOGRAPHY (Enters horizontally from left) */}
        <div
          ref={story1TextRef}
          className="absolute left-4 sm:left-10 lg:left-16 z-20 max-w-xl space-y-4 pointer-events-none will-change-transform"
        >
          <div className="flex items-center gap-3 font-mono text-xs text-[#C8102E] uppercase tracking-wider font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>OPERATIONAL FELLOWSHIP &amp; TALENT IMMERSION</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.02]">
            Academic Talent &amp; <br />
            <span className="font-editorial italic font-normal text-slate-300">
              Operational Fellowship.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base lg:text-[17px] text-slate-300 leading-relaxed font-normal">
            Direct on-ground immersion for university fellows across Software Infrastructure, Stage Scenography, Creative Broadcast, and Corporate Governance in alliance with Indonesia&apos;s premier academic institutions.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-4 font-mono text-xs border-t border-white/10 max-w-md">
            <div>
              <div className="text-slate-400 text-[11px]">FELLOWSHIP TRACKS</div>
              <div className="text-white font-medium">4 Accredited Divisions</div>
            </div>
            <div>
              <div className="text-slate-400 text-[11px]">COHORTS</div>
              <div className="text-white font-medium">UI, ITB &amp; Top Universities</div>
            </div>
          </div>

          <div className="pt-3 pointer-events-auto">
            <button
              onClick={() => handleNav("/internship")}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Fellowship Program</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* PRIMARY MEDIA: Fellowship Authentic Team Photo (Starts full screen, moves UPWARD) */}
        <div
          ref={primaryMediaRef}
          className="absolute z-10 rounded overflow-hidden border border-white/15 bg-[#050F22] shadow-[0_28px_70px_rgba(0,0,0,0.7)] will-change-transform flex items-center justify-center"
        >
          <img
            src={dsc08824}
            alt="TSA Operational Fellowship Cohort"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-60 pointer-events-none" />

          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-xs text-slate-300 pointer-events-none">
            <span className="text-white font-semibold">TSA Operational Fellowship Cohort</span>
            <span className="text-slate-400">AUTHENTIC TEAM RECORD</span>
          </div>
        </div>

        {/* SECONDARY MEDIA: Broadcast Command (Enters LATERALLY from the right) */}
        <div
          ref={secondaryMediaRef}
          className="absolute right-4 sm:right-10 lg:right-16 bottom-16 sm:bottom-20 z-25 w-[36vw] max-w-[500px] aspect-[16/10] rounded overflow-hidden border border-white/20 bg-[#050F22] shadow-[0_24px_60px_rgba(0,0,0,0.8)] will-change-transform hidden sm:block"
        >
          <img
            src={broadcastUplink}
            alt="TSA Editorial Newsroom & Broadcast Command"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-60 pointer-events-none" />

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-slate-300 pointer-events-none">
            <span>The City Tower 12F</span>
            <span className="text-white font-semibold">BROADCAST BUREAU</span>
          </div>
        </div>

        {/* STORY 2 TYPOGRAPHY (Enters horizontally from right in Phase 2) */}
        <div
          ref={story2TextRef}
          className="absolute right-4 sm:right-10 lg:right-16 z-30 max-w-xl space-y-4 pointer-events-none will-change-transform"
        >
          <div className="flex items-center gap-3 font-mono text-xs text-[#C8102E] uppercase tracking-wider font-semibold">
            <Newspaper className="w-4 h-4" />
            <span>EDITORIAL DISPATCH BUREAU</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.02]">
            Ministerial Press &amp; <br />
            <span className="font-editorial italic font-normal text-slate-300">
              Technical Monographs.
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base lg:text-[17px] text-slate-300 leading-relaxed font-normal">
            The TSA Executive Secretariat delivers authoritative technical monographs on AI Expo multi-hall engineering, multilateral protocol clearances, and hybrid telepresence architecture.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-4 font-mono text-xs border-t border-white/10 max-w-md">
            <div>
              <div className="text-slate-400 text-[11px]">DISPATCH BUREAU</div>
              <div className="text-white font-medium">The City Tower, Jakarta</div>
            </div>
            <div>
              <div className="text-slate-400 text-[11px]">MONOGRAPH TOPICS</div>
              <div className="text-white font-medium">AI Expo · Sovereign Conclaves</div>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-4 pointer-events-auto">
            <button
              onClick={() => handleNav("/news")}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Read Newsroom Bulletins</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => handleNav("/activities")}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer py-2.5 px-4 border border-white/15 rounded-sm inline-flex items-center gap-2"
            >
              <span>View Corporate Initiatives</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* TERTIARY MEDIA: Civic Stadium Festival (Enters from bottom in Phase 2) */}
        <div
          ref={tertiaryMediaRef}
          className="absolute left-4 sm:left-10 lg:left-16 bottom-16 sm:bottom-20 z-20 w-[34vw] max-w-[460px] aspect-[16/10] rounded overflow-hidden border border-white/20 bg-[#050F22] shadow-[0_24px_60px_rgba(0,0,0,0.8)] will-change-transform hidden lg:block"
        >
          <img
            src={scenographyTruss}
            alt="Civic Assemblies at Gelora Bung Karno"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-60 pointer-events-none" />

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-slate-300 pointer-events-none">
            <span className="flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>Gelora Bung Karno Arena</span>
            </span>
            <span className="text-white font-semibold">45,000 ATTENDEES</span>
          </div>
        </div>

      </div>

      {/* Bottom Pinned Coordinates Strip */}
      <div className="absolute bottom-0 left-0 right-0 z-40 px-4 sm:px-10 py-3 border-t border-white/10 bg-[#071731]/90 backdrop-blur-md">
        <div className="max-w-[1520px] mx-auto flex items-center justify-between font-mono text-xs text-slate-400">
          <div>OPERATIONAL CULTURE: EXCELLENCE THROUGH FIELD IMMERSION</div>
          <div className="hidden sm:block">DIRECTIONAL PROGRESS: IMAGE UPWARD · LATERAL REVEALS</div>
          <div>SUDIRMAN PARK · CENTRAL JAKARTA</div>
        </div>
      </div>
    </section>
  );
}
