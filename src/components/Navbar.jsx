import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight, ArrowRight } from "lucide-react";
import logoTSA from "../assets/LogoTSAA.jpeg";

const NAV_ITEMS = [
  {
    name: "Home",
    path: "/",
    id: "home"
  },
  {
    name: "Business Group",
    path: "/business-group",
    id: "business-group"
  },
  {
    name: "Event",
    path: "/event",
    id: "event"
  },
  {
    name: "Activities",
    path: "/activities",
    id: "activities",
    dropdown: [
      {
        name: "News",
        description: "Official press dispatches & bulletins",
        path: "/news"
      },
      {
        name: "Internship",
        description: "Operational fellowship & traineeship",
        path: "/internship"
      }
    ]
  },
  {
    name: "Contact",
    path: "/contact",
    id: "contact"
  }
];

const getPathDefaultTheme = (path) => {
  const normalized = path.toLowerCase().replace(/\/+$/, "") || "/";
  if (normalized === "/business-group" || normalized === "/brands" || normalized === "/activities") {
    return "light";
  }
  return "dark";
};

export default function Navbar({ currentPath = "/", navigateTo, onOpenWorkModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [navTheme, setNavTheme] = useState(() => getPathDefaultTheme(currentPath));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState(null);

  const hoverTimeoutRef = useRef(null);
  const navContainerRef = useRef(null);

  // Close mobile menu and immediately resume smooth scrolling
  const closeMobileMenuAndResumeScroll = useCallback(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
    if (window.__lenis) {
      window.__lenis.start();
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.style.overflow = "hidden";
        if (window.__lenis) {
          window.__lenis.stop();
        }
      } else {
        document.body.style.overflow = "";
        if (window.__lenis) {
          window.__lenis.start();
        }
      }
      return next;
    });
  };

  // Dynamic Theme Detection: checks the section or element directly beneath navbar vertical center
  const evaluateNavbarTheme = useCallback(() => {
    if (mobileMenuOpen) return;
    setScrolled(window.scrollY > 20);

    const navbarCheckY = 42;
    let detectedTheme = null;

    try {
      const elements = document.elementsFromPoint(window.innerWidth / 2, navbarCheckY);
      for (const el of elements) {
        if (!el) continue;
        if (el.closest("header") || el.closest("#splash-screen") || el.closest("[data-modal]")) {
          continue;
        }
        const closestThemed = el.closest("[data-theme], [data-nav-theme]");
        if (closestThemed) {
          detectedTheme = closestThemed.getAttribute("data-theme") || closestThemed.getAttribute("data-nav-theme");
          break;
        }

        let cur = el;
        while (cur && cur !== document.body && cur !== document.documentElement) {
          const bg = window.getComputedStyle(cur).backgroundColor;
          if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
            const rgb = bg.match(/\d+/g);
            if (rgb && rgb.length >= 3) {
              const [r, g, b] = rgb.map(Number);
              const lum = 0.299 * r + 0.587 * g + 0.114 * b;
              detectedTheme = lum > 140 ? "light" : "dark";
              break;
            }
          }
          cur = cur.parentElement;
        }
        if (detectedTheme) break;
      }
    } catch {
      // Fallback silently if elementsFromPoint is restricted
    }

    if (!detectedTheme) {
      const themedElements = document.querySelectorAll("[data-theme], [data-nav-theme]");
      let smallestHeight = Infinity;
      for (const elem of themedElements) {
        const rect = elem.getBoundingClientRect();
        if (rect.top <= navbarCheckY && rect.bottom > navbarCheckY) {
          const height = rect.height;
          if (height < smallestHeight) {
            smallestHeight = height;
            detectedTheme = elem.getAttribute("data-theme") || elem.getAttribute("data-nav-theme");
          }
        }
      }
    }

    if (!detectedTheme) {
      detectedTheme = getPathDefaultTheme(currentPath);
    }

    setNavTheme(detectedTheme);
  }, [currentPath, mobileMenuOpen]);

  // Track scroll and route changes to evaluate theme
  useEffect(() => {
    evaluateNavbarTheme();

    const handleScroll = () => {
      evaluateNavbarTheme();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    const timeoutId = setTimeout(evaluateNavbarTheme, 60);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [evaluateNavbarTheme]);

  // Automatically close mobile menu when screen is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        closeMobileMenuAndResumeScroll();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen, closeMobileMenuAndResumeScroll]);

  // Keyboard accessibility: close dropdown and mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        closeMobileMenuAndResumeScroll();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeMobileMenuAndResumeScroll]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if a nav item matches the current page route
  const isItemActive = (item) => {
    if (item.path === "/") {
      return currentPath === "/" || currentPath === "/home";
    }
    if (item.path === "/business-group") {
      return currentPath === "/business-group" || currentPath === "/brands";
    }
    if (item.path === "/event") {
      return currentPath === "/event" || currentPath === "/events" || currentPath.startsWith("/events/");
    }
    if (item.path === "/activities") {
      return (
        currentPath === "/activities" ||
        currentPath.startsWith("/activities/") ||
        currentPath === "/news" ||
        currentPath === "/articles" ||
        currentPath === "/internship" ||
        currentPath === "/careers"
      );
    }
    if (item.path === "/contact") {
      return currentPath === "/contact";
    }
    return currentPath === item.path;
  };

  // Restrained hover handlers with brief grace period
  const handleMouseEnter = (itemId) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Main item click
  const handleMainItemClick = (item) => {
    setActiveDropdown(null);
    closeMobileMenuAndResumeScroll();
    if (navigateTo) {
      navigateTo(item.path);
    }
  };

  // Sub-item click from dropdown with safe anchor scroll
  const handleSubItemClick = (item, sub) => {
    setActiveDropdown(null);
    closeMobileMenuAndResumeScroll();

    const [targetPath, hash] = sub.path.split("#");
    const targetHash = hash || sub.hash;

    const normalizedCurrent = currentPath.toLowerCase().replace(/\/+$/, "") || "/";
    const normalizedTarget = (targetPath || "/").toLowerCase().replace(/\/+$/, "") || "/";

    if (normalizedCurrent === normalizedTarget) {
      if (targetHash) {
        const el = document.getElementById(targetHash);
        if (el) {
          if (window.__lenis) {
            window.__lenis.scrollTo(el, { offset: -74 });
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
          if (window.history.pushState) {
            window.history.pushState(null, "", "#" + targetHash);
          }
        }
      }
    } else {
      if (navigateTo) {
        navigateTo(normalizedTarget);
        if (targetHash) {
          setTimeout(() => {
            const el = document.getElementById(targetHash);
            if (el) {
              if (window.__lenis) {
                window.__lenis.scrollTo(el, { offset: -74 });
              } else {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }
          }, 180);
        }
      }
    }
  };

  const handleLogoClick = () => {
    setActiveDropdown(null);
    closeMobileMenuAndResumeScroll();
    if (navigateTo) {
      navigateTo("/");
    }
  };

  const handleCtaClick = () => {
    setActiveDropdown(null);
    closeMobileMenuAndResumeScroll();
    if (navigateTo) {
      navigateTo("/contact");
    } else if (onOpenWorkModal) {
      onOpenWorkModal();
    }
  };

  const isLight = navTheme === "light";

  return (
    <header
      ref={navContainerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ease-out ${
        isLight
          ? scrolled || mobileMenuOpen
            ? "bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            : "bg-white/90 backdrop-blur-xs border-b border-slate-200/80"
          : scrolled || mobileMenuOpen
            ? "bg-[#071731]/98 backdrop-blur-md border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
            : "bg-transparent border-b border-white/10"
      }`}
    >
      {/* Top Navbar Bar (76px sm:80px) */}
      <div className="h-[76px] sm:h-[80px] flex items-center">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 w-full flex items-center justify-between relative">

        {/* Left: TSA Corporate Brand Emblem & Typography */}
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] rounded py-1 shrink-0 max-w-[200px] xs:max-w-none"
          aria-label="PT Tricatha Sempiternal Asia Homepage"
        >
          {/* Logo Badge */}
          <div
            className={`w-9 h-9 rounded flex items-center justify-center shrink-0 transition-colors duration-200 p-0.5 ${isLight
                ? "bg-[#10264A] border border-[#10264A]"
                : "bg-white border border-white/20"
              }`}
          >
            <img src={logoTSA} alt="TSA Official Emblem" className="w-full h-full object-cover rounded-[2px]" />
          </div>

          <div className="flex flex-col min-w-0">
            <span
              className={`font-heading font-bold text-[11px] sm:text-sm tracking-tight leading-none transition-colors duration-200 truncate ${isLight ? "text-[#10264A]" : "text-white"
                }`}
            >
              TRICHATA SEMPITERNAL ASIA
            </span>
            <span
              className={`font-mono text-[9px] tracking-widest uppercase font-medium mt-1 transition-colors duration-200 hidden sm:block ${isLight ? "text-slate-500" : "text-slate-400"
                }`}
            >
              CORPORATE EVENT ORGANIZER · JAKARTA
            </span>
          </div>
        </button>

        {/* Center: Desktop Corporate Navigation */}
        <nav
          className="hidden lg:flex items-center gap-7 xl:gap-9 text-[13px] font-medium tracking-[0.01em]"
          aria-label="Primary Corporate Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = isItemActive(item);
            const hasDropdown = Boolean(item.dropdown);
            const isDropdownOpen = activeDropdown === item.id;

            return (
              <div
                key={item.id}
                className="relative py-6 flex items-center"
                onMouseEnter={() => (hasDropdown ? handleMouseEnter(item.id) : handleMouseEnter(null))}
                onMouseLeave={handleMouseLeave}
              >
                {/* Main Nav Button */}
                <button
                  onClick={() => handleMainItemClick(item)}
                  aria-current={isActive ? "page" : undefined}
                  aria-expanded={hasDropdown ? isDropdownOpen : undefined}
                  aria-haspopup={hasDropdown ? "true" : undefined}
                  className={`inline-flex items-center gap-1.5 py-1 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] relative ${isLight
                      ? isActive
                        ? "text-[#10264A] font-semibold"
                        : "text-slate-700 hover:text-[#10264A]"
                      : isActive
                        ? "text-white font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                >
                  <span>{item.name}</span>

                  {hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen
                          ? "rotate-180 text-[#C8102E]"
                          : isLight
                            ? "text-slate-400 group-hover:text-[#10264A]"
                            : "text-slate-400 group-hover:text-white"
                        }`}
                    />
                  )}

                  {/* Active Indicator: Thin Red Underline */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-line"
                      className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-[#C8102E]"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>

                {/* Compact Contextual Dropdown Panel (Directly Under Nav Item) */}
                {hasDropdown && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className={`absolute top-[calc(100%-8px)] left-0 w-[280px] sm:w-[290px] rounded-lg border shadow-[0_10px_28px_rgba(16,38,74,0.08)] p-2 z-50 text-left transition-colors duration-150 ${isLight
                            ? "bg-white border-slate-200/90 text-[#10264A]"
                            : "bg-[#0B1E3F] border-white/12 text-white shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
                          }`}
                        role="menu"
                        aria-label={`${item.name} submenu`}
                      >
                        <div className="space-y-0.5">
                          {item.dropdown.map((sub, idx) => (
                            <button
                              key={idx}
                              role="menuitem"
                              onClick={() => handleSubItemClick(item, sub)}
                              className={`w-full text-left px-3 py-2.5 rounded-md transition-all duration-150 cursor-pointer group flex flex-col space-y-0.5 ${isLight
                                  ? "hover:bg-slate-50 text-[#10264A]"
                                  : "hover:bg-[#10264A]/80 text-white"
                                }`}
                            >
                              <div className="flex items-center justify-between">
                                <span
                                  className={`text-[13px] font-semibold tracking-normal transition-transform duration-150 group-hover:translate-x-0.5 ${isLight ? "text-[#10264A] group-hover:text-[#C8102E]" : "text-white group-hover:text-[#C8102E]"
                                    }`}
                                >
                                  {sub.name}
                                </span>
                                <ArrowRight
                                  className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 text-[#C8102E]"
                                />
                              </div>
                              {sub.description && (
                                <span
                                  className={`text-[11px] leading-tight transition-colors ${isLight ? "text-slate-500" : "text-slate-400"
                                    }`}
                                >
                                  {sub.description}
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Red CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleCtaClick}
            className="bg-[#C8102E] hover:bg-[#A50D26] text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase px-4 sm:px-5 py-2.5 rounded transition-all duration-200 cursor-pointer shadow-xs hidden sm:inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
          >
            <span>Consult Secretariat</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/90" />
          </button>

          {/* Mobile Hamburger Button (Min 48px touch target for phones) */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2.5 min-w-[48px] min-h-[48px] flex items-center justify-center rounded transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] cursor-pointer touch-manipulation ${
              isLight
                ? "text-[#10264A] hover:bg-slate-100 active:bg-slate-200"
                : "text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/15"
            }`}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isLight ? "text-[#10264A]" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isLight ? "text-[#10264A]" : "text-white"}`} />
            )}
          </button>
        </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer with Accordion Support */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Dimmer: Dismiss menu on background tap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={closeMobileMenuAndResumeScroll}
              className="lg:hidden fixed inset-0 top-[76px] sm:top-[80px] bg-black/60 backdrop-blur-xs z-40"
              aria-hidden="true"
            />

            {/* Mobile Drawer Content */}
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={`lg:hidden relative z-50 border-t max-h-[calc(100vh-76px)] max-h-[calc(100dvh-76px)] sm:max-h-[calc(100vh-80px)] sm:max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain shadow-2xl transition-colors duration-200 ${
                isLight
                  ? "bg-white border-slate-200 text-[#10264A]"
                  : "bg-[#071731] border-white/10 text-white"
              }`}
            >
              <div className="max-w-[1520px] mx-auto px-4 sm:px-8 py-5 space-y-4">
                <ul className="space-y-1.5 text-sm font-medium" role="menu">
                  {NAV_ITEMS.map((item) => {
                    const isActive = isItemActive(item);
                    const hasDropdown = Boolean(item.dropdown);
                    const isExpanded = mobileExpandedGroup === item.id;

                    return (
                      <li
                        key={item.id}
                        role="none"
                        className={`border-b pb-1.5 ${isLight ? "border-slate-100" : "border-white/5"}`}
                      >
                        {hasDropdown ? (
                          /* Tapping dropdown item toggles accordion on mobile */
                          <button
                            type="button"
                            onClick={() => setMobileExpandedGroup(isExpanded ? null : item.id)}
                            aria-expanded={isExpanded}
                            className={`w-full text-left py-3 px-3 rounded flex items-center justify-between transition-colors touch-manipulation cursor-pointer min-h-[48px] ${
                              isActive
                                ? isLight
                                  ? "bg-slate-100 text-[#10264A] font-semibold border-l-2 border-[#C8102E]"
                                  : "bg-[#0B1E3F] text-white font-semibold border-l-2 border-[#C8102E]"
                                : isLight
                                  ? "text-slate-700 hover:text-[#10264A] hover:bg-slate-50"
                                  : "text-slate-300 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <span className="font-heading text-[15px] font-medium">{item.name}</span>
                            <div className="flex items-center gap-2">
                              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />}
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isExpanded ? "rotate-180 text-[#C8102E]" : "text-slate-400"
                                }`}
                              />
                            </div>
                          </button>
                        ) : (
                          /* Direct link (Home, Contact) */
                          <button
                            type="button"
                            role="menuitem"
                            onClick={() => handleMainItemClick(item)}
                            aria-current={isActive ? "page" : undefined}
                            className={`w-full text-left py-3 px-3 rounded flex items-center justify-between transition-colors touch-manipulation cursor-pointer min-h-[48px] ${
                              isActive
                                ? isLight
                                  ? "bg-slate-100 text-[#10264A] font-semibold border-l-2 border-[#C8102E]"
                                  : "bg-[#0B1E3F] text-white font-semibold border-l-2 border-[#C8102E]"
                                : isLight
                                  ? "text-slate-700 hover:text-[#10264A] hover:bg-slate-50"
                                  : "text-slate-300 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <span className="font-heading text-[15px] font-medium">{item.name}</span>
                            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />}
                          </button>
                        )}

                        {/* Accordion Submenu Items */}
                        {hasDropdown && isExpanded && (
                          <div
                            className={`pl-3 pr-2 py-2 space-y-1 mt-1 mb-2 rounded border-l-2 ${
                              isLight
                                ? "bg-slate-50 border-slate-300"
                                : "bg-[#0B1E3F]/80 border-slate-700"
                            }`}
                          >
                            {item.dropdown.map((sub, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => handleSubItemClick(item, sub)}
                                className={`w-full text-left py-2.5 px-3 min-h-[44px] flex items-center justify-between rounded transition-colors touch-manipulation cursor-pointer ${
                                  isLight
                                    ? "text-slate-700 hover:text-[#10264A] hover:bg-white active:bg-slate-200"
                                    : "text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10"
                                }`}
                              >
                                <div className="flex flex-col pr-2">
                                  <span className="font-medium text-xs sm:text-sm">{sub.name}</span>
                                  {sub.description && (
                                    <span
                                      className={`text-[11px] mt-0.5 leading-tight ${
                                        isLight ? "text-slate-500" : "text-slate-400"
                                      }`}
                                    >
                                      {sub.description}
                                    </span>
                                  )}
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              </button>
                            ))}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className={`pt-3 border-t space-y-2.5 ${isLight ? "border-slate-200" : "border-white/10"}`}>
                  <button
                    type="button"
                    onClick={handleCtaClick}
                    className="w-full bg-[#C8102E] hover:bg-[#A50D26] active:bg-[#8A0A1F] text-white text-xs font-semibold tracking-wider uppercase py-3.5 px-4 rounded transition-colors cursor-pointer flex items-center justify-center gap-2 min-h-[48px] shadow-sm touch-manipulation"
                  >
                    <span>Consult Secretariat</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
