export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  type: string;
  requirement: string;
  businessProblem: string;
  commercialChallenge: string;
  salesApproach: string;
  solution: string;
  salesOutcome: string;
  commercialOwnership?: string;
  timingFooter?: string;
  logoUrl?: string;
  isFounderTrackRecord?: boolean;
}

export const APPROVED_LOGOS = {
  salesNegoLight: "https://ik.imagekit.io/4rtwqlnkg/SalesNego%20Orginal%20Logos/1.png",
  salesNegoAlt: "https://ik.imagekit.io/4rtwqlnkg/SalesNego%20Orginal%20Logos/2.png",
  salesNegoMark: "https://ik.imagekit.io/4rtwqlnkg/SalesNego%20Orginal%20Logos/3.png",
  tcLims: "https://ik.imagekit.io/4rtwqlnkg/logos/TCLIMS.jpg",
  kidOye: "https://ik.imagekit.io/4rtwqlnkg/logos/KidOye.jpg",
  infoCodec: "https://ik.imagekit.io/4rtwqlnkg/logos/InfoCodec.jpg",
  mapleTax: "https://ik.imagekit.io/4rtwqlnkg/logos/MapLetax.jpg",
  metafic: "https://ik.imagekit.io/4rtwqlnkg/Screenshot%202026-09-02%20at%2006.46.48.png",
  leadNics: "https://ik.imagekit.io/4rtwqlnkg/Leadnics-Logo.svg",
  aaravNexus: "https://ik.imagekit.io/4rtwqlnkg/Aarav_Nexus_Web_Optimized.svg",
};

export const TRUSTED_CLIENTS = [
  { name: "TC+ LIMS", logo: APPROVED_LOGOS.tcLims },
  { name: "KidOye", logo: APPROVED_LOGOS.kidOye },
  { name: "InfoCodec", logo: APPROVED_LOGOS.infoCodec },
  { name: "Maple Tax", logo: APPROVED_LOGOS.mapleTax },
];

