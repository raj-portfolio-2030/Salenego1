import React, { useState, useEffect, useRef } from 'react';
import { Filter, Layers, Target, CheckCircle2, ArrowRight, ShieldCheck, Database, Search } from 'lucide-react';

interface StageInfo {
  number: string;
  name: string;
  tagline: string;
  volumeState: string;
  countLabel: string;
  details: string[];
}

const STAGES: StageInfo[] = [
  {
    number: '01',
    name: 'MARKET UNIVERSE',
    tagline: 'Start broad. Understand the landscape.',
    volumeState: 'MANY ACCOUNTS',
    countLabel: 'Total Addressable Landscape',
    details: ['Industry Segments', 'Geography Constraints', 'Technology Stack Footprint'],
  },
  {
    number: '02',
    name: 'FIT & SIGNALS',
    tagline: 'Filter for relevance, not volume.',
    volumeState: 'RELEVANT ACCOUNTS',
    countLabel: 'Qualified Firmographics',
    details: ['Hiring Growth Signals', 'Platform Migrations', 'Budget Cycle Indicators'],
  },
  {
    number: '03',
    name: 'BUYER & TRIGGER INTELLIGENCE',
    tagline: 'Understand why the account may matter now.',
    volumeState: 'EVIDENCE-BACKED ACCOUNTS',
    countLabel: 'Verified Stakeholder Triggers',
    details: ['Decision Maker Changes', 'Operational Pain Points', 'Active RFP / Tech Inquiries'],
  },
  {
    number: '04',
    name: 'ACCOUNT PRIORITIZATION',
    tagline: 'Focus commercial effort where evidence is strongest.',
    volumeState: 'PRIORITY ACCOUNTS',
    countLabel: 'High-Propensity Target Pipeline',
    details: ['Direct Executive Access', 'Strategic Expansion Fit', 'High-Urgency Timing'],
  },
];

const PRIORITY_DIMENSIONS = [
  { name: 'FIT', desc: 'Technical & operational alignment' },
  { name: 'TRIGGER', desc: 'Verifiable timing catalysts' },
  { name: 'PAIN', desc: 'Identifiable operational friction' },
  { name: 'ACCESS', desc: 'Direct pathway to economic buyer' },
  { name: 'EXPANSION POTENTIAL', desc: 'Long-term account compounding' },
];

