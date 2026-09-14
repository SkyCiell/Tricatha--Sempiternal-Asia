import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import logoTSA from "../assets/LogoTSAA.jpeg";

export const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Business Group", path: "/business-group" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Events", path: "/events" },
  { name: "Internship", path: "/internship" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" }
];

export default function Navbar({ currentPath = "/", navigateTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    if (navigateTo) {
      navigateTo(path);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 max-w-[1440px] mx-auto pointer-events-none">
      {/* Crisp White Architectural Pill Dock - No Glassmorphism, Fine Navy Border */}
      <nav className="w-full bg-[#FFFFFF] rounded-[3px] border border-[#0A1F44]/25 shadow-[2px_2px_0px_rgba(10,31,68,0.06)] pointer-events-auto transition-all">
        <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 gap-3">
          
          {/* Brand Anchor with TSA Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3 cursor-pointer group text-left focus:outline-none shrink-0"
          >
            <div className="w-8 h-8 rounded-[2px] p-0.5 bg-[#FFFFFF] border border-[#0A1F44]/30 shadow-xs flex items-center justify-center shrink-0 group-hover:border-[#C8102E] transition-colors">
              <img src={logoTSA} alt="TSA Logo" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-[13px] sm:text-[14px] tracking-tight text-[#0A1F44] leading-none group-hover:text-[#C8102E] transition-colors">
                TRICATHA
              </span>
              <span className="font-mono text-[9px] text-[#5B6B84] tracking-widest uppercase mt-0.5">
                SEMPITERNAL ASIA
              </span>
            </div>
          </button>

          {/* Center Navigation Links - Strict User Order & Clean Hover */}
          <ul className="hidden xl:flex items-center gap-4 2xl:gap-6 font-mono text-[12px] font-medium text-[#0A1F44]">
            {NAV_ITEMS.map((item) => {
              const isActive =
                currentPath === item.path ||
                (item.path === "/" && (currentPath === "/" || currentPath === "/home")) ||
                (item.path === "/events" && currentPath.startsWith("/events"));

              return (
                <li key={item.path}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="relative group py-1.5 cursor-pointer text-left focus:outline-none"
                  >
                    {/* Rolling Text */}
                    <span className="inline-block overflow-hidden h-[17px]">
                      <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-full">
                        <span className={`block ${isActive ? "text-[#C8102E] font-bold" : "text-[#0A1F44]"}`}>
                          {item.name}
                        </span>
                        <span className="absolute top-full left-0 block text-[#C8102E] font-bold">
                          {item.name}
                        </span>
                      </span>
                    </span>

                    {/* Active / Hover Underline (Red #C8102E Only) */}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden pointer-events-none">
                      <span
                        className={`block w-full h-[2px] transition-transform duration-300 ease-out ${
                          isActive
                            ? "translate-x-0 bg-[#C8102E]"
                            : "-translate-x-[105%] group-hover:translate-x-0 bg-[#C8102E]"
                        }`}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Section: INITIATE INQUIRY ↗ & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* INITIATE INQUIRY ↗ Button - Red #C8102E CTA with Magnetic Motion */}
            <MagneticButton strength={0.2}>
              <button
                onClick={() => handleNavClick("/contact")}
                className="h-9 sm:h-10 px-4 sm:px-5 inline-flex items-center justify-center gap-2 rounded-[2px] bg-[#C8102E] hover:bg-[#A50D25] text-white font-mono text-[11px] sm:text-[12px] font-bold tracking-wider uppercase transition-colors cursor-pointer shadow-xs focus:outline-none"
              >
                <span>INITIATE INQUIRY</span>
                <span className="text-sm font-normal leading-none">↗</span>
              </button>
            </MagneticButton>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-9 h-9 rounded-[2px] border border-[#0A1F44]/30 flex items-center justify-center text-[#0A1F44] hover:bg-[#F8F9FA] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                {mobileMenuOpen ? (
                  <path d="M4 4L16 16M4 16L16 4" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <>
                    <rect x="2" y="4" width="16" height="2" fill="#0A1F44" />
                    <rect x="2" y="9" width="16" height="2" fill="#0A1F44" />
                    <rect x="2" y="14" width="16" height="2" fill="#C8102E" />
                  </>
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden border-t border-[#0A1F44]/15 bg-[#FFFFFF] px-6 py-6"
            >
              <div className="font-architect text-xs text-[#5B6B84] mb-3">
                TSA Directory · Select Destination
              </div>
              <ul className="flex flex-col gap-2 font-display text-[18px] font-semibold text-[#0A1F44]">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className="w-full text-left py-1.5 hover:text-[#C8102E] transition-colors flex items-center justify-between border-b border-dashed border-[#0A1F44]/15"
                    >
                      <span>{item.name}</span>
                      <span className="font-mono text-xs text-[#C8102E]">↗</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-[#0A1F44]/15 flex justify-between items-center text-[10px] font-mono text-[#5B6B84]">
                <span>THE CITY TOWER JAKARTA</span>
                <span className="text-[#C8102E] font-bold">SOVEREIGN PROTOCOL</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
