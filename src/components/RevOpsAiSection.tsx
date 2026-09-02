import React, { useState, useEffect, useRef } from 'react';
import { AI_ACCELERATED_TASKS } from '../data/content';
import { Bot, UserCheck2, Sparkles, ArrowRight, Database, Activity } from 'lucide-react';
import { GlassTooltip } from './GlassTooltip';

const REVOPS_ANIMATION_STAGES = [
  {
    stageNumber: '01',
    stageTitle: 'CONNECT THE DATA',
    tagline: 'Aggregate fragmented signals into a unified commercial foundation',
    inputs: ['CRM', 'Website Activity', 'Email Engagement', 'Market Signals', 'Customer Data', 'Third-Party Data'],
    target: 'COMMERCIAL DATA LAYER',
  },
  {
    stageNumber: '02',
    stageTitle: 'ORCHESTRATE THE WORK',
    tagline: 'Apply qualification logic, enrichment, and trigger detection',
    orchestration: 'AI-ASSISTED ORCHESTRATION',
    blocks: [
      'Account Intelligence',
      'Prospect Enrichment',
      'Trigger Monitoring',
      'Workflow Automation',
      'Qualification Logic',
    ],
  },
  {
    stageNumber: '03',
    stageTitle: 'MOVE COMMERCIAL WORK FORWARD',
    tagline: 'Continuous sequence from discovery through pipeline progression',
    workflow: ['Research', 'Personalization', 'Sequence', 'Meeting', 'Follow-Up', 'Pipeline'],
  },
  {
    stageNumber: '04',
    stageTitle: 'SEE WHAT MATTERS',
    tagline: 'True commercial visibility without vanity metrics or fake numbers',
    signals: [
      'Pipeline Health',
      'Stage Progression',
      'Follow-Up Risk',
      'Account Activity',
      'Forecast Discipline',
      'Win/Loss Signals',
    ],
  },
];

