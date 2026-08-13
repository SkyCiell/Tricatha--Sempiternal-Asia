import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { approachStages } from "../data/tsaData";
import { ArrowUpRight } from "lucide-react";

export default function Approach() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  return (
    <section id="approach" className="py-28 bg-[#071A2B] relative border-b border-white/10">
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
            HOW TSA <span className="text-[#42D3A5]">OPERATES.</span>
          </h2>
        </motion.div>

        {/* Sticky Scroll Stages Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Typographic Selector */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {approachStages.map((item, idx) => {
              const isActive = activeStageIndex === idx;

              return (
                <button
                  key={item.stage}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`w-full text-left p-6 border transition-all duration-300 rounded-2xl ${
                    isActive
                      ? "bg-[#155EEF] border-[#155EEF] text-white shadow-xl scale-[1.02]"
                      : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/30"
                  }`}
                >
                  <div className="font-heading text-2xl font-bold uppercase tracking-widest mb-1">
                    {item.stage}
                  </div>
                  <div className="text-xs font-mono opacity-80 uppercase tracking-wider">
                    {item.subtitle}
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Right Column: Detailed Typographic Stage View */}
          <div className="lg:col-span-7 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={approachStages[activeStageIndex].stage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-12 bg-white/5 border border-white/10 shadow-2xl relative rounded-3xl"
              >
                <h3 className="font-heading text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">
                  {approachStages[activeStageIndex].stage}
                </h3>

                <div className="text-xl font-bold text-[#155EEF] uppercase mb-6">
                  {approachStages[activeStageIndex].subtitle}
                </div>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-mono">
                  {approachStages[activeStageIndex].description}
                </p>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>TSA OPERATIONAL RIGOR</span>
                  <span className="text-[#42D3A5] uppercase font-bold">100% IN-HOUSE EXECUTION</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
