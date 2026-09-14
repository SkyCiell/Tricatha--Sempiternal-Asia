import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Animated number counter with prefix/suffix formatting triggered on scroll
 */
export default function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 1.8,
  className = ""
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [currentValue, setCurrentValue] = useState(0);

  // Parse numeric target from string (e.g. 18, 450, 45000, 100)
  const numericTarget = typeof target === "number" ? target : parseFloat(String(target).replace(/[^0-9.]/g, "")) || 0;

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out expo curve for smooth cinematic counter feel
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = Math.round(numericTarget * easeOut);

      setCurrentValue(val);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numericTarget, duration]);

  // Format with commas if target >= 1000
  const formattedNumber = numericTarget >= 1000
    ? currentValue.toLocaleString()
    : currentValue;

  return (
    <span ref={ref} className={`tabular-nums inline-block ${className}`}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}
