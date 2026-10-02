import React, { useState, useEffect, useRef } from "react";
import { companyInfo } from "../data/tsaData";
import { CheckCircle2, MapPin, Mail, Clock, ArrowUpRight, Phone, ArrowRight, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import broadcastUplink from "../assets/illustrations/broadcast-uplink.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ preselectedService, isDedicatedPage = false }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        message: `Mandate inquiry regarding ${preselectedService}.`
      }));
    }
  }, [preselectedService]);

  // GSAP ScrollTrigger parallax on authentic contact photography
  useEffect(() => {
    const ctx = gsap.context(() => {
      const media = containerRef.current?.querySelector(".contact-parallax-canvas");
      if (media) {
        gsap.fromTo(
          media,
          { yPercent: -7, scale: 1.05 },
          {
            yPercent: 7,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.company.trim()) newErrors.company = "Organization or Ministry required";
    if (!formData.email.trim()) {
      newErrors.email = "Official email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email required";
    }
    if (!formData.message.trim()) newErrors.message = "Brief description of mandate or event required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className={`${
        isDedicatedPage ? "pt-4 pb-20" : "py-20 sm:py-28"
      } bg-[#071731] text-[#F1F5F9] border-b border-white/10 relative overflow-hidden`}
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 relative z-10 space-y-14 sm:space-y-20">

        {/* 1. LARGE TSA HEADING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end pb-10 border-b border-white/10">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.02]">
              Executive Secretariat &amp; <br />
              <span className="font-editorial italic font-normal text-slate-300">
                Operational Coordinates.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl pt-2">
              Connect directly with the Executive Directorate at Sudirman Park, Central Jakarta. All strategic consultations and plenary mandates are reviewed under strict institutional confidentiality covenants.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-2 text-left lg:text-right font-mono text-xs text-slate-400">
            <div>DIRECT REVIEW BY PRACTICE DIRECTORS</div>
            <div className="text-white font-semibold">BILATERAL NDA PROTOCOL MAINTAINED</div>
            <div>RESPONSE: WITHIN 24 BUSINESS HOURS</div>
          </div>
        </div>

        {/* 2. STRONG VISUAL COMPOSITION + SCANNABLE CONTACT DETAILS + STREAMLINED INTAKE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (6 cols): Authentic Photo + Scannable Coordinates + Location Map */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Authentic Photographic Canvas with Parallax Scrub */}
            <div className="relative aspect-[16/10] overflow-hidden rounded bg-[#050F22] border border-white/15 shadow-2xl">
              <img
                src={broadcastUplink}
                alt="TSA Command Operations Center"
                className="contact-parallax-canvas w-full h-full object-cover scale-105 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071731] via-[#071731]/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs text-slate-300">
                <span>The City Tower &amp; Sudirman Park</span>
                <span className="text-white font-medium">Headquarters Liaison</span>
              </div>
            </div>

            {/* Easy-To-Scan Contact Information Matrix */}
            <div className="divide-y divide-white/10 font-sans text-xs pt-2">
              {/* Address */}
              <div className="py-4 flex items-start gap-4">
                <div className="p-2.5 rounded bg-[#0A1F44] border border-white/15 text-[#C8102E] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                    HEADQUARTERS SECRETARIAT
                  </div>
                  <div className="font-semibold text-white text-sm sm:text-base mt-0.5">
                    Sudirman Park Apartment
                  </div>
                  <div className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-0.5">
                    {companyInfo.address}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="py-4 flex items-start gap-4">
                <div className="p-2.5 rounded bg-[#0A1F44] border border-white/15 text-[#C8102E] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                    DIRECT PROTOCOL EMAIL
                  </div>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="font-semibold text-white text-sm sm:text-base hover:text-[#C8102E] transition-colors mt-0.5 block"
                  >
                    {companyInfo.email}
                  </a>
                  <div className="text-slate-400 text-xs pt-0.5">Official secretariat communications desk</div>
                </div>
              </div>

              {/* Phone */}
              <div className="py-4 flex items-start gap-4">
                <div className="p-2.5 rounded bg-[#0A1F44] border border-white/15 text-[#C8102E] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                    TELEPHONE DISPATCH LINE
                  </div>
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
                    className="font-semibold text-white text-sm sm:text-base hover:text-[#C8102E] transition-colors font-mono mt-0.5 block"
                  >
                    {companyInfo.phone}
                  </a>
                  <div className="text-slate-400 text-xs pt-0.5">Jakarta Headquarters Reception (Ext. 101)</div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="py-4 flex items-start gap-4">
                <div className="p-2.5 rounded bg-[#0A1F44] border border-white/15 text-[#C8102E] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                    OPERATIONAL HOURS
                  </div>
                  <div className="font-semibold text-white text-sm mt-0.5">
                    {companyInfo.hours}
                  </div>
                  <div className="text-slate-400 text-xs pt-0.5">Western Indonesia Time (WIB) · Emergency lines 24/7 on active deployments</div>
                </div>
              </div>
            </div>

            {/* Interactive Location Map (Sudirman Park Jakarta) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                <span className="text-white font-semibold uppercase tracking-wider">
                  Sudirman Park Headquarters Map
                </span>
                <a
                  href="https://maps.google.com/?q=Sudirman+Park+Apartment,+Jakarta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8102E] hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden rounded bg-[#050F22] border border-white/15">
                <iframe
                  title="TSA Headquarters Location at Sudirman Park Jakarta"
                  src="https://maps.google.com/maps?q=Sudirman+Park+Apartment,+Jl.+KH.+Mas+Mansyur+Kav.+35,+Jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column (6 cols): Streamlined Mandate Brief Intake (NOT a giant generic form) */}
          <div className="lg:col-span-6 bg-[#0A1F44] border border-white/15 p-8 sm:p-12 rounded shadow-2xl">
            {isSubmitted ? (
              <div className="py-14 text-center space-y-5">
                <div className="w-14 h-14 bg-[#071731] border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Mandate Brief Transmitted
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your mandate brief on behalf of <strong className="text-white">{formData.company}</strong> has been logged into the TSA Executive Directorate registry at Sudirman Park, Jakarta.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        message: ""
                      });
                    }}
                    className="btn-editorial-red text-xs py-2.5 px-6 inline-flex items-center gap-2"
                  >
                    <span>Transmit Another Mandate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1 border-b border-white/10 pb-4">
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                    Direct Mandate Intake
                  </h3>
                  <p className="text-xs text-slate-300">
                    Submit your organization's event inquiry or plenary requirement.
                  </p>
                </div>

                <div className="space-y-4 font-sans text-xs">
                  <div>
                    <label className="block font-mono text-[11px] text-slate-300 uppercase mb-1 font-semibold tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Raden Arya Pratama"
                      className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white text-sm focus:outline-none focus:border-[#C8102E]"
                    />
                    {errors.name && <span className="text-xs font-mono text-[#C8102E] block mt-1">{errors.name}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-slate-300 uppercase mb-1 font-semibold tracking-wider">
                        Organization / Ministry *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Ministry / SOE / Corporation"
                        className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white text-sm focus:outline-none focus:border-[#C8102E]"
                      />
                      {errors.company && <span className="text-xs font-mono text-[#C8102E] block mt-1">{errors.company}</span>}
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-slate-300 uppercase mb-1 font-semibold tracking-wider">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="arya@organization.com"
                        className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white text-sm focus:outline-none focus:border-[#C8102E]"
                      />
                      {errors.email && <span className="text-xs font-mono text-[#C8102E] block mt-1">{errors.email}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-slate-300 uppercase mb-1 font-semibold tracking-wider">
                      Mandate Brief / Project Scope *
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly state your event requirements, target date, expected delegation size, or advisory mandate..."
                      className="w-full bg-[#071731] border border-white/15 rounded p-3 text-white text-sm focus:outline-none focus:border-[#C8102E] resize-none"
                    />
                    {errors.message && <span className="text-xs font-mono text-[#C8102E] block mt-1">{errors.message}</span>}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                  <div className="text-xs font-mono text-slate-400">
                    Direct dispatch to Sudirman Park, Jakarta
                  </div>

                  <button
                    type="submit"
                    className="btn-editorial-red w-full sm:w-auto text-xs py-3 px-7 inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Transmit Mandate Brief</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
