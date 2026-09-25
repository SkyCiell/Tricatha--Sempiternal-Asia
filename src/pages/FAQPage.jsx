import React, { useState } from "react";
import FAQSection from "../components/FAQSection";
import { ArrowUpRight } from "lucide-react";

export default function FAQPage({ navigateTo }) {
  const handleInquiry = () => {
    if (navigateTo) navigateTo("/contact");
  };

  const additionalTopics = [
    {
      category: "SOVEREIGN CLEARANCE & PROTOCOL",
      items: [
        {
          q: "How does TSA handle bilateral head-of-state protocol and diplomatic precedence?",
          a: "Our protocol directors coordinate directly with Ministry of Foreign Affairs liaisons, state secretariats, and visiting embassy advance teams to establish accredited precedence orders, flag protocol, and security perimeters."
        },
        {
          q: "What confidential vetting procedures are applied to personnel?",
          a: "All on-site managers, technical directors, and protocol liaisons undergo rigorous institutional background checks and sign binding non-disclosure covenants (NDAs) enforceable under Indonesian and international commercial arbitration standards."
        }
      ]
    },
    {
      category: "EVENT OPERATIONS & STUDIO BROADCAST",
      items: [
        {
          q: "Does TSA supply turnkey audiovisual equipment or work with venue suppliers?",
          a: "TSA provides end-to-end proprietary equipment including 4K cinema broadcast switchers, Dante encrypted digital audio, spatial LED walls, and multi-camera jibs, guaranteeing zero reliance on unverified third parties."
        },
        {
          q: "Can DNA Studio broadcast directly into sovereign government telepresence networks?",
          a: "Yes. DNA Studio provides point-to-point hardware-encrypted video feeds compatible with sovereign ministry command centers, multilateral agencies, and encrypted satellite up-links."
        }
      ]
    },
    {
      category: "RETAINERS & COMMERCIAL MANDATES",
      items: [
        {
          q: "How are advisory and event management mandates structured commercially?",
          a: "Mandates are structured either on an institutional retainer model for ongoing public affairs and strategy, or as fixed turnkey project contracts for major summits, assemblies, and media productions."
        },
        {
          q: "What is the procedure to initiate an emergency or rapid-deployment mandate?",
          a: "For crisis communications, emergency policy responses, or accelerated summit staging (under 4 weeks), the Jakarta Executive Secretariat activates a 24-hour rapid response protocol upon receipt of official credential letters."
        }
      ]
    }
  ];

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <div className="pt-20 bg-[#071731] min-h-screen text-[#F1F5F9] font-sans selection:bg-[#C8102E] selection:text-white">
      {/* 1. Hero Banner - Deep Navy Editorial Banner */}
      <section className="relative py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.08]">
                Frequently Addressed <br />
                <span className="text-slate-300 font-normal">Protocol &amp; Operational Inquiries.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
                Clear institutional parameters regarding bilateral clearances, confidentiality covenants, ASEAN logistics, and turnkey production execution at The City Tower, Jakarta.
              </p>
            </div>

            <button
              onClick={handleInquiry}
              className="btn-editorial-red shrink-0 self-start lg:self-auto"
            >
              <span>Submit Specific Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Primary Executive FAQ Component */}
      <FAQSection />

      {/* 3. Deep-Dive Category Accordions */}
      <section className="py-20 sm:py-28 bg-[#0A1F44] border-b border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          <div className="pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
                SPECIALIZED DIRECTORY
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Categorized Operational Details
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              Explore specific parameters by practice area below.
            </p>
          </div>

          <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Category Tabs (4 cols) */}
            <div className="lg:col-span-4 space-y-2.5">
              {additionalTopics.map((topic, idx) => {
                const isSelected = activeCategoryIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategoryIndex(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded border font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-[#C8102E] border-[#C8102E] text-white shadow-md font-semibold"
                        : "bg-[#071731] border-white/10 text-slate-300 hover:text-white hover:border-white/30"
                    }`}
                  >
                    <span>{topic.category}</span>
                  </button>
                );
              })}
            </div>

            {/* Questions for Selected Category (8 cols) */}
            <div className="lg:col-span-8 bg-[#071731] border border-white/10 rounded p-8 sm:p-10 shadow-lg space-y-6">
              {additionalTopics[activeCategoryIndex].items.map((item, qIdx) => (
                <div key={qIdx} className="space-y-2 pb-6 last:pb-0 border-b last:border-b-0 border-white/10">
                  <h3 className="font-heading text-base sm:text-lg font-medium text-white leading-snug">
                    {item.q}
                  </h3>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing strip */}
      <section className="py-20 bg-[#050F22]">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
            THE CITY TOWER, JAKARTA
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-medium text-white tracking-tight">
            Have an Unlisted Protocol Requirement?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Our protocol officers and technical planners provide confidential feasibility audits for upcoming assemblies.
          </p>
          <div className="pt-2">
            <button
              onClick={handleInquiry}
              className="btn-editorial-red inline-flex items-center gap-2"
            >
              <span>Speak with Protocol Directorate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
