import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  X,
  ArrowRight,
  Clock,
  MapPin,
  ShieldCheck,
  Compass
} from "lucide-react";
import backgroundTSA from "../assets/Background_TSA.jpg";

const heroPhoto = "/events/thales-kadin-innovation-day/photo-1.jpg";

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
    setSelectedTrack(targetRole);
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
      photo: "/final-photos/brands/technology/TSAIT.jpeg",
      photoCaption: "Digital infrastructure and live attendee telemetry systems",
      overview:
        "Architect and maintain digital infrastructure, delegate registration portals, internal workflows, and telemetry tooling supporting flagship TSA operations.",
      immersion:
        "You will build secure, responsive web applications, attendee credential check-in scanners, and real-time electronic voting telemetry deployed across national plenaries and corporate AGMs.",
      responsibilities: [
        "Develop and optimize high-performance web applications using React & modern tooling",
        "Build secure data ingestion and registration pipelines for national summits",
        "Collaborate with technical leads to ensure zero-downtime event day operations"
      ],
      skills: ["React & JavaScript", "REST APIs", "System Reliability", "UI Architecture"]
    },
    {
      id: "event-management",
      title: "Event Management & Protocol",
      category: "Plenary Logistics & Stage Command",
      photo: "/events/thales-kadin-innovation-day/photo-4.jpg",
      photoCaption: "Minute-by-minute show calling and bilateral diplomatic seating etiquette",
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
      photo: "/brands/dna-studio/dna-podcast.jpg",
      photoCaption: "Executive communiqués, media center coordination, and broadcast press feeds",
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
      photo: "/events/illuminate-asia-exclusive-evening/cover.jpg",
      photoCaption: "3D CAD spatial blueprints, grand-scale stage elevations, and lighting concepts",
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
      phase: "01",
      title: "Dossier Submission",
      timeline: "Initial Screening · Rolling Review",
      desc: "Submit your academic transcript, resume, portfolio/code samples, and a concise statement of purpose explaining your interest in high-stakes event engineering."
    },
    {
      phase: "02",
      title: "Technical & Protocol Review",
      timeline: "Practical Challenge · 48 Hours",
      desc: "Selected candidates complete a practical discipline assessment (e.g. spatial layout challenge, protocol scenario, or frontend engineering task)."
    },
    {
      phase: "03",
      title: "Executive Panel Interview",
      timeline: "Sudirman Park HQ · Executive Suite",
      desc: "Meet with TSA Practice Directors and lead advisors at our headquarters at Sudirman Park in Central Jakarta to evaluate cultural alignment and poise."
    },
    {
      phase: "04",
      title: "Venue Induction & Deployment",
      timeline: "Protocol Clearance · Live Plenaries",
      desc: "Successful fellows receive protocol clearance, dedicated mentorship, and immediate on-ground deployment across active flagship summit venues."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#071731] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white">

      {/* 1. EDITORIAL CORPORATE HERO SECTION */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-[#E2E8F0]">
        
        {/* Eyebrow & Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-10 sm:pb-14 border-b border-[#E2E8F0]">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#C8102E] font-semibold">
              <span>Academic Talent &amp; Vocational Intake · PT Tricatha Sempiternal Asia</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[58px] font-bold text-[#071731] tracking-tight leading-[1.08]">
              Executive Fellowship &amp; <br />
              <span className="font-editorial italic font-normal text-slate-600">
                Operational Apprenticeship.
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-lg font-normal leading-relaxed max-w-2xl">
              An immersive professional development program designed for exceptional undergraduates and recent graduates seeking front-line mastery in sovereign event management, digital infrastructure, spatial scenography, and corporate communications.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-3">
            <button
              onClick={() => handleApplyClick()}
              className="btn-editorial-red text-xs sm:text-sm py-3.5 px-7 cursor-pointer inline-flex items-center gap-2 min-h-[46px]"
            >
              <span>Submit Candidate Dossier</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-[#64748B]">
              Rolling Admissions · Next Cohort Active
            </span>
          </div>
        </div>

        {/* Hero Photographic & Operational Tenets Feature */}
        <div className="pt-10 sm:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Authentic Event Operations Photo Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#071731] aspect-[16/10] sm:aspect-[16/11] shadow-sm group h-full">
              <img
                src={heroPhoto}
                alt="TSA Operational Control Center Immersion"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-[11px] sm:text-xs font-mono text-slate-200 bg-[#071731]/90 px-3.5 py-2 rounded border border-white/10 flex items-center justify-between">
                <span>TSA Sovereign Stage &amp; Assembly Operations</span>
                <span className="text-slate-300">Front-Line Immersion</span>
              </div>
            </div>
          </div>

          {/* Operational Tenets Dossier Column */}
          <div className="lg:col-span-5 bg-white rounded-lg sm:rounded-xl border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between shadow-2xs space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C8102E] font-semibold block">
                  Core Fellowship Creed
                </span>
                <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#071731] tracking-tight leading-snug">
                  "Front-line event engineering, <br />
                  <span className="font-editorial italic font-normal text-slate-500">
                    not backroom observations."
                  </span>
                </h2>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
                We believe exceptional professionals are forged through rigorous responsibility. At TSA, fellows do not observe from the sidelines: you will stand alongside our senior directors inside control booths, ministerial plenary suites, and broadcast control rooms across ICE BSD City, JCC Senayan, and Sudirman Park.
              </p>
            </div>

            {/* Operating Parameters Grid */}
            <div className="space-y-3 pt-3 border-t border-[#E2E8F0] font-mono text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-[#64748B] uppercase tracking-wider">THE ENVIRONMENT</div>
                  <div className="font-semibold text-[#071731] mt-0.5">Sudirman Park HQ · JCC Senayan · ICE BSD City</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-[#64748B] uppercase tracking-wider">THE EXPECTATION</div>
                  <div className="font-semibold text-[#071731] mt-0.5">Protocol decorum · live pressure poise · zero margin for error</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-[#64748B] uppercase tracking-wider">IMMERSION TERM</div>
                  <div className="font-semibold text-[#071731] mt-0.5">3 – 6 Months Full Immersion</div>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={() => handleApplyClick()}
                className="w-full btn-editorial-navy text-xs py-3 px-5 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Initiate Fellowship Application</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* 2. FOUR SPECIALIZED FELLOWSHIP DISCIPLINES (Distinct Editorial Cards) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-[#E2E8F0]">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#E2E8F0]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono text-[#C8102E] uppercase tracking-wider font-semibold block">
              Curricular Architecture
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#071731] tracking-tight">
              Specialized Fellowship Disciplines.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            Select a specialized operational track aligned with your academic background and professional aspirations. Each discipline is led directly by TSA practice directors.
          </p>
        </div>

        {/* 2x2 Distinct Editorial Cards */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {tracks.map((track, idx) => (
            <div
              key={track.id}
              className="bg-white rounded-lg sm:rounded-xl border border-[#E2E8F0] overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow duration-300 group"
            >
              <div>
                {/* Discipline Photography Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#071731]">
                  <img
                    src={track.photo}
                    alt={track.photoCaption}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold text-white bg-[#071731]/90 px-3 py-1 rounded border border-white/10 shadow-xs">
                    0{idx + 1} · {track.category}
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-[10px] sm:text-[11px] font-mono text-slate-300 truncate">
                    {track.photoCaption}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#071731] tracking-tight">
                      {track.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {track.overview}
                    </p>
                  </div>

                  {/* Field Immersion Box */}
                  <div className="p-4 bg-[#FAF9F6] rounded-md border border-[#E2E8F0] space-y-1.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#C8102E] font-semibold">
                      Field Immersion Scope:
                    </div>
                    <p className="text-xs text-[#334155] leading-relaxed font-normal">
                      {track.immersion}
                    </p>
                  </div>

                  {/* Key Responsibilities */}
                  <div className="space-y-2.5 pt-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] font-semibold">
                      Primary Operating Responsibilities:
                    </div>
                    <div className="space-y-2">
                      {track.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                          <span className="leading-snug">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Attributes */}
                  <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] font-semibold">
                      Core Discipline Attributes:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {track.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded bg-[#FAF9F6] border border-[#E2E8F0] text-[11px] font-mono text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 sm:px-8 py-4 bg-[#FAF9F6] border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#64748B]">
                  Mentored by TSA Directors
                </span>

                <button
                  type="button"
                  onClick={() => handleApplyClick(track.title)}
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#071731] hover:text-[#C8102E] transition-colors py-1 cursor-pointer focus:outline-none"
                >
                  <span>Apply for This Discipline</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. EVALUATION & INTAKE PROCESS (Architectural Sequence) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-[#E2E8F0]">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#E2E8F0]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono text-[#C8102E] uppercase tracking-wider font-semibold block">
              Admission Pipeline
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#071731] tracking-tight">
              Evaluation &amp; Intake Process.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            Our selection process evaluates intellect, cultural alignment, technical foundation, and operational poise under strict protocol covenants.
          </p>
        </div>

        {/* 4 Connected Stages with Progression Hierarchy */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {selectionSteps.map((step) => (
            <div
              key={step.phase}
              className="bg-white rounded-lg sm:rounded-xl border border-[#E2E8F0] p-6 sm:p-7 shadow-2xs hover:border-[#C8102E]/40 transition-colors flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                  <span className="text-xs font-mono font-bold text-[#C8102E] tracking-widest uppercase">
                    PHASE {step.phase}
                  </span>
                  <Compass className="w-4 h-4 text-slate-400" />
                </div>

                <h3 className="font-heading text-lg font-bold text-[#071731] tracking-tight leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] text-[11px] font-mono text-[#64748B]">
                {step.timeline}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 4. VISUAL STORYTELLING: ACTIVE VENUE IMMERSION GALLERY */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-[#E2E8F0]">
        <div className="pb-8 border-b border-[#E2E8F0] space-y-2">
          <span className="text-[11px] font-mono text-[#C8102E] uppercase tracking-wider font-semibold block">
            Operational Footprint
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#071731] tracking-tight">
            Where Fellows Operate.
          </h2>
        </div>

        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Location 1 */}
          <div className="rounded-lg sm:rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#071731] shadow-xs group">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={backgroundTSA}
                alt="Sudirman Park Executive Secretariat"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-[10px] font-mono uppercase text-[#C8102E] font-semibold">Headquarters Command</div>
                <div className="font-heading font-bold text-sm sm:text-base mt-0.5">Sudirman Park, Central Jakarta</div>
              </div>
            </div>
          </div>

          {/* Location 2 */}
          <div className="rounded-lg sm:rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#071731] shadow-xs group">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src="/events/appmbgi-national-summit-2026/cover.jpg"
                alt="Plenary Assembly & Bilateral Staging at ICE BSD"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-[10px] font-mono uppercase text-[#C8102E] font-semibold">MICE Scale &amp; Exhibitions</div>
                <div className="font-heading font-bold text-sm sm:text-base mt-0.5">ICE BSD City, Tangerang</div>
              </div>
            </div>
          </div>

          {/* Location 3 */}
          <div className="rounded-lg sm:rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#071731] shadow-xs group">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src="/events/thales-kadin-innovation-day/photo-6.jpg"
                alt="Multilateral Protocol & Innovation Assemblies at JCC Senayan"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-[10px] font-mono uppercase text-[#C8102E] font-semibold">Ministerial Plenaries</div>
                <div className="font-heading font-bold text-sm sm:text-base mt-0.5">JCC Senayan, Jakarta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING ADMISSIONS MANDATE PANEL (Corporate Navy Anchor) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-12 sm:mt-16">
        <div className="bg-[#071731] text-white rounded-xl p-8 sm:p-14 border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl space-y-3 sm:space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C8102E] font-semibold block">
                Next Cohort Admissions
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-heading leading-tight">
                Ready to engineer Southeast Asia's landmark events?
              </h2>
              <p className="text-xs sm:text-base text-slate-300 font-normal leading-relaxed">
                Applications for active cohorts are reviewed on a rolling basis. Submit your candidate dossier directly to our admissions directorate at Sudirman Park.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => handleApplyClick()}
                className="btn-editorial-red text-xs sm:text-sm py-3.5 px-8 cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>Submit Candidate Dossier</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CANDIDATE INTAKE APPLICATION MODAL */}
      {applicationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#071731]/85 overscroll-contain">
          <div className="relative w-full max-w-2xl bg-white border border-[#071731]/15 rounded-xl p-6 sm:p-10 shadow-2xl text-[#071731] max-h-[90vh] overflow-y-auto">

            <button
              type="button"
              onClick={() => setApplicationModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-[#C8102E] hover:text-white text-slate-600 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center mx-auto border border-[#C8102E]/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#071731]">
                  Dossier Successfully Transmitted
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your candidate file for the <strong>{formData.role}</strong> track has been logged into the TSA Admissions Registry. Our directors will review your materials within 5 business days.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setApplicationModalOpen(false)}
                    className="btn-editorial-red text-xs py-2.5 px-6 cursor-pointer"
                  >
                    Return to Fellowship Overview
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-1.5 border-b border-[#071731]/10 pb-5">
                  <div className="text-[10px] font-mono text-[#C8102E] uppercase tracking-wider font-semibold">
                    CANDIDATE INTAKE FORM
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#071731] tracking-tight">
                    Fellowship Candidate Dossier
                  </h3>
                  <p className="text-xs text-slate-500 font-sans">
                    Please provide accurate credentials. All materials are evaluated under strict confidentiality.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-700 font-medium block">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Raden Arya Wijaya"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#071731]/15 rounded p-3 text-[#071731] focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-700 font-medium block">Official Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="e.g. arya@university.ac.id"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#071731]/15 rounded p-3 text-[#071731] focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-700 font-medium block">University / Institution *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Universitas Indonesia, ITB, etc."
                        value={formData.university}
                        onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#071731]/15 rounded p-3 text-[#071731] focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-700 font-medium block">Academic Major *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Computer Science / Int. Relations"
                        value={formData.major}
                        onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-[#071731]/15 rounded p-3 text-[#071731] focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-medium block">Operational Track *</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-[#071731]/15 rounded p-3 text-[#071731] focus:outline-none focus:border-[#C8102E]"
                    >
                      {tracks.map((t) => (
                        <option key={t.id} value={t.title} className="bg-white text-[#071731]">
                          {t.title} ({t.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-medium block">Portfolio / GitHub / LinkedIn URL</label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-[#071731]/15 rounded p-3 text-[#071731] focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-medium block">Statement of Purpose &amp; Motivation</label>
                    <textarea
                      rows={3}
                      placeholder="Detail why you wish to apprentice with TSA's executive operations..."
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-[#071731]/15 rounded p-3 text-[#071731] focus:outline-none focus:border-[#C8102E] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-editorial-red w-full justify-center py-3 text-xs cursor-pointer"
                    >
                      <span>Transmit Application to Admissions Desk</span>
                      <ArrowRight className="w-4 h-4" />
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
