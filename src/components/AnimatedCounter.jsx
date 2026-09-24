import React, { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

/**
 * AnimatedCounter counts up smoothly from `from` to `to`
 * when the element scrolls into view for the first time.
 */
export default function AnimatedCounter({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  formatter,
  className = ""
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    // Parse target and start numbers safely
    const target = typeof to === "number" ? to : parseFloat(String(to).replace(/[^0-9.-]+/g, "")) || 0;
    const start = typeof from === "number" ? from : parseFloat(String(from).replace(/[^0-9.-]+/g, "")) || 0;

    let timeoutId;
    let controls;

    timeoutId = setTimeout(() => {
      controls = animate(start, target, {
        duration,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo: lively launch, buttery deceleration
        onUpdate: (latest) => {
          setCount(Math.round(latest));
        }
      });
    }, delay * 1000);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (controls) controls.stop();
    };
  }, [isInView, to, from, duration, delay]);

  const formattedOutput = formatter ? formatter(count) : count.toLocaleString();

  return (
    <span ref={ref} className={className}>
      {formattedOutput}
    </span>
  );
}
