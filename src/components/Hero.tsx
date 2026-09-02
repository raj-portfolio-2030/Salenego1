import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Compass, Cpu, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/content';

interface HeroStateData {
  id: number;
  label: string;
  dynamicLine: string;
  supportingPhrase: string;
  icon: React.ElementType;
  color: string;
  softBg: string;
  borderColor: string;
}

const HERO_STATES: HeroStateData[] = [
  {
    id: 1,
    label: '01 / MARKET INTELLIGENCE',
    dynamicLine: 'UNDERSTAND THE MARKET',
    supportingPhrase: 'Find where the strongest commercial signals exist.',
    icon: Compass,
    color: '#3B5BDB',
    softBg: '#EDF2FE',
    borderColor: '#BAC8FF',
  },
  {
    id: 2,
    label: '02 / REVOPS + AI',
    dynamicLine: 'BUILD THE ENGINE',
    supportingPhrase: 'Turn commercial data into coordinated execution.',
    icon: Cpu,
    color: '#FF8A3D',
    softBg: '#FFF4ED',
    borderColor: '#FFD8BF',
  },
  {
    id: 3,
    label: '03 / COMMERCIAL EXECUTION',
    dynamicLine: 'CONVERT OPPORTUNITIES',
    supportingPhrase: 'Move the right opportunity through the buying process.',
    icon: Zap,
    color: '#3B5BDB',
    softBg: '#EDF2FE',
    borderColor: '#BAC8FF',
  },
  {
    id: 4,
    label: '04 / CUSTOMER GROWTH',
    dynamicLine: 'GROW ACCOUNTS',
    supportingPhrase: 'Create more value after the first win.',
    icon: TrendingUp,
    color: '#FF8A3D',
    softBg: '#FFF4ED',
    borderColor: '#FFD8BF',
  },
];

