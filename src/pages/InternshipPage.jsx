import React, { useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  X,
  ArrowRight
} from "lucide-react";
import heroPhoto from "../assets/DSC08824.JPG";

export default function InternshipPage({ navigateTo }) {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    university: "",
    major: "",
    role: "IT / Software Development",
    portfolioUrl: "",
    statement: ""
  });

  const handleApplyClick = (roleTitle) => {
    if (roleTitle) {
      setFormData((prev) => ({ ...prev, role: roleTitle }));
    }
    setApplicationModalOpen(true);
    setSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const opportunities = [
    {
      id: "it-software",
      title: "IT & Software Engineering",
      badge: "Digital Infrastructure",
      overview:
        "Architect and maintain digital infrastructure, delegate registration portals, internal workflows, and telemetry tooling supporting flagship TSA operations.",
      responsibilities: [
        "Develop and optimize high-performance web applications with modern standards",
        "Build secure data ingestion and registration pipelines for national summits",
        "Collaborate with technical leads to ensure seamless event day operations"
      ],
      skills: ["React & JavaScript", "TailwindCSS", "REST APIs", "Database Architecture"]
    },
    {
      id: "event-management",
      title: "Event & Protocol Operations",
      badge: "Plenary Management",
      overview:
        "Immerse in the operational execution of sovereign conferences, ministerial assemblies, corporate general meetings, and MICE expositions across Jakarta and regional corridors.",
      responsibilities: [
        "Assist in end-to-end venue logistics, seating protocols, and run-of-show cues",
        "Coordinate with external contractors, hospitality partners, and technical AV crews",
        "Support on-ground VVIP protocol, delegate liaison, and credentials administration"
      ],
      skills: ["Protocol Decorums", "Vendor Coordination", "Show Calling", "Field Logistics"]
    },
    {
      id: "marketing-comm",
      title: "Communications & Public Affairs",
      badge: "Brand Strategy",
      overview:
        "Shape executive communications, editorial monographs, institutional press releases, and narrative strategies across sovereign and enterprise client engagements.",
      responsibilities: [
        "Draft executive briefings, event press communiqués, and corporate monographs",
        "Manage digital engagement strategies and monitor institutional media coverage",
        "Support media center operations during major plenaries and international forums"
      ],
      skills: ["Executive Copywriting", "Media Relations", "Editorial Curation", "Strategic Communications"]
    },
    {
      id: "creative-design",
      title: "Creative Direction & Spatial Media",
      badge: "Visual & Stage Scenography",
      overview:
        "Design visual identities, 3D stage scenography, digital screen key visuals, and premium printed collateral for national conventions and high-profile institutional clients.",
      responsibilities: [
        "Produce key visuals, stage mockups, and typographic design systems",
        "Design corporate monographs, executive dossiers, and digital screen presentations",
        "Collaborate closely with scenographers on lighting and environmental branding"
      ],
      skills: ["Graphic Systems", "Spatial Design", "Editorial Typography", "Motion & Visual Media"]
    },
    {
      id: "business-dev",
      title: "Strategic Advisory & Partnerships",
      badge: "Commercial Intelligence",
      overview:
        "Contribute to commercial intelligence, institutional partnership proposals, market feasibility studies, and strategic client engagement dossiers.",
      responsibilities: [
        "Conduct competitive analysis and sector research across Southeast Asian markets",
        "Assist directors in preparing comprehensive RFP submissions and pitch dossiers",
        "Maintain stakeholder telemetry and coordinate client introductory briefings"
      ],
      skills: ["Market Intelligence", "Executive Pitch Decks", "Commercial Analysis", "Stakeholder Relations"]
    }
  ];

  const whyJoinPillars = [
    {
      number: "01",
      title: "Real Project Ownership",
      desc: "Work on genuine ministerial assemblies, national symposiums, and high-impact corporate mandates with active stakeholders from day one."
    },
    {
      number: "02",
      title: "Professional Environment",
      desc: "Operate out of our executive headquarters at The City Tower in Central Jakarta, experiencing corporate rigor, institutional standards, and executive protocol."
    },
    {
      number: "03",
      title: "Cross-Team Immersion",
      desc: "Engage across advisory, technical, creative, and protocol divisions, gaining a holistic understanding of how large-scale corporate engagements are delivered."
    },
    {
      number: "04",
      title: "Dedicated Mentorship",
      desc: "Receive dedicated guidance from senior project managers and practice leads with structured performance feedback and professional development coaching."
    }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0A1F44] font-sans pt-16 sm:pt-20">
      
      {/* 1. HERO SECTION - Asymmetric Editorial Spread in Deep Navy with Floating Visual Frame */}
      <section className="bg-[#0A1F44] text-white py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
        
        {/* Subtle ambient light gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-widest text-[#C8102E] font-medium uppercase">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>Fellowship &amp; Talent Intake · 2026</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-medium tracking-tight text-white leading-[1.12] font-heading">
                Shape High-Stakes Engagements with <br />
                <span className="text-white/85 font-normal">Tricatha Sempiternal Asia</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
                An immersive fellowship for curious, disciplined talents ready to contribute directly to sovereign plenaries, corporate advisory mandates, and public affairs orchestration across Southeast Asia.
              </p>

              {/* Refined Metadata Strip */}
              <div className="pt-1 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>The City Tower, Jakarta</span>
                </div>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>3 - 6 Months Intake</span>
                </div>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Direct Partner Mentorship</span>
                </div>
              </div>

              {/* Asymmetric Call-to-Action Group */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => handleApplyClick("General Internship Application")}
                  className="px-7 py-3.5 bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.99]"
                >
                  <span>Apply for Fellowship</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#opportunities"
                  className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-medium uppercase tracking-wider rounded-md transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span>Explore 5 Practice Areas</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image Column (5 cols) - Editorial Framing */}
            <div className="lg:col-span-5 relative">
              <div className="editorial-image-frame relative rounded-lg border border-white/15 shadow-2xl aspect-[4/3] sm:aspect-[16/11] bg-slate-900">
                <img
                  src={heroPhoto}
                  alt="TSA Executive Plenary Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-[#0A1F44]/25 to-transparent" />
                
                {/* Floating Architectural Coordinate Badge */}
                <div className="absolute top-4 right-4 bg-[#0A1F44]/80 backdrop-blur-sm border border-white/15 px-3 py-1.5 rounded-sm text-[10px] font-mono text-slate-300">
                  TSA / 06°12'S · JAKARTA
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="font-mono text-[#C8102E] uppercase tracking-wider block text-[10px] font-semibold">
                    Jakarta Headquarters · Plenary Room
                  </span>
                  <span className="text-slate-200 font-sans text-xs mt-0.5 block font-normal leading-relaxed">
                    Real-world immersion in executive summits and multilateral forums.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTERNSHIP OPPORTUNITIES - Curated Monograph Directory Layout */}
      <section id="opportunities" className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 py-20 sm:py-28">
        
        {/* Section Header with Generous Whitespace */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-4xl font-semibold text-[#0A1F44] tracking-tight font-heading">
              Opportunities &amp; Practice Areas
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              We open fellowship positions across five core operational disciplines. Each role is designed around active contribution, technical autonomy, and direct collaboration with senior practice leads.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 shrink-0">
            <span>5 Active Disciplines Available</span>
          </div>
        </div>

        {/* Editorial Rows (Magazine / Monograph Style with Refined Hover Micro-Interactions) */}
        <div className="divide-y divide-slate-200">
          {opportunities.map((opp, idx) => (
            <div
              key={opp.id}
              className="py-12 group transition-editorial hover:bg-[#F5F6F8]/70 -mx-4 px-4 sm:-mx-8 sm:px-8 rounded-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left 4 Cols: Number, Role Title & Meta */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#C8102E] font-medium">0{idx + 1} / 05</span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded-sm">
                      {opp.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#0A1F44] group-hover:text-[#C8102E] transition-colors duration-200 font-heading leading-snug">
                    {opp.title}
                  </h3>
                  
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {opp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-slate-600 bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center 6 Cols: Narrative Overview & Responsibilities */}
                <div className="lg:col-span-6 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {opp.overview}
                  </p>

                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1 font-medium">
                      Key Contribution Areas:
                    </span>
                    {opp.responsibilities.map((r, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full mt-1.5 shrink-0" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 2 Cols: Direct Application Action */}
                <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                  <button
                    onClick={() => handleApplyClick(opp.title)}
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#0A1F44] hover:text-[#C8102E] transition-editorial cursor-pointer py-2 px-4 rounded-md border border-slate-300 hover:border-[#C8102E] bg-white group-hover:bg-transparent shadow-2xs hover:shadow-xs"
                  >
                    <span>Apply Role</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. WHY JOIN US - Navy Editorial Spread with Left Manifesto & 2x2 Pillars */}
      <section className="bg-[#0A1F44] text-white py-20 sm:py-28 border-t border-b border-white/10">
        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 4 Cols: Manifesto Statement */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight font-heading leading-tight">
                Why Join Tricatha Sempiternal Asia
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed pt-2">
                We believe in autonomous capability, rigorous protocol preparation, and treating interns as genuine operational colleagues from day one.
              </p>
            </div>

            {/* Right 8 Cols: 2x2 Spacious Pillar Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {whyJoinPillars.map((pillar, i) => (
                <div key={i} className="space-y-3 pt-6 border-t border-white/15">
                  <div className="font-mono text-xs text-[#C8102E] font-medium tracking-wider">
                    {pillar.number} / STANDARD
                  </div>
                  <h3 className="text-lg font-semibold text-white font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. CLOSING APPLICATION SECTION - Light Neutral #F5F6F8 with Clean Breathing Room */}
      <section className="bg-[#F5F6F8] py-20 sm:py-28">
        <div className="max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C8102E] font-semibold">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>Rolling Intake 2026</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-semibold text-[#0A1F44] tracking-tight font-heading">
              Ready to start your fellowship?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Applications are reviewed on a rolling basis across all five disciplines. Submit your academic background, portfolio, and a brief statement of purpose.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleApplyClick("General Internship Application")}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-editorial cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02]"
              >
                <span>Apply for Internship</span>
              </button>

              <button
                onClick={() => {
                  if (navigateTo) navigateTo("/contact");
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-[#0A1F44] border border-slate-300 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
              >
                <span>Contact Secretariat</span>
              </button>
            </div>

            <div className="pt-4 text-xs text-slate-400 font-mono">
              The City Tower, Jl. M.H. Thamrin No. 81, Jakarta Pusat
            </div>

          </div>
        </div>
      </section>


      {/* 5. INTERACTIVE APPLICATION MODAL */}
      {applicationModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A1F44]/75 backdrop-blur-xs"
          onClick={() => setApplicationModalOpen(false)}
        >
          <div
            className="bg-white rounded-md max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setApplicationModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-[#C8102E] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold font-heading text-[#0A1F44]">
                  Application Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto font-sans leading-relaxed">
                  Thank you for submitting your dossier to Tricatha Sempiternal Asia. Our Talent Secretariat will review your credentials and contact shortlisted candidates directly.
                </p>
                <button
                  onClick={() => setApplicationModalOpen(false)}
                  className="mt-4 px-6 py-2.5 bg-[#0A1F44] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#C8102E] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#C8102E] font-semibold block mb-1">
                    TSA Fellowship Application
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold font-heading text-[#0A1F44] tracking-tight">
                    Apply for Internship
                  </h3>
                  <p className="text-xs text-slate-600 font-sans mt-1">
                    Please provide your academic background and preferred discipline.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-medium uppercase text-slate-700 mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Raden Arya Pratama"
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:border-[#0A1F44]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-medium uppercase text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@university.ac.id"
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:border-[#0A1F44]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-medium uppercase text-slate-700 mb-1">
                        University / Institute *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.university}
                        onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                        placeholder="e.g. Universitas Indonesia"
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:border-[#0A1F44]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium uppercase text-slate-700 mb-1">
                      Preferred Internship Discipline *
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:border-[#0A1F44] bg-white cursor-pointer"
                    >
                      <option value="IT & Software Engineering">IT & Software Engineering</option>
                      <option value="Event & Protocol Operations">Event & Protocol Operations</option>
                      <option value="Communications & Public Affairs">Communications & Public Affairs</option>
                      <option value="Creative Direction & Spatial Media">Creative Direction & Spatial Media</option>
                      <option value="Strategic Advisory & Partnerships">Strategic Advisory & Partnerships</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium uppercase text-slate-700 mb-1">
                      Portfolio / GitHub / LinkedIn URL
                    </label>
                    <input
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      placeholder="https://..."
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:border-[#0A1F44]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium uppercase text-slate-700 mb-1">
                      Brief Statement of Purpose
                    </label>
                    <textarea
                      rows={3}
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      placeholder="Summarize your interest in Tricatha Sempiternal Asia and what you hope to achieve..."
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-md focus:outline-none focus:border-[#0A1F44] resize-none"
                    />
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
                    <span className="text-[10px] text-slate-500 font-mono">
                      Confidential submission to TSA Jakarta HQ.
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#C8102E] hover:bg-[#A50D25] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>Submit Application</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}


