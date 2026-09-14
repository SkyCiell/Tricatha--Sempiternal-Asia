import React, { useState } from "react";
import Ecosystem from "../components/Ecosystem";
import {
  ShieldCheck,
  Radio,
  FileCheck2,
  Sparkles,
  Video,
  ArrowUpRight,
  CheckCircle,
  ChevronRight
} from "lucide-react";

export default function BrandsPage({ navigateTo }) {
  const [selectedBrand, setSelectedBrand] = useState(0);

  const businessGroups = [
    {
      code: "TSA",
      name: "Tricatha Sempiternal Asia",
      role: "Strategic Advisory & Corporate Management",
      icon: ShieldCheck,
      headline: "High-level corporate strategy, portfolio restructuring, executive risk advisory, and Asia-Pacific investment facilitation.",
      services: [
        "Executive Strategy & Sovereign Briefings",
        "M&A Advisory & Market Feasibility",
        "Portfolio Restructuring & Governance",
        "Cross-Border Investment Facilitation"
      ],
      impact: "18+ Sovereign Mandates · $450M+ Accords"
    },
    {
      code: "GWI",
      name: "Gema Waskita Interaktifa",
      role: "Communications & Public Engagement",
      icon: Radio,
      headline: "Integrated strategic communications, corporate crisis reputation management, media relations, and national-scale public affairs orchestration.",
      services: [
        "Strategic Public Affairs Orchestration",
        "Corporate Crisis & Reputation Defense",
        "Institutional Media Relations",
        "Digital Narrative Amplification"
      ],
      impact: "45K+ Live Attendees · 1.2M Viewers"
    },
    {
      code: "GOVADV",
      name: "GOVADV Policy Intelligence",
      role: "Government Relations & Regulatory Policy",
      icon: FileCheck2,
      headline: "Public policy advocacy, cross-ministry regulatory compliance, public-private partnership (PPP) facilitation, and bilateral business diplomacy.",
      services: [
        "Regulatory Compliance & Horizon Audits",
        "Public-Private Sector Alliance Building",
        "Cross-Ministry Liaison & Policy Advisory",
        "Bilateral Business Diplomacy"
      ],
      impact: "14 Partner Ministries · Zero-Downtime Approvals"
    },
    {
      code: "Enchanteé",
      name: "Enchanteé Experiential",
      role: "High-Level Protocol & Experiential Events",
      icon: Sparkles,
      headline: "Management of bilateral head-of-state conferences, diplomatic galas, executive corporate summits, and exclusive plenary event protocol.",
      services: [
        "Bilateral Head-of-State Conferences",
        "Diplomatic Gala & State Banquets",
        "Experiential Spatial Scenography",
        "Exclusive Protocol Logistics"
      ],
      impact: "12 Head-of-State Diplomatic Dinners Executed"
    },
    {
      code: "DNA STUDIO",
      name: "DNA STUDIO Broadcast",
      role: "Digital Media Production & Creative Broadcast",
      icon: Video,
      headline: "Turnkey 4K multimedia broadcast facility, cinematic corporate video production, interactive live streaming, and modern visual campaign amplification.",
      services: [
        "Turnkey 4K Cinema Studio Broadcast",
        "Cinematic Executive Video Profiling",
        "Interactive High-Security Live Streams",
        "Syndicated Digital Distribution"
      ],
      impact: "2.4M+ Views Across Broadcast Syndicates"
    }
  ];

  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  const activeBrand = businessGroups[selectedBrand];

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

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-white leading-[1.14]">
                Business Group &amp; <br />
                <span className="text-white/85 font-normal">Specialized Operational Units.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Five specialized operational entities operating under unified governance at The City Tower, Jakarta. Together, they form an uninterrupted value chain spanning sovereign counsel, public affairs, experiential protocol, and multimedia broadcast.
              </p>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial px-7 py-3.5 bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-editorial flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md shrink-0 self-start lg:self-auto"
            >
              <span>Inquire Group Mandate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Business Groups Explorer - Light Neutral #F5F6F8 */}
      <section className="py-20 sm:py-28 bg-[#F5F6F8] border-b border-slate-200/60">
        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 5 Cols: Brand Selector List */}
            <div className="lg:col-span-5 space-y-3">
              <div className="font-mono text-xs text-slate-400 uppercase tracking-widest pb-3 border-b border-slate-200">
                OPERATIONAL PRACTICE UNITS
              </div>

              {businessGroups.map((group, index) => {
                const isSelected = selectedBrand === index;
                const IconComp = group.icon;

                return (
                  <button
                    key={group.code}
                    onClick={() => setSelectedBrand(index)}
                    className={`w-full text-left p-5 rounded-lg border transition-editorial cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? "bg-[#0A1F44] border-[#0A1F44] text-white shadow-md"
                        : "bg-[#FFFFFF] border-slate-200/80 hover:border-[#C8102E]/60 text-slate-700 shadow-2xs"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 border ${
                          isSelected ? "bg-white/10 border-white/20 text-[#C8102E]" : "bg-[#F5F6F8] border-slate-200 text-slate-500"
                        }`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className={`font-heading font-medium text-sm sm:text-base ${isSelected ? "text-white" : "text-[#0A1F44]"}`}>
                          {group.name}
                        </div>
                        <div className={`font-mono text-[11px] ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                          {group.role}
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-[#C8102E] translate-x-1" : "text-slate-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right 7 Cols: Detailed Brand Dossier */}
            <div className="lg:col-span-7 bg-[#FFFFFF] border border-slate-200/80 rounded-lg p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-md bg-[#F5F6F8] border border-slate-200 flex items-center justify-center text-[#C8102E]">
                      <activeBrand.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#0A1F44]">
                        {activeBrand.name}
                      </h3>
                      <span className="font-mono text-xs text-slate-500">
                        {activeBrand.role}
                      </span>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block px-3 py-1 bg-[#F5F6F8] border border-slate-200 rounded-sm font-mono text-[11px] text-slate-500">
                    Jakarta HQ Practice
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                    PRACTICE CHARTER
                  </span>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {activeBrand.headline}
                  </p>
                </div>

                {/* Scope of Services */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                    ACCREDITED SCOPE OF SERVICES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeBrand.services.map((srv, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Impact */}
                <div className="p-4 bg-[#F5F6F8] border border-slate-200/80 rounded-md flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-400 uppercase">VERIFIED BENCHMARK:</span>
                  <span className="font-medium text-[#0A1F44]">{activeBrand.impact}</span>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleInquiry}
                    className="btn-editorial px-6 py-3 bg-[#0A1F44] hover:bg-[#C8102E] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-editorial flex items-center gap-2 cursor-pointer shadow-xs hover:shadow-md"
                  >
                    <span>Engage Practice Directly</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Integrated Architecture Flow */}
      <Ecosystem />

    </div>
  );
}
