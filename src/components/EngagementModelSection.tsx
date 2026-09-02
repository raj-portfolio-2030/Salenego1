import React, { useState } from 'react';
import { ENGAGEMENT_PHASES } from '../data/content';
import { Clock, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const EngagementModelSection: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const engagementFactors = [
    'Product maturity',
    'Target market',
    'Commercial scope',
    'Sales cycle',
    'Level of execution ownership',
    'Tooling',
    'Revenue Operations requirements',
    'Existing internal team',
  ];

  return (
    <section id="how-we-engage" className="py-20 lg:py-28 bg-white border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            HOW WE ENGAGE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight">
            Build the Commercial Motion. Execute It. Learn From the Market.
          </h2>
        </div>

        {/* 4 Interactive Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ENGAGEMENT_PHASES.map((phase, idx) => {
            const isSelected = activePhaseIndex === idx;
            return (
              <div
                key={phase.phase}
                onClick={() => setActivePhaseIndex(idx)}
                className={`rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#EDF2FE] border-[#BAC8FF] shadow-md -translate-y-1'
                    : 'bg-[#F7F7F4] border-[#E8EAEE] hover:bg-white hover:border-[#D6D9E0]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#3B5BDB] bg-white px-2 py-0.5 rounded border border-[#E8EAEE]">
                      {phase.phase}
                    </span>
                    <span className="text-[11px] font-semibold text-[#5F6673] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#3B5BDB]" />
                      {phase.timing}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#22252B] mb-4">
                    {phase.title}
                  </h3>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-bold text-[#7A8190] uppercase tracking-wider block">
                      Focus:
                    </span>
                    <ul className="space-y-1">
                      {phase.focus.map((item) => (
                        <li key={item} className="text-xs text-[#5F6673] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8EAEE]">
                  <span className="text-[10px] font-bold text-[#7A8190] uppercase block mb-0.5">
                    Phase Output:
                  </span>
                  <span className="text-xs font-bold text-[#3B5BDB] block">
                    {phase.output}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote on Sales Cycle */}
        <div className="p-4 rounded-xl bg-[#F7F7F4] border border-[#E8EAEE] mb-16 text-center">
          <p className="text-xs sm:text-sm text-[#5F6673]">
            <strong className="text-[#22252B]">Note:</strong> Sales cycles and commercial outcomes vary by product, market, buying process and customer readiness. SalesNego does not manufacture unsupported revenue forecasts.
          </p>
        </div>

        {/* Commercial Engagement Model Block */}
        <div id="engagement-model" className="bg-[#F7F7F4] border border-[#E8EAEE] rounded-2xl p-7 sm:p-10 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-2">
              ENGAGEMENT MODEL
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#22252B] mb-3">
              A Commercial Partnership, Not a Pay-Per-Meeting Model.
            </h3>
            <p className="text-sm sm:text-base text-[#5F6673] leading-relaxed">
              SalesNego typically works through a monthly commercial execution retainer with an agreed performance component where appropriate.
            </p>
          </div>

          <div className="mb-8">
            <span className="text-xs font-bold text-[#22252B] uppercase tracking-wider block mb-3">
              The engagement structure depends on:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {engagementFactors.map((factor) => (
                <div
                  key={factor}
                  className="bg-white p-3 rounded-lg border border-[#E8EAEE] text-xs font-semibold text-[#22252B] flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3B5BDB] flex-shrink-0" />
                  <span className="truncate">{factor}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#E8EAEE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm font-semibold text-[#22252B]">
              SalesNego maintains a deliberately limited active client portfolio to preserve founder-level commercial involvement.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3B5BDB] hover:bg-[#2F49B0] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm"
            >
              <span>Discuss Commercial Terms</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
