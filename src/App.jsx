import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Dedicated Pages for Each Route
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BrandsPage from "./pages/BrandsPage";
import EventManagementPage from "./pages/EventManagementPage";
import PortfolioPage from "./pages/PortfolioPage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import ArticlesPage from "./pages/ArticlesPage";
import CareersPage from "./pages/CareersPage";
import InternshipPage from "./pages/InternshipPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";

import HudMarginalia from "./components/HudMarginalia";

const VALID_ROUTES = [
  "/",
  "/home",
  "/about",
  "/business-group",
  "/brands",
  "/services",
  "/event-management",
  "/portfolio",
  "/events",
  "/articles",
  "/careers",
  "/internship",
  "/faq",
  "/contact"
];

function isRouteValid(path) {
  if (!path) return false;
  const normalized = path.toLowerCase().replace(/\/+$/, "") || "/";
  if (normalized.startsWith("/events/") && normalized.length > 8) {
    return true;
  }
  return VALID_ROUTES.includes(normalized);
}

// Helper to sanitize incoming pathname or hash
function getInitialRoute() {
  const pathname = window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";
  const hash = window.location.hash.toLowerCase().replace("#", "").replace(/\/+$/, "");

  if (isRouteValid(pathname)) {
    return pathname;
  }
  if (hash && isRouteValid(`/${hash}`)) {
    return `/${hash}`;
  }
  // Default to root home page
  return "/";
}


export default function App() {
  const [currentPath, setCurrentPath] = useState(getInitialRoute);

  // Initialize Lenis smooth scroll and route synchronization on mount
  useEffect(() => {
    const initialRoute = getInitialRoute();
    if (window.location.pathname !== initialRoute) {
      window.history.replaceState(null, "", initialRoute);
    }
    setCurrentPath(initialRoute);

    // Initialize Lenis smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);
    window.__lenis = lenis;

    // Support Browser Back and Forward buttons (Popstate)
    const handlePopState = () => {
      const activePath = getInitialRoute();
      setCurrentPath(activePath);
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      window.__lenis = null;
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Route navigation handler - switches page and updates URL without section scrolling
  const navigateTo = (path) => {
    const normalizedPath = path.toLowerCase().replace(/\/+$/, "") || "/";
    const targetRoute = isRouteValid(normalizedPath) ? normalizedPath : "/events";

    if (window.location.pathname !== targetRoute) {
      window.history.pushState(null, "", targetRoute);
    }
    setCurrentPath(targetRoute);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  // Render dedicated page component based on route
  const renderCurrentPage = () => {
    // Dynamic event detail route matching /events/:slug
    if (currentPath.startsWith("/events/") && currentPath.length > 8) {
      const slug = currentPath.substring(8);
      return <EventDetailPage key={slug} slug={slug} navigateTo={navigateTo} />;
    }

    switch (currentPath) {
      case "/":
      case "/home":
        return <HomePage key="home" navigateTo={navigateTo} />;
      case "/about":
        return <AboutPage key="about" navigateTo={navigateTo} />;
      case "/business-group":
      case "/brands":
        return <BrandsPage key="business-group" navigateTo={navigateTo} />;
      case "/services":
      case "/event-management":
        return <EventManagementPage key="services" navigateTo={navigateTo} />;
      case "/portfolio":
        return <PortfolioPage key="portfolio" navigateTo={navigateTo} />;
      case "/articles":
        return <ArticlesPage key="articles" navigateTo={navigateTo} />;
      case "/careers":
        return <CareersPage key="careers" navigateTo={navigateTo} />;
      case "/internship":
        return <InternshipPage key="internship" navigateTo={navigateTo} />;
      case "/contact":
        return <ContactPage key="contact" navigateTo={navigateTo} />;
      case "/faq":
        return <FAQPage key="faq" navigateTo={navigateTo} />;
      case "/events":
        return <EventsPage key="events" navigateTo={navigateTo} />;
      default:
        return <HomePage key="home" navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen flex flex-col selection:bg-[#C8102E] selection:text-white relative">
      {/* Live HUD Marginalia (Cursor Coordinates & Architectural HUD) */}
      <HudMarginalia />

      {/* 1. Universal Consistent Navbar across all pages */}
      <Navbar currentPath={currentPath} navigateTo={navigateTo} />

      {/* 2. Route-Based Page Container with Smooth Fade Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Universal Consistent Footer across all pages */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