export const FOUNDER_TRACK_RECORD: CaseStudy[] = [
  {
    id: "founder-tc-lims",
    title: "TC+ LIMS",
    industry: "Laboratory, Testing & Quality Technology",
    type: "B2B SaaS / LIMS / Customization",
    logoUrl: APPROVED_LOGOS.tcLims,
    isFounderTrackRecord: true,
    requirement: "Help testing laboratories move from manual processes toward structured digital laboratory workflows.",
    businessProblem: "Manual laboratory tracking led to fragmented records, compliance challenges and lack of visibility into sample stages.",
    commercialChallenge: "Laboratories often require more than a standard SaaS product. Buying decisions depend on workflow fit, configuration needs, integrations, operational adoption and confidence that the platform can support real laboratory processes.",
    salesApproach: "Managed the commercial cycle from customer discovery and workflow understanding through product positioning, solution alignment, customization discussions, proposal development and follow-up. Worked with product and technical teams when deeper configuration or integration validation was required.",
    solution: "Positioned TC+ LIMS around laboratory digitization, workflow control, sample and testing processes, operational visibility and customer-specific configuration.",
    salesOutcome: "Converted qualified laboratory requirements into SaaS and customization opportunities while supporting customer adoption, implementation coordination and ongoing account growth.",
    commercialOwnership: "End-to-End Sales | SaaS | Solution Selling | Account Management | Customer Expansion",
  },
  {
    id: "founder-infocodec",
    title: "InfoCodec",
    industry: "Insurance & Enterprise Technology",
    type: "Enterprise IT Services / Specialist Technology Resources",
    logoUrl: APPROVED_LOGOS.infoCodec,
    isFounderTrackRecord: true,
    requirement: "Support North American enterprise customers with specialist technology capabilities across platforms such as Guidewire and OpenLink / ETRM.",
    businessProblem: "Enterprise clients struggled to source vetted, high-competency technical teams capable of complex Guidewire and ETRM platform integrations.",
    commercialChallenge: "The requirements involved niche technical skills, enterprise buying processes and the need to align customer demand with available technical capability, commercial terms and delivery readiness.",
    salesApproach: "Managed the full commercial cycle from requirement qualification and technical alignment through RFP and proposal responses, resource positioning, commercial discussions, negotiation, onboarding and ongoing account management.",
    solution: "Structured specialist technology engagements around customer requirements rather than generic staffing, aligning the required skills, delivery model and commercial terms with the client business need.",
    salesOutcome: "Secured enterprise technology engagements and supported repeat business and multi-year account extensions through continued client relationship management.",
    commercialOwnership: "Enterprise Sales | RFP & Proposals | Negotiation | Solution Selling | Account Expansion",
  },
  {
    id: "founder-metafic",
    title: "Metafic",
    industry: "AI, SaaS, Digital Products & Custom Software",
    type: "Fixed-Price IT Projects / Product Development / Technology Services",
    logoUrl: APPROVED_LOGOS.metafic,
    isFounderTrackRecord: true,
    requirement: "Create new business across international markets for custom software, AI solutions, SaaS products and digital-platform requirements.",
    businessProblem: "International businesses needed dependable, full-stack product execution partners to bring complex digital platforms to market.",
    commercialChallenge: "Many opportunities began with an idea, business problem or broad technical requirement rather than a fully defined scope. The commercial task was to convert that early requirement into a clear solution, realistic delivery scope and commercially viable engagement.",
    salesApproach: "Originated opportunities primarily through outbound activity and managed the sales motion from zero to one. Led discovery, clarified business requirements, coordinated technical scoping with engineering, presented solutions with technical specialists when required, developed proposals, maintained structured follow-up, negotiated commercial terms and progressed opportunities through closure. The approach focused on understanding the client problem first, representing the customer requirement clearly inside the delivery organization and finding a commercially workable outcome for both sides.",
    solution: "Structured technology engagements across AI, SaaS, marketplaces, enterprise applications, integrations and custom web/mobile products.",
    salesOutcome: "Won and progressed multiple international technology projects across markets including UAE, North America, South America and Australia. Typical sales cycles were approximately 2 to 4 months, with repeat business generated in selected accounts through continued relationship management.",
    commercialOwnership: "Outbound | Zero-to-One Sales | Discovery | Technical Scoping | Proposal | Negotiation | Closure | Account Growth",
  },
  {
    id: "founder-leadnics",
    title: "LeadNics",
    industry: "Event Technology / B2B MarTech & CRM SaaS",
    type: "B2B SaaS / Zero-to-One Product GTM",
    logoUrl: APPROVED_LOGOS.leadNics,
    isFounderTrackRecord: true,
    requirement: "Help event-active businesses capture trade-show leads faster and move them into a structured sales pipeline.",
    businessProblem: "Field sales teams often relied on slow manual lead capture. Follow-up was delayed, event engagement data was fragmented and companies had limited visibility into how event activity converted into pipeline.",
    commercialChallenge: "The product needed early market validation, a clear ICP, buyer positioning and a sales motion capable of converting an event workflow problem into SaaS adoption.",
    salesApproach: "Helped shape the core commercial proposition and outbound GTM strategy around companies with active trade-show participation. Led prospect discovery, demonstrated mobile badge scanning, offline lead capture and automated follow-up workflows, and positioned the platform around faster lead-to-pipeline execution. Targeted Event Marketers and Sales Directors as key buyers. Positioned multi-user workflows, AI-assisted response drafting, role-based dashboards and booth attribution around operational visibility and faster follow-up.",
    solution: "Event-focused SaaS platform connecting lead capture, team workflows, follow-up automation and sales-pipeline visibility.",
    salesOutcome: "Onboarded 3 early-adopter customer accounts covering 15 seats, generating approximately $7K+ in new SaaS ARR during the initial launch phase.",
    commercialOwnership: "Zero-to-One GTM | Outbound | Product Positioning | Demo | SaaS Sales | Closing",
  },
];

