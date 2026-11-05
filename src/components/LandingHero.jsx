import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Volume2, VolumeX } from "lucide-react";

export default function LandingHero({ navigateTo, onExploreWork, onLetsTalk }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Guarantee immediate autoplay on mount and user interaction fallback
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

  // Performance: Pause video decoding when scrolled out of view, resume when visible
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleAudio = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleExploreEvents = () => {
    if (onExploreWork) {
      onExploreWork();
    } else if (navigateTo) {
      navigateTo("/events");
    } else {
      const el = document.getElementById("featured-events") || document.getElementById("event");
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -70 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleConsult = () => {
    if (onLetsTalk) {
      onLetsTalk();
    } else if (navigateTo) {
      navigateTo("/contact");
    } else {
      const el = document.getElementById("contact") || document.getElementById("about");
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -70 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      data-nav-theme="dark"
      className="relative w-full h-[100dvh] min-h-[580px] sm:min-h-[640px] flex flex-col justify-between bg-[#071731] text-white pt-24 sm:pt-36 pb-14 sm:pb-16 border-b border-white/10 overflow-hidden select-none"
      aria-label="PT Tricatha Sempiternal Asia Hero"
    >
      {/* 1. Atmospheric Sovereign Event Background Video Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          className="w-full h-full object-cover object-center scale-[1.02] opacity-80 sm:opacity-85 transition-opacity duration-700"
        >
          <source src="/hero-bg-web.mp4" type="video/mp4" />
        </video>

        {/* Directional Scrim: keeps text legible while preserving authentic video clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/60 via-55% to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-black/30" />
        <div className="absolute top-0 left-0 right-0 h-28 sm:h-32 bg-gradient-to-b from-[#071731]/80 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10 w-full my-auto">
        <div className="max-w-5xl xl:max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-5 sm:space-y-8"
          >
            {/* Primary Monumental Headline */}
            <h1 className="font-heading text-2xl sm:text-5xl lg:text-[52px] xl:text-[60px] 2xl:text-[66px] font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.12] max-w-5xl">
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Strategic Business Events,
              </span>
              <span className="block mt-1 sm:mt-2 whitespace-normal lg:whitespace-nowrap">
                <span className="font-editorial italic font-normal text-slate-200">
                  Sovereign Plenaries,
                </span>{" "}
                &amp; Monumental Expos.
              </span>
            </h1>

            {/* Authoritative Subtitle */}
            <p className="font-sans text-sm sm:text-lg lg:text-xl text-slate-200/90 font-normal leading-relaxed max-w-2xl sm:max-w-3xl">
              PT Tricatha Sempiternal Asia delivers end-to-end event strategy, international trade expositions, ministerial conferences, and high-stakes corporate assemblies across Indonesia and the Southeast Asian corridor.
            </p>

            {/* Direct Action Triggers */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <button
                type="button"
                onClick={handleExploreEvents}
                className="btn-editorial-red text-xs sm:text-sm py-3.5 px-7 cursor-pointer flex items-center justify-center gap-2 min-h-[48px] touch-manipulation active:scale-[0.99]"
              >
                <span>Explore Events Archive</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleConsult}
                className="btn-editorial-navy text-xs sm:text-sm py-3.5 px-7 cursor-pointer flex items-center justify-center gap-2 min-h-[48px] touch-manipulation active:scale-[0.99]"
              >
                <span>Consult Our Team</span>
                <Calendar className="w-4 h-4 text-slate-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Audio Toggle Pill */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-20">
        <button
          type="button"
          onClick={toggleAudio}
          className="px-3 sm:px-3.5 py-1.5 rounded-full bg-[#0A1F44]/90 hover:bg-[#0E2552] active:scale-95 text-white transition-all flex items-center gap-1.5 sm:gap-2 border border-white/15 hover:border-white/30 cursor-pointer text-[10px] sm:text-[11px] font-mono shadow-sm touch-manipulation min-h-[36px]"
          title={isMuted ? "Unmute Background Audio" : "Mute Background Audio"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
          <span>{isMuted ? "Audio Off" : "Audio On"}</span>
        </button>
      </div>
    </section>
  );
}
