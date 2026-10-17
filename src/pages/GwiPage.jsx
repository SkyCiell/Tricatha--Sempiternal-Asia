import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight, Sparkles, Target, Database } from "lucide-react";

const mainConferencePhoto = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1800&auto=format&fit=crop";
const businessMatchingPhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop";

export default function GwiPage({ navigateTo }) {
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

  const handleExploreEvents = () => {
    if (navigateTo) {
      navigateTo("/events");
    } else {
      window.history.pushState(null, "", "/events");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  const capabilities = [
    {
      category: "CONFERENCES & PLENARIES",
      title: "National & International Conferences",
      description:
        "High-level plenaries, bilateral symposiums, and industry summits engineered with protocol precision, simultaneous translation, stage scenography, and seamless multi-track technical coordination.",
      specs: "Ministerial Plenaries · Global Summits · Multi-Track Agendas"
    },
    {
      category: "CORPORATE & STAKEHOLDER ENGAGEMENTS",
      title: "Corporate Gatherings & Strategic Engagements",
      description:
        "Executive annual general meetings, corporate leadership retreats, and stakeholder gatherings designed to foster alignment, prestige, and memorable institutional dialogue.",
      specs: "Leadership Retreats · Annual General Meetings · Stakeholder Galas"
    },
    {
      category: "AUDIENCE CURATION & NETWORKING",
      title: "Business-Matching & Audience Programs",
      description:
        "Curated target audience curation backed by an organic multisector network of 20,000+ contacts, ensuring the room is filled with relevant decision-makers and genuine commercial counterparties.",
      specs: "20,000+ Organic Network · B2B Matchmaking · VIP Ingress Facilitation"
    },
    {
      category: "EXPERIENTIAL & BRAND ACTIVATION",
      title: "Brand Activations & Experiential Environments",
      description:
        "Transforming brand visions into immersive spatial environments through strategic planning, creative spatial direction, cutting-edge AV scenography, and disciplined production execution.",
      specs: "Spatial Scenography · Product Debuts · Immersive Installations"
    }
  ];

  const audienceSectors = [
    {
      sector: "Government & Ministerial Representatives",
      desc: "Senior officials, regulatory commissioners, and departmental directors aligned with sovereign and civic agendas."
    },
    {
      sector: "Business Leaders & C-Suite Executives",
      desc: "Enterprise founders, chairpersons, managing directors, and BUMN executives driving commercial growth."
    },
    {
      sector: "Industry Professionals & Technical Experts",
      desc: "Domain leaders, technological innovators, researchers, and professional practitioner cohorts."
    },
    {
      sector: "Strategic Ecosystems & Communities",
      desc: "Industry associations, trade chambers, civil society bodies, and specialized bilateral interest groups."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#071731] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">

      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">

        {/* Back Link */}
        <div className="pb-6 border-b border-[#071731]/10 mb-8">
          <button
            onClick={handleBackToGroup}
            className="group inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-500 hover:text-[#071731] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-[#C8102E]" />
            <span>Back to Business Group</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-[#071731]/10">

          {/* Left Title & Statement (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[70px] font-semibold text-[#071731] tracking-tight leading-[1.04]">
              GWI | Event Management <br />
              <span className="font-editorial italic font-normal text-slate-600">
                Bringing the Right Audience to the Right Experience.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl font-normal leading-relaxed max-w-2xl pt-2">
              TSA’s event management and experiential division, delivering national and international conferences, corporate gatherings, business-matching programs, brand activations, and strategic engagements.
            </p>
          </div>

          {/* Right Action (4 cols) */}
          <div className="lg:col-span-4 flex items-start lg:items-end justify-start lg:justify-end gap-3 flex-wrap">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red"
            >
              <span>Initiate Event Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. CONFERENCE & EXPO EDITORIAL CARD */}
      <section className="relative w-full rounded-2xl sm:rounded-3xl bg-[#071731] text-white overflow-hidden flex flex-col justify-between select-none my-8 sm:my-12 shadow-2xl border border-white/10">
        {/* Fullscreen Photo Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <motion.img
            src={mainConferencePhoto}
            alt="GWI Event Management National and International Conference Stage"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover object-center"
          />
          {/* Directional Scrim for Supreme Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/75 via-45% to-[#071731]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/60 via-55% to-transparent pointer-events-none" />
        </div>

        {/* Center / Direct Typography Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 my-auto py-10 sm:py-16">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              Conferences, Brand Activations, &amp; <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Strategic Business Matching.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              GWI does more than organize events—we connect our clients with the right people. Supported by an organic, multisector database of more than 20,000 contacts, we curate target audiences according to each engagement’s specific objectives.
            </p>

            <div className="pt-2">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red text-xs sm:text-sm py-3 px-6 cursor-pointer inline-flex items-center gap-2 shadow-lg"
              >
                <span>Consult Production Directorate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Spec Footer Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 pb-8 sm:pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/15 font-mono text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Staging Jurisdiction</span>
              <span className="text-white font-medium">National &amp; International Summits</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Creative Production</span>
              <span className="text-white font-medium">Turnkey 360° Execution</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Stakeholder Access</span>
              <span className="text-white font-medium">Government, Enterprise &amp; Media</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Key Corridors</span>
              <span className="text-white font-medium">Jakarta · Bali · Surabaya · ASEAN</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MANIFESTO & ABOUT GWI */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-[#071731]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-baseline">

          {/* Left Anchor (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-3"
          >
            <h2 className="font-heading text-2xl sm:text-4xl text-[#071731] font-semibold tracking-tight leading-tight">
              Purposeful, <br />
              Cohesive, and <br />
              Commercially Meaningful.
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
            <div className="space-y-3">
              <p className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#071731] font-normal italic leading-snug tracking-tight">
                "Bringing the Right Audience to the Right Experience"
              </p>
            </div>

            <div className="pt-6 border-t border-[#071731]/10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              <p>
                Gema Waskita Interaktifa (GWI) is TSA’s event management and experiential division, delivering national and international conferences, corporate gatherings, business-matching programs, brand activations, and strategic engagements. We combine strategic planning, creative direction, and disciplined execution to transform each client’s objectives into a cohesive and professionally delivered experience.
              </p>
              <p>
                GWI does more than organize events—we connect our clients with the right people. Supported by an organic, multisector database of more than 20,000 contacts, we curate target audiences according to each engagement’s specific objectives. This capability enables us to bring relevant decision-makers, government representatives, business leaders, industry professionals, and communities into the room—creating events that are not only well executed, but also purposeful and commercially meaningful.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. FOUR EVENT DISCIPLINES */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-[#071731]/10">

        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#071731]/10">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-[#071731] tracking-tight">
              Event Management &amp; Experiential Capabilities
            </h2>
          </div>
          <p className="text-sm text-slate-600 font-normal max-w-md leading-relaxed">
            From strategic concept design to multi-track staging and targeted audience curation across Indonesia and Southeast Asia.
          </p>
        </div>

        {/* Ledger Rows */}
        <div className="divide-y divide-[#071731]/10 pt-4 border-b border-[#071731]/10">
          {capabilities.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline group hover:bg-[#071731]/[0.015] transition-colors px-2 sm:px-4 rounded"
            >
              {/* Col 1: Category (3 cols) */}
              <div className="lg:col-span-3">
                <span className="font-mono text-xs tracking-wider uppercase text-[#C8102E] font-semibold">
                  {c.category}
                </span>
              </div>

              {/* Col 2: Title (4 cols) */}
              <div className="lg:col-span-4">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#071731] tracking-tight group-hover:text-[#C8102E] transition-colors">
                  {c.title}
                </h3>
              </div>

              {/* Col 3: Description & Specs (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {c.description}
                </p>
                <div className="text-xs font-mono text-slate-500">
                  {c.specs}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* 5A. 20,000+ AUDIENCE NETWORK & MULTISECTOR DATABASE (Airy Editorial Off-White Foundation) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-20 border-b border-[#071731]/10">
        <div className="space-y-3 max-w-2xl mb-12">
          <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-[#071731] tracking-tight">
            Curating the Room: 20,000+ Verified Contacts.
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
            Supported by an organic, multisector database, GWI curates target audiences according to each engagement’s specific objectives—bringing relevant decision-makers into the room.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              20,000<span className="text-[#C8102E]">+</span>
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Organic Contact Network
            </div>
            <p className="font-sans text-xs text-slate-600">
              Multisector leaders, commissioners, C-suite executives, and institutional figures.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              Multi<span className="text-[#C8102E]">-</span>Sector
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Audience Curation
            </div>
            <p className="font-sans text-xs text-slate-600">
              Tailored invitations and guest curation aligned with engagement goals.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              360<span className="text-[#C8102E]">°</span>
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Execution Discipline
            </div>
            <p className="font-sans text-xs text-slate-600">
              Concept, staging, protocol, tech telemetry, and post-event analytics.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              Commercial
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Meaningful Impact
            </div>
            <p className="font-sans text-xs text-slate-600">
              Transforming gatherings into tangible relationships, leads, and accord frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* 5B. AUDIENCE ECOSYSTEM CARD */}
      <section className="relative w-full rounded-2xl sm:rounded-3xl bg-[#071731] text-white overflow-hidden flex flex-col justify-between select-none my-8 sm:my-12 shadow-2xl border border-white/10">
        {/* Fullscreen Photo Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <motion.img
            src={businessMatchingPhoto}
            alt="GWI Business-Matching and Executive Audience Curation"
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover object-center"
          />
          {/* Directional Scrim for Supreme Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/75 via-45% to-[#071731]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/60 via-55% to-transparent pointer-events-none" />
        </div>

        {/* Center / Direct Typography Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 my-auto py-10 sm:py-16">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              Curated Multisector <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Audience Ecosystem.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              Bringing relevant decision-makers, government representatives, business leaders, industry professionals, and communities into the room—creating events that are not only well executed, but commercially meaningful.
            </p>

            {/* Audience Sectors Matrix Directly Over Media */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-3xl">
              {audienceSectors.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded bg-white/10 backdrop-blur-md border border-white/15 space-y-1"
                >
                  <div className="text-white font-medium text-xs sm:text-sm">
                    {item.sector}
                  </div>
                  <p className="text-slate-300 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Spec Footer Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 pb-8 sm:pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/15 font-mono text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Database Scope</span>
              <span className="text-white font-medium">20,000+ Direct Contacts</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Attendance Integrity</span>
              <span className="text-white font-medium">Personalized Vetting</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Format Precision</span>
              <span className="text-white font-medium">B2B, B2G &amp; G2G Summits</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Production Hub</span>
              <span className="text-white font-medium">The City Tower, Jakarta</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING EVENT INQUIRY PANEL (Selective Navy Contrast Moment) */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          <div className="bg-[#071731] text-white border border-[#071731] p-8 sm:p-14 rounded-xl shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                Plan Your Next Conference, Gathering, or Activation.
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Connect your brand and strategic objectives with the right audience. Consult GWI’s event management team for bespoke conference production, business-matching, or experiential engagements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red flex items-center justify-center gap-2"
              >
                <span>Initiate Event Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleExploreEvents}
                className="btn-editorial-outline text-xs flex items-center justify-center gap-2"
              >
                <span>Explore Events Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
