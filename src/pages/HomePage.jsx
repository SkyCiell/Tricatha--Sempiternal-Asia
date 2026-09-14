import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, Check, Radio, ShieldCheck, Layers, Eye } from "lucide-react";
import { motion } from "framer-motion";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import TiltCard from "../components/TiltCard";
import MagneticButton from "../components/MagneticButton";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  HandDrawnCircle,
  HandDrawnArrow,
  HandDrawnUnderline,
  ArchitecturalCompass,
  DimensionRuler
} from "../components/HandDrawnIllustrations";

// Photos
import aseanDiplomacyImage from "../assets/20231130_131733_311.jpg";
import gwiImage from "../assets/9c3a2a75-3f45-48d6-b86b-43955e71d699 (1).jpg";
import govAdvImage from "../assets/DSC08824.JPG";
import logoTSA from "../assets/LogoTSAA.jpeg";

// High-Res Architectural Blueprint Illustrations
import plenaryBlueprint from "../assets/illustrations/plenary-draft.jpg";
import scenographyTrussBlueprint from "../assets/illustrations/scenography-truss.jpg";
import protocolPavilionBlueprint from "../assets/illustrations/protocol-pavilion.jpg";
import broadcastUplinkBlueprint from "../assets/illustrations/broadcast-uplink.jpg";

