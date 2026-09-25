import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

export default function WorkTogetherModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    eventType: "Corporate Event",
    estimatedAttendees: "",
    details: ""
  });

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (window.__lenis) {
      window.__lenis.stop();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#050F22]/90 backdrop-blur-md overscroll-contain"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-work-title"
    >
      <div 
        data-lenis-prevent
        className="relative w-full max-w-2xl bg-[#0A1F44] text-[#F1F5F9] rounded border border-white/15 shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh] overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="shrink-0 flex items-center justify-between px-6 py-5 bg-[#071731] border-b border-white/10">
          <div>
            <span className="text-[11px] font-semibold text-[#C8102E] uppercase tracking-wider block">
              Direct Engagement Mandate
            </span>
            <h2 id="modal-work-title" className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white">
              Consult with Executive Secretariat
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 rounded flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div data-lenis-prevent className="p-6 sm:p-8 space-y-6 flex-1 overflow-y-auto overscroll-contain">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded bg-[#071731] border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                Inquiry Received
              </h3>
              <p className="font-sans text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you. The TSA Executive Secretariat has logged your inquiry. Our directors will review your event requirements and respond within one business day.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="btn-editorial-red"
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                Provide brief parameters regarding your upcoming corporate convention, exhibition, or institutional assembly. All disclosures are governed under standard non-disclosure covenants.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Budi Santoso"
                    className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Organization / Institution *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Ministry / Enterprise Tbk"
                    className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Direct Telephone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+62 812..."
                    className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Event Category
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-sm text-white focus:outline-none focus:border-[#C8102E]"
                  >
                    <option value="Corporate Event" className="bg-[#071731] text-white">Corporate Event / AGM</option>
                    <option value="Exhibition & Expo" className="bg-[#071731] text-white">Exhibition &amp; Trade Expo</option>
                    <option value="Conference & Forum" className="bg-[#071731] text-white">Conference &amp; Knowledge Forum</option>
                    <option value="Government & Institutional" className="bg-[#071731] text-white">Government &amp; Sovereign Plenary</option>
                    <option value="Business Networking" className="bg-[#071731] text-white">Business Networking &amp; Salons</option>
                    <option value="Strategic Program" className="bg-[#071731] text-white">Strategic Program / Multi-City Tour</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Estimated Scale
                  </label>
                  <input
                    type="text"
                    value={formData.estimatedAttendees}
                    onChange={(e) => setFormData({ ...formData, estimatedAttendees: e.target.value })}
                    placeholder="e.g. 500 to 5,000 Delegates"
                    className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Event Objectives &amp; Desired Timeline
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us what you are planning, target venue, or key milestones..."
                  className="w-full px-3.5 py-2.5 rounded bg-[#071731] border border-white/20 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C8102E]"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-slate-400 font-sans">
                  The City Tower · Jl. MH. Thamrin No. 81, Jakarta Pusat
                </div>

                <button
                  type="submit"
                  className="btn-editorial-red w-full sm:w-auto"
                >
                  <span>Transmit Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
