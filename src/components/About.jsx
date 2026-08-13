import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#071A2B] text-[#F4F6F2] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F4F6F2] tracking-tighter uppercase leading-[0.92]">
            WE WORK ACROSS <br />
            <span className="text-[#155EEF]">IDEAS, PEOPLE</span> <br />
            <span className="text-[#42D3A5]">AND TECHNOLOGY.</span>
          </h2>
        </motion.div>

        {/* Authentic Short Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-white/10">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 bg-white/5 border-l-4 border-[#087F5B] rounded-r-2xl">
              <p className="font-heading text-xl sm:text-2xl text-[#F4F6F2] font-semibold leading-snug">
                "Technology changes how people connect. Strategy changes how organizations move. Creativity changes how ideas are remembered."
              </p>
            </div>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
              Tricatha Sempiternal Asia operates from The City Tower in Jakarta. We are not a traditional agency or software house—we are an integrated practice building high-stakes solutions across public advocacy, enterprise digital systems, broadcast media, and experiential summits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 bg-[#071A2B] text-white rounded-2xl shadow-xl space-y-3 font-mono text-xs">
              <div className="text-[#42D3A5] font-bold uppercase tracking-widest">
                TSA CORE OPERATIONAL PILLARS
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>GOVERNMENT ADVOCACY</span>
                <span className="text-[#2F80FF]">PUBLIC POLICY</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>GOVTECH SYSTEMS</span>
                <span className="text-[#42D3A5]">ENTERPRISE DASHBOARDS</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>DNA STUDIO</span>
                <span className="text-[#2F80FF]">BROADCAST PODCAST</span>
              </div>
              <div className="flex justify-between">
                <span>FIELD ACTIVATION</span>
                <span className="text-[#42D3A5]">DIPLOMATIC SUMMITS</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
