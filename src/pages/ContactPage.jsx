import React from "react";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">

      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-white/10">

          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>Direct Secretariat Intake · The City Tower, Jakarta</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.08]">
              Initiate Mandate &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Executive Consultation.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Connect directly with the Executive Directorate at The City Tower in Central Jakarta. All inquiries and strategic project scopes are received under strict institutional confidentiality covenants.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-5">
            <div className="space-y-1 text-left lg:text-right font-mono text-xs text-slate-400">
              <div>CONFIDENTIALITY: STRICT BILATERAL NDA PROTOCOL</div>
              <div className="text-white font-semibold">DIRECT REVIEW BY PRACTICE DIRECTORS</div>
            </div>

            <div className="text-xs font-mono text-slate-400 bg-[#0A1F44] px-3.5 py-1.5 rounded border border-white/10">
              RESPONSE: WITHIN 24 BUSINESS HOURS
            </div>
          </div>

        </div>
      </section>

      {/* 2. MAIN ASYMMETRIC CONTACT & LOCATION SECTION */}
      <Contact />

      {/* 3. EMERGENCY SUMMIT DISPATCH STRIP */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-12">
        <div className="p-6 sm:p-8 bg-[#050F22] border border-white/10 rounded font-mono text-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="text-slate-400 uppercase tracking-wider">
              Urgent Ministerial &amp; Plenary Summit Dispatch Line:
            </span>
            <span className="text-white font-semibold tracking-wider font-mono">+62 21 2358 4500 (EXT. 101)</span>
          </div>

          <div className="text-slate-400 text-[11px] font-mono">
            OPERATIONAL CLEARANCE: 24/7 FOR ACTIVE PLENARY DEPLOYMENTS
          </div>
        </div>
      </section>

    </div>
  );
}
