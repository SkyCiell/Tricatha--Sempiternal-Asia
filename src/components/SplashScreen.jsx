import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emblemTSA from "../assets/tsa-emblem-transparent.png";

/**
 * SplashScreen Component for PT Tricatha Sempiternal Asia (TSA)
 * 
 * Refinements:
 * - Logo emblem & company typography scaled up for stronger presence.
 * - Staggered entrance animation for logo and company name.
 * - Minimal, ultra-clean signature red (#C8102E) hairline progress line below the title.
 * - Fullscreen curtain exit from BOTTOM TO TOP (translateY: -100%) with custom luxury easing [0.76, 0, 0.24, 1].
 * - Website underneath remains completely static at y: 0.
 * - Respects prefers-reduced-motion for accessibility.
 */
export default function SplashScreen({ onFinish }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Ensure page is pinned to top while splash is active
    window.scrollTo(0, 0);

    // Detect system preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    // Presentation duration before exit animation begins
    const displayDuration = mediaQuery.matches ? 1000 : 2000;
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, displayDuration);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      clearTimeout(timer);
    };
  }, [onFinish]);

  // Handle optional user click to dismiss immediately
  const handleDismiss = () => {
    if (onFinish) onFinish();
  };

  return (
    <motion.div
      key="tsa-splash-curtain"
      role="status"
      aria-label="PT Tricatha Sempiternal Asia"
      initial={{ y: "0%", opacity: 1 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "-100%", opacity: 1 }}
      transition={{
        duration: prefersReducedMotion ? 0.35 : 0.95,
        ease: prefersReducedMotion ? "easeInOut" : [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-[99999] bg-[#071731] flex flex-col items-center justify-center cursor-default select-none overflow-hidden"
      style={{ willChange: "transform" }}
      onClick={handleDismiss}
    >
      {/* Central Visual Group */}
      <motion.div
        exit={{ y: prefersReducedMotion ? 0 : -30, opacity: 0.95 }}
        transition={{
          duration: prefersReducedMotion ? 0.2 : 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="flex flex-col items-center text-center px-6"
      >
        {/* TSA Official Logo Icon - Enlarged & Proportional */}
        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.92, y: prefersReducedMotion ? 0 : 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.2 : 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center"
        >
          <img
            src={emblemTSA}
            alt="PT Tricatha Sempiternal Asia"
            className="w-full h-full object-contain pointer-events-none"
            loading="eager"
            decoding="sync"
          />
        </motion.div>

        {/* Company Name - Prominent & Authoritative */}
        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.2 : 0.65,
            delay: prefersReducedMotion ? 0 : 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-heading font-bold text-sm sm:text-base md:text-xl text-white tracking-[0.22em] sm:tracking-[0.28em] uppercase mt-6 sm:mt-7"
        >
          TRICATHA SEMPITERNAL ASIA
        </motion.h1>

        {/* Minimal Red Hairline Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: prefersReducedMotion ? 0 : 0.35,
          }}
          className="w-32 sm:w-44 h-[2px] bg-white/10 rounded-full mt-5 overflow-hidden"
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: prefersReducedMotion ? 0.4 : 1.3,
              delay: prefersReducedMotion ? 0 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full bg-[#C8102E]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
