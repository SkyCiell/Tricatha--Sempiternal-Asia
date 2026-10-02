import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Send,
  X,
  ArrowRight
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import dsc08824 from "../assets/DSC08824.JPG";
import scenographyTruss from "../assets/illustrations/scenography-truss.jpg";
import broadcastUplink from "../assets/illustrations/broadcast-uplink.jpg";
import plenaryDraft from "../assets/illustrations/plenary-draft.jpg";

gsap.registerPlugin(ScrollTrigger);

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

  const pageRef = useRef(null);

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

  // GSAP ScrollTrigger parallax depth on authentic operational photography
  useEffect(() => {
    const ctx = gsap.context(() => {
      const parallaxImages = pageRef.current?.querySelectorAll(".fellowship-parallax-img");
      parallaxImages?.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -7, scale: 1.05 },
          {
            yPercent: 7,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleApplyClick = (trackTitle) => {
    const targetRole = trackTitle || "IT / Software Development";
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
      category: "Digital Infrastructure & Telemetry",
      overview:
        "Architect and maintain digital infrastructure, delegate registration portals, internal workflows, and telemetry tooling supporting flagship TSA operations.",
      immersion:
        "You will build secure, responsive web applications, attendee credential check-in systems, and real-time electronic voting telemetry deployed across national plenaries and corporate AGMs.",
      responsibilities: [
        "Develop and optimize high-performance web applications using modern React architecture",
        "Build secure data ingestion and registration pipelines for national summits",
        "Collaborate with technical leads to ensure zero-downtime event day operations"
      ],
      skills: ["React & TypeScript", "TailwindCSS", "REST APIs", "System Reliability"],
      image: broadcastUplink
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
      skills: ["Protocol Decorum", "Show Calling", "Field Logistics", "Zero Margin Precision"],
      image: dsc08824
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
      skills: ["Executive Copywriting", "Media Relations", "Editorial Curation", "Strategic Communications"],
      image: plenaryDraft
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
      skills: ["3D Spatial Design / CAD", "Spatial Scenography", "Lighting Concepts", "Design Poise"],
      image: scenographyTruss
    }
  ];

  const selectionStages = [
    {
      stage: "Dossier Submission",
      desc: "Submit your academic transcript, resume, portfolio/code samples, and a concise statement of purpose explaining your interest in high-stakes event engineering."
    },
    {
      stage: "Practical Assessment",
      desc: "Selected candidates complete a practical discipline assessment (e.g. spatial layout challenge, protocol scenario, or frontend engineering task)."
    },
    {
      stage: "Executive Panel",
      desc: "Meet with TSA Practice Directors and lead advisors at our headquarters at The City Tower in Central Jakarta to evaluate cultural alignment and poise."
    },
    {
      stage: "Venue Deployment",
      desc: "Successful fellows receive protocol clearance, dedicated mentorship, and immediate on-ground deployment across active flagship summit venues."
    }
  ];

  return (
    <div
      ref={pageRef}
      className="bg-[#071731] min-h-screen text-[#F1F5F9] font-sans pt-20 sm:pt-28 pb-20 selection:bg-[#C8102E] selection:text-white"
    >
      {/* 1. EDITORIAL MASTHEAD */}
      <header className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-8 sm:pt-14 pb-12 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-8">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.02]">
              Executive Fellowship &amp; <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Operational Apprenticeship.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl pt-2">
              An immersive professional development program designed for exceptional candidates seeking front-line mastery in sovereign event management, digital telemetry, spatial scenography, and corporate communications.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-5">
            <div className="font-mono text-xs text-slate-400 space-y-1 text-left lg:text-right">
              <div>COHORT 2026 INTAKE</div>
              <div className="text-white font-semibold">CENTRAL JAKARTA &amp; FIELD VENUES</div>
              <div>DURATION: 3 – 6 MONTH IMMERSION</div>
            </div>

            <button
              onClick={() => handleApplyClick()}
              className="btn-editorial-red text-xs py-3 px-6 cursor-pointer"
            >
              <span>Apply for Fellowship</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. MONUMENTAL VISUAL OPENING (Large Authentic TSA Team Photo + Editorial Lead) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-14 sm:py-20 border-b border-white/10">
        <div className="space-y-8">
          {/* Large-Scale Authentic Media Canvas */}
          <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded bg-[#050F22] border border-white/15 shadow-2xl">
            <img
              src={dsc08824}
              alt="TSA Operational Event Command Center Immersion"
              className="fellowship-parallax-img w-full h-full object-cover scale-105 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/40 to-transparent pointer-events-none" />

            {/* Overlaid Editorial Manifesto Banner */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-none">
              <div className="max-w-2xl bg-[#071731]/90 backdrop-blur-md p-6 border border-white/15 rounded">
                <p className="font-editorial italic text-base sm:text-xl text-white leading-relaxed font-normal">
                  "Front-line event engineering, not backroom observations. Stand directly inside control booths, ministerial plenary suites, and broadcast hubs."
                </p>
                <div className="mt-3 font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider">
                  — TSA Operations Apprenticeship Doctrine
                </div>
              </div>

              <div className="shrink-0 font-mono text-xs text-slate-300 space-y-1 text-left md:text-right hidden sm:block">
                <div className="text-white font-semibold">THE CITY TOWER, JCC &amp; ICE BSD</div>
                <div>VVIP PROTOCOL &amp; TELEMETRY ROTATIONS</div>
              </div>
            </div>
          </div>

          {/* Program Information Ledger (Clean Spec Grid, NOT cards) */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 font-mono text-xs">
            <div className="space-y-1">
              <div className="text-slate-400 uppercase tracking-wider">PROGRAM DURATION</div>
              <div className="text-white font-semibold text-sm">3 – 6 Months Full Immersion</div>
              <div className="text-slate-400 font-sans text-xs">Includes venue deployments &amp; command shifts</div>
            </div>
            <div className="space-y-1">
              <div className="text-slate-400 uppercase tracking-wider">LOCATIONS</div>
              <div className="text-white font-semibold text-sm">The City Tower &amp; Active Venues</div>
              <div className="text-slate-400 font-sans text-xs">JCC Senayan, ICE BSD, and partner hotels</div>
            </div>
            <div className="space-y-1">
              <div className="text-slate-400 uppercase tracking-wider">FELLOWSHIP STIPEND</div>
              <div className="text-white font-semibold text-sm">Competitive Professional Honorarium</div>
              <div className="text-slate-400 font-sans text-xs">Full credentialing &amp; official certificate</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR SPECIALIZED IMMERSION TRACKS (Alternating Large Editorial Showcase) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-white/10">
        <div className="pb-12 border-b border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Specialized Fellowship Disciplines
            </h2>
            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              Select a specialized operational track aligned with your academic background and professional aspirations.
            </p>
          </div>
          <div className="font-mono text-xs text-slate-400">
            4 DISTINCT OPERATIONAL DIVISIONS
          </div>
        </div>

        {/* Alternating Large Editorial Track Rows */}
        <div className="divide-y divide-white/10">
          {tracks.map((track, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={track.id}
                className="py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group"
              >
                {/* Media Column (5 cols) - Alternating Left/Right */}
                <div className={`lg:col-span-5 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded bg-[#050F22] border border-white/15 shadow-xl">
                    <img
                      src={track.image}
                      alt={track.title}
                      className="fellowship-parallax-img w-full h-full object-cover scale-105 will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-transparent to-transparent opacity-70 pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-slate-300">
                      <span>{track.category}</span>
                      <span className="text-white font-medium">Field Immersion</span>
                    </div>
                  </div>
                </div>

                {/* Narrative & Responsibilities Column (7 cols) */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="space-y-3">
                    <div className="font-mono text-xs uppercase tracking-wider text-[#C8102E] font-semibold">
                      {track.category}
                    </div>

                    <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                      {track.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1">
                      {track.overview}
                    </p>
                  </div>

                  {/* Immersion Context */}
                  <div className="space-y-3 font-sans text-xs sm:text-sm pt-2">
                    <p className="text-slate-300 leading-relaxed font-normal">
                      {track.immersion}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-white/10">
                      {track.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills & Action */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                      {track.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded bg-[#0A1F44] border border-white/10 text-slate-300 text-[11px]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleApplyClick(track.title)}
                      className="btn-editorial-red text-xs py-2.5 px-5 shrink-0 inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>Apply for Track</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SELECTION ROADMAP & EVALUATION (Architectural Flow, No Cards) */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 py-16 sm:py-24 border-b border-white/10">
        <div className="pb-10 border-b border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Admissions Roadmap
            </h2>
            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              Our selection process evaluates intellect, cultural alignment, technical foundation, and operational poise under live pressure.
            </p>
          </div>
          <div className="font-mono text-xs text-slate-400">
            4 PROGRESSIVE EVALUATION STAGES
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          {selectionStages.map((step, idx) => (
            <div
              key={idx}
              className="space-y-3 pt-6 border-t-2 border-white/20 hover:border-[#C8102E] transition-colors"
            >
              <div className="font-mono text-xs font-bold text-[#C8102E] tracking-wider uppercase">
                Stage 0{idx + 1}
              </div>
              <h3 className="font-heading text-lg font-bold text-white tracking-tight">
                {step.stage}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CLOSING SPREAD CALLOUT */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 mt-16 sm:mt-24">
        <div className="bg-[#0A1F44] border border-white/15 rounded p-8 sm:p-14 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Ready to engineer Southeast Asia's landmark events?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
                Applications for the 2026 cohort are reviewed on a rolling basis. Submit your candidate dossier directly to our admissions committee.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-end items-start lg:items-end gap-4">
              <button
                onClick={() => handleApplyClick()}
                className="btn-editorial-red text-xs py-3 px-6"
              >
                <span>Submit Candidate Dossier</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs text-slate-400">
                Evaluation Window: Within 5 Business Days
              </span>
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
                    className="btn-editorial-red text-xs py-2.5 px-6"
                  >
                    <span>Close Registry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="space-y-1 border-b border-white/10 pb-4">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Submit Candidate Dossier
                  </h3>
                  <p className="text-xs text-slate-300">
                    TSA Operational Fellowship &amp; Apprenticeship · Cohort 2026
                  </p>
                </div>

                <div className="space-y-4 font-sans text-xs">
                  <div>
                    <label className="block font-mono text-[11px] text-slate-300 uppercase mb-1 font-semibold">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Raden Arya Pratama"
                      className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white text-sm focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-slate-300 uppercase mb-1 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="arya@university.ac.id"
                        className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white text-sm focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] text-slate-300 uppercase mb-1 font-semibold">
                        Fellowship Discipline *
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white text-sm focus:outline-none focus:border-[#C8102E] cursor-pointer"
                      >
                        {tracks.map((t) => (
                          <option key={t.id} value={t.title} className="bg-[#071731] text-white">
                            {t.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-slate-300 uppercase mb-1 font-semibold">
                        University / Institution *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.university}
                        onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                        placeholder="e.g. Universitas Indonesia / ITB"
                        className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white text-sm focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] text-slate-300 uppercase mb-1 font-semibold">
                        Academic Major *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.major}
                        onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                        placeholder="e.g. Computer Science / Communications"
                        className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white text-sm focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-slate-300 uppercase mb-1 font-semibold">
                      Portfolio / GitHub / LinkedIn URL
                    </label>
                    <input
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      placeholder="https://github.com/... or https://linkedin.com/in/..."
                      className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white text-sm focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-slate-300 uppercase mb-1 font-semibold">
                      Candidate Statement *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      placeholder="Briefly state why you want to complete your fellowship immersion with Tricatha Sempiternal Asia..."
                      className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white text-sm focus:outline-none focus:border-[#C8102E] resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <span className="font-mono text-xs text-slate-400">
                    Confidential admissions review
                  </span>
                  <button
                    type="submit"
                    className="btn-editorial-red text-xs py-2.5 px-6 inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Transmit Dossier</span>
                    <Send className="w-3.5 h-3.5" />
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
