import React from "react";
import { motion } from "framer-motion";

export default function ImpactNumbers() {
  const stats = [
    { number: "8+", label: "CORE SERVICES", desc: "Specialized practice areas working in unison" },
    { number: "∞", label: "POSSIBILITIES", desc: "Sovereign innovation & unlimited societal reach" },
    { number: "01", label: "CONNECTED ECOSYSTEM", desc: "Single integrated practice across Asia" }
  ];

  return (
    <section className="py-28 bg-[#071A2B] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F4F6F2] tracking-tight uppercase">
            SCALE & <span className="text-[#42D3A5]">CAPACITY.</span>
          </h2>
        </motion.div>

        {/* Oversized Typographic Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-white/20 pt-8 group cursor-default"
            >
              {/* Oversized Typography Number */}
              <div className="font-heading text-7xl sm:text-8xl md:text-9xl font-black text-[#F4F6F2] tracking-tighter leading-none mb-4 group-hover:text-[#155EEF] transition-colors">
                {idx === 0 && <span className="text-[#155EEF]">{stat.number}</span>}
                {idx === 1 && <span className="text-[#42D3A5]">{stat.number}</span>}
                {idx === 2 && <span className="text-[#2F80FF]">{stat.number}</span>}
              </div>

              <div className="font-heading text-xl font-bold text-white uppercase tracking-wider mb-2">
                {stat.label}
              </div>

              <div className="font-mono text-xs text-slate-400">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
