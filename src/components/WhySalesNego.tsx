import React from 'react';
import { WHY_SALESNEGO } from '../data/content';
import { UserCheck, Shield, BookOpen, SearchCheck, Layers, Award } from 'lucide-react';

export const WhySalesNego: React.FC = () => {
  const icons = [UserCheck, Shield, BookOpen, SearchCheck, Layers, Award];

  return (
    <section id="why-salesnego" className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            WHY SALESNEGO
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight">
            Built for Depth, Not Volume.
          </h2>
        </div>

        {/* Asymmetric Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_SALESNEGO.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.number}
                className="bg-white rounded-2xl p-7 border border-[#E8EAEE] shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-[#D6D9E0] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#EDF2FE] text-[#3B5BDB] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#7A8190]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#22252B] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5F6673] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
