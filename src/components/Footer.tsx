import React from 'react';
import { APPROVED_LOGOS, CONTACT_DETAILS } from '../data/content';
import { Mail, ArrowUpRight, Globe, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Our System', href: '#operating-system' },
    { label: 'AI + RevOps', href: '#revops-ai' },
    { label: 'Experience', href: '#experience' },
    { label: 'Why SalesNego', href: '#why-salesnego' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#22252B] text-white pt-16 pb-12 border-t border-[#343D46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#343D46]">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={APPROVED_LOGOS.salesNegoAlt}
                alt="SalesNego"
                className="h-9 w-auto object-contain brightness-110"
                width="160"
                height="36"
              />
            </div>

            <p className="text-sm text-[#CED8DD] leading-relaxed max-w-md">
              Founder-led commercial execution for B2B SaaS, AI and technology companies.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-[#FF8A3D] uppercase tracking-wider block mb-1">
                MARKETS SERVED
              </span>
              <span className="text-xs text-[#CED8DD]">
                {CONTACT_DETAILS.marketsServed}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-4">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-[#CED8DD] hover:text-[#FF8A3D] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Engagement & CTA */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-1">
              Direct Contact
            </span>

            <div>
              <a
                href={CONTACT_DETAILS.emailLink}
                className="text-xs text-[#CED8DD] hover:text-[#FF8A3D] flex items-center gap-2 py-1 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF8A3D]" />
                <span>{CONTACT_DETAILS.email}</span>
              </a>
            </div>

            <div className="space-y-1 pt-1">
              <div className="text-[11px] text-[#7A8190]">India WhatsApp: {CONTACT_DETAILS.whatsapp.india.number}</div>
              <div className="text-[11px] text-[#7A8190]">UAE WhatsApp: {CONTACT_DETAILS.whatsapp.uae.number}</div>
            </div>

            <div className="pt-2">
              <a
                href={CONTACT_DETAILS.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#3B5BDB] hover:bg-[#2F49B0] text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
              >
                <span>Book a 30-Minute Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A8190]">
          <div>
            &copy; {new Date().getFullYear()} SalesNego. All rights reserved.
          </div>
          <div>
            B2B SaaS GTM, RevOps &amp; Commercial Execution
          </div>
        </div>

      </div>
    </footer>
  );
};
