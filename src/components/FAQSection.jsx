import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "../data/tsaData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF9F6] text-[#071731] border-b border-[#071731]/10">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-[#071731]/10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#071731] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#475569] font-normal leading-relaxed font-sans">
            Essential operational details regarding event scopes, turnkey execution ownership, sovereign clearances, and mandate commission procedures.
          </p>
        </div>

        {/* Accordion List */}
        <div className="pt-10 max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className="bg-white rounded border border-[#071731]/10 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-start justify-between gap-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071731] group"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-base sm:text-lg font-bold tracking-tight text-[#071731] group-hover:text-[#C8102E] transition-colors leading-snug">
                    {item.question}
                  </h3>

                  <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? "bg-[#C8102E] text-white"
                      : "bg-[#FAF9F6] border border-[#071731]/15 text-[#071731] group-hover:border-[#071731]/30"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-[#071731]/8 space-y-2">
                        <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
                          {item.answer}
                        </p>
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
