import React from "react";
import CompanyIntro from "../components/CompanyIntro";
import Leadership from "../components/Leadership";
import { ArrowUpRight, ShieldCheck, Award, Globe, ArrowRight } from "lucide-react";

export default function AboutPage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  const corporatePillars = [
    {
      title: "Integritas Penuh",
      subtitle: "Uncompromising Integrity",
      desc: "Absolute transparency, strict ethical governance, and binding bilateral non-disclosure covenants across all government and enterprise mandates.",
      icon: ShieldCheck
    },
    {
      title: "Presisi Solusi",
      subtitle: "Solution Precision",
      desc: "Empirical planning, zero-latency technical run-downs, spatial engineering, and comprehensive risk mitigation with zero margin for error.",
      icon: Award
    },
    {
      title: "Jaringan Asia",
      subtitle: "Pan-Asian Network",
      desc: "Trusted institutional alliances, ministerial liaisons, and accredited venue access across Jakarta, Indonesia, and the ASEAN corridor.",
      icon: Globe
    }
  ];

  const businessUnits = [
    {
      code: "ENCHANTE",
      name: "ENCHANTE",
      category: "Haute Protocol & Spatial Scenography",
      desc: "Bilateral head-of-state banquets, ambassadorial galas, luxury brand unveilings, and precision diplomatic precedence seating.",
      anchorId: "unit-enchante"
    },
    {
      code: "DNA STUDIO",
      name: "DNA STUDIO",
      category: "Creative Broadcast & 4K Cinema Production Suite",
      desc: "Dedicated 4K multi-camera cinema facility at The City Tower producing leader dialogues, corporate podcasts, and syndicated live feeds.",
      anchorId: "unit-dna"
    },
    {
      code: "GWI",
      name: "GWI (Gema Waskita Interaktifa)",
      category: "Public Affairs & Civic Activations",
      desc: "Integrated public affairs, crisis communications, and large-scale civic cultural assemblies reaching millions of live and digital viewers.",
      anchorId: "unit-gwi"
    },
    {
      code: "GOADV",
      name: "GOADV",
      category: "Government Relations & Policy Intelligence",
      desc: "Cross-ministry liaison, regulatory compliance audits, and public-private partnership (PPP) frameworks.",
      anchorId: "unit-govadv"
    },
    {
      code: "TSA HOLDING",
      name: "Tricatha Sempiternal Asia",
      category: "Strategic Advisory & Holding Governance",
      desc: "Executive counsel for corporate chairpersons, sovereign wealth funds, and ministerial secretariats on investment covenants and governance.",
      anchorId: "unit-tsa"
    }
  ];

  return (
    <div className="pt-20 bg-[#071731] min-h-screen text-[#F1F5F9] font-sans selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. Page Header - Deep Navy Editorial Banner */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.08]">
                Institutional Charter &amp; <br />
                <span className="font-editorial italic font-normal text-slate-200">
                  Tricatha Sempiternal Asia.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
                Headquartered at The City Tower in Central Jakarta, PT Tricatha Sempiternal Asia unites high-level event organization, sovereign protocol, business conferences, trade exhibitions, and multimedia broadcast into an integrated operational practice.
              </p>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red shrink-0 self-start lg:self-auto"
            >
              <span>Inquire Practice Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Core Company Introduction & Statistics Narrative */}
      <CompanyIntro />

      {/* 3. Three Core Institutional Values (From Official Company Profile) */}
      <section className="py-20 sm:py-28 bg-[#071731] border-b border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="max-w-2xl mb-14 space-y-3">
            <h2 className="font-heading text-2xl sm:text-4xl font-medium text-white tracking-tight">
              Foundational Values of the Practice
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Every mandate undertaken by TSA adheres to three non-negotiable principles established since inception.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporatePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-[#0A1F44] border border-white/10 rounded space-y-4 hover:border-white/25 transition-colors"
                >
                  <div className="w-12 h-12 rounded bg-[#071731] border border-white/10 flex items-center justify-center text-[#C8102E]">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-heading text-xl font-medium text-white">
                      {pillar.title}
                    </h3>
                    <div className="font-mono text-xs text-slate-400">
                      {pillar.subtitle}
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Integrated Business Group Ecosystem */}
      <section className="py-20 sm:py-28 bg-[#0A1F44] border-b border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 pb-6 border-b border-white/10">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-heading text-2xl sm:text-4xl font-medium text-white tracking-tight">
                Specialized Practice Units
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Five dedicated operating entities collaborate under unified governance to deliver end-to-end event strategy, diplomatic affairs, and multimedia telecast.
              </p>
            </div>

            <button
              onClick={() => (navigateTo ? navigateTo("/business-group") : null)}
              className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Explore Full Business Group</span>
              <ArrowRight className="w-4 h-4 text-[#C8102E]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessUnits.map((unit) => (
              <div
                key={unit.code}
                className="p-6 sm:p-7 bg-[#071731] border border-white/10 rounded space-y-4 hover:border-white/25 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-medium text-white">
                    {unit.name}
                  </h3>
                  <div className="font-mono text-xs text-slate-400">
                    {unit.category}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                    {unit.desc}
                  </p>
                </div>

                <button
                  onClick={() => (navigateTo ? navigateTo("/business-group") : null)}
                  className="pt-3 border-t border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1 text-left cursor-pointer"
                >
                  <span>Practice Overview</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8102E]" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Executive Leadership Team */}
      <Leadership />

      {/* 6. Closing Consultation Strip */}
      <section className="py-20 bg-[#050F22] border-t border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 text-center space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-medium text-white tracking-tight">
            Consult with Our Executive Practice Directors
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Our directors coordinate directly with ministerial secretariats, diplomatic envoys, and enterprise leadership.
          </p>
          <div className="pt-2">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red inline-flex items-center gap-2"
            >
              <span>Schedule Direct Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
