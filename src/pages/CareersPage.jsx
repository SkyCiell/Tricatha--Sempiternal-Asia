import React from "react";
import Leadership from "../components/Leadership";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CareersPage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  const jobOpenings = [
    {
      id: "protocol-liaison",
      title: "Sovereign Protocol & Diplomatic Liaison Officer",
      division: "Diplomatic Affairs & Summit Governance",
      location: "Jakarta HQ (The City Tower) · Regional Travel",
      type: "Full-Time Mandate",
      clearance: "Government Background Vetting Required",
      desc: "Lead high-level protocol coordination for bilateral ministerials, state delegations, and head-of-state diplomatic assemblies across ASEAN.",
      requirements: [
        "Minimum 5 years in diplomatic protocol, embassy liaison, or high-stakes government affairs",
        "Fluency in English and Bahasa Indonesia; additional ASEAN language advantageous",
        "Impeccable poise, absolute confidentiality, and crisis mediation acumen"
      ]
    },
    {
      id: "plenary-scenographer",
      title: "Senior Plenary Scenographer & Stage Engineer",
      division: "Experiential Architecture & Spatial Production",
      location: "Jakarta HQ · Plenary Venues",
      type: "Full-Time Mandate",
      clearance: "Standard Institutional Clearance",
      desc: "Architect spatial environments, monumental stage scenography, and immersive AV installations for 5,000+ delegate conventions.",
      requirements: [
        "Demonstrated mastery of spatial architecture, lighting design, and technical stage CAD",
        "Proven portfolio managing turnkey stage construction under tight deadlines",
        "Working knowledge of broadcast-grade 4K lighting and acoustic dampening"
      ]
    },
    {
      id: "policy-analyst",
      title: "Geopolitical & Regulatory Policy Analyst",
      division: "TSA Sovereign Research Group",
      location: "Jakarta HQ (The City Tower)",
      type: "Full-Time Mandate",
      clearance: "Institutional Confidentiality Covenants",
      desc: "Produce actionable executive monographs, cross-border regulatory feasibility briefs, and macroeconomic intelligence for sovereign clients.",
      requirements: [
        "Advanced degree in Public Policy, International Relations, Law, or Economics",
        "Deep familiarity with ASEAN economic policies, FDI frameworks, and ministry processes",
        "Exceptional editorial synthesis and bilingual monograph authoring skills"
      ]
    },
    {
      id: "broadcast-director",
      title: "Broadcast Operations & Technical Director",
      division: "DNA STUDIO Multimedia Production",
      location: "Jakarta HQ (DNA Studio Suite)",
      type: "Full-Time Mandate",
      clearance: "Commercial & Sovereign Media Clearance",
      desc: "Direct live multi-camera 4K cinema studio broadcasts, high-security executive streams, and syndicated digital distribution.",
      requirements: [
        "Extensive experience directing live multi-cam studio switchers and color workflows",
        "Command of cinematic audio-visual equipment (Blackmagic, RED, Dante IP audio)",
        "Proven leadership directing turnkey executive broadcast teams"
      ]
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#071731] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-[#071731]/10">
          
          {/* Left Title & Statement (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
              Talent Appointments · The City Tower, Jakarta
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-[#071731] tracking-tight leading-[1.08]">
              Careers &amp; <br />
              <span className="font-editorial italic font-normal text-slate-600">
                Sovereign Practice Opportunities.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl pt-1">
              Tricatha Sempiternal Asia invites seasoned strategists, protocol officers, spatial scenographers, and broadcast engineers to operate at the highest echelons of regional diplomacy and enterprise governance.
            </p>
          </div>

          {/* Right Action (4 cols) */}
          <div className="lg:col-span-4 flex items-start lg:items-end justify-start lg:justify-end">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red"
            >
              <span>Submit Confidential Dossier</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. Open Career Mandates */}
      <section className="py-16 sm:py-24 border-b border-[#071731]/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          <div className="pb-8 border-b border-[#071731]/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
                ACTIVE ROSTER
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-semibold tracking-tight text-[#071731]">
                Current Strategic Openings
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-sm">
              All appointments require background validation and binding non-disclosure covenants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-10">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-[#071731]/10 rounded p-7 sm:p-8 space-y-5 shadow-xs hover:border-[#071731]/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-[#C8102E] font-semibold uppercase tracking-wider bg-slate-100 border border-[#071731]/10 px-2.5 py-0.5 rounded">
                      {job.type}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {job.location}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-[#071731] tracking-tight leading-snug">
                    {job.title}
                  </h3>

                  <div className="text-xs font-mono text-slate-500">
                    {job.division}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {job.desc}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                      Candidate Profile &amp; Accreditation:
                    </span>
                    {job.requirements.map((req, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#071731]/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>{job.clearance}</span>
                  </span>

                  <button
                    onClick={handleInquiry}
                    className="btn-editorial-red text-xs py-1.5 px-3 inline-flex items-center gap-1"
                  >
                    <span>Apply Mandate</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Executive Leadership Grid (Selective Navy Contrast Moment) */}
      <Leadership />

      {/* 4. Bottom Mandate Invitation Panel */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          <div className="bg-[#071731] text-white border border-[#071731] p-8 sm:p-14 rounded-xl shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
                EXECUTIVE APPOINTMENTS · THE CITY TOWER
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                Submit an Unsolicited Confidential Dossier.
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                We review credentials from senior sovereign liaisons, bilingual show callers, and digital platform architects on a rolling basis. All files are reviewed under strict institutional confidentiality.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <button
                onClick={handleInquiry}
                className="btn-editorial-red flex items-center justify-center gap-2"
              >
                <span>Submit Candidate Dossier</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
