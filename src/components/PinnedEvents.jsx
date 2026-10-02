import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight, MapPin, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EVENTS_DATA, AI_GLOBAL_EXPO_EVENT } from "../data/eventsData";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedEvents({ navigateTo }) {
  const containerRef = useRef(null);
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  // Text layer refs
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);

  // Media layer refs
  const media1Ref = useRef(null);
  const media2Ref = useRef(null);
  const media3Ref = useRef(null);
  const media4Ref = useRef(null);

  const events = [
    {
      ...AI_GLOBAL_EXPO_EVENT,
      label: "AI GLOBAL EXPO 2026",
      shortCategory: "FLAGSHIP TECHNICAL MICE",
      scopeDetail: "45,000 sqm multi-hall turnkey deployment across Halls 1-3 with certified kinetic staging.",
    },
    {
      ...EVENTS_DATA[0], // ASEAN Summit
      label: "ASEAN SUMMIT PLENARY",
      shortCategory: "GOVERNMENT CORPORATE EVENT",
      scopeDetail: "Bilateral precedence schedules, encrypted telepresence conduits, and sovereign security corridors.",
    },
    {
      ...EVENTS_DATA[3], // SEA Energy Transition
      label: "CLEAN TECH MICE EXPO",
      shortCategory: "MICE & INFRASTRUCTURE",
      scopeDetail: "Turnkey exhibition architecture spanning 3 halls, ministerial keynotes, and B2B investor lounges.",
    },
    {
      ...EVENTS_DATA[5], // Bank Artha Raya AGM
      label: "BANK ARTHA RAYA AGM",
      shortCategory: "CORPORATE GOVERNANCE",
      scopeDetail: "Hybrid AGM orchestration with real-time audited proxy voting systems and live broadcast telemetry.",
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP: Horizontal Sliding Image Transitions with Delayed Typographic Parallax
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            start: "top top",
            end: `+=${window.innerWidth * 2.8}`,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(Math.floor(self.progress * 4), 3);
              setActiveEventIndex(idx);
            }
          }
        });

        // Initial setup: Event 1 is prominent
        gsap.set(text1Ref.current, { opacity: 1, xPercent: 0 });
        gsap.set(text2Ref.current, { opacity: 0, xPercent: 50 });
        gsap.set(text3Ref.current, { opacity: 0, xPercent: 50 });
        gsap.set(text4Ref.current, { opacity: 0, xPercent: 50 });

        gsap.set(media1Ref.current, { opacity: 1, scale: 1.0, xPercent: 0, filter: "blur(0px)", zIndex: 10 });
        gsap.set(media2Ref.current, { opacity: 0, scale: 1.06, xPercent: 120, filter: "blur(8px)", zIndex: 20 });
        gsap.set(media3Ref.current, { opacity: 0, scale: 1.06, xPercent: 120, filter: "blur(8px)", zIndex: 30 });
        gsap.set(media4Ref.current, { opacity: 0, scale: 1.06, xPercent: 120, filter: "blur(8px)", zIndex: 40 });

        // TRANSITION 1: Event 1 -> Event 2 (Scroll progress 1.0 -> 3.8)
        // Image 1 slides LEFT and scales subtly down
        tl.to(media1Ref.current, {
          xPercent: -120,
          scale: 0.94,
          opacity: 0,
          filter: "blur(8px)",
          duration: 3.0,
          ease: "power2.inOut"
        }, 1.0);

        // Text 1 moves LEFT out of frame
        tl.to(text1Ref.current, {
          xPercent: -40,
          opacity: 0,
          duration: 2.2,
          ease: "power2.in"
        }, 1.0);

        // Image 2 enters from RIGHT, overlapping with depth
        tl.to(media2Ref.current, {
          xPercent: 0,
          scale: 1.0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 3.2,
          ease: "power2.out"
        }, 1.2);

        // Text 2 enters from RIGHT with delayed parallax
        tl.to(text2Ref.current, {
          xPercent: 0,
          opacity: 1,
          duration: 2.6,
          ease: "power2.out"
        }, 1.8);

        // TRANSITION 2: Event 2 -> Event 3 (Scroll progress 4.2 -> 7.0)
        // Image 2 slides LEFT
        tl.to(media2Ref.current, {
          xPercent: -120,
          scale: 0.94,
          opacity: 0,
          filter: "blur(8px)",
          duration: 3.0,
          ease: "power2.inOut"
        }, 4.2);

        // Text 2 moves LEFT
        tl.to(text2Ref.current, {
          xPercent: -40,
          opacity: 0,
          duration: 2.2,
          ease: "power2.in"
        }, 4.2);

        // Image 3 enters from RIGHT
        tl.to(media3Ref.current, {
          xPercent: 0,
          scale: 1.0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 3.2,
          ease: "power2.out"
        }, 4.4);

        // Text 3 enters with delayed parallax
        tl.to(text3Ref.current, {
          xPercent: 0,
          opacity: 1,
          duration: 2.6,
          ease: "power2.out"
        }, 5.0);

        // TRANSITION 3: Event 3 -> Event 4 (Scroll progress 7.4 -> 10.2)
        // Image 3 slides LEFT
        tl.to(media3Ref.current, {
          xPercent: -120,
          scale: 0.94,
          opacity: 0,
          filter: "blur(8px)",
          duration: 3.0,
          ease: "power2.inOut"
        }, 7.4);

        // Text 3 moves LEFT
        tl.to(text3Ref.current, {
          xPercent: -40,
          opacity: 0,
          duration: 2.2,
          ease: "power2.in"
        }, 7.4);

        // Image 4 enters from RIGHT
        tl.to(media4Ref.current, {
          xPercent: 0,
          scale: 1.0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 3.2,
          ease: "power2.out"
        }, 7.6);

        // Text 4 enters with delayed parallax
        tl.to(text4Ref.current, {
          xPercent: 0,
          opacity: 1,
          duration: 2.6,
          ease: "power2.out"
        }, 8.2);

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
            end: `+=${window.innerHeight * 2.4}`,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(Math.floor(self.progress * 4), 3);
              setActiveEventIndex(idx);
            }
          }
        });

        gsap.set(text1Ref.current, { opacity: 1 });
        gsap.set(text2Ref.current, { opacity: 0 });
        gsap.set(text3Ref.current, { opacity: 0 });
        gsap.set(text4Ref.current, { opacity: 0 });

        gsap.set(media1Ref.current, { opacity: 1, xPercent: 0 });
        gsap.set(media2Ref.current, { opacity: 0, xPercent: 100 });
        gsap.set(media3Ref.current, { opacity: 0, xPercent: 100 });
        gsap.set(media4Ref.current, { opacity: 0, xPercent: 100 });

        // Phase 1 -> 2
        tl.to(media1Ref.current, { xPercent: -100, opacity: 0, duration: 2 }, 1);
        tl.to(text1Ref.current, { opacity: 0, duration: 1.5 }, 1);
        tl.to(media2Ref.current, { xPercent: 0, opacity: 1, duration: 2 }, 1.5);
        tl.to(text2Ref.current, { opacity: 1, duration: 1.5 }, 2);

        // Phase 2 -> 3
        tl.to(media2Ref.current, { xPercent: -100, opacity: 0, duration: 2 }, 4.5);
        tl.to(text2Ref.current, { opacity: 0, duration: 1.5 }, 4.5);
        tl.to(media3Ref.current, { xPercent: 0, opacity: 1, duration: 2 }, 5);
        tl.to(text3Ref.current, { opacity: 1, duration: 1.5 }, 5.5);

        // Phase 3 -> 4
        tl.to(media3Ref.current, { xPercent: -100, opacity: 0, duration: 2 }, 8);
        tl.to(text3Ref.current, { opacity: 0, duration: 1.5 }, 8);
        tl.to(media4Ref.current, { xPercent: 0, opacity: 1, duration: 2 }, 8.5);
        tl.to(text4Ref.current, { opacity: 1, duration: 1.5 }, 9);

        tl.to({}, { duration: 1.5 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleNavigate = (path) => {
    if (navigateTo) {
      navigateTo(path);
    }
  };

  return (
    <section
      ref={containerRef}
      id="event"
      className="relative w-screen h-screen bg-[#071731] text-[#F1F5F9] overflow-hidden select-none border-b border-white/10"
    >
      {/* Top Events Tracker Bar (Pinned) */}
      <div className="absolute top-0 left-0 right-0 z-40 pt-20 px-4 sm:px-10 pb-4 border-b border-white/10 bg-[#071731]/90 backdrop-blur-md">
        <div className="max-w-[1520px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-[#C8102E] font-semibold tracking-wider">
              03 / PRODUCTION ARCHIVE
            </span>
            <span className="text-white/30">•</span>
            <span className="text-white">
              HORIZONTAL SCENE SEQUENCE · PROVEN SUMMITS
            </span>
          </div>

          {/* Stepper Event Indicators */}
          <div className="flex items-center gap-4 sm:gap-6 text-[11px]">
            {events.map((ev, idx) => (
              <span
                key={ev.id}
                className={`transition-all duration-300 font-medium ${
                  activeEventIndex === idx
                    ? "text-white font-bold scale-105"
                    : "text-slate-500 opacity-60"
                }`}
              >
                0{idx + 1} {ev.label.split(" ")[0]}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Fullscreen Stage: Overlapping Horizontal Image Slider Arena */}
      <div className="w-full h-full max-w-[1520px] mx-auto px-4 sm:px-10 pt-28 pb-14 flex items-center justify-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full items-center">
          
          {/* Left Column: Progressive Event Typography with Horizontal Slide Parallax */}
          <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] flex items-center">
            
            {/* DOSSIER 1: AI Global EXPO */}
            <div ref={text1Ref} className="absolute inset-0 flex flex-col justify-center space-y-4 will-change-transform">
              <div className="flex items-center gap-3 font-mono text-xs text-[#C8102E] uppercase tracking-wider font-semibold">
                <span>{events[0].shortCategory}</span>
                <span className="text-white/30">•</span>
                <span>{events[0].year}</span>
              </div>

              <h2 className="font-heading text-4xl sm:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.02]">
                AI Global EXPO <br />
                <span className="font-editorial italic font-normal text-slate-300">
                  2026 Conclave.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base lg:text-[17px] text-slate-300 leading-relaxed font-normal max-w-xl">
                {events[0].description}
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 font-mono text-xs border-t border-white/10 max-w-md">
                <div>
                  <div className="text-slate-400 text-[11px]">VENUE</div>
                  <div className="text-white font-medium">{events[0].venue}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[11px]">SCALE</div>
                  <div className="text-white font-medium">{events[0].attendees}</div>
                </div>
              </div>

              <div className="pt-3 flex items-center gap-4 font-mono text-xs">
                <button
                  onClick={() => handleNavigate(`/events/${events[0].slug}`)}
                  className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Inspect Event Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* DOSSIER 2: ASEAN Summit */}
            <div ref={text2Ref} className="absolute inset-0 flex flex-col justify-center space-y-4 will-change-transform">
              <div className="flex items-center gap-3 font-mono text-xs text-[#C8102E] uppercase tracking-wider font-semibold">
                <span>{events[1].shortCategory}</span>
                <span className="text-white/30">•</span>
                <span>{events[1].year}</span>
              </div>

              <h2 className="font-heading text-4xl sm:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.02]">
                ASEAN Sovereign <br />
                <span className="font-editorial italic font-normal text-slate-300">
                  Diplomacy Plenary.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base lg:text-[17px] text-slate-300 leading-relaxed font-normal max-w-xl">
                {events[1].description}
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 font-mono text-xs border-t border-white/10 max-w-md">
                <div>
                  <div className="text-slate-400 text-[11px]">VENUE</div>
                  <div className="text-white font-medium">{events[1].venue}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[11px]">DELEGATES</div>
                  <div className="text-white font-medium">{events[1].attendees}</div>
                </div>
              </div>

              <div className="pt-3 flex items-center gap-4 font-mono text-xs">
                <button
                  onClick={() => handleNavigate(`/events/${events[1].slug}`)}
                  className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Inspect Event Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* DOSSIER 3: SEA Energy Transition */}
            <div ref={text3Ref} className="absolute inset-0 flex flex-col justify-center space-y-4 will-change-transform">
              <div className="flex items-center gap-3 font-mono text-xs text-[#C8102E] uppercase tracking-wider font-semibold">
                <span>{events[2].shortCategory}</span>
                <span className="text-white/30">•</span>
                <span>{events[2].year}</span>
              </div>

              <h2 className="font-heading text-4xl sm:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.02]">
                SEA Clean Tech &amp; <br />
                <span className="font-editorial italic font-normal text-slate-300">
                  Energy Transition.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base lg:text-[17px] text-slate-300 leading-relaxed font-normal max-w-xl">
                {events[2].description}
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 font-mono text-xs border-t border-white/10 max-w-md">
                <div>
                  <div className="text-slate-400 text-[11px]">VENUE</div>
                  <div className="text-white font-medium">{events[2].venue}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[11px]">SCALE</div>
                  <div className="text-white font-medium">{events[2].attendees}</div>
                </div>
              </div>

              <div className="pt-3 flex items-center gap-4 font-mono text-xs">
                <button
                  onClick={() => handleNavigate(`/events/${events[2].slug}`)}
                  className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Inspect Event Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* DOSSIER 4: Bank Artha Raya AGM */}
            <div ref={text4Ref} className="absolute inset-0 flex flex-col justify-center space-y-4 will-change-transform">
              <div className="flex items-center gap-3 font-mono text-xs text-[#C8102E] uppercase tracking-wider font-semibold">
                <span>{events[3].shortCategory}</span>
                <span className="text-white/30">•</span>
                <span>{events[3].year}</span>
              </div>

              <h2 className="font-heading text-4xl sm:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.02]">
                Bank Artha Raya <br />
                <span className="font-editorial italic font-normal text-slate-300">
                  Annual General Meeting.
                </span>
              </h2>

              <p className="font-sans text-sm sm:text-base lg:text-[17px] text-slate-300 leading-relaxed font-normal max-w-xl">
                {events[3].description}
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 font-mono text-xs border-t border-white/10 max-w-md">
                <div>
                  <div className="text-slate-400 text-[11px]">VENUE</div>
                  <div className="text-white font-medium">{events[3].venue}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[11px]">SHAREHOLDERS</div>
                  <div className="text-white font-medium">{events[3].attendees}</div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4 font-mono text-xs">
                <button
                  onClick={() => handleNavigate(`/events/${events[3].slug}`)}
                  className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Inspect Event Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleNavigate("/event")}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer py-2.5 px-4 border border-white/15 rounded-sm inline-flex items-center gap-2"
                >
                  <span>Explore 16-Event Archive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Fullscreen Aspect Horizontal Image Stage with Overlapping Parallax */}
          <div className="lg:col-span-6 relative aspect-[16/10] max-h-[560px] w-full">
            
            {/* MEDIA 1: AI Global EXPO */}
            <div
              ref={media1Ref}
              className="absolute inset-0 rounded overflow-hidden border border-white/15 bg-[#050F22] shadow-[0_28px_70px_rgba(0,0,0,0.7)] will-change-transform"
            >
              <img
                src={events[0].img}
                alt={events[0].title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-65 pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-xs text-slate-300 pointer-events-none">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>{events[0].location}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span className="text-white font-semibold">{events[0].attendees}</span>
                </span>
              </div>
            </div>

            {/* MEDIA 2: ASEAN Summit */}
            <div
              ref={media2Ref}
              className="absolute inset-0 rounded overflow-hidden border border-white/15 bg-[#050F22] shadow-[0_28px_70px_rgba(0,0,0,0.7)] will-change-transform"
            >
              <img
                src={events[1].img}
                alt={events[1].title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-65 pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-xs text-slate-300 pointer-events-none">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>{events[1].location}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span className="text-white font-semibold">{events[1].attendees}</span>
                </span>
              </div>
            </div>

            {/* MEDIA 3: SEA Clean Tech */}
            <div
              ref={media3Ref}
              className="absolute inset-0 rounded overflow-hidden border border-white/15 bg-[#050F22] shadow-[0_28px_70px_rgba(0,0,0,0.7)] will-change-transform"
            >
              <img
                src={events[2].img}
                alt={events[2].title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-65 pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-xs text-slate-300 pointer-events-none">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>{events[2].location}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span className="text-white font-semibold">{events[2].attendees}</span>
                </span>
              </div>
            </div>

            {/* MEDIA 4: Bank Artha Raya AGM */}
            <div
              ref={media4Ref}
              className="absolute inset-0 rounded overflow-hidden border border-white/15 bg-[#050F22] shadow-[0_28px_70px_rgba(0,0,0,0.7)] will-change-transform"
            >
              <img
                src={events[3].img}
                alt={events[3].title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-65 pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-xs text-slate-300 pointer-events-none">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>{events[3].location}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span className="text-white font-semibold">{events[3].attendees}</span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Pinned Coordinates Strip & Link */}
      <div className="absolute bottom-0 left-0 right-0 z-40 px-4 sm:px-10 py-3 border-t border-white/10 bg-[#071731]/90 backdrop-blur-md">
        <div className="max-w-[1520px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-slate-400">
          <div>PROVEN RECORD: 16 VERIFIED SOVEREIGN &amp; ENTERPRISE PLENARIES</div>
          <button
            onClick={() => handleNavigate("/event")}
            className="text-white hover:text-[#C8102E] transition-colors cursor-pointer inline-flex items-center gap-2 group self-start sm:self-auto"
          >
            <span>View Complete React Bits Masonry Archive</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
