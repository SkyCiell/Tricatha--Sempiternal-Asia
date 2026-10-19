import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Leadership from "../components/Leadership";
const plenaryPhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop";

export default function AboutPage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  const operationalTenets = [
    {
      id: "integrity",
      title: "Integritas Penuh · Uncompromising Integrity",
      tagline: "Sovereign Discretion & Bilateral Covenants",
      desc: "Operating at the nexus of government policy and corporate capital requires absolute ethical fidelity. Every mandate undertaken by TSA is governed by binding non-disclosure covenants, protocol etiquette precedence, and institutional discretion.",
      points: [
        "Head-of-state protocol clearance & diplomatic decorum",
        "Encrypted multi-lingual interpretation & audio feeds",
        "Bilateral signing security perimeters & VVIP logistics"
      ]
    },
    {
      id: "precision",
      title: "Presisi Solusi · Operational Precision",
      tagline: "Single-Second Run-Down & Spatial Engineering",
      desc: "In ministerial assemblies and televised shareholder summits, there is zero tolerance for technical failure. We engineer every square meter of venue space, redundant electrical backup, and run-of-show cue with empirical rigor.",
      points: [
        "Minute-by-minute show calling & stage telemetry",
        "Dual-redundant 4K broadcast switching & live telecast",
        "Multi-hall crowd flow dynamics & emergency egress routing"
      ]
    },
    {
      id: "network",
      title: "Jaringan Asia · Pan-Asian Network",
      tagline: "Direct Institutional Access Across ASEAN",
      desc: "From our executive headquarters at The City Tower in Central Jakarta, TSA maintains accredited relationships with regional convention bureaus, diplomatic missions, and premier convention complexes across Southeast Asia.",
      points: [
        "Tier-1 venue priority (JCC, ICE BSD, BICC Bali, JIExpo)",
        "Inter-ministerial liaison & public-private partnerships",
        "Bilingual executive delegation management teams"
      ]
    }
  ];

  const milestones = [
    {
      period: "2018 – 2020",
      milestone: "Foundation & Sovereign Protocol Practice",
      detail: "Established in Jakarta as a specialized advisory focusing on diplomatic seating precedence, ministerial bilateral meetings, and high-level stakeholder convenings."
    },
    {
      period: "2021 – 2022",
      milestone: "Turnkey MICE & Commercial Expo Engineering",
      detail: "Scaled operations into large-scale exhibition architecture, managing multi-hall trade expos and national congresses across Indonesia's primary exhibition hubs."
    },
    {
      period: "2023 – 2024",
      milestone: "DNA Studio Broadcast Center & Holding Expansion",
      detail: "Commissioned the dedicated 4K multi-camera soundstage at The City Tower 12th Floor, unifying broadcast telepresence, GWI civic activations, and GOADV state relations."
    },
    {
      period: "2025 – 2026",
      milestone: "Flagship Regional Plenaries & Pan-ASEAN Delivery",
      detail: "Orchestrating sovereign summits and monumental clean energy expositions uniting 18 ministerial delegations and over 45,000 in-person participants."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#071731] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">

      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-[#071731]/10">

          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#071731] tracking-tight leading-[1.08]">
              Institutional Charter &amp; <br />
              <span className="font-editorial italic font-normal text-slate-600">
                Operational Doctrine.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Headquartered at The City Tower in Central Jakarta, PT Tricatha Sempiternal Asia unites high-stakes event organization, sovereign protocol, business conferences, trade exhibitions, and multimedia broadcast into an integrated operational practice.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-start lg:items-end justify-start lg:justify-end">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red"
            >
              <span>Consult Practice Directors</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. CORPORATE IDENTITY & STRATEGIC MANDATE (Natural Responsive Editorial Canvas) */}
      <section className="relative w-full rounded-2xl sm:rounded-3xl bg-[#071731] text-white overflow-hidden border border-white/10 my-10 sm:my-14 shadow-2xl flex flex-col justify-between">
        {/* Fullscreen Photo Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <motion.img
            src={plenaryPhoto}
            alt="TSA Ministerial Plenary Command"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover object-center"
          />
          {/* Directional Scrim for Supreme Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/80 via-45% to-[#071731]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/75 via-55% to-transparent pointer-events-none" />
        </div>

        {/* Center / Direct Typography Over Media */}
        <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              "We bridge sovereign protocol standards with <br />
              <span className="font-editorial italic font-normal text-slate-300">
                enterprise commercial execution."
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              Operating at the confluence of government policy, corporate diplomacy, and experiential spatial design, TSA delivers high-stakes assemblies where reputations are defended and strategic agendas advance with zero margin for error.
            </p>

            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-3xl">
              Our directors coordinate directly with ministerial secretariats, foreign embassy delegations, state-owned enterprise boards, and multinational consortiums. Through single-source operational accountability, we guarantee precision.
            </p>
          </div>
        </div>

        {/* Bottom Metrics Bar Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 pb-6 sm:pb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/15 font-mono max-w-4xl">
            <div className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-bold text-white font-heading">8+</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider font-sans">Years Experience</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-bold text-[#C8102E] font-heading">120+</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider font-sans">Events Delivered</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-bold text-white font-heading">45+</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider font-sans">Ministries &amp; SOEs</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-bold text-white font-heading">85K+</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider font-sans">Delegates Hosted</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE CORE OPERATIONAL TENETS */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-[#071731]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Lead Intro (5 cols) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#071731] tracking-tight leading-tight">
              The Doctrine of <br />
              <span className="font-editorial italic font-normal text-slate-600">
                Zero-Error Delivery.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Every production executed by TSA adheres to three non-negotiable standards established since our founding. We do not compromise on protocol precedence, operational fidelity, or cross-border network access.
            </p>
          </div>

          {/* Right Tenet Entries (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-[#071731]/10 border-t border-b border-[#071731]/10">
            {operationalTenets.map((tenet) => (
              <div key={tenet.id} className="py-8 sm:py-10 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono tracking-wider uppercase text-slate-500 font-semibold">
                    {tenet.tagline}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#071731] tracking-tight">
                  {tenet.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {tenet.desc}
                </p>

                <div className="space-y-2 pt-2">
                  {tenet.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2.5 text-xs text-slate-700 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CHRONOLOGICAL EVOLUTION & MILESTONES */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-[#071731]/10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#071731]/10">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#071731] tracking-tight">
              Operational Milestones &amp; <br />
              <span className="font-editorial italic font-normal text-slate-600">
                Strategic Expansion.
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            A chronological record of our institutional maturation from bespoke diplomatic advisory into Southeast Asia's integrated corporate event ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {milestones.map((m, idx) => (
            <div key={idx} className="space-y-3 pt-6 border-t-2 border-[#071731]/15 hover:border-[#C8102E] transition-colors">
              <div className="font-mono text-xs font-bold text-[#C8102E] tracking-wider">
                {m.period}
              </div>
              <h3 className="font-heading text-base font-semibold text-[#071731] tracking-tight">
                {m.milestone}
              </h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed font-normal">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MULTIDISCIPLINARY PRACTICE LEADERSHIP (Selective Navy Contrast Moment) */}
      <Leadership />

      {/* 6. CLOSING INQUIRY PANEL (Matching Events Page Benchmark) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-16">
        <div className="bg-[#071731] text-white rounded p-10 sm:p-14 border border-[#071731] shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight font-heading leading-tight">
                Consult with our Practice Directors.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Connect directly with our senior leadership team at The City Tower in Jakarta to deliberate your upcoming sovereign assembly, trade expo, or corporate milestone.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red"
              >
                <span>Initiate Direct Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
