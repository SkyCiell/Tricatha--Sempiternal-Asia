import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoTSA from "../assets/LogoTSAA.jpeg";

const NAV_ITEMS = [
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
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 max-w-[1520px] mx-auto pointer-events-none">
      <nav className="w-full bg-[#FFFFFF]/95 backdrop-blur-md rounded-md border border-[#0A1F44]/15 shadow-sm pointer-events-auto transition-all">
        <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 gap-3">
          
          {/* Brand Anchor */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3 cursor-pointer group text-left focus:outline-none shrink-0"
          >
            <div className="w-8 h-8 rounded p-0.5 bg-[#FFFFFF] border border-[#0A1F44]/20 shadow-2xs flex items-center justify-center shrink-0 group-hover:border-[#C8102E] transition-colors">
              <img src={logoTSA} alt="TSA Emblem" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-bold text-[13px] sm:text-[14px] tracking-tight text-[#0A1F44] leading-none group-hover:text-[#C8102E] transition-colors">
                TRICATHA
              </span>
              <span className="font-sans text-[9px] text-slate-500 tracking-wider uppercase font-medium mt-0.5">
                SEMPITERNAL ASIA
              </span>
            </div>
          </button>

          {/* Center Navigation Links */}
          <ul className="hidden xl:flex items-center gap-4 2xl:gap-6 font-sans text-[13px] font-medium text-[#0A1F44]">
            {NAV_ITEMS.map((item) => {
              const isActive =
                currentPath === item.path ||
                (item.path === "/" && (currentPath === "/" || currentPath === "/home")) ||
                (item.path === "/events" && currentPath.startsWith("/events"));

              return (
                <li key={item.path}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="relative group py-1.5 cursor-pointer text-left focus:outline-none transition-colors"
                  >
                    <span
                      className={`block transition-colors duration-200 ${
                        isActive
                          ? "text-[#C8102E] font-semibold"
                          : "text-[#0A1F44] hover:text-[#C8102E]"
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Active / Hover Underline (Red #C8102E) */}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden pointer-events-none">
                      <span
                        className={`block w-full h-[2px] transition-transform duration-250 ease-out ${
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

          {/* Right Section: INITIATE INQUIRY CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick("/contact")}
              className="h-9 sm:h-10 px-4 sm:px-5 inline-flex items-center justify-center gap-2 rounded bg-[#C8102E] hover:bg-[#A50D25] text-white font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md focus:outline-none"
            >
              <span>INITIATE INQUIRY</span>
              <span className="text-sm font-normal leading-none">↗</span>
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-9 h-9 rounded border border-[#0A1F44]/25 flex items-center justify-center text-[#0A1F44] hover:bg-[#F5F6F8] transition-colors focus:outline-none cursor-pointer"
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
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden border-t border-[#0A1F44]/15 bg-[#FFFFFF] px-6 py-6"
            >
              <div className="font-sans text-xs text-slate-400 font-medium uppercase tracking-wider mb-3">
                TSA Corporate Directory
              </div>
              <ul className="flex flex-col gap-2 font-heading text-[17px] font-semibold text-[#0A1F44]">
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    currentPath === item.path ||
                    (item.path === "/" && (currentPath === "/" || currentPath === "/home"));
                  return (
                    <li key={item.path}>
                      <button
                        onClick={() => handleNavClick(item.path)}
                        className={`w-full text-left py-2 transition-colors flex items-center justify-between border-b border-slate-100 ${
                          isActive ? "text-[#C8102E]" : "hover:text-[#C8102E]"
                        }`}
                      >
                        <span>{item.name}</span>
                        <span className="text-xs text-[#C8102E]">↗</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-[11px] font-mono text-slate-500">
                <span>THE CITY TOWER JAKARTA</span>
                <span className="text-[#C8102E] font-semibold">SOVEREIGN PROTOCOL</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
