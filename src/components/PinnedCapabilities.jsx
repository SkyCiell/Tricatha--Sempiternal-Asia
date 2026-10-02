import React, { useRef, useEffect } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import scenographyTruss from "../assets/illustrations/scenography-truss.jpg";
import protocolPavilion from "../assets/illustrations/protocol-pavilion.jpg";
import broadcastUplink from "../assets/illustrations/broadcast-uplink.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedCapabilities({ navigateTo }) {
  const containerRef = useRef(null);

  // Text layer refs
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  // Media layer refs
  const media1Ref = useRef(null);
  const media2Ref = useRef(null);
  const media3Ref = useRef(null);

  // Tracker bar indicator ref
  const progressLineRef = useRef(null);
  const step1DotRef = useRef(null);
  const step2DotRef = useRef(null);
  const step3DotRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP PINNED CHOREOGRAPHY (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            start: "top top",
            end: "+=2200",
            scrub: 0.8,
            invalidateOnRefresh: true,
          }
        });

        // Initial States
        gsap.set(text1Ref.current, { opacity: 1, yPercent: 0 });
        gsap.set(text2Ref.current, { opacity: 0, yPercent: 40 });
        gsap.set(text3Ref.current, { opacity: 0, yPercent: 40 });

        gsap.set(media1Ref.current, { opacity: 1, scale: 1.0, xPercent: 0 });
        gsap.set(media2Ref.current, { opacity: 0, scale: 1.06, xPercent: 12 });
        gsap.set(media3Ref.current, { opacity: 0, scale: 1.06, xPercent: 12 });

        gsap.set(progressLineRef.current, { scaleX: 0.15 });

        // Phase 1 -> Phase 2 Transition (Scroll scrub 1.0 -> 4.5)
        tl.to(progressLineRef.current, { scaleX: 0.55, duration: 3.5, ease: "none" }, 1.0);
        tl.to(step1DotRef.current, { opacity: 0.4, duration: 1.5 }, 1.5);
        tl.to(step2DotRef.current, { opacity: 1, color: "#C8102E", duration: 1.5 }, 2.0);

        // Text 1 leaves
        tl.to(text1Ref.current, { opacity: 0, yPercent: -35, duration: 2.2, ease: "power2.in" }, 1.0);
        // Media 1 recedes
        tl.to(media1Ref.current, { opacity: 0, scale: 0.94, xPercent: -10, duration: 2.5, ease: "power2.in" }, 1.0);

        // Text 2 enters
        tl.to(text2Ref.current, { opacity: 1, yPercent: 0, duration: 2.4, ease: "power2.out" }, 2.2);
        // Media 2 enters with counter-parallax
        tl.to(media2Ref.current, { opacity: 1, scale: 1.0, xPercent: 0, duration: 2.6, ease: "power2.out" }, 2.0);

        // Phase 2 -> Phase 3 Transition (Scroll scrub 5.0 -> 8.5)
        tl.to(progressLineRef.current, { scaleX: 1.0, duration: 3.5, ease: "none" }, 5.0);
        tl.to(step2DotRef.current, { opacity: 0.4, color: "#94A3B8", duration: 1.5 }, 5.5);
        tl.to(step3DotRef.current, { opacity: 1, color: "#C8102E", duration: 1.5 }, 6.0);

        // Text 2 leaves
        tl.to(text2Ref.current, { opacity: 0, yPercent: -35, duration: 2.2, ease: "power2.in" }, 5.0);
        // Media 2 recedes
        tl.to(media2Ref.current, { opacity: 0, scale: 0.94, xPercent: -10, duration: 2.5, ease: "power2.in" }, 5.0);

        // Text 3 enters
        tl.to(text3Ref.current, { opacity: 1, yPercent: 0, duration: 2.4, ease: "power2.out" }, 6.2);
        // Media 3 enters
        tl.to(media3Ref.current, { opacity: 1, scale: 1.0, xPercent: 0, duration: 2.6, ease: "power2.out" }, 6.0);

        // Buffer hold before unpin
        tl.to({}, { duration: 2.0 });
      });

      // MOBILE & TABLET PINNED CHOREOGRAPHY (< 1024px)
      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            start: "top top",
            end: "+=1700",
            scrub: 0.8,
            invalidateOnRefresh: true,
          }
        });

        gsap.set(text1Ref.current, { opacity: 1, y: 0 });
        gsap.set(text2Ref.current, { opacity: 0, y: 30 });
        gsap.set(text3Ref.current, { opacity: 0, y: 30 });

        gsap.set(media1Ref.current, { opacity: 1, scale: 1.0 });
        gsap.set(media2Ref.current, { opacity: 0, scale: 1.05 });
        gsap.set(media3Ref.current, { opacity: 0, scale: 1.05 });

        // Phase 1 -> 2
        tl.to(text1Ref.current, { opacity: 0, y: -20, duration: 2 }, 1);
        tl.to(media1Ref.current, { opacity: 0, scale: 0.96, duration: 2 }, 1);
        tl.to(text2Ref.current, { opacity: 1, y: 0, duration: 2 }, 2.5);
        tl.to(media2Ref.current, { opacity: 1, scale: 1.0, duration: 2 }, 2.5);

        // Phase 2 -> 3
        tl.to(text2Ref.current, { opacity: 0, y: -20, duration: 2 }, 5);
        tl.to(media2Ref.current, { opacity: 0, scale: 0.96, duration: 2 }, 5);
        tl.to(text3Ref.current, { opacity: 1, y: 0, duration: 2 }, 6.5);
        tl.to(media3Ref.current, { opacity: 1, scale: 1.0, duration: 2 }, 6.5);

        tl.to({}, { duration: 1.5 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInquiry = () => {
    if (navigateTo) {
      navigateTo("/contact");
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEvents = () => {
    if (navigateTo) {
      navigateTo("/event");
    }
  };

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full h-screen bg-[#071731] text-[#F1F5F9] overflow-hidden select-none border-b border-white/10"
    >
      <div className="w-full h-full max-w-[1520px] mx-auto px-4 sm:px-8 pt-20 pb-8 flex flex-col justify-between relative z-10">
        
        {/* Top Operational Coordinates & Progress Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-[#C8102E] font-semibold tracking-wider">02 / CORE OPERATIONAL MANDATES</span>
            <span className="text-white/30">•</span>
            <span className="text-white">TURNKEY EVENT ARCHITECTURE</span>
          </div>

          {/* Stepper Progress Bar */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-[11px]">
              <span ref={step1DotRef} className="text-white font-semibold transition-colors">01 SCENOGRAPHY</span>
              <span className="text-white/20">/</span>
              <span ref={step2DotRef} className="text-slate-400 transition-colors">02 PROTOCOL</span>
              <span className="text-white/20">/</span>
              <span ref={step3DotRef} className="text-slate-400 transition-colors">03 TELEPRESENCE</span>
            </div>

            <div className="w-24 sm:w-36 h-[2px] bg-white/15 relative overflow-hidden rounded-full">
              <div
                ref={progressLineRef}
                className="absolute inset-y-0 left-0 w-full bg-[#C8102E] origin-left"
              />
            </div>
          </div>
        </div>

        {/* Central Stage: Storytelling Parallax Arena */}
        <div className="relative flex-grow flex items-center justify-center my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full items-center">
            
            {/* Left Column: Progressive Editorial Dossiers (Stacking in same spot) */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] flex items-center">
              
              {/* DOSSIER 1: Scenography & Kinetic Staging */}
              <div ref={text1Ref} className="absolute inset-0 flex flex-col justify-center space-y-4 will-change-transform">
                <div className="font-mono text-xs text-[#C8102E] tracking-wider uppercase font-semibold">
                  DISCIPLINE 01 · SPATIAL PRODUCTION
                </div>
                <h2 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.05]">
                  Plenary Scenography &amp; <br />
                  <span className="font-editorial italic font-normal text-slate-300">
                    Kinetic Staging.
                  </span>
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                  Turnkey structural truss design, 360-degree projection mapping, and kinetic stage architecture engineered for convention halls across Southeast Asia, including ICE BSD City and JCC Senayan.
                </p>

                <div className="pt-3 grid grid-cols-2 gap-4 font-mono text-xs border-t border-white/10 max-w-md">
                  <div>
                    <div className="text-slate-400 text-[11px]">DEPLOYMENT SCALE</div>
                    <div className="text-white font-medium">Up to 45,000 SQM</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px]">TRUSS TELEMETRY</div>
                    <div className="text-white font-medium">Certified Load Bearing</div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4 font-mono text-xs">
                  <button
                    onClick={handleEvents}
                    className="btn-editorial-red text-xs py-2.5 px-5 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>View Delivered Plenaries</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* DOSSIER 2: Sovereign Diplomatic Protocol */}
              <div ref={text2Ref} className="absolute inset-0 flex flex-col justify-center space-y-4 will-change-transform">
                <div className="font-mono text-xs text-[#C8102E] tracking-wider uppercase font-semibold">
                  DISCIPLINE 02 · STATE &amp; VVIP LOGISTICS
                </div>
                <h2 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.05]">
                  Sovereign Protocol &amp; <br />
                  <span className="font-editorial italic font-normal text-slate-300">
                    Ministerial Conclaves.
                  </span>
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                  High-level inter-ministerial liaison, state precedence dining etiquette, bilateral accord ceremonies, and fortified security corridors with zero margin for operational friction.
                </p>

                <div className="pt-3 grid grid-cols-2 gap-4 font-mono text-xs border-t border-white/10 max-w-md">
                  <div>
                    <div className="text-slate-400 text-[11px]">CLEARANCE PROTOCOL</div>
                    <div className="text-white font-medium">Head of State &amp; Ministerial</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px]">BILATERAL CONDUITS</div>
                    <div className="text-white font-medium">18 Pan-ASEAN Delegations</div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4 font-mono text-xs">
                  <button
                    onClick={handleInquiry}
                    className="btn-editorial-red text-xs py-2.5 px-5 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Consult Protocol Secretariat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* DOSSIER 3: 4K Master Control & Telepresence */}
              <div ref={text3Ref} className="absolute inset-0 flex flex-col justify-center space-y-4 will-change-transform">
                <div className="font-mono text-xs text-[#C8102E] tracking-wider uppercase font-semibold">
                  DISCIPLINE 03 · BROADCAST TELEPRESENCE
                </div>
                <h2 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.05]">
                  4K Master Control &amp; <br />
                  <span className="font-editorial italic font-normal text-slate-300">
                    Hybrid Telepresence.
                  </span>
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                  Dedicated master control hubs, multi-camera live telecast switching, low-latency satellite uplinks, and encrypted voting telemetry for hybrid shareholder congresses and sovereign plenaries.
                </p>

                <div className="pt-3 grid grid-cols-2 gap-4 font-mono text-xs border-t border-white/10 max-w-md">
                  <div>
                    <div className="text-slate-400 text-[11px]">TRANSMISSION</div>
                    <div className="text-white font-medium">4K Native / Zero Latency</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px]">HYBRID CAPACITY</div>
                    <div className="text-white font-medium">50,000+ Synchronous Streams</div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4 font-mono text-xs">
                  <button
                    onClick={handleInquiry}
                    className="btn-editorial-red text-xs py-2.5 px-5 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Commission Broadcast Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Commanding Pinned Visual Canvas (Stacking in same spot) */}
            <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/10] max-h-[500px] w-full">
              
              {/* MEDIA 1: Scenography Truss */}
              <div
                ref={media1Ref}
                className="absolute inset-0 rounded overflow-hidden border border-white/15 bg-[#050F22] shadow-[0_20px_50px_rgba(0,0,0,0.6)] will-change-transform"
              >
                <img
                  src={scenographyTruss}
                  alt="Plenary Scenography & Kinetic Staging"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-slate-300">
                  <span>Indonesia Convention Exhibition (ICE) BSD City</span>
                  <span className="text-white font-semibold">HALL 1-3</span>
                </div>
              </div>

              {/* MEDIA 2: Protocol Pavilion */}
              <div
                ref={media2Ref}
                className="absolute inset-0 rounded overflow-hidden border border-white/15 bg-[#050F22] shadow-[0_20px_50px_rgba(0,0,0,0.6)] will-change-transform"
              >
                <img
                  src={protocolPavilion}
                  alt="Sovereign Protocol & Diplomatic Seating"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-slate-300">
                  <span>The Ritz-Carlton Jakarta · Grand Ballroom</span>
                  <span className="text-white font-semibold">VVIP DAIS</span>
                </div>
              </div>

              {/* MEDIA 3: Broadcast Uplink */}
              <div
                ref={media3Ref}
                className="absolute inset-0 rounded overflow-hidden border border-white/15 bg-[#050F22] shadow-[0_20px_50px_rgba(0,0,0,0.6)] will-change-transform"
              >
                <img
                  src={broadcastUplink}
                  alt="4K Telepresence Command & Broadcast Soundstage"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-slate-300">
                  <span>The City Tower 12F · Broadcast Soundstage</span>
                  <span className="text-white font-semibold">MASTER CONTROL</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Editorial Coordinates */}
        <div className="flex items-center justify-between font-mono text-xs text-slate-400 pt-2 border-t border-white/10">
          <div>DELIVERY SPEC: ISO 20121 EVENT SUSTAINABILITY</div>
          <div className="hidden sm:block">SCROLL DRIVES OPERATIONAL DISCOVERY</div>
          <div>JAKARTA · BALI · SURABAYA</div>
        </div>

      </div>
    </section>
  );
}
