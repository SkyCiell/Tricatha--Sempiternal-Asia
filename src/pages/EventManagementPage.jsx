import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { coreCapabilities } from "../data/tsaData";

export default function EventManagementPage({ navigateTo }) {

  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  return (
    <div className="pt-20 bg-[#FFFFFF] min-h-screen text-[#0A1F44] font-sans selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. Page Header - Deep Navy #0A1F44 Editorial Banner */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>INTEGRATED PRACTICE DISCIPLINES</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.08]">
                Services &amp; <br />
                <span className="text-slate-300 font-normal">Accredited Capabilities.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
                From high-stakes sovereign advisory and ministerial liaisons to turnkey plenary stagecraft and broadcast media production, TSA provides an unbroken chain of executive capabilities.
              </p>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red shrink-0 self-start lg:self-auto"
            >
              <span>Initiate Service Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Operational Benchmarks Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10 font-mono text-xs">
            <div className="p-4 bg-white/5 border border-white/10 rounded">
              <div className="text-slate-400 text-[10px] uppercase">PROTOCOL CLEARANCE</div>
              <div className="text-sm sm:text-base font-semibold text-white mt-1">Head-of-State Grade</div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded">
              <div className="text-slate-400 text-[10px] uppercase">PLENARY CAPACITY</div>
              <div className="text-sm sm:text-base font-semibold text-[#C8102E] mt-1">50,000+ Delegates</div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded">
              <div className="text-slate-400 text-[10px] uppercase">MEDIA PRODUCTION</div>
              <div className="text-sm sm:text-base font-semibold text-white mt-1">4K Cinema Studio Feed</div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded">
              <div className="text-slate-400 text-[10px] uppercase">GEOGRAPHIC REACH</div>
              <div className="text-sm sm:text-base font-semibold text-[#C8102E] mt-1">ASEAN Regional Corridor</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Structured Editorial Service List (Avoids standard icon grid) */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-slate-100">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="pb-10 border-b border-slate-100 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
                COMPREHENSIVE DIRECTORY
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-medium text-[#0A1F44] tracking-tight">
                Accredited Scope of Engagement
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-mono">
              6 Core Operational Disciplines · Delivered from The City Tower Jakarta
            </p>
          </div>

          {/* Editorial Service Rows */}
          <div className="divide-y divide-slate-100 pt-4">
            {coreCapabilities.map((service) => (
              <div
                key={service.id}
                className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start group hover:bg-[#F5F6F8]/60 transition-colors -mx-4 px-4 sm:-mx-8 sm:px-8 rounded-lg"
              >
                {/* Col 1: Number & Category (3 cols) */}
                <div className="lg:col-span-3 space-y-2">
                  <span className="font-mono font-bold text-base text-[#C8102E]">
                    {service.number}
                  </span>
                  <div className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    {service.category}
                  </div>
                </div>

                {/* Col 2: Title & Narrative (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#0A1F44] tracking-tight group-hover:text-[#C8102E] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Col 3: Key Deliverables (4 cols) */}
                <div className="lg:col-span-4 space-y-3 bg-[#FFFFFF] p-5 rounded border border-slate-200/70 shadow-2xs">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block pb-1 border-b border-slate-100">
                    Accredited Deliverables
                  </span>
                  <ul className="space-y-2 text-xs font-sans text-slate-700">
                    {service.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={handleInquiry}
                      className="text-xs font-mono font-medium text-[#0A1F44] hover:text-[#C8102E] transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Operational Rigor & Protocol Clearance (Light Neutral #F5F6F8 Rhythm) */}
      <section className="py-20 sm:py-28 bg-[#F5F6F8] border-b border-slate-200/80">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
                RIGOROUS GOVERNANCE
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-medium text-[#0A1F44] tracking-tight">
                How TSA Executes High-Stakes Engagements
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Every mandate adheres to a five-phase execution methodology: Landscape Intelligence, Protocol &amp; Strategy Formulation, Multi-Party Alignment, Flawless On-Ground Execution, and Post-Event Continuity.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { step: "01", title: "Intelligence & Audits", desc: "Qualitative stakeholder mapping and regulatory compliance audits." },
                { step: "02", title: "Protocol Formulation", desc: "Drafting accredited precedence seating and security perimeters." },
                { step: "03", title: "Consensus Building", desc: "Closed-door bilateral briefings and multi-party roundtables." },
                { step: "04", title: "Flawless Deployment", desc: "Zero-latency plenary staging, stagecraft, and broadcast telemetry." }
              ].map((p) => (
                <div key={p.step} className="p-6 bg-[#FFFFFF] rounded border border-slate-200/80 shadow-2xs space-y-2">
                  <span className="font-mono font-bold text-xs text-[#C8102E]">{p.step}</span>
                  <h4 className="font-heading font-medium text-base text-[#0A1F44]">{p.title}</h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Bottom Call to Action */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
            THE CITY TOWER, JAKARTA
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-medium text-[#0A1F44] tracking-tight">
            Commission an Executive Mandate
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            Our directors coordinate confidential briefings, technical proposals, and multi-disciplinary operational teams to meet your timeline.
          </p>
          <div className="pt-2">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red inline-flex items-center gap-2"
            >
              <span>Submit Service Specifications</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