export const MarketIntelligenceSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 3800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const current = STAGES[activeStage];

  return (
    <section id="market-intelligence" className="py-20 lg:py-28 bg-white border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            MARKET INTELLIGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight mb-5">
            Focus Commercial Effort Where Evidence Is Strongest.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6673] leading-relaxed mb-3">
            SalesNego does not build account lists based only on industry and company size.
          </p>
          <p className="text-base text-[#22252B] font-medium leading-relaxed">
            We look at fit, trigger signals, identifiable pain, buyer access and future account potential before deciding where sales effort should go.
          </p>
        </div>

        {/* Spatial UI / Account Intelligence Animation */}
        <div
          id="market-intelligence-container"
          data-paused={isPaused}
          className="relative bg-[#F7F7F4] border border-[#E8EAEE] rounded-2xl p-6 sm:p-8 lg:p-10 mb-14 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-md hover:border-[#D6D9E0]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-[#E8EAEE] gap-4">
            <div>
              <span className="text-xs font-bold text-[#7A8190] uppercase tracking-wider block mb-1">
                SPATIAL ACCOUNT FILTERING
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#22252B] transition-colors">
                {current.number} / {current.name}
              </h3>
              <p className="text-sm text-[#3B5BDB] font-medium mt-0.5">
                {current.tagline}
              </p>
            </div>

            {/* Stage Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {STAGES.map((s, idx) => (
                <button
                  key={s.number}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB] ${
                    activeStage === idx
                      ? 'bg-[#3B5BDB] text-white shadow-sm scale-[1.02]'
                      : 'bg-white text-[#5F6673] border border-[#E8EAEE] hover:text-[#22252B] hover:border-[#BAC8FF]'
                  }`}
                >
                  Stage {s.number}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Interactive Stage Progression */}
          <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            {/* Visual Progression Strip */}
            <div className="lg:col-span-5 space-y-3 relative z-10">
              <span className="text-xs font-bold text-[#7A8190] uppercase tracking-wider block mb-2">
                Progressive Evidence Filtering
              </span>
              {STAGES.map((st, i) => {
                const isActive = activeStage === i;
                const isPassed = activeStage > i;
                const floatClass = i === 0 ? 'animate-sn-float-1' : i === 1 ? 'animate-sn-float-2' : i === 2 ? 'animate-sn-float-3' : 'animate-sn-float-4';
                return (
                  <div
                    key={st.name}
                    onClick={() => setActiveStage(i)}
                    className={`p-3.5 rounded-xl border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer flex items-center justify-between ${
                      isActive
                        ? `bg-white border-[#3B5BDB] shadow-md -translate-y-1 scale-[1.02] ${floatClass}`
                        : isPassed
                        ? 'bg-white/80 border-[#E8EAEE] text-[#5F6673] hover:bg-white hover:border-[#BAC8FF]'
                        : 'bg-white/50 border-[#E8EAEE]/60 text-[#7A8190] hover:bg-white/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                          isActive
                            ? 'bg-[#3B5BDB] text-white shadow-xs'
                            : isPassed
                            ? 'bg-[#EDF2FE] text-[#3B5BDB]'
                            : 'bg-[#E8EAEE] text-[#7A8190]'
                        }`}
                      >
                        {i + 1}
                      </div>
                      <span className={`text-xs font-bold transition-colors ${isActive ? 'text-[#22252B]' : ''}`}>
                        {st.volumeState}
                      </span>
                    </div>

                    <span className="text-[11px] font-medium text-[#5F6673]">
                      {st.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Stage Detail Card with Floating Evidence Badges */}
            <div className="lg:col-span-7 bg-white rounded-xl p-6 border border-[#E8EAEE] shadow-sm relative z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-[#F2F2EF] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3B5BDB] animate-pulse" />
                  <span className="text-xs font-bold text-[#3B5BDB] uppercase">
                    Stage Output &amp; Verification
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#22252B] bg-[#EDF2FE] border border-[#BAC8FF] px-2.5 py-1 rounded">
                  {current.countLabel}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold text-[#22252B] uppercase tracking-wider block">
                  Validation Parameters:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {current.details.map((d, dIdx) => (
                    <div
                      key={d}
                      className={`p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E8EAEE] text-xs font-semibold text-[#22252B] flex items-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#BAC8FF] hover:bg-white hover:-translate-y-0.5 ${
                        dIdx === 0 ? 'animate-sn-float-subtle' : dIdx === 1 ? 'animate-sn-float-2' : 'animate-sn-float-3'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#3B5BDB] flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commercial Discipline Box */}
              <div className="p-4 rounded-xl bg-[#EDF2FE] border border-[#BAC8FF] relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-[#3B5BDB] uppercase tracking-wider block">
                    Commercial Discipline
                  </span>
                  <span className="text-[10px] text-[#3B5BDB] font-medium bg-white/80 px-2 py-0.5 rounded">
                    Evidence Pipeline
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#22252B]">
                  <span className="bg-white px-2.5 py-1 rounded border border-[#BAC8FF] shadow-xs animate-sn-float-1">FACT</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF8A3D] animate-pulse" />
                  <span className="bg-white px-2.5 py-1 rounded border border-[#BAC8FF] shadow-xs animate-sn-float-2">HYPOTHESIS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF8A3D] animate-pulse" />
                  <span className="bg-white px-2.5 py-1 rounded border border-[#BAC8FF] shadow-xs animate-sn-float-3">DISCOVERY QUESTION</span>
                </div>
              </div>
            </div>

          </div>

          {/* Priority Dimensions Bar with Gentle Floating Micro-cards */}
          <div className="pt-6 border-t border-[#E8EAEE]">
            <span className="text-xs font-bold text-[#7A8190] uppercase tracking-wider block mb-3">
              5 Core Priority Dimensions
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {PRIORITY_DIMENSIONS.map((dim, idx) => {
                const floatClass = idx % 2 === 0 ? 'animate-sn-float-subtle' : 'animate-sn-float-2';
                return (
                  <div
                    key={dim.name}
                    className={`bg-white p-3 rounded-lg border border-[#E8EAEE] transition-all duration-300 hover:-translate-y-1 hover:border-[#BAC8FF] hover:shadow-sm ${floatClass}`}
                  >
                    <span className="text-xs font-bold text-[#22252B] block">{dim.name}</span>
                    <span className="text-[11px] text-[#5F6673] block mt-0.5">{dim.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Closing Line */}
          <div className="mt-6 text-center pt-4 border-t border-[#E8EAEE]">
            <p className="text-sm font-bold text-[#22252B]">
              Evidence earns priority. Discovery earns qualification.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
