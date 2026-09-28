import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight, ShieldCheck, Check } from "lucide-react";
const aseanPhoto = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop";
const plenaryPhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop";

export default function EnchantePage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) {
      navigateTo("/contact");
    } else {
      window.history.pushState(null, "", "/contact");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const handleBackToGroup = () => {
    if (navigateTo) {
      navigateTo("/business-group");
    } else {
      window.history.pushState(null, "", "/business-group");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const disciplines = [
    {
      num: "01",
      category: "DIPLOMATIC HIERARCHY",
      title: "Sovereign Seating & Precedence Protocol",
      description:
        "Official precedence mapping aligned with Ministry of Foreign Affairs conventions, diplomatic receiving lines, and bilateral head-of-state table orders.",
      specs: "Bilateral & Multilateral Envoys · VVIP Motorcade Marshaling"
    },
    {
      num: "02",
      category: "SPATIAL SCENOGRAPHY",
      title: "Haute Banquet Tablescape & Floral Engineering",
      description:
        "Custom acoustic-balanced tablescapes, bespoke botanical architecture, hand-lettered state calligraphy, and curated candelabra lighting balances.",
      specs: "Five-Star Ballroom Suites · Custom Centerpiece Fabrication"
    },
    {
      num: "03",
      category: "STATE CEREMONIALS",
      title: "Bilateral Accord Signing Ceremonies",
      description:
        "Turnkey execution of bilateral treaty desks, accredited ceremonial penmanship accouterments, flag protocol decorum, and synchronized media cordons.",
      specs: "Ministerial Summits · Sovereign Communiqué Plenaries"
    },
    {
      num: "04",
      category: "CONFIDENTIAL AUDIO",
      title: "Encrypted Simultaneous Interpretation Suites",
      description:
        "Point-to-point infrared encrypted interpretation channels supporting multilateral delegations in confidential bilateral consultations.",
      specs: "Zero Signal Leakage · Multi-Channel UN Languages"
    }
  ];

  const venues = [
    "The Ritz-Carlton Jakarta · Ballroom",
    "Grand Hyatt Jakarta · Grand Ballroom",
    "Fairmont Jakarta · Grand Ballroom",
    "Hotel Mulia Senayan · Grand Ballroom",
    "Park Hyatt Jakarta · Royal Glasshouse"
  ];

  return (
    <div className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
          <button
            onClick={handleBackToGroup}
            className="group inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-[#C8102E]" />
            <span>TSA Business Group / Entity 01</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
            <span className="text-white font-semibold">ENCHANTÉE</span>
            <span className="text-slate-600">·</span>
            <span>HAUTE PROTOCOL &amp; SCENOGRAPHY</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-white/10">
          
          {/* Left Title & Statement (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C8102E] font-semibold uppercase">
              <span>EXECUTIVE CEREMONIAL PRACTICE</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[70px] font-semibold text-white tracking-tight leading-[1.04]">
              Bespoke Protocol. <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Flawless Ceremonial Poise.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed max-w-2xl pt-2">
              Where sovereign etiquette meets architectural scenography. Orchestrated under strict ministerial decorum for head-of-state banquets, ambassadorial galas, and bilateral plenaries.
            </p>
          </div>

          {/* Right Action (4 cols) */}
          <div className="lg:col-span-4 flex items-start lg:items-end justify-start lg:justify-end">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red"
            >
              <span>Commission Protocol Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. PANORAMIC VISUAL ANCHOR (Supporting Imagery Integrated with Composition) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded overflow-hidden border border-white/15 bg-[#050F22] shadow-2xl"
        >
          {/* Main Visual */}
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1800&auto=format&fit=crop"
              alt="Enchantée Haute Banquet Scenography"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/40 to-transparent opacity-90 pointer-events-none" />
          </div>

          {/* Integrated Editorial Captions & Provenance */}
          <div className="p-6 sm:p-8 bg-[#0A1F44] border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center gap-2 font-mono text-xs text-[#C8102E]">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span className="uppercase font-semibold">VERIFIED ARCHIVAL RECORD</span>
              </div>
              <div className="font-heading font-semibold text-base sm:text-lg text-white">
                Annual Diplomatic Corps &amp; Ambassadorial Gala Dinner
              </div>
              <div className="font-sans text-xs sm:text-sm text-slate-300">
                Grand Hyatt Jakarta Grand Ballroom · 450 Foreign Envoys, Cabinet Ministers &amp; Attachés
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => (navigateTo ? navigateTo("/events/diplomatic-corps-ambassadorial-gala-dinner-2024") : null)}
                className="btn-editorial-outline text-xs flex items-center gap-2"
              >
                <span>Inspect Event Record</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C8102E]" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. MANIFESTO OF DECORUM (Text as Visual Composition) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-baseline">
          
          {/* Left Anchor (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-3"
          >
            <span className="font-mono text-xs text-[#C8102E] tracking-widest uppercase font-semibold block">
              PHILOSOPHY OF DECORUM
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl text-white font-semibold tracking-tight leading-tight">
              Silence, Discretion, <br />
              and Sovereign Dignity.
            </h2>
          </motion.div>

          {/* Right Narrative (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8 space-y-8"
          >
            <p className="font-heading text-xl sm:text-2xl lg:text-3xl text-slate-100 font-light leading-relaxed tracking-tight">
              In sovereign statecraft, there is no second rehearsal. <br className="hidden sm:inline" />
              Every seating hierarchy communicates diplomatic precedence. <br className="hidden sm:inline" />
              Every crystal line and floral cadence honors bilateral respect.
            </p>

            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              <p>
                Operating as the dedicated protocol practice of <strong>PT Tricatha Sempiternal Asia</strong>, Enchantée bridges formal ministerial regulations with refined spatial scenography. We ensure flawless ceremonial execution across every bilateral banquet, ministerial luncheon, and sovereign accord signing.
              </p>
              <p>
                From coordinating accredited precedence with embassy advance teams to deploying secure simultaneous interpretation suites, our officers preserve absolute confidentiality and sovereign decorum.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. THE FOUR DISCIPLINES (Editorial Numbered Ledger - NO CARDS) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-white/10">
        
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#C8102E] uppercase tracking-widest font-semibold block">
              OPERATIONAL SPECIFICATIONS
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-white tracking-tight">
              Ceremonial Capabilities
            </h2>
          </div>
          <p className="text-sm text-slate-300 font-normal max-w-md leading-relaxed">
            Four specialized disciplines structured for ministerial summits, diplomatic missions, and sovereign banqueting halls.
          </p>
        </div>

        {/* Ledger Rows */}
        <div className="divide-y divide-white/10 pt-4">
          {disciplines.map((d) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline group hover:bg-white/[0.015] transition-colors px-2 sm:px-4 rounded"
            >
              {/* Col 1: Numeral & Category (3 cols) */}
              <div className="lg:col-span-3 flex items-baseline gap-4">
                <span className="font-mono text-base sm:text-lg font-bold text-[#C8102E]">
                  {d.num}
                </span>
                <span className="font-mono text-xs tracking-wider uppercase text-slate-400">
                  {d.category}
                </span>
              </div>

              {/* Col 2: Title (4 cols) */}
              <div className="lg:col-span-4">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-slate-100 transition-colors">
                  {d.title}
                </h3>
              </div>

              {/* Col 3: Description & Specs (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {d.description}
                </p>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                  <span>{d.specs}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* 5. DISPLAY METRICS & VENUE PROVENANCE (Generous Whitespace Composition) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Display Numbers (6 cols) */}
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#C8102E] tracking-widest uppercase font-semibold block">
                INSTITUTIONAL METRICS
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                Verified Diplomatic Track Record.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-12 pt-4">
              <div className="space-y-2">
                <div className="font-heading text-5xl sm:text-6xl font-bold text-white tracking-tight">
                  14<span className="text-[#C8102E]">+</span>
                </div>
                <div className="font-heading text-sm sm:text-base text-white font-medium">
                  State Banquets Delivered
                </div>
                <p className="font-sans text-xs text-slate-300">
                  Orchestrated across Jakarta's premier sovereign salons.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-heading text-5xl sm:text-6xl font-bold text-white tracking-tight">
                  32
                </div>
                <div className="font-heading text-sm sm:text-base text-white font-medium">
                  Diplomatic Missions Hosted
                </div>
                <p className="font-sans text-xs text-slate-300">
                  Accredited foreign embassies and regional attaches.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-heading text-5xl sm:text-6xl font-bold text-white tracking-tight">
                  100<span className="text-[#C8102E]">%</span>
                </div>
                <div className="font-heading text-sm sm:text-base text-white font-medium">
                  Precedence Compliance
                </div>
                <p className="font-sans text-xs text-slate-300">
                  Full adherence to international protocol standards.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-heading text-5xl sm:text-6xl font-bold text-white tracking-tight">
                  0
                </div>
                <div className="font-heading text-sm sm:text-base text-white font-medium">
                  Margin of Error
                </div>
                <p className="font-sans text-xs text-slate-300">
                  Single-source accountability under TSA governance.
                </p>
              </div>
            </div>
          </div>

          {/* Provenance Venues & Photography (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="editorial-image-frame rounded aspect-[16/10] bg-[#050F22] border border-white/15 overflow-hidden shadow-2xl relative">
              <img
                src={aseanPhoto}
                alt="Enchantée Diplomatic Plenary Reception"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-80 pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0A1F44]/95 backdrop-blur-xs rounded border border-white/10 text-white font-mono text-xs flex items-center justify-between">
                <span>DIPLOMATIC PLENARY RECEPTION</span>
                <span className="text-[#C8102E] font-semibold">JAKARTA</span>
              </div>
            </div>

            {/* Verified Venue Roster */}
            <div className="space-y-3">
              <div className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">
                PREFERRED SOVEREIGN BALLROOM PARTNERS:
              </div>
              <div className="divide-y divide-white/10 font-mono text-xs text-slate-300">
                {venues.map((venue, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between">
                    <span>{venue}</span>
                    <span className="text-slate-400 text-[10px]">VERIFIED PARTNER</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CLOSING MANDATE INQUIRY PANEL */}
      <section className="py-20 sm:py-28 bg-[#050F22] border-t border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          <div className="bg-[#0A1F44] border border-white/10 p-8 sm:p-14 rounded flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 font-mono text-xs text-[#C8102E]">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>EXECUTIVE PROTOCOL DIRECTORATE · THE CITY TOWER</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                Commission an Enchantée Mandate.
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                For ambassadorial banquets, bilateral treaty signings, or high-precedence diplomatic gatherings, contact the Jakarta Executive Secretariat for confidential feasibility and protocol evaluation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red flex items-center justify-center gap-2"
              >
                <span>Initiate Mandate Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleBackToGroup}
                className="btn-editorial-outline text-xs flex items-center justify-center gap-2"
              >
                <span>View Full Business Group</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
