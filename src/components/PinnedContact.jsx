import React, { useRef, useEffect } from "react";
import { ArrowUpRight, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import broadcastUplink from "../assets/illustrations/broadcast-uplink.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedContact({ navigateTo }) {
  const containerRef = useRef(null);
  const mediaRef = useRef(null);
  const mediaInnerRef = useRef(null);
  const titleRef = useRef(null);
  const detailsRef = useRef(null);
  const actionsRef = useRef(null);
  const scrollPromptRef = useRef(null);

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

        // 1. Initial State: Visual starts centered and commanding (86vw × 68vh)
        gsap.set(mediaRef.current, {
          width: "86vw",
          maxWidth: "1400px",
          height: "68vh",
          xPercent: 0,
          scale: 1.0,
          transformOrigin: "center center"
        });

        // 2. Large CONTACT typography starts hidden to the LEFT
        gsap.set(titleRef.current, {
          xPercent: -45,
          opacity: 0
        });

        // 3. Supporting information starts below
        gsap.set(detailsRef.current, {
          yPercent: 35,
          opacity: 0
        });

        // 4. Action buttons start below
        gsap.set(actionsRef.current, {
          yPercent: 30,
          opacity: 0
        });

        gsap.set(scrollPromptRef.current, { opacity: 1, y: 0 });

        // Scroll prompt fades out early
        tl.to(scrollPromptRef.current, { opacity: 0, y: -10, duration: 1.0 }, 0);

        // SLOW TRANSFORMATION:
        // A. Visual moves slightly RIGHT and reframes
        tl.to(mediaRef.current, {
          width: "48vw",
          maxWidth: "740px",
          height: "62vh",
          xPercent: 26,
          scale: 0.98,
          duration: 5.5,
          ease: "power2.inOut"
        }, 0.8);

        // Subtle media counter-parallax
        tl.to(mediaInnerRef.current, {
          scale: 1.05,
          duration: 5.5,
          ease: "none"
        }, 0.8);

        // B. Large CONTACT typography enters from LEFT
        tl.to(titleRef.current, {
          xPercent: 0,
          opacity: 1,
          duration: 4.2,
          ease: "power2.out"
        }, 1.5);

        // C. Supporting information reveals progressively
        tl.to(detailsRef.current, {
          yPercent: 0,
          opacity: 1,
          duration: 3.5,
          ease: "power2.out"
        }, 3.0);

        // D. Action buttons settle into final composition
        tl.to(actionsRef.current, {
          yPercent: 0,
          opacity: 1,
          duration: 2.5,
          ease: "power2.out"
        }, 4.5);

        // E. Buffer hold before unpin into footer/end
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
            end: "+=1600",
            scrub: 0.8,
            invalidateOnRefresh: true,
          }
        });

        gsap.set(mediaRef.current, { width: "92vw", height: "44vh", yPercent: 0, scale: 1.0 });
        gsap.set(titleRef.current, { yPercent: 40, opacity: 0 });
        gsap.set(detailsRef.current, { yPercent: 50, opacity: 0 });
        gsap.set(actionsRef.current, { yPercent: 30, opacity: 0 });

        tl.to(mediaRef.current, { height: "36vh", yPercent: -10, scale: 0.98, duration: 3.5 }, 0.5);
        tl.to(titleRef.current, { yPercent: 0, opacity: 1, duration: 3.0 }, 1.5);
        tl.to(detailsRef.current, { yPercent: 0, opacity: 1, duration: 2.8 }, 2.8);
        tl.to(actionsRef.current, { yPercent: 0, opacity: 1, duration: 2.0 }, 4.2);

        tl.to({}, { duration: 1.5 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleContactPage = () => {
    if (navigateTo) {
      navigateTo("/contact");
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative w-screen h-screen bg-[#071731] text-[#F1F5F9] overflow-hidden select-none border-b border-white/10"
    >
      <div className="w-full h-full max-w-[1520px] mx-auto px-4 sm:px-8 pt-20 pb-8 flex flex-col justify-between relative z-10">
        
        {/* Top Minimal Corporate Tracker */}
        <div className="flex items-center justify-between font-mono text-xs text-slate-400 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-[#C8102E] font-semibold tracking-wider">05 / INITIATE MANDATE</span>
            <span className="text-white/30">•</span>
            <span className="text-white">EXECUTIVE SECRETARIAT</span>
          </div>
          <div className="hidden sm:block">
            SLOWER TRANSFORMATION · SOUTHEAST ASIA OPERATIONS
          </div>
        </div>

        {/* Central Stage: Pinned Contact Transformation Arena */}
        <div className="relative flex-grow flex items-center justify-center my-auto">
          
          {/* A. COMMANDING VISUAL CANVAS (Initial dominant center, shifts right) */}
          <div
            ref={mediaRef}
            className="absolute z-10 rounded overflow-hidden border border-white/15 bg-[#050F22] shadow-[0_24px_64px_rgba(0,0,0,0.7)] will-change-transform flex items-center justify-center"
          >
            <div ref={mediaInnerRef} className="w-full h-full relative overflow-hidden will-change-transform">
              <img
                src={broadcastUplink}
                alt="TSA Executive Command & Telepresence Hub"
                className="w-full h-full object-cover object-center scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/40 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>The City Tower 12F · Soundstage Command</span>
                </span>
                <span className="text-white font-semibold">
                  24/7 ACTIVE SUMMIT CLEARANCE
                </span>
              </div>
            </div>
          </div>

          {/* B. SECRETARIAT TYPOGRAPHY & CORPORATE COORDINATES (Reveals from left) */}
          <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[48%] z-20 flex flex-col justify-center pointer-events-none">
            
            {/* Title */}
            <div ref={titleRef} className="space-y-3 will-change-transform">
              <span className="font-mono text-xs text-[#C8102E] tracking-wider uppercase font-semibold">
                COMMISSION EVENT PRODUCTION
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.02]">
                Consult The <br />
                <span className="text-slate-100">Executive</span> <br />
                <span className="font-editorial italic font-normal text-slate-300">
                  Secretariat.
                </span>
              </h2>
            </div>

            {/* Scannable Coordinates */}
            <div ref={detailsRef} className="mt-5 space-y-4 max-w-lg will-change-transform">
              <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Whether structuring an inter-ministerial bilateral summit, a 50,000-delegate industrial exhibition, or a sovereign state banquet, our executive units deploy turnkey operational infrastructure with zero margin for error.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs border-t border-white/10">
                <div className="space-y-1">
                  <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#C8102E]" />
                    <span>CENTRAL BUREAU</span>
                  </div>
                  <div className="text-white font-medium">Sudirman Park, Jakarta</div>
                </div>

                <div className="space-y-1">
                  <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-[#C8102E]" />
                    <span>DISPATCH TELEPHONE</span>
                  </div>
                  <div className="text-white font-medium">+62 21 2358 4500</div>
                </div>

                <div className="space-y-1">
                  <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#C8102E]" />
                    <span>OFFICIAL DOSSIER</span>
                  </div>
                  <div className="text-white font-medium">secretariat@tricatha.com</div>
                </div>

                <div className="space-y-1">
                  <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#C8102E]" />
                    <span>OPERATING PROTOCOL</span>
                  </div>
                  <div className="text-white font-medium">24/7 Summit Response</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div ref={actionsRef} className="mt-6 flex flex-wrap items-center gap-4 font-mono text-xs pointer-events-auto will-change-transform">
              <button
                type="button"
                onClick={handleContactPage}
                className="btn-editorial-red text-xs py-3 px-6 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Initiate Mandate Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handleContactPage}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer py-2.5 px-4 border border-white/15 rounded-sm inline-flex items-center gap-2"
              >
                <span>View Bureau Map &amp; Full Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Coordinates Strip */}
        <div className="flex items-center justify-between font-mono text-xs text-slate-400 pt-2 border-t border-white/10">
          <div>GOVERNANCE: PT TRICATHA SEMPITERNAL ASIA</div>
          <div className="hidden sm:block">SUDIRMAN PARK · CENTRAL JAKARTA</div>
          <div>ESTABLISHED 2018 · PAN-ASEAN CORRIDOR</div>
        </div>

      </div>
    </section>
  );
}
