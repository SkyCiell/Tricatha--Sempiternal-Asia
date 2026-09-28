import React from "react";
import { ArrowUpRight, ShieldCheck, Award, Globe, ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import Leadership from "../components/Leadership";
const plenaryPhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop";
const aseanPhoto = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop";

export default function AboutPage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  const operationalTenets = [
    {
      num: "01",
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
      num: "02",
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
      num: "03",
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
    <div className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-white/10">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>The City Tower, Jakarta · Corporate Charter</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.08]">
              Institutional Charter &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Operational Doctrine.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
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

      {/* 2. CORPORATE IDENTITY & STRATEGIC SPLIT */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-20 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (5 cols): Authentic Plenary Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="editorial-image-frame rounded aspect-[4/5] bg-[#050F22] border border-white/15 overflow-hidden shadow-2xl relative">
              <img
                src={plenaryPhoto}
                alt="TSA Ministerial Plenary Command"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/40 to-transparent opacity-90 pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-5 bg-[#0A1F44]/95 backdrop-blur-md border border-white/15 rounded text-white space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#C8102E] font-semibold tracking-wider uppercase text-[11px]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>CENTRAL JAKARTA COMMAND</span>
                </div>
                <p className="text-slate-300 font-sans text-xs leading-snug">
                  The City Tower, 12th Floor, Thamrin Corporate Corridor, Jakarta Pusat.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): The Institutional Mandate */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C8102E]">
                Operational Creed &amp; Precedence
              </span>

              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[42px] font-semibold text-white tracking-tight leading-tight">
                "We bridge sovereign protocol standards with enterprise commercial execution."
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Operating at the confluence of government policy, corporate diplomacy, and experiential spatial design, TSA delivers high-stakes assemblies where reputations are defended and strategic agendas advance with zero margin for error.
              </p>

              <p className="text-sm text-slate-400 font-normal leading-relaxed">
                Our directors coordinate directly with ministerial secretariats, foreign embassy delegations, state-owned enterprise boards, and multinational consortiums. Through single-source operational accountability, we remove multi-vendor friction and guarantee technical perfection.
              </p>
            </div>

            {/* Operational Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 font-mono">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-white font-heading">8+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-[#C8102E] font-heading">120+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Events Delivered</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-white font-heading">45+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Ministries &amp; SOEs</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-white font-heading">85K+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Delegates Hosted</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. THREE CORE OPERATIONAL TENETS (Editorial 2-Column Spread, NOT generic cards) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Lead Intro (5 cols) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>Foundational Values</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-tight leading-tight">
              The Doctrine of <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Zero-Error Delivery.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Every production executed by TSA adheres to three non-negotiable standards established since our founding. We do not compromise on protocol precedence, operational fidelity, or cross-border network access.
            </p>
          </div>

          {/* Right Tenet Entries (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
            {operationalTenets.map((tenet) => (
              <div key={tenet.num} className="py-8 sm:py-10 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[#C8102E]">
                    {tenet.num}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400">
                    {tenet.tagline}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  {tenet.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {tenet.desc}
                </p>

                <div className="space-y-2 pt-2">
                  {tenet.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2.5 text-xs text-slate-200 font-mono">
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

      {/* 4. CHRONOLOGICAL EVOLUTION & MILESTONES (Clean Timeline Ribbon) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C8102E]">
              Institutional Trajectory
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Operational Milestones &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Strategic Expansion.
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-normal leading-relaxed">
            A chronological record of our institutional maturation from bespoke diplomatic advisory into Southeast Asia's integrated corporate event ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {milestones.map((m, idx) => (
            <div key={idx} className="space-y-3 pt-6 border-t-2 border-white/20 hover:border-[#C8102E] transition-colors">
              <div className="font-mono text-xs font-bold text-[#C8102E] tracking-wider">
                {m.period}
              </div>
              <h3 className="font-heading text-base font-semibold text-white tracking-tight">
                {m.milestone}
              </h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed font-normal">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MULTIDISCIPLINARY PRACTICE LEADERSHIP */}
      <Leadership />

      {/* 6. CLOSING INQUIRY PANEL (Matching Events Page Benchmark) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-16">
        <div className="bg-[#0A1F44] text-white rounded p-10 sm:p-14 border border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>The City Tower, Jakarta · Executive Mandates</span>
              </div>
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
