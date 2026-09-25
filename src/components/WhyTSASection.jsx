import React from "react";
import { motion } from "framer-motion";
import plenaryPhoto from "../assets/DSC08824.JPG";

const INSTITUTIONAL_PILLARS = [
  {
    title: "Sovereign Protocol & Government Clearances",
    mandate: "Head-of-State Precedence Standards",
    desc: "Rigorous alignment with ministerial secretariats, diplomatic delegations, and sovereign security perimeters. We manage closed-door bilateral suites, bilateral signing ceremonies, and multi-lingual simultaneous audio telemetry with zero margin for error."
  },
  {
    title: "Single-Source Operational Accountability",
    mandate: "Turnkey Architecture to Live Telecast",
    desc: "We eliminate multi-vendor friction by unifying spatial scenography, venue negotiation, crowd safety, AV engineering, and stage command under single executive leadership."
  },
  {
    title: "Southeast Asian Cross-Border Capability",
    mandate: "ASEAN Corridor Operations",
    desc: "Headquartered at The City Tower in Central Jakarta, TSA regularly supports international trade expositions, bilateral investment roadshows, and overseas ministerial delegations requiring bilingual event command."
  },
  {
    title: "DNA Studio Broadcast & Hybrid Telemetry",
    mandate: "Audited 4K Broadcast Scenography",
    desc: "Direct integration with our in-house broadcast division (DNA Studio) enables 4K multi-camera telecasts, kinetic spatial lighting, and audited electronic voting telemetry for high-stakes corporate AGMs."
  }
];

export default function WhyTSASection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#071731] text-white border-b border-white/10">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-white/10"
        >
          <div className="lg:col-span-8 space-y-3">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Why Sovereign &amp; Corporate Entities <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Entrust Mandates to TSA.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="font-sans text-sm text-slate-300 leading-relaxed max-w-md ml-auto">
              We bridge sovereign protocol standards with enterprise commercial execution, delivering events that protect reputations and advance strategic agendas.
            </p>
          </div>
        </motion.div>

        {/* Editorial Asymmetric Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-12 items-stretch">
          
          {/* Left Column: Visual Operational Anchor (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="editorial-image-frame rounded aspect-[4/3] lg:aspect-[4/5] bg-[#050F22] shadow-xl relative">
              <img
                src={plenaryPhoto}
                alt="National GovTech Plenary Staging by TSA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/30 to-transparent opacity-90 pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 p-5 bg-[#0A1F44]/95 border border-white/15 rounded text-white space-y-2">
                <div className="font-heading font-bold text-sm sm:text-base">
                  National Digital Governance Conclave
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  14 Participating National Ministries · 850 Executive Delegates · Real-Time Command Telemetry with Zero Downtime.
                </p>
              </div>
            </div>

            {/* Headquarters Governance Note */}
            <div className="p-5 bg-[#0A1F44] rounded border border-white/10 space-y-2 text-xs">
              <p className="text-slate-200 font-sans leading-relaxed">
                Operating from The City Tower in Central Jakarta, TSA executes under strict non-disclosure covenants, protocol etiquette precedence, and international HSSE standards.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 4 Substantive Institutional Pillars (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10 flex flex-col justify-between"
          >
            {INSTITUTIONAL_PILLARS.map((pillar) => {
              return (
                <motion.div
                  key={pillar.title}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  className="py-8 space-y-3 group hover:bg-[#0A1F44]/40 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded transition-colors"
                >
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-sm text-slate-300 leading-relaxed max-w-2xl">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
