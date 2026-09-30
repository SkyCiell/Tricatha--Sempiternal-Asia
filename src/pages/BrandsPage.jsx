import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, ShieldCheck, Video, Megaphone, Scale, CheckCircle2, Building2 } from "lucide-react";
const plenaryPhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop";
const aseanPhoto = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop";
const gwiPhoto = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop";

export default function BrandsPage({ navigateTo }) {
  const [activeUnit, setActiveUnit] = useState("enchante");

  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  const entities = [
    {
      id: "enchante",
      domain: "VVIP Protocol",
      name: "ENCHANTE",
      title: "Haute Protocol & Spatial Scenography",
      tagline: "Head-of-State Banquets, Ambassadorial Galas & VVIP Protocol",
      mandate:
        "ENCHANTE specializes in high-precedence ceremonial dining, bilateral diplomatic receptions, and sovereign protocol etiquette. Operating under ministerial standards, ENCHANTE manages sovereign seating hierarchies, encrypted interpretation systems, and bilateral signing accouterments with flawless poise.",
      metrics: [
        { label: "Banquets Orchestrated", value: "14+" },
        { label: "Diplomatic Missions Hosted", value: "32 Envoys" },
        { label: "Standard of Decorum", value: "Head of State" }
      ],
      deliverables: [
        "Sovereign Precedence Etiquette & Seating Protocol",
        "Haute Banquet Table Scenography & Floral Engineering",
        "Bilateral Accord Signing Ceremonial Command",
        "Encrypted Multi-Lingual Simultaneous Interpretation"
      ],
      photo: aseanPhoto,
      photoCaption: "Diplomatic Corps Ambassadorial Gala Dinner · Grand Hyatt Jakarta",
      venues: "The Ritz-Carlton Jakarta · Fairmont Jakarta · Park Hyatt · Hotel Mulia",
      featuredEvent: {
        name: "Annual Diplomatic Corps & Ambassadorial Gala",
        slug: "diplomatic-corps-ambassadorial-gala-dinner-2024"
      }
    },
    {
      id: "dna-studio",
      domain: "Broadcast Media",
      name: "DNA STUDIO",
      title: "4K Broadcast Scenography & Telepresence",
      tagline: "Cinema-Grade Broadcast Suite & Leader Dialogue Soundstage",
      mandate:
        "Headquartered at The City Tower 12th Floor in Central Jakarta, DNA STUDIO is TSA's dedicated media engineering soundstage. We engineer 4K multi-camera telecasts, virtual AGM voting systems, live satellite feeds, and thought leadership forums viewed by millions across the region.",
      metrics: [
        { label: "Syndicated Viewers", value: "2.4M+" },
        { label: "Multi-Cam Broadcast Suite", value: "4K Cinema" },
        { label: "Studio Location", value: "The City Tower 12F" }
      ],
      deliverables: [
        "4K Multi-Camera Live Broadcast Switching & Telepresence",
        "Audited Hybrid AGM Electronic Proxy Voting Architecture",
        "Leader Dialogue Broadcast Curation & Digital Distribution",
        "Kinetic Soundstage Lighting & Acoustic Scenography"
      ],
      photo: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop",
      photoCaption: "DNA Studio Leader Dialogue: Geopolitical Horizons · Broadcast Suite",
      venues: "The City Tower 12th Fl · Soehanna Hall SCBD · Live Satellite Up-Links",
      featuredEvent: {
        name: "DNA Studio Leader Dialogue: Geopolitical Horizons 2026",
        slug: "dna-studio-leader-dialogue-geopolitical-horizons-2026"
      }
    },
    {
      id: "gwi",
      domain: "Civic Scale",
      name: "GWI",
      title: "Gema Waskita Interaktifa · Civic Scale Assemblies",
      tagline: "Public Affairs, Cultural Heritage Festivals & Mass Crowd Engineering",
      mandate:
        "GWI executes monumental public engagement assemblies, civic cultural festivals, and interactive spatial projection mapping. Uniting civic ministries with over 45,000 attendees, GWI balances immense crowd flow telemetry with deeply inspiring experiential scenography.",
      metrics: [
        { label: "Peak In-Person Attendees", value: "45,000+" },
        { label: "Civic Ministries United", value: "6 Ministries" },
        { label: "Spatial Mapping Scale", value: "Monumental GBK" }
      ],
      deliverables: [
        "Mass Crowd Ingress/Egress Telemetry & HSSE Command",
        "Monumental Digital Projection Mapping & Spatial Sound",
        "Eco-Pavilion Architecture & Civic Assembly Staging",
        "Multi-Stakeholder Public Sector Coordination"
      ],
      photo: gwiPhoto,
      photoCaption: "GWI Public Cultural Heritage Festival · Gelora Bung Karno Arena",
      venues: "Gelora Bung Karno (GBK) Arena · Taman Ismail Marzuki · Monas Enclosure",
      featuredEvent: {
        name: "GWI Public Cultural Heritage Festival 2025",
        slug: "gema-waskita-interaktifa-cultural-festival-2025"
      }
    },
    {
      id: "goadv",
      domain: "Public Affairs",
      name: "GOADV",
      title: "Government Relations & Regulatory Intelligence",
      tagline: "Inter-Ministerial Conclaves, State Summits & Policy Symposia",
      mandate:
        "GOADV bridges sovereign policy priorities with enterprise technology execution. We orchestrate inter-ministerial summits, national digital governance conclaves, and state-owned enterprise leadership retreats requiring strict protocol clearance and zero-downtime execution.",
      metrics: [
        { label: "Participating Ministries", value: "14 Ministries" },
        { label: "Executive Delegates", value: "1,200 Plenary" },
        { label: "Operational Integrity", value: "Zero Margin Error" }
      ],
      deliverables: [
        "Cross-Ministry Secretarial Liaison & Policy Alignment",
        "Sovereign GovTech Plenary Scenography & Staging",
        "Inter-Agency Multi-Stakeholder Consensus Forums",
        "State-Owned Enterprise Leadership Retreat Facilitation"
      ],
      photo: plenaryPhoto,
      photoCaption: "National GovTech Conclave · The Ritz-Carlton Mega Kuningan",
      venues: "Jakarta Convention Center (JCC) · ICE BSD City · The Ritz-Carlton",
      featuredEvent: {
        name: "National Digital Governance & GovTech Conclave",
        slug: "national-digital-governance-govtech-conclave-2024"
      }
    }
  ];

  const currentEntity = entities.find((e) => e.id === activeUnit) || entities[0];

  return (
    <div className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">

      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-white/10">

          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>Executive Group Architecture · The City Tower, Jakarta</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.08]">
              The Business Ecosystem &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Specialized Group Entities.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Operating under parent holding <strong>PT Tricatha Sempiternal Asia</strong>, our four operating divisions form an uninterrupted value chain spanning sovereign protocol, 4K broadcast telepresence, mass civic activations, and state regulatory intelligence.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-5">
            <div className="space-y-1 text-left lg:text-right font-mono text-xs text-slate-400">
              <div>HOLDING GOVERNANCE: PT TSA</div>
              <div className="text-white font-semibold">4 SPECIALIZED OPERATING PRACTICES</div>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red"
            >
              <span>Inquire Group Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. ECOSYSTEM ARCHITECTURE & SYNERGY MAP */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-12 sm:py-16 border-b border-white/10">

        {/* Holding Anchor Bar */}
        <div className="p-6 sm:p-8 bg-[#0A1F44] border border-white/15 rounded text-white flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C8102E] font-semibold tracking-wider uppercase">
              <Building2 className="w-4 h-4" />
              <span>PARENT HOLDING GOVERNANCE</span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white">
              PT TRICATHA SEMPITERNAL ASIA (HOLDING)
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Strategic direction, fiduciary oversight, and unified executive command from The City Tower 12th Floor, Central Jakarta. All group practices operate under single-source accountability.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 space-y-1 md:text-right shrink-0">
            <div>CORPORATE REGISTRATION: JAKARTA</div>
            <div className="text-white font-semibold">CENTRAL BUSINESS DISTRICT</div>
          </div>
        </div>

        {/* 4 Interactive Entity Selectors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {entities.map((unit) => {
            const isSelected = unit.id === activeUnit;
            return (
              <button
                key={unit.id}
                onClick={() => setActiveUnit(unit.id)}
                className={`p-5 sm:p-6 rounded border transition-all text-left cursor-pointer flex flex-col justify-between ${isSelected
                    ? "bg-[#0E2552] border-[#C8102E] shadow-xl ring-1 ring-[#C8102E]"
                    : "bg-[#0A1F44] border-white/10 hover:border-white/30"
                  }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-[#C8102E] uppercase">
                      {unit.domain}
                    </span>
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${isSelected ? "bg-[#C8102E] text-white" : "bg-[#071731] text-slate-400"
                      }`}>
                      {isSelected ? "Active Focus" : "Practice Unit"}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {unit.name}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans line-clamp-2 leading-relaxed">
                    {unit.title}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>View Dossier</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "text-[#C8102E] translate-x-1" : ""}`} />
                </div>
              </button>
            );
          })}
        </div>

      </section>

      {/* 3. IN-DEPTH PRACTICE DOSSIER (Editorial Feature on Active Unit) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Visual & Proof Anchor (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="editorial-image-frame rounded aspect-[4/3] lg:aspect-[4/5] bg-[#050F22] border border-white/15 overflow-hidden shadow-2xl relative">
              <img
                src={currentEntity.photo}
                alt={currentEntity.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/40 to-transparent opacity-90 pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-5 bg-[#0A1F44]/95 backdrop-blur-md border border-white/15 rounded text-white space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#C8102E] font-semibold">
                  VERIFIED VENUE EXECUTION
                </div>
                <div className="font-heading font-semibold text-sm sm:text-base text-white">
                  {currentEntity.photoCaption}
                </div>
                <div className="text-xs text-slate-300 font-sans">
                  {currentEntity.venues}
                </div>
              </div>
            </div>

            {/* Linked Real Event in Archive */}
            {currentEntity.featuredEvent && (
              <div className="p-5 bg-[#0A1F44] border border-white/10 rounded flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">
                    ARCHIVED WORK BENCHMARK:
                  </div>
                  <div className="font-heading font-medium text-white text-xs sm:text-sm">
                    {currentEntity.featuredEvent.name}
                  </div>
                </div>

                <button
                  onClick={() => (navigateTo ? navigateTo(`/events/${currentEntity.featuredEvent.slug}`) : null)}
                  className="px-3 py-1.5 rounded bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs font-mono font-medium flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                >
                  <span>Inspect Event</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Mandate Scope, Metrics & Deliverables (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#C8102E]">
                  {currentEntity.code}
                </span>
                <span className="text-xs font-mono tracking-widest uppercase text-slate-400 font-semibold">
                  {currentEntity.title}
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-semibold text-white tracking-tight leading-[1.06]">
                {currentEntity.name === "ENCHANTE" ? (
                  <>
                    ENCHANTÉE <br />
                    <span className="font-editorial italic font-normal text-slate-200 text-2xl sm:text-4xl">
                      Haute Protocol &amp; Ceremonial Scenography.
                    </span>
                  </>
                ) : (
                  <>
                    {currentEntity.name} <br />
                    <span className="font-editorial italic font-normal text-slate-200 text-2xl sm:text-4xl">
                      {currentEntity.title}
                    </span>
                  </>
                )}
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-200 font-normal leading-relaxed pt-1">
                {currentEntity.tagline}
              </p>

              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                {currentEntity.mandate}
              </p>
            </div>

            {/* Editorial Typographic Metrics (Integrated, NOT boxed cards) */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-6 font-mono">
              {currentEntity.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-sans">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Editorial Disciplines Ledger (NO CARDS) */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <div className="text-xs font-mono uppercase tracking-widest text-[#C8102E] font-semibold">
                OPERATIONAL DELIVERABLES &amp; TURNKEY OUTPUT:
              </div>

              <div className="divide-y divide-white/10 font-sans">
                {currentEntity.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="py-3 sm:py-3.5 flex items-baseline justify-between gap-4 group hover:bg-white/[0.015] transition-colors"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-bold text-[#C8102E]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-200 font-normal leading-snug">
                        {deliv}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider shrink-0 hidden sm:inline">
                      STANDARDIZED
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquire CTA & Dedicated Showcase Link */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red"
              >
                <span>Engage {currentEntity.name} Practice</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {currentEntity.id === "enchante" && (
                <button
                  onClick={() => (navigateTo ? navigateTo("/enchante") : null)}
                  className="btn-editorial-navy flex items-center gap-2 text-xs"
                >
                  <span>Explore Enchantée Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8102E]" />
                </button>
              )}

              <button
                onClick={() => (navigateTo ? navigateTo("/events") : null)}
                className="btn-editorial-outline text-xs"
              >
                <span>Explore Full Events Portfolio</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. MARKETS & PROTOCOL FOOTPRINT MATRIX */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-20 border-b border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C8102E]">
              Markets &amp; Sectoral Presence
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-white tracking-tight">
              Cross-Sector Operational Coverage
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md font-normal leading-relaxed">
            Delivering sovereign protocol, commercial MICE exhibitions, and corporate shareholder summits across Southeast Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 font-sans text-xs">
          <div className="p-6 bg-[#0A1F44] border border-white/10 rounded space-y-3">
            <div className="font-mono text-[11px] font-bold text-[#C8102E] uppercase">
              SECTOR 01
            </div>
            <div className="font-heading text-base font-semibold text-white">
              Sovereign &amp; Diplomatic
            </div>
            <p className="text-slate-300 leading-relaxed">
              Bilateral ministerial plenaries, head-of-state diplomatic banquets, and sovereign treaty signing ceremonies.
            </p>
          </div>

          <div className="p-6 bg-[#0A1F44] border border-white/10 rounded space-y-3">
            <div className="font-mono text-[11px] font-bold text-[#C8102E] uppercase">
              SECTOR 02
            </div>
            <div className="font-heading text-base font-semibold text-white">
              State-Owned Enterprises (BUMN)
            </div>
            <p className="text-slate-300 leading-relaxed">
              Holding leadership assemblies, ESG investor symposiums, and national corporate governance conclaves.
            </p>
          </div>

          <div className="p-6 bg-[#0A1F44] border border-white/10 rounded space-y-3">
            <div className="font-mono text-[11px] font-bold text-[#C8102E] uppercase">
              SECTOR 03
            </div>
            <div className="font-heading text-base font-semibold text-white">
              Trade &amp; Commercial MICE
            </div>
            <p className="text-slate-300 leading-relaxed">
              Multi-hall energy transition expos, maritime congresses, clean tech showcases, and B2B buyer-seller matchmaking.
            </p>
          </div>

          <div className="p-6 bg-[#0A1F44] border border-white/10 rounded space-y-3">
            <div className="font-mono text-[11px] font-bold text-[#C8102E] uppercase">
              SECTOR 04
            </div>
            <div className="font-heading text-base font-semibold text-white">
              Civic &amp; Media Broadcast
            </div>
            <p className="text-slate-300 leading-relaxed">
              Mass public cultural heritage assemblies, 4K television syndication, and interactive thought leadership broadcasts.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CLOSING INQUIRY PANEL (Matching Events Benchmark) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-16">
        <div className="bg-[#0A1F44] text-white rounded p-10 sm:p-14 border border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>The City Tower, Jakarta · Executive Directorate</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight font-heading leading-tight">
                Engage the TSA Business Group.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Coordinate with our executive directorate at The City Tower in Central Jakarta to align one or multiple group practices with your organization's strategic mandates.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red"
              >
                <span>Initiate Group Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
