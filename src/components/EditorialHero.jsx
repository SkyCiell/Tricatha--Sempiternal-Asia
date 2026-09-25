import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Volume2, VolumeX } from "lucide-react";

export default function EditorialHero({ onExploreWork, onLetsTalk }) {
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
          // If browser policy delays autoplay without gesture, play on first touch/scroll
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

  const toggleAudio = () => {
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
        window.__lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-[94vh] flex flex-col justify-between bg-[#071731] text-white pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-white/10 overflow-hidden">
      {/* 1. Atmospheric Sovereign Event Background Video Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          src="/hero-bg.mp4"
          className="w-full h-full object-cover object-center scale-[1.02] opacity-80 sm:opacity-85 transition-opacity duration-700"
        />

        {/* Directional Scrim: keeps text legible while preserving authentic video clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/60 via-55% to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-black/30" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#071731]/80 to-transparent" />
      </div>

      {/* Subtle Ambient Red Glow for brand warmth */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#C8102E]/8 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Content Area */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10 w-full my-auto">
        <div className="max-w-5xl xl:max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Primary Monumental Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[52px] xl:text-[60px] 2xl:text-[66px] font-bold text-white tracking-tight leading-[1.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] max-w-5xl">
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
            <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl sm:max-w-3xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              PT Tricatha Sempiternal Asia delivers end-to-end event strategy, international trade expositions, ministerial conferences, and high-stakes corporate assemblies across Indonesia and the Southeast Asian corridor.
            </p>

            {/* Direct Action Triggers */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onExploreWork ? onExploreWork : () => handleScrollTo("#projects")}
                className="btn-editorial-red text-xs sm:text-sm py-3.5 px-7 cursor-pointer flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Explore Events Archive</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onLetsTalk ? onLetsTalk : () => handleScrollTo("#contact")}
                className="btn-editorial-navy text-xs sm:text-sm py-3.5 px-7 cursor-pointer flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Consult Our Team</span>
                <Calendar className="w-4 h-4 text-slate-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Audio Toggle Pill */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20">
        <button
          onClick={toggleAudio}
          className="px-3.5 py-1.5 rounded-full bg-[#071731]/80 hover:bg-[#071731] backdrop-blur-md text-white transition-all flex items-center gap-2 border border-white/20 hover:border-white/40 cursor-pointer text-xs font-mono shadow-xl"
          title={isMuted ? "Unmute Background Audio" : "Mute Background Audio"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
          <span className="text-[11px]">{isMuted ? "Audio Off" : "Audio On"}</span>
        </button>
      </div>
    </section>
  );
}
