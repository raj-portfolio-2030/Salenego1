import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Globe } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/content';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    selling: '',
    targetMarket: '',
    goal: '',
    message: '',
    _gotcha: '', // Honeypot field
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.selling.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Business Email, and What you are selling).');
      return;
    }

    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid business email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(CONTACT_DETAILS.formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          website: formData.website,
          selling: formData.selling,
          targetMarket: formData.targetMarket,
          goal: formData.goal,
          message: formData.message,
          _gotcha: formData._gotcha,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          website: '',
          selling: '',
          targetMarket: '',
          goal: '',
          message: '',
          _gotcha: '',
        });
      } else {
        const errorData = await response.json();
        setStatus('error');
        setErrorMessage(errorData.error || 'Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Unable to connect to submission server. Please email us directly at sales@salesnego.com.');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#E8EAEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#3B5BDB] uppercase block mb-3">
                DIRECT ENGAGEMENT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22252B] tracking-tight leading-tight mb-4">
                Contact SalesNego
              </h2>
              <p className="text-base text-[#5F6673] leading-relaxed mb-8">
                Initiate a discussion around your go-to-market priorities, revenue operations, or founder-led sales execution.
              </p>

              {/* Markets Served */}
              <div className="bg-white rounded-2xl p-6 border border-[#E8EAEE] shadow-xs mb-6">
                <span className="text-[11px] font-bold text-[#7A8190] uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#3B5BDB]" />
                  MARKETS SERVED
                </span>
                <div className="text-sm font-bold text-[#22252B]">
                  {CONTACT_DETAILS.marketsServed}
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 border border-[#E8EAEE] shadow-xs mb-6">
                <span className="text-[11px] font-bold text-[#7A8190] uppercase tracking-wider block mb-1">
                  EMAIL
                </span>
                <a
                  href={CONTACT_DETAILS.emailLink}
                  className="text-base font-bold text-[#3B5BDB] hover:text-[#2F49B0] flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>{CONTACT_DETAILS.email}</span>
                </a>
              </div>

              {/* WhatsApp Numbers */}
              <div className="bg-white rounded-2xl p-6 border border-[#E8EAEE] shadow-xs">
                <span className="text-[11px] font-bold text-[#7A8190] uppercase tracking-wider block mb-3">
                  START A CONVERSATION
                </span>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8EAEE]">
                    <div>
                      <span className="text-xs text-[#5F6673] block">India WhatsApp</span>
                      <a
                        href={`https://wa.me/${CONTACT_DETAILS.whatsapp.india.rawNumber}?text=${encodeURIComponent(CONTACT_DETAILS.whatsapp.prefilledMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[#22252B] hover:text-[#3B5BDB] flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#3B5BDB]" />
                        <span>{CONTACT_DETAILS.whatsapp.india.number}</span>
                      </a>
                    </div>
                    <span className="text-[10px] text-[#3B5BDB] bg-[#EDF2FE] px-2 py-0.5 rounded font-medium">
                      Direct
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#5F6673] block">UAE WhatsApp</span>
                      <a
                        href={`https://wa.me/${CONTACT_DETAILS.whatsapp.uae.rawNumber}?text=${encodeURIComponent(CONTACT_DETAILS.whatsapp.prefilledMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[#22252B] hover:text-[#3B5BDB] flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#3B5BDB]" />
                        <span>{CONTACT_DETAILS.whatsapp.uae.number}</span>
                      </a>
                    </div>
                    <span className="text-[10px] text-[#3B5BDB] bg-[#EDF2FE] px-2 py-0.5 rounded font-medium">
                      Direct
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <span className="text-xs text-[#7A8190]">
                Confidentiality assured. We evaluate fit and respond within one business day.
              </span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#E8EAEE] shadow-sm">
              <h3 className="text-xl font-bold text-[#22252B] mb-2">
                Start the Conversation
              </h3>
              <p className="text-xs text-[#5F6673] mb-6">
                Tell us about your product, market focus, and commercial goals.
              </p>

              {status === 'success' ? (
                <div className="p-8 text-center bg-[#EDF2FE] border border-[#BAC8FF] rounded-2xl animate-in zoom-in-95">
                  <CheckCircle2 className="w-12 h-12 text-[#3B5BDB] mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-[#22252B] mb-2">
                    Message Received
                  </h4>
                  <p className="text-sm text-[#5F6673] mb-6">
                    Thank you for reaching out. We will review your commercial requirements and respond shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2.5 bg-[#3B5BDB] text-white text-xs font-semibold rounded-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {status === 'error' && (
                    <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-xs font-bold text-[#22252B] block mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8EAEE] focus:border-[#3B5BDB] focus:bg-white rounded-lg text-sm text-[#20262B] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-xs font-bold text-[#20262B] block mb-1">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8EAEE] focus:border-[#3B5BDB] focus:bg-white rounded-lg text-sm text-[#20262B] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="text-xs font-bold text-[#20262B] block mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8EAEE] focus:border-[#3B5BDB] focus:bg-white rounded-lg text-sm text-[#20262B] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="website" className="text-xs font-bold text-[#20262B] block mb-1">
                        Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://company.com"
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8EAEE] focus:border-[#3B5BDB] focus:bg-white rounded-lg text-sm text-[#20262B] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="selling" className="text-xs font-bold text-[#20262B] block mb-1">
                      What are you selling? <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="selling"
                      name="selling"
                      required
                      value={formData.selling}
                      onChange={handleChange}
                      placeholder="e.g. B2B SaaS platform for enterprise compliance"
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8EAEE] focus:border-[#3B5BDB] focus:bg-white rounded-lg text-sm text-[#20262B] outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="targetMarket" className="text-xs font-bold text-[#20262B] block mb-1">
                        Target Market
                      </label>
                      <input
                        type="text"
                        id="targetMarket"
                        name="targetMarket"
                        value={formData.targetMarket}
                        onChange={handleChange}
                        placeholder="e.g. UAE, North America, Europe"
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8EAEE] focus:border-[#3B5BDB] focus:bg-white rounded-lg text-sm text-[#20262B] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="goal" className="text-xs font-bold text-[#20262B] block mb-1">
                        What are you trying to achieve?
                      </label>
                      <input
                        type="text"
                        id="goal"
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        placeholder="e.g. New market entry, outbound pipeline"
                        className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8EAEE] focus:border-[#3B5BDB] focus:bg-white rounded-lg text-sm text-[#20262B] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs font-bold text-[#20262B] block mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Additional context on current commercial bottlenecks, sales cycle or requirements..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-[#E8EAEE] focus:border-[#3B5BDB] focus:bg-white rounded-lg text-sm text-[#20262B] outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3B5BDB] hover:bg-[#2F49B0] disabled:bg-[#7A8190] text-white text-[15px] font-semibold rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BDB]"
                  >
                    {status === 'submitting' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Start the Conversation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