export const Hero: React.FC = () => {
  const [activeStateIndex, setActiveStateIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveStateIndex((prev) => (prev + 1) % HERO_STATES.length);
    }, 3800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const currentState = HERO_STATES[activeStateIndex];

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FAF9F6]">
      {/* Subtle geometric background grid with very soft drift */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8EAEE40_1px,transparent_1px),linear-gradient(to_bottom,#E8EAEE40_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Fixed Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF2FE] border border-[#BAC8FF] text-[#3B5BDB] text-xs font-semibold tracking-wider uppercase mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB] animate-pulse" />
              B2B COMMERCIAL EXECUTION
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] font-bold text-[#22252B] tracking-tight leading-[1.12] mb-6">
              From Market Signal to Closed Revenue.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#22252B]/90 font-medium leading-relaxed max-w-2xl mb-4">
              SalesNego helps B2B SaaS, AI and technology companies turn market intelligence into qualified opportunities, customer acquisition and account growth.
            </p>

            {/* Secondary Copy */}
            <p className="text-base text-[#5F6673] leading-relaxed max-w-2xl mb-8">
              GTM strategy, Revenue Operations and founder-led commercial execution connected in one operating system.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
              <a
                href="#contact"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3B5BDB] hover:bg-[#2F4BC4] text-white text-[15px] font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB] focus-visible:ring-offset-2"
              >
                <span>Discuss Your Growth Priorities</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#what-we-do"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-[#F2F2EF] text-[#22252B] border border-[#D6D9E0] text-[15px] font-semibold rounded-lg shadow-sm hover:border-[#3B5BDB] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB]"
              >
                Explore How We Execute
              </a>
            </div>

            {/* Tertiary Link */}
            <div className="pt-2">
              <a
                href={CONTACT_DETAILS.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3B5BDB] hover:text-[#2F4BC4] group"
              >
                <span>Book a 30-Minute Conversation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FF8A3D]" />
              </a>
            </div>
          </div>

          {/* Right Column: Native Animated Commercial System */}
          <div className="lg:col-span-5">
            <div
              id="hero-animation-container"
              data-paused={isPaused}
              className="relative rounded-2xl p-6 sm:p-7 bg-white border border-[#E8EAEE] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_12px_36px_rgb(0,0,0,0.07)] hover:border-[#D6D9E0]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Header inside system block */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8EAEE]">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ backgroundColor: currentState.softBg, color: currentState.color }}
                  >
                    <currentState.icon className="w-4 h-4 animate-sn-glow" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-[#7A8190] uppercase block">
                      {currentState.label}
                    </span>
                    <h2 className="text-base font-bold text-[#22252B] tracking-tight">
                      {currentState.dynamicLine}
                    </h2>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#5F6673] bg-[#F2F2EF] px-2.5 py-1 rounded-full transition-colors duration-300">
                  <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-[#3B5BDB] animate-pulse'}`} />
                  {isPaused ? 'Paused' : 'Active Flow'}
                </span>
              </div>

              {/* Supporting phrase */}
              <p className="text-xs sm:text-[13px] text-[#5F6673] py-3.5 font-medium min-h-[44px] transition-opacity duration-300">
                {currentState.supportingPhrase}
              </p>

              {/* Dynamic State Viewport with connected spatial motion */}
              <div className="relative h-[290px] bg-[#F7F7F4] rounded-xl border border-[#E8EAEE] p-4 flex flex-col justify-center overflow-hidden">
                
                {/* Background active connector line graphic */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveAspectRatio="none">
                  <path
                    d="M 20,40 Q 150,140 340,240"
                    fill="none"
                    stroke="#3B5BDB"
                    strokeWidth="1.5"
                    className="animate-sn-signal"
                  />
                  <circle cx="20" cy="40" r="3" fill="#3B5BDB" />
                  <circle cx="340" cy="240" r="3" fill="#FF8A3D" />
                </svg>

                {/* Visual State 1: Market Intelligence */}
                {currentState.id === 1 && (
                  <div className="space-y-2.5 w-full relative z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    {[
                      { step: '01', title: 'Market Signals', tag: 'Intent & Hiring Triggers', animClass: 'animate-sn-float-1', delay: '0ms' },
                      { step: '02', title: 'ICP Definition', tag: 'High-Fit Segments', animClass: 'animate-sn-float-2', delay: '80ms' },
                      { step: '03', title: 'Account Intelligence', tag: 'Buyer Committee Matrix', animClass: 'animate-sn-float-3', delay: '160ms' },
                      { step: '04', title: 'Priority Accounts', tag: 'High-Evidence Pipeline', highlight: true, animClass: 'animate-sn-float-4', delay: '240ms' },
                    ].map((item, idx) => (
                      <div
                        key={item.title}
                        className={`p-3 rounded-lg border flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${item.animClass} ${
                          item.highlight
                            ? 'bg-[#EDF2FE] border-[#BAC8FF] shadow-md scale-[1.02] -translate-y-0.5'
                            : 'bg-white/90 border-[#E8EAEE] hover:bg-white hover:border-[#D6D9E0]'
                        }`}
                        style={{ marginLeft: `${idx * 3.5}%`, transitionDelay: item.delay }}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded transition-colors ${
                            item.highlight ? 'bg-[#3B5BDB] text-white' : 'bg-[#EDF2FE] text-[#3B5BDB]'
                          }`}>
                            {item.step}
                          </span>
                          <span className="text-xs font-semibold text-[#22252B]">{item.title}</span>
                        </div>
                        <span className="text-[10px] font-medium text-[#5F6673] bg-white px-2 py-0.5 rounded border border-[#E8EAEE]">
                          {item.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Visual State 2: RevOps + AI */}
                {currentState.id === 2 && (
                  <div className="grid grid-cols-2 gap-2.5 w-full relative z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    {[
                      { name: 'CRM & Pipeline', role: 'Architecture & Stage Exit', anim: 'animate-sn-float-1' },
                      { name: 'Data Enrichment', role: 'Live Contact Intelligence', anim: 'animate-sn-float-2' },
                      { name: 'Trigger Monitoring', role: 'Commercial Event Signals', anim: 'animate-sn-float-3' },
                      { name: 'Workflow Automation', role: 'Orchestrated Sequences', anim: 'animate-sn-float-subtle' },
                      { name: 'Qualification Engine', role: 'MEDDPICC & SPICED Rules', anim: 'animate-sn-float-4' },
                      { name: 'Pipeline Intelligence', role: 'Forecast Risk & Alerts', highlight: true, anim: 'animate-sn-float-1' },
                    ].map((mod) => (
                      <div
                        key={mod.name}
                        className={`p-2.5 rounded-lg border text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${mod.anim} ${
                          mod.highlight
                            ? 'bg-[#FFF4ED] border-[#FFD8BF] col-span-2 flex items-center justify-between shadow-md scale-[1.015]'
                            : 'bg-white/95 border-[#E8EAEE] hover:border-[#BAC8FF]'
                        }`}
                      >
                        <div className="font-semibold text-xs text-[#22252B] flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${mod.highlight ? 'bg-[#FF8A3D] animate-ping' : 'bg-[#3B5BDB]'}`} />
                          {mod.name}
                        </div>
                        <div className="text-[10px] text-[#5F6673] mt-0.5">{mod.role}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Visual State 3: Commercial Execution */}
                {currentState.id === 3 && (
                  <div className="flex flex-col justify-between h-full py-1 relative z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <div className="grid grid-cols-4 gap-1.5">
                      {['ENGAGE', 'DIAGNOSE', 'QUALIFY', 'SOLUTION'].map((stage, i) => (
                        <div
                          key={stage}
                          className={`bg-white p-2 rounded-md border border-[#E8EAEE] text-center transition-all duration-300 ${
                            i % 2 === 0 ? 'animate-sn-float-1' : 'animate-sn-float-2'
                          }`}
                        >
                          <span className="text-[9px] text-[#7A8190] block">0{i + 1}</span>
                          <span className="text-[11px] font-bold text-[#22252B]">{stage}</span>
                        </div>
                      ))}
                    </div>

                    {/* Flow arrow visual with active signal bridge */}
                    <div className="flex items-center justify-center gap-2 py-1 relative">
                      <div className="h-0.5 flex-1 bg-gradient-to-r from-[#3B5BDB] via-[#FF8A3D] to-[#3B5BDB] opacity-50 animate-sn-glow" />
                      <span className="text-[10px] font-semibold text-[#3B5BDB] bg-[#EDF2FE] border border-[#BAC8FF] px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB] animate-pulse" />
                        EVIDENCE DISCOVERY
                      </span>
                      <div className="h-0.5 flex-1 bg-gradient-to-r from-[#FF8A3D] via-[#3B5BDB] to-[#FF8A3D] opacity-50 animate-sn-glow" />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { name: 'PROPOSAL', desc: 'Commercial Scope', anim: 'animate-sn-float-3' },
                        { name: 'NEGOTIATE', desc: 'Terms & Alignment', anim: 'animate-sn-float-subtle' },
                        { name: 'CLOSE', desc: 'Won Customer', highlight: true, anim: 'animate-sn-float-4' },
                      ].map((stage, i) => (
                        <div
                          key={stage.name}
                          className={`p-2.5 rounded-md border text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${stage.anim} ${
                            stage.highlight
                              ? 'bg-[#EDF2FE] border-[#BAC8FF] shadow-md font-bold scale-[1.03] -translate-y-1'
                              : 'bg-white border-[#E8EAEE]'
                          }`}
                        >
                          <span className="text-[9px] text-[#7A8190] block">0{i + 5}</span>
                          <span className={`text-xs font-bold ${stage.highlight ? 'text-[#3B5BDB]' : 'text-[#22252B]'}`}>{stage.name}</span>
                          <span className="text-[9px] text-[#5F6673] block mt-0.5">{stage.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Visual State 4: Customer Growth */}
                {currentState.id === 4 && (
                  <div className="space-y-3 w-full relative z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 bg-white border border-[#E8EAEE] rounded-lg animate-sn-float-1">
                        <span className="text-[10px] font-bold text-[#3B5BDB] uppercase">01 / LAND</span>
                        <div className="text-xs font-bold text-[#22252B] mt-0.5">Initial Core Win</div>
                        <div className="text-[10px] text-[#5F6673]">Win the right initial problem</div>
                      </div>
                      <div className="p-3 bg-white border border-[#E8EAEE] rounded-lg animate-sn-float-2">
                        <span className="text-[10px] font-bold text-[#FF8A3D] uppercase">02 / ADOPT</span>
                        <div className="text-xs font-bold text-[#22252B] mt-0.5">Value Realization</div>
                        <div className="text-[10px] text-[#5F6673]">Turn win into customer value</div>
                      </div>
                    </div>

                    <div className="p-3 bg-[#FFF4ED] border border-[#FFD8BF] rounded-lg animate-sn-float-4 flex items-center justify-between shadow-md scale-[1.02]">
                      <div>
                        <span className="text-[10px] font-bold text-[#FF8A3D] uppercase">03 / EXPAND</span>
                        <div className="text-xs font-bold text-[#22252B]">Adjacent Workflows &amp; Seats</div>
                        <div className="text-[10px] text-[#5F6673]">Observed Need → Validated Opportunity</div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-[#FF8A3D] animate-sn-glow" />
                    </div>

                    <div className="p-2.5 bg-white border border-[#E8EAEE] rounded-lg flex items-center justify-between animate-sn-float-subtle">
                      <div>
                        <span className="text-[10px] font-bold text-[#22252B] uppercase">04 / RETAIN &amp; GROW</span>
                        <div className="text-[11px] text-[#5F6673]">Continuous Customer Success &amp; Renewal</div>
                      </div>
                      <span className="text-[10px] font-semibold text-[#3B5BDB] bg-[#EDF2FE] px-2 py-0.5 rounded border border-[#BAC8FF]">
                        Compounding Value
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* State Navigation Tabs */}
              <div className="grid grid-cols-4 gap-1.5 mt-4 pt-3 border-t border-[#E8EAEE]">
                {HERO_STATES.map((state, idx) => (
                  <button
                    key={state.id}
                    type="button"
                    onClick={() => setActiveStateIndex(idx)}
                    className={`py-1.5 px-2 text-[11px] font-semibold rounded-md transition-all duration-300 text-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#3B5BDB] ${
                      activeStateIndex === idx
                        ? 'bg-[#22252B] text-white shadow-sm scale-[1.02]'
                        : 'bg-[#F2F2EF] text-[#5F6673] hover:bg-[#E8EAEE] hover:text-[#22252B]'
                    }`}
                  >
                    State 0{state.id}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
