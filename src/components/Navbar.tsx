import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { APPROVED_LOGOS, CONTACT_DETAILS } from '../data/content';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E8EAEE] shadow-[0_4px_20px_-4px_rgba(34,37,43,0.04)] py-3'
          : 'bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB] rounded-lg">
          <img
            src={APPROVED_LOGOS.salesNegoLight}
            alt="SalesNego"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            width="160"
            height="36"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-[14px] font-medium text-[#5F6673] hover:text-[#22252B] hover:bg-[#F2F2EF] rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            id="nav-primary-cta"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#3B5BDB] hover:bg-[#2F4BC4] text-white text-[14px] font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB] focus-visible:ring-offset-2 whitespace-nowrap"
          >
            Discuss Your Growth Priorities
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            className="sm:hidden inline-flex items-center justify-center px-3 py-1.5 bg-[#3B5BDB] text-white text-[12px] font-semibold rounded-md"
          >
            Discuss
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#5F6673] hover:text-[#22252B] hover:bg-[#F2F2EF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E8EAEE] bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-[15px] font-medium text-[#22252B] hover:bg-[#F2F2EF] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#E8EAEE] space-y-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#3B5BDB] text-white text-[14px] font-semibold rounded-lg shadow-sm"
            >
              Discuss Your Growth Priorities
            </a>
            <a
              href={CONTACT_DETAILS.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#F2F2EF] text-[#22252B] text-[13px] font-medium rounded-lg hover:bg-[#E8EAEE] transition-colors"
            >
              <span>Book a 30-Minute Conversation</span>
              <ArrowUpRight className="w-4 h-4 text-[#5F6673]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
