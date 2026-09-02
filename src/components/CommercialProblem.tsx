import React from 'react';
import { Compass, Database, TrendingUp, Sparkles } from 'lucide-react';

export const CommercialProblem: React.FC = () => {
  const bentoBlocks = [
    {
      number: '01',
      title: 'Market Intelligence',
      copy: 'Understand the market, customer profile, buying committee, competitive context and commercial signals before deciding where to invest sales effort.',
      icon: Compass,
      accentColor: '#3B5BDB',
      bgSoft: 'bg-[#EDF2FE]',
      borderHover: 'hover:border-[#BAC8FF]',
      chips: ['Buying Committee Mapping', 'Trigger Signals', 'ICP Validation'],
    },
    {
      number: '02',
      title: 'Revenue Infrastructure',
      copy: 'Create the CRM, qualification, workflows, data discipline and commercial visibility required to operate consistently.',
      icon: Database,
      accentColor: '#FF8A3D',
      bgSoft: 'bg-[#FFF4ED]',
      borderHover: 'hover:border-[#FFD8BF]',
      chips: ['CRM Architecture', 'Workflow Automation', 'Exit Criteria'],
    },
    {
      number: '03',
      title: 'Commercial Execution',
      copy: 'Turn commercial intelligence into conversations, opportunities, proposals, closed business and account growth.',
      icon: TrendingUp,
      accentColor: '#3B5BDB',
      bgSoft: 'bg-[#EDF2FE]',
      borderHover: 'hover:border-[#BAC8FF]',
      chips: ['Executive Discovery', 'Solution Negotiation', 'Account Expansion'],
    },
  ];

  return (
    <section id="commercial-problem" className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            THE COMMERCIAL PROBLEM
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight mb-5">
            Most revenue problems start before the first sales call.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6673] leading-relaxed mb-3">
            Weak targeting, unclear positioning, fragmented data and inconsistent commercial execution create problems long before a prospect reaches a sales conversation.
          </p>
          <p className="text-base text-[#22252B] font-semibold">
            SalesNego connects three disciplines that are often managed separately.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {bentoBlocks.map((block) => (
            <div
              key={block.number}
              className={`bg-white rounded-2xl p-7 border border-[#E8EAEE] transition-all duration-300 ${block.borderHover} shadow-[0_4px_16px_rgba(34,37,43,0.03)] flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-11 h-11 rounded-xl ${block.bgSoft} flex items-center justify-center`}>
                    <block.icon className="w-5 h-5" style={{ color: block.accentColor }} />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#7A8190]">
                    BLOCK {block.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#22252B] mb-3">
                  {block.title}
                </h3>
                <p className="text-sm text-[#5F6673] leading-relaxed mb-6">
                  {block.copy}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2F2EF] flex flex-wrap gap-1.5">
                {block.chips.map((chip) => (
                  <span
                    key={chip}
                    className="text-[11px] font-medium text-[#22252B] bg-[#F2F2EF] px-2.5 py-1 rounded-md"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line Card */}
        <div className="bg-white border border-[#E8EAEE] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-[#7A8190] uppercase tracking-wider block">
              BOTTOM LINE
            </span>
            <div className="text-base sm:text-lg font-bold text-[#22252B]">
              Strategy gives execution direction. Execution gives strategy evidence.
            </div>
            <div className="text-sm font-semibold text-[#3B5BDB]">
              SalesNego connects both.
            </div>
          </div>

          <a
            href="#what-we-do"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#22252B] hover:bg-[#343D46] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
          >
            <span>See Connected Capabilities</span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A3D]" />
          </a>
        </div>

      </div>
    </section>
  );
};
