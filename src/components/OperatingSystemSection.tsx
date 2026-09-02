import React, { useState } from 'react';
import { OPERATING_SYSTEM_STAGES } from '../data/content';
import { ChevronRight, CheckCircle2, Cpu, Database, Compass, Layers } from 'lucide-react';

export const OperatingSystemSection: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('understand');

  const activeStage = OPERATING_SYSTEM_STAGES.find((s) => s.id === selectedStageId) || OPERATING_SYSTEM_STAGES[0];

  return (
    <section id="operating-system" className="py-20 lg:py-28 bg-white border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            OUR OPERATING SYSTEM
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight mb-4">
            The SalesNego Commercial Execution System
          </h2>
          <p className="text-base text-[#5F6673]">
            A connected end-to-end framework translating strategy into closed revenue and account retention.
          </p>
        </div>

        {/* Connected Process Flow Grid */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {OPERATING_SYSTEM_STAGES.map((stage, idx) => {
              const isSelected = stage.id === selectedStageId;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[96px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB] ${
                    isSelected
                      ? 'bg-[#EDF2FE] border-[#BAC8FF] shadow-sm -translate-y-1'
                      : 'bg-[#F7F7F4] border-[#E8EAEE] hover:bg-white hover:border-[#D6D9E0]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono font-bold text-[#7A8190]">
                      0{idx + 1}
                    </span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#3B5BDB]" />}
                  </div>
                  <div>
                    <span className={`text-xs font-bold block ${isSelected ? 'text-[#3B5BDB]' : 'text-[#22252B]'}`}>
                      {stage.name}
                    </span>
                    <span className="text-[10px] text-[#5F6673] mt-0.5 block">
                      {stage.items.length} Elements
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Details Panel */}
        <div className="bg-[#F7F7F4] border border-[#E8EAEE] rounded-2xl p-6 sm:p-8 lg:p-10 mb-10 shadow-sm transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E8EAEE] gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-[#3B5BDB] uppercase tracking-wider block mb-1">
                Active Stage Architecture
              </span>
              <h3 className="text-2xl font-bold text-[#22252B]">
                {activeStage.name}
              </h3>
            </div>
            <p className="text-sm text-[#5F6673] max-w-lg">
              {activeStage.description}
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold text-[#22252B] uppercase tracking-wider block">
              Core Stage Deliverables &amp; Focus:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {activeStage.items.map((item) => (
                <div
                  key={item}
                  className="bg-white p-3.5 rounded-xl border border-[#E8EAEE] flex items-center gap-2.5 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#3B5BDB] flex-shrink-0" />
                  <span className="text-xs font-semibold text-[#22252B]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Foundation Strip */}
        <div className="bg-[#22252B] text-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono font-bold text-[#FF8A3D] uppercase tracking-wider block mb-1">
                FOUNDATION
              </span>
              <div className="text-base sm:text-lg font-bold text-white tracking-wide">
                DATA <span className="text-[#7A8190] mx-2">|</span> REVOPS <span className="text-[#7A8190] mx-2">|</span> AI <span className="text-[#7A8190] mx-2">|</span> COMMERCIAL INTELLIGENCE
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
