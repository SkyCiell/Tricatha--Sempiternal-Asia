import React, { useRef, useEffect, useState } from "react";
import plenaryPhoto from "../assets/DSC08824.JPG";

export default function ScrollExpand({
  image = plenaryPhoto,
  title = "Orchestrating High-Stakes Assemblies Across Southeast Asia",
  subtitle = "From closed-door bilateral dialogues at The City Tower to monumental ministerial plenaries, TSA unites corporate strategy, sovereign protocol, and spatial scenography.",
  tag = "Jakarta Plenary Operations · Head-of-State Standard",
  startWidth = 42,
  startHeight = 58,
  startRadius = 22,
  endRadius = 0,
  mediaZoom = 1.28,
  scrollDistance = 1.2,
  holdDistance = 0.3,
  smoothing = 0.09,
  overlayScrim = 0.38
}) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", checkMobile);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let animationFrameId;
    let currentProgress = 0;
    let targetProgress = 0;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableDistance = rect.height - window.innerHeight;

      if (totalScrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, scrolled / totalScrollableDistance));
      targetProgress = rawProgress;
    };

    const updateLoop = () => {
      currentProgress += (targetProgress - currentProgress) * smoothing;
      setProgress(currentProgress);
      animationFrameId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [smoothing, prefersReducedMotion]);

  // If reduced motion is requested, render static full bleed
  if (prefersReducedMotion) {
    return (
      <section className="relative w-full py-24 bg-[#0A1F44] text-white">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden border border-white/15 shadow-xl">
            <img src={image} alt="TSA Assembly" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0A1F44]/40" />
            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
              <span className="font-mono text-xs text-[#C8102E] uppercase tracking-wider mb-2">
                {tag}
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-medium text-white max-w-2xl leading-tight">
                {title}
              </h2>
              <p className="text-sm text-slate-300 max-w-xl mt-2 leading-relaxed font-normal">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Calculate expansion progress (0 to 1 over scrollDistance)
  // holdDistance is the portion at 1 where the content is held full bleed
  const expansionPortion = scrollDistance / (scrollDistance + holdDistance);
  const expansionProgress = Math.min(1, progress / expansionPortion);

  // Responsive start width
  const responsiveStartWidth = isMobile ? 88 : startWidth;
  const responsiveStartHeight = isMobile ? 65 : startHeight;

  // Interpolated values
  const currentWidth = responsiveStartWidth + (100 - responsiveStartWidth) * expansionProgress;
  const currentHeight = responsiveStartHeight + (100 - responsiveStartHeight) * expansionProgress;
  const currentRadius = startRadius * (1 - expansionProgress) + endRadius * expansionProgress;
  const currentZoom = mediaZoom - (mediaZoom - 1) * expansionProgress;

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#FFFFFF]"
      style={{
        height: `${(1 + scrollDistance + holdDistance) * 100}vh`
      }}
    >
      {/* Pinned Viewport Frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#FFFFFF]">
        
        {/* Expanding Media Container */}
        <div
          className="relative overflow-hidden shadow-2xl transition-shadow duration-300"
          style={{
            width: `${currentWidth}%`,
            height: `${currentHeight}%`,
            borderRadius: `${currentRadius}px`
          }}
        >
          {/* Background Image */}
          <img
            src={image}
            alt="TSA High Stakes Plenary Staging"
            className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
            style={{
              transform: `scale(${currentZoom})`
            }}
          />

          {/* Subtle Readability Scrim (restrained dark navy, no neon/glassmorphism) */}
          <div
            className="absolute inset-0 bg-[#0A1F44] pointer-events-none transition-opacity duration-200"
            style={{
              opacity: overlayScrim + expansionProgress * 0.12
            }}
          />

          {/* Editorial Content Overlay */}
          <div className="absolute inset-0 p-6 sm:p-12 lg:p-16 flex flex-col justify-between z-10 text-white">
            
            {/* Top Corner Meta Tag */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xs border border-white/20 rounded text-[11px] font-mono tracking-widest text-white uppercase">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>{tag}</span>
              </span>

              <span className="hidden sm:inline-block font-mono text-xs text-white/70">
                SCROLL TO IMMERSE
              </span>
            </div>

            {/* Middle / Bottom Headline & Supporting Content */}
            <div className="max-w-3xl space-y-4">
              <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-[1.18]">
                {title}
              </h2>

              {/* Supporting content revealed as it reaches full bleed */}
              <div
                className="transition-all duration-300 space-y-3"
                style={{
                  opacity: Math.max(0, (expansionProgress - 0.5) * 2),
                  transform: `translateY(${(1 - expansionProgress) * 16}px)`
                }}
              >
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
                  {subtitle}
                </p>

                <div className="pt-2 flex items-center gap-6 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C8102E] font-semibold">18+</span>
                    <span>Sovereign Mandates</span>
                  </div>
                  <span className="text-white/30">•</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#C8102E] font-semibold">45K+</span>
                    <span>Summit Attendees</span>
                  </div>
                  <span className="text-white/30 hidden sm:inline">•</span>
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="text-white">Zero Margin for Error</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
