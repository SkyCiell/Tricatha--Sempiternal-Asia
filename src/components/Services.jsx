import React, { useState } from "react";
import { motion } from "framer-motion";
import { servicesList } from "../data/tsaData";
import { ArrowUpRight } from "lucide-react";
import ServiceModal from "./ServiceModal";

export default function Services({ scrollToSection, onPreselectService }) {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleInquire = (serviceTitle) => {
    if (onPreselectService) onPreselectService(serviceTitle);
    scrollToSection("contact");
  };

  return (
    <section id="services" className="py-28 bg-[#0B0F17] text-[#F8FAFC] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-[#3B82F6] uppercase tracking-widest mb-2">
              PRACTICE & SERVICES
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#F8FAFC]">
              CAPABILITIES & PRACTICES
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-normal max-w-md">
            Integrated advisory, technological deployment, creative scenography, and diplomatic execution.
          </p>
        </div>

        {/* Clean Editorial List-Based Services Layout */}
        <div className="space-y-4">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onClick={() => handleServiceClick(service)}
              className="group p-6 sm:p-8 bg-[#111827] border border-slate-800 hover:border-[#3B82F6]/70 rounded-2xl transition-all duration-200 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* Left Column: Category & Title */}
              <div className="lg:w-5/12">
                <span className="font-mono text-[11px] text-[#3B82F6] font-semibold uppercase tracking-wider block mb-1">
                  {service.category}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors uppercase tracking-tight">
                  {service.title}
                </h3>
              </div>

              {/* Middle Column: Existing Short Description */}
              <div className="lg:w-5/12">
                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Right Column: Subtle Action Icon */}
              <div className="lg:w-2/12 flex items-center lg:justify-end">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 group-hover:bg-[#3B82F6] text-slate-300 group-hover:text-white flex items-center justify-center transition-all shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectContact={handleInquire}
      />
    </section>
  );
}
