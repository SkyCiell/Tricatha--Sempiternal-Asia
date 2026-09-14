import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { executiveFAQs } from "../data/tsaData";

export default function FAQSection({ _scrollToSection }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFFFFF] text-[#0A1F44] border-b border-slate-100">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-slate-100 gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#C8102E] font-semibold uppercase tracking-wider block">
              INSTITUTIONAL CLARIFICATIONS
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-medium tracking-tight text-[#0A1F44]">
              Frequently Addressed Protocol Inquiries
            </h2>
          </div>

          <p className="max-w-md text-sm text-slate-600 font-normal leading-relaxed">
            Essential parameters regarding confidentiality covenants, sovereign clearances, ASEAN regional logistics, and studio production timelines.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="pt-10 max-w-4xl mx-auto divide-y divide-slate-200 border-y border-slate-200">
          {executiveFAQs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 transition-colors">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left flex items-start justify-between gap-6 cursor-pointer focus:outline-none group"
                >
                  <div className="flex items-start gap-4">
                    <h3 className="font-heading text-base sm:text-lg font-medium tracking-tight text-[#0A1F44] group-hover:text-[#C8102E] transition-colors leading-snug">
                      {faq.q}
                    </h3>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-[#F5F6F8] border border-slate-200 text-[#0A1F44] group-hover:bg-[#0A1F44] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pr-4 space-y-3">
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                          {faq.a}
                        </p>
                        <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                          <span>Standard protocol verified under Jakarta Executive Secretariat oversight.</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
