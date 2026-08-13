import React from "react";
import { motion } from "framer-motion";

export default function TypographicBreaker({ word, theme = "navy", subtitle }) {
  // Theme options: navy, blue, green, offwhite
  const themeStyles = {
    navy: "bg-[#071A2B] text-[#F4F6F2] border-white/10",
    blue: "bg-[#155EEF] text-white border-white/20",
    green: "bg-[#087F5B] text-white border-white/20",
    offwhite: "bg-[#F4F6F2] text-[#071A2B] border-[#071A2B]/15"
  };

  const textStyles = {
    navy: "text-[#42D3A5]",
    blue: "text-[#42D3A5]",
    green: "text-[#2F80FF]",
    offwhite: "text-[#155EEF]"
  };

  return (
    <div className={`py-20 border-y transition-colors duration-500 overflow-hidden ${themeStyles[theme] || themeStyles.navy}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-heading text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter leading-none">
            {word}
          </h3>
        </motion.div>

      </div>
    </div>
  );
}
