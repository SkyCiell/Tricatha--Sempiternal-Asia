import React, { useState } from "react";
import { motion } from "framer-motion";
import { companyInfo } from "../data/tsaData";
import { Send, CheckCircle2, Copy, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

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
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid corporate email required";
    }
    if (!formData.message.trim()) newErrors.message = "Message details required";
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

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-28 bg-[#071A2B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#F4F6F2] uppercase tracking-tighter">
            START A <span className="text-[#42D3A5]">CONVERSATION.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {isSubmitted ? (
              <div className="p-8 border border-[#42D3A5] bg-white/5 py-16 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#42D3A5] mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-white uppercase mb-2">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-slate-300 font-mono text-xs max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, {formData.firstName} {formData.lastName}. Your inquiry for {formData.company} has been assigned to our practice lead.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ firstName: "", lastName: "", company: "", email: "", phone: "", message: "" });
                  }}
                  className="px-6 py-3 bg-[#155EEF] text-white font-heading text-xs uppercase tracking-widest"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Alexander"
                      className="w-full underline-input text-base"
                    />
                    {errors.firstName && <span className="text-[11px] font-mono text-red-400 mt-1 block">{errors.firstName}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      LAST NAME *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Wijaya"
                      className="w-full underline-input text-base"
                    />
                    {errors.lastName && <span className="text-[11px] font-mono text-red-400 mt-1 block">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      COMPANY / MINISTRY *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Organization Name"
                      className="w-full underline-input text-base"
                    />
                    {errors.company && <span className="text-[11px] font-mono text-red-400 mt-1 block">{errors.company}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      CORPORATE EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@organization.com"
                      className="w-full underline-input text-base"
                    />
                    {errors.email && <span className="text-[11px] font-mono text-red-400 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    PHONE / MOBILE
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62 812-XXXX-XXXX"
                    className="w-full underline-input text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    PROJECT SCOPE / MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your strategic goals or scope of work..."
                    className="w-full underline-input text-base resize-none"
                  />
                  {errors.message && <span className="text-[11px] font-mono text-red-400 mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="px-10 py-5 bg-[#155EEF] hover:bg-[#087F5B] text-white font-heading font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 flex items-center gap-3 shadow-xl shadow-[#155EEF]/20"
                >
                  <Send className="w-4 h-4 text-[#42D3A5]" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Large Typography Contact Metadata (EMAIL, PHONE, LOCATION, SOCIALS) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-10"
          >
            {/* EMAIL */}
            <div className="border-t border-white/10 pt-4">
              <div className="font-mono text-xs text-[#155EEF] uppercase tracking-widest mb-1">
                EMAIL
              </div>
              <div className="flex items-center justify-between">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="font-heading text-2xl font-bold text-white hover:text-[#42D3A5] transition-colors"
                >
                  {companyInfo.email}
                </a>
                <button
                  onClick={() => handleCopy(companyInfo.email)}
                  className="p-2 text-slate-400 hover:text-white"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-5 h-5 text-[#42D3A5]" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* PHONE */}
            <div className="border-t border-white/10 pt-4">
              <div className="font-mono text-xs text-[#42D3A5] uppercase tracking-widest mb-1">
                PHONE
              </div>
              <div className="font-heading text-2xl font-bold text-white">
                {companyInfo.phone}
              </div>
            </div>

            {/* LOCATION */}
            <div className="border-t border-white/10 pt-4">
              <div className="font-mono text-xs text-[#2F80FF] uppercase tracking-widest mb-1">
                LOCATION
              </div>
              <div className="font-heading text-xl font-bold text-white uppercase mb-1">
                The City Tower — Jakarta
              </div>
              <div className="font-mono text-xs text-slate-400 leading-relaxed">
                {companyInfo.address}
              </div>
            </div>

            {/* SOCIALS */}
            <div className="border-t border-white/10 pt-4">
              <div className="font-mono text-xs text-[#155EEF] uppercase tracking-widest mb-2">
                SOCIALS
              </div>
              <div className="flex flex-wrap gap-4 font-mono text-xs text-white uppercase">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#42D3A5]">
                  LINKEDIN
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#42D3A5]">
                  INSTAGRAM
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#42D3A5]">
                  YOUTUBE
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[#42D3A5]">
                  X.COM
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
