import React from 'react';
import { WHO_WE_HELP } from '../data/content';
import { Layers, UserCheck, Globe2, Building2 } from 'lucide-react';

export const WhoWeHelp: React.FC = () => {
  const icons = [Layers, UserCheck, Globe2, Building2];

  return (
    <section id="who-we-help" className="py-20 bg-white border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            WHO WE HELP
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight">
            Built for B2B Technology Companies That Need Commercial Execution
          </h2>
        </div>

        {/* 4 Clean Light Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHO_WE_HELP.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.number}
                className="bg-[#F7F7F4] hover:bg-white rounded-2xl p-6 sm:p-7 border border-[#E8EAEE] hover:border-[#D6D9E0] hover:shadow-[0_8px_24px_rgba(34,37,43,0.06)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E8EAEE] flex items-center justify-center text-[#3B5BDB]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#7A8190]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#22252B] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5F6673] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {item.note && (
                  <div className="mt-4 pt-4 border-t border-[#E8EAEE]">
                    <span className="text-[11px] font-semibold text-[#7A8190] uppercase block mb-1">
                      Supporting Note
                    </span>
                    <p className="text-[12px] text-[#5F6673] italic leading-snug">
                      {item.note}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
