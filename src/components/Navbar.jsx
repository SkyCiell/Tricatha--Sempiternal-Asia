import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoTSA from "../assets/LogoTSAA.jpeg";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Business Group", path: "/business-group" },
  { name: "Events", path: "/events" },
  { name: "Internship", path: "/internship" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" }
];

export default function Navbar({ currentPath = "/", navigateTo, onOpenWorkModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (link) => {
    setMobileMenuOpen(false);
    if (navigateTo) {
      navigateTo(link.path);
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (navigateTo) {
      navigateTo("/");
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (navigateTo) {
      navigateTo("/contact");
    } else if (onOpenWorkModal) {
      onOpenWorkModal();
    }
  };

  const checkIsActive = (linkPath) => {
    if (linkPath === "/") {
      return currentPath === "/" || currentPath === "/home";
    }
    return currentPath === linkPath || currentPath.startsWith(`${linkPath}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#071731]/98 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-[#071731] border-b border-white/10 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Brand Identity / Official Emblem */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-3.5 cursor-pointer group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded p-1 shrink-0"
          aria-label="PT Tricatha Sempiternal Asia Homepage"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded bg-white p-0.5 border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#C8102E] transition-colors">
            <img src={logoTSA} alt="TSA Official Emblem" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-white leading-tight group-hover:text-slate-100 transition-colors">
              TRICATHA SEMPITERNAL ASIA
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wider uppercase font-medium mt-0.5">
              THE CITY TOWER · CENTRAL JAKARTA
            </span>
          </div>
        </button>

        {/* Desktop Multi-Page Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 xl:gap-8 font-sans text-xs sm:text-sm font-medium tracking-wide"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = checkIsActive(link.path);
            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link)}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1.5 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white ${
                  isActive ? "text-white font-semibold" : "text-slate-300 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C8102E]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Area: Primary Consultation CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleCtaClick}
            className="btn-editorial-red text-xs py-2.5 px-4 sm:px-5 shrink-0"
          >
            <span>Consult Secretariat</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay with Proper Multi-Page Routes */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden bg-[#0A1F44] border-t border-white/10 overflow-hidden"
          >
            <div className="max-w-[1520px] mx-auto px-4 sm:px-8 py-5 space-y-4">
              <ul className="space-y-1 font-sans text-sm font-medium" role="menu">
                {NAV_LINKS.map((link) => {
                  const isActive = checkIsActive(link.path);
                  return (
                    <li key={link.name} role="none">
                      <button
                        role="menuitem"
                        onClick={() => handleLinkClick(link)}
                        aria-current={isActive ? "page" : undefined}
                        className={`w-full text-left py-3 px-3.5 rounded flex items-center justify-between transition-colors cursor-pointer min-h-[44px] ${
                          isActive
                            ? "bg-[#071731] text-white font-semibold border-l-3 border-[#C8102E]"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="pt-3 border-t border-white/10 space-y-3">
                <button
                  onClick={handleCtaClick}
                  className="w-full btn-editorial-red justify-center min-h-[44px]"
                >
                  <span>Consult Secretariat</span>
                </button>
                <div className="text-[11px] font-mono text-slate-400 text-center">
                  Mon – Fri: 08:30 – 17:30 WIB · +62 21 2358 4500
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
