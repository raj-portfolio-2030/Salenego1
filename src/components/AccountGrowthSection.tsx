import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, HeartHandshake, Sparkles, Layers } from 'lucide-react';

const GROWTH_STAGES = [
  {
    number: '01',
    name: 'LAND',
    phrase: 'Win the right initial problem.',
    tagline: 'Initial solution alignment and scoped adoption',
    badge: 'Initial Contract',
    nodes: ['Targeted Problem Definition', 'Initial User Scope', 'Clear Success Metric'],
  },
  {
    number: '02',
    name: 'ADOPT',
    phrase: 'Turn the first win into customer value.',
    tagline: 'Implementation coordination and operational onboarding',
    badge: 'Customer Value',
    nodes: ['Structured Onboarding', 'Active System Usage', 'Baseline ROI Verification'],
  },
  {
    number: '03',
    name: 'EXPAND',
    phrase: 'Expand only where another real problem becomes visible.',
    tagline: 'Organic account growth across adjacent workflows',
    badge: 'Observed Opportunity',
    nodes: ['New Business Need Observed', 'Additional Team Workflow', 'Validated Business Case'],
  },
  {
    number: '04',
    name: 'RETAIN & GROW',
    phrase: 'Protect the relationship and compound customer value.',
    tagline: 'Long-term strategic partnership and multi-year renewals',
    badge: 'Compounded Value',
    nodes: ['Continuous Health Monitoring', 'Relationship Intelligence', 'Renewal & Expansion'],
  },
];

const SUPPORTING_SUCCESS_BLOCKS = [
  'Onboarding',
  'Value Realization',
  'Customer Engagement',
  'Account Intelligence',
  'Risk Signals',
  'Renewal & Expansion',
];

