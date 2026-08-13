import React from "react";
import ScrollExpand from "./ScrollExpand";

export default function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="relative bg-[#071A2B]">
      <ScrollExpand scrollToSection={scrollToSection} />
    </section>
  );
}
