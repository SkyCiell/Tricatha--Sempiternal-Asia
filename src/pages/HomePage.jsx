import React from "react";
import { ArrowUpRight, ArrowRight, ShieldCheck, MapPin, Building2, CheckCircle2 } from "lucide-react";
import ScrollExpand from "../components/ScrollExpand";
import { featuredEvents, institutionalReviews } from "../data/tsaData";
import aseanHeroPhoto from "../assets/20231130_131733_311.jpg";
import plenaryPhoto from "../assets/DSC08824.JPG";

export default function HomePage({ navigateTo }) {
  const handleNav = (path) => {
    if (navigateTo) {
      navigateTo(path);
    } else {
      window.history.pushState(null, "", path);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const businessGroupHighlights = [
    {
      code: "TSA",
      name: "Tricatha Sempiternal Asia",
      role: "Strategic Advisory & Sovereign Counsel",
      desc: "Executive counsel, sovereign roadmap design, and cross-border partnership structuring for leaders navigating intricate institutional landscapes.",
      tag: "Advisory"
    },
    {
      code: "GWI",
      name: "Gema Waskita Interaktifa",
      role: "Communications & Public Engagement",
      desc: "Integrated strategic communications, corporate crisis reputation defense, and nationwide public engagement orchestration.",
      tag: "Communications"
    },
    {
      code: "GOVADV",
      name: "GOVADV Policy Intelligence",
      role: "Government Relations & Regulatory Affairs",
      desc: "Public-private alliance building, ministerial liaison, and regulatory compliance navigation across national ministries.",
      tag: "Public Affairs"
    },
    {
      code: "Enchante",
      name: "Enchante Experiential",
      role: "High-Level Protocol & Plenary Summits",
      desc: "Bilateral head-of-state conferences, diplomatic banquets, executive summits, and turnkey spatial scenography.",
      tag: "Experiential"
    },
    {
      code: "DNA STUDIO",
      name: "DNA STUDIO Broadcast",
      role: "Creative Media & Broadcast Cinema",
      desc: "Turnkey 4K cinema multi-camera studio production, executive video profiling, and high-security live stream syndication.",
      tag: "Production"
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0A1F44] font-sans selection:bg-[#C8102E] selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. EDITORIAL HERO SECTION                                                 */}
      {/* ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 border-b border-slate-100 overflow-hidden bg-[#FFFFFF]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Refined Identity Tag */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#F5F6F8] border border-slate-200 rounded text-xs font-mono text-slate-700">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span className="font-semibold text-[#0A1F44]">THE CITY TOWER · JAKARTA</span>
                <span className="text-slate-400">|</span>
                <span>SOUTHEAST ASIA PRACTICE</span>
              </div>

              {/* Confident, Controlled Editorial Headline */}
              <div className="space-y-3">
                <h1 className="font-heading text-3xl sm:text-5xl lg:text-[58px] font-semibold text-[#0A1F44] tracking-tight leading-[1.08]">
                  Strategic Engagement. <br />
                  <span className="text-slate-600 font-normal">Sovereign Impact.</span>
                </h1>
                
                <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl pt-2">
                  PT Tricatha Sempiternal Asia delivers sovereign advisory, public affairs, and high-stakes corporate engagement across Southeast Asia. Headquartered at The City Tower in Jakarta, we unite strategy, protocol rigor, and spatial execution for complex stakeholder ecosystems.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => handleNav("/contact")}
                  className="btn-editorial-red"
                >
                  <span>Initiate Mandate Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleNav("/business-group")}
                  className="btn-editorial-outline"
                >
                  <span>Explore Business Group</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Operational Proof Points */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-6 font-mono text-xs">
                <div>
                  <div className="text-[#C8102E] font-heading font-semibold text-xl sm:text-2xl">18+</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">Sovereign Delegations</div>
                </div>
                <div>
                  <div className="text-[#0A1F44] font-heading font-semibold text-xl sm:text-2xl">$450M+</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">Bilateral Accords</div>
                </div>
                <div>
                  <div className="text-[#0A1F44] font-heading font-semibold text-xl sm:text-2xl">45K+</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">Summit Delegates</div>
                </div>
              </div>

            </div>

            {/* Right Editorial Image Frame (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="editorial-image-frame rounded-lg aspect-[4/5] sm:aspect-[3/4] shadow-md bg-slate-900">
                <img
                  src={aseanHeroPhoto}
                  alt="ASEAN Strategic Diplomacy Plenary"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Image Caption Marker */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#0A1F44]/90 backdrop-blur-xs rounded border border-white/10 text-white font-mono text-xs space-y-1">
                  <div className="flex items-center justify-between text-[#C8102E] font-semibold text-[11px]">
                    <span>DOCUMENTATION RECORD</span>
                    <span>2024–2025</span>
                  </div>
                  <div className="font-sans font-medium text-white text-sm">
                    ASEAN Strategic Diplomacy Forum
                  </div>
                  <div className="text-slate-300 text-[11px] font-sans">
                    Jakarta Convention Center · Plenary Protocol
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SCROLLEXPAND EDITORIAL TRANSITION                                      */}
      {/* ========================================================================= */}
      <ScrollExpand
        image={plenaryPhoto}
        title="Orchestrating High-Stakes Assemblies Across Southeast Asia"
        subtitle="From closed-door bilateral dialogues at The City Tower to monumental ministerial plenaries, TSA unites corporate strategy, sovereign protocol, and spatial scenography with zero tolerance for error."
        tag="Jakarta Plenary Operations · Head-of-State Standard"
        startWidth={42}
        startHeight={58}
        startRadius={22}
        endRadius={0}
        mediaZoom={1.28}
        scrollDistance={1.2}
        holdDistance={0.3}
        smoothing={0.09}
        overlayScrim={0.38}
      />

      {/* ========================================================================= */}
      {/* 3. CORE OPERATIONAL PILLARS (Light Neutral #F5F6F8 Rhythm)                */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F5F6F8] border-b border-slate-200/80">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-200">
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
                INTEGRATED VALUE CHAIN
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-medium text-[#0A1F44] tracking-tight leading-tight">
                Three Core Disciplines. <br />
                <span className="text-slate-500 font-normal">One Sovereign Standard.</span>
              </h2>
            </div>
            <p className="font-sans text-sm text-slate-600 max-w-md leading-relaxed">
              We eliminate the friction between high-level policy formulation and spatial physical execution by integrating advisory, event production, and broadcast media under one executive roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            
            {/* Pillar 1 */}
            <div className="p-8 bg-[#FFFFFF] rounded-lg border border-slate-200/80 shadow-xs space-y-5 flex flex-col justify-between hover:border-[#0A1F44]/40 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#C8102E] font-semibold">01 / ADVISORY</span>
                  <ShieldCheck className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="font-heading text-xl font-medium text-[#0A1F44]">
                  Sovereign &amp; Corporate Advisory
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                  Executive counsel, geopolitical risk assessment, and public-private consensus building. We guide organizational leadership through intricate regulatory transitions and regional stakeholder landscapes.
                </p>
              </div>
              <ul className="space-y-2 pt-4 border-t border-slate-100 font-sans text-xs text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Bilateral Accord Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Ministry-Level Liaison</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Regulatory Strategy &amp; Intelligence</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 bg-[#FFFFFF] rounded-lg border border-slate-200/80 shadow-xs space-y-5 flex flex-col justify-between hover:border-[#0A1F44]/40 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#C8102E] font-semibold">02 / PLENARY</span>
                  <Building2 className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="font-heading text-xl font-medium text-[#0A1F44]">
                  Plenary &amp; Experiential Summits
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                  End-to-end orchestration of head-of-state diplomatic assemblies, corporate annual meetings, and international trade expos with strict protocol compliance, spatial engineering, and crowd telemetry.
                </p>
              </div>
              <ul className="space-y-2 pt-4 border-t border-slate-100 font-sans text-xs text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>VVIP Seating &amp; Protocol Precedence</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Spatial Scenography &amp; Stage Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Encrypted Simultaneous Interpretation</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 bg-[#FFFFFF] rounded-lg border border-slate-200/80 shadow-xs space-y-5 flex flex-col justify-between hover:border-[#0A1F44]/40 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#C8102E] font-semibold">03 / BROADCAST</span>
                  <MapPin className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="font-heading text-xl font-medium text-[#0A1F44]">
                  DNA Studio Broadcast Media
                </h3>
                <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                  Our in-house 4K cinema broadcast facility at The City Tower provides turnkey multi-camera live production, executive thought leadership video series, and digital media syndication.
                </p>
              </div>
              <ul className="space-y-2 pt-4 border-t border-slate-100 font-sans text-xs text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Turnkey 4K Cinema Live Feeds</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Executive Profiling &amp; Leader Dialogues</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Syndicated Digital Distribution</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BUSINESS GROUP ECOSYSTEM SNAPSHOT (Crisp White #FFFFFF)                */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-slate-100">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-12 border-b border-slate-100">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
                SPECIALIZED OPERATIONAL UNITS
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-medium text-[#0A1F44] tracking-tight">
                The TSA Business Group
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
                Five specialized operational entities operating under unified governance from The City Tower in Central Jakarta, forming an uninterrupted value chain.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => handleNav("/business-group")}
                className="btn-editorial-navy"
              >
                <span>View Complete Business Group</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-10">
            {businessGroupHighlights.map((unit) => (
              <div
                key={unit.code}
                onClick={() => handleNav("/business-group")}
                className="p-6 bg-[#F5F6F8] rounded-lg border border-slate-200/70 hover:border-[#C8102E]/60 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-xs text-[#C8102E]">
                      {unit.code}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-white rounded text-slate-500 border border-slate-200">
                      {unit.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-medium text-base text-[#0A1F44] group-hover:text-[#C8102E] transition-colors leading-snug">
                    {unit.name}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {unit.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-[#0A1F44] transition-colors">
                  <span>Explore Practice</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FEATURED EVENTS & DOCUMENTATION (Deep Navy #0A1F44 Anchor)             */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
                FIELD DOCUMENTATION
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-medium text-white tracking-tight">
                Featured Plenary &amp; Event Works
              </h2>
            </div>
            <button
              onClick={() => handleNav("/events")}
              className="btn-editorial-red self-start lg:self-auto"
            >
              <span>Explore All Events Archive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
            {featuredEvents.map((evt) => (
              <div
                key={evt.id}
                onClick={() => handleNav("/events")}
                className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#C8102E]/60 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="editorial-image-frame aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={evt.image}
                      alt={evt.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#0A1F44]/90 backdrop-blur-xs font-mono text-[10px] text-white rounded border border-white/10">
                        {evt.year} · {evt.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="font-heading font-medium text-lg text-white group-hover:text-[#C8102E] transition-colors leading-snug">
                      {evt.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {evt.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-white/5 mt-4 pt-4">
                  <span className="text-[#C8102E] font-medium">{evt.impact}</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#C8102E] transition-colors" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INSTITUTIONAL REVIEWS & VERIFICATION (Light Neutral #F5F6F8)          */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F5F6F8] border-b border-slate-200/80">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="pb-10 border-b border-slate-200">
            <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block mb-2">
              VERIFIED INSTITUTIONAL RECORD
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-medium text-[#0A1F44] tracking-tight">
              Stakeholder Reflections &amp; Endorsements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            {institutionalReviews.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-7 bg-[#FFFFFF] rounded-lg border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <p className="font-sans text-sm text-slate-700 leading-relaxed font-normal italic">
                  "{item.text}"
                </p>

                <div className="pt-4 border-t border-slate-100 font-mono text-xs">
                  <div className="font-semibold text-[#0A1F44]">{item.name}</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">{item.role}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CLOSING MANDATE INVITATION                                             */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          <div className="p-10 sm:p-16 rounded-lg bg-[#0A1F44] text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl space-y-3">
              <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider">
                EXECUTIVE SECRETARIAT · THE CITY TOWER
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-medium text-white tracking-tight leading-tight">
                Initiate Mandate Consultation
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Whether structuring sovereign bilateral accords, orchestrating a high-stakes ministerial plenary, or developing digital governance platforms, our directors ensure confidentiality and flawless execution.
              </p>
            </div>

            <button
              onClick={() => handleNav("/contact")}
              className="btn-editorial-red shrink-0"
            >
              <span>Connect with Secretariat</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
