import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import tsaEmblem from "../assets/tsa-emblem-transparent.png";

export default function Navbar({ activeSection, scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", id: "about" },
    { name: "SERVICES", id: "services" },
    { name: "APPROACH", id: "approach" },
    { name: "WORK", id: "work" },
    { name: "CONTACT", id: "contact" }
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071A2B]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/40"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Wordmark */}
        <button
          onClick={() => handleNavClick("hero")}
          className="group flex items-center gap-3 focus:outline-none cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#42D3A5] to-[#087F5B] p-2 overflow-hidden shadow-md flex items-center justify-center group-hover:border-[#42D3A5] border border-white/20 transition-all shrink-0">
            <img src={tsaEmblem} alt="Tricatha Sempiternal Asia Emblem" className="w-full h-full object-contain object-center" />
          </div>
          <div className="text-left">
            <div className="font-heading text-sm tracking-widest text-[#F4F6F2] font-bold uppercase leading-none group-hover:text-[#42D3A5] transition-colors">
              TRICATHA SEMPITERNAL
            </div>
            <div className="text-[10px] tracking-[0.2em] text-[#155EEF] font-mono uppercase mt-1">
              FUTURE SOCIETY
            </div>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-heading text-xs uppercase tracking-[0.2em] transition-all duration-200 py-1.5 px-3 rounded-full focus:outline-none relative ${
                  isActive
                    ? "text-[#42D3A5] bg-white/10 font-bold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action CTA */}
        <div className="hidden lg:flex items-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNavClick("contact")}
            className="px-6 py-3 bg-[#155EEF] hover:bg-[#087F5B] text-white text-xs font-heading font-bold uppercase tracking-[0.2em] rounded-full transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-[#155EEF]/20 cursor-pointer"
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="w-4 h-4 text-[#42D3A5]" />
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white focus:outline-none"
          aria-label="Toggle Mobile Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#42D3A5]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#071A2B] border-b border-white/10 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left font-heading text-sm uppercase tracking-widest py-2 border-b border-white/5 ${
                    activeSection === link.id ? "text-[#42D3A5] font-bold" : "text-slate-300"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("contact")}
                className="mt-4 w-full py-3.5 bg-[#155EEF] text-white font-heading font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4 text-[#42D3A5]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
