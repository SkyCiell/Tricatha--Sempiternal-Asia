import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const plenaryPhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1800&auto=format&fit=crop";
const conclavePhoto = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop";

export default function GovAdvPage({ navigateTo }) {
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
      category: "STRATEGIC CONSULTATION",
      title: "Institutional Landscape & Policy Guidance",
      description:
        "In-depth advisory on regulatory frameworks, inter-agency working dynamics, public policy priorities, and strategic planning aligned with national objectives.",
      specs: "Policy Analysis · Regulatory Roadmap · Strategic Advisory"
    },
    {
      category: "STAKEHOLDER MAPPING",
      title: "Comprehensive Institutional & Ecosystem Analysis",
      description:
        "Systematic mapping of key decision-makers, ministerial departments, regulatory bodies, and industry stakeholders to identify relevant pathways and alignment opportunities.",
      specs: "Ecosystem Audits · Influence Mapping · Priority Identification"
    },
    {
      category: "FACILITATED INTRODUCTIONS",
      title: "Bilateral Dialogues & Structured Engagements",
      description:
        "Carefully coordinated executive introductions and bilateral consultations designed to establish mutual understanding, legitimacy, and long-term institutional trust.",
      specs: "Ministerial Receptions · Executive Consultations · Protocol Alignment"
    },
    {
      category: "PARTNERSHIP ADVANCEMENT",
      title: "Public-Private Collaboration & Alliance Building",
      description:
        "Facilitating multi-stakeholder working groups, public-private partnerships (PPP), and strategic alliances that achieve meaningful, sustainable progress.",
      specs: "Consensus Forums · Public-Private Alliances · Accord Frameworks"
    }
  ];

  const stakeholders = [
    "National Government Ministries & State Secretariats",
    "Law Enforcement & Public Safety Agencies",
    "Accredited Diplomatic Missions & International Delegations",
    "State-Owned Enterprises (BUMN) & Regulatory Commissions",
    "Domestic & Multinational Private-Sector Enterprises"
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#071731] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">

      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">

        {/* Navigation Breadcrumb */}
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
              GovAdv | Government Advisory <br />
              <span className="font-editorial italic font-normal text-slate-600">
                Navigating Institutions, Advancing Strategic Objectives.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl font-normal leading-relaxed max-w-2xl pt-2">
              TSA’s government advisory and stakeholder-engagement division, supporting domestic and international organizations in understanding and navigating Indonesia’s institutional landscape.
            </p>
          </div>

          {/* Right Action (4 cols) */}
          <div className="lg:col-span-4 flex items-start lg:items-end justify-start lg:justify-end">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red"
            >
              <span>Initiate Advisory Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. GOVERNMENT ADVISORY CARD */}
      <section className="relative w-full rounded-2xl sm:rounded-3xl bg-[#071731] text-white overflow-hidden flex flex-col justify-between select-none my-8 sm:my-12 shadow-2xl border border-white/10">
        {/* Fullscreen Photo Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <motion.img
            src={plenaryPhoto}
            alt="GovAdv Institutional Advisory and Strategic Stakeholder Conclave"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover object-center"
          />
          {/* Directional Scrim for Supreme Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/75 via-45% to-[#071731]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/60 via-55% to-transparent pointer-events-none" />
        </div>

        {/* Spacer */}
        <div className="relative z-10 w-full pt-10" />

        {/* Center / Direct Typography Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 my-auto py-6">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              Strategic Consultation, Stakeholder Mapping &amp; <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Institutional Engagement.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              GovAdv supports domestic and international organizations in understanding and navigating Indonesia’s institutional landscape. Grounded in discretion, integrity, and sustainable progress built through trust, context, and meaningful dialogue.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red text-xs sm:text-sm py-3 px-6 cursor-pointer inline-flex items-center gap-2 shadow-lg"
              >
                <span>Consult Advisory Directorate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Spec Footer Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 pb-8 sm:pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/15 font-mono text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Jurisdiction</span>
              <span className="text-white font-medium">Ministries &amp; State Agencies</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Diplomatic Scope</span>
              <span className="text-white font-medium">Embassies &amp; Bilateral Chambers</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Engagement Protocol</span>
              <span className="text-white font-medium">Facilitated High-Level Dialogue</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Operational Base</span>
              <span className="text-white font-medium">Jakarta Capital Corridor</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MANIFESTO & ABOUT US */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-[#071731]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-baseline">

          {/* Left Anchor (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="font-heading text-2xl sm:text-4xl text-[#071731] font-semibold tracking-tight leading-tight">
              Trust, Context, <br />
              and Meaningful Dialogue.
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
            <div>
              <p className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#071731] font-normal italic leading-snug tracking-tight">
                "Navigating Institutions, Advancing Strategic Objectives"
              </p>
            </div>

            <div className="pt-6 border-t border-[#071731]/10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              <p>
                GovAdv is TSA’s government advisory and stakeholder-engagement division, supporting domestic and international organizations in understanding and navigating Indonesia’s institutional landscape. Its work draws upon extensive experience engaging government ministries, law enforcement agencies, public institutions, diplomatic communities, and private-sector stakeholders.
              </p>
              <p>
                Through strategic consultation, stakeholder mapping, institutional engagement, and carefully facilitated introductions, GovAdv helps clients establish relevant relationships and advance legitimate business, policy, and partnership objectives. Every engagement is managed with discretion, integrity, and a clear understanding that sustainable progress is built through trust, context, and meaningful dialogue.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. THE FOUR DISCIPLINES */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28 border-b border-[#071731]/10">

        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#071731]/10">
          <div>
            <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-[#071731] tracking-tight">
              Institutional Advisory Capabilities
            </h2>
          </div>
          <p className="text-sm text-slate-600 font-normal max-w-md leading-relaxed">
            Delivering strategic clarity, ecosystem access, and constructive engagement across Indonesia's institutional landscape.
          </p>
        </div>

        {/* Ledger Rows */}
        <div className="divide-y divide-[#071731]/10 pt-4 border-b border-[#071731]/10">
          {disciplines.map((d, idx) => (
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
                  {d.category}
                </span>
              </div>

              {/* Col 2: Title (4 cols) */}
              <div className="lg:col-span-4">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#071731] tracking-tight group-hover:text-[#C8102E] transition-colors">
                  {d.title}
                </h3>
              </div>

              {/* Col 3: Description & Specs (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {d.description}
                </p>
                <div className="font-mono text-xs text-slate-500">
                  <span>{d.specs}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* 5A. ADVISORY CREDIBILITY & METRICS (Airy Editorial Off-White Foundation) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-20 border-b border-[#071731]/10">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-[#071731] tracking-tight">
            Trust, Context, &amp; Execution.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              High-Level
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Stakeholder Engagement
            </div>
            <p className="font-sans text-xs text-slate-600">
              Direct engagement across ministries, law enforcement agencies, and diplomatic missions.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              100<span className="text-[#C8102E]">%</span>
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Integrity &amp; Discretion
            </div>
            <p className="font-sans text-xs text-slate-600">
              Uncompromising institutional ethics and strict confidentiality governance.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              Cross-Sector
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Ecosystem Depth
            </div>
            <p className="font-sans text-xs text-slate-600">
              Connecting public agendas with enterprise capabilities and investment mandates.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              Impact
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Sustainable Outcomes
            </div>
            <p className="font-sans text-xs text-slate-600">
              Advancing legitimate business, policy, and partnership objectives that endure.
            </p>
          </div>
        </div>
      </section>

      {/* 5B. STAKEHOLDER CONCLAVE CARD */}
      <section className="relative w-full rounded-2xl sm:rounded-3xl bg-[#071731] text-white overflow-hidden flex flex-col justify-between select-none my-8 sm:my-12 shadow-2xl border border-white/10">
        {/* Fullscreen Photo Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <motion.img
            src={conclavePhoto}
            alt="GovAdv Institutional Engagements"
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

        {/* Spacer */}
        <div className="relative z-10 w-full pt-10" />

        {/* Center / Direct Typography Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 my-auto py-6">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              Active Institutional &amp; <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Diplomatic Engagement Ecosystem.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              Through strategic consultation, stakeholder mapping, institutional engagement, and carefully facilitated introductions, GovAdv helps clients establish relevant relationships and advance legitimate business and policy objectives.
            </p>

            {/* Stakeholder Sectors Directly Over Media */}
            <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3 max-w-3xl">
              {stakeholders.map((s, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2 rounded bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-mono text-slate-200"
                >
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Spec Footer Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 pb-8 sm:pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/15 font-mono text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Ethics Framework</span>
              <span className="text-white font-medium">Anti-Corruption &amp; Compliance</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Engagement Mode</span>
              <span className="text-white font-medium">Bilateral High-Trust Liaison</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Advisory Horizon</span>
              <span className="text-white font-medium">Multi-Year Strategic Agendas</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Location</span>
              <span className="text-white font-medium">The City Tower, Jakarta Pusat</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING MANDATE INQUIRY PANEL (Selective Navy Contrast Moment) */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          <div className="bg-[#071731] text-white border border-[#071731] p-8 sm:p-14 rounded-xl shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                Advance Your Institutional Objectives.
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Connect with our senior advisory team at The City Tower in Central Jakarta for confidential consultation on stakeholder mapping, public policy navigation, and institutional partnership frameworks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red flex items-center justify-center gap-2"
              >
                <span>Initiate Advisory Inquiry</span>
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
