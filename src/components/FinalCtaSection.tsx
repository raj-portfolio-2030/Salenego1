import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/content';

export const FinalCtaSection: React.FC = () => {
  return (
    <section id="final-cta" className="py-20 bg-white border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F6] border border-[#E8EAEE] rounded-3xl p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-xs">
          
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            START WITH THE COMMERCIAL PROBLEM
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#22252B] tracking-tight leading-tight mb-5">
            Where Should Your Next Revenue Opportunity Come From?
          </h2>

          <p className="text-base sm:text-lg text-[#5F6673] leading-relaxed max-w-2xl mx-auto mb-8">
            Tell us what you are selling, where you want to grow and what is preventing the commercial motion from moving faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#3B5BDB] hover:bg-[#2F49B0] text-white text-[15px] font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Discuss Your Growth Priorities</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={CONTACT_DETAILS.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 bg-white hover:bg-[#F7F7F4] text-[#22252B] border border-[#E8EAEE] text-[15px] font-semibold rounded-lg shadow-sm transition-all duration-200"
            >
              <span>Book a 30-Minute Conversation</span>
              <ArrowUpRight className="w-4 h-4 text-[#5F6673]" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