export const SELECTED_DEAL_EXPERIENCE: CaseStudy[] = [
  {
    id: "deal-1",
    title: "AI Security Detection",
    industry: "Security Technology / Computer Vision",
    type: "AI / Custom Software / IT Services",
    requirement: "A real-time system capable of detecting weapons, vehicles and license plates from RTSP video streams.",
    businessProblem: "Manual surveillance created limits in speed and consistency of threat detection.",
    commercialChallenge: "Translate a technically complex security requirement into a practical implementation scope. The requirement combined computer vision, real-time video, API integration, notifications, database logging and future scalability.",
    salesApproach: "Clarified the use case, coordinated technical solution design with engineering, translated technical scope into a structured commercial proposal and progressed the engagement through commercial discussions.",
    solution: "AI-powered object detection using real-time video processing, API-based output, event storage and notification capability.",
    salesOutcome: "Converted the requirement into a won and delivered custom AI technology engagement.",
    timingFooter: "Outbound Originated | End-to-End Commercial Ownership | Typical 2–4 Month Sales Motion",
  },
  {
    id: "deal-2",
    title: "SaaS Security Platform",
    industry: "Security Technology / SaaS",
    type: "SaaS + AI",
    requirement: "Create a SaaS platform allowing users to register, subscribe, manage monitored servers and receive updated AI models.",
    businessProblem: "The underlying security technology required a scalable commercial layer for customer access, subscription management and ongoing service delivery.",
    commercialChallenge: "Convert an existing on-premise technical capability into a scalable customer-facing SaaS model. The solution needed to connect customer onboarding, subscriptions, payment, monitoring, AI-model updates and account management.",
    salesApproach: "Worked from the customer's business and technical requirement, coordinated solution definition with the technical team and structured the commercial proposal around a SaaS operating model.",
    solution: "Subscription-enabled SaaS platform with customer accounts, server submission, payment integration, notifications and AI model update workflows.",
    salesOutcome: "Converted the requirement into a commercial SaaS development engagement.",
    timingFooter: "Outbound Originated | End-to-End Commercial Ownership | Typical 2–4 Month Sales Motion",
  },
  {
    id: "deal-3",
    title: "Salesforce and LinkedIn Integration",
    industry: "Education Technology",
    type: "Enterprise Integration / IT Services",
    requirement: "Connect Salesforce and LinkedIn data to improve tracking of alumni career progression and automate impact reporting.",
    businessProblem: "Manual and fragmented reporting reduced visibility into graduate outcomes.",
    commercialChallenge: "Align business reporting requirements with API, privacy and integration constraints. The engagement required Salesforce, LinkedIn API, authentication, privacy, synchronization and reporting considerations.",
    salesApproach: "Led requirement discovery, coordinated technical feasibility analysis and converted the business objective into a structured enterprise-integration proposal.",
    solution: "Salesforce and LinkedIn integration using API-driven data synchronization and impact-reporting workflows.",
    salesOutcome: "Converted the requirement into a won technology engagement and progressed it through formal commercial agreement.",
    timingFooter: "Outbound Originated | End-to-End Commercial Ownership | Typical 2–4 Month Sales Motion",
  },
  {
    id: "deal-4",
    title: "Climate Risk Platform",
    industry: "Climate Technology",
    type: "Digital Platform / AI-Enabled Application",
    requirement: "Develop a digital platform for businesses to assess climate-related risks, define mitigation actions and generate structured reports.",
    businessProblem: "Climate-risk assessment relied on complex forms, frameworks and manual analysis.",
    commercialChallenge: "Translate a domain-heavy advisory process into a scalable digital workflow. The requirement needed alignment between climate methodology, workflow design, reporting and AI-assisted content generation.",
    salesApproach: "Clarified the required user journey, coordinated solution scoping and translated a specialist operational process into a defined digital-platform engagement.",
    solution: "Web-based climate-risk assessment platform with structured questionnaires, risk evaluation, mitigation workflows and AI-assisted reporting.",
    salesOutcome: "Converted the requirement into a won and delivered digital-platform engagement.",
    timingFooter: "Outbound Originated | End-to-End Commercial Ownership | Typical 2–4 Month Sales Motion",
  },
  {
    id: "deal-5",
    title: "SaaS LMS",
    industry: "Education Technology",
    type: "SaaS / Learning Management System",
    requirement: "Develop a SaaS-based LMS supporting administrators, schools, teachers, students and parents.",
    businessProblem: "The organization required centralized management of content, users, assessments, communication, analytics and learning workflows.",
    commercialChallenge: "Structure a broad multi-user product requirement into commercially manageable tracks. The product involved a broad feature set across web, mobile, security, activity tracking and reporting.",
    salesApproach: "Worked through the client requirement, coordinated technical planning and converted a large feature set into a structured commercial development engagement.",
    solution: "Comprehensive SaaS LMS supporting user management, content, assignments, analytics, reporting, communication and administrative workflows.",
    salesOutcome: "Progressed the SaaS requirement through end-to-end commercial and solution-development stages.",
    timingFooter: "Outbound Originated | End-to-End Commercial Ownership | Typical 2–4 Month Sales Motion",
  },
  {
    id: "deal-6",
    title: "ERP Implementation",
    industry: "Enterprise Applications",
    type: "ERP Implementation / IT Services",
    requirement: "Implement an ERP supporting budget management, expense reporting, users, suppliers, customers and financial workflows.",
    businessProblem: "Operational information and processes required better integration and control.",
    commercialChallenge: "Map multiple operational processes into a practical ERP implementation. The solution required process mapping, ERP configuration, data considerations, user permissions and workflow customization.",
    salesApproach: "Clarified business requirements, coordinated ERP solution definition and progressed the opportunity from requirement through commercial proposal.",
    solution: "Customized ERPNext implementation covering operational and administrative processes.",
    salesOutcome: "Converted the requirement into a commercial ERP implementation engagement.",
    timingFooter: "Outbound Originated | End-to-End Commercial Ownership | Typical 2–4 Month Sales Motion",
  },
  {
    id: "deal-7",
    title: "B2B Marketplace",
    industry: "Food & Beverage Technology",
    type: "B2B Marketplace / Custom Software",
    requirement: "Build a B2B marketplace connecting local buyers and suppliers.",
    businessProblem: "Local buyers and suppliers needed a more efficient way to discover, communicate and transact.",
    commercialChallenge: "Turn a multi-sided marketplace concept into a commercially executable MVP. The opportunity required balancing marketplace functionality, buyer and supplier workflows, payments, fulfillment and launch timing.",
    salesApproach: "Led commercial discussions, clarified the marketplace vision, coordinated technical solution design and structured the implementation approach around an achievable MVP.",
    solution: "Custom B2B marketplace with buyer and supplier portals, matching, brief workflows, real-time communication, checkout and administration.",
    salesOutcome: "Progressed the marketplace opportunity through end-to-end commercial proposal and solution definition.",
    timingFooter: "Outbound Originated | End-to-End Commercial Ownership | Typical 2–4 Month Sales Motion",
  },
  {
    id: "deal-8",
    title: "B2B Intelligence Platform",
    industry: "Sales Technology / B2B Intelligence",
    type: "B2B SaaS / Data Platform",
    requirement: "Turn anonymous website activity into actionable B2B sales intelligence.",
    businessProblem: "Sales teams lacked visibility into high-intent anonymous website traffic.",
    commercialChallenge: "Define an enterprise-grade platform combining identity resolution, enrichment, CRM integration and privacy. The requirement combined real-time visitor intelligence, data enrichment, CRM integrations, privacy, analytics and scalable architecture.",
    salesApproach: "Worked with the client on the commercial requirement, coordinated detailed solution architecture and converted a complex B2B data-product vision into a structured phased proposal.",
    solution: "B2B visitor intelligence platform with identity resolution, enrichment, CRM integration, alerts and analytics.",
    salesOutcome: "Progressed a complex B2B SaaS and data-platform opportunity through structured commercial and technical proposal development.",
    timingFooter: "Outbound Originated | End-to-End Commercial Ownership | Typical 2–4 Month Sales Motion",
  },
];

