import React from 'react';
import { INDUSTRY_EXPERIENCE, TECH_SOLUTION_CHIPS, COMMERCIAL_CAPABILITIES_CHIPS } from '../data/content';
import { Layers, Cpu, FlaskConical, Shield, Zap, Factory } from 'lucide-react';

export const IndustryExperienceSection: React.FC = () => {
  const icons = [Layers, Cpu, FlaskConical, Shield, Zap, Factory];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            INDUSTRY &amp; TECHNOLOGY EXPERIENCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight mb-4">
            Commercial Experience Across B2B Technology Markets
          </h2>
          <p className="text-base text-[#5F6673] leading-relaxed">
            SalesNego brings commercial experience across SaaS, enterprise technology and specialist industry solutions where selling requires product understanding, consultative discovery and structured commercial execution.
          </p>
        </div>

        {/* 6 Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {INDUSTRY_EXPERIENCE.map((ind, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={ind.number}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8EAEE] shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-[#D6D9E0] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EDF2FE] text-[#3B5BDB] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#7A8190]">
                      {ind.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#22252B] mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F6673] leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chips Section: Technology Experience & Commercial Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Technology & Solution Experience Chips */}
          <div className="bg-white rounded-2xl p-7 border border-[#E8EAEE] shadow-sm">
            <div className="mb-4">
              <span className="text-xs font-bold text-[#3B5BDB] uppercase tracking-wider block mb-1">
                Domain Spectrum
              </span>
              <h3 className="text-lg font-bold text-[#22252B]">
                Technology &amp; Solution Experience
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {TECH_SOLUTION_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] hover:bg-[#EDF2FE] border border-[#E8EAEE] text-xs font-semibold text-[#22252B] transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Commercial Capabilities Chips */}
          <div className="bg-white rounded-2xl p-7 border border-[#E8EAEE] shadow-sm">
            <div className="mb-4">
              <span className="text-xs font-bold text-[#FF8A3D] uppercase tracking-wider block mb-1">
                Execution Spectrum
              </span>
              <h3 className="text-lg font-bold text-[#22252B]">
                Commercial Capabilities
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {COMMERCIAL_CAPABILITIES_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] hover:bg-[#FFF4ED] border border-[#E8EAEE] text-xs font-semibold text-[#22252B] transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
