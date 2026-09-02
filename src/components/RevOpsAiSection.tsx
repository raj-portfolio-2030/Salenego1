import React, { useState, useEffect, useRef } from 'react';
import { AI_ACCELERATED_TASKS, HUMAN_COMMERCIAL_JUDGMENT } from '../data/content';
import { Bot, UserCheck2, Cpu, Sparkles, ArrowRight, Layers, Database, ShieldCheck, Activity } from 'lucide-react';

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
          className="bg-white border border-[#E8EAEE] rounded-2xl p-6 sm:p-8 lg:p-10 mb-14 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-md hover:border-[#D6D9E0]"
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
          <div className="py-8 min-h-[290px] flex flex-col justify-center relative overflow-hidden">
            
            {/* Stage 1: Connect the Data */}
            {activeStage === 0 && (
              <div className="space-y-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                {/* 6 Raw Stream Input Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
                  {currentStage.inputs?.map((inp, idx) => {
                    const floatClass = idx % 2 === 0 ? 'animate-sn-float-1' : 'animate-sn-float-2';
                    return (
                      <div
                        key={inp}
                        className={`bg-[#FAF9F6] border border-[#E8EAEE] p-3 rounded-xl text-center shadow-xs transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white hover:border-[#BAC8FF] hover:shadow-sm ${floatClass}`}
                        style={{ animationDelay: `${idx * 150}ms` }}
                      >
                        <Database className="w-4 h-4 text-[#3B5BDB] mx-auto mb-1.5 animate-sn-glow" />
                        <span className="text-xs font-bold text-[#22252B] block truncate">{inp}</span>
                        <span className="text-[10px] text-[#7A8190]">Raw Stream</span>
                      </div>
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

                {/* Unified Foundation Target Card */}
                <div className="bg-[#EDF2FE] border border-[#BAC8FF] rounded-xl p-4 text-center shadow-sm animate-sn-float-3 relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B5BDB] to-transparent animate-sn-beam" />
                  <span className="text-[11px] font-bold text-[#3B5BDB] uppercase tracking-wider block mb-0.5">
                    Unified Foundation
                  </span>
                  <span className="text-base font-bold text-[#22252B]">
                    {currentStage.target}
                  </span>
                </div>
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

                {/* 5 Modular Blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {currentStage.blocks?.map((block, idx) => {
                    const floatClass = idx === 0 ? 'animate-sn-float-1' : idx === 1 ? 'animate-sn-float-2' : idx === 2 ? 'animate-sn-float-3' : idx === 3 ? 'animate-sn-float-4' : 'animate-sn-float-subtle';
                    return (
                      <div
                        key={block}
                        className={`bg-[#FAF9F6] border border-[#E8EAEE] p-3.5 rounded-xl text-center shadow-xs transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white hover:border-[#FFD8BF] hover:shadow-md hover:scale-[1.02] relative overflow-hidden ${floatClass}`}
                        style={{ animationDelay: `${idx * 120}ms` }}
                      >
                        <div className="absolute top-1 right-2 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A3D] animate-ping" />
                        </div>
                        <Sparkles className="w-4 h-4 text-[#FF8A3D] mx-auto mb-1.5" />
                        <span className="text-xs font-bold text-[#22252B] block">{block}</span>
                        <span className="text-[10px] text-[#5F6673] mt-1 block">Live Logic</span>
                      </div>
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
                    return (
                      <React.Fragment key={step}>
                        <div
                          className={`flex-1 min-w-[125px] bg-[#FAF9F6] border border-[#E8EAEE] p-3.5 rounded-xl text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white hover:border-[#3B5BDB] hover:shadow-sm relative overflow-hidden ${floatClass}`}
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-mono text-[#7A8190]">STEP 0{idx + 1}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB] animate-pulse" />
                          </div>
                          <span className="text-xs font-bold text-[#22252B] mt-0.5 block">{step}</span>
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
                    return (
                      <div
                        key={sig}
                        className={`bg-[#FAF9F6] border border-[#E8EAEE] p-3.5 rounded-xl text-center shadow-xs transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white hover:border-[#BAC8FF] hover:shadow-sm relative overflow-hidden ${floatClass}`}
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="absolute top-1.5 right-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB] inline-block animate-pulse" />
                        </div>
                        <Activity className="w-4 h-4 text-[#3B5BDB] mx-auto mb-1.5 animate-sn-glow" />
                        <span className="text-xs font-bold text-[#22252B] block">{sig}</span>
                        <span className="text-[10px] text-[#5F6673] mt-1 block">Verifiable Status</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          <div className="pt-4 border-t border-[#E8EAEE] text-center">
            <span className="text-xs text-[#7A8190] italic">
              Structured commercial workflows and verified CRM governance without manufactured charts.
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
                {AI_ACCELERATED_TASKS.map((task) => (
                  <div
                    key={task}
                    className="p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E8EAEE] text-xs font-medium text-[#22252B] flex items-center gap-2 transition-all duration-200 hover:bg-white hover:border-[#BAC8FF] hover:-translate-y-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB]" />
                    <span className="truncate">{task}</span>
                  </div>
                ))}
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
                {HUMAL_TASKS_SAFE.map((task) => (
                  <div
                    key={task}
                    className="p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E8EAEE] text-xs font-medium text-[#22252B] flex items-center gap-2 transition-all duration-200 hover:bg-white hover:border-[#FFD8BF] hover:-translate-y-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A3D]" />
                    <span className="truncate">{task}</span>
                  </div>
                ))}
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
