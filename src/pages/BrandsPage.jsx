import React from "react";
import { ArrowUpRight, CheckCircle2, FileText, Video, Sparkles, Building2 } from "lucide-react";
import gwiPhoto from "../assets/9c3a2a75-3f45-48d6-b86b-43955e71d699 (1).jpg";
import plenaryPhoto from "../assets/DSC08824.JPG";
import aseanPhoto from "../assets/20231130_131733_311.jpg";

export default function BrandsPage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  const scrollToUnit = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pt-20 bg-[#071731] min-h-screen text-[#F1F5F9] font-sans selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. Page Header - Deep Navy Editorial Banner */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>UNIFIED GROUP GOVERNANCE</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.08]">
                TSA Business Group &amp; <br />
                <span className="text-slate-300 font-normal">Specialized Practice Entities.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
                Four specialized operating entities—<strong>ENCHANTE</strong>, <strong>DNA STUDIO</strong>, <strong>GWI</strong>, and <strong>GOADV</strong>—operating under the unified governance of parent holding <strong>PT Tricatha Sempiternal Asia</strong> at The City Tower in Central Jakarta. Together, they form an uninterrupted value chain spanning sovereign counsel, public affairs, experiential protocol, and multimedia broadcast.
              </p>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red shrink-0 self-start lg:self-auto cursor-pointer"
            >
              <span>Inquire Group Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Navigator Pill Strip */}
          <div className="pt-10 flex flex-wrap items-center gap-2 border-t border-white/10 mt-10 text-xs font-mono">
            <span className="text-slate-400 mr-2 uppercase text-[11px] font-semibold">Jump to Practice:</span>
            {[
              { id: "unit-enchante", label: "ENCHANTE" },
              { id: "unit-dna", label: "DNA STUDIO" },
              { id: "unit-gwi", label: "GWI" },
              { id: "unit-govadv", label: "GOADV" },
              { id: "unit-tsa", label: "TRICATHA SEMPITERNAL ASIA (HOLDING)" }
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => scrollToUnit(nav.id)}
                className="px-3.5 py-1.5 rounded bg-[#071731] hover:bg-[#C8102E] text-white border border-white/15 transition-colors cursor-pointer"
              >
                {nav.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. UNIT 01: ENCHANTE (Haute Protocol & Spatial Scenography) */}
      {/* ========================================================================= */}
      <section id="unit-enchante" className="py-20 sm:py-28 bg-[#071731] border-b border-white/10 scroll-mt-20">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C8102E] tracking-wider uppercase">
                  HAUTE PROTOCOL &amp; SPATIAL SCENOGRAPHY
                </span>
                <span className="w-8 h-px bg-white/20" />
                <span className="font-mono text-xs text-slate-400">BUSINESS GROUP PRACTICE</span>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  ENCHANTE
                </h2>
                <p className="font-mono text-xs sm:text-sm text-slate-400 mt-1">
                  Enchante Experiential, Diplomatic Banquets &amp; State Precedence
                </p>
              </div>

              <div className="p-4 bg-[#0A1F44] rounded border-l-4 border-[#C8102E] text-sm text-white font-medium leading-relaxed">
                Head-of-State Diplomatic Protocols, Ambassadorial Galas &amp; Immersive Scenography
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                ENCHANTE executes bilateral head-of-state diplomatic banquets, ambassadorial galas, and exclusive corporate assemblies. With rigorous command of international precedence hierarchies, motorcade marshaling, and haute scenography, ENCHANTE transforms formal gatherings into unforgettable institutional milestones.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Bilateral Head-of-State Conferences",
                  "Diplomatic Gala & State Banquets",
                  "Experiential Spatial Scenography",
                  "VVIP Seating Etiquette & Protocol"
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-6 font-mono text-xs text-slate-400 border-t border-white/10">
                <div>
                  <span className="text-slate-400 block text-[10px]">HEAD-OF-STATE BANQUETS</span>
                  <span className="text-white font-semibold text-sm">12+ State Banquets</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="text-slate-400 block text-[10px]">PRECEDENCE COMPLIANCE</span>
                  <span className="text-[#FFFFFF] font-semibold text-sm">100% Zero-Error Protocol</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleInquiry}
                  className="btn-editorial-red inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Inquire ENCHANTE Mandate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5">
              <div className="editorial-image-frame rounded aspect-[4/5] shadow-md bg-[#050F22] overflow-hidden border border-white/15 relative">
                <img
                  src={plenaryPhoto}
                  alt="ENCHANTE Diplomatic Plenary Scenography"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050F22]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#071731]/95 backdrop-blur-xs rounded border border-white/15 text-white font-mono text-xs">
                  <div className="text-[#C8102E] font-semibold text-[10px] uppercase">
                    ENCHANTE BENCHMARK
                  </div>
                  <div className="font-sans font-medium text-sm mt-0.5">
                    Ambassadorial Gala &amp; Diplomatic Dinners
                  </div>
                  <div className="text-slate-300 text-[11px] font-sans">
                    Precision lighting, acoustic baffles, and state precedence seating
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. UNIT 02: DNA STUDIO (Creative Broadcast & 4K Cinema Suite) */}
      {/* ========================================================================= */}
      <section id="unit-dna" className="py-20 sm:py-28 bg-[#0A1F44] border-b border-white/10 scroll-mt-20">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C8102E] tracking-wider uppercase">
                  CREATIVE BROADCAST &amp; MEDIA
                </span>
                <span className="w-8 h-px bg-white/20" />
                <span className="font-mono text-xs text-slate-400">4K CINEMA FACILITY</span>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  DNA STUDIO
                </h2>
                <p className="font-mono text-xs sm:text-sm text-slate-400 mt-1">
                  DNA STUDIO Creative Broadcast, Multimedia Suites &amp; Virtual Feeds
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Headquartered at The City Tower in Jakarta, DNA STUDIO is TSA's dedicated 4K multi-camera broadcast facility. Producing executive leader dialogues, high-production corporate podcasts, and syndicated plenary live feeds, DNA STUDIO elevates corporate and sovereign storytelling to broadcast television fidelity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Turnkey 4K Cinema Multi-Cam Live Feeds",
                  "Executive Thought Leadership Podcasts",
                  "Simultaneous Interpretation Audio Routing",
                  "Syndicated International Broadcast Distribution"
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-6 font-mono text-xs text-slate-400 border-t border-white/10">
                <div>
                  <span className="text-slate-400 block text-[10px]">DIGITAL REACH</span>
                  <span className="text-white font-semibold text-sm">2.4M+ Syndicated Views</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="text-slate-400 block text-[10px]">STUDIO HARDWARE</span>
                  <span className="text-[#FFFFFF] font-semibold text-sm">4K Cinema Cinema Rig</span>
                </div>
              </div>
            </div>

            {/* Right Card (6 cols) */}
            <div className="lg:col-span-6 bg-[#071731] text-white rounded p-8 sm:p-10 border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-xs text-[#C8102E] uppercase tracking-wider block">
                    BROADCAST SUITE AT THE CITY TOWER
                  </span>
                  <h3 className="font-heading text-xl font-medium text-white mt-1">
                    Leader Dialogue Production
                  </h3>
                </div>
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-[#C8102E]">
                  <Video className="w-4 h-4" />
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Featuring acoustic isolation, Blackmagic 4K studio cameras, broadcast-grade Sennheiser audio routing, and direct high-speed fibre up-links to regional media syndicates.
              </p>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 bg-[#0A1F44] rounded border border-white/10">
                  <span className="text-slate-400 block text-[10px]">VIDEO FIDELITY</span>
                  <span className="text-white text-base font-semibold mt-1 block">4K Cinema Pro</span>
                </div>
                <div className="p-4 bg-[#0A1F44] rounded border border-white/10">
                  <span className="text-slate-400 block text-[10px]">DISTRIBUTION</span>
                  <span className="text-[#FFFFFF] text-base font-semibold mt-1 block">Global Syndication</span>
                </div>
              </div>

              <button
                onClick={handleInquiry}
                className="btn-editorial-red w-full cursor-pointer"
              >
                <span>Book DNA STUDIO Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. UNIT 03: GWI (Gema Waskita Interaktifa - Public Affairs) */}
      {/* ========================================================================= */}
      <section id="unit-gwi" className="py-20 sm:py-28 bg-[#071731] border-b border-white/10 scroll-mt-20">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="editorial-image-frame rounded aspect-[4/5] shadow-md bg-[#050F22] overflow-hidden border border-white/15 relative">
                <img
                  src={gwiPhoto}
                  alt="GWI Public Cultural Assembly"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050F22]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#071731]/95 backdrop-blur-xs rounded border border-white/15 text-white font-mono text-xs">
                  <div className="text-[#C8102E] font-semibold text-[10px] uppercase">
                    GWI CIVIC SCALE ACTIVATION
                  </div>
                  <div className="font-sans font-medium text-sm mt-0.5">
                    Gema Waskita Cultural Assembly
                  </div>
                  <div className="text-slate-300 text-[11px] font-sans">
                    45,000+ Live Attendees · 1.2M Concurrent Viewers
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C8102E] tracking-wider uppercase">
                  COMMUNICATIONS &amp; ACTIVATION
                </span>
                <span className="w-8 h-px bg-white/20" />
                <span className="font-mono text-xs text-slate-400">PUBLIC SECTOR ENGAGEMENT</span>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  GWI
                </h2>
                <p className="font-mono text-xs sm:text-sm text-slate-400 mt-1">
                  Gema Waskita Interaktifa · Public Affairs, Campaigns &amp; Civic Festivals
                </p>
              </div>

              <div className="p-4 bg-[#0A1F44] rounded border-l-4 border-[#C8102E] text-sm text-white font-medium leading-relaxed">
                Integrated Public Affairs, Strategic Communications &amp; Civic Scale Festivals
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                GWI operates at the frontier of public sector communications, civic sentiment architecture, and high-capacity cultural festivals. Combining immersive digital projection mapping with crisis narrative defense, GWI mobilizes audiences across nationwide campaigns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Strategic Public Affairs Orchestration",
                  "Corporate Crisis & Reputation Defense",
                  "High-Capacity Cultural Scenography",
                  "National Digital Narrative Amplification"
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-6 font-mono text-xs text-slate-400 border-t border-white/10">
                <div>
                  <span className="text-slate-400 block text-[10px]">CROWD SCALE</span>
                  <span className="text-white font-semibold text-sm">45,000+ In-Person</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="text-slate-400 block text-[10px]">BROADCAST REACH</span>
                  <span className="text-[#FFFFFF] font-semibold text-sm">1.2M Digital Viewers</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleInquiry}
                  className="btn-editorial-red inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Inquire GWI Mandate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. UNIT 04: GOADV (Government Relations & Regulatory Advisory) */}
      {/* ========================================================================= */}
      <section id="unit-govadv" className="py-20 sm:py-28 bg-[#0A1F44] border-b border-white/10 scroll-mt-20">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C8102E] tracking-wider uppercase">
                  GOVERNMENT RELATIONS
                </span>
                <span className="w-8 h-px bg-white/20" />
                <span className="font-mono text-xs text-slate-400">REGULATORY INTELLIGENCE</span>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  GOADV
                </h2>
                <p className="font-mono text-xs sm:text-sm text-slate-400 mt-1">
                  GOADV Policy Intelligence &amp; Strategic Regulatory Advisory
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                GOADV bridges private enterprise and state regulatory authorities. Operating under strict protocol alignment, our advisors assist domestic and multinational institutions in navigating cross-ministry compliance, public-private partnership (PPP) frameworks, and state regulatory horizons.
              </p>

              <div className="p-6 bg-[#071731] rounded border border-white/10 space-y-3">
                <span className="font-mono text-xs text-slate-300 font-semibold uppercase tracking-wider block">
                  Core Practice Focus Areas
                </span>
                <ul className="space-y-2 text-xs text-slate-300 font-sans">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>Cross-Ministry Liaison &amp; Regulatory Audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>Public-Private Sector Alliance Building</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>Digital Governance &amp; Data Residency Frameworks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>Bilateral Business Diplomacy Accords</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Structured Matrix (6 cols) */}
            <div className="lg:col-span-6 bg-[#071731] text-white rounded p-8 sm:p-10 border border-white/10 space-y-6">
              <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-[#C8102E] uppercase tracking-wider block">
                    OPERATIONAL BENCHMARK
                  </span>
                  <h3 className="font-heading text-xl font-medium text-white mt-1">
                    Regulatory Liaison Performance
                  </h3>
                </div>
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-[#C8102E]">
                  <FileText className="w-4 h-4" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 bg-[#0A1F44] rounded border border-white/10">
                  <span className="text-slate-400 block text-[10px]">MINISTRIES PARTNERED</span>
                  <span className="text-white text-xl font-semibold mt-1 block">14 Ministries</span>
                </div>
                <div className="p-4 bg-[#0A1F44] rounded border border-white/10">
                  <span className="text-slate-400 block text-[10px]">APPROVAL LATENCY</span>
                  <span className="text-[#FFFFFF] text-xl font-semibold mt-1 block">-68% Delay</span>
                </div>
              </div>

              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                GOADV maintains trusted liaison channels with key state ministries including Communication &amp; Digital Affairs, State-Owned Enterprises, Maritime Affairs &amp; Investment, and Culture.
              </p>

              <button
                onClick={handleInquiry}
                className="btn-editorial-red w-full cursor-pointer"
              >
                <span>Request GOADV Regulatory Briefing</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. UNIT 05: PARENT HOLDING - TRICATHA SEMPITERNAL ASIA */}
      {/* ========================================================================= */}
      <section id="unit-tsa" className="py-20 sm:py-28 bg-[#071731] border-b border-white/10 scroll-mt-20">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C8102E] tracking-wider uppercase">
                  PARENT HOLDING &amp; SOVEREIGN COUNSEL
                </span>
                <span className="w-8 h-px bg-white/20" />
                <span className="font-mono text-xs text-slate-400">EST. JAKARTA</span>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Tricatha Sempiternal Asia
                </h2>
                <p className="font-mono text-xs sm:text-sm text-slate-400 mt-1">
                  Executive Holding, Cross-Border Mandates &amp; Sovereign Roadmaps
                </p>
              </div>

              <div className="p-4 bg-[#0A1F44] rounded border-l-4 border-[#C8102E] text-sm text-white font-medium leading-relaxed">
                Strategic Advisory, Cross-Border Joint Ventures &amp; Sovereign Governance
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Tricatha Sempiternal Asia operates as the parent holding and executive leadership practice, providing confidential counsel to corporate chairpersons, sovereign wealth funds, and ministerial secretariats navigating complex investment covenants and institutional reorganizations across the Southeast Asian corridor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Executive Positioning & Sovereign Briefings",
                  "Cross-Border Joint Venture Structuring",
                  "Institutional Governance Blueprints",
                  "Regulatory Strategy & Risk Roadmaps"
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-6 font-mono text-xs text-slate-400 border-t border-white/10">
                <div>
                  <span className="text-slate-400 block text-[10px]">VERIFIED SCALE</span>
                  <span className="text-white font-semibold text-sm">18+ Sovereign Mandates</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="text-slate-400 block text-[10px]">ACCORD VALUE</span>
                  <span className="text-[#FFFFFF] font-semibold text-sm">$450M+ Bilateral</span>
                </div>
              </div>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5">
              <div className="editorial-image-frame rounded aspect-[4/5] shadow-md bg-[#050F22] overflow-hidden border border-white/15 relative">
                <img
                  src={aseanPhoto}
                  alt="Tricatha Sempiternal Asia Sovereign Plenary"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050F22]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#071731]/95 backdrop-blur-xs rounded border border-white/15 text-white font-mono text-xs">
                  <div className="text-[#C8102E] font-semibold text-[10px] uppercase">
                    HEADQUARTERS STANDARD
                  </div>
                  <div className="font-sans font-medium text-sm mt-0.5">
                    The City Tower, 12th Floor, Jakarta
                  </div>
                  <div className="text-slate-300 text-[11px] font-sans">
                    Ministerial clearance &amp; bilateral non-disclosure covenants
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. GROUP MANDATE INQUIRY */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#050F22] border-t border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
            INTEGRATED PRACTICE MANDATES
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-medium text-white tracking-tight">
            Engage the Full TSA Business Group Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Organizations can commission individual entities—ENCHANTE, DNA STUDIO, GWI, or GOADV—or deploy a turnkey integrated mandate across strategic counsel, protocol, communications, and broadcasting.
          </p>
          <div className="pt-2">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Initiate Group Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
