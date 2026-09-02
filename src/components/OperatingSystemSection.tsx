import React, { useState, useEffect, useRef } from 'react';
import { OPERATING_SYSTEM_STAGES } from '../data/content';
import {
  CheckCircle2,
  Play,
  Pause,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  TrendingUp,
  Target,
  Search,
  MessageSquare,
  Stethoscope,
  ShieldCheck,
  Award,
  Zap,
} from 'lucide-react';
import { GlassTooltip } from './GlassTooltip';

// Stage Icons mapping for visual clarity
const STAGE_ICONS = [
  Search,
  Target,
  TrendingUp,
  MessageSquare,
  Stethoscope,
  ShieldCheck,
  Award,
  Zap,
];

// Rich contextual tooltips for every element in the 8 stages
const ELEMENT_DESCRIPTIONS: Record<string, string> = {
  // 01 UNDERSTAND
  Product: 'Comprehensive audit of functional capabilities, architecture, and value delivery mechanisms.',
  Market: 'Macro-economic trends, addressable market size, and regulatory landscape analysis.',
  Customer: 'Historical customer profiles, usage patterns, and retention drivers.',
  Competition: 'Competitive positioning, alternative solutions, and substitute threat analysis.',
  'Existing commercial motion': 'Evaluation of current sales cycle velocity, conversion funnels, and revenue friction.',

  // 02 POSITION
  ICP: 'Firmographic and technographic criteria defining highest-margin target accounts.',
  'Buyer roles': 'Mapping economic buyers, technical evaluators, and executive champions.',
  'Value proposition': 'Quantified articulation of financial and operational business value.',
  'Use cases': 'High-impact workflow applications addressing specific corporate pain points.',
  Differentiation: 'Verifiable competitive moats and distinct operational advantages.',
  Messaging: 'Role-specific value narratives addressing individual stakeholder priorities.',
  'Sales narrative': 'Strategic point-of-view presentation contextualizing market urgency.',

  // 03 PRIORITIZE
  'Account universe': 'Exhaustive enumeration of addressable enterprise accounts.',
  'Buying triggers': 'Real-time signals including leadership changes, funding, and tech stack shifts.',
  'Account intelligence': 'Deep dossier compilation on corporate initiatives and organizational structures.',
  'Buyer mapping': 'Multi-threaded contact discovery identifying key influencers and signatories.',
  'Commercial evidence': 'Historical win patterns and referenceable customer proof points.',
  'Account scoring': 'Propensity-to-buy algorithms ranking outreach priority.',

  // 04 ENGAGE
  Research: 'Pre-call context gathering and account briefing synthesis.',
  'Personalized outreach': 'Bespoke communication directly addressing validated executive pain points.',
  'Multi-channel execution': 'Coordinated touchpoints across email, phone, social, and executive networks.',
  'Executive engagement': 'Peer-to-peer dialogues connecting leadership with client executives.',
  'Partner and referral routes': 'Leveraging ecosystem relationships and warm introduction channels.',

  // 05 DIAGNOSE
  Discovery: 'Structured questioning to uncover underlying business challenges.',
  Problem: 'Isolating root-cause operational friction from superficial symptoms.',
  Impact: 'Quantifying negative financial and organizational consequences of status quo.',
  Urgency: 'Uncovering compelling events and executive board mandates driving action.',
  'Existing approach': 'Evaluating current internal tools, vendor relationships, and workarounds.',
  Stakeholders: 'Mapping internal alignment, conflicting agendas, and political dynamics.',

  // 06 QUALIFY
  'Economic buyer': 'Accessing the individual with ultimate budget allocation authority.',
  'Decision criteria': 'Defining formal technical, commercial, and legal evaluation standards.',
  'Decision process': 'Documenting step-by-step corporate procurement and governance milestones.',
  'Champion': 'Cultivating internal advocates with vested interest in project success.',
  'Critical event': 'Pinpointing immovable calendar deadlines requiring solution deployment.',
  'Deal risk': 'Anticipating security reviews, legal constraints, and implementation obstacles.',

  // 07 CONVERT
  'Solution alignment': 'Architecting tailored technical solution addressing validated requirements.',
  Demo: 'Delivering high-impact, scenario-based product walkthroughs tailored to buyer roles.',
  'Technical validation': 'Successfully clearing security, architecture, and POC hurdles.',
  'Business case': 'Developing collaborative ROI models and payback period calculations.',
  Proposal: 'Presenting structured commercial terms, milestone schedules, and deliverables.',
  Negotiation: 'Protecting gross margins while trading concession terms equitably.',
  Close: 'Securing final executive signature and executing binding legal agreements.',

  // 08 EXPAND
  'Onboarding handoff': 'Seamless knowledge transfer from commercial to customer success teams.',
  'Customer Success': 'Ensuring rapid time-to-value and adoption milestone achievement.',
  Adoption: 'Monitoring daily active usage, feature penetration, and user sentiment.',
  Renewal: 'Proactive commercial cadence securing multi-year contract renewals early.',
  'Cross-sell': 'Introducing adjacent platform modules to solve newly identified requirements.',
  Upsell: 'Expanding seat licenses, compute tiers, and transaction volume limits.',
  'Strategic account development': 'Long-term executive alignment embedding platform as enterprise standard.',
};

