import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTASection({ scrollToSection }) {
  return (
    <section className="py-32 bg-[#071A2B] text-[#F4F6F2] relative border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.88] mb-12">
            LET’S MAKE <br />
            <span className="text-[#155EEF]">SOMETHING</span> <br />
            <span className="text-[#42D3A5]">WORTH MOVING.</span>
          </h2>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("contact")}
              className="px-10 py-5 bg-[#155EEF] hover:bg-[#087F5B] text-white font-heading font-bold text-xs uppercase tracking-[0.25em] rounded-full transition-colors duration-300 flex items-center gap-3 shadow-2xl shadow-[#155EEF]/30 cursor-pointer"
            >
              <span>WORK WITH TSA</span>
              <ArrowUpRight className="w-5 h-5 text-[#42D3A5]" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
