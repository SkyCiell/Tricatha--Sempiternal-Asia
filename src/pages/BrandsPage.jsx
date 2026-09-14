import React from "react";
import { ArrowUpRight, CheckCircle2, FileText, Video } from "lucide-react";
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
    <div className="pt-20 bg-[#FFFFFF] min-h-screen text-[#0A1F44] font-sans selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. Page Header - Deep Navy #0A1F44 Editorial Banner */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>UNIFIED GROUP GOVERNANCE</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.08]">
                Business Group &amp; <br />
                <span className="text-slate-300 font-normal">Specialized Practice Units.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
                Five specialized operational entities operating under unified governance at The City Tower in Jakarta. Together, they form an uninterrupted value chain spanning sovereign counsel, public affairs, experiential protocol, and multimedia broadcast.
              </p>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red shrink-0 self-start lg:self-auto"
            >
              <span>Inquire Group Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Navigator Pill Strip */}
          <div className="pt-10 flex flex-wrap gap-2 border-t border-white/10 mt-10 text-xs font-mono">
            {[
              { id: "unit-tsa", label: "01 / Tricatha Sempiternal Asia" },
              { id: "unit-gwi", label: "02 / Gema Waskita Interaktifa" },
              { id: "unit-govadv", label: "03 / GOVADV Policy" },
              { id: "unit-enchante", label: "04 / Enchante Experiential" },
              { id: "unit-dna", label: "05 / DNA STUDIO" }
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => scrollToUnit(nav.id)}
                className="px-3.5 py-1.5 rounded bg-white/10 hover:bg-[#C8102E] text-white border border-white/15 transition-colors cursor-pointer"
              >
                {nav.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. UNIT 01: TRICATHA SEMPITERNAL ASIA (Sovereign Advisory & Corporate Management) */}
      {/* ========================================================================= */}
      <section id="unit-tsa" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-slate-100">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C8102E] tracking-wider uppercase">
                  UNIT 01 · PARENT HOLDING &amp; COUNSEL
                </span>
                <span className="w-8 h-px bg-slate-200" />
                <span className="font-mono text-xs text-slate-500">EST. JAKARTA</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-[#0A1F44] tracking-tight leading-tight">
                Tricatha Sempiternal Asia
              </h2>

              <div className="p-4 bg-[#F5F6F8] rounded-md border-l-3 border-[#0A1F44] text-sm text-[#0A1F44] font-medium leading-relaxed">
                Strategic Advisory, Cross-Border Mandates &amp; Sovereign Roadmaps
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Tricatha Sempiternal Asia operates as the executive leadership practice, providing confidential counsel to corporate chairpersons, sovereign wealth funds, and ministerial secretariats navigating complex investment covenants and institutional reorganizations across the Southeast Asian corridor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Executive Positioning & Sovereign Briefings",
                  "Cross-Border Joint Venture Structuring",
                  "Institutional Governance Blueprints",
                  "Regulatory Strategy & Risk Roadmaps"
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-6 font-mono text-xs text-slate-500 border-t border-slate-100">
                <div>
                  <span className="text-slate-400 block text-[10px]">VERIFIED SCALE</span>
                  <span className="text-[#0A1F44] font-semibold text-sm">18+ Sovereign Mandates</span>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <span className="text-slate-400 block text-[10px]">ACCORD VALUE</span>
                  <span className="text-[#C8102E] font-semibold text-sm">$450M+ Bilateral</span>
                </div>
              </div>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5">
              <div className="editorial-image-frame rounded-lg aspect-[4/5] shadow-md bg-slate-900">
                <img
                  src={aseanPhoto}
                  alt="Tricatha Sempiternal Asia Sovereign Plenary"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#0A1F44]/90 backdrop-blur-xs rounded border border-white/10 text-white font-mono text-xs">
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
      {/* 3. UNIT 02: GEMA WASKITA INTERAKTIFA (GWI) (Light Neutral #F5F6F8 Rhythm)  */}
      {/* ========================================================================= */}
      <section id="unit-gwi" className="py-20 sm:py-28 bg-[#F5F6F8] border-b border-slate-200/80">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="editorial-image-frame rounded-lg aspect-[4/5] shadow-md bg-slate-900">
                <img
                  src={gwiPhoto}
                  alt="Gema Waskita Interaktifa Public Cultural Assembly"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#0A1F44]/90 backdrop-blur-xs rounded border border-white/10 text-white font-mono text-xs">
                  <div className="text-[#C8102E] font-semibold text-[10px] uppercase">
                    CIVIC SCALE ACTIVATION
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
                  UNIT 02 · COMMUNICATIONS &amp; ACTIVATION
                </span>
                <span className="w-8 h-px bg-slate-300" />
                <span className="font-mono text-xs text-slate-500">PUBLIC SECTOR ENGAGEMENT</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-[#0A1F44] tracking-tight leading-tight">
                Gema Waskita Interaktifa (GWI)
              </h2>

              <div className="p-4 bg-[#FFFFFF] rounded-md border-l-3 border-[#C8102E] text-sm text-[#0A1F44] font-medium leading-relaxed shadow-xs">
                Integrated Public Affairs, Strategic Communications &amp; Civic Festivals
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                GWI operates at the frontier of public sector communications, civic sentiment architecture, and high-capacity cultural festivals. Combining immersive digital projection mapping with crisis narrative defense, GWI mobilizes audiences across nationwide campaigns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Strategic Public Affairs Orchestration",
                  "Corporate Crisis & Reputation Defense",
                  "High-Capacity Cultural Scenography",
                  "National Digital Narrative Amplification"
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-6 font-mono text-xs text-slate-500 border-t border-slate-200">
                <div>
                  <span className="text-slate-400 block text-[10px]">CROWD SCALE</span>
                  <span className="text-[#0A1F44] font-semibold text-sm">45,000+ In-Person</span>
                </div>
                <div className="w-px h-8 bg-slate-300" />
                <div>
                  <span className="text-slate-400 block text-[10px]">BROADCAST REACH</span>
                  <span className="text-[#C8102E] font-semibold text-sm">1.2M Digital Viewers</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. UNIT 03: GOVADV POLICY INTELLIGENCE (Crisp White #FFFFFF)             */}
      {/* ========================================================================= */}
      <section id="unit-govadv" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-slate-100">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C8102E] tracking-wider uppercase">
                  UNIT 03 · GOVERNMENT RELATIONS
                </span>
                <span className="w-8 h-px bg-slate-200" />
                <span className="font-mono text-xs text-slate-500">REGULATORY INTELLIGENCE</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-[#0A1F44] tracking-tight leading-tight">
                GOVADV Policy Intelligence
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                GOVADV bridges private enterprise and state regulatory authorities. Operating under strict protocol alignment, our advisors assist domestic and multinational institutions in navigating cross-ministry compliance, public-private partnership (PPP) frameworks, and state regulatory horizons.
              </p>

              <div className="p-6 bg-[#F5F6F8] rounded-lg border border-slate-200/80 space-y-3">
                <span className="font-mono text-xs text-[#0A1F44] font-semibold uppercase tracking-wider block">
                  Core Practice Focus Areas
                </span>
                <ul className="space-y-2 text-xs text-slate-600 font-sans">
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
            <div className="lg:col-span-6 bg-[#0A1F44] text-white rounded-lg p-8 sm:p-10 shadow-lg space-y-6">
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
                <div className="p-4 bg-white/5 rounded border border-white/10">
                  <span className="text-slate-400 block text-[10px]">MINISTRIES PARTNERED</span>
                  <span className="text-white text-xl font-semibold mt-1 block">14 Ministries</span>
                </div>
                <div className="p-4 bg-white/5 rounded border border-white/10">
                  <span className="text-slate-400 block text-[10px]">APPROVAL LATENCY</span>
                  <span className="text-[#C8102E] text-xl font-semibold mt-1 block">-68% Delay</span>
                </div>
              </div>

              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                GOVADV maintains trusted liaison channels with key state ministries including Communication &amp; Digital Affairs, State-Owned Enterprises, Maritime Affairs &amp; Investment, and Culture.
              </p>

              <button
                onClick={handleInquiry}
                className="w-full py-3 bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Regulatory Briefing</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. UNIT 04: ENCHANTE EXPERIENTIAL (Light Neutral #F5F6F8 Rhythm)         */}
      {/* ========================================================================= */}
      <section id="unit-enchante" className="py-20 sm:py-28 bg-[#F5F6F8] border-b border-slate-200/80">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C8102E] tracking-wider uppercase">
                  UNIT 04 · HAUTE PROTOCOL &amp; SPATIAL SCENOGRAPHY
                </span>
                <span className="w-8 h-px bg-slate-300" />
                <span className="font-mono text-xs text-slate-500">HEAD-OF-STATE DIPLOMACY</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-[#0A1F44] tracking-tight leading-tight">
                Enchante Experiential
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Enchante executes bilateral head-of-state diplomatic banquets, ambassadorial galas, and exclusive corporate assemblies. With rigorous command of international precedence hierarchies, motorcade marshaling, and haute scenography, Enchante transforms formal gatherings into unforgettable institutional milestones.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Bilateral Head-of-State Conferences",
                  "Diplomatic Gala & State Banquets",
                  "Experiential Spatial Scenography",
                  "VVIP Seating Etiquette & Protocol"
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-6 font-mono text-xs text-slate-500 border-t border-slate-200">
                <div>
                  <span className="text-slate-400 block text-[10px]">HEAD-OF-STATE DINNERS</span>
                  <span className="text-[#0A1F44] font-semibold text-sm">12 State Banquets</span>
                </div>
                <div className="w-px h-8 bg-slate-300" />
                <div>
                  <span className="text-slate-400 block text-[10px]">PRECEDENCE COMPLIANCE</span>
                  <span className="text-[#C8102E] font-semibold text-sm">100% Protocol Zero Error</span>
                </div>
              </div>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5">
              <div className="editorial-image-frame rounded-lg aspect-[4/5] shadow-md bg-slate-900">
                <img
                  src={plenaryPhoto}
                  alt="Enchante Diplomatic Plenary Scenography"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#0A1F44]/90 backdrop-blur-xs rounded border border-white/10 text-white font-mono text-xs">
                  <div className="text-[#C8102E] font-semibold text-[10px] uppercase">
                    PLENARY SCENOGRAPHY
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
      {/* 6. UNIT 05: DNA STUDIO BROADCAST (Crisp White #FFFFFF)                    */}
      {/* ========================================================================= */}
      <section id="unit-dna" className="py-20 sm:py-28 bg-[#FFFFFF]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#C8102E] tracking-wider uppercase">
                  UNIT 05 · CREATIVE BROADCAST &amp; MEDIA
                </span>
                <span className="w-8 h-px bg-slate-200" />
                <span className="font-mono text-xs text-slate-500">4K CINEMA FACILITY</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-[#0A1F44] tracking-tight leading-tight">
                DNA STUDIO Broadcast
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Headquartered at The City Tower in Jakarta, DNA STUDIO is TSA's dedicated 4K multi-camera broadcast facility. Producing executive leader dialogues, high-production corporate podcasts, and syndicated plenary live feeds, DNA STUDIO elevates corporate and sovereign storytelling to broadcast television fidelity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Turnkey 4K Cinema Multi-Cam Live Feeds",
                  "Executive Thought Leadership Podcasts",
                  "Simultaneous Interpretation Audio Routing",
                  "Syndicated International Broadcast Distribution"
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-6 font-mono text-xs text-slate-500 border-t border-slate-100">
                <div>
                  <span className="text-slate-400 block text-[10px]">DIGITAL REACH</span>
                  <span className="text-[#0A1F44] font-semibold text-sm">2.4M+ Syndicated Views</span>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <span className="text-slate-400 block text-[10px]">STUDIO HARDWARE</span>
                  <span className="text-[#C8102E] font-semibold text-sm">4K Cinema Cinema Rig</span>
                </div>
              </div>
            </div>

            {/* Right Visual (6 cols) */}
            <div className="lg:col-span-6 bg-[#0A1F44] text-white rounded-lg p-8 sm:p-10 shadow-lg space-y-6">
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
                <div className="p-4 bg-white/5 rounded border border-white/10">
                  <span className="text-slate-400 block text-[10px]">VIDEO FIDELITY</span>
                  <span className="text-white text-base font-semibold mt-1 block">4K Cinema Pro</span>
                </div>
                <div className="p-4 bg-white/5 rounded border border-white/10">
                  <span className="text-slate-400 block text-[10px]">DISTRIBUTION</span>
                  <span className="text-[#C8102E] text-base font-semibold mt-1 block">Global Syndication</span>
                </div>
              </div>

              <button
                onClick={handleInquiry}
                className="w-full py-3 bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book DNA Studio Session</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. GROUP MANDATE INQUIRY                                                  */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#F5F6F8] border-t border-slate-200/80">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
            INTEGRATED PRACTICE MANDATES
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-medium text-[#0A1F44] tracking-tight">
            Engage the Full TSA Value Chain
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            Organizations can engage individual specialized units or commission turnkey integrated mandates across advisory, protocol, and multimedia broadcast.
          </p>
          <div className="pt-2">
            <button
              onClick={handleInquiry}
              className="btn-editorial-navy inline-flex items-center gap-2"
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