export const WHO_WE_HELP = [
  {
    number: "01",
    title: "B2B SaaS & AI Products",
    description: "For technology companies that need stronger market entry, customer acquisition and revenue execution.",
  },
  {
    number: "02",
    title: "Founder-Led Technology Companies",
    description: "For founders who need an experienced commercial operator without immediately building a large internal sales organization.",
  },
  {
    number: "03",
    title: "New Market & Growth Initiatives",
    description: "For companies entering a new geography, vertical, customer segment or commercial motion.",
  },
  {
    number: "04",
    title: "Select Technology Services Firms",
    description: "For differentiated IT and technology-service businesses where consultative selling, technical discovery and commercial ownership matter.",
    note: "Product and SaaS businesses are the primary focus. Technology services are selected selectively where SalesNego can create meaningful commercial value.",
  },
];

export const WHAT_WE_DO_SERVICES = [
  {
    id: "gtm-market-intelligence",
    number: "01",
    title: "GTM Strategy & Market Intelligence",
    shortCopy: "Build the commercial foundation before scaling activity.",
    capabilities: [
      "Market and segment analysis",
      "Market-entry strategy",
      "ICP definition",
      "Buyer committee mapping",
      "Competitive intelligence",
      "Product-market synthesis",
      "Value proposition",
      "Positioning and messaging",
      "Buying-trigger research",
      "Account prioritization",
      "Channel strategy",
      "GTM execution playbook",
    ],
    outputs: [
      "Market Entry Brief",
      "ICP & Buyer Map",
      "Messaging Architecture",
      "Account Priority Model",
      "GTM Execution Playbook",
    ],
  },
  {
    id: "revops-ai-sales",
    number: "02",
    title: "Revenue Operations & AI-Accelerated Sales",
    shortCopy: "Connect data, process, automation and commercial judgment into one operating system.",
    capabilities: [
      "CRM architecture",
      "Pipeline stages",
      "Exit criteria",
      "Qualification frameworks",
      "Account and contact data",
      "Account scoring",
      "Lead/account routing",
      "Workflow automation",
      "AI-assisted research",
      "Enrichment",
      "Trigger monitoring",
      "Personalization preparation",
      "Sequence operations",
      "Meeting intelligence",
      "CRM updates",
      "Follow-up workflow",
      "Pipeline reporting",
      "Forecast discipline",
      "Win/loss analysis",
    ],
    outputs: [
      "CRM & Pipeline Architecture",
      "Qualification Framework",
      "Sales Workflow Design",
      "Automation Map",
      "Revenue Dashboard",
      "Commercial Playbook",
    ],
  },
  {
    id: "end-to-end-execution",
    number: "03",
    title: "End-to-End Commercial Execution",
    shortCopy: "Move the right opportunities from account identification through customer acquisition and growth.",
    capabilities: [
      "Account research",
      "Buyer identification",
      "Multi-channel prospecting",
      "Executive outreach",
      "Discovery",
      "Requirements clarification",
      "Qualification",
      "Demonstrations",
      "Solution alignment",
      "Business case development",
      "Technical validation",
      "Proposal development",
      "Objection management",
      "Procurement navigation",
      "Commercial negotiation",
      "Contract closure",
      "Customer handoff",
      "Customer Success",
      "Renewal",
      "Upsell",
      "Cross-sell",
      "Strategic account expansion",
    ],
    outputs: [
      "Qualified Opportunities",
      "Deal Intelligence",
      "Opportunity Plans",
      "Business Cases",
      "Commercial Proposals",
      "Negotiation Strategy",
      "Account Growth Plans",
    ],
  },
];

