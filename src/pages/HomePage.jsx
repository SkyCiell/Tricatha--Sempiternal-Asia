import React from "react";
import LandingHero from "../components/LandingHero";
import LandingAbout from "../components/LandingAbout";
import LandingBrands from "../components/LandingBrands";
import LandingBusiness from "../components/LandingBusiness";
import LandingFeaturedEvents from "../components/LandingFeaturedEvents";
import Leadership from "../components/Leadership";

export default function HomePage({ navigateTo, onOpenWorkModal }) {
  return (
    <div className="bg-[#FAF9F6] text-[#071731] font-sans selection:bg-[#C8102E] selection:text-white">
      {/* 1. HERO / TSA INTRODUCTION */}
      <LandingHero
        navigateTo={navigateTo}
        onOpenWorkModal={onOpenWorkModal}
      />

      {/* 2. ABOUT US */}
      <LandingAbout
        navigateTo={navigateTo}
      />

      {/* 3. OUR BRANDS */}
      <LandingBrands
        navigateTo={navigateTo}
      />

      {/* 4. OUR BUSINESS */}
      <LandingBusiness
        navigateTo={navigateTo}
      />

      {/* 5. FEATURED EVENTS */}
      <LandingFeaturedEvents
        navigateTo={navigateTo}
      />

      {/* 6. MEET OUR TEAM */}
      <Leadership />
    </div>
  );
}
