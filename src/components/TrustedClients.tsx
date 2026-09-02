import React, { useState } from 'react';
import { TRUSTED_CLIENTS } from '../data/content';

export const TrustedClients: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Triple the array for seamless infinite marquee loop
  const marqueeItems = [...TRUSTED_CLIENTS, ...TRUSTED_CLIENTS, ...TRUSTED_CLIENTS, ...TRUSTED_CLIENTS];

  return (
    <section id="trusted-clients" className="py-12 bg-white border-y border-[#E8EAEE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#7A8190] uppercase block mb-1.5">
            TRUSTED CLIENTS
          </span>
          <p className="text-sm text-[#5F6673]">
            Selected companies and technology businesses represented through the commercial experience behind SalesNego.
          </p>
        </div>
      </div>

      {/* Infinite Logo Marquee */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className={`flex items-center gap-10 sm:gap-16 w-max ${
            isPaused ? 'paused' : ''
          }`}
          style={{
            animation: 'marquee 28s linear infinite',
          }}
        >
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 px-4 py-2"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-9 sm:h-11 w-auto max-w-[140px] sm:max-w-[170px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
