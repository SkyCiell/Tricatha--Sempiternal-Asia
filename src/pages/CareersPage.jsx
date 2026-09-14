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
    <div className="pt-20 bg-[#FFFFFF] min-h-screen text-[#0A1F44] font-sans selection:bg-[#C8102E] selection:text-white">
      {/* 1. Hero Banner - Deep Navy #0A1F44 */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        {/* Subtle dot matrix */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />

        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex items-center gap-2.5 text-xs font-mono text-[#C8102E] font-medium uppercase tracking-widest mb-4">
            <span className="w-2 h-0.5 bg-[#C8102E]" />
            <span>Join the Mandate · The City Tower Jakarta</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-white leading-[1.14]">
                Careers &amp; <br />
                <span className="text-white/85 font-normal">Sovereign Practice Opportunities.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Tricatha Sempiternal Asia invites seasoned strategists, protocol officers, spatial scenographers, and broadcast engineers to operate at the highest echelons of regional diplomacy and enterprise governance.
              </p>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial px-7 py-3.5 bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-editorial flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md shrink-0 self-start lg:self-auto"
            >
              <span>Submit Confidential Dossier</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Executive Leadership Grid */}
      <Leadership />

      {/* 3. Open Career Mandates - Light Neutral #F5F6F8 */}
      <section className="py-20 sm:py-28 bg-[#F5F6F8] border-b border-slate-200/60">
        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8">
          <div className="pb-8 border-b border-slate-200/80 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C8102E] font-medium uppercase">
                <span className="w-2 h-0.5 bg-[#C8102E]" />
                <span>Active Directives</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-medium tracking-tight text-[#0A1F44]">
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
                className="bg-[#FFFFFF] border border-slate-200/80 rounded-lg p-7 sm:p-8 space-y-5 shadow-xs hover:border-[#C8102E]/50 transition-editorial flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-[#C8102E] uppercase tracking-wider bg-[#F5F6F8] border border-slate-200 px-2.5 py-0.5 rounded-sm">
                      {job.type}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {job.location}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-medium text-[#0A1F44] tracking-tight leading-snug">
                    {job.title}
                  </h3>

                  <div className="text-xs font-mono text-slate-500">
                    {job.division}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {job.desc}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      KEY COMPETENCIES:
                    </span>
                    {job.requirements.map((req, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.clearance}</span>
                  </div>

                  <button
                    onClick={handleInquiry}
                    className="btn-editorial px-4 py-2 bg-[#0A1F44] hover:bg-[#C8102E] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-editorial flex items-center gap-1.5 cursor-pointer shadow-xs hover:shadow-md"
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

      {/* 4. Fellowship Callout - Pure White #FFFFFF */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="font-mono text-xs text-[#C8102E] font-medium uppercase tracking-widest block">
            STUDENTS &amp; RECENT GRADUATES
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-medium text-[#0A1F44] tracking-tight">
            Looking for Fellowship &amp; Internship Opportunities?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            Our 2026 intake is currently open across software, event protocol, spatial design, and commercial advisory.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                if (navigateTo) navigateTo("/internship");
              }}
              className="btn-editorial px-7 py-3.5 bg-[#0A1F44] hover:bg-[#C8102E] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-editorial inline-flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>Explore Internship Program</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
