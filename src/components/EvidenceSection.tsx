import React from 'react';
import { ArrowRight, CheckCircle2, HelpCircle, FileText, SearchCheck } from 'lucide-react';

export const EvidenceSection: React.FC = () => {
  const evidenceChips = [
    { title: 'Documented Fact', desc: 'Direct customer or public filing record', icon: FileText, color: '#3B5BDB', bg: 'bg-[#EDF2FE]', border: 'border-[#BAC8FF]' },
    { title: 'Evidence-Backed Market Indicator', desc: 'Verified hiring or technology shift', icon: SearchCheck, color: '#FF8A3D', bg: 'bg-[#FFF4ED]', border: 'border-[#FFD8BF]' },
    { title: 'Commercial Hypothesis', desc: 'Synthesized potential value proposition', icon: HelpCircle, color: '#3B5BDB', bg: 'bg-[#EDF2FE]', border: 'border-[#BAC8FF]' },
    { title: 'Requires Customer Validation', desc: 'Discovery topic to verify on call', icon: CheckCircle2, color: '#FF8A3D', bg: 'bg-[#FFF4ED]', border: 'border-[#FFD8BF]' },
  ];

  return (
    <section id="evidence-before-assumption" className="py-20 bg-[#FAF9F6] border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            EVIDENCE-LED SELLING
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight mb-4">
            Evidence Before Assumption.
          </h2>
          <p className="text-base text-[#5F6673] leading-relaxed mb-2">
            SalesNego does not treat a company as an opportunity simply because it matches an industry filter.
          </p>
          <p className="text-base font-semibold text-[#22252B]">
            Evidence earns priority. Discovery earns qualification.
          </p>
        </div>

        {/* Visual Framework */}
        <div className="bg-white border border-[#E8EAEE] rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 shadow-sm">
          <span className="text-xs font-bold text-[#7A8190] uppercase tracking-wider block mb-4">
            Framework
          </span>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 bg-[#FAF9F6] rounded-xl border border-[#E8EAEE]">
            <div className="flex-1 text-center sm:text-left bg-white p-4 rounded-lg border border-[#E8EAEE] w-full sm:w-auto">
              <span className="text-[10px] font-mono text-[#3B5BDB] font-bold block">01</span>
              <span className="text-sm font-bold text-[#22252B]">FACT</span>
              <span className="text-[11px] text-[#5F6673] block mt-0.5">Verified public or data signal</span>
            </div>

            <ArrowRight className="w-5 h-5 text-[#FF8A3D] hidden sm:block flex-shrink-0" />

            <div className="flex-1 text-center sm:text-left bg-white p-4 rounded-lg border border-[#E8EAEE] w-full sm:w-auto">
              <span className="text-[10px] font-mono text-[#FF8A3D] font-bold block">02</span>
              <span className="text-sm font-bold text-[#22252B]">HYPOTHESIS</span>
              <span className="text-[11px] text-[#5F6673] block mt-0.5">Commercial problem thesis</span>
            </div>

            <ArrowRight className="w-5 h-5 text-[#FF8A3D] hidden sm:block flex-shrink-0" />

            <div className="flex-1 text-center sm:text-left bg-white p-4 rounded-lg border border-[#E8EAEE] w-full sm:w-auto">
              <span className="text-[10px] font-mono text-[#3B5BDB] font-bold block">03</span>
              <span className="text-sm font-bold text-[#22252B]">DISCOVERY QUESTION</span>
              <span className="text-[11px] text-[#5F6673] block mt-0.5">Validation with executive buyer</span>
            </div>
          </div>
        </div>

        {/* 4 Small Evidence-State Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {evidenceChips.map((chip) => (
            <div
              key={chip.title}
              className={`p-4 rounded-xl border bg-white ${chip.border} shadow-xs flex items-start gap-3`}
            >
              <div className={`w-8 h-8 rounded-lg ${chip.bg} flex items-center justify-center flex-shrink-0`}>
                <chip.icon className="w-4 h-4" style={{ color: chip.color }} />
              </div>
              <div>
                <span className="text-xs font-bold text-[#22252B] block">
                  {chip.title}
                </span>
                <span className="text-[11px] text-[#5F6673] block mt-0.5">
                  {chip.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