const STAGE_CATEGORIES = [
  'Foundation & Strategy',
  'Market Architecture',
  'Account Intelligence',
  'Outbound Activation',
  'Commercial Discovery',
  'Deal Governance',
  'Revenue Conversion',
  'Customer Lifecycle',
];

const AUTO_INTERVAL_MS = 3800; // Time per stage in milliseconds

export const OperatingSystemSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalStages = OPERATING_SYSTEM_STAGES.length;
  const currentStage = OPERATING_SYSTEM_STAGES[activeStageIndex];
  const NextStage = OPERATING_SYSTEM_STAGES[(activeStageIndex + 1) % totalStages];
  const CurrentIcon = STAGE_ICONS[activeStageIndex] || Layers;

  // Automated progression from left to right (0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 0)
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % totalStages);
    }, AUTO_INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalStages, activeStageIndex]);

  const handleStageClick = (idx: number) => {
    setActiveStageIndex(idx);
    setUserInteracted(true);
  };

  const togglePlayPause = () => {
    setIsPaused((prev) => !prev);
    setUserInteracted(true);
  };

  return (
    <section id="operating-system" className="py-20 lg:py-28 bg-white border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Automation Status Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase">
                OUR OPERATING SYSTEM
              </span>
              <span className="w-1 h-1 rounded-full bg-[#BAC8FF]" />
              <span className="text-[11px] font-mono text-[#7A8190] uppercase tracking-wider">
                8-STAGE COMMERCIAL LIFECYCLE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight mb-3">
              The SalesNego Commercial Execution System
            </h2>
            <p className="text-base text-[#5F6673]">
              A connected end-to-end framework translating strategy into closed revenue and account retention.
            </p>
          </div>

          {/* Automation Control Indicator */}
          <div className="flex items-center gap-3 bg-[#FAF9F6] border border-[#E8EAEE] p-2 rounded-xl flex-shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={togglePlayPause}
              className={`p-2 rounded-lg transition-all flex items-center gap-1.5 text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB] ${
                isPaused
                  ? 'bg-[#3B5BDB] text-white shadow-xs'
                  : 'bg-white text-[#22252B] border border-[#E8EAEE] hover:border-[#BAC8FF]'
              }`}
              title={isPaused ? 'Resume automated progression' : 'Pause automation'}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[11px]">Resume Flow</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current text-[#3B5BDB]" />
                  <span className="text-[11px]">Auto Flowing</span>
                </>
              )}
            </button>
            <div className="text-[11px] text-[#7A8190] font-mono px-2 hidden sm:block">
              Stage 0{activeStageIndex + 1} / 08
            </div>
          </div>
        </div>

        {/* Continuous Flow Pipeline Track (Left to Right Automation) */}
        <div
          className="mb-8 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!userInteracted) setIsPaused(false);
          }}
        >
          {/* Traveling Data Packet Beam Across Pipeline */}
          <div className="hidden lg:block absolute -top-3 inset-x-0 h-[2px] bg-[#E8EAEE] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-transparent via-[#3B5BDB] to-[#FF8A3D] transition-all duration-500 ease-out rounded-full shadow-[0_0_8px_#3B5BDB]"
              style={{
                width: `${((activeStageIndex + 1) / totalStages) * 100}%`,
              }}
            />
          </div>

          {/* 8 Connected Stages Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {OPERATING_SYSTEM_STAGES.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;
              const Icon = STAGE_ICONS[idx] || Layers;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => handleStageClick(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between min-h-[108px] relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB] group ${
                    isActive
                      ? 'bg-white border-[#3B5BDB] shadow-md -translate-y-1.5 ring-2 ring-[#3B5BDB]/20'
                      : isPast
                      ? 'bg-white border-[#BAC8FF]/60 hover:border-[#3B5BDB] hover:shadow-xs'
                      : 'bg-[#FAF9F6] border-[#E8EAEE] hover:bg-white hover:border-[#D6D9E0]'
                  }`}
                >
                  {/* Top Status and Number */}
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={`text-[10px] font-mono font-bold tracking-wider ${
                        isActive ? 'text-[#3B5BDB]' : 'text-[#7A8190]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    {isActive ? (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B5BDB] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B5BDB]" />
                      </span>
                    ) : isPast ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BAC8FF]" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8EAEE]" />
                    )}
                  </div>

                  {/* Stage Title and Element Count */}
                  <div>
                    <span
                      className={`text-xs font-bold block tracking-tight ${
                        isActive ? 'text-[#3B5BDB]' : 'text-[#22252B]'
                      }`}
                    >
                      {stage.name}
                    </span>
                    <span
                      className={`text-[10px] font-medium mt-0.5 block ${
                        isActive ? 'text-[#FF8A3D] font-semibold' : 'text-[#7A8190]'
                      }`}
                    >
                      {stage.items.length} Elements
                    </span>
                  </div>

                  {/* Left-to-Right Countdown Progress Bar (Active Stage Only) */}
                  {isActive && !isPaused && (
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[#EDF2FE]">
                      <div
                        className="h-full bg-gradient-to-r from-[#3B5BDB] to-[#FF8A3D] animate-sn-progress"
                        style={{
                          animationDuration: `${AUTO_INTERVAL_MS}ms`,
                        }}
                      />
                    </div>
                  )}
                  {isActive && isPaused && (
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[#3B5BDB]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Details Architecture Panel */}
        <div
          className="bg-[#FAF9F6] border border-[#E8EAEE] rounded-2xl p-6 sm:p-8 lg:p-10 mb-10 shadow-sm transition-all duration-300 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!userInteracted) setIsPaused(false);
          }}
        >
          {/* Subtle Top Accent Beam */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B5BDB] to-transparent" />

          {/* Panel Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-[#E8EAEE] gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#EDF2FE] border border-[#BAC8FF] flex items-center justify-center flex-shrink-0 text-[#3B5BDB] shadow-xs">
                <CurrentIcon className="w-6 h-6 animate-sn-glow" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono font-bold text-[#3B5BDB] bg-[#EDF2FE] px-2 py-0.5 rounded border border-[#BAC8FF]">
                    STAGE 0{activeStageIndex + 1} OF 08
                  </span>
                  <span className="text-xs font-semibold text-[#7A8190]">
                    {STAGE_CATEGORIES[activeStageIndex]}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#22252B] tracking-tight">
                  {currentStage.name}
                </h3>
              </div>
            </div>

            {/* Description & Next Stage Conduit */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:max-w-xl">
              <p className="text-sm text-[#5F6673] leading-relaxed flex-1">
                {currentStage.description}
              </p>

              {/* Next Stage Teaser Button */}
              <button
                type="button"
                onClick={() => handleStageClick((activeStageIndex + 1) % totalStages)}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#3B5BDB] bg-white border border-[#E8EAEE] hover:border-[#BAC8FF] hover:bg-[#EDF2FE] px-3.5 py-2 rounded-xl shadow-xs transition-all flex-shrink-0"
              >
                <span>Next: 0{(activeStageIndex + 1) % totalStages + 1} {NextStage.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Elements Breakdown with Tooltips */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#22252B] uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8A3D]" />
                Stage Architecture &amp; Elements ({currentStage.items.length} Elements)
              </span>
              <span className="text-[11px] text-[#7A8190] italic hidden sm:block">
                Hover any element for operational scope
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {currentStage.items.map((item, idx) => {
                const desc =
                  ELEMENT_DESCRIPTIONS[item] ||
                  `Core deliverable for the ${currentStage.name} commercial milestone.`;

                return (
                  <GlassTooltip
                    key={item}
                    title={item}
                    content={desc}
                    badge={`0${activeStageIndex + 1}.${idx + 1}`}
                    badgeColor="blue"
                    position="top"
                  >
                    <div className="bg-white p-3.5 rounded-xl border border-[#E8EAEE] flex items-center justify-between gap-2.5 shadow-xs transition-all duration-200 hover:border-[#BAC8FF] hover:shadow-sm hover:-translate-y-0.5 cursor-pointer">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <CheckCircle2 className="w-4 h-4 text-[#3B5BDB] flex-shrink-0" />
                        <span className="text-xs font-semibold text-[#22252B] truncate">{item}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#7A8190] bg-[#FAF9F6] px-1.5 py-0.5 rounded border border-[#E8EAEE] flex-shrink-0">
                        #{idx + 1}
                      </span>
                    </div>
                  </GlassTooltip>
                );
              })}
            </div>
          </div>
        </div>

        {/* Foundation Strip */}
        <div className="bg-[#22252B] text-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#3B5BDB] via-[#FF8A3D] to-[#3B5BDB]" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono font-bold text-[#FF8A3D] uppercase tracking-wider block mb-1">
                SYSTEM FOUNDATION
              </span>
              <div className="text-base sm:text-lg font-bold text-white tracking-wide flex flex-wrap items-center gap-y-1">
                <span>DATA</span>
                <span className="text-[#7A8190] mx-2 sm:mx-3">|</span>
                <span>REVOPS</span>
                <span className="text-[#7A8190] mx-2 sm:mx-3">|</span>
                <span>AI</span>
                <span className="text-[#7A8190] mx-2 sm:mx-3">|</span>
                <span className="text-[#BAC8FF]">COMMERCIAL INTELLIGENCE</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#7A8190] md:text-right font-medium max-w-sm">
              The tools support the system. They do not replace commercial judgment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

