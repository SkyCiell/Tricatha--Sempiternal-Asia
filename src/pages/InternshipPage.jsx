import React, { useState, useEffect } from "react";
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

export default function InternshipPage({ _navigateTo }) {
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

  useEffect(() => {
    if (!applicationModalOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (window.__lenis) {
      window.__lenis.stop();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setApplicationModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      if (window.__lenis) {
        window.__lenis.start();
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [applicationModalOpen]);

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
      title: "IT / Software Development",
      badge: "Digital Infrastructure",
      overview:
        "Architect and maintain digital infrastructure, delegate registration portals, internal workflows, and telemetry tooling supporting flagship TSA operations.",
      responsibilities: [
        "Develop and optimize high-performance web applications with modern standards",
        "Build secure data ingestion and registration pipelines for national summits",
        "Collaborate with technical leads to ensure zero-downtime event day operations"
      ],
      skills: ["React & JavaScript", "TailwindCSS", "REST APIs", "Database Architecture"]
    },
    {
      id: "event-management",
      title: "Event Management & Protocol",
      badge: "Plenary Management",
      overview:
        "Immerse in the operational execution of sovereign conferences, ministerial assemblies, corporate general meetings, and MICE expositions across Jakarta and regional corridors.",
      responsibilities: [
        "Assist in end-to-end venue logistics, seating protocols, and run-of-show cues",
        "Coordinate with external contractors, hospitality partners, and technical AV crews",
        "Support on-ground VVIP protocol, delegate liaison, and credentials administration"
      ],
      skills: ["Protocol Decorum", "Vendor Coordination", "Show Calling", "Field Logistics"]
    },
    {
      id: "marketing-comm",
      title: "Marketing & Communication",
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
      title: "Creative / Design",
      badge: "Visual & Stage Scenography",
      overview:
        "Design visual identities, 3D stage scenography, digital screen key visuals, and premium printed collateral for national conventions and high-profile institutional clients.",
      responsibilities: [
        "Produce key visuals, stage mockups, and typographic design systems",
        "Design corporate monographs, executive dossiers, and digital screen presentations",
        "Collaborate closely with scenographers on lighting and environmental branding"
      ],
      skills: ["Graphic Systems", "Spatial Design", "Editorial Typography", "Motion Media"]
    },
    {
      id: "business-dev",
      title: "Business Development",
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
      title: "Professional Working Environment",
      desc: "Operate out of our executive headquarters at The City Tower in Central Jakarta, experiencing corporate rigor, institutional standards, and executive protocol."
    },
    {
      number: "03",
      title: "Collaboration Across Teams",
      desc: "Engage across advisory, technical, creative, and protocol divisions, gaining a holistic understanding of how large-scale corporate engagements are delivered."
    },
    {
      number: "04",
      title: "Mentorship & Learning Opportunities",
      desc: "Receive dedicated guidance from senior project managers and practice leads with structured performance feedback and professional development coaching."
    }
  ];

  return (
    <div className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 selection:bg-[#C8102E] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#0A1F44] text-white py-20 sm:py-28 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/10 border border-white/15 rounded text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>FELLOWSHIP &amp; TALENT INTAKE · 2026</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-white leading-[1.1] font-heading">
                Internship at <br />
                <span className="text-slate-300 font-normal">Tricatha Sempiternal Asia</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
                An immersive fellowship for curious, disciplined talents ready to contribute directly to sovereign plenaries, corporate advisory mandates, and public affairs orchestration across Southeast Asia.
              </p>

              {/* Metadata Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>The City Tower, Jakarta</span>
                </div>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>3 to 6 Months Intake</span>
                </div>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>Direct Partner Mentorship</span>
                </div>
              </div>

              {/* Call-to-Action Group */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => handleApplyClick("General Internship Application")}
                  className="btn-editorial-red"
                >
                  <span>Apply for Internship</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#opportunities"
                  className="btn-editorial-outline text-white border-white/25 hover:bg-white/10 hover:border-white hover:text-white"
                >
                  <span>Explore Opportunities</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="editorial-image-frame rounded border border-white/15 shadow-xl aspect-[4/3] sm:aspect-[16/11] bg-[#050F22] overflow-hidden">
                <img
                  src={heroPhoto}
                  alt="TSA Executive Plenary Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-[#0A1F44]/30 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="font-mono text-[#C8102E] uppercase tracking-wider block text-[10px] font-semibold">
                    Jakarta Headquarters · Plenary Room
                  </span>
                  <span className="text-slate-300 font-sans text-xs mt-0.5 block font-normal leading-relaxed">
                    Real-world immersion in executive summits and multilateral forums.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTERNSHIP OPPORTUNITIES */}
      <section id="opportunities" className="max-w-[1520px] mx-auto px-4 sm:px-8 py-20 sm:py-28">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
              FELLOWSHIP STREAMS
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight font-heading">
              Opportunities &amp; Practice Areas
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              We open fellowship positions across five core operational disciplines. Each role is designed around active contribution, technical autonomy, and direct collaboration with senior practice leads.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 shrink-0">
            <span>5 Active Opportunities Available</span>
          </div>
        </div>

        {/* Editorial Rows */}
        <div className="divide-y divide-white/10">
          {opportunities.map((opp) => (
            <div
              key={opp.id}
              className="py-12 group hover:bg-[#0A1F44]/50 -mx-4 px-4 sm:-mx-8 sm:px-8 rounded transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left 4 Cols: Number, Role Title & Meta */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 bg-[#0A1F44] border border-white/10 px-2.5 py-0.5 rounded">
                      {opp.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-white transition-colors duration-200 font-heading leading-snug">
                    {opp.title}
                  </h3>
                  
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {opp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono text-slate-300 bg-[#0A1F44] border border-white/10 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center 6 Cols: Narrative Overview & Responsibilities */}
                <div className="lg:col-span-6 space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {opp.overview}
                  </p>

                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1 font-medium">
                      Key Contribution Areas:
                    </span>
                    {opp.responsibilities.map((r, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 2 Cols: Direct Application Action */}
                <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                  <button
                    onClick={() => handleApplyClick(opp.title)}
                    className="btn-editorial-red text-xs px-4 py-2.5"
                  >
                    <span>Apply Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. WHY JOIN US - Navy Editorial Spread */}
      <section className="bg-[#0A1F44] text-white py-20 sm:py-28 border-t border-b border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 4 Cols: Manifesto */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
                THE TSA EXPERIENCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight font-heading leading-tight">
                Why Intern at Tricatha Sempiternal Asia
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed pt-2">
                We believe in autonomous capability, professional working standards, and treating fellows as genuine operational colleagues from day one.
              </p>
            </div>

            {/* Right 8 Cols: 2x2 Pillar Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {whyJoinPillars.map((pillar, i) => (
                <div key={i} className="space-y-3 pt-6 border-t border-white/15">
                  <div className="font-mono text-xs text-[#C8102E] font-bold tracking-wider">
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

      {/* 4. CLOSING APPLICATION INVITATION */}
      <section className="bg-[#050F22] py-20 sm:py-28 border-t border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C8102E] font-semibold">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>Rolling Intake · Central Jakarta</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-semibold text-white font-heading tracking-tight">
              Ready to Shape High-Stakes Engagements?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Applications are reviewed on a rolling basis. Please submit your academic background, area of interest, and relevant portfolio materials.
            </p>

            <div className="pt-2">
              <button
                onClick={() => handleApplyClick("General Internship Application")}
                className="btn-editorial-red"
              >
                <span>Apply for Internship</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. APPLICATION MODAL */}
      {applicationModalOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050F22]/90 backdrop-blur-md overscroll-contain"
          onClick={() => setApplicationModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            data-lenis-prevent
            className="relative max-w-xl w-full bg-[#0A1F44] text-[#F1F5F9] rounded shadow-2xl border border-white/15 p-6 sm:p-8 overflow-y-auto max-h-[90vh] overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setApplicationModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#071731] border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white font-heading">
                  Application Received
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for your interest in joining Tricatha Sempiternal Asia. Our Talent Secretariat will review your dossier and contact shortlisted candidates.
                </p>
                <button
                  onClick={() => setApplicationModalOpen(false)}
                  className="btn-editorial-red mt-2 text-xs"
                >
                  Close Confirmation
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <span className="font-mono text-[11px] text-[#C8102E] uppercase tracking-wider block font-semibold">
                    FELLOWSHIP APPLICATION DOSSIER
                  </span>
                  <h3 className="text-xl font-semibold text-white font-heading mt-0.5">
                    {formData.role}
                  </h3>
                </div>

                <div className="space-y-3 pt-2 text-xs">
                  <div>
                    <label className="font-medium text-slate-300 block mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Raden Arya Pratama"
                      className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <div>
                    <label className="font-medium text-slate-300 block mb-1">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. arya.pratama@university.ac.id"
                      className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-medium text-slate-300 block mb-1">
                        University / Institution *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.university}
                        onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                        placeholder="e.g. Universitas Indonesia"
                        className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>
                    <div>
                      <label className="font-medium text-slate-300 block mb-1">
                        Major / Field of Study *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.major}
                        onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                        placeholder="e.g. Computer Science / Communications"
                        className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-medium text-slate-300 block mb-1">
                      Practice Stream *
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-white focus:outline-none focus:border-[#C8102E]"
                    >
                      <option className="bg-[#071731] text-white">IT / Software Development</option>
                      <option className="bg-[#071731] text-white">Event Management &amp; Protocol</option>
                      <option className="bg-[#071731] text-white">Marketing &amp; Communication</option>
                      <option className="bg-[#071731] text-white">Creative / Design</option>
                      <option className="bg-[#071731] text-white">Business Development</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-medium text-slate-300 block mb-1">
                      Portfolio / GitHub / LinkedIn URL
                    </label>
                    <input
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      placeholder="https://"
                      className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <div>
                    <label className="font-medium text-slate-300 block mb-1">
                      Statement of Motivation (Short)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      placeholder="Share what interests you about high-stakes corporate and sovereign engagements..."
                      className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setApplicationModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-editorial-red text-xs py-2 px-5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Application</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
