import React from 'react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
            CLIENT PERSPECTIVE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight">
            Built Around Real Commercial Execution.
          </h2>
        </div>

        {/* 2 Understated Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="bg-[#FAF9F6] rounded-2xl p-7 sm:p-8 border border-[#E8EAEE] flex flex-col justify-between shadow-xs"
            >
              <p className="text-base sm:text-lg text-[#22252B] font-normal leading-relaxed italic mb-8">
                “{t.quote.replace(/^“|”$/g, '')}”
              </p>

              <div className="pt-4 border-t border-[#E8EAEE] flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-[#22252B]">{t.author}</div>
                  <div className="text-xs text-[#3B5BDB] font-medium">{t.company}</div>
                </div>
                <span className="text-[10px] font-mono text-[#7A8190] uppercase bg-white px-2 py-0.5 rounded border border-[#E8EAEE]">
                  Verified Client
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
