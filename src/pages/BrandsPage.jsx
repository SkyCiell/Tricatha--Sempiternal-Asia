import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Building2 } from "lucide-react";
const plenaryPhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop";
const gwiPhoto = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop";

export default function BrandsPage({ navigateTo, initialUnit }) {
  const [activeUnit, setActiveUnit] = useState(() => {
    if (initialUnit && ["tsa-tech", "enchante", "dna-studio", "gwi", "govadv"].includes(initialUnit)) {
      return initialUnit;
    }
    if (typeof window !== "undefined" && window.location.hash) {
      const h = window.location.hash.replace("#", "").toLowerCase();
      if (["tsa-tech", "enchante", "dna-studio", "gwi", "govadv"].includes(h)) {
        return h;
      }
    }
    return "tsa-tech";
  });

  useEffect(() => {
    if (initialUnit && ["tsa-tech", "enchante", "dna-studio", "gwi", "govadv"].includes(initialUnit)) {
      setActiveUnit(initialUnit);
    }
  }, [initialUnit]);

  useEffect(() => {
    const handleHash = () => {
      const hash = (window.location.hash || "").replace("#", "").toLowerCase();
      if (hash && ["tsa-tech", "enchante", "dna-studio", "gwi", "govadv"].includes(hash)) {
        setActiveUnit(hash);
        const el = document.getElementById(hash) || document.getElementById("practice-detail") || document.getElementById("areas");
        if (el) {
          if (window.__lenis) {
            window.__lenis.scrollTo(el, { offset: -80, duration: 1.0 });
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  const entities = [
    {
      id: "tsa-tech",
      domain: "IT & Technology",
      name: "TSA IT & TECHNOLOGY",
      title: "IT & Technology Division",
      tagline: "Purpose-Built Technology for Mission-Critical Operations",
      mandate:
        "Since 2018, TSA’s IT and Technology division has delivered digital systems and technology solutions for Indonesian Law Enforcement Agencies. Its work is grounded in a practical understanding of institutional operations, security requirements, information management, and the complex environments in which public-sector technology must perform. From purpose-built software and digital platforms to supporting infrastructure and technology integration, TSA develops solutions that strengthen coordination, improve operational efficiency, and support better-informed decision-making. Every engagement is approached with discretion, precision, and a commitment to creating technology that is relevant, reliable, and fit for purpose.",
      metrics: [
        { label: "Operational Track Record", value: "Since 2018" },
        { label: "Institutional Sector", value: "Law Enforcement" },
        { label: "Execution Standard", value: "Discretion & Precision" }
      ],
      deliverables: [
        "Law Enforcement Digital Systems & Operational Platforms",
        "Secure Public-Sector Information Architecture & Integration",
        "Operational Coordination & Situational Decision Support",
        "Resilient Mission-Critical Technology Infrastructure"
      ],
      photo: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop",
      photoCaption: "Purpose-Built Technology for Mission-Critical Operations · TSA IT & Technology",
      venues: "Indonesian Law Enforcement Agencies · Command Secretariats · Institutional Facilities",
      featuredEvent: {
        name: "National Digital Governance & GovTech Conclave",
        slug: "national-digital-governance-govtech-conclave-2024"
      }
    },
    {
      id: "enchante",
      domain: "Food & Beverage",
      name: "ENCHANTÉE KITCHEN",
      title: "Food & Beverage Division",
      tagline: "Thoughtfully Prepared, Distinctively Presented",
      mandate:
        "Enchantée Kitchen is TSA’s food and beverage division, creating thoughtfully prepared culinary products and catering experiences for corporate, social, and private occasions. Every offering is developed with attention to flavour, quality, presentation, and the character of the occasion it is intended to complement. From intimate gatherings to larger-scale events, Enchantée Kitchen provides food and hospitality solutions tailored to each client’s requirements with warmth, refinement, and reliable service.",
      metrics: [
        { label: "Occasion Scope", value: "Corporate & Private" },
        { label: "Culinary Standard", value: "Artisanal Quality" },
        { label: "Service Ethos", value: "Warmth & Poise" }
      ],
      deliverables: [
        "Corporate Dining & Executive Conference Catering",
        "Social Celebrations & Private Occasion Hospitality",
        "Curated Culinary Products & Bespoke Tasting Menus",
        "Distinctive Presentation, Tablescape & Service Staffing"
      ],
      photo: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1800&auto=format&fit=crop",
      photoCaption: "Thoughtfully Prepared Culinary Presentation · Enchantée Kitchen",
      venues: "Corporate Plenaries · Private Estates · Five-Star Ballrooms · Curated Social Venues",
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
      domain: "Event Management",
      name: "GWI",
      title: "GWI | Event Management",
      tagline: "Bringing the Right Audience to the Right Experience",
      mandate:
        "Gema Waskita Interaktifa (GWI) is TSA’s event management and experiential division, delivering national and international conferences, corporate gatherings, business-matching programs, brand activations, and strategic engagements. We combine strategic planning, creative direction, and disciplined execution to transform each client’s objectives into a cohesive and professionally delivered experience. GWI does more than organize events—we connect our clients with the right people. Supported by an organic, multisector database of more than 20,000 contacts, we curate target audiences according to each engagement’s specific objectives. This capability enables us to bring relevant decision-makers, government representatives, business leaders, industry professionals, and communities into the room—creating events that are not only well executed, but also purposeful and commercially meaningful.",
      metrics: [
        { label: "Audience Database", value: "20,000+ Contacts" },
        { label: "Target Sectors", value: "Multi-Sector" },
        { label: "Delivery Footprint", value: "National & Global" }
      ],
      deliverables: [
        "National & International Conferences & Plenaries",
        "Corporate Gatherings & Strategic Engagements",
        "Business-Matching Programs & Audience Ingress",
        "Brand Activations & Experiential Environments"
      ],
      photo: gwiPhoto,
      photoCaption: "GWI Event Management & Strategic Experiential Operations",
      venues: "National & International Conference Centres · Jakarta · Bali",
      featuredEvent: {
        name: "GWI Public Cultural Heritage Festival 2025",
        slug: "gema-waskita-interaktifa-cultural-festival-2025"
      }
    },
    {
      id: "govadv",
      domain: "Government Advisory",
      name: "GOVADV",
      title: "Government Advisory Division",
      tagline: "Navigating Institutions, Advancing Strategic Objectives",
      mandate:
        "GovAdv is TSA’s government advisory and stakeholder-engagement division, supporting domestic and international organizations in understanding and navigating Indonesia’s institutional landscape. Its work draws upon extensive experience engaging government ministries, law enforcement agencies, public institutions, diplomatic communities, and private-sector stakeholders. Through strategic consultation, stakeholder mapping, institutional engagement, and carefully facilitated introductions, GovAdv helps clients establish relevant relationships and advance legitimate business, policy, and partnership objectives. Every engagement is managed with discretion, integrity, and a clear understanding that sustainable progress is built through trust, context, and meaningful dialogue.",
      metrics: [
        { label: "Sector Scope", value: "Public & Diplomatic" },
        { label: "Core Methodology", value: "Stakeholder Mapping" },
        { label: "Engagement Ethos", value: "Discretion & Trust" }
      ],
      deliverables: [
        "Strategic Consultation & Institutional Engagement",
        "Stakeholder Mapping & Public Sector Analysis",
        "Facilitated Introductions & Partnership Building",
        "Discreet Multi-Stakeholder Dialogue & Policy Navigation"
      ],
      photo: plenaryPhoto,
      photoCaption: "Government Advisory & Strategic Stakeholder Engagement · GovAdv",
      venues: "Government Ministries · Diplomatic Missions · Public Institutions · Private Sector Conclaves",
      featuredEvent: {
        name: "National Digital Governance & GovTech Conclave",
        slug: "national-digital-governance-govtech-conclave-2024"
      }
    }
  ];

  const currentEntity = entities.find((e) => e.id === activeUnit) || entities[0];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#071731] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">

      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section id="overview" className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8 scroll-mt-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-[#071731]/10">

          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#071731] tracking-tight leading-[1.08]">
              The Business Ecosystem &amp; <br />
              <span className="font-editorial italic font-normal text-slate-600">
                Specialized Group Entities.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Operating under parent holding <strong>PT Tricatha Sempiternal Asia</strong>, our operating divisions form an uninterrupted value chain spanning sovereign protocol, technology systems, broadcast telepresence, culinary hospitality, and strategic advisory.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-start lg:items-end justify-start lg:justify-end">
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
      <section id="areas" className="max-w-[1520px] mx-auto px-4 sm:px-8 py-12 sm:py-16 border-b border-[#071731]/10 scroll-mt-[80px]">

        {/* Holding Anchor Bar */}
        <div className="p-6 sm:p-8 bg-white border border-[#071731]/10 rounded shadow-xs mb-8">
          <div className="space-y-2 max-w-3xl">
            <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#071731]">
              PT TRICATHA SEMPITERNAL ASIA (HOLDING)
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Strategic direction, fiduciary oversight, and unified executive command from The City Tower 12th Floor, Central Jakarta. All group practices operate under single-source accountability.
            </p>
          </div>
        </div>

        {/* Interactive Entity Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {entities.map((unit) => {
            const isSelected = unit.id === activeUnit;
            return (
              <button
                key={unit.id}
                id={unit.id}
                onClick={() => setActiveUnit(unit.id)}
                className={`p-5 sm:p-6 rounded border transition-all text-left cursor-pointer flex flex-col justify-between ${isSelected
                    ? "bg-[#071731] text-white border-[#071731] shadow-lg"
                    : "bg-white text-[#071731] border-[#071731]/10 hover:border-[#071731]/30 hover:bg-[#FAF9F6]"
                  }`}
              >
                <div className="space-y-2">
                  <div className="font-mono text-[11px] font-semibold tracking-wider text-[#C8102E] uppercase">
                    {unit.domain}
                  </div>

                  <h3 className={`font-heading text-lg sm:text-xl font-bold tracking-tight ${isSelected ? "text-white" : "text-[#071731]"}`}>
                    {unit.name}
                  </h3>

                  <p className={`text-xs font-sans line-clamp-2 leading-relaxed ${isSelected ? "text-slate-300" : "text-slate-600"}`}>
                    {unit.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </section>

      {/* 3. IN-DEPTH PRACTICE DOSSIER (Natural Responsive Editorial Card) */}
      <section className="relative w-full bg-[#071731] text-white overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 my-8 sm:my-12 shadow-2xl flex flex-col justify-between">
        
        {/* Background Photo Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentEntity.id}
              src={currentEntity.photo}
              alt={currentEntity.name}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover object-center"
            />
          </AnimatePresence>

          {/* Directional Scrim for Supreme Readability without Obscuring Authentic Photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/85 via-50% to-[#071731]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/75 via-55% to-transparent pointer-events-none" />
        </div>

        {/* Center / Direct Typography Over Media */}
        <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEntity.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-4"
              >
                <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
                  {currentEntity.name} <br />
                  <span className="font-editorial italic font-normal text-slate-300 text-xl sm:text-3xl">
                    {currentEntity.tagline}
                  </span>
                </h2>

                <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-3xl">
                  {currentEntity.mandate}
                </p>

                {/* Core Deliverables / Capabilities Badges */}
                {currentEntity.deliverables && currentEntity.deliverables.length > 0 && (
                  <div className="pt-2 space-y-2">
                    <div className="text-[11px] font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                      Key Practice Capabilities:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentEntity.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/10 backdrop-blur-xs border border-white/15 text-slate-200 px-3 py-1.5 rounded-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Primary Action Button */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleInquiry}
                    className="btn-editorial-red text-xs sm:text-sm py-3 px-6 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Inquire {currentEntity.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleInquiry}
                    className="px-4 py-3 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Corporate Headquarters Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8102E]" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Metrics Bar Directly Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 pb-6 sm:pb-8">
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/15 font-mono max-w-4xl">
            {currentEntity.metrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-300 uppercase tracking-wider font-sans">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 4. MARKETS & PROTOCOL FOOTPRINT MATRIX */}
      <section id="partnerships" className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-20 border-b border-[#071731]/10 scroll-mt-[80px]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#071731]/10">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-[#071731] tracking-tight">
              Cross-Sector Operational Coverage
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            Delivering sovereign protocol, commercial MICE exhibitions, and corporate shareholder summits across Southeast Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 font-sans text-xs">
          <div className="p-6 bg-white border border-[#071731]/10 rounded space-y-3 shadow-xs">
            <div className="font-mono text-[11px] font-bold text-[#C8102E] uppercase">
              Sovereign &amp; Diplomatic
            </div>
            <div className="font-heading text-base font-semibold text-[#071731]">
              Ministerial &amp; Embassy Conclaves
            </div>
            <p className="text-slate-600 leading-relaxed">
              Bilateral ministerial plenaries, head-of-state diplomatic banquets, and sovereign treaty signing ceremonies.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#071731]/10 rounded space-y-3 shadow-xs">
            <div className="font-mono text-[11px] font-bold text-[#C8102E] uppercase">
              State-Owned Enterprises
            </div>
            <div className="font-heading text-base font-semibold text-[#071731]">
              National Corporate Assemblies
            </div>
            <p className="text-slate-600 leading-relaxed">
              Holding leadership assemblies, ESG investor symposiums, and national corporate governance conclaves.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#071731]/10 rounded space-y-3 shadow-xs">
            <div className="font-mono text-[11px] font-bold text-[#C8102E] uppercase">
              Trade &amp; Commercial MICE
            </div>
            <div className="font-heading text-base font-semibold text-[#071731]">
              Multi-Hall Trade Expositions
            </div>
            <p className="text-slate-600 leading-relaxed">
              Multi-hall energy transition expos, maritime congresses, clean tech showcases, and B2B buyer-seller matchmaking.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#071731]/10 rounded space-y-3 shadow-xs">
            <div className="font-mono text-[11px] font-bold text-[#C8102E] uppercase">
              Civic &amp; Media Broadcast
            </div>
            <div className="font-heading text-base font-semibold text-[#071731]">
              Mass Assemblies &amp; Telepresence
            </div>
            <p className="text-slate-600 leading-relaxed">
              Mass public cultural heritage assemblies, 4K television syndication, and interactive thought leadership broadcasts.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CLOSING INQUIRY PANEL (Selective Navy Contrast Moment) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-16">
        <div className="bg-[#071731] text-white rounded p-10 sm:p-14 border border-[#071731] shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl space-y-3">
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