export const SERVICE_TABS = [
  {
    id: "tab-gtm",
    title: "GTM & MARKET INTELLIGENCE",
    steps: [
      "Market",
      "ICP",
      "Buying Committee",
      "Trigger",
      "Account",
      "Message",
      "Channel",
    ],
  },
  {
    id: "tab-revops",
    title: "REVOPS & AI",
    steps: [
      "CRM",
      "Data",
      "Qualification",
      "Workflow",
      "Automation",
      "Pipeline Governance",
      "Analytics",
    ],
  },
  {
    id: "tab-commercial",
    title: "COMMERCIAL EXECUTION",
    steps: [
      "Engagement",
      "Discovery",
      "Qualification",
      "Business Case",
      "Solution",
      "Proposal",
      "Negotiation",
      "Close",
      "Expansion",
    ],
  },
];

export const AI_ACCELERATED_TASKS = [
  "Account research",
  "Enrichment",
  "Contact discovery",
  "Trigger monitoring",
  "Research summaries",
  "Personalization preparation",
  "Sequence operations",
  "Meeting summaries",
  "CRM data capture",
  "Follow-up preparation",
  "Pipeline alerts",
  "Pattern analysis",
  "Win/loss analysis",
  "Customer expansion signals",
];

export const HUMAN_COMMERCIAL_JUDGMENT = [
  "Market selection",
  "ICP decisions",
  "Account prioritization",
  "Executive messaging",
  "Discovery",
  "Diagnosis",
  "Qualification",
  "Business case development",
  "Solution alignment",
  "Objection management",
  "Negotiation",
  "Closing",
  "Relationship management",
  "Expansion decisions",
];

