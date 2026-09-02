import React, { useState, useEffect } from 'react';
import { MessageSquare, X, ArrowUpRight, Globe, Smartphone } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/content';

export const WhatsAppPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<'india' | 'uae'>('india');

  // Coarse country detection based on timezone or navigator locale without GPS permission
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();
      if (tz.includes('dubai') || tz.includes('uae') || tz.includes('gulf')) {
        setSelectedRegion('uae');
      } else {
        setSelectedRegion('india');
      }
    } catch {
      setSelectedRegion('india');
    }
  }, []);

  const activeContact = CONTACT_DETAILS.whatsapp[selectedRegion];
  const encodedMsg = encodeURIComponent(CONTACT_DETAILS.whatsapp.prefilledMessage);
  const whatsappUrl = `https://wa.me/${activeContact.rawNumber}?text=${encodedMsg}`;

  // SVG QR Code generator for the WhatsApp URL
  const qrSvgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(whatsappUrl)}&color=20-38-44&bgcolor=ffffff&margin=1`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="sn-glass-panel group flex items-center gap-3 px-4 py-3 rounded-full hover:bg-white text-[#22252B] border border-[#E8EAEE] shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB] hover:scale-105"
          aria-label="Talk to SalesNego on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-[#3B5BDB] flex items-center justify-center text-white shadow-xs">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div className="text-left pr-1 hidden sm:block">
            <span className="text-[10px] font-bold text-[#7A8190] uppercase tracking-wider block">
              Direct Channel
            </span>
            <span className="text-xs font-bold text-[#22252B] group-hover:text-[#3B5BDB] transition-colors">
              Talk to SalesNego
            </span>
          </div>
        </button>
      )}

      {/* Restrained Light Glassmorphism Panel */}
      {isOpen && (
        <div className="sn-glass-panel rounded-2xl p-6 w-[340px] max-w-[calc(100vw-2rem)] border border-white/80 shadow-2xl animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E8EAEE]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#3B5BDB] text-white flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-[#22252B]">
                Talk to SalesNego
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[#7A8190] hover:text-[#22252B] hover:bg-[#F7F7F4] transition-colors"
              aria-label="Close WhatsApp panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Copy */}
          <p className="text-xs text-[#5F6673] py-3 leading-relaxed">
            Have a GTM, RevOps or sales-execution challenge? Connect directly with founder commercial execution.
          </p>

          {/* Region Switcher */}
          <div className="flex items-center gap-1 bg-[#F7F7F4] p-1 rounded-lg mb-4 text-[11px] font-semibold">
            <button
              type="button"
              onClick={() => setSelectedRegion('india')}
              className={`flex-1 py-1 px-2 rounded-md transition-all ${
                selectedRegion === 'india'
                  ? 'bg-white text-[#22252B] shadow-xs'
                  : 'text-[#5F6673] hover:text-[#22252B]'
              }`}
            >
              India (+91)
            </button>
            <button
              type="button"
              onClick={() => setSelectedRegion('uae')}
              className={`flex-1 py-1 px-2 rounded-md transition-all ${
                selectedRegion === 'uae'
                  ? 'bg-white text-[#22252B] shadow-xs'
                  : 'text-[#5F6673] hover:text-[#22252B]'
              }`}
            >
              UAE (+971)
            </button>
          </div>

          {/* Desktop QR Code Block (hidden on small mobile screens) */}
          <div className="hidden sm:flex flex-col items-center bg-white p-3 rounded-xl border border-[#E8EAEE] mb-4">
            <img
              src={qrSvgUrl}
              alt="Scan QR to chat on WhatsApp"
              className="w-28 h-28 object-contain rounded-md"
              width="112"
              height="112"
            />
            <span className="text-[10px] text-[#7A8190] mt-2 flex items-center gap-1">
              <Smartphone className="w-3 h-3 text-[#3B5BDB]" />
              Scan QR to continue on your phone
            </span>
          </div>

          {/* Mobile / Direct Action CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#3B5BDB] hover:bg-[#2F49B0] text-white text-xs font-bold rounded-xl shadow-sm transition-colors"
          >
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <div className="mt-3 text-center">
            <span className="text-[10px] text-[#7A8190]">
              Direct human communication • {activeContact.number}
            </span>
          </div>

        </div>
      )}
    </div>
  );
};
