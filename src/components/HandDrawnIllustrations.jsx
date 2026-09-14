import React from "react";
import { motion } from "framer-motion";

/**
 * Hand-drawn animated scribble loop that circles a word or phrase
 */
export function HandDrawnCircle({
  children,
  className = "",
  color = "#C8102E",
  delay = 0.3
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        viewBox="0 0 240 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none z-0 overflow-visible"
      >
        <motion.path
          d="M 12,42 C 16,18 70,8 140,9 C 210,10 232,24 230,46 C 228,68 180,74 110,73 C 40,72 8,62 10,40 C 12,22 55,14 115,12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.85 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{
            pathLength: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.3, delay }
          }}
        />
      </svg>
    </span>
  );
}

/**
 * Hand-drawn animated architectural sketch arrow
 */
export function HandDrawnArrow({
  className = "",
  color = "#C8102E",
  delay = 0.5
}) {
  return (
    <svg
      width="44"
      height="36"
      viewBox="0 0 44 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
    >
      {/* Arrow stem curve */}
      <motion.path
        d="M 6,6 C 14,8 24,14 28,26"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
      />
      {/* Arrowhead left barb */}
      <motion.path
        d="M 20,22 L 28,26"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: delay + 0.5, ease: "easeOut" }}
      />
      {/* Arrowhead right barb */}
      <motion.path
        d="M 28,26 L 31,18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: delay + 0.5, ease: "easeOut" }}
      />
    </svg>
  );
}

/**
 * Hand-drawn wavy underline that animates under headings
 */
export function HandDrawnUnderline({
  className = "",
  color = "#C8102E",
  delay = 0.4
}) {
  return (
    <svg
      viewBox="0 0 300 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-[280px] h-3 pointer-events-none ${className}`}
    >
      <motion.path
        d="M 3,9 C 45,5 90,13 135,9 C 180,5 225,12 270,8 C 285,7 295,9 298,9"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.9 }}
        viewport={{ once: true }}
        transition={{
          pathLength: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.2, delay }
        }}
      />
    </svg>
  );
}

/**
 * Delicate rotating architectural compass rose in background
 */
export function ArchitecturalCompass({
  className = "",
  size = 120,
  opacity = 0.12
}) {
  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size, opacity }}
      animate={{ rotate: 360 }}
      transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full stroke-[#0A1F44]"
      >
        {/* Outer and inner degree rings */}
        <circle cx="80" cy="80" r="76" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="80" cy="80" r="68" strokeWidth="0.75" />
        <circle cx="80" cy="80" r="44" strokeWidth="0.75" />
        <circle cx="80" cy="80" r="6" strokeWidth="1" />

        {/* Cardinal North / South / East / West axes */}
        <line x1="80" y1="4" x2="80" y2="156" strokeWidth="1" />
        <line x1="4" y1="80" x2="156" y2="80" strokeWidth="1" />

        {/* Diagonal 45° axes */}
        <line x1="26" y1="26" x2="134" y2="134" strokeWidth="0.75" strokeDasharray="2 2" />
        <line x1="134" y1="26" x2="26" y2="134" strokeWidth="0.75" strokeDasharray="2 2" />

        {/* North Arrow Marker */}
        <polygon points="80,10 83,28 80,24 77,28" fill="#C8102E" stroke="#C8102E" strokeWidth="0.5" />
        <text
          x="80"
          y="38"
          textAnchor="middle"
          fontSize="9"
          fontFamily="monospace"
          fill="#0A1F44"
          fontWeight="bold"
        >
          N
        </text>
      </svg>
    </motion.div>
  );
}

/**
 * Architectural Dimension Line `<|--- 80.00m --->` with animating span
 */
export function DimensionRuler({
  dimension = "80.00M",
  className = "",
  color = "#0A1F44"
}) {
  return (
    <div className={`inline-flex items-center gap-2 font-mono text-[10px] ${className}`} style={{ color }}>
      <div className="h-3 w-px bg-current opacity-40" />
      <motion.div
        className="h-px bg-current opacity-40 flex-grow"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <span className="font-semibold tracking-wider whitespace-nowrap opacity-80">{dimension}</span>
      <motion.div
        className="h-px bg-current opacity-40 flex-grow"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <div className="h-3 w-px bg-current opacity-40" />
    </div>
  );
}
