import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown, Volume2, VolumeX } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EditorialHero({ onExploreWork, onLetsTalk }) {
  const sceneRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoInnerRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);
  const scrollPromptRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);

  // Guarantee immediate autoplay on mount and user gesture fallback
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const handleFirstGesture = () => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
            window.removeEventListener("scroll", handleFirstGesture);
            window.removeEventListener("touchstart", handleFirstGesture);
            window.removeEventListener("click", handleFirstGesture);
          };
          window.addEventListener("scroll", handleFirstGesture, { once: true, passive: true });
          window.addEventListener("touchstart", handleFirstGesture, { once: true, passive: true });
          window.addEventListener("click", handleFirstGesture, { once: true, passive: true });
        });
      }
    }
  }, []);

  // TRUE SINGLE FULL-VIEWPORT COMPOSITION + PINNED SCROLL TRANSFORMATION:
  // 1. Initial State: The entire hero fits into one 100vh viewport.
  //    Video occupies the large, commanding central area. Surrounding negative space.
  //    No separate text section below it; company name and description are hidden.
  // 2. User Scrolls: The hero is PINNED.
  // 3. Animation: Video shifts and reframes via parallax (moves right & scales subtly).
  // 4. "TRICATHA SEMPITERNAL ASIA" begins appearing within the SAME composition.
  // 5. Company description progressively appears after the company name.
  // 6. Video, company name, and description move at different parallax speeds.
  // 7. Video transitions from dominant element into supporting the company identity.
  // 8. Final state = Video on right + Company name & description on left as one composition.
  // 9. After animation completes, scroll lock releases and continues naturally into next section.
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sceneRef.current) return;

      const mm = gsap.matchMedia();

      // DESKTOP PINNED CHOREOGRAPHY (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sceneRef.current,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            start: "top top",
            end: "+=2200", // Pinned scroll track distance
            scrub: 0.8,
            invalidateOnRefresh: true,
          }
        });

        // Initial State (Scroll Progress = 0): Dominant widescreen video
        gsap.set(videoWrapperRef.current, {
          width: "86vw",
          maxWidth: "1440px",
          height: "72vh",
          xPercent: 0,
          yPercent: 0,
          scale: 1.0,
          transformOrigin: "center center"
        });
        gsap.set(titleRef.current, {
          xPercent: -30,
          opacity: 0
        });
        gsap.set(descRef.current, {
          yPercent: 30,
          opacity: 0
        });
        gsap.set(actionsRef.current, {
          yPercent: 30,
          opacity: 0
        });
        gsap.set(scrollPromptRef.current, {
          opacity: 1,
          y: 0
        });

        // 1. Initial scroll tick (0 -> 1.5): Scroll prompt fades out
        tl.to(scrollPromptRef.current, {
          opacity: 0,
          y: -12,
          duration: 1.2,
          ease: "power2.out"
        }, 0);

        // 2. Video Parallax & Re-framing: Shifts HORIZONTALLY to the right
        tl.to(videoWrapperRef.current, {
          width: "48vw",
          maxWidth: "760px",
          height: "64vh",
          xPercent: 25,
          scale: 0.98,
          duration: 5.0,
          ease: "power2.inOut"
        }, 1.0);

        // Internal video subtle counter-parallax
        tl.to(videoInnerRef.current, {
          scale: 1.06,
          duration: 5.0,
          ease: "none"
        }, 1.0);

        // 3. Company Name Reveal: Moves HORIZONTALLY from Left -> Right
        tl.to(titleRef.current, {
          xPercent: 0,
          opacity: 1,
          duration: 3.8,
          ease: "power2.out"
        }, 1.8);

        // 4. Company Description Reveal: Progressively appears after the title
        tl.to(descRef.current, {
          yPercent: 0,
          opacity: 1,
          duration: 3.5,
          ease: "power2.out"
        }, 3.5);

        // 5. Action Buttons Settle
        tl.to(actionsRef.current, {
          yPercent: 0,
          opacity: 1,
          duration: 2.2,
          ease: "power2.out"
        }, 5.2);

        // 6. Buffer Hold (8.0 -> 10.0):
        // Final unified composition is held stable before releasing pin into next section
      });

      // MOBILE & TABLET PINNED CHOREOGRAPHY (< 1024px)
      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sceneRef.current,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            start: "top top",
            end: "+=1600",
            scrub: 0.8,
            invalidateOnRefresh: true,
          }
        });

        gsap.set(videoWrapperRef.current, {
          width: "92vw",
          height: "46vh",
          yPercent: 0,
          scale: 1.0
        });
        gsap.set(titleRef.current, { yPercent: 50, opacity: 0 });
        gsap.set(descRef.current, { yPercent: 60, opacity: 0 });
        gsap.set(actionsRef.current, { yPercent: 40, opacity: 0 });
        gsap.set(scrollPromptRef.current, { opacity: 1, y: 0 });

        // Scroll prompt fades
        tl.to(scrollPromptRef.current, { opacity: 0, duration: 1.0 }, 0);

        // Video shifts up slightly
        tl.to(videoWrapperRef.current, {
          height: "38vh",
          yPercent: -10,
          scale: 0.98,
          duration: 4.0,
          ease: "power2.out"
        }, 0.8);

        // Title reveals beneath video
        tl.to(titleRef.current, {
          yPercent: 0,
          opacity: 1,
          duration: 3.5,
          ease: "power2.out"
        }, 1.8);

        // Description reveals beneath title
        tl.to(descRef.current, {
          yPercent: 0,
          opacity: 1,
          duration: 3.2,
          ease: "power2.out"
        }, 3.5);

        // Actions settle
        tl.to(actionsRef.current, {
          yPercent: 0,
          opacity: 1,
          duration: 2.0,
          ease: "power2.out"
        }, 5.2);
      });
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleScrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -74 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      ref={sceneRef}
      id="home"
      className="relative w-full h-screen bg-[#071731] text-[#F1F5F9] overflow-hidden select-none"
    >
      {/* 
        ONE SINGLE FULL-VIEWPORT COMPOSITION
        Top: Navbar (fixed)
        Middle: Pinned Arena containing:
          - Dominant Central TSA Video (transforms and shifts to right on scroll)
          - Progressive Company Name & Description (revealed from left on scroll)
        Bottom: Restrained Scroll Prompt (fades out on scroll)
      */}
      <div className="w-full h-full max-w-[1520px] mx-auto px-4 sm:px-8 pt-[84px] pb-6 flex flex-col justify-between relative z-10">

        {/* Top Minimal Corporate Coordinates */}
        <div className="flex items-center justify-between font-mono text-xs text-slate-400 pointer-events-none">
          <div className="text-white font-semibold tracking-wider">
            PT TRICATHA SEMPITERNAL ASIA
          </div>
          <div className="hidden sm:block">
            JAKARTA · SOUTHEAST ASIA
          </div>
        </div>

        {/* Core Transformation Arena */}
        <div className="relative flex-grow flex items-center justify-center my-auto">

          {/* 
            A. TSA VIDEO CANVAS
            Initial State: Dominant center of viewport.
            Scroll State: Shifts via parallax to the right, re-framing to support company identity.
          */}
          <div
            ref={videoWrapperRef}
            className="absolute z-10 rounded-sm overflow-hidden border border-white/15 bg-[#050F22] shadow-[0_24px_64px_rgba(0,0,0,0.7)] will-change-transform flex items-center justify-center"
          >
            <div ref={videoInnerRef} className="w-full h-full relative overflow-hidden will-change-transform">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/hero-poster.jpg"
                src="/hero-bg.mp4"
                className="w-full h-full object-cover object-center scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/70 via-transparent to-black/20 pointer-events-none" />

              {/* Sound Toggle */}
              <button
                type="button"
                onClick={toggleAudio}
                className="absolute bottom-4 right-4 z-30 px-3 py-1.5 rounded-sm bg-[#071731]/90 hover:bg-[#0E2552] text-white transition-colors flex items-center gap-2 border border-white/20 cursor-pointer text-[10px] font-mono shadow-lg"
                title={isMuted ? "Unmute Background Audio" : "Mute Background Audio"}
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                )}
                <span>{isMuted ? "Sound Off" : "Sound On"}</span>
              </button>
            </div>
          </div>

          {/* 
            B. COMPANY IDENTITY & DESCRIPTION
            Reveals progressively FROM the existing hero composition on the left side
          */}
          <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[48%] z-20 flex flex-col justify-center pointer-events-none">
            
            {/* 1. Large Typography Company Name */}
            <div ref={titleRef} className="space-y-3 will-change-transform">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[58px] xl:text-[66px] font-bold text-white tracking-tight leading-[1.02]">
                TRICATHA <br />
                <span className="text-slate-100">SEMPITERNAL</span> <br />
                <span className="font-editorial italic font-normal text-slate-300">
                  ASIA.
                </span>
              </h1>
            </div>

            {/* 2. Company Description */}
            <div ref={descRef} className="mt-4 sm:mt-5 space-y-3 max-w-lg will-change-transform">
              <p className="font-sans text-sm sm:text-base lg:text-[17px] text-slate-300 font-normal leading-relaxed">
                PT Tricatha Sempiternal Asia delivers end-to-end event strategy, international trade exhibitions, ministerial conferences, and high-stakes corporate experiences across Southeast Asia.
              </p>

              <div className="font-mono text-xs text-slate-400 space-y-0.5 pt-2">
                <div>SUDIRMAN PARK · CENTRAL JAKARTA</div>
                <div className="text-white font-medium">SOVEREIGN PROTOCOL &amp; BROADCAST PRODUCTION</div>
              </div>
            </div>

            {/* 3. Action Links */}
            <div ref={actionsRef} className="mt-6 flex items-center gap-4 font-mono text-xs pointer-events-auto will-change-transform">
              <button
                type="button"
                onClick={onExploreWork ? onExploreWork : () => handleScrollTo("#event")}
                className="btn-editorial-red text-xs py-2.5 px-5 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Explore Events</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={onLetsTalk ? onLetsTalk : () => handleScrollTo("#contact")}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer py-2 px-3 border border-white/15 rounded-sm"
              >
                <span>Consult Secretariat</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Restrained Scroll Prompt */}
        <div
          ref={scrollPromptRef}
          className="text-center font-mono text-[11px] uppercase tracking-[0.25em] text-slate-400 pointer-events-none will-change-transform flex items-center justify-center gap-2"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#C8102E] animate-bounce" />
        </div>

      </div>
    </div>
  );
}