export const OPERATING_SYSTEM_STAGES = [
  {
    id: "understand",
    name: "UNDERSTAND",
    items: ["Product", "Market", "Customer", "Competition", "Existing commercial motion"],
    description: "Deep dive into product fundamentals, market dynamics, and historical commercial evidence.",
  },
  {
    id: "position",
    name: "POSITION",
    items: ["ICP", "Buyer roles", "Value proposition", "Use cases", "Differentiation", "Messaging", "Sales narrative"],
    description: "Structure crisp buyer personas, messaging frameworks, and differentiated value propositions.",
  },
  {
    id: "prioritize",
    name: "PRIORITIZE",
    items: ["Account universe", "Buying triggers", "Account intelligence", "Buyer mapping", "Commercial evidence", "Account scoring"],
    description: "Identify high-propensity accounts based on verifiable signals and buyer access.",
  },
  {
    id: "engage",
    name: "ENGAGE",
    items: ["Research", "Personalized outreach", "Multi-channel execution", "Executive engagement", "Partner and referral routes"],
    description: "Initiate relevant, insight-led conversations with key decision-makers across channels.",
  },
  {
    id: "diagnose",
    name: "DIAGNOSE",
    items: ["Discovery", "Problem", "Impact", "Urgency", "Existing approach", "Stakeholders"],
    description: "Unpack customer friction, business impact, urgency, and current technical constraints.",
  },
  {
    id: "qualify",
    name: "QUALIFY",
    items: ["Economic buyer", "Decision criteria", "Decision process", "Competition", "Champion", "Critical event", "Deal risk"],
    description: "Rigorous qualification across economic buyers, validation criteria, and deal timelines.",
  },
  {
    id: "convert",
    name: "CONVERT",
    items: ["Solution alignment", "Demo", "Technical validation", "Business case", "Proposal", "Negotiation", "Close"],
    description: "Align technical architecture, develop custom proposals, negotiate terms, and close agreements.",
  },
  {
    id: "expand",
    name: "EXPAND",
    items: ["Onboarding handoff", "Customer Success", "Adoption", "Renewal", "Cross-sell", "Upsell", "Strategic account development"],
    description: "Ensure customer value realization, secure renewals, and capture organic account expansion.",
  },
];