export default function HomePage({ navigateTo }) {
  // State for interactive architectural blueprint vs photography toggles
  const [viewMode1, setViewMode1] = useState("blueprint");
  const [viewMode2, setViewMode2] = useState("blueprint");
  const [viewMode3, setViewMode3] = useState("blueprint");
  const [viewMode4, setViewMode4] = useState("blueprint");

  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState(0);

  const handleNav = (path) => {
    if (navigateTo) navigateTo(path);
  };

  const scrollStackProjects = [
    {
      id: "asean-plenary",
      name: "ASEAN Multilateral State Plenary",
      title: "ASEAN Multilateral State Plenary",
      category: "Sovereign Plenary Architecture",
      year: "2024–2026",
      shortDesc: "Turnkey architectural staging, concentric delegate arcs, and presidential dais for 18 bilateral ministerial delegations at Jakarta Convention Center.",
      impact: "18 BILATERAL MINISTERIAL COMMUNIQUÉS RATIFIED",
      blueprintImage: plenaryBlueprint,
      blueprintLabel: "DWG NO. PL-01 · ISOMETRIC STAGE SCHEMATIC",
      scale: "SCALE 1:100 METRIC"
    },
    {
      id: "govtech-scenography",
      name: "GovTech National Conclave Staging",
      title: "GovTech National Conclave Staging",
      category: "Adaptive Kinetic Scenography",
      year: "2025",
      shortDesc: "Parametric curved kinetic LED volume, 18,000mm overhead motorized truss grid, and 22,000mm ceiling clearance engineering at Ritz-Carlton Grand Ballroom.",
      impact: "100% PROTOCOL INTEGRITY · 2,400+ MINISTERIAL LEADERS",
      blueprintImage: scenographyTrussBlueprint,
      blueprintLabel: "DWG NO. SC-04 · SECTION A-A TRUSS & RIGGING",
      scale: "SCALE 1:150 METRIC"
    },
    {
      id: "gwi-corridor",
      name: "Global Water Summit Diplomatic Pavilion",
      title: "Global Water Summit Diplomatic Pavilion",
      category: "Diplomatic Circulation & Protocol",
      year: "2024",
      shortDesc: "VVIP motorcade arrival porte-cochere, air-gapped bilateral meeting suites, and sterile protocol perimeter for 12 sovereign delegations in Bali.",
      impact: "$450M BILATERAL INFRASTRUCTURE COVENANTS",
      blueprintImage: protocolPavilionBlueprint,
      blueprintLabel: "DWG NO. PA-02 · CIRCULATION SCHEMATIC & FLOOR PLAN",
      scale: "SCALE 1:200 METRIC"
    },
    {
      id: "broadcast-telemetry",
      name: "State Assembly Broadcast & Telemetry Uplink",
      title: "State Assembly Broadcast & Telemetry Uplink",
      category: "Strategic Media Command",
      year: "2024–2025",
      shortDesc: "Turnkey multi-camera 4K cinema live feeds, dual-redundant satellite uplink dish arrays, and 8-channel simultaneous interpretation matrix.",
      impact: "BROADCAST UPLINK TO 14 INTERNATIONAL NETWORKS",
      blueprintImage: broadcastUplinkBlueprint,
      blueprintLabel: "DWG NO. BC-01 · UP-LINK STATION & MULTI-CAM SCHEMATIC",
      scale: "SCALE 1:100 METRIC"
    }
  ];

  const faqItems = [
    {
      q: "How does Tricatha ensure zero-margin protocol accuracy for state dignitaries and heads of state?",
      a: "Our protocol directors are certified veterans in state guest etiquette, ASEAN Secretariat guidelines, and presidential decree standards. Every plenary utilizes micro-timed cue sheets, dedicated VVIP holding room marshals, and bilateral liaison officers to guarantee flawless execution without protocol discrepancies."
    },
    {
      q: "What security clearances and confidentiality protocols does TSA operate under?",
      a: "TSA executes strict non-disclosure agreements (NDAs) and operates within sovereign digital telemetry parameters. All communication feeds, diplomatic seating plans, and speech dossiers are handled through encrypted local air-gapped systems with zero cloud data retention for sensitive state proceedings."
    },
    {
      q: "Can TSA manage multi-venue or regional summits across Southeast Asia?",
      a: "Yes. From our Jakarta headquarters at The City Tower, we maintain operational corridors across Singapore, Kuala Lumpur, Bangkok, and Bali. We deliver turnkey staging, logistical liaison, and local authority permitting across the entire ASEAN corridor."
    },
    {
      q: "How do you handle multi-lingual interpretation and international satellite broadcast?",
      a: "We deploy high-density ISO-compliant simultaneous interpretation booths supporting up to 8 simultaneous language channels. For broadcast, we interface directly with state television networks (TVRI, Antara, CNN, Bloomberg) via dedicated 4K fibre and dual-redundant satellite uplink vehicles."
    },
    {
      q: "What is the typical commissioning timeline for a major corporate or sovereign plenary?",
      a: "For sovereign summits and ministerial conferences, commissioning typically initiates 4 to 12 weeks prior to convene dates to finalize security permits and stage fabrication. For rapid bilateral emergencies or state visits, our rapid deployment protocol team can deploy in under 72 hours."
    }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0A1F44] selection:bg-[#C8102E] selection:text-white font-sans">
      
      {/* ========================================================================= */}
      {/* 1. EDITORIAL HERO SECTION - ILLOCA STYLE WITH ARCHITECTURAL MOTION       */}
      {/* ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-32 px-4 sm:px-8 border-b border-[#0A1F44]/15 overflow-hidden">
        
        {/* Subtle 16px Technical Drafting Grid */}
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-90" />

        {/* Ambient Rotating Drafting Compass Illustration */}
        <div className="absolute top-16 right-10 hidden xl:block pointer-events-none">
          <ArchitecturalCompass size={180} opacity={0.14} />
        </div>
        <div className="absolute bottom-8 left-10 hidden xl:block pointer-events-none">
          <ArchitecturalCompass size={130} opacity={0.1} />
        </div>

        <div className="max-w-[1360px] mx-auto relative z-10">
          
          {/* Top Hand-Sketched Architectural Annotation */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-3 -rotate-2 font-architect text-[#5B6B84] text-lg sm:text-2xl"
            >
              <svg width="48" height="6" viewBox="0 0 48 6" fill="none" className="opacity-40">
                <path d="M0 3H48" stroke="#0A1F44" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
              <span>sovereign &amp; plenary orchestration</span>
              <svg width="48" height="6" viewBox="0 0 48 6" fill="none" className="opacity-40">
                <path d="M0 3H48" stroke="#0A1F44" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </motion.div>
          </div>

          {/* Giant Headline with Hand-Drawn Vector Circle & Arrow */}
          <div className="relative text-center mx-auto max-w-5xl">
            <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-[112px] xl:text-[124px] leading-[0.92] tracking-tight text-[#0A1F44] relative">
              Grandeur, made{" "}
              <HandDrawnCircle color="#C8102E" delay={0.35}>
                tangible
              </HandDrawnCircle>

              {/* Hand-Drawn Red Accent Annotation with Animated Sketch Arrow */}
              <span className="absolute -bottom-6 sm:-bottom-8 right-2 sm:right-10 lg:-right-6 -rotate-6 font-architect text-base sm:text-xl text-[#C8102E] whitespace-nowrap hidden sm:inline-flex items-center gap-2 select-none">
                <HandDrawnArrow className="inline-block" delay={0.7} />
                <span>with sovereign protocol</span>
              </span>
            </h1>
          </div>

          {/* Editorial Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="mt-8 sm:mt-12 text-center text-base sm:text-xl text-[#5B6B84] max-w-2xl mx-auto font-sans leading-relaxed"
          >
            The spatial architecture that unifies presidential protocol, high-stakes scenography, and multilateral summits across Asia.
          </motion.p>

          {/* Action Triggers with Magnetic Button Motion */}
          <div className="mt-10 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <MagneticButton>
              <button
                onClick={() => handleNav("/events")}
                className="btn-tech-red group focus:outline-none cursor-pointer"
              >
                <div className="w-11 h-full bg-[#A50D25] flex items-center justify-center text-white border-r border-white/20">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="px-6 h-full flex items-center">
                  Explore Plenaries
                </div>
              </button>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={() => handleNav("/about")}
                className="btn-tech-navy group focus:outline-none cursor-pointer"
              >
                <div className="w-11 h-full bg-[#F8F9FA] flex items-center justify-center text-[#0A1F44] border-r border-[#0A1F44]/20 group-hover:bg-[#0A1F44] group-hover:text-white transition-colors">
                  <span className="font-mono text-xs font-bold">TSA</span>
                </div>
                <div className="px-6 h-full flex items-center">
                  Institutional Charter
                </div>
              </button>
            </MagneticButton>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 2. THE 5 NUMBERED SECTIONS (White & Off-White Clean Backgrounds)          */}
      {/* ========================================================================= */}

      {/* ------------------------------------------------------------------------- */}
      {/* SECTION 1: Protocols, Orchestrated! -> Sovereign Plenaries                 */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 border-b border-[#0A1F44]/15 relative bg-[#F8F9FA]">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-3 -rotate-2 text-[#5B6B84] text-xl font-architect">
              <span className="w-7 h-7 rounded-full border border-[#0A1F44] flex items-center justify-center font-mono text-xs font-bold text-[#0A1F44] bg-[#FFFFFF]">
                1
              </span>
              <svg width="64" height="6" viewBox="0 0 64 6" fill="none" className="opacity-40">
                <path d="M0 3H64" stroke="#0A1F44" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
              <span>Protocols, Orchestrated!</span>
              <svg width="64" height="6" viewBox="0 0 64 6" fill="none" className="opacity-40">
                <path d="M0 3H64" stroke="#0A1F44" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-[#0A1F44] leading-[0.95]">
              Sovereign Plenaries
            </h2>

            <p className="text-lg text-[#5B6B84] leading-relaxed max-w-xl">
              Transform high-stakes state agendas, bilateral accords, and ministerial summits into flawless sovereign events with zero-margin protocol execution.
            </p>

            <DimensionRuler dimension="80.00M CLEARANCE · JCC SENAYAN" className="py-1" />

            <div className="pt-2">
              <MagneticButton>
                <button
                  onClick={() => handleNav("/events")}
                  className="btn-tech-navy group focus:outline-none cursor-pointer"
                >
                  <div className="w-10 h-full bg-[#F8F9FA] flex items-center justify-center text-[#0A1F44] border-r border-[#0A1F44]/20 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="px-5 h-full flex items-center font-mono text-xs font-semibold">
                    Explore Plenary Cases
                  </div>
                </button>
              </MagneticButton>
            </div>
          </motion.div>

          <div className="lg:col-span-6">
            <TiltCard tiltMax={6} glare={true}>
              <div className="card-clean rounded-[4px] p-5 bg-[#FFFFFF] relative border border-[#0A1F44]/15">
                {/* Interactive Blueprint / Photography Toggle */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#0A1F44]/15 font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-[#5B6B84]">
                    <Layers className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>DWG: PL-01/METRIC</span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#F8F9FA] p-1 rounded-[3px] border border-[#0A1F44]/15">
                    <button
                      onClick={() => setViewMode1("blueprint")}
                      className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer text-[10px] ${
                        viewMode1 === "blueprint"
                          ? "bg-[#0A1F44] text-white font-semibold"
                          : "text-[#5B6B84] hover:text-[#0A1F44]"
                      }`}
                    >
                      DRAFTING BLUEPRINT
                    </button>
                    <button
                      onClick={() => setViewMode1("photo")}
                      className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer text-[10px] ${
                        viewMode1 === "photo"
                          ? "bg-[#0A1F44] text-white font-semibold"
                          : "text-[#5B6B84] hover:text-[#0A1F44]"
                      }`}
                    >
                      LIVE PRODUCTION
                    </button>
                  </div>
                </div>

                <div className="relative rounded-[2px] overflow-hidden aspect-[4/3] border border-[#0A1F44]/20 shadow-sm bg-[#F8F9FA]">
                  {viewMode1 === "blueprint" ? (
                    <img
                      src={plenaryBlueprint}
                      alt="Plenary Architectural Blueprint"
                      className="w-full h-full object-contain p-2 hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={aseanDiplomacyImage}
                      alt="ASEAN Sovereign Strategic Plenary"
                      className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                  
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#FFFFFF]/95 backdrop-blur-xs border border-[#0A1F44]/25 rounded-[2px] text-[#0A1F44] font-mono text-xs flex justify-between items-center shadow-xs">
                    <div>
                      <div className="font-bold text-[11px] text-[#0A1F44]">
                        {viewMode1 === "blueprint" ? "DRAFTING SCHEMATIC · PLENARY HALL & SUMMIT STAGE" : "CASE 01 · ASEAN DIPLOMACY SUMMIT"}
                      </div>
                      <div className="text-[10px] text-[#5B6B84]">
                        {viewMode1 === "blueprint" ? "ISOMETRIC 1:100 · 80.00M CLEARANCE · JCC SENAYAN" : "18 MINISTERIAL DELEGATIONS · JCC SENAYAN"}
                      </div>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C8102E]" />
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* SECTION 2: Visions, Materialized! -> Adaptive Scenography                 */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 border-b border-[#0A1F44]/15 relative bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <TiltCard tiltMax={6} glare={true}>
              <div className="card-clean rounded-[4px] p-5 bg-[#FFFFFF] relative border border-[#0A1F44]/15">
                {/* Interactive Blueprint / Photography Toggle */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#0A1F44]/15 font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-[#5B6B84]">
                    <Layers className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>DWG: SC-04/SECTION A-A</span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#F8F9FA] p-1 rounded-[3px] border border-[#0A1F44]/15">
                    <button
                      onClick={() => setViewMode2("blueprint")}
                      className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer text-[10px] ${
                        viewMode2 === "blueprint"
                          ? "bg-[#0A1F44] text-white font-semibold"
                          : "text-[#5B6B84] hover:text-[#0A1F44]"
                      }`}
                    >
                      DRAFTING CROSS-SECTION
                    </button>
                    <button
                      onClick={() => setViewMode2("photo")}
                      className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer text-[10px] ${
                        viewMode2 === "photo"
                          ? "bg-[#0A1F44] text-white font-semibold"
                          : "text-[#5B6B84] hover:text-[#0A1F44]"
                      }`}
                    >
                      LIVE PRODUCTION
                    </button>
                  </div>
                </div>

                <div className="relative rounded-[2px] overflow-hidden aspect-[4/3] border border-[#0A1F44]/20 shadow-sm bg-[#F8F9FA]">
                  {viewMode2 === "blueprint" ? (
                    <img
                      src={scenographyTrussBlueprint}
                      alt="Scenography Truss Blueprint"
                      className="w-full h-full object-contain p-2 hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={govAdvImage}
                      alt="GovTech National Conclave Staging"
                      className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                </div>
              </div>
            </TiltCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-3 -rotate-2 text-[#5B6B84] text-xl font-architect">
              <span className="w-7 h-7 rounded-full border border-[#0A1F44] flex items-center justify-center font-mono text-xs font-bold text-[#0A1F44] bg-[#FFFFFF]">
                2
              </span>
              <svg width="64" height="6" viewBox="0 0 64 6" fill="none" className="opacity-40">
                <path d="M0 3H64" stroke="#0A1F44" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
              <span>Visions, Materialized!</span>
              <svg width="64" height="6" viewBox="0 0 64 6" fill="none" className="opacity-40">
                <path d="M0 3H64" stroke="#0A1F44" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-[#0A1F44] leading-[0.95]">
              Adaptive Scenography
            </h2>

            <p className="text-lg text-[#5B6B84] leading-relaxed max-w-xl">
              Convert spatial constraints, presidential sightlines, and acoustic parameters into monumental, parametric plenary staging environments.
            </p>

            <DimensionRuler dimension="18,000MM MOTORIZED TRUSS SPAN" className="py-1" />

            <div className="pt-2">
              <MagneticButton>
                <button
                  onClick={() => handleNav("/services")}
                  className="btn-tech-navy group focus:outline-none cursor-pointer"
                >
                  <div className="w-10 h-full bg-[#F8F9FA] flex items-center justify-center text-[#0A1F44] border-r border-[#0A1F44]/20 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="px-5 h-full flex items-center font-mono text-xs font-semibold">
                    Inspect Stagecraft
                  </div>
                </button>
              </MagneticButton>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* SECTION 3: Corridors, Synchronized! -> Protocol Command                   */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 border-b border-[#0A1F44]/15 relative bg-[#F8F9FA]">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-3 -rotate-2 text-[#5B6B84] text-xl font-architect">
              <span className="w-7 h-7 rounded-full border border-[#0A1F44] flex items-center justify-center font-mono text-xs font-bold text-[#0A1F44] bg-[#FFFFFF]">
                3
              </span>
              <svg width="64" height="6" viewBox="0 0 64 6" fill="none" className="opacity-40">
                <path d="M0 3H64" stroke="#0A1F44" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
              <span>Corridors, Synchronized!</span>
              <svg width="64" height="6" viewBox="0 0 64 6" fill="none" className="opacity-40">
                <path d="M0 3H64" stroke="#0A1F44" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-[#0A1F44] leading-[0.95]">
              Protocol Command
            </h2>

            <p className="text-lg text-[#5B6B84] leading-relaxed max-w-xl">
              Deploy encrypted diplomatic corridors, ministerial holding suites, and synchronized motorcade escorts across Indonesian and ASEAN venues.
            </p>

            <DimensionRuler dimension="SCALE 1:200 · AIR-GAPPED BILATERAL SUITES" className="py-1" />

            <div className="pt-2">
              <MagneticButton>
                <button
                  onClick={() => handleNav("/about")}
                  className="btn-tech-navy group focus:outline-none cursor-pointer"
                >
                  <div className="w-10 h-full bg-[#F8F9FA] flex items-center justify-center text-[#0A1F44] border-r border-[#0A1F44]/20 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="px-5 h-full flex items-center font-mono text-xs font-semibold">
                    Review Security Protocols
                  </div>
                </button>
              </MagneticButton>
            </div>
          </motion.div>

          <div className="lg:col-span-6">
            <TiltCard tiltMax={6} glare={true}>
              <div className="card-clean rounded-[4px] p-5 bg-[#FFFFFF] relative border border-[#0A1F44]/15">
                <div className="relative rounded-[2px] overflow-hidden aspect-[4/3] border border-[#0A1F44]/20 shadow-sm bg-[#F8F9FA]">
                  <img
                    src={protocolPavilionBlueprint}
                    alt="Protocol Pavilion Blueprint"
                    className="w-full h-full object-contain p-2 hover:scale-[1.03] transition-transform duration-500"
                  />
                  
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#FFFFFF]/95 backdrop-blur-xs border border-[#0A1F44]/25 rounded-[2px] text-[#0A1F44] font-mono text-xs flex justify-between items-center shadow-xs">
                    <div>
                      <div className="font-bold text-[11px] text-[#0A1F44]">
                        DIPLOMATIC PAVILION · VVIP CORRIDOR ARCHITECTURE
                      </div>
                      <div className="text-[10px] text-[#5B6B84]">
                        SCALE 1:200 · AIR-GAPPED BILATERAL SUITES
                      </div>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C8102E]" />
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* SECTION 4: Narratives, Amplified! -> Broadcast Uplink                     */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 border-b border-[#0A1F44]/15 relative bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Narrative Column with Motion Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-3 -rotate-2 text-[#5B6B84] text-xl font-architect">
              <span className="w-7 h-7 rounded-full border border-[#0A1F44] flex items-center justify-center font-mono text-xs font-bold text-[#0A1F44] bg-[#FFFFFF]">
                4
              </span>
              <svg width="64" height="6" viewBox="0 0 64 6" fill="none" className="opacity-40">
                <path d="M0 3H64" stroke="#0A1F44" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
              <span>Narratives, Amplified!</span>
              <svg width="64" height="6" viewBox="0 0 64 6" fill="none" className="opacity-40">
                <path d="M0 3H64" stroke="#0A1F44" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-[#0A1F44] leading-[0.95]">
              Broadcast Uplink
            </h2>

            <p className="text-lg text-[#5B6B84] leading-relaxed max-w-xl">
              Multi-camera 4K international broadcast uplinks, multi-lingual simultaneous interpretation, and institutional media coordination.
            </p>

            <DimensionRuler dimension="PALAPA-D 113.0°E GEO VECTOR" className="py-1" />

            <div className="pt-2">
              <MagneticButton>
                <button
                  onClick={() => handleNav("/services")}
                  className="btn-tech-navy group focus:outline-none cursor-pointer"
                >
                  <div className="w-10 h-full bg-[#F8F9FA] flex items-center justify-center text-[#0A1F44] border-r border-[#0A1F44]/20 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="px-5 h-full flex items-center font-mono text-xs font-semibold">
                    Inspect Media Telemetry
                  </div>
                </button>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Visual Column with 3D Tilt */}
          <div className="lg:col-span-6">
            <TiltCard tiltMax={6} glare={true}>
              <div className="card-clean rounded-[4px] p-5 bg-[#FFFFFF] relative border border-[#0A1F44]/15">
                {/* Interactive Blueprint / Telemetry Toggle */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#0A1F44]/15 font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-[#5B6B84]">
                    <Layers className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>DWG: BC-01/TELEMETRY</span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#F8F9FA] p-1 rounded-[3px] border border-[#0A1F44]/15">
                    <button
                      onClick={() => setViewMode4("blueprint")}
                      className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer text-[10px] ${
                        viewMode4 === "blueprint"
                          ? "bg-[#0A1F44] text-white font-semibold"
                          : "text-[#5B6B84] hover:text-[#0A1F44]"
                      }`}
                    >
                      UP-LINK SCHEMATIC
                    </button>
                    <button
                      onClick={() => setViewMode4("telemetry")}
                      className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer text-[10px] ${
                        viewMode4 === "telemetry"
                          ? "bg-[#0A1F44] text-white font-semibold"
                          : "text-[#5B6B84] hover:text-[#0A1F44]"
                      }`}
                    >
                      LIVE TELEMETRY
                    </button>
                  </div>
                </div>

                {viewMode4 === "blueprint" ? (
                  <div className="relative rounded-[2px] overflow-hidden aspect-[4/3] border border-[#0A1F44]/20 shadow-sm bg-[#F8F9FA]">
                    <img
                      src={broadcastUplinkBlueprint}
                      alt="Broadcast Uplink Blueprint"
                      className="w-full h-full object-contain p-2 hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#FFFFFF]/95 backdrop-blur-xs border border-[#0A1F44]/25 rounded-[2px] text-[#0A1F44] font-mono text-xs flex justify-between items-center shadow-xs">
                      <div>
                        <div className="font-bold text-[11px] text-[#0A1F44]">
                          DIPLOMATIC BROADCAST COMMAND · DWG NO. BC-01
                        </div>
                        <div className="text-[10px] text-[#5B6B84]">
                          SITE PLAN · MULTI-CAMERA ANGLE &amp; SATELLITE DISH ARRAY
                        </div>
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#C8102E]" />
                    </div>
                  </div>
                ) : (
                  <div className="rounded-[2px] p-6 bg-[#FFFFFF] border border-[#0A1F44]/20 text-[#0A1F44] font-mono text-xs flex flex-col justify-between aspect-[4/3] shadow-xs">
                    {/* Telemetry Header */}
                    <div className="flex justify-between items-center pb-3 border-b border-[#0A1F44]/15">
                      <span className="text-[#0A1F44] font-bold flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8102E] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C8102E]"></span>
                        </span>
                        <Radio className="w-3.5 h-3.5 text-[#C8102E]" />
                        <span>UPLINK TELEMETRY STATUS</span>
                      </span>
                      <span className="text-[#5B6B84] text-[10px] bg-[#F8F9FA] px-2 py-0.5 border border-[#0A1F44]/15 rounded-[2px] font-semibold">
                        TSA-TX / 4K UHD
                      </span>
                    </div>

                    {/* Telemetry Metrics Grid */}
                    <div className="space-y-2.5 py-1">
                      <div className="flex justify-between items-center py-1 border-b border-[#0A1F44]/10 text-[11px]">
                        <span className="text-[#5B6B84]">Primary Satellite Vector:</span>
                        <span className="font-bold text-[#0A1F44] font-mono">PALAPA-D / 113.0°E</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-[#0A1F44]/10 text-[11px]">
                        <span className="text-[#5B6B84]">Simultaneous Channels:</span>
                        <span className="font-bold text-[#0A1F44] font-mono">EN / ID / FR / AR / ZH</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-[#0A1F44]/10 text-[11px]">
                        <span className="text-[#5B6B84]">Broadcast Latency:</span>
                        <span className="font-bold text-[#C8102E] font-mono bg-[#C8102E]/10 px-2 py-0.5 rounded-[2px]">
                          0.22s Direct Feed
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-[#0A1F44]/10 text-[11px]">
                        <span className="text-[#5B6B84]">Accredited Press Bureau:</span>
                        <span className="font-bold text-[#0A1F44] font-mono">42 International Agencies</span>
                      </div>
                    </div>

                    {/* Telemetry Institutional Note */}
                    <div className="p-3 bg-[#F8F9FA] rounded-[2px] border border-[#0A1F44]/15 text-[11px] text-[#5B6B84] leading-relaxed italic">
                      "Encrypted international satellite feed synchronized with state media pool and global wire services with zero disruption."
                    </div>
                  </div>
                )}
              </div>
            </TiltCard>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* SECTION 5: Execution, Perfected! -> Sovereign Assemblies                  */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 border-b border-[#0A1F44]/15 relative bg-[#F8F9FA]">
        <div className="max-w-[1360px] mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 -rotate-2 text-[#5B6B84] text-xl font-architect mx-auto"
          >
            <span className="w-7 h-7 rounded-full border border-[#0A1F44] flex items-center justify-center font-mono text-xs font-bold text-[#0A1F44] bg-[#FFFFFF]">
              5
            </span>
            <svg width="64" height="6" viewBox="0 0 64 6" fill="none" className="opacity-40">
              <path d="M0 3H64" stroke="#0A1F44" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
            <span>Execution, Perfected!</span>
            <svg width="64" height="6" viewBox="0 0 64 6" fill="none" className="opacity-40">
              <path d="M0 3H64" stroke="#0A1F44" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
          </motion.div>

          <div className="relative inline-block mx-auto">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-[#0A1F44] leading-[0.95] max-w-4xl mx-auto">
              Sovereign Assemblies
            </h2>
            <HandDrawnUnderline className="mx-auto mt-3" delay={0.35} />
          </div>

          <p className="text-lg text-[#5B6B84] max-w-2xl mx-auto font-sans leading-relaxed">
            Over 45,000 delegates hosted, $450M+ in bilateral accords facilitated, and a zero-incident protocol benchmark across all major state conventions.
          </p>

          {/* Metric Grid Cards with Animated Number Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 max-w-4xl mx-auto">
            {[
              { target: 18, suffix: "+", label: "SOVEREIGN DELEGATIONS", note: "ASEAN / G20" },
              { target: 450, prefix: "$", suffix: "M+", label: "BILATERAL ACCORDS", note: "State Agreements" },
              { target: 45000, suffix: "+", label: "PLENARY ATTENDEES", note: "VIP Credentialed" },
              { target: 100, suffix: "%", label: "PROTOCOL INTEGRITY", note: "Zero Incident Record" }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="card-clean p-5 rounded-[2px] bg-[#FFFFFF] text-left border border-[#0A1F44]/15 shadow-2xs hover:border-[#C8102E]/50 transition-colors"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-[#0A1F44]">
                  <AnimatedCounter target={stat.target} prefix={stat.prefix || ""} suffix={stat.suffix || ""} />
                </div>
                <div className="font-mono text-[10px] text-[#C8102E] font-bold mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="font-architect text-sm text-[#5B6B84] mt-1">{stat.note}</div>
              </motion.div>
            ))}
          </div>

          <div className="pt-8">
            <MagneticButton>
              <button
                onClick={() => handleNav("/events")}
                className="btn-tech-red group focus:outline-none cursor-pointer"
              >
                <div className="w-10 h-full bg-[#A50D25] flex items-center justify-center text-white border-r border-white/20">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="px-6 h-full flex items-center font-mono text-xs font-semibold">
                  View All Plenary Records
                </div>
              </button>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2.5 ARCHITECTURAL MANDATE STACK (Scroll-Driven Stacking Showcase)         */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 border-b border-[#0A1F44]/15 bg-[#FFFFFF] relative">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-[#0A1F44]/15">
            <div>
              <div className="font-architect text-xl text-[#5B6B84] -rotate-2 mb-2">
                ~ tactile monograph archives &amp; spatial schematics ~
              </div>
              <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#0A1F44] leading-[0.95]">
                Mandate Case Archives &amp; Schematics
              </h2>
            </div>
            <div className="max-w-md font-mono text-xs text-[#5B6B84] leading-relaxed">
              Scroll downward to flip through verified sovereign dossiers, spatial blueprints, and ratified bilateral accords.
            </div>
          </div>

          <ScrollStack>
            {scrollStackProjects.map((proj, idx) => (
              <ScrollStackItem
                key={proj.id}
                project={proj}
                index={idx}
                total={scrollStackProjects.length}
                onClick={() => handleNav("/portfolio")}
              />
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. "AN OPEN LETTER" SECTION - Clean White Parchment Sheet                 */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 border-b border-[#0A1F44]/15 relative bg-[#FFFFFF] overflow-hidden">
        {/* Subtle background compass watermark */}
        <div className="absolute top-10 right-8 hidden lg:block pointer-events-none">
          <ArchitecturalCompass size={200} opacity={0.08} />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          
          <div className="font-architect text-[#5B6B84] text-xl sm:text-2xl mb-2 -rotate-2">
            to those who shape the world
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-bold text-[#0A1F44] leading-[0.95] mb-12">
            An Open Letter
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-3xl"
          >
            
            {/* Clean Envelope Flap Geometry */}
            <div className="w-full flex justify-center -mb-2">
              <svg viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 sm:h-20 drop-shadow-xs">
                <path d="M20 10L0 100H800L780 10C778 4 772 0 766 0H34C28 0 22 4 20 10Z" fill="#F8F9FA" stroke="#0A1F44" strokeWidth="1" strokeOpacity="0.25" />
              </svg>
            </div>

            {/* Letter Sheet Paper with Letterpress Typography */}
            <div className="card-clean rounded-[2px] bg-[#FFFFFF] border border-[#0A1F44]/25 p-8 sm:p-14 text-left shadow-[4px_4px_0px_rgba(10,31,68,0.08)] relative z-10 space-y-5">
              
              <div className="flex justify-between items-center pb-4 border-b border-dashed border-[#0A1F44]/20 text-xs font-mono text-[#5B6B84]">
                <span>PT TRICATHA SEMPITERNAL ASIA · DISPATCH</span>
                <span className="text-[#C8102E] font-bold">JAKARTA HEADQUARTERS</span>
              </div>

              <p className="font-display text-lg sm:text-2xl font-bold text-[#0A1F44] leading-snug">
                To those who shape nations, industries, and multilateral futures,
              </p>

              <p className="font-sans text-base sm:text-lg text-[#0A1F44]/90 leading-relaxed">
                Assemblies were never meant to happen through rigid checklists, sterile venues, and bureaucratic friction.
              </p>

              <p className="font-sans text-base sm:text-lg text-[#0A1F44]/90 leading-relaxed">
                They begin more naturally than that: through sovereign trust, cultural resonance, and visionary dialogue. Through the back-and-forth between protocol precision and human inspiration that gives multilateral diplomacy its life.
              </p>

              <p className="font-sans text-base sm:text-lg text-[#0A1F44]/90 leading-relaxed font-medium">
                We built Tricatha Sempiternal Asia for the way high-stakes assemblies actually happen: a sanctuary where strategic intent is expressed with grandeur, and where logistical anxiety fades entirely into the background.
              </p>

              <p className="font-sans text-base sm:text-lg text-[#0A1F44] leading-relaxed font-semibold">
                So you can deliberate more freely, align more deeply, and leave a permanent mark on history.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-dashed border-[#0A1F44]/20">
                <div>
                  <div className="font-display font-bold text-lg text-[#0A1F44]">This is for you.</div>
                  <div className="font-architect text-xl text-[#C8102E] mt-1 -rotate-2">
                    ~ The Directorate, Tricatha Asia
                  </div>
                </div>
                <div className="w-12 h-12 rounded-[2px] border border-[#0A1F44]/20 p-1 bg-[#FFFFFF] flex items-center justify-center">
                  <img src={logoTSA} alt="Seal" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </section>



      {/* ========================================================================= */}
      {/* 5. FOLDER-TABBED FAQS                                                     */}
      {/* ========================================================================= */}
      <section id="faqs" className="py-24 sm:py-36 px-4 sm:px-8 border-b border-[#0A1F44]/15 relative bg-[#FFFFFF]">
        <div className="max-w-[1360px] mx-auto">
          
          <div className="flex justify-center -mb-[1px] relative z-20">
            <div className="relative">
              <svg width="220" height="46" viewBox="0 0 296 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xs">
                <path d="M0.68 55.09C18.68 55.09 34.29 43.67 38.32 27.54C42.39 11.43 58 0 75.98 0H221.58C239.58 0 255.19 11.42 259.22 27.55C263.27 43.67 278.88 55.09 296.86 55.09H0.68Z" fill="#F8F9FA" stroke="#0A1F44" strokeWidth="1" strokeOpacity="0.25" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A1F44]">
                QUESTIONS &amp; PROTOCOL
              </div>
            </div>
          </div>

          <div className="card-clean rounded-[4px] p-8 sm:p-14 lg:p-20 bg-[#F8F9FA] border border-[#0A1F44]/20 relative z-10 shadow-[4px_4px_0px_rgba(10,31,68,0.08)]">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="-rotate-2 font-architect text-[#5B6B84] text-2xl">
                  ~ need institutional clarification? ~
                </div>

                <h3 className="font-display text-3xl sm:text-5xl font-bold text-[#0A1F44] leading-[1.05]">
                  Frequently Asked Questions
                </h3>

                <p className="font-sans text-[#5B6B84] leading-relaxed">
                  Clear parameters governing security, sovereign etiquette, bilateral confidentiality, and execution timelines.
                </p>

                <div className="pt-4">
                  <a
                    href="mailto:partnership@tricatha.com"
                    className="btn-tech-red inline-flex items-center"
                  >
                    <div className="w-10 h-full bg-[#A50D25] flex items-center justify-center text-white border-r border-white/20">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <div className="px-5 h-full flex items-center font-mono text-xs font-semibold">
                      Direct Dispatch Desk
                    </div>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {faqItems.map((item, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={item.q}
                      className="border-b border-dashed border-[#0A1F44]/20 pb-4 transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        className="w-full text-left py-3 flex items-start justify-between gap-4 cursor-pointer group focus:outline-none"
                      >
                        <span className="font-display font-semibold text-base sm:text-lg text-[#0A1F44] group-hover:text-[#C8102E] transition-colors">
                          {item.q}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-[2px] border border-[#0A1F44]/25 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 bg-[#C8102E] text-white border-[#C8102E]" : "bg-[#FFFFFF] text-[#0A1F44]"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="pt-2 pb-3 font-sans text-sm sm:text-base text-[#5B6B84] leading-relaxed">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
