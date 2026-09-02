import React, { useState } from 'react';
import { FOUNDER_TRACK_RECORD, CaseStudy } from '../data/content';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { CaseStudyModal } from './CaseStudyModal';

export const FounderTrackRecord: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="founder-track-record" className="py-20 lg:py-28 bg-white border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            FOUNDER COMMERCIAL TRACK RECORD
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight mb-4">
            From Market Entry to Closed Business.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6673] leading-relaxed">
            Selected examples of founder-led commercial execution across SaaS, enterprise technology and IT services, covering outbound acquisition, discovery, solution alignment, negotiation, closure and account growth.
          </p>
        </div>

        {/* 4 Flash Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDER_TRACK_RECORD.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF9F6] hover:bg-white rounded-2xl p-6 sm:p-7 border border-[#E8EAEE] hover:border-[#D6D9E0] hover:shadow-[0_8px_24px_rgba(32,38,44,0.05)] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Logo & Category */}
                <div className="flex items-center justify-between mb-5 h-10">
                  {item.logoUrl ? (
                    <img
                      src={item.logoUrl}
                      alt={item.title}
                      className="h-8 w-auto max-w-[120px] object-contain"
                    />
                  ) : (
                    <span className="font-bold text-base text-[#22252B]">{item.title}</span>
                  )}
                  <span className="text-[10px] font-mono text-[#7A8190] bg-white px-2 py-0.5 rounded border border-[#E8EAEE]">
                    Verified
                  </span>
                </div>

                <span className="text-xs font-bold text-[#3B5BDB] block mb-1">
                  {item.industry}
                </span>

                <h3 className="text-lg font-bold text-[#22252B] mb-2">
                  {item.title}
                </h3>

                <div className="text-[11px] font-medium text-[#5F6673] bg-white px-2.5 py-1 rounded border border-[#E8EAEE] mb-4 inline-block">
                  {item.type}
                </div>

                <div className="mb-6">
                  <span className="text-[11px] font-bold text-[#7A8190] uppercase tracking-wider block mb-1">
                    Commercial Challenge
                  </span>
                  <p className="text-xs text-[#5F6673] leading-relaxed line-clamp-3">
                    {item.commercialChallenge}
                  </p>
                </div>
              </div>

              {/* View Case Study Button */}
              <button
                type="button"
                onClick={() => setSelectedCase(item)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white group-hover:bg-[#3B5BDB] text-[#22252B] group-hover:text-white border border-[#E8EAEE] group-hover:border-[#3B5BDB] text-xs font-bold rounded-lg transition-all shadow-xs"
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
