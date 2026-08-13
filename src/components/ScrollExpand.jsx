import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MoveRight } from "lucide-react";
import heroVideo from "../assets/0805.mp4";

export default function ScrollExpand({ scrollToSection }) {
  const containerRef = useRef(null);

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth scroll animations
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [0.6, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, -10]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-[#071A2B] overflow-hidden flex items-center justify-center">
      
      {/* Full-Width Background Video (Layer z-0) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/85 to-[#071A2B]/60 z-10"
        />
      </div>

      {/* Main Narrative Content Overlay (Layer z-30) */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-30 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-20 w-full flex flex-col justify-between min-h-[85vh]"
      >
        {/* Middle Main Headline */}
        <div className="my-auto py-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter leading-[1.08] sm:leading-[1.04] max-w-5xl mb-6 flex flex-col gap-2 z-30 relative"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[#F4F6F2]"
            >
              STRATEGY.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[#155EEF]"
            >
              TECHNOLOGY.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[#42D3A5]"
            >
              CREATIVITY. IMPACT.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-200 text-sm sm:text-base md:text-lg font-mono max-w-2xl leading-relaxed"
          >
            Tricatha Sempiternal Asia works at the intersection of sovereign advocacy, custom software engineering, broadcast media, and experiential summits.
          </motion.p>
        </div>

        {/* Bottom Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-end pt-6 border-t border-white/15 mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection("about")}
            className="px-8 py-4 bg-[#155EEF] hover:bg-[#087F5B] text-white font-heading font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-colors duration-300 shadow-2xl flex items-center gap-2 cursor-pointer z-50"
          >
            <span>EXPLORE TSA</span>
            <MoveRight className="w-4 h-4 text-[#42D3A5]" />
          </motion.button>
        </motion.div>
      </motion.div>

    </div>
  );
}
