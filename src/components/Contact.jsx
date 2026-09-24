import React, { useState, useEffect } from "react";
import { companyInfo } from "../data/tsaData";
import { CheckCircle2, MapPin, Mail, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    category: "Strategic Advisory",
    message: ""
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        category: preselectedService,
        message: `Mandate inquiry regarding ${preselectedService}.`
      }));
    }
  }, [preselectedService]);

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const practiceOptions = [
    "Strategic Advisory",
    "Government & Public Affairs",
    "Corporate Events & Summits",
    "Stakeholder Engagement",
    "Market & Business Development",
    "Strategic Communications & DNA Studio"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.company.trim()) newErrors.company = "Organization / Ministry is required";
    if (!formData.email.trim()) {
      newErrors.email = "Official email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid official email required";
    }
    if (!formData.message.trim()) newErrors.message = "Mandate details or project scope required";
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
    <section id="contact" className="py-20 sm:py-28 bg-[#071731] text-[#F1F5F9] border-b border-white/10">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Header Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-white/10 gap-6">
          <div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-white leading-tight">
              Start an Executive Consultation
            </h2>
          </div>

          <p className="max-w-md text-sm text-slate-300 font-normal leading-relaxed">
            All inquiries are received under standard non-disclosure protocol and reviewed directly by TSA's executive directors at The City Tower in Jakarta.
          </p>
        </div>

        {/* Split Layout */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (5 cols): Coordinates & Confidentiality */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                Confidential Mandate Intake
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Connect with our directors to discuss high-level sovereign advisory, government liaison, plenary summit management, or corporate communications mandates.
              </p>
            </div>

            {/* Coordinates Matrix */}
            <div className="space-y-5 pt-4 border-t border-white/10 font-sans text-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#0A1F44] border border-white/15 text-[#C8102E] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono font-medium">HEADQUARTERS</div>
                  <div className="font-medium text-white mt-0.5">The City Tower, 12th Floor Unit 1N</div>
                  <div className="text-slate-400 text-[11px]">Jl. MH. Thamrin No. 81, Jakarta Pusat 10310</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#0A1F44] border border-white/15 text-[#C8102E] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono font-medium">EXECUTIVE EMAIL</div>
                  <a href={`mailto:${companyInfo.email}`} className="font-medium text-white hover:text-[#C8102E] transition-colors mt-0.5 block">
                    {companyInfo.email}
                  </a>
                  <div className="text-slate-400 text-[11px]">Direct protocol dispatch desk</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#0A1F44] border border-white/15 text-[#C8102E] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono font-medium">OPERATING HOURS</div>
                  <div className="font-medium text-white mt-0.5">{companyInfo.hours}</div>
                  <div className="text-slate-400 text-[11px]">Jakarta Western Indonesia Time (WIB)</div>
                </div>
              </div>
            </div>

            {/* Protocol Badge */}
            <div className="p-5 bg-[#0A1F44] border border-white/10 rounded flex items-center gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#C8102E] shrink-0" />
              <div className="text-xs">
                <span className="font-medium text-white block">Strict Non-Disclosure Protocol</span>
                <span className="text-slate-400 text-[11px]">All submissions receive guaranteed institutional non-disclosure protection.</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Card with Form */}
          <div className="lg:col-span-7 bg-[#0A1F44] border border-white/15 p-8 sm:p-10 rounded shadow-xl">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#071731] border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
                  Mandate Brief Transmitted
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.firstName} {formData.lastName}. Your brief on behalf of <span className="font-medium text-white">{formData.company}</span> has been securely transmitted to TSA's executive directors at The City Tower Jakarta.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ firstName: "", lastName: "", company: "", email: "", phone: "", category: "Strategic Advisory", message: "" });
                    }}
                    className="btn-editorial-red"
                  >
                    Send Another Transmission
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="font-mono text-xs text-[#C8102E] font-medium uppercase tracking-widest pb-3 border-b border-white/10 flex items-center justify-between">
                  <span>CONFIDENTIAL INTAKE FORM</span>
                  <span className="text-slate-400 font-normal">ALL FIELDS CONFIDENTIAL</span>
                </div>

                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-300 font-medium mb-1.5 tracking-wider">
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Alexander"
                      className="w-full bg-[#071731] border border-white/20 rounded px-3.5 py-2.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E] transition-colors"
                    />
                    {errors.firstName && <span className="text-xs font-mono text-[#C8102E] mt-1 block">{errors.firstName}</span>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-300 font-medium mb-1.5 tracking-wider">
                      LAST NAME *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Wijaya"
                      className="w-full bg-[#071731] border border-white/20 rounded px-3.5 py-2.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E] transition-colors"
                    />
                    {errors.lastName && <span className="text-xs font-mono text-[#C8102E] mt-1 block">{errors.lastName}</span>}
                  </div>
                </div>

                {/* Organization & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-300 font-medium mb-1.5 tracking-wider">
                      ORGANIZATION / MINISTRY *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Ministry of Trade / Enterprise"
                      className="w-full bg-[#071731] border border-white/20 rounded px-3.5 py-2.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E] transition-colors"
                    />
                    {errors.company && <span className="text-xs font-mono text-[#C8102E] mt-1 block">{errors.company}</span>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-300 font-medium mb-1.5 tracking-wider">
                      OFFICIAL EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alexander@domain.go.id"
                      className="w-full bg-[#071731] border border-white/20 rounded px-3.5 py-2.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E] transition-colors"
                    />
                    {errors.email && <span className="text-xs font-mono text-[#C8102E] mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Phone & Practice Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-300 font-medium mb-1.5 tracking-wider">
                      CONTACT TELEPHONE
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62 812 XXXX XXXX"
                      className="w-full bg-[#071731] border border-white/20 rounded px-3.5 py-2.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-300 font-medium mb-1.5 tracking-wider">
                      PRACTICE ENGAGEMENT
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-[#071731] border border-white/20 rounded px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#C8102E] transition-colors cursor-pointer"
                    >
                      {practiceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#071731] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-300 font-medium mb-1.5 tracking-wider">
                    MANDATE BRIEF OR INQUIRY SCOPE *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide a concise description of your upcoming plenary assembly, timeline, stakeholder profile, or advisory requirements."
                    className="w-full bg-[#071731] border border-white/20 rounded px-3.5 py-2.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E] transition-colors resize-y"
                  />
                  {errors.message && <span className="text-xs font-mono text-[#C8102E] mt-1 block">{errors.message}</span>}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] font-mono text-slate-400 text-center sm:text-left">
                    Direct dispatch to The City Tower, Jakarta
                  </div>

                  <button
                    type="submit"
                    className="btn-editorial-red w-full sm:w-auto"
                  >
                    <span>Transmit Mandate Brief</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