const MODULE_TOOLTIPS: Record<string, { desc: string; badge?: string; badgeColor?: 'blue' | 'orange' }> = {
  // Stage 1 Inputs & Target
  CRM: {
    desc: 'Synchronizes verified account hierarchies, opportunity history, and contact engagement into the core data layer.',
    badge: 'Raw Stream',
    badgeColor: 'blue',
  },
  'Website Activity': {
    desc: 'Detects real-time visitor intent, high-value page surges, and anonymous account identification.',
    badge: 'Intent Stream',
    badgeColor: 'blue',
  },
  'Email Engagement': {
    desc: 'Analyzes executive reply sentiment, open cadences, and multi-threaded communication frequency.',
    badge: 'Activity Stream',
    badgeColor: 'blue',
  },
  'Market Signals': {
    desc: 'Surfaces leadership changes, funding events, earnings highlights, and expansion triggers automatically.',
    badge: 'Market Signal',
    badgeColor: 'blue',
  },
  'Customer Data': {
    desc: 'Monitors product adoption, seat utilization, and renewal milestones to flag expansion opportunities.',
    badge: 'Product Stream',
    badgeColor: 'blue',
  },
  'Third-Party Data': {
    desc: 'Enriches records with technographic stacks, firmographic verified criteria, and direct dial intelligence.',
    badge: 'Enrichment',
    badgeColor: 'blue',
  },
  'COMMERCIAL DATA LAYER': {
    desc: 'Synthesizes all fragmented touchpoints into a single, validated source of truth for revenue teams.',
    badge: 'Unified Core',
    badgeColor: 'blue',
  },

  // Stage 2 Modular Blocks (AI Orchestration Core)
  'Account Intelligence': {
    desc: 'Maps corporate hierarchy, strategic growth initiatives, and active buying centers across target accounts.',
    badge: 'Live Logic',
    badgeColor: 'orange',
  },
  'Prospect Enrichment': {
    desc: 'Validates buyer personas, operational responsibilities, and direct contact channels in real time.',
    badge: 'Live Logic',
    badgeColor: 'orange',
  },
  'Trigger Monitoring': {
    desc: 'Flags verified commercial events to trigger timely, relevant executive outreach sequences.',
    badge: 'Live Logic',
    badgeColor: 'orange',
  },
  'Workflow Automation': {
    desc: 'Automates task handoffs, CRM logging, and calendar scheduling without manual administrative burden.',
    badge: 'Live Logic',
    badgeColor: 'orange',
  },
  'Qualification Logic': {
    desc: 'Filters accounts against rigorous commercial criteria to safeguard rep focus on high-conviction pipeline.',
    badge: 'Live Logic',
    badgeColor: 'orange',
  },

  // Stage 3 Workflow Steps
  Research: {
    desc: 'Gathers factual company context, competitive posture, and operational challenges prior to engagement.',
    badge: 'Step 01',
    badgeColor: 'blue',
  },
  Personalization: {
    desc: 'Formulates tailored commercial hypotheses based on verified account observations and pain points.',
    badge: 'Step 02',
    badgeColor: 'blue',
  },
  Sequence: {
    desc: 'Executes disciplined, multi-channel outreach cadences calibrated to executive communication norms.',
    badge: 'Step 03',
    badgeColor: 'blue',
  },
  Meeting: {
    desc: 'Delivers structured executive discovery sessions focused on diagnosing root-cause business problems.',
    badge: 'Step 04',
    badgeColor: 'blue',
  },
  'Follow-Up': {
    desc: 'Dispatches precise meeting recaps, agreed next steps, and updated commercial terms promptly.',
    badge: 'Step 05',
    badgeColor: 'blue',
  },
  Pipeline: {
    desc: 'Advances qualified opportunities with customer-verified exit criteria and transparent health scoring.',
    badge: 'Step 06',
    badgeColor: 'blue',
  },

  // Stage 4 Signals
  'Pipeline Health': {
    desc: 'Tracks deal velocity and stage duration to expose stagnant opportunities before they slip quarters.',
    badge: 'Telemetry',
    badgeColor: 'blue',
  },
  'Stage Progression': {
    desc: 'Enforces verified buyer commitments before advancing opportunities to subsequent sales stages.',
    badge: 'Telemetry',
    badgeColor: 'blue',
  },
  'Follow-Up Risk': {
    desc: 'Flags unanswered buyer inquiries and stalled communications requiring proactive management intervention.',
    badge: 'Telemetry',
    badgeColor: 'blue',
  },
  'Account Activity': {
    desc: 'Measures multi-threaded stakeholder depth across economic buyers, technical champions, and end users.',
    badge: 'Telemetry',
    badgeColor: 'blue',
  },
  'Forecast Discipline': {
    desc: 'Replaces subjective rep optimism with evidence-weighted conversion probability calculations.',
    badge: 'Telemetry',
    badgeColor: 'blue',
  },
  'Win/Loss Signals': {
    desc: 'Aggregates root-cause buyer feedback to continually refine ICP targeting and objection handling.',
    badge: 'Telemetry',
    badgeColor: 'blue',
  },

  // AI-Accelerated Tasks
  'Account research': {
    desc: 'Summarizes SEC filings, news releases, and executive statements into executive pre-call briefings.',
    badge: 'AI Task',
    badgeColor: 'blue',
  },
  'Contact data enrichment': {
    desc: 'Verifies email deliverability and mobile contact numbers against fresh commercial databases.',
    badge: 'AI Task',
    badgeColor: 'blue',
  },
  'Company trigger monitoring': {
    desc: 'Monitors corporate hiring surges, tech stack adoptions, and funding announcements 24/7.',
    badge: 'AI Task',
    badgeColor: 'blue',
  },
  'Meeting summaries': {
    desc: 'Transcribes recorded conversations and extracts agreed action items directly into CRM records.',
    badge: 'AI Task',
    badgeColor: 'blue',
  },
  'CRM data hygiene': {
    desc: 'Deduplicates records, standardizes job titles, and fixes incomplete contact profiles automatically.',
    badge: 'AI Task',
    badgeColor: 'blue',
  },
  'Draft follow-ups': {
    desc: 'Generates structured follow-up drafts incorporating discussed nuances for rep review and approval.',
    badge: 'AI Task',
    badgeColor: 'blue',
  },
  'Pipeline hygiene': {
    desc: 'Scans for expired close dates, missing contact roles, and inactive opportunities.',
    badge: 'AI Task',
    badgeColor: 'blue',
  },
  'Initial research notes': {
    desc: 'Compiles industry trends, competitive benchmarks, and tech footprints for pre-meeting preparation.',
    badge: 'AI Task',
    badgeColor: 'blue',
  },
  'Market signal alerts': {
    desc: 'Sends instant alerts when priority target accounts exhibit high-intent commercial behavior.',
    badge: 'AI Task',
    badgeColor: 'blue',
  },
  'Basic workflow automation': {
    desc: 'Triggers notification sequences, task creations, and handoff alerts across revenue tools.',
    badge: 'AI Task',
    badgeColor: 'blue',
  },

  // Human Commercial Judgment
  'Market selection': {
    desc: 'Identifies which macroeconomic segments and geographies represent the highest-yield commercial opportunity.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
  'ICP decisions': {
    desc: 'Sets strict boundary criteria defining high-conviction accounts that yield premium margins.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
  'Account prioritization': {
    desc: 'Allocates limited executive and engineering bandwidth to the highest strategic-value pursuits.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
  'Executive messaging': {
    desc: 'Crafts nuanced value narratives that directly address board-level priorities and risk mitigation.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
  Discovery: {
    desc: 'Leads empathetic, probing dialogues to uncover underlying organizational friction and unstated needs.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
  Diagnosis: {
    desc: 'Separates surface complaints from structural business bottlenecks to quantify the cost of inaction.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
  Qualification: {
    desc: 'Enforces rigorous gate criteria to ensure organizational energy is not squandered on non-buyers.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
  'Business case development': {
    desc: 'Collaboratively models economic impact, return on investment, and capital payback schedules.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
  'Solution alignment': {
    desc: 'Tailors platform architecture and service scope to solve validated executive problems.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
  'Objection management': {
    desc: 'Navigates security governance, legacy inertia, and internal political roadblocks constructively.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
  Negotiation: {
    desc: 'Protects gross margins, payment terms, and reciprocal commitments through disciplined deal tradecraft.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
  Closing: {
    desc: 'Aligns legal counsel, procurement committees, and executive signatories to secure binding agreements.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
  'Relationship management': {
    desc: 'Cultivates executive sponsorship and long-term trust to ensure client satisfaction and advocacy.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
  'Expansion decisions': {
    desc: 'Determines timing and scope for upsell and cross-division adoption based on proven customer outcomes.',
    badge: 'Human Judgment',
    badgeColor: 'orange',
  },
};

export const RevOpsAiSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % REVOPS_ANIMATION_STAGES.length);
    }, 3800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const currentStage = REVOPS_ANIMATION_STAGES[activeStage];

  return (
    <section id="revops-ai" className="py-20 lg:py-28 bg-[#F7F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            REVENUE OPERATIONS + AI
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight mb-5">
            AI Should Increase Commercial Capacity, Not Replace Commercial Judgment.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6673] leading-relaxed mb-3">
            SalesNego uses AI and automation to speed up research, data work, workflow execution and commercial visibility.
          </p>
          <p className="text-base text-[#22252B] font-medium leading-relaxed">
            The highest-value commercial decisions remain human-led.
          </p>
        </div>

        {/* 4-Stage RevOps & AI Animation Visual */}
        <div
          id="revops-ai-container"
          data-paused={isPaused}
          className="bg-white border border-[#E8EAEE] rounded-2xl p-6 sm:p-8 lg:p-10 mb-14 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-md hover:border-[#D6D9E0] relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-[#E8EAEE] gap-4">
            <div>
              <span className="text-xs font-bold text-[#3B5BDB] uppercase tracking-wider block mb-1">
                SYSTEM ARCHITECTURE IN MOTION
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#22252B] transition-colors">
                {currentStage.stageNumber} / {currentStage.stageTitle}
              </h3>
              <p className="text-sm text-[#5F6673] mt-0.5">
                {currentStage.tagline}
              </p>
            </div>

            {/* Stage Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {REVOPS_ANIMATION_STAGES.map((s, idx) => (
                <button
                  key={s.stageNumber}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB] ${
                    activeStage === idx
                      ? 'bg-[#3B5BDB] text-white shadow-sm scale-[1.02]'
                      : 'bg-[#F2F2EF] text-[#5F6673] hover:text-[#22252B] hover:bg-[#E8EAEE]'
                  }`}
                >
                  Stage {s.stageNumber}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Stage Body */}
          <div className="py-8 min-h-[290px] flex flex-col justify-center relative">
            
            {/* Stage 1: Connect the Data */}
            {activeStage === 0 && (
              <div className="space-y-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                {/* 6 Raw Stream Input Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
                  {currentStage.inputs?.map((inp, idx) => {
                    const floatClass = idx % 2 === 0 ? 'animate-sn-float-1' : 'animate-sn-float-2';
                    const tooltipInfo = MODULE_TOOLTIPS[inp];
                    return (
                      <GlassTooltip
                        key={inp}
                        title={inp}
                        content={tooltipInfo?.desc || 'Live data ingestion feed.'}
                        badge={tooltipInfo?.badge || 'Stream'}
                        badgeColor={tooltipInfo?.badgeColor || 'blue'}
                        position="top"
                      >
                        <div
                          className={`bg-[#FAF9F6] border border-[#E8EAEE] p-3 rounded-xl text-center shadow-xs transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white hover:border-[#BAC8FF] hover:shadow-sm cursor-pointer ${floatClass}`}
                          style={{ animationDelay: `${idx * 150}ms` }}
                        >
                          <Database className="w-4 h-4 text-[#3B5BDB] mx-auto mb-1.5 animate-sn-glow" />
                          <span className="text-xs font-bold text-[#22252B] block truncate">{inp}</span>
                          <span className="text-[10px] text-[#7A8190]">Raw Stream</span>
                        </div>
                      </GlassTooltip>
                    );
                  })}
                </div>

                {/* Vertical Signal Stems & Pulse Connector Bus */}
                <div className="hidden lg:grid grid-cols-6 gap-3 h-5 relative -my-1">
                  {currentStage.inputs?.map((_, idx) => (
                    <div key={idx} className="flex justify-center relative h-full">
                      <div className="w-[2px] h-full bg-[#E8EAEE] relative overflow-hidden">
                        <div
                          className="w-full h-2 bg-[#3B5BDB] rounded-full animate-sn-packet-v"
                          style={{ animationDelay: `${idx * 280}ms` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Flow Connector Bridge with Active Pulsing Data Bus */}
                <div className="flex items-center justify-center gap-3 relative my-2">
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#3B5BDB]/40 to-[#3B5BDB] relative overflow-hidden">
                    <div className="absolute top-0 h-full w-8 bg-[#3B5BDB] rounded-full shadow-[0_0_8px_#3B5BDB] animate-sn-packet-h" />
                    <div className="absolute top-0 h-full w-4 bg-[#FF8A3D] rounded-full animate-sn-packet-h-delayed" />
                  </div>

                  <span className="text-[11px] font-bold text-[#3B5BDB] bg-[#EDF2FE] px-3.5 py-1.5 rounded-full border border-[#BAC8FF] shadow-xs flex items-center gap-2 animate-sn-float-subtle relative">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B5BDB] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B5BDB]" />
                    </span>
                    MERGING SIGNALS
                    <span className="text-[9px] font-mono text-[#3B5BDB]/80 bg-white/80 px-1.5 py-0.5 rounded ml-0.5 border border-[#BAC8FF]/50">
                      LIVE
                    </span>
                  </span>

                  <div className="h-[2px] flex-1 bg-gradient-to-r from-[#3B5BDB] via-[#3B5BDB]/40 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 h-full w-8 bg-[#3B5BDB] rounded-full shadow-[0_0_8px_#3B5BDB] animate-sn-packet-h" />
                    <div className="absolute top-0 h-full w-4 bg-[#FF8A3D] rounded-full animate-sn-packet-h-delayed" />
                  </div>
                </div>

                {/* Unified Foundation Target Card with Tooltip */}
                <GlassTooltip
                  title={currentStage.target}
                  content={MODULE_TOOLTIPS['COMMERCIAL DATA LAYER']?.desc || 'Unified revenue data foundation.'}
                  badge="Foundation"
                  badgeColor="blue"
                  position="top"
                >
                  <div className="bg-[#EDF2FE] border border-[#BAC8FF] rounded-xl p-4 text-center shadow-sm animate-sn-float-3 relative overflow-hidden cursor-pointer hover:border-[#3B5BDB] transition-all">
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B5BDB] to-transparent animate-sn-beam" />
                    <span className="text-[11px] font-bold text-[#3B5BDB] uppercase tracking-wider block mb-0.5">
                      Unified Foundation
                    </span>
                    <span className="text-base font-bold text-[#22252B]">
                      {currentStage.target}
                    </span>
                  </div>
                </GlassTooltip>
              </div>
            )}

            {/* Stage 2: Orchestrate the Work */}
            {activeStage === 1 && (
              <div className="space-y-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                {/* Orchestration Banner */}
                <div className="bg-[#FFF4ED] border border-[#FFD8BF] p-3.5 rounded-xl text-center shadow-xs flex items-center justify-center gap-2 animate-sn-float-subtle relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF8A3D] to-transparent animate-sn-beam" />
                  <Sparkles className="w-4 h-4 text-[#FF8A3D] animate-sn-glow" />
                  <span className="text-xs font-bold text-[#FF8A3D] uppercase tracking-wider">
                    {currentStage.orchestration}
                  </span>
                  <span className="text-[10px] text-[#FF8A3D] font-mono bg-white/80 px-2 py-0.5 rounded border border-[#FFD8BF]">
                    AI REASONING CORE
                  </span>
                </div>

                {/* Orchestration Data Bus Connector with Downward Pulse Drop Stems */}
                <div className="relative py-1 hidden sm:block">
                  <div className="h-[2px] w-full bg-[#E8EAEE] relative overflow-hidden rounded-full">
                    <div className="absolute top-0 h-full w-12 bg-[#FF8A3D] rounded-full shadow-[0_0_8px_#FF8A3D] animate-sn-packet-h" />
                    <div className="absolute top-0 h-full w-8 bg-[#3B5BDB] rounded-full animate-sn-packet-h-delayed" />
                  </div>
                  <div className="grid grid-cols-5 gap-3 h-4">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex justify-center h-full">
                        <div className="w-[2px] h-full bg-[#E8EAEE] relative overflow-hidden">
                          <div
                            className="w-full h-2 bg-[#FF8A3D] rounded-full animate-sn-packet-v shadow-[0_0_4px_#FF8A3D]"
                            style={{ animationDelay: `${i * 220}ms` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5 Modular Blocks with GlassTooltips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {currentStage.blocks?.map((block, idx) => {
                    const floatClass = idx === 0 ? 'animate-sn-float-1' : idx === 1 ? 'animate-sn-float-2' : idx === 2 ? 'animate-sn-float-3' : idx === 3 ? 'animate-sn-float-4' : 'animate-sn-float-subtle';
                    const tooltipInfo = MODULE_TOOLTIPS[block];
                    return (
                      <GlassTooltip
                        key={block}
                        title={block}
                        content={tooltipInfo?.desc || 'AI orchestration module executing continuous commercial logic.'}
                        badge={tooltipInfo?.badge || 'Live Logic'}
                        badgeColor={tooltipInfo?.badgeColor || 'orange'}
                        position="top"
                      >
                        <div
                          className={`bg-[#FAF9F6] border border-[#E8EAEE] p-3.5 rounded-xl text-center shadow-xs transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white hover:border-[#FFD8BF] hover:shadow-md hover:scale-[1.02] relative overflow-hidden cursor-pointer ${floatClass}`}
                          style={{ animationDelay: `${idx * 120}ms` }}
                        >
                          <div className="absolute top-1 right-2 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A3D] animate-ping" />
                          </div>
                          <Sparkles className="w-4 h-4 text-[#FF8A3D] mx-auto mb-1.5" />
                          <span className="text-xs font-bold text-[#22252B] block">{block}</span>
                          <span className="text-[10px] text-[#5F6673] mt-1 block">Live Logic</span>
                        </div>
                      </GlassTooltip>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Stage 3: Move Commercial Work Forward */}
            {activeStage === 2 && (
              <div className="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1">
                  {currentStage.workflow?.map((step, idx) => {
                    const floatClass = idx % 2 === 0 ? 'animate-sn-float-1' : 'animate-sn-float-2';
                    const tooltipInfo = MODULE_TOOLTIPS[step];
                    return (
                      <React.Fragment key={step}>
                        <div className="flex-1 min-w-[125px]">
                          <GlassTooltip
                            title={step}
                            content={tooltipInfo?.desc || 'Commercial milestone progression step.'}
                            badge={tooltipInfo?.badge || `Step 0${idx + 1}`}
                            badgeColor={tooltipInfo?.badgeColor || 'blue'}
                            position="top"
                          >
                            <div
                              className={`w-full bg-[#FAF9F6] border border-[#E8EAEE] p-3.5 rounded-xl text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white hover:border-[#3B5BDB] hover:shadow-sm relative overflow-hidden cursor-pointer ${floatClass}`}
                              style={{ animationDelay: `${idx * 100}ms` }}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] font-mono text-[#7A8190]">STEP 0{idx + 1}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB] animate-pulse" />
                              </div>
                              <span className="text-xs font-bold text-[#22252B] mt-0.5 block">{step}</span>
                            </div>
                          </GlassTooltip>
                        </div>

                        {/* Interactive Connector with Active Flow Pulse */}
                        {idx < (currentStage.workflow?.length || 0) - 1 && (
                          <div className="flex items-center justify-center px-1 relative flex-shrink-0">
                            <div className="w-6 h-[2px] bg-[#E8EAEE] relative overflow-hidden rounded-full">
                              <div
                                className="h-full w-3 bg-[#3B5BDB] rounded-full shadow-[0_0_6px_#3B5BDB] animate-sn-packet-h"
                                style={{ animationDelay: `${idx * 250}ms` }}
                              />
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-[#3B5BDB] -ml-1 animate-pulse" />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Stage 4: See What Matters */}
            {activeStage === 3 && (
              <div className="space-y-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                {/* Continuous Telemetry Bus Line */}
                <div className="relative py-1 hidden sm:block">
                  <div className="h-[2px] w-full bg-[#E8EAEE] relative overflow-hidden rounded-full">
                    <div className="absolute top-0 h-full w-16 bg-[#3B5BDB] rounded-full shadow-[0_0_8px_#3B5BDB] animate-sn-packet-h" />
                    <div className="absolute top-0 h-full w-8 bg-[#3B5BDB]/60 rounded-full animate-sn-packet-h-delayed" />
                  </div>
                  <div className="grid grid-cols-6 gap-3 h-3">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex justify-center h-full">
                        <div className="w-[2px] h-full bg-[#E8EAEE] relative overflow-hidden">
                          <div
                            className="w-full h-1.5 bg-[#3B5BDB] rounded-full animate-sn-packet-v"
                            style={{ animationDelay: `${i * 180}ms` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {currentStage.signals?.map((sig, idx) => {
                    const floatClass = idx % 2 === 0 ? 'animate-sn-float-subtle' : 'animate-sn-float-3';
                    const tooltipInfo = MODULE_TOOLTIPS[sig];
                    return (
                      <GlassTooltip
                        key={sig}
                        title={sig}
                        content={tooltipInfo?.desc || 'Real-time telemetry verification signal.'}
                        badge={tooltipInfo?.badge || 'Telemetry'}
                        badgeColor={tooltipInfo?.badgeColor || 'blue'}
                        position="top"
                      >
                        <div
                          className={`bg-[#FAF9F6] border border-[#E8EAEE] p-3.5 rounded-xl text-center shadow-xs transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white hover:border-[#BAC8FF] hover:shadow-sm relative overflow-hidden cursor-pointer ${floatClass}`}
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="absolute top-1.5 right-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB] inline-block animate-pulse" />
                          </div>
                          <Activity className="w-4 h-4 text-[#3B5BDB] mx-auto mb-1.5 animate-sn-glow" />
                          <span className="text-xs font-bold text-[#22252B] block">{sig}</span>
                          <span className="text-[10px] text-[#5F6673] mt-1 block">Verifiable Status</span>
                        </div>
                      </GlassTooltip>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          <div className="pt-4 border-t border-[#E8EAEE] text-center">
            <span className="text-xs text-[#7A8190] italic">
              Structured commercial workflows and verified CRM governance without manufactured charts. Hover over any block for operational details.
            </span>
          </div>
        </div>

        {/* AI-Accelerated Tasks vs Human Commercial Judgment Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* AI-Accelerated Work Card */}
          <div className="bg-white rounded-2xl p-7 border border-[#E8EAEE] shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#BAC8FF]">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F2F2EF]">
                <div className="w-10 h-10 rounded-xl bg-[#EDF2FE] text-[#3B5BDB] flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#22252B]">
                    AI-Accelerated Work
                  </h3>
                  <span className="text-xs text-[#5F6673]">
                    AI can support execution capacity:
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {AI_ACCELERATED_TASKS.map((task) => {
                  const tooltipInfo = MODULE_TOOLTIPS[task];
                  return (
                    <GlassTooltip
                      key={task}
                      title={task}
                      content={tooltipInfo?.desc || 'Automated AI acceleration task.'}
                      badge="AI Task"
                      badgeColor="blue"
                      position="top"
                    >
                      <div className="p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E8EAEE] text-xs font-medium text-[#22252B] flex items-center gap-2 transition-all duration-200 hover:bg-white hover:border-[#BAC8FF] hover:-translate-y-0.5 cursor-pointer">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB] flex-shrink-0" />
                        <span className="truncate">{task}</span>
                      </div>
                    </GlassTooltip>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2F2EF]">
              <span className="text-xs text-[#5F6673]">
                Multiplies research, data formatting, and monitoring efficiency.
              </span>
            </div>
          </div>

          {/* Human Commercial Judgment Card */}
          <div className="bg-white rounded-2xl p-7 border border-[#E8EAEE] shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#FFD8BF]">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F2F2EF]">
                <div className="w-10 h-10 rounded-xl bg-[#FFF4ED] text-[#FF8A3D] flex items-center justify-center">
                  <UserCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#22252B]">
                    Human Commercial Judgment
                  </h3>
                  <span className="text-xs text-[#5F6673]">
                    Human-led strategic &amp; high-value decisions:
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {HUMAL_TASKS_SAFE.map((task) => {
                  const tooltipInfo = MODULE_TOOLTIPS[task];
                  return (
                    <GlassTooltip
                      key={task}
                      title={task}
                      content={tooltipInfo?.desc || 'Strategic human commercial responsibility.'}
                      badge="Judgment"
                      badgeColor="orange"
                      position="top"
                    >
                      <div className="p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E8EAEE] text-xs font-medium text-[#22252B] flex items-center gap-2 transition-all duration-200 hover:bg-white hover:border-[#FFD8BF] hover:-translate-y-0.5 cursor-pointer">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A3D] flex-shrink-0" />
                        <span className="truncate">{task}</span>
                      </div>
                    </GlassTooltip>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F2F2EF]">
              <span className="text-xs text-[#5F6673]">
                Preserves consultative nuance, relationship context, and executive trust.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-10 bg-white border border-[#E8EAEE] rounded-2xl p-6 text-center shadow-xs">
          <p className="text-base sm:text-lg font-bold text-[#22252B]">
            AI increases execution capacity. Commercial judgment determines where that capacity should be applied.
          </p>
        </div>

      </div>
    </section>
  );
};

const HUMAL_TASKS_SAFE = [
  'Market selection',
  'ICP decisions',
  'Account prioritization',
  'Executive messaging',
  'Discovery',
  'Diagnosis',
  'Qualification',
  'Business case development',
  'Solution alignment',
  'Objection management',
  'Negotiation',
  'Closing',
  'Relationship management',
  'Expansion decisions',
];

