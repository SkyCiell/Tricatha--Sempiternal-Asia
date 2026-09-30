import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  X,
  ArrowRight,
  ShieldCheck,
  Building2,
  GraduationCap,
  Users
} from "lucide-react";
const heroPhoto = "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop";

export default function InternshipPage({ _navigateTo }) {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("IT / Software Development");
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

  const handleApplyClick = (trackTitle) => {
    const targetRole = trackTitle || selectedTrack;
    setFormData((prev) => ({ ...prev, role: targetRole }));
    setApplicationModalOpen(true);
    setSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const tracks = [
    {
      id: "it-software",
      title: "IT / Software Development",
      category: "Digital Infrastructure & Event Telemetry",
      overview:
        "Architect and maintain digital infrastructure, delegate registration portals, internal workflows, and telemetry tooling supporting flagship TSA operations.",
      immersion:
        "You will build secure, responsive web applications, attendee credential check-in scanners, and real-time electronic voting telemetry deployed across national plenaries and corporate AGMs.",
      responsibilities: [
        "Develop and optimize high-performance web applications using React & modern tooling",
        "Build secure data ingestion and registration pipelines for national summits",
        "Collaborate with technical leads to ensure zero-downtime event day operations"
      ],
      skills: ["React & JavaScript", "TailwindCSS", "REST APIs", "System Reliability"]
    },
    {
      id: "event-management",
      title: "Event Management & Protocol",
      category: "Plenary Logistics & Stage Command",
      overview:
        "Immerse in the operational execution of sovereign conferences, ministerial assemblies, corporate general meetings, and MICE expositions across Jakarta and regional corridors.",
      immersion:
        "Working directly with senior show callers and protocol directors, you will manage minute-by-minute run-of-show cues, bilateral signing setups, and diplomatic seating etiquette.",
      responsibilities: [
        "Assist in end-to-end venue logistics, seating protocols, and run-of-show cues",
        "Coordinate with tier-1 venue teams, catering protocols, and technical AV crews",
        "Support on-ground VVIP protocol, delegate liaison, and credentials administration"
      ],
      skills: ["Protocol Decorum", "Show Calling", "Field Logistics", "Attention to Detail"]
    },
    {
      id: "marketing-comm",
      title: "Marketing & Strategic Communications",
      category: "Executive Copywriting & Press Relations",
      overview:
        "Shape executive communications, editorial monographs, institutional press releases, and narrative strategies across sovereign and enterprise client engagements.",
      immersion:
        "You will draft executive communiqués, monitor regional media coverage, and coordinate press center logistics during ministerial plenaries and large commercial expos.",
      responsibilities: [
        "Draft executive briefings, event press communiqués, and corporate monographs",
        "Manage digital engagement strategies and monitor institutional media coverage",
        "Support media center operations during major plenaries and international forums"
      ],
      skills: ["Executive Copywriting", "Media Relations", "Editorial Curation", "Strategic Communications"]
    },
    {
      id: "visual-scenography",
      title: "Visual Scenography & Spatial Design",
      category: "Spatial Architecture & Exhibition Design",
      overview:
        "Conceptualize and render immersive spatial designs, stage scenography, digital projection surfaces, and exhibition pavilions for large-scale productions.",
      immersion:
        "Translate executive themes into 3D CAD spatial blueprints, lighting diagrams, and grand-scale plenary stage elevations that wow delegates and international dignitaries.",
      responsibilities: [
        "Create high-fidelity 3D spatial renders and floor plan architectural layouts",
        "Collaborate with AV and lighting engineers on kinetic stage integrations",
        "Produce presentation dossiers and visual mood boards for ministerial pitches"
      ],
      skills: ["3D Spatial Design / CAD", "Spatial Scenography", "Lighting Concepts", "Design Poise"]
    }
  ];

  const selectionSteps = [
    {
      num: "01",
      title: "Dossier Submission",
      desc: "Submit your academic transcript, resume, portfolio/code samples, and a concise statement of purpose explaining your interest in high-stakes event engineering."
    },
    {
      num: "02",
      title: "Technical & Protocol Review",
      desc: "Selected candidates complete a practical discipline assessment (e.g. spatial layout challenge, protocol scenario, or frontend engineering task)."
    },
    {
      num: "03",
      title: "Executive Panel Interview",
      desc: "Meet with TSA Practice Directors and lead advisors at our headquarters at The City Tower in Central Jakarta to evaluate cultural alignment and poise."
    },
    {
      num: "04",
      title: "Venue Induction & Deployment",
      desc: "Successful fellows receive protocol clearance, dedicated mentorship, and immediate on-ground deployment across active flagship summit venues."
    }
  ];

  return (
    <div className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">

      {/* 1. ARCHITECTURAL EDITORIAL HEADER */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8 border-b border-white/10">

          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
              <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
              <span>TSA Operational Fellowship · The City Tower, Jakarta</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.08]">
              Executive Fellowship &amp; <br />
              <span className="font-editorial italic font-normal text-slate-200">
                Operational Apprenticeship.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              An immersive professional development program designed for exceptional undergraduates and recent graduates seeking front-line mastery in sovereign event management, digital infrastructure, spatial scenography, and corporate communications.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-start lg:items-end justify-start lg:justify-end">
            <button
              onClick={() => handleApplyClick()}
              className="btn-editorial-red"
            >
              <span>Apply for Fellowship</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. PROGRAM ESSENCE & VISUAL STORYTELLING (Split Editorial) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Visual Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="editorial-image-frame rounded aspect-[4/5] bg-[#050F22] border border-white/15 overflow-hidden shadow-2xl relative">
              <img
                src={heroPhoto}
                alt="TSA Operational Control Center Immersion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/40 to-transparent opacity-90 pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-5 bg-[#0A1F44]/95 backdrop-blur-md border border-white/15 rounded text-white space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#C8102E] font-semibold tracking-wider uppercase text-[11px]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>REAL RESPONSIBILITY ON GROUND</span>
                </div>
                <p className="text-slate-300 font-sans text-xs leading-snug">
                  Fellows participate directly in command center telemetry, stage show calling, and executive protocol.
                </p>
              </div>
            </div>
          </div>

          {/* Right Narrative Breakdown (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C8102E]">
                Operational Doctrine
              </span>

              <h2 className="font-heading text-2xl sm:text-4xl lg:text-[42px] font-semibold text-white tracking-tight leading-tight">
                "Front-line event engineering, not backroom observations."
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                We believe exceptional professionals are forged through rigorous responsibility. At TSA, fellows do not observe from the sidelines—you will stand alongside our senior directors inside control booths, ministerial plenary suites, and broadcast control rooms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10 font-sans text-xs sm:text-sm">
                <div className="space-y-1.5">
                  <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                    The Environment
                  </div>
                  <p className="text-slate-300 leading-relaxed font-normal">
                    Headquartered at The City Tower in Central Jakarta with active deployment to Jakarta Convention Center, ICE BSD City, and premier international hotels.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                    The Expectations
                  </div>
                  <p className="text-slate-300 leading-relaxed font-normal">
                    Punctual protocol discipline, intellectual curiosity, technical poise under live pressure, and dedication to zero-error delivery.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Stats Pill */}
            <div className="p-5 bg-[#0A1F44] border border-white/10 rounded flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C8102E]" />
                <span className="text-slate-200">Duration: 3 – 6 Months</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#C8102E]" />
                <span className="text-slate-200">Location: Central Jakarta &amp; On-Site</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#C8102E]" />
                <span className="text-slate-200">Stipend: Competitive Fellowship</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. FOUR SPECIALIZED IMMERSION TRACKS (Structured Editorial Index) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C8102E]">
              Operational Tracks
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Specialized Fellowship Disciplines
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md font-normal leading-relaxed">
            Select a specialized operational track aligned with your academic background and professional aspirations.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-b border-white/10">
          {tracks.map((track, idx) => (
            <div
              key={track.id}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-white/2 transition-colors"
            >
              {/* Left Column (4 cols) */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#C8102E]">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400">
                    {track.category}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  {track.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-slate-300 font-normal leading-relaxed pt-1">
                  {track.overview}
                </p>

                <div className="pt-3">
                  <button
                    onClick={() => handleApplyClick(track.title)}
                    className="btn-editorial-red text-xs py-2 px-4 cursor-pointer"
                  >
                    <span>Apply for This Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Middle Column: Daily Immersion & Outputs (5 cols) */}
              <div className="lg:col-span-5 space-y-3 font-sans">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Field Immersion &amp; Key Responsibilities:
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {track.immersion}
                </p>

                <div className="space-y-2 pt-2">
                  {track.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Required Attributes (3 cols) */}
              <div className="lg:col-span-3 space-y-3 font-mono">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Core Attributes:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {track.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-[#0A1F44] border border-white/10 text-xs text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SELECTION FLOW & ADMISSIONS TIMELINE */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#C8102E]">
              Admissions Roadmap
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              4-Stage Evaluation &amp; Intake
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md font-normal leading-relaxed">
            Our selection process evaluates intellect, cultural alignment, technical foundation, and operational poise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {selectionSteps.map((step) => (
            <div key={step.num} className="space-y-3 pt-6 border-t-2 border-white/20 hover:border-[#C8102E] transition-colors">
              <div className="font-mono text-xs font-bold text-[#C8102E] tracking-wider">
                STAGE {step.num}
              </div>
              <h3 className="font-heading text-base font-semibold text-white tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CLOSING INQUIRY PANEL (Matching Events Benchmark) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-16">
        <div className="bg-[#0A1F44] text-white rounded p-10 sm:p-14 border border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C8102E] font-semibold uppercase">
                <span className="w-1.5 h-1.5 bg-[#C8102E] rounded-full" />
                <span>The City Tower, Jakarta · Admissions Committee</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight font-heading leading-tight">
                Ready to engineer Southeast Asia's landmark events?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Applications for the Q2 / Q3 2026 cohort are currently reviewed on a rolling basis. Submit your candidate dossier directly to our admissions directorate.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => handleApplyClick()}
                className="btn-editorial-red"
              >
                <span>Submit Candidate Dossier</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. APPLICATION MODAL */}
      {applicationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#071731]/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0A1F44] border border-white/20 rounded p-6 sm:p-10 shadow-2xl text-white max-h-[90vh] overflow-y-auto">

            <button
              onClick={() => setApplicationModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-[#C8102E] text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#C8102E]/20 text-[#C8102E] flex items-center justify-center mx-auto border border-[#C8102E]/40">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Dossier Successfully Transmitted
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your candidate file for the <strong>{formData.role}</strong> track has been logged into the TSA Admissions Registry. Our directors will review your materials within 5 business days.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setApplicationModalOpen(false)}
                    className="btn-editorial-red text-xs py-2 px-6"
                  >
                    Return to Fellowship Overview
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-1.5 border-b border-white/10 pb-5">
                  <div className="text-[10px] font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                    CANDIDATE INTAKE FORM · COHORT 2026
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                    Fellowship Candidate Dossier
                  </h3>
                  <p className="text-xs text-slate-300 font-sans">
                    Please provide accurate credentials. All materials are evaluated under strict confidentiality.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium block">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Raden Arya Wijaya"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium block">Official Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="e.g. arya@university.ac.id"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium block">University / Institution *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Universitas Indonesia, ITB, etc."
                        value={formData.university}
                        onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                        className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-medium block">Academic Major *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Computer Science, International Relations"
                        value={formData.major}
                        onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                        className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium block">Fellowship Operational Track *</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white focus:outline-none focus:border-[#C8102E]"
                    >
                      {tracks.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title} ({t.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium block">Portfolio / GitHub / LinkedIn URL</label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-medium block">Statement of Purpose / Key Competencies *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Briefly describe your practical experience, leadership, and why you wish to apprentice at TSA..."
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full btn-editorial-red py-3 text-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Candidate Dossier for Evaluation</span>
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