export const ENGAGEMENT_PHASES = [
  {
    phase: "Phase 1",
    title: "Diagnose & Validate",
    timing: "Weeks 1–2",
    focus: [
      "Product and market understanding",
      "Commercial baseline",
      "ICP",
      "Existing pipeline and process",
      "Messaging",
      "Data and CRM readiness",
    ],
    output: "Commercial Baseline",
  },
  {
    phase: "Phase 2",
    title: "Build the Motion",
    timing: "Weeks 2–4",
    focus: [
      "GTM structure",
      "Target accounts",
      "Messaging",
      "Qualification",
      "CRM",
      "Workflows",
      "Commercial playbook",
    ],
    output: "GTM & Sales Execution System",
  },
  {
    phase: "Phase 3",
    title: "Execute & Learn",
    timing: "From Month 2",
    focus: [
      "Account acquisition",
      "Outreach",
      "Discovery",
      "Qualification",
      "Opportunity development",
      "Market feedback",
    ],
    output: "Qualified Commercial Traction",
  },
  {
    phase: "Phase 4",
    title: "Convert, Expand & Systemize",
    timing: "Based on the actual sales cycle",
    focus: [
      "Proposal",
      "Negotiation",
      "Closure",
      "Customer handoff",
      "Account growth",
      "Commercial learning",
    ],
    output: "Repeatable Commercial Learning",
  },
];

export const INDUSTRY_EXPERIENCE = [
  {
    number: "01",
    title: "SaaS & Enterprise Software",
    description: "B2B software, enterprise applications and specialized technology platforms.",
  },
  {
    number: "02",
    title: "AI & Digital Products",
    description: "AI-enabled solutions, digital platforms and custom technology products.",
  },
  {
    number: "03",
    title: "Laboratory, Testing & Quality",
    description: "LIMS, laboratory digitization, testing workflows, quality systems and compliance-oriented technology.",
  },
  {
    number: "04",
    title: "Insurance & InsurTech",
    description: "Insurance technology, enterprise platforms, specialist technology requirements and digital transformation.",
  },
  {
    number: "05",
    title: "Energy & Industrial Technology",
    description: "Enterprise applications supporting energy trading, operational workflows and specialized business processes.",
  },
  {
    number: "06",
    title: "Manufacturing & FMCG Technology",
    description: "Quality, batch traceability, operational digitization and business-process technology.",
  },
];

export const TECH_SOLUTION_CHIPS = [
  "B2B SaaS",
  "AI Solutions",
  "Custom Software",
  "Enterprise Applications",
  "LIMS",
  "InsurTech",
  "ETRM / OpenLink",
  "Low-Code",
  "Web Applications",
  "Mobile Applications",
  "API Integration",
  "Systems Integration",
  "IT Services",
  "Technology Consulting",
  "IT Staff Augmentation",
  "Specialist Technology Resources",
];

export const COMMERCIAL_CAPABILITIES_CHIPS = [
  "Market Entry",
  "GTM Strategy",
  "Demand Generation",
  "Account-Based Selling",
  "Enterprise Sales",
  "Solution Selling",
  "Business Development",
  "Partnerships",
  "Discovery",
  "RFP & Proposal Management",
  "Commercial Negotiation",
  "Customer Success",
  "Account Expansion",
];