export const AccountGrowthSection: React.FC = () => {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveStageIdx((prev) => (prev + 1) % GROWTH_STAGES.length);
    }, 3800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const current = GROWTH_STAGES[activeStageIdx];

  return (
    <section id="account-growth" className="py-20 lg:py-28 bg-white border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            AFTER THE FIRST WIN
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight mb-4">
            Customer acquisition is only the beginning.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6673] leading-relaxed mb-2">
            The first contract creates a customer relationship, implementation insight and new commercial intelligence.
          </p>
          <p className="text-base text-[#22252B] font-semibold">
            SalesNego looks for expansion only when a legitimate adjacent problem becomes visible.
          </p>
        </div>

        {/* Account Growth Engine Interactive Simulation */}
        <div
          id="account-growth-container"
          data-paused={isPaused}
          className="bg-[#F7F7F4] border border-[#E8EAEE] rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-md hover:border-[#D6D9E0]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8EAEE] gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-[#7A8190] uppercase tracking-wider block mb-1">
                ACCOUNT GROWTH ENGINE
              </span>
              <h3 className="text-xl font-bold text-[#22252B] transition-colors">
                Stage {current.number}: {current.name}
              </h3>
              <p className="text-sm font-medium text-[#3B5BDB] mt-0.5">
                {current.phrase}
              </p>
            </div>

            {/* Stage Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {GROWTH_STAGES.map((s, i) => (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setActiveStageIdx(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB] ${
                    activeStageIdx === i
                      ? 'bg-[#3B5BDB] text-white shadow-sm scale-[1.02]'
                      : 'bg-white text-[#5F6673] border border-[#E8EAEE] hover:text-[#22252B] hover:border-[#BAC8FF]'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Node Progression Graphic */}
          <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            {/* Left progression steps */}
            <div className="lg:col-span-4 space-y-2.5 relative z-10">
              {GROWTH_STAGES.map((st, idx) => {
                const isActive = activeStageIdx === idx;
                const floatClass = idx === 0 ? 'animate-sn-float-1' : idx === 1 ? 'animate-sn-float-2' : idx === 2 ? 'animate-sn-float-3' : 'animate-sn-float-4';
                return (
                  <div
                    key={st.name}
                    onClick={() => setActiveStageIdx(idx)}
                    className={`p-3.5 rounded-xl border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer flex items-center justify-between ${
                      isActive
                        ? `bg-white border-[#3B5BDB] shadow-md -translate-y-1 scale-[1.02] ${floatClass}`
                        : 'bg-white/70 border-[#E8EAEE] text-[#5F6673] hover:bg-white hover:border-[#BAC8FF]'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono text-[#7A8190] block">STAGE 0{idx + 1}</span>
                      <span className={`text-xs font-bold transition-colors ${isActive ? 'text-[#3B5BDB]' : 'text-[#22252B]'}`}>
                        {st.name}
                      </span>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#EDF2FE] text-[#3B5BDB] border-[#BAC8FF]' 
                        : 'bg-[#FAF9F6] text-[#5F6673] border-[#E8EAEE]'
                    }`}>
                      {st.badge}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right Active State Visual Details */}
            <div className="lg:col-span-8 bg-white rounded-xl p-6 border border-[#E8EAEE] shadow-sm relative z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8EAEE] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3B5BDB] animate-pulse" />
                  <span className="text-xs font-bold text-[#3B5BDB] uppercase">
                    Account Progression Blueprint
                  </span>
                </div>
                <span className="text-xs font-medium text-[#5F6673] bg-[#FAF9F6] px-2.5 py-1 rounded border border-[#E8EAEE]">
                  {current.tagline}
                </span>
              </div>

              {/* Expansion Progression Pathway */}
              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E8EAEE] mb-5 relative overflow-hidden">
                <span className="text-[10px] font-bold text-[#7A8190] uppercase tracking-wider block mb-2">
                  Legitimate Expansion Discipline:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#22252B]">
                  <span className="bg-white px-2.5 py-1 rounded border border-[#E8EAEE] shadow-xs animate-sn-float-1">OBSERVED NEED</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF8A3D] animate-pulse" />
                  <span className="bg-white px-2.5 py-1 rounded border border-[#E8EAEE] shadow-xs animate-sn-float-2">VALIDATED PROBLEM</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF8A3D]" />
                  <span className="bg-[#EDF2FE] text-[#3B5BDB] px-2.5 py-1 rounded border border-[#BAC8FF] shadow-xs animate-sn-float-3">
                    EXPANSION OPPORTUNITY
                  </span>
                </div>
              </div>

              {/* Active Nodes */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#22252B] uppercase tracking-wider block">
                  Active Lifecycle Milestones:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {current.nodes.map((node, nIdx) => (
                    <div
                      key={node}
                      className={`p-2.5 bg-[#FAF9F6] rounded-lg border border-[#E8EAEE] text-xs font-semibold text-[#22252B] flex items-center gap-2 transition-all duration-300 hover:bg-white hover:border-[#BAC8FF] hover:-translate-y-0.5 ${
                        nIdx === 0 ? 'animate-sn-float-subtle' : nIdx === 1 ? 'animate-sn-float-2' : 'animate-sn-float-4'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#3B5BDB] flex-shrink-0" />
                      <span>{node}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Persistent Foundation: Continuous Customer Success */}
          <div className="pt-6 border-t border-[#E8EAEE]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-[#3B5BDB] uppercase tracking-wider block">
                  PERSISTENT FOUNDATION: CONTINUOUS CUSTOMER SUCCESS
                </span>
                <p className="text-xs text-[#5F6673] mt-0.5">
                  Customer Success remains active across the full account lifecycle.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {SUPPORTING_SUCCESS_BLOCKS.map((blk, idx) => {
                const floatClass = idx % 2 === 0 ? 'animate-sn-float-subtle' : 'animate-sn-float-1';
                return (
                  <div
                    key={blk}
                    className={`p-2.5 bg-white rounded-lg border border-[#E8EAEE] text-center text-xs font-medium text-[#22252B] transition-all duration-300 hover:border-[#BAC8FF] hover:-translate-y-0.5 hover:shadow-xs ${floatClass}`}
                  >
                    {blk}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
