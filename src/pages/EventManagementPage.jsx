import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { coreCapabilities } from "../data/tsaData";

export default function EventManagementPage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  const operationalProtocols = [
    {
      discipline: "Intelligence & Feasibility",
      focus: "Institutional & Venue Reconnaissance",
      description: "Comprehensive site surveys across convention centers (JCC, ICE BSD, JIExpo), power redundancy audits, spatial traffic flow engineering, and municipal compliance sign-offs.",
      standard: "Pre-Production Audit"
    },
    {
      discipline: "Protocol & Sovereign Staging",
      focus: "High-Level Precedence & Security Coordinates",
      description: "Direct coordination with ministerial secretariats, diplomatic perimeters, accredited seating hierarchy, and secure bilateral meeting enclosures.",
      standard: "VVIP Ministerial Grade"
    },
    {
      discipline: "Scenography & Engineering",
      focus: "Plenary Staging & Exhibition Spatial Architecture",
      description: "Custom stagecraft engineering, broadcast-quality illumination, calibrated acoustics, multi-camera cinema broadcast telemetry, and turnkey booth construction.",
      standard: "Broadcast Cinema Standard"
    },
    {
      discipline: "Command Center & On-Ground Execution",
      focus: "Zero-Latency Real-Time Telemetry",
      description: "Dedicated on-site command post managing run-down synchronization, speaker green rooms, emergency contingencies, and computerized delegate telemetry.",
      standard: "Zero-Downtime SLA"
    }
  ];

  return (
    <div className="pt-20 bg-[#071731] min-h-screen text-[#F1F5F9] font-sans selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. Page Header - Deep Navy Editorial Banner */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>INTEGRATED EVENT CAPABILITIES</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.08]">
                Services &amp; <br />
                <span className="text-slate-300 font-normal">Accredited Capabilities.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
                From high-stakes sovereign advisory and ministerial liaisons to turnkey plenary stagecraft and commercial trade expositions, TSA delivers an unbroken chain of operational execution.
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
            <div className="p-4 bg-[#071731] border border-white/10 rounded">
              <div className="text-slate-400 text-[10px] uppercase">PROTOCOL CLEARANCE</div>
              <div className="text-sm sm:text-base font-semibold text-white mt-1">Head-of-State Grade</div>
            </div>
            <div className="p-4 bg-[#071731] border border-white/10 rounded">
              <div className="text-slate-400 text-[10px] uppercase">PLENARY CAPACITY</div>
              <div className="text-sm sm:text-base font-semibold text-[#FFFFFF] mt-1">50,000+ Delegates</div>
            </div>
            <div className="p-4 bg-[#071731] border border-white/10 rounded">
              <div className="text-slate-400 text-[10px] uppercase">MEDIA PRODUCTION</div>
              <div className="text-sm sm:text-base font-semibold text-white mt-1">4K Cinema Studio Feed</div>
            </div>
            <div className="p-4 bg-[#071731] border border-white/10 rounded">
              <div className="text-slate-400 text-[10px] uppercase">GEOGRAPHIC REACH</div>
              <div className="text-sm sm:text-base font-semibold text-[#FFFFFF] mt-1">ASEAN Regional Corridor</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Structured Editorial Service List */}
      <section className="py-20 sm:py-28 bg-[#071731] border-b border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="pb-10 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
                PRACTICE CAPABILITY MATRIX
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-medium text-white tracking-tight">
                Accredited Scope of Engagement
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              8 Core Operational Disciplines · Delivered from The City Tower Jakarta
            </p>
          </div>

          {/* Editorial Service Rows */}
          <div className="divide-y divide-white/10 pt-4">
            {coreCapabilities.map((service) => (
              <div
                key={service.id}
                className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start group hover:bg-[#0A1F44]/50 transition-colors -mx-4 px-4 sm:-mx-8 sm:px-8 rounded"
              >
                {/* Col 1: Category (3 cols) */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    {service.category}
                  </div>
                </div>

                {/* Col 2: Title & Narrative (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white tracking-tight group-hover:text-white transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Col 3: Key Deliverables (4 cols) */}
                <div className="lg:col-span-4 space-y-3 bg-[#0A1F44] p-5 rounded border border-white/10">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block pb-1 border-b border-white/10">
                    Accredited Deliverables
                  </span>
                  <ul className="space-y-2 text-xs font-sans text-slate-300">
                    {service.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-white/10 flex justify-end">
                    <button
                      onClick={handleInquiry}
                      className="text-xs font-mono font-medium text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
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

      {/* 3. Operational Rigor & Protocol Clearance (Editorial Protocol Ledger, NOT generic 01/02/03/04 cards) */}
      <section className="py-20 sm:py-28 bg-[#0A1F44] border-b border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
              OPERATIONAL FIDELITY
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-medium text-white tracking-tight">
              Execution Methodology &amp; Quality Governance
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              High-stakes corporate gatherings and sovereign assemblies tolerate zero operational deviation. Every mandate is managed under rigorous governance stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operationalProtocols.map((protocol, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-[#071731] border border-white/10 rounded space-y-4 hover:border-white/25 transition-colors"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-mono text-xs text-[#C8102E] uppercase font-semibold">
                    {protocol.discipline}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    {protocol.standard}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-white">
                    {protocol.focus}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {protocol.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Bottom Call to Action */}
      <section className="py-20 bg-[#050F22]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
            THE CITY TOWER, JAKARTA
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-medium text-white tracking-tight">
            Commission an Executive Mandate
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
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