export const WHY_SALESNEGO = [
  {
    number: "01",
    title: "Founder-Led",
    description: "Important client work receives direct founder-level commercial involvement.",
  },
  {
    number: "02",
    title: "Limited Client Portfolio",
    description: "SalesNego deliberately works with a limited portfolio so engagements receive meaningful attention.",
  },
  {
    number: "03",
    title: "Product-First",
    description: "We learn the product, market and customer problem before trying to sell it.",
  },
  {
    number: "04",
    title: "Evidence-Led",
    description: "Account priority and commercial decisions should be based on evidence, not database volume.",
  },
  {
    number: "05",
    title: "End-to-End Ownership",
    description: "SalesNego can remain involved from GTM and customer acquisition through commercial conversion and account growth.",
  },
  {
    number: "06",
    title: "Systems That Stay",
    description: "The objective is to leave behind stronger process, commercial intelligence and operating discipline rather than client dependency.",
  },
];

export const TESTIMONIALS = [
  {
    author: "Gandeep",
    company: "InfoCodec",
    quote: "SalesNego completely changed how we approach B2B sales. They embedded with our team, understood our product deeply, and started generating qualified pipeline within weeks. The results spoke for themselves.",
  },
  {
    author: "Josan",
    company: "TC+ LIMS",
    quote: "Working with SalesNego was one of the best decisions we made for our sales growth. They represented us professionally, managed the entire sales cycle, and delivered real closed deals, not just meetings.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Is SalesNego a lead-generation agency?",
    answer: "No. Lead generation may be one part of an engagement, but SalesNego is designed around broader commercial execution including GTM, account intelligence, qualification, opportunity development, proposal, negotiation, customer conversion and account expansion.",
  },
  {
    question: "What types of companies does SalesNego work with?",
    answer: "The primary focus is B2B SaaS, AI and technology-product companies. SalesNego also selectively works with technology-services businesses where consultative selling and end-to-end commercial ownership are appropriate.",
  },
  {
    question: "Can SalesNego work alongside our existing sales team?",
    answer: "Yes. SalesNego can operate as an embedded commercial partner alongside founders, internal sales teams, product teams, technical teams and customer-success teams.",
  },
  {
    question: "Does AI replace the sales process?",
    answer: "No. AI is used to accelerate research, data preparation, workflow and commercial visibility. Market decisions, discovery, qualification, solution alignment, negotiation and relationship management remain human-led.",
  },
  {
    question: "Which sales methodologies do you use?",
    answer: "SalesNego uses relevant elements of SPICED, MEDDPICC, Challenger and SPIN depending on the sales motion. Methodologies support the commercial system rather than replacing judgment.",
  },
  {
    question: "Can you guarantee revenue or pipeline?",
    answer: "No responsible commercial partner can guarantee a specific revenue outcome without understanding the product, market, buying process, customer readiness and sales cycle. SalesNego focuses on creating qualified commercial traction and improving execution quality.",
  },
  {
    question: "Which markets can SalesNego support?",
    answer: "SalesNego supports commercial activity across North America, UAE, UK and Europe, and India depending on the engagement.",
  },
  {
    question: "How is SalesNego priced?",
    answer: "Engagements are typically structured around a monthly execution retainer with an agreed performance component where appropriate. Commercial structure depends on scope, market, sales cycle and execution ownership.",
  },
];

export const CONTACT_DETAILS = {
  email: "sales@salesnego.com",
  emailLink: "mailto:sales@salesnego.com",
  formspreeUrl: "https://formspree.io/f/xqpkpera",
  calendlyUrl: "https://calendly.com/meeting-with-salesnego/30min",
  marketsServed: "UAE | Europe | USA | India",
  whatsapp: {
    india: {
      number: "+91 98844 50102",
      rawNumber: "919884450102",
      label: "India WhatsApp",
    },
    uae: {
      number: "+971 52 877 0047",
      rawNumber: "971528770047",
      label: "UAE WhatsApp",
    },
    prefilledMessage: "Hi SalesNego, I came across your website and would like to discuss our GTM and commercial growth requirements.",
  },
};
