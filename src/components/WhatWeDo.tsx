import React, { useState } from 'react';
import { WHAT_WE_DO_SERVICES, SERVICE_TABS } from '../data/content';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';

export const WhatWeDo: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section id="what-we-do" className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            WHAT WE DO
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight">
            Three Connected Commercial Capabilities
          </h2>
        </div>

        {/* Asymmetric Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Service 01: GTM Strategy & Market Intelligence */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-7 border border-[#E8EAEE] shadow-[0_4px_20px_rgba(34,37,43,0.03)] flex flex-col justify-between hover:border-[#D6D9E0] transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#3B5BDB] bg-[#EDF2FE] px-2.5 py-1 rounded-md">
                  01
                </span>
                <span className="text-[11px] font-semibold text-[#7A8190] uppercase tracking-wider">
                  Foundation
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#22252B] mb-2">
                {WHAT_WE_DO_SERVICES[0].title}
              </h3>
              <p className="text-sm text-[#5F6673] mb-6 leading-relaxed">
                {WHAT_WE_DO_SERVICES[0].shortCopy}
              </p>

              {/* Capabilities List */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold text-[#22252B] uppercase tracking-wider block">
                  Capabilities
                </span>
                <ul className="space-y-1.5">
                  {WHAT_WE_DO_SERVICES[0].capabilities.map((cap) => (
                    <li key={cap} className="text-xs text-[#5F6673] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB]" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outputs */}
            <div className="pt-5 border-t border-[#F2F2EF]">
              <span className="text-[11px] font-bold text-[#22252B] uppercase tracking-wider block mb-2">
                Outputs
              </span>
              <div className="flex flex-wrap gap-1.5">
                {WHAT_WE_DO_SERVICES[0].outputs.map((out) => (
                  <span
                    key={out}
                    className="text-[11px] font-medium text-[#3B5BDB] bg-[#EDF2FE] border border-[#BAC8FF] px-2 py-0.5 rounded"
                  >
                    {out}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Service 02: Revenue Operations & AI-Accelerated Sales */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-7 border border-[#E8EAEE] shadow-[0_4px_20px_rgba(34,37,43,0.03)] flex flex-col justify-between hover:border-[#D6D9E0] transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#FF8A3D] bg-[#FFF4ED] px-2.5 py-1 rounded-md">
                  02
                </span>
                <span className="text-[11px] font-semibold text-[#7A8190] uppercase tracking-wider">
                  Operating Engine
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#22252B] mb-2">
                {WHAT_WE_DO_SERVICES[1].title}
              </h3>
              <p className="text-sm text-[#5F6673] mb-6 leading-relaxed">
                {WHAT_WE_DO_SERVICES[1].shortCopy}
              </p>

              {/* Capabilities List */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold text-[#22252B] uppercase tracking-wider block">
                  Capabilities
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {WHAT_WE_DO_SERVICES[1].capabilities.map((cap) => (
                    <li key={cap} className="text-xs text-[#5F6673] flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A3D] flex-shrink-0" />
                      <span className="truncate">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outputs */}
            <div className="pt-5 border-t border-[#F2F2EF]">
              <span className="text-[11px] font-bold text-[#22252B] uppercase tracking-wider block mb-2">
                Outputs
              </span>
              <div className="flex flex-wrap gap-1.5">
                {WHAT_WE_DO_SERVICES[1].outputs.map((out) => (
                  <span
                    key={out}
                    className="text-[11px] font-medium text-[#FF8A3D] bg-[#FFF4ED] border border-[#FFD8BF] px-2 py-0.5 rounded"
                  >
                    {out}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Service 03: End-to-End Commercial Execution */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-7 border border-[#E8EAEE] shadow-[0_4px_20px_rgba(34,37,43,0.03)] flex flex-col justify-between hover:border-[#D6D9E0] transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#3B5BDB] bg-[#EDF2FE] px-2.5 py-1 rounded-md">
                  03
                </span>
                <span className="text-[11px] font-semibold text-[#7A8190] uppercase tracking-wider">
                  Full Execution
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#22252B] mb-2">
                {WHAT_WE_DO_SERVICES[2].title}
              </h3>
              <p className="text-sm text-[#5F6673] mb-6 leading-relaxed">
                {WHAT_WE_DO_SERVICES[2].shortCopy}
              </p>

              {/* Capabilities List */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold text-[#22252B] uppercase tracking-wider block">
                  Capabilities
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {WHAT_WE_DO_SERVICES[2].capabilities.map((cap) => (
                    <li key={cap} className="text-xs text-[#5F6673] flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB] flex-shrink-0" />
                      <span className="truncate">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outputs */}
            <div className="pt-5 border-t border-[#F2F2EF]">
              <span className="text-[11px] font-bold text-[#22252B] uppercase tracking-wider block mb-2">
                Outputs
              </span>
              <div className="flex flex-wrap gap-1.5">
                {WHAT_WE_DO_SERVICES[2].outputs.map((out) => (
                  <span
                    key={out}
                    className="text-[11px] font-medium text-[#3B5BDB] bg-[#EDF2FE] border border-[#BAC8FF] px-2 py-0.5 rounded"
                  >
                    {out}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Section 6 & 23: Interactive Service Tabs */}
        <div className="bg-white border border-[#E8EAEE] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#E8EAEE] gap-4">
            <div>
              <span className="text-xs font-bold text-[#7A8190] uppercase tracking-wider block mb-1">
                Connected Execution Tracks
              </span>
              <h3 className="text-lg font-bold text-[#22252B]">
                Interactive Service Workflows
              </h3>
            </div>

            {/* Tab Selectors */}
            <div className="flex flex-wrap gap-2 bg-[#F2F2EF] p-1.5 rounded-xl border border-[#E8EAEE]">
              {SERVICE_TABS.map((tab, idx) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabIndex(idx)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB] ${
                    activeTabIndex === idx
                      ? 'bg-white text-[#22252B] shadow-sm'
                      : 'text-[#5F6673] hover:text-[#22252B]'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Flow Visual */}
          <div className="pt-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
              {SERVICE_TABS[activeTabIndex].steps.map((step, index) => (
                <React.Fragment key={step}>
                  <div className="flex-shrink-0 bg-[#F7F7F4] border border-[#E8EAEE] hover:border-[#3B5BDB] rounded-xl px-4 py-3 min-w-[130px] text-center transition-all">
                    <span className="text-[10px] font-mono font-bold text-[#7A8190] block">
                      STEP 0{index + 1}
                    </span>
                    <span className="text-xs font-bold text-[#22252B] mt-0.5 block">
                      {step}
                    </span>
                  </div>
                  {index < SERVICE_TABS[activeTabIndex].steps.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-[#7A8190] flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
