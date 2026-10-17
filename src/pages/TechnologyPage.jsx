import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const techPhoto = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop";
const commandPhoto = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop";

export default function TechnologyPage({ navigateTo }) {
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
      category: "PURPOSE-BUILT SOFTWARE",
      title: "Digital Platforms & Custom Operational Software",
      description:
        "Custom-architected public sector applications built to solve domain-specific institutional workflows with rigorous role-based access, automated audit trails, and intuitive interfaces.",
      specs: "Law Enforcement Platforms · Operational Web & Mobile Systems"
    },
    {
      category: "DATA & INFORMATION SECURITY",
      title: "Secure Information Architecture & Integration",
      description:
        "Robust information management frameworks designed for high-sensitivity data classification, encrypted transmission, database hardening, and compliance with national cybersecurity standards.",
      specs: "End-to-End Encryption · Air-Gapped Resiliency · Zero Leakage"
    },
    {
      category: "DECISION SUPPORT SYSTEMS",
      title: "Operational Coordination & Situational Intelligence",
      description:
        "Centralized command consoles, real-time dispatch boards, and operational intelligence dashboards enabling synchronized field coordination and rapid, data-informed command decisions.",
      specs: "Real-Time Telemetry · Multi-Agency Incident Tracking"
    },
    {
      category: "INFRASTRUCTURE & HARDENING",
      title: "Supporting Infrastructure & Systems Modernization",
      description:
        "Turnkey server architectures, on-premises and private cloud deployments, hardware integration, and redundant backup systems built for continuous uptime in mission-critical environments.",
      specs: "High-Availability Clusters · Hardware Interop · 24/7 Redundancy"
    }
  ];

  const deploymentSectors = [
    "Indonesian Law Enforcement Agencies",
    "Public-Sector Security Facilities & Command Centers",
    "Government Information Management Directorates",
    "Inter-Agency Working Groups & Coordination Units",
    "Specialized Public Safety & Regulatory Secretariats"
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
              Purpose-Built Technology for <br />
              <span className="font-editorial italic font-normal text-slate-600">
                Mission-Critical Operations.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl font-normal leading-relaxed max-w-2xl pt-2">
              Delivering secure digital systems, information architecture, and mission-critical technology solutions for Indonesian Law Enforcement Agencies and public-sector institutions since 2018.
            </p>
          </div>

          {/* Right Action (4 cols) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red"
            >
              <span>Initiate Technology Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. ARCHITECTURAL EDITORIAL CARD */}
      <section className="relative w-full rounded-2xl sm:rounded-3xl bg-[#071731] text-white overflow-hidden flex flex-col justify-between select-none my-8 sm:my-12 shadow-2xl border border-white/10">
        {/* Fullscreen Photo Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <motion.img
            src={techPhoto}
            alt="TSA Mission-Critical IT & Technology"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover object-center"
          />
          {/* Directional Scrim for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/75 via-45% to-[#071731]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071731]/95 via-[#071731]/60 via-55% to-transparent pointer-events-none" />
        </div>

        {/* Center / Direct Typography Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 my-auto py-10 sm:py-16">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              Purpose-Built Digital Systems &amp; <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Technology Solutions.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              Since 2018, TSA’s IT and Technology division has delivered digital systems and technology solutions for Indonesian Law Enforcement Agencies. Grounded in institutional operations, high-assurance security, and fit-for-purpose resilience.
            </p>

            <div className="pt-2">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red text-xs sm:text-sm py-3 px-6 cursor-pointer inline-flex items-center gap-2 shadow-lg"
              >
                <span>Consult Technical Directorate</span>
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
              <span className="text-white font-medium">Public Sector &amp; Law Enforcement</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Architecture</span>
              <span className="text-white font-medium">Air-Gapped &amp; Distributed</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Information Security</span>
              <span className="text-white font-medium">AES-256 / Bilateral NDA</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Operations Base</span>
              <span className="text-white font-medium">The City Tower, Jakarta</span>
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
              Discretion, Precision, <br />
              and Institutional Trust.
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
                "Purpose-Built Technology for Mission-Critical Operations"
              </p>
            </div>

            <div className="pt-6 border-t border-[#071731]/10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              <p>
                Since 2018, TSA’s IT and Technology division has delivered digital systems and technology solutions for Indonesian Law Enforcement Agencies. Its work is grounded in a practical understanding of institutional operations, security requirements, information management, and the complex environments in which public-sector technology must perform.
              </p>
              <p>
                From purpose-built software and digital platforms to supporting infrastructure and technology integration, TSA develops solutions that strengthen coordination, improve operational efficiency, and support better-informed decision-making. Every engagement is approached with discretion, precision, and a commitment to creating technology that is relevant, reliable, and fit for purpose.
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
              Mission-Critical Technology Capabilities
            </h2>
          </div>
          <p className="text-sm text-slate-600 font-normal max-w-md leading-relaxed">
            Structured for high security, data sovereignty, and reliable performance across complex public-sector operating environments.
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

      {/* 5A. SERVICE COMMITMENTS (Airy Editorial Off-White Foundation) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-20 border-b border-[#071731]/10">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-[#071731] tracking-tight">
            Relevant, Reliable, &amp; Fit for Purpose.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              2018
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Continuous Track Record
            </div>
            <p className="font-sans text-xs text-slate-600">
              Delivering solutions for Indonesian Law Enforcement Agencies for over 8 years.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              100<span className="text-[#C8102E]">%</span>
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Discretion &amp; Precision
            </div>
            <p className="font-sans text-xs text-slate-600">
              Strict non-disclosure standards and institutional security alignment.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              High-Sec
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Data Governance
            </div>
            <p className="font-sans text-xs text-slate-600">
              Grounded in complex public-sector compliance and information management.
            </p>
          </div>

          <div className="space-y-2">
            <div className="font-heading text-4xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              Zero
            </div>
            <div className="font-heading text-sm sm:text-base text-[#071731] font-medium">
              Compromise on Quality
            </div>
            <p className="font-sans text-xs text-slate-600">
              Resilient architectures designed for continuous operational readiness.
            </p>
          </div>
        </div>
      </section>

      {/* 5B. SITUATIONAL INTELLIGENCE & DEPLOYMENT CARD */}
      <section className="relative w-full rounded-2xl sm:rounded-3xl bg-[#071731] text-white overflow-hidden flex flex-col justify-between select-none my-8 sm:my-12 shadow-2xl border border-white/10">
        {/* Fullscreen Photo Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <motion.img
            src={commandPhoto}
            alt="TSA Mission-Critical Situational Intelligence"
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
              Operational Environments &amp; <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Verified Enforcement Sectors.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              Transforming complex institutional workflows into actionable digital infrastructure. Trusted across specialized agency divisions with continuous uptime assurance.
            </p>

            {/* Verified Deployment Sectors Directly Over Media */}
            <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3 max-w-3xl">
              {deploymentSectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2 rounded bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-mono text-slate-200"
                >
                  <span>{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Spec Footer Over Media */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 pb-8 sm:pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/15 font-mono text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Compliance</span>
              <span className="text-white font-medium">Indonesian Legal Framework</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Incident Response</span>
              <span className="text-white font-medium">Tier-1 Rapid Support</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Hardware Interop</span>
              <span className="text-white font-medium">Multi-Vendor Integration</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Access Protocols</span>
              <span className="text-white font-medium">Role-Based Multi-Factor</span>
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
                Initiate a Confidential Technology Consultation.
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                For purpose-built software, secure information infrastructure, or mission-critical technology integration, contact the TSA Technical Directorate for confidential feasibility evaluation and architecture design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red flex items-center justify-center gap-2"
              >
                <span>Initiate Technology Inquiry</span>
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
