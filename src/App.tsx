/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedClients } from './components/TrustedClients';
import { CommercialProblem } from './components/CommercialProblem';
import { WhoWeHelp } from './components/WhoWeHelp';
import { WhatWeDo } from './components/WhatWeDo';
import { MarketIntelligenceSection } from './components/MarketIntelligenceSection';
import { RevOpsAiSection } from './components/RevOpsAiSection';
import { OperatingSystemSection } from './components/OperatingSystemSection';
import { EvidenceSection } from './components/EvidenceSection';
import { EngagementModelSection } from './components/EngagementModelSection';
import { IndustryExperienceSection } from './components/IndustryExperienceSection';
import { FounderTrackRecord } from './components/FounderTrackRecord';
import { SelectedDealsSection } from './components/SelectedDealsSection';
import { AccountGrowthSection } from './components/AccountGrowthSection';
import { WhySalesNego } from './components/WhySalesNego';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { WhatsAppPanel } from './components/WhatsAppPanel';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#22252B] flex flex-col selection:bg-[#EDF2FE] selection:text-[#3B5BDB]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Trusted Clients Marquee */}
        <TrustedClients />

        {/* 3. The Commercial Problem */}
        <CommercialProblem />

        {/* 4. Who We Help */}
        <WhoWeHelp />

        {/* 5. What We Do & Interactive Tabs */}
        <WhatWeDo />

        {/* 6. Market Intelligence Animation & Discipline */}
        <MarketIntelligenceSection />

        {/* 7. Revenue Operations + AI & Connected Workflow */}
        <RevOpsAiSection />

        {/* 8. SalesNego Commercial Execution System (Operating System) */}
        <OperatingSystemSection />

        {/* 9. Evidence Before Assumption */}
        <EvidenceSection />

        {/* 10. How We Engage & Commercial Partnership Model */}
        <EngagementModelSection />

        {/* 11. Industry & Technology Experience + Capabilities */}
        <IndustryExperienceSection />

        {/* 12. Founder Commercial Track Record (TC+ LIMS, InfoCodec, Metafic, LeadNics) */}
        <FounderTrackRecord />

        {/* 13. Selected Technology Deal Experience (8 Anonymized Cases) */}
        <SelectedDealsSection />

        {/* 14. Customer Acquisition Is Only the Beginning (Account Growth Engine) */}
        <AccountGrowthSection />

        {/* 15. Why SalesNego (Depth Not Volume) */}
        <WhySalesNego />

        {/* 16. Testimonials */}
        <TestimonialsSection />

        {/* 17. FAQ Accordion */}
        <FaqSection />

        {/* 18. Final CTA */}
        <FinalCtaSection />

        {/* 19. Contact Section & Formspree Form */}
        <ContactSection />
      </main>

      {/* Floating WhatsApp Launcher */}
      <WhatsAppPanel />

      {/* Dark Graphite Footer */}
      <Footer />
    </div>
  );
}
