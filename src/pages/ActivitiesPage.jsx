import React from "react";
import ActivitiesSection from "../components/ActivitiesSection";

export default function ActivitiesPage({ navigateTo }) {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#071731] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">

      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-[#071731]/10">

          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#071731] tracking-tight leading-[1.08]">
              Strategic Activities, <br />
              <span className="font-editorial italic font-normal text-slate-600">
                Programs &amp; Collaborations.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Delivering high-impact corporate retreats, university talent fellowships, civic cultural preservations, and cross-border thought leadership roundtables across Southeast Asia.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-start lg:items-end justify-start lg:justify-end">
            <button
              onClick={() => (navigateTo ? navigateTo("/contact") : null)}
              className="btn-editorial-red"
            >
              <span>Consult Practice Directorate</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. DEDICATED WARM OFF-WHITE ACTIVITIES SECTION */}
      <ActivitiesSection navigateTo={navigateTo} />

      {/* 3. COLLABORATION INQUIRY CALLOUT (Selective Navy Contrast Moment) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-14">
        <div className="p-8 sm:p-10 bg-[#071731] text-white border border-[#071731] rounded-xl shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Propose an Institutional Program or Academic Fellowship
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              TSA partners with government agencies, state-owned enterprises, universities, and diplomatic missions to co-create high-impact corporate programs.
            </p>
          </div>

          <button
            onClick={() => (navigateTo ? navigateTo("/contact") : null)}
            className="btn-editorial-red shrink-0"
          >
            <span>Consult Practice Directorate</span>
          </button>
        </div>
      </section>

    </div>
  );
}
