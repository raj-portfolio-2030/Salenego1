import React, { useState } from 'react';
import { SELECTED_DEAL_EXPERIENCE, CaseStudy } from '../data/content';
import { ArrowRight, Lock, ShieldCheck } from 'lucide-react';
import { CaseStudyModal } from './CaseStudyModal';

export const SelectedDealsSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="selected-deals" className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            SELECTED COMMERCIAL EXPERIENCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight mb-4">
            Complex Technology Requirements. Structured Commercial Execution.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6673] leading-relaxed">
            Selected anonymized examples of technology opportunities originated and progressed through end-to-end B2B sales execution.
          </p>
        </div>

        {/* 8 Flash Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SELECTED_DEAL_EXPERIENCE.map((deal, idx) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8EAEE] hover:border-[#D6D9E0] hover:shadow-[0_8px_24px_rgba(32,38,44,0.05)] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#3B5BDB] truncate max-w-[200px]">
                    {deal.industry}
                  </span>
                  <span className="text-[10px] font-mono text-[#7A8190] bg-[#FAF9F6] px-2 py-0.5 rounded border border-[#E8EAEE] flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5" />
                    Case 0{idx + 1}
                  </span>
                </div>

                <div className="text-[11px] font-medium text-[#5F6673] bg-[#FAF9F6] px-2.5 py-1 rounded border border-[#E8EAEE] mb-4 inline-block">
                  {deal.type}
                </div>

                <div className="mb-4">
                  <span className="text-[11px] font-bold text-[#7A8190] uppercase tracking-wider block mb-1">
                    Requirement
                  </span>
                  <p className="text-xs font-semibold text-[#22252B] leading-relaxed">
                    {deal.requirement}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-[11px] font-bold text-[#7A8190] uppercase tracking-wider block mb-1">
                    Commercial Challenge
                  </span>
                  <p className="text-xs text-[#5F6673] leading-relaxed">
                    {deal.commercialChallenge}
                  </p>
                </div>
              </div>

              {/* View Case Study CTA */}
              <button
                type="button"
                onClick={() => setSelectedCase(deal)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FAF9F6] group-hover:bg-[#3B5BDB] text-[#22252B] group-hover:text-white border border-[#E8EAEE] group-hover:border-[#3B5BDB] text-xs font-bold rounded-lg transition-all shadow-xs"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
      />
    </section>
  );
};
