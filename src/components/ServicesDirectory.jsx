import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { categorizedServices } from "../data/tsaData";

export default function ServicesDirectory({ onOpenWorkModal }) {
  const [expandedServiceName, setExpandedServiceName] = useState("Event Strategy");

  const toggleService = (name) => {
    setExpandedServiceName(expandedServiceName === name ? null : name);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0A1F44] text-white border-b border-white/10">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Practice Areas &amp; Capabilities
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
            Delivering sovereign advisory, monumental trade exhibitions, corporate shareholder assemblies, and turnkey 4K broadcast cinema.
          </p>
        </div>

        {/* 4 Practice Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {categorizedServices.map((cat) => (
            <div
              key={cat.categoryTitle}
              className="p-7 bg-[#0E2552] rounded border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/20 transition-colors"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-white">
                  {cat.categoryTitle}
                </h3>

                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  {cat.categoryDescription}
                </p>

                {/* Services under this Category */}
                <div className="space-y-3 pt-3">
                  {cat.services.map((svc) => {
                    const isExpanded = expandedServiceName === svc.name;
                    return (
                      <div
                        key={svc.name}
                        onClick={() => toggleService(svc.name)}
                        className={`p-3.5 rounded border transition-colors cursor-pointer ${
                          isExpanded
                            ? "bg-[#071731] border-white/25 text-white"
                            : "bg-[#0A1F44] border-white/8 text-slate-200 hover:border-white/18"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-heading text-sm font-semibold text-white">
                            {svc.name}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-[#C8102E] shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                        </div>

                        {isExpanded && (
                          <p className="text-xs text-slate-300 font-sans leading-relaxed pt-2.5 mt-2 border-t border-white/10">
                            {svc.scope}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={onOpenWorkModal}
                  className="w-full btn-editorial-navy text-xs justify-center"
                >
                  <span>Inquire Practice Brief</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
