import React from "react";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#071731] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">

      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-[#071731]/10">

          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#071731] tracking-tight leading-[1.08]">
              Initiate Mandate &amp; <br />
              <span className="font-editorial italic font-normal text-slate-600">
                Executive Consultation.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Connect directly with the Executive Directorate at The City Tower in Central Jakarta. All inquiries and strategic project scopes are received under strict institutional confidentiality covenants.
            </p>
          </div>

        </div>
      </section>

      {/* 2. MAIN ASYMMETRIC CONTACT & LOCATION SECTION */}
      <Contact />

      {/* 3. EMERGENCY SUMMIT DISPATCH STRIP (Selective Navy Contrast Moment) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-12">
        <div className="p-6 sm:p-8 bg-[#071731] text-white border border-[#071731] rounded font-mono text-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-300 uppercase tracking-wider">
              Urgent Ministerial &amp; Plenary Summit Dispatch Line:
            </span>
            <span className="text-white font-semibold tracking-wider font-mono">+62 21 2358 4500 (EXT. 101)</span>
          </div>

          <div className="text-slate-300 text-[11px] font-mono">
            24/7 FOR ACTIVE PLENARY DEPLOYMENTS
          </div>
        </div>
      </section>

    </div>
  );
}
