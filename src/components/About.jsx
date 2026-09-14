import React from "react";
import { motion } from "framer-motion";
import { companyInfo, leadershipTeam } from "../data/tsaData";

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0B0F17] text-[#F8FAFC] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-[#3B82F6] uppercase tracking-widest mb-4"
        >
          ABOUT THE COMPANY
        </motion.div>

        {/* Large Editorial Statement Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#F8FAFC] tracking-tight uppercase leading-tight max-w-4xl">
            {companyInfo.aboutTitle}
          </h2>
        </motion.div>

        {/* Core Statement & Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-20 border-b border-slate-800/80">
          
          {/* Main Statement Callout */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 bg-[#111827] border border-slate-800 rounded-2xl">
              <div className="space-y-3 font-heading text-xl sm:text-2xl text-[#F8FAFC] font-medium leading-snug">
                {companyInfo.aboutStatement.map((line, idx) => (
                  <p key={idx} className={idx === 0 ? "text-[#F8FAFC]" : idx === 1 ? "text-slate-300" : "text-[#3B82F6]"}>
                    "{line}"
                  </p>
                ))}
              </div>
            </div>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
              PT Tricatha Sempiternal Asia (TSA) is an integrated practice operating from The City Tower in Jakarta. We deliver end-to-end strategic solutions combining public policy advocacy, enterprise digital systems, broadcast studio production, and head-of-state diplomatic assemblies.
            </p>
          </motion.div>

          {/* Pillars List */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-8 bg-[#111827] border border-slate-800 rounded-2xl space-y-5">
              <h3 className="font-heading text-sm text-[#3B82F6] font-semibold uppercase tracking-widest border-b border-slate-800 pb-3">
                TSA DISCIPLINARY PILLARS
              </h3>

              <div className="space-y-4">
                {companyInfo.societyPillars.map((pillar) => (
                  <div key={pillar.title} className="flex flex-col gap-1 pb-3 border-b border-slate-800/50 last:border-0 last:pb-0">
                    <div className="font-heading text-xs text-[#F8FAFC] font-semibold uppercase tracking-wider">
                      {pillar.title}
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      {pillar.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Leadership Team Section */}
        <div className="pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="font-mono text-xs text-[#3B82F6] uppercase tracking-widest mb-2">
                EXECUTIVE LEADERSHIP
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#F8FAFC] uppercase tracking-tight">
                GOVERNANCE & LEADERSHIP
              </h3>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Multidisciplinary leaders uniting sovereign policy, software architecture, spatial design, and media production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 bg-[#111827] border border-slate-800 hover:border-[#3B82F6]/60 rounded-2xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-[11px] text-[#3B82F6] font-semibold uppercase tracking-wider mb-2">
                    {leader.position}
                  </div>
                  <h4 className="font-heading text-lg font-bold text-[#F8FAFC] uppercase tracking-tight mb-3">
                    {leader.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {leader.roleDesc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
