export type Lang = "en" | "id";

type Service = {
  n: string;
  title: string;
  body: string;
  focus: string[];
  outcomes: string[];
};

type Step = { n: string; title: string; items: string[] };

type Project = { title: string; desc: string; deliverables: string[] };

export type ArticleSection =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

type Article = {
  slug: string;
  read: string;
  title: string;
  hero: string[];
  sections: ArticleSection[];
};

type InsightCard = { title: string; read: string; slug: string };

export type Strings = {
  meta: {
    siteTitle: string;
    siteDescription: string;
    caseTitle: string;
    caseDescription: string;
    insightFallbackTitle: string;
    insightFallbackDescription: string;
  };
  nav: {
    role: string;
    services: string;
    caseStudies: string;
    howIWork: string;
    insights: string;
    about: string;
    contact: string;
    backHome: string;
  };
  about: {
    mark: string;
    headline: string;
    p1: string;
    p2: string;
    portraitAlt: string;
    principles: [string, string][];
  };
  experience: {
    mark: string;
    headline: string;
    intro: string;
    danoneTitle: string;
    danoneRange: string;
    danoneBody: string;
    unileverTitle: string;
    unileverRange: string;
    unileverBody: string;
    highlightsMark: string;
    highlights: [string, string][];
  };
  purpose: {
    mark: string;
    headline: string;
    purposeTitle: string;
    purposeBody: string;
    visionTitle: string;
    visionBody: string;
    missionTitle: string;
    missionItems: string[];
  };
  portfolio: {
    mark: string;
    headline: string;
    intro: string;
    cardLabel: string;
    deliverablesMark: string;
    projects: Project[];
  };
  services: {
    mark: string;
    headline: string;
    intro: string;
    focusMark: string;
    outcomesMark: string;
    items: Service[];
  };
  approach: {
    mark: string;
    headline: string;
    intro: string;
    steps: Step[];
  };
  caseStudyPreview: {
    mark: string;
    headline: string;
    intro: string;
    industryTag: string;
    title: string;
    body: string;
    cta: string;
    summaryMark: string;
    summary: [string, string][];
  };
  insights: {
    mark: string;
    headline: string;
    intro: string;
    read: string;
    cards: InsightCard[];
  };
  cta: {
    mark: string;
    headlineA: string;
    headlineB: string;
    body: string;
    schedule: string;
    download: string;
    contactMark: string;
    phoneLabel: string;
    qrTitle: string;
    linkedIn: string;
    fineprint: string;
  };
  footer: {
    linkedIn: string;
    email: string;
    contact: string;
  };
  caseStudy: {
    mark: string;
    title: string;
    intro: string;
    summaryMark: string;
    summary: [string, string][];
    challengeMark: string;
    challengeTitle: string;
    challengeBody: string;
    challengeCards: [string, string][];
    challengeQuote: string;
    rootMark: string;
    rootTitle: string;
    rootBody: string;
    rootFlow: string[];
    rootFlowAccent: string;
    builtMark: string;
    builtTitle: string;
    builtBody: string;
    builtFlow: string[];
    builtFlowAccent: string;
    resultsMark: string;
    resultsTitle: string;
    resultsCards: [string, string][];
    resultsQuote: string;
    learningMark: string;
    learningTitle: string;
    learningBody: string;
    selfCheckMark: string;
    selfCheckItems: string[];
    selfCheckClose: (yes: string) => { before: string; yes: string; after: string };
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  article: {
    nextMark: string;
    ctaTitle: string;
    bookCall: string;
    notFoundTitle: string;
    backHome: string;
  };
  articles: Article[];
  langToggle: { en: string; id: string };
};

const en: Strings = {
  meta: {
    siteTitle: "Alna Kurnia Sari — Quality & Productivity Consultant",
    siteDescription:
      "I help manufacturing companies improve quality, reduce waste, and build operational systems that scale — QMS, continuous improvement, and data analytics.",
    caseTitle: "Case Study — Manufacturing SME Operational Visibility | Alna Kurnia Sari",
    caseDescription:
      "How a manufacturing SME improved operational visibility and productivity with a simple digital reporting system — a practical case study.",
    insightFallbackTitle: "Insight | Alna Kurnia Sari",
    insightFallbackDescription: "Insights for manufacturing leaders.",
  },
  nav: {
    role: "— Quality & Productivity Consultant",
    services: "Services",
    caseStudies: "Case Studies",
    howIWork: "How I Work",
    insights: "Insights",
    about: "About",
    contact: "Contact →",
    backHome: "← Back to Home",
  },
  about: {
    mark: "— About",
    headline: "From factory floor to strategic improvement partner.",
    p1:
      "I started on the production floor — auditing processes, chasing defects, and learning that operational problems almost always trace back to system design, not effort.",
    p2:
      "Today I help manufacturing leaders use quality systems, continuous improvement, and data-driven decisions to produce measurable business outcomes. Quality, in my work, is a growth engine.",
    portraitAlt: "Portrait of Alna Kurnia Sari",
    principles: [
      ["Quality builds trust.", "Reliable processes create reliable revenue."],
      ["Data drives decisions.", "Opinions defer to what the numbers show."],
      ["Improvement is a journey.", "Sustained gains beat one-time wins."],
      ["Prevention beats firefighting.", "Design out the problem, don't manage it."],
    ],
  },
  experience: {
    mark: "— Professional Experience",
    headline: "15+ Years in Quality & Operational Excellence",
    intro:
      "Quality leadership across multinational manufacturing organizations, from the production floor to regional and global systems.",
    danoneTitle: "Danone Specialized Nutrition",
    danoneRange: "2022 — 2024",
    danoneBody:
      "Led Quality, Food Safety, Compliance, and Continuous Improvement initiatives for specialized nutrition manufacturing operations.",
    unileverTitle: "Unilever",
    unileverRange: "2008 — 2022",
    unileverBody:
      "Held Quality leadership roles across Factory, Regional, and Global organizations supporting manufacturing, logistics, and market operations across Asia Pacific and international markets.",
    highlightsMark: "Career Highlights",
    highlights: [
      ["8", "Factories managed, plus 20+ contract manufacturers"],
      ["30%", "Reduction in supplier quality defects"],
      ["58%", "Reduction in Cost of Poor Quality"],
    ],
  },
  purpose: {
    mark: "— Why I Do This",
    headline: "My Purpose, Vision and Mission",
    purposeTitle: "Purpose",
    purposeBody:
      "To empower organizations to enhance their quality systems, improve operational productivity, and unlock the power of data to drive sustainable growth and customer trust.",
    visionTitle: "Vision",
    visionBody:
      "To be a trusted partner for businesses seeking excellence in quality and productivity, recognized for transforming challenges into impactful results through innovative solutions.",
    missionTitle: "Mission",
    missionItems: [
      "Help organizations embed quality into their culture and systems.",
      "Drive continuous improvement that boosts efficiency and customer satisfaction.",
      "Enable data-informed decisions for real-time and long-term performance enhancements.",
    ],
  },
  portfolio: {
    mark: "— Portfolio",
    headline: "Representative Projects",
    intro:
      "A track record of building resilient quality management systems, scaling operational performance, and driving growth strategy.",
    cardLabel: "Representative Project",
    deliverablesMark: "Key Deliverables",
    projects: [
      {
        title: "Quality Management System for Consumer Goods Expansion",
        desc:
          "Built and implemented a Quality Management System for a multinational consumer goods company expanding into white market channels across Asia Pacific.",
        deliverables: [
          "Quality risk assessment for international sourcing and suppliers",
          "Quality compliance management across 40 distributors in Asia, Australia and Pacific Islands",
          "Customer quality feedback portal to accelerate issue resolution and improve customer satisfaction",
        ],
      },
      {
        title: "GMP & Product Launch Readiness",
        desc:
          "Prepared a contract manufacturing facility for successful launch of a new home care liquid product with strong quality and compliance controls.",
        deliverables: [
          "Manufacturing readiness and GMP gap assessment",
          "Cross-contamination prevention through segregation and changeover controls",
          "Cleaning and sanitation validation program",
          "Laboratory and testing capability enhancement for product quality assurance",
        ],
      },
      {
        title: "Operational Excellence for Rubber Logo Manufacturer",
        desc:
          "Improved operational performance for a rubber logo manufacturer supplying global sportswear brands.",
        deliverables: [
          "Manufacturing SOP development and standardization",
          "Workforce training system and competency framework",
          "Automated KPI dashboard for real-time performance monitoring",
        ],
      },
      {
        title: "Business Analytics & Growth Strategy (PaDi UMKM)",
        desc:
          "Partnered with Telkom Indonesia to improve marketplace performance and support SME growth on PaDi UMKM.",
        deliverables: [
          "Business performance dashboard using Google Analytics and marketplace data",
          "Conversion rate improvement analysis",
          "Buyer and seller segmentation strategy",
        ],
      },
      {
        title: "Global Quality Management System Optimization",
        desc:
          "Streamlined Quality Management System documentation for a consumer goods manufacturer operating multiple production sites.",
        deliverables: [
          "QMS document restructuring with clear ownership and governance",
          "Faster document review and approval workflows",
          "Integration of quality and product safety documentation from 7 manufacturing sites into a unified global QMS",
        ],
      },
      {
        title: "Quality, Food Safety & Regulatory Compliance",
        desc:
          "Strengthened compliance systems for a consumer goods manufacturer to maintain certifications and audit readiness.",
        deliverables: [
          "ISO 9001:2015 Quality Management System",
          "FSSC 22000 v6.0 Food Safety Management System",
          "Risk Management Program (PMR)",
          "CPKB Compliance (Cosmetics GMP)",
        ],
      },
    ],
  },
  services: {
    mark: "— Services",
    headline: "My Focus Area",
    intro:
      "Each engagement combines governance, improvement, and analytics — because durable performance requires all three working as one system, not three disconnected initiatives.",
    focusMark: "Focus",
    outcomesMark: "Outcomes",
    items: [
      {
        n: "01",
        title: "Quality Management Systems",
        body: "Build the governance backbone that makes quality predictable — not heroic.",
        focus: [
          "ISO readiness & certification",
          "SOP development",
          "Audit preparation",
          "Governance & risk frameworks",
          "Non-conformance control",
        ],
        outcomes: ["Fewer non-conformities", "Improved process reliability", "Stronger customer trust"],
      },
      {
        n: "02",
        title: "Continuous Improvement & Operational Excellence",
        body: "Install the daily habits and tools that compound into operational excellence.",
        focus: [
          "Lean principles & 5S",
          "TPM & PDCA cycles",
          "Root cause analysis",
          "Kaizen & value stream mapping",
          "Problem-solving capability",
        ],
        outcomes: ["Higher productivity", "Lower waste", "Stronger problem-solving culture"],
      },
      {
        n: "03",
        title: "Data Analytics for Productivity",
        body: "Turn scattered operational data into the signals leaders act on.",
        focus: [
          "Automated dashboards",
          "KPI framework design",
          "Process performance tracking",
          "Predictive trend analysis",
          "Spreadsheet analytics",
        ],
        outcomes: ["Better, faster decisions", "Earlier issue detection", "Real-time operational visibility"],
      },
    ],
  },
  approach: {
    mark: "— My Approach",
    headline: "Improving Factory Performance",
    intro: "A five-stage method that moves you from diagnosis to a self-sustaining improvement culture.",
    steps: [
      { n: "01", title: "Assess", items: ["Audit current systems", "Review operational data", "Identify bottlenecks"] },
      { n: "02", title: "Diagnose", items: ["Root cause analysis", "Waste & flow mapping", "Process review"] },
      { n: "03", title: "Design", items: ["Improvement roadmap", "KPI framework", "System redesign"] },
      { n: "04", title: "Implement", items: ["Team training", "SOP rollout", "Dashboard deployment"] },
      { n: "05", title: "Sustain", items: ["Continuous monitoring", "Performance reviews", "Improvement culture"] },
    ],
  },
  caseStudyPreview: {
    mark: "— Case Study",
    headline: "Proof, not promises.",
    intro: "A worked example showing how visibility — not more data — unlocks productivity.",
    industryTag: "Manufacturing SME",
    title:
      "How a Manufacturing SME Improved Operational Visibility and Productivity with a Simple Digital Reporting System",
    body:
      "A practical example of how structured production data became the foundation for faster decisions, continuous improvement, and operational cost reduction.",
    cta: "Read the full case study",
    summaryMark: "Project Summary",
    summary: [
      ["Industry", "Rubber & PVC"],
      ["Production Lines", "24"],
      ["Implementation", "1 Month"],
      ["Approach", "Hybrid"],
    ],
  },
  insights: {
    mark: "— Insights",
    headline: "Insights for Manufacturing Leaders",
    intro: "Practical ideas to improve productivity, reduce defects, and build better factory systems.",
    read: "Read →",
    cards: [
      {
        title: "The Hidden Cost of Poor Quality: Why Defects Hurt Profit More Than You Think",
        read: "4 min read",
        slug: "hidden-cost-of-poor-quality",
      },
      {
        title: "The Reason Your Factory Keeps Solving the Same Problem",
        read: "5 min read",
        slug: "factory-keeps-solving-same-problem",
      },
      { title: "KPI Dashboards That Actually Drive Action", read: "4 min read", slug: "kpi-dashboards-that-drive-action" },
      {
        title: "How Continuous Improvement Becomes Daily Work",
        read: "5 min read",
        slug: "why-productivity-projects-fail",
      },
    ],
  },
  cta: {
    mark: "— Let's Talk",
    headlineA: "Better systems",
    headlineB: "create better results.",
    body:
      "If defects, delays, waste, or inconsistent performance are slowing your business down, let's identify the system behind the problem — and design one that scales.",
    schedule: "Schedule a Strategy Call →",
    download: "Download Capability Profile",
    contactMark: "Contact me:",
    phoneLabel: "Contact Number:",
    qrTitle: "Scan or click to WhatsApp me",
    linkedIn: "LinkedIn Profile",
    fineprint: "Typical engagements run 8–24 weeks. Strategy calls are 30 minutes and free of obligation.",
  },
  footer: { linkedIn: "LinkedIn", email: "Email", contact: "Contact" },
  caseStudy: {
    mark: "— Case Study",
    title:
      "How a Manufacturing SME Improved Operational Visibility and Productivity with a Simple Digital Reporting System",
    intro:
      "A practical example of how structured production data became the foundation for faster decisions, continuous improvement, and operational cost reduction.",
    summaryMark: "Project Summary",
    summary: [
      ["Industry", "Rubber Patch & PVC Logo"],
      ["Production Lines", "24"],
      ["Implementation", "1 Month"],
      ["Approach", "Hybrid Consulting"],
    ],
    challengeMark: "01 — Challenge",
    challengeTitle: "The factory had data. But it was not driving improvement.",
    challengeBody:
      "Daily targets, supervisor reports, and reject records existed — but most information stayed manual and never became insight.",
    challengeCards: [
      ["Manual Reporting", "Production and reject information recorded manually on paper."],
      ["Low Visibility", "Performance differences between lines were hard to see."],
      ["Unstable Productivity", "Output fluctuations were difficult to explain or address."],
      ["Reactive Decisions", "Issues were caught after the fact, not prevented."],
    ],
    challengeQuote: "\"The problem was not lack of data. The problem was lack of visibility.\"",
    rootMark: "02 — Root Cause",
    rootTitle: "What we found on the floor",
    rootBody:
      "Production data was used only for manual order tracking. Reject data was on paper, never consolidated. Management could not see output by product, reject trends by line, hidden losses, or underperforming lines.",
    rootFlow: ["Data exists", "Data not analyzed", "Limited visibility"],
    rootFlowAccent: "Reactive improvement",
    builtMark: "03 — What We Built",
    builtTitle: "A simple digital reporting system",
    builtBody:
      "No expensive software. We used tools the business already had — designed around the way operators actually work.",
    builtFlow: ["Operator", "Google Form", "Spreadsheet Dashboard", "Management Review"],
    builtFlowAccent: "Improvement Actions",
    resultsMark: "04 — Results",
    resultsTitle: "What changed",
    resultsCards: [
      ["Operational Visibility", "Performance visible across every production line."],
      ["Data-Driven Decisions", "Discussions shifted from assumptions to facts."],
      ["Faster Problem ID", "Performance gaps surfaced earlier, not after the month."],
      ["Better Prioritization", "Resources focused on the highest-impact opportunities."],
      ["CI Foundation", "Structured reporting enabled systematic CI reviews."],
    ],
    resultsQuote:
      "\"For the first time, management could clearly see which production lines were underperforming — and where the improvement opportunities were.\"",
    learningMark: "05 — Key Learning",
    learningTitle: "Most factories don't need more data. They need visible data.",
    learningBody:
      "Many manufacturing SMEs already have enough data to improve productivity. The real challenge is making that data visible, structured, and connected to decision-making. When operational data becomes visible, continuous improvement becomes easier, faster, and more systematic.",
    selfCheckMark: "Could this be happening in your factory?",
    selfCheckItems: [
      "Production reports are collected but rarely analyzed.",
      "Reject records are stored but not trended over time.",
      "Improvement discussions rely on opinions, not data.",
      "It's hard to identify which lines are underperforming.",
    ],
    selfCheckClose: (yes: string) => ({
      before: "If you answered ",
      yes,
      after: " to any of these, there are likely hidden productivity and quality opportunities inside your operations.",
    }),
    ctaTitle: "Looking for better productivity and operational visibility?",
    ctaBody:
      "Many factories already have improvement opportunities hidden inside daily operations. Often the fastest gains come from making existing data visible and actionable. Let's discuss your productivity, quality, or operational challenges — and explore practical next steps for your factory.",
    ctaButton: "Book a Strategy Call →",
  },
  article: {
    nextMark: "— Next step",
    ctaTitle: "Want to apply these ideas in your factory?",
    bookCall: "Book a Strategy Call →",
    notFoundTitle: "Article not found",
    backHome: "← Back to Home",
  },
  articles: [
    {
      slug: "why-productivity-projects-fail",
      read: "5 min read",
      title: "How Continuous Improvement Becomes Daily Work",
      hero: [
        "Continuous Improvement is not an event.",
        "It is the way successful factories operate every day.",
      ],
      sections: [
        { type: "h", text: "Improvement Should Not Depend on Special Projects" },
        { type: "p", text: "Many factories organize improvement workshops." },
        { type: "p", text: "Teams generate ideas." },
        { type: "p", text: "Action plans are created." },
        { type: "p", text: "Energy is high." },
        { type: "p", text: "A few months later, production returns to old habits." },
        {
          type: "p",
          text:
            "The improvements disappear, not because the ideas were poor, but because they were never integrated into daily operations.",
        },
        { type: "h", text: "What This Means for Your Business" },
        { type: "p", text: "When improvement depends on occasional projects, factories often experience:" },
        {
          type: "list",
          items: [
            "Inconsistent productivity",
            "Recurring operational issues",
            "Slow implementation",
            "Low employee engagement",
            "Limited long-term results",
          ],
        },
        { type: "h", text: "Executive Perspective" },
        {
          type: "quote",
          text: "The strongest improvement culture is built through daily management, not occasional enthusiasm.",
        },
        { type: "h", text: "What I Observe During Daily Operations" },
        { type: "p", text: "During factory visits, I pay attention to simple questions:" },
        {
          type: "list",
          items: [
            "How does yesterday's problem become today's learning?",
            "How are supervisors reviewing improvements?",
            "Which standards changed after solving a problem?",
            "Do operators know what has improved this month?",
            "How does leadership reinforce new behaviours?",
          ],
        },
        {
          type: "p",
          text:
            "These observations reveal whether improvement is part of the operating system or simply another project.",
        },
        { type: "h", text: "A Common Factory Scenario" },
        { type: "p", text: "A personal care manufacturer completed several successful improvement projects every year." },
        { type: "p", text: "However, operators continued using different work methods across production lines." },
        {
          type: "p",
          text:
            "Because standard work was never updated consistently, many improvements gradually disappeared.",
        },
        { type: "p", text: "The projects delivered results." },
        { type: "p", text: "The system did not sustain them." },
        { type: "h", text: "Where Better Factories Focus" },
        { type: "p", text: "Leading manufacturers make improvement part of daily management." },
        { type: "p", text: "Supervisors review performance every day." },
        { type: "p", text: "Standards are updated." },
        { type: "p", text: "Problems are discussed openly." },
        { type: "p", text: "Lessons become new ways of working." },
        { type: "p", text: "Improvement is no longer something extra." },
        { type: "p", text: "It becomes part of normal operations." },
        { type: "h", text: "Ask Yourself" },
        { type: "p", text: "If improvement meetings stopped tomorrow, would your factory continue improving?" },
        {
          type: "p",
          text: "If the answer is no, improvement may still depend on projects rather than your management system.",
        },
      ],
    },
    {
      slug: "hidden-cost-of-poor-quality",
      read: "4 min read",
      title: "The Hidden Cost of Poor Quality: Why Defects Hurt Profit More Than You Think",
      hero: [
        "Poor quality is rarely just a quality problem.",
        "It is often a profitability problem disguised as a production issue.",
      ],
      sections: [
        { type: "h", text: "Every Defect Costs More Than You Think" },
        { type: "p", text: "A rejected product is easy to see." },
        { type: "p", text: "The real cost is everything that happens because of that defect." },
        {
          type: "list",
          items: [
            "A food manufacturer delays shipment while waiting for replacement stock.",
            "A home care producer schedules overtime to recover lost output.",
            "A contract manufacturer performs 100% additional inspection before delivery.",
            "A personal care factory spends the morning sorting finished goods instead of running the next production order.",
          ],
        },
        { type: "quote", text: "The defect may be gone, but the business continues paying for it." },
        { type: "h", text: "What This Means for Your P&L" },
        { type: "p", text: "Most factories measure scrap and customer complaints." },
        { type: "p", text: "Few measure the business impact." },
        { type: "p", text: "Poor quality often creates costs such as:" },
        {
          type: "list",
          items: [
            "Rework and extra labor",
            "Production downtime",
            "Material waste",
            "Delayed deliveries",
            "Emergency freight",
            "Additional inspections",
            "Lost production capacity",
            "Customer claims and damaged trust",
          ],
        },
        {
          type: "p",
          text:
            "These costs rarely appear under one account. They are scattered across operations, making the true financial impact easy to underestimate.",
        },
        { type: "h", text: "Executive Perspective" },
        {
          type: "quote",
          text:
            "Every recurring defect consumes capacity that could have been used to produce products, serve customers, or grow revenue. Quality is not only about compliance. It is about protecting profit.",
        },
        { type: "h", text: "What I Look For During a Factory Assessment" },
        { type: "p", text: "When I walk through a factory, I rarely start by asking about reject rates." },
        { type: "p", text: "Instead, I ask questions such as:" },
        {
          type: "list",
          items: [
            "Which quality issue keeps coming back every month?",
            "How many production hours were lost because of quality last week?",
            "Where do supervisors spend most of their time?",
            "Which customer complaint would surprise no one if it happened again?",
            "Which problem has already been \"fixed\" more than once?",
          ],
        },
        {
          type: "p",
          text:
            "The answers often reveal that recurring problems are accepted as normal operations instead of opportunities for improvement.",
        },
        { type: "h", text: "A Common Factory Scenario" },
        { type: "p", text: "One manufacturer reported only a 2% reject rate, which looked acceptable on paper." },
        {
          type: "p",
          text:
            "However, every week the team stopped production to sort finished goods before shipment. Operators worked overtime to recover lost output, and supervisors spent hours coordinating rework.",
        },
        { type: "p", text: "The reject rate was low." },
        { type: "p", text: "The cost of poor quality was not." },
        { type: "p", text: "The biggest loss was hidden in lost productivity, not in scrap." },
        { type: "h", text: "Where Better Factories Focus" },
        { type: "p", text: "High-performing factories do not simply inspect quality at the end of production." },
        { type: "p", text: "They make problems visible earlier." },
        {
          type: "p",
          text:
            "They measure the operational impact of quality issues, investigate recurring failures, and strengthen the process instead of relying on additional inspection.",
        },
        { type: "p", text: "Their goal is simple: prevent defects instead of managing them." },
        {
          type: "p",
          text: "That shift improves quality, productivity, delivery performance, and profitability at the same time.",
        },
        { type: "h", text: "Ask Yourself" },
        { type: "p", text: "If the same quality problems appear every month, the issue is probably not your people." },
        { type: "p", text: "It is your operating system." },
      ],
    },
    {
      slug: "kpi-dashboards-that-drive-action",
      read: "4 min read",
      title: "KPI Dashboards That Actually Drive Action",
      hero: [
        "A dashboard should not tell you what happened yesterday.",
        "It should help your team decide what to do today.",
      ],
      sections: [
        { type: "h", text: "When Reports Replace Decisions" },
        { type: "p", text: "Many factories produce excellent reports." },
        { type: "list", items: ["Production output", "Reject rate", "Downtime", "Customer complaints"] },
        { type: "p", text: "Every KPI is available." },
        { type: "p", text: "Yet supervisors still spend their day reacting to unexpected problems." },
        { type: "p", text: "The issue is rarely the data." },
        { type: "p", text: "It is how the data is used." },
        { type: "h", text: "What This Means for Your Business" },
        { type: "p", text: "A dashboard that only reports performance creates little business value." },
        { type: "p", text: "Delayed decisions often result in:" },
        {
          type: "list",
          items: [
            "Longer production interruptions",
            "More overtime",
            "Missed delivery targets",
            "Higher operating costs",
            "Slow response to quality issues",
            "Reduced accountability",
          ],
        },
        { type: "h", text: "Executive Perspective" },
        {
          type: "quote",
          text: "Factories improve when data changes behaviour, not when it simply fills management reports.",
        },
        { type: "h", text: "What I Look For on the Shop Floor Dashboard" },
        { type: "p", text: "When reviewing a factory dashboard, I rarely ask," },
        { type: "quote", text: "How many KPIs do you track?" },
        { type: "p", text: "Instead, I ask:" },
        {
          type: "list",
          items: [
            "Which KPI triggered action this morning?",
            "Which number worries the production manager most?",
            "Which trend has been ignored for weeks?",
            "Can supervisors explain yesterday's biggest production loss?",
            "Does every KPI have a clear owner?",
          ],
        },
        { type: "p", text: "Many dashboards answer management's questions." },
        { type: "p", text: "The best dashboards drive operational decisions." },
        { type: "h", text: "A Common Factory Scenario" },
        { type: "p", text: "One food manufacturer displayed more than ten KPIs every month." },
        { type: "p", text: "The reports looked professional." },
        { type: "p", text: "However, supervisors only reviewed them during monthly meetings." },
        {
          type: "p",
          text:
            "By the time quality or productivity problems appeared on the dashboard, the factory had already absorbed the cost.",
        },
        { type: "p", text: "The dashboard measured performance." },
        { type: "p", text: "It did not improve performance." },
        { type: "h", text: "Where Better Factories Focus" },
        { type: "p", text: "High-performing factories use fewer KPIs, reviewed more frequently." },
        {
          type: "p",
          text:
            "They focus on indicators that trigger immediate action, clarify ownership, and support daily production decisions.",
        },
        { type: "p", text: "Simple dashboards used consistently outperform complex dashboards that nobody acts upon." },
        { type: "h", text: "Ask Yourself" },
        { type: "p", text: "If one KPI disappeared from your dashboard tomorrow, would anyone change their decisions?" },
        {
          type: "p",
          text:
            "If the answer is no, the KPI may be measuring activity instead of driving improvement.",
        },
      ],
    },
    {
      slug: "factory-keeps-solving-same-problem",
      read: "5 min read",
      title: "The Reason Your Factory Keeps Solving the Same Problem",
      hero: [
        "Recurring problems are rarely caused by people.",
        "They are usually caused by systems that allow the same issues to return.",
      ],
      sections: [
        { type: "h", text: "The Same Fire Keeps Coming Back" },
        { type: "p", text: "The customer complaint is closed." },
        { type: "p", text: "Production returns to normal." },
        { type: "p", text: "The team agrees on corrective actions." },
        { type: "p", text: "A few weeks later, the same issue appears again." },
        {
          type: "p",
          text:
            "It may involve a different machine, operator, or production line, but the pattern feels familiar.",
        },
        { type: "p", text: "Many factories spend more time solving recurring problems than preventing new ones." },
        { type: "h", text: "What This Means for Your Business" },
        { type: "p", text: "Every recurring problem has a hidden cost." },
        {
          type: "p",
          text:
            "It consumes management attention, slows decision-making, reduces production stability, and weakens customer confidence.",
        },
        { type: "p", text: "The financial impact often includes:" },
        {
          type: "list",
          items: [
            "Rework and repeated investigations",
            "Production interruptions",
            "Delayed improvement projects",
            "Lost capacity",
            "More supervision",
            "Customer complaints that continue over time",
          ],
        },
        { type: "h", text: "Executive Perspective" },
        {
          type: "quote",
          text:
            "Every hour spent solving yesterday's problem is an hour not spent improving tomorrow's performance. Factories grow faster when leaders reduce recurring problems, not simply respond to them faster.",
        },
        { type: "h", text: "Questions I Ask Before Looking for Solutions" },
        { type: "p", text: "Before discussing corrective actions, I usually ask:" },
        {
          type: "list",
          items: [
            "Which issue has returned more than twice this year?",
            "Which corrective action was never fully implemented?",
            "Which problem is now considered \"normal\"?",
            "How do you know the solution actually worked?",
            "Which department owns long-term follow-up?",
          ],
        },
        {
          type: "p",
          text:
            "The answers often reveal that the factory is excellent at responding to problems but weak at preventing recurrence.",
        },
        { type: "h", text: "A Common Factory Scenario" },
        { type: "p", text: "A contract manufacturer investigated the same packaging defect three times in six months." },
        { type: "p", text: "Each investigation identified a different immediate cause." },
        {
          type: "p",
          text:
            "However, the packaging standard had never been updated, operators received different instructions between shifts, and no one verified whether corrective actions remained effective after implementation.",
        },
        { type: "p", text: "The investigations were completed." },
        { type: "p", text: "The problem was not." },
        { type: "h", text: "Where Better Factories Focus" },
        { type: "p", text: "Leading manufacturers build systems that make learning permanent." },
        {
          type: "p",
          text:
            "They standardize successful improvements, review corrective actions regularly, and measure whether problems stay solved over time.",
        },
        { type: "p", text: "Instead of asking, \"Who fixed today's issue?\"" },
        { type: "p", text: "They ask," },
        { type: "quote", text: "\"What changed in the process so this cannot happen again?\"" },
        { type: "h", text: "Ask Yourself" },
        { type: "p", text: "Which problem has your factory solved more than once during the past year?" },
        { type: "p", text: "If the answer comes quickly, the issue may not be your people." },
        { type: "p", text: "It may be your improvement system." },
      ],
    },
  ],
  langToggle: { en: "ENG", id: "ID" },
};

const id: Strings = {
  meta: {
    siteTitle: "Alna Kurnia Sari — Konsultan Mutu & Produktivitas",
    siteDescription:
      "Saya membantu perusahaan manufaktur meningkatkan mutu, mengurangi pemborosan, dan membangun sistem operasional yang scalable — QMS, perbaikan berkelanjutan, dan analitik data.",
    caseTitle: "Studi Kasus — Visibilitas Operasional UKM Manufaktur | Alna Kurnia Sari",
    caseDescription:
      "Bagaimana sebuah UKM manufaktur meningkatkan visibilitas operasional dan produktivitas melalui sistem pelaporan digital sederhana — studi kasus praktis.",
    insightFallbackTitle: "Artikel | Alna Kurnia Sari",
    insightFallbackDescription: "Wawasan untuk para pemimpin manufaktur.",
  },
  nav: {
    role: "— Konsultan Mutu & Produktivitas",
    services: "Layanan",
    caseStudies: "Studi Kasus",
    howIWork: "Metode Kerja",
    insights: "Artikel",
    about: "Tentang",
    contact: "Kontak →",
    backHome: "← Kembali ke Beranda",
  },
  about: {
    mark: "— Tentang",
    headline: "Dari lantai produksi menjadi mitra strategis peningkatan kinerja pabrik.",
    p1:
      "Saya memulai karier di lantai produksi — mengaudit proses, menelusuri penyebab defect, dan belajar bahwa masalah operasional hampir selalu bersumber dari desain sistem, bukan kurangnya usaha.",
    p2:
      "Hari ini saya membantu para pemimpin manufaktur menggunakan sistem mutu, continuous improvement, dan keputusan berbasis data untuk menghasilkan dampak bisnis yang terukur. Bagi saya, mutu adalah mesin pertumbuhan.",
    portraitAlt: "Foto Alna Kurnia Sari",
    principles: [
      ["Mutu membangun kepercayaan.", "Proses yang andal menghasilkan pendapatan yang andal."],
      ["Data memandu keputusan.", "Opini tunduk pada apa yang ditunjukkan angka."],
      ["Perbaikan adalah perjalanan.", "Hasil yang berkelanjutan mengalahkan kemenangan sesaat."],
      ["Pencegahan lebih baik daripada pemadam kebakaran.", "Hilangkan masalah dari akar, bukan dikelola berulang."],
    ],
  },
  experience: {
    mark: "— Pengalaman Profesional",
    headline: "15+ Tahun di Bidang Mutu & Operational Excellence",
    intro:
      "Kepemimpinan mutu di organisasi manufaktur multinasional — dari lantai produksi hingga sistem regional dan global.",
    danoneTitle: "Danone Specialized Nutrition",
    danoneRange: "2022 — 2024",
    danoneBody:
      "Memimpin inisiatif Quality, Food Safety, Compliance, dan Continuous Improvement untuk operasi manufaktur produk nutrisi khusus.",
    unileverTitle: "Unilever",
    unileverRange: "2008 — 2022",
    unileverBody:
      "Mengisi peran kepemimpinan mutu di tingkat pabrik, regional, dan global untuk mendukung operasi manufaktur, logistik, dan pasar di Asia Pasifik serta pasar internasional.",
    highlightsMark: "Pencapaian Karier",
    highlights: [
      ["8", "Pabrik dikelola, ditambah 20+ contract manufacturer"],
      ["30%", "Penurunan defect mutu dari supplier"],
      ["58%", "Penurunan Cost of Poor Quality"],
    ],
  },
  purpose: {
    mark: "— Mengapa Saya Melakukan Ini",
    headline: "Tujuan, Visi, dan Misi Saya",
    purposeTitle: "Tujuan",
    purposeBody:
      "Memberdayakan organisasi untuk meningkatkan sistem mutu, memperbaiki produktivitas operasional, dan memanfaatkan kekuatan data demi pertumbuhan berkelanjutan serta kepercayaan pelanggan.",
    visionTitle: "Visi",
    visionBody:
      "Menjadi mitra terpercaya bagi bisnis yang mengejar keunggulan dalam mutu dan produktivitas, dikenal karena mengubah tantangan menjadi hasil berdampak melalui solusi inovatif.",
    missionTitle: "Misi",
    missionItems: [
      "Membantu organisasi menanamkan mutu ke dalam budaya dan sistem mereka.",
      "Mendorong continuous improvement yang meningkatkan efisiensi dan kepuasan pelanggan.",
      "Memungkinkan keputusan berbasis data untuk peningkatan kinerja jangka pendek maupun jangka panjang.",
    ],
  },
  portfolio: {
    mark: "— Portofolio",
    headline: "Proyek-Proyek Representatif",
    intro:
      "Rekam jejak dalam membangun sistem manajemen mutu yang tangguh, meningkatkan kinerja operasional, dan mendorong strategi pertumbuhan.",
    cardLabel: "Proyek Representatif",
    deliverablesMark: "Hasil Utama",
    projects: [
      {
        title: "Sistem Manajemen Mutu untuk Ekspansi Consumer Goods",
        desc:
          "Membangun dan mengimplementasikan Sistem Manajemen Mutu untuk perusahaan consumer goods multinasional yang berekspansi ke jalur white market di Asia Pasifik.",
        deliverables: [
          "Quality risk assessment untuk sourcing dan supplier internasional",
          "Pengelolaan kepatuhan mutu di 40 distributor di Asia, Australia, dan Kepulauan Pasifik",
          "Portal umpan balik mutu pelanggan untuk mempercepat penyelesaian isu dan meningkatkan kepuasan pelanggan",
        ],
      },
      {
        title: "Kesiapan GMP & Peluncuran Produk Baru",
        desc:
          "Menyiapkan fasilitas contract manufacturer agar siap meluncurkan produk home care liquid baru dengan kontrol mutu dan compliance yang kuat.",
        deliverables: [
          "Asesmen kesiapan manufaktur dan gap analysis GMP",
          "Pencegahan kontaminasi silang melalui segregasi dan kontrol changeover",
          "Program validasi cleaning & sanitation",
          "Peningkatan kapabilitas laboratorium dan pengujian untuk jaminan mutu produk",
        ],
      },
      {
        title: "Operational Excellence untuk Produsen Rubber Logo",
        desc:
          "Meningkatkan kinerja operasional produsen rubber logo yang memasok merek sportswear global.",
        deliverables: [
          "Pengembangan dan standardisasi SOP manufaktur",
          "Sistem pelatihan tenaga kerja dan kerangka kompetensi",
          "Dashboard KPI otomatis untuk monitoring kinerja secara real-time",
        ],
      },
      {
        title: "Analitik Bisnis & Strategi Pertumbuhan (PaDi UMKM)",
        desc:
          "Bekerja sama dengan Telkom Indonesia untuk meningkatkan kinerja marketplace dan mendukung pertumbuhan UKM di PaDi UMKM.",
        deliverables: [
          "Dashboard kinerja bisnis menggunakan Google Analytics dan data marketplace",
          "Analisis peningkatan conversion rate",
          "Strategi segmentasi pembeli dan penjual",
        ],
      },
      {
        title: "Optimasi Sistem Manajemen Mutu Global",
        desc:
          "Merampingkan dokumentasi Sistem Manajemen Mutu untuk produsen consumer goods dengan banyak lokasi produksi.",
        deliverables: [
          "Restrukturisasi dokumen QMS dengan ownership dan governance yang jelas",
          "Alur review dan persetujuan dokumen yang lebih cepat",
          "Integrasi dokumentasi mutu dan product safety dari 7 pabrik ke dalam QMS global terpadu",
        ],
      },
      {
        title: "Mutu, Food Safety & Kepatuhan Regulasi",
        desc:
          "Memperkuat sistem kepatuhan produsen consumer goods untuk mempertahankan sertifikasi dan kesiapan audit.",
        deliverables: [
          "ISO 9001:2015 Quality Management System",
          "FSSC 22000 v6.0 Food Safety Management System",
          "Risk Management Program (PMR)",
          "CPKB Compliance (Cosmetics GMP)",
        ],
      },
    ],
  },
  services: {
    mark: "— Layanan",
    headline: "Area Fokus Saya",
    intro:
      "Setiap penugasan memadukan governance, improvement, dan analitik — karena kinerja yang berkelanjutan menuntut ketiganya bekerja sebagai satu sistem, bukan tiga inisiatif terpisah.",
    focusMark: "Fokus",
    outcomesMark: "Hasil",
    items: [
      {
        n: "01",
        title: "Sistem Manajemen Mutu",
        body: "Membangun fondasi governance yang membuat mutu dapat diandalkan — bukan bergantung pada upaya heroik.",
        focus: [
          "Kesiapan & sertifikasi ISO",
          "Pengembangan SOP",
          "Persiapan audit",
          "Kerangka governance & risk",
          "Kontrol non-conformance",
        ],
        outcomes: [
          "Lebih sedikit non-conformity",
          "Keandalan proses meningkat",
          "Kepercayaan pelanggan lebih kuat",
        ],
      },
      {
        n: "02",
        title: "Continuous Improvement & Operational Excellence",
        body: "Menanamkan kebiasaan dan tools harian yang berakumulasi menjadi operational excellence.",
        focus: [
          "Prinsip Lean & 5S",
          "TPM & siklus PDCA",
          "Root cause analysis",
          "Kaizen & value stream mapping",
          "Kapabilitas problem-solving",
        ],
        outcomes: [
          "Produktivitas lebih tinggi",
          "Pemborosan berkurang",
          "Budaya problem-solving lebih kuat",
        ],
      },
      {
        n: "03",
        title: "Analitik Data untuk Produktivitas",
        body: "Mengubah data operasional yang terpencar menjadi sinyal yang dapat ditindaklanjuti oleh pimpinan.",
        focus: [
          "Dashboard otomatis",
          "Perancangan kerangka KPI",
          "Pemantauan kinerja proses",
          "Analisis tren prediktif",
          "Analitik berbasis spreadsheet",
        ],
        outcomes: [
          "Keputusan lebih baik dan lebih cepat",
          "Deteksi masalah lebih dini",
          "Visibilitas operasional secara real-time",
        ],
      },
    ],
  },
  approach: {
    mark: "— Metode Kerja",
    headline: "Meningkatkan Kinerja Pabrik",
    intro: "Metode lima tahap yang membawa Anda dari diagnosis menuju budaya improvement yang mandiri dan berkelanjutan.",
    steps: [
      { n: "01", title: "Asesmen", items: ["Audit sistem saat ini", "Telaah data operasional", "Identifikasi bottleneck"] },
      { n: "02", title: "Diagnosa", items: ["Root cause analysis", "Pemetaan pemborosan & aliran proses", "Tinjauan proses"] },
      { n: "03", title: "Desain", items: ["Roadmap improvement", "Kerangka KPI", "Redesain sistem"] },
      { n: "04", title: "Implementasi", items: ["Pelatihan tim", "Rollout SOP", "Deployment dashboard"] },
      { n: "05", title: "Sustain", items: ["Pemantauan berkelanjutan", "Review kinerja", "Budaya improvement"] },
    ],
  },
  caseStudyPreview: {
    mark: "— Studi Kasus",
    headline: "Bukti, bukan sekadar janji.",
    intro: "Contoh nyata yang menunjukkan bagaimana visibilitas — bukan sekadar tambahan data — membuka produktivitas.",
    industryTag: "UKM Manufaktur",
    title:
      "Bagaimana UKM Manufaktur Meningkatkan Visibilitas Operasional & Produktivitas dengan Sistem Pelaporan Digital Sederhana",
    body:
      "Contoh praktis bagaimana data produksi yang terstruktur menjadi fondasi untuk keputusan yang lebih cepat, continuous improvement, dan pengurangan biaya operasional.",
    cta: "Baca studi kasus lengkap",
    summaryMark: "Ringkasan Proyek",
    summary: [
      ["Industri", "Rubber & PVC"],
      ["Lini Produksi", "24"],
      ["Implementasi", "1 Bulan"],
      ["Pendekatan", "Hybrid"],
    ],
  },
  insights: {
    mark: "— Artikel",
    headline: "Wawasan untuk Pemimpin Manufaktur",
    intro: "Ide praktis untuk meningkatkan produktivitas, mengurangi defect, dan membangun sistem pabrik yang lebih baik.",
    read: "Baca →",
    cards: [
      {
        title: "Biaya Tersembunyi dari Mutu yang Buruk: Mengapa Defect Lebih Merugikan dari yang Anda Kira",
        read: "4 menit baca",
        slug: "hidden-cost-of-poor-quality",
      },
      {
        title: "Mengapa Pabrik Anda Terus Menyelesaikan Masalah yang Sama",
        read: "5 menit baca",
        slug: "factory-keeps-solving-same-problem",
      },
      {
        title: "Dashboard KPI yang Benar-Benar Mendorong Tindakan",
        read: "4 menit baca",
        slug: "kpi-dashboards-that-drive-action",
      },
      {
        title: "Bagaimana Continuous Improvement Menjadi Pekerjaan Harian",
        read: "5 menit baca",
        slug: "why-productivity-projects-fail",
      },
    ],
  },
  cta: {
    mark: "— Mari Bicara",
    headlineA: "Sistem yang lebih baik",
    headlineB: "menghasilkan kinerja yang lebih baik.",
    body:
      "Jika defect, keterlambatan, pemborosan, atau kinerja yang tidak konsisten memperlambat bisnis Anda, mari kita identifikasi sistem di balik masalah tersebut — dan rancang sistem yang scalable.",
    schedule: "Jadwalkan Strategy Call →",
    download: "Unduh Capability Profile",
    contactMark: "Hubungi saya:",
    phoneLabel: "Nomor Kontak:",
    qrTitle: "Scan atau klik untuk WhatsApp saya",
    linkedIn: "Profil LinkedIn",
    fineprint:
      "Penugasan umumnya berlangsung 8–24 minggu. Strategy call berdurasi 30 menit dan tanpa biaya.",
  },
  footer: { linkedIn: "LinkedIn", email: "Email", contact: "Kontak" },
  caseStudy: {
    mark: "— Studi Kasus",
    title:
      "Bagaimana UKM Manufaktur Meningkatkan Visibilitas Operasional & Produktivitas dengan Sistem Pelaporan Digital Sederhana",
    intro:
      "Contoh praktis bagaimana data produksi yang terstruktur menjadi fondasi untuk keputusan yang lebih cepat, continuous improvement, dan pengurangan biaya operasional.",
    summaryMark: "Ringkasan Proyek",
    summary: [
      ["Industri", "Rubber Patch & PVC Logo"],
      ["Lini Produksi", "24"],
      ["Implementasi", "1 Bulan"],
      ["Pendekatan", "Hybrid Consulting"],
    ],
    challengeMark: "01 — Tantangan",
    challengeTitle: "Pabrik punya data. Tetapi data itu tidak mendorong perbaikan.",
    challengeBody:
      "Target harian, laporan supervisor, dan catatan reject sudah ada — tetapi sebagian besar informasi masih manual dan tidak pernah menjadi insight.",
    challengeCards: [
      ["Pelaporan Manual", "Informasi produksi dan reject dicatat secara manual di atas kertas."],
      ["Visibilitas Rendah", "Perbedaan kinerja antar lini sulit terlihat."],
      ["Produktivitas Tidak Stabil", "Fluktuasi output sulit dijelaskan apalagi ditangani."],
      ["Keputusan Reaktif", "Masalah baru tertangani setelah terjadi, bukan dicegah."],
    ],
    challengeQuote: "\"Masalahnya bukan kurang data. Masalahnya kurang visibilitas.\"",
    rootMark: "02 — Akar Masalah",
    rootTitle: "Apa yang kami temukan di lantai produksi",
    rootBody:
      "Data produksi hanya dipakai untuk tracking order secara manual. Data reject ada di kertas dan tidak pernah dikonsolidasi. Manajemen tidak bisa melihat output per produk, tren reject per lini, kerugian tersembunyi, atau lini yang underperforming.",
    rootFlow: ["Data ada", "Data tidak dianalisis", "Visibilitas terbatas"],
    rootFlowAccent: "Improvement reaktif",
    builtMark: "03 — Apa yang Kami Bangun",
    builtTitle: "Sistem pelaporan digital sederhana",
    builtBody:
      "Tanpa software mahal. Kami memanfaatkan tools yang sudah dimiliki bisnis — dirancang sesuai cara operator bekerja sehari-hari.",
    builtFlow: ["Operator", "Google Form", "Dashboard Spreadsheet", "Review Manajemen"],
    builtFlowAccent: "Aksi Perbaikan",
    resultsMark: "04 — Hasil",
    resultsTitle: "Apa yang berubah",
    resultsCards: [
      ["Visibilitas Operasional", "Kinerja terlihat di setiap lini produksi."],
      ["Keputusan Berbasis Data", "Diskusi bergeser dari asumsi menjadi fakta."],
      ["Identifikasi Masalah Lebih Cepat", "Gap kinerja muncul lebih awal, bukan setelah akhir bulan."],
      ["Prioritisasi Lebih Tajam", "Sumber daya difokuskan pada peluang berdampak tertinggi."],
      ["Fondasi CI", "Pelaporan terstruktur memungkinkan review CI yang sistematis."],
    ],
    resultsQuote:
      "\"Untuk pertama kalinya, manajemen dapat melihat dengan jelas lini produksi mana yang underperforming — dan di mana peluang perbaikan berada.\"",
    learningMark: "05 — Pembelajaran Kunci",
    learningTitle: "Sebagian besar pabrik tidak butuh data tambahan. Mereka butuh data yang terlihat.",
    learningBody:
      "Banyak UKM manufaktur sudah memiliki cukup data untuk meningkatkan produktivitas. Tantangan sebenarnya adalah membuat data itu terlihat, terstruktur, dan terhubung dengan pengambilan keputusan. Saat data operasional menjadi terlihat, continuous improvement menjadi lebih mudah, cepat, dan sistematis.",
    selfCheckMark: "Apakah ini juga terjadi di pabrik Anda?",
    selfCheckItems: [
      "Laporan produksi dikumpulkan tetapi jarang dianalisis.",
      "Catatan reject tersimpan tetapi trennya tidak pernah ditelusuri.",
      "Diskusi improvement bertumpu pada opini, bukan data.",
      "Sulit mengidentifikasi lini mana yang underperforming.",
    ],
    selfCheckClose: (yes: string) => ({
      before: "Jika Anda menjawab ",
      yes,
      after:
        " untuk salah satu pertanyaan di atas, kemungkinan besar ada peluang produktivitas dan mutu yang tersembunyi di dalam operasi Anda.",
    }),
    ctaTitle: "Mencari produktivitas dan visibilitas operasional yang lebih baik?",
    ctaBody:
      "Banyak pabrik sudah memiliki peluang perbaikan yang tersembunyi di dalam operasi harian. Sering kali peningkatan tercepat datang dari membuat data yang sudah ada menjadi terlihat dan dapat ditindaklanjuti. Mari diskusikan tantangan produktivitas, mutu, atau operasional Anda — dan eksplorasi langkah praktis berikutnya untuk pabrik Anda.",
    ctaButton: "Pesan Strategy Call →",
  },
  article: {
    nextMark: "— Langkah Selanjutnya",
    ctaTitle: "Ingin menerapkan ide-ide ini di pabrik Anda?",
    bookCall: "Pesan Strategy Call →",
    notFoundTitle: "Artikel tidak ditemukan",
    backHome: "← Kembali ke Beranda",
  },
  articles: [
    {
      slug: "why-productivity-projects-fail",
      read: "5 menit baca",
      title: "Bagaimana Continuous Improvement Menjadi Pekerjaan Harian",
      hero: [
        "Continuous Improvement bukanlah sebuah event.",
        "Ia adalah cara pabrik-pabrik sukses beroperasi setiap hari.",
      ],
      sections: [
        { type: "h", text: "Improvement Tidak Boleh Bergantung pada Proyek Khusus" },
        { type: "p", text: "Banyak pabrik mengadakan workshop improvement." },
        { type: "p", text: "Tim memunculkan banyak ide." },
        { type: "p", text: "Action plan disusun." },
        { type: "p", text: "Energi tinggi di awal." },
        { type: "p", text: "Beberapa bulan kemudian, produksi kembali ke kebiasaan lama." },
        {
          type: "p",
          text:
            "Perbaikan tersebut menghilang bukan karena idenya buruk, melainkan karena tidak pernah benar-benar terintegrasi ke dalam operasi harian.",
        },
        { type: "h", text: "Apa Artinya untuk Bisnis Anda" },
        { type: "p", text: "Ketika improvement bergantung pada proyek sesekali, pabrik biasanya mengalami:" },
        {
          type: "list",
          items: [
            "Produktivitas yang tidak konsisten",
            "Masalah operasional yang berulang",
            "Implementasi yang lambat",
            "Engagement karyawan yang rendah",
            "Hasil jangka panjang yang terbatas",
          ],
        },
        { type: "h", text: "Perspektif Eksekutif" },
        {
          type: "quote",
          text: "Budaya improvement paling kuat dibangun melalui daily management, bukan antusiasme sesaat.",
        },
        { type: "h", text: "Apa yang Saya Amati Selama Operasi Harian" },
        { type: "p", text: "Saat kunjungan ke pabrik, saya memperhatikan pertanyaan-pertanyaan sederhana:" },
        {
          type: "list",
          items: [
            "Bagaimana masalah kemarin menjadi pembelajaran hari ini?",
            "Bagaimana supervisor me-review hasil improvement?",
            "Standar mana yang berubah setelah suatu masalah diselesaikan?",
            "Apakah operator tahu apa yang sudah membaik bulan ini?",
            "Bagaimana pimpinan menguatkan perilaku baru?",
          ],
        },
        {
          type: "p",
          text:
            "Pengamatan ini menunjukkan apakah improvement sudah menjadi bagian dari operating system atau hanya sekadar proyek lain.",
        },
        { type: "h", text: "Skenario Pabrik yang Umum" },
        { type: "p", text: "Sebuah produsen personal care menyelesaikan beberapa proyek improvement sukses setiap tahun." },
        { type: "p", text: "Namun operator tetap menggunakan metode kerja yang berbeda antar lini." },
        {
          type: "p",
          text:
            "Karena standar kerja tidak pernah diperbarui secara konsisten, banyak perbaikan perlahan menghilang.",
        },
        { type: "p", text: "Proyeknya menghasilkan output." },
        { type: "p", text: "Sistemnya tidak mempertahankannya." },
        { type: "h", text: "Fokus Pabrik yang Lebih Baik" },
        { type: "p", text: "Pabrik kelas atas menjadikan improvement bagian dari daily management." },
        { type: "p", text: "Supervisor me-review kinerja setiap hari." },
        { type: "p", text: "Standar diperbarui." },
        { type: "p", text: "Masalah dibahas secara terbuka." },
        { type: "p", text: "Pembelajaran menjadi cara kerja baru." },
        { type: "p", text: "Improvement bukan lagi sesuatu yang ekstra." },
        { type: "p", text: "Ia menjadi bagian dari operasi normal." },
        { type: "h", text: "Tanyakan pada Diri Sendiri" },
        { type: "p", text: "Jika rapat improvement berhenti besok, apakah pabrik Anda tetap akan terus membaik?" },
        {
          type: "p",
          text:
            "Jika jawabannya tidak, improvement Anda mungkin masih bergantung pada proyek — bukan pada sistem manajemen.",
        },
      ],
    },
    {
      slug: "hidden-cost-of-poor-quality",
      read: "4 menit baca",
      title: "Biaya Tersembunyi dari Mutu yang Buruk: Mengapa Defect Lebih Merugikan dari yang Anda Kira",
      hero: [
        "Mutu yang buruk jarang sekadar masalah mutu.",
        "Ia sering kali adalah masalah profitabilitas yang menyamar sebagai masalah produksi.",
      ],
      sections: [
        { type: "h", text: "Setiap Defect Berbiaya Lebih Besar dari yang Anda Pikirkan" },
        { type: "p", text: "Produk yang di-reject mudah terlihat." },
        { type: "p", text: "Biaya sebenarnya adalah segala hal yang terjadi karena defect tersebut." },
        {
          type: "list",
          items: [
            "Produsen makanan menunda pengiriman sambil menunggu stok pengganti.",
            "Produsen home care menjadwalkan lembur untuk mengejar output yang hilang.",
            "Contract manufacturer melakukan inspeksi tambahan 100% sebelum pengiriman.",
            "Pabrik personal care menghabiskan pagi untuk menyortir barang jadi alih-alih menjalankan order produksi berikutnya.",
          ],
        },
        { type: "quote", text: "Defect-nya mungkin sudah hilang, tetapi bisnis terus membayar konsekuensinya." },
        { type: "h", text: "Apa Artinya untuk P&L Anda" },
        { type: "p", text: "Sebagian besar pabrik mengukur scrap dan complaint pelanggan." },
        { type: "p", text: "Sedikit yang mengukur dampak bisnisnya." },
        { type: "p", text: "Mutu yang buruk sering memunculkan biaya seperti:" },
        {
          type: "list",
          items: [
            "Rework dan tambahan tenaga kerja",
            "Downtime produksi",
            "Pemborosan material",
            "Pengiriman terlambat",
            "Emergency freight",
            "Inspeksi tambahan",
            "Kapasitas produksi yang hilang",
            "Klaim pelanggan dan kepercayaan yang tergerus",
          ],
        },
        {
          type: "p",
          text:
            "Biaya-biaya ini jarang muncul di satu akun. Mereka tersebar di seluruh operasi, sehingga dampak finansial sebenarnya mudah diremehkan.",
        },
        { type: "h", text: "Perspektif Eksekutif" },
        {
          type: "quote",
          text:
            "Setiap defect yang berulang memakan kapasitas yang seharusnya dipakai untuk memproduksi, melayani pelanggan, atau menumbuhkan pendapatan. Mutu bukan hanya soal compliance. Ia tentang melindungi profit.",
        },
        { type: "h", text: "Apa yang Saya Cari Saat Asesmen Pabrik" },
        { type: "p", text: "Saat saya berkeliling pabrik, saya jarang mulai dengan menanyakan reject rate." },
        { type: "p", text: "Saya justru bertanya:" },
        {
          type: "list",
          items: [
            "Masalah mutu mana yang terus muncul setiap bulan?",
            "Berapa jam produksi yang hilang akibat masalah mutu minggu lalu?",
            "Di mana supervisor menghabiskan sebagian besar waktunya?",
            "Complaint pelanggan mana yang tidak akan mengejutkan siapa pun jika terjadi lagi?",
            "Masalah mana yang sudah \"diperbaiki\" lebih dari sekali?",
          ],
        },
        {
          type: "p",
          text:
            "Jawabannya sering menunjukkan bahwa masalah yang berulang sudah diterima sebagai operasi normal, bukan peluang perbaikan.",
        },
        { type: "h", text: "Skenario Pabrik yang Umum" },
        { type: "p", text: "Satu produsen melaporkan reject rate hanya 2%, yang di atas kertas terlihat dapat diterima." },
        {
          type: "p",
          text:
            "Namun setiap minggu tim harus menghentikan produksi untuk menyortir barang jadi sebelum pengiriman. Operator lembur untuk mengejar output, dan supervisor menghabiskan berjam-jam mengoordinasikan rework.",
        },
        { type: "p", text: "Reject rate-nya rendah." },
        { type: "p", text: "Cost of Poor Quality-nya tidak." },
        { type: "p", text: "Kerugian terbesar tersembunyi di produktivitas yang hilang, bukan di scrap." },
        { type: "h", text: "Fokus Pabrik yang Lebih Baik" },
        { type: "p", text: "Pabrik berkinerja tinggi tidak hanya menginspeksi mutu di ujung produksi." },
        { type: "p", text: "Mereka membuat masalah terlihat lebih awal." },
        {
          type: "p",
          text:
            "Mereka mengukur dampak operasional dari isu mutu, menyelidiki kegagalan yang berulang, dan memperkuat proses alih-alih mengandalkan inspeksi tambahan.",
        },
        { type: "p", text: "Tujuannya sederhana: mencegah defect, bukan mengelolanya." },
        {
          type: "p",
          text:
            "Pergeseran itu sekaligus meningkatkan mutu, produktivitas, kinerja pengiriman, dan profitabilitas.",
        },
        { type: "h", text: "Tanyakan pada Diri Sendiri" },
        { type: "p", text: "Jika masalah mutu yang sama muncul setiap bulan, masalahnya kemungkinan bukan pada orang Anda." },
        { type: "p", text: "Tetapi pada operating system Anda." },
      ],
    },
    {
      slug: "kpi-dashboards-that-drive-action",
      read: "4 menit baca",
      title: "Dashboard KPI yang Benar-Benar Mendorong Tindakan",
      hero: [
        "Dashboard seharusnya tidak hanya bercerita tentang apa yang terjadi kemarin.",
        "Ia harus membantu tim Anda memutuskan apa yang harus dilakukan hari ini.",
      ],
      sections: [
        { type: "h", text: "Ketika Laporan Menggantikan Keputusan" },
        { type: "p", text: "Banyak pabrik menghasilkan laporan yang sangat rapi." },
        { type: "list", items: ["Output produksi", "Reject rate", "Downtime", "Complaint pelanggan"] },
        { type: "p", text: "Semua KPI tersedia." },
        { type: "p", text: "Namun supervisor tetap menghabiskan harinya bereaksi terhadap masalah yang tak terduga." },
        { type: "p", text: "Masalahnya jarang ada pada data." },
        { type: "p", text: "Masalahnya pada bagaimana data digunakan." },
        { type: "h", text: "Apa Artinya untuk Bisnis Anda" },
        { type: "p", text: "Dashboard yang hanya melaporkan kinerja menciptakan sedikit nilai bisnis." },
        { type: "p", text: "Keputusan yang tertunda biasanya menghasilkan:" },
        {
          type: "list",
          items: [
            "Gangguan produksi yang lebih lama",
            "Lembur yang lebih banyak",
            "Target pengiriman yang meleset",
            "Biaya operasional yang lebih tinggi",
            "Respons yang lambat terhadap isu mutu",
            "Akuntabilitas yang berkurang",
          ],
        },
        { type: "h", text: "Perspektif Eksekutif" },
        {
          type: "quote",
          text: "Pabrik membaik ketika data mengubah perilaku — bukan ketika data hanya memenuhi laporan manajemen.",
        },
        { type: "h", text: "Apa yang Saya Cari di Dashboard Lantai Produksi" },
        { type: "p", text: "Saat me-review dashboard pabrik, saya jarang bertanya," },
        { type: "quote", text: "Berapa banyak KPI yang Anda pantau?" },
        { type: "p", text: "Saya justru bertanya:" },
        {
          type: "list",
          items: [
            "KPI mana yang memicu tindakan pagi ini?",
            "Angka mana yang paling membuat production manager khawatir?",
            "Tren mana yang sudah berminggu-minggu diabaikan?",
            "Apakah supervisor bisa menjelaskan kerugian produksi terbesar kemarin?",
            "Apakah setiap KPI memiliki owner yang jelas?",
          ],
        },
        { type: "p", text: "Banyak dashboard menjawab pertanyaan manajemen." },
        { type: "p", text: "Dashboard terbaik mendorong keputusan operasional." },
        { type: "h", text: "Skenario Pabrik yang Umum" },
        { type: "p", text: "Sebuah produsen makanan menampilkan lebih dari sepuluh KPI setiap bulan." },
        { type: "p", text: "Laporannya terlihat profesional." },
        { type: "p", text: "Namun supervisor hanya me-review-nya saat rapat bulanan." },
        {
          type: "p",
          text:
            "Ketika masalah mutu atau produktivitas akhirnya muncul di dashboard, pabrik sudah menanggung kerugiannya.",
        },
        { type: "p", text: "Dashboard mengukur kinerja." },
        { type: "p", text: "Dashboard tidak meningkatkan kinerja." },
        { type: "h", text: "Fokus Pabrik yang Lebih Baik" },
        { type: "p", text: "Pabrik berkinerja tinggi menggunakan lebih sedikit KPI, tetapi di-review lebih sering." },
        {
          type: "p",
          text:
            "Mereka fokus pada indikator yang langsung memicu tindakan, memperjelas kepemilikan, dan mendukung keputusan produksi harian.",
        },
        {
          type: "p",
          text:
            "Dashboard sederhana yang digunakan secara konsisten mengungguli dashboard kompleks yang tidak ditindaklanjuti siapa pun.",
        },
        { type: "h", text: "Tanyakan pada Diri Sendiri" },
        {
          type: "p",
          text:
            "Jika satu KPI hilang dari dashboard Anda besok, apakah ada yang akan mengubah keputusannya?",
        },
        {
          type: "p",
          text:
            "Jika tidak, KPI itu mungkin hanya mengukur aktivitas — bukan mendorong perbaikan.",
        },
      ],
    },
    {
      slug: "factory-keeps-solving-same-problem",
      read: "5 menit baca",
      title: "Mengapa Pabrik Anda Terus Menyelesaikan Masalah yang Sama",
      hero: [
        "Masalah yang berulang jarang disebabkan oleh orang.",
        "Biasanya disebabkan oleh sistem yang membiarkan isu yang sama terus kembali.",
      ],
      sections: [
        { type: "h", text: "Api yang Sama Terus Berkobar" },
        { type: "p", text: "Complaint pelanggan ditutup." },
        { type: "p", text: "Produksi kembali normal." },
        { type: "p", text: "Tim menyepakati corrective action." },
        { type: "p", text: "Beberapa minggu kemudian, isu yang sama muncul lagi." },
        {
          type: "p",
          text:
            "Mungkin di mesin, operator, atau lini produksi yang berbeda — tetapi polanya terasa sangat familiar.",
        },
        { type: "p", text: "Banyak pabrik menghabiskan lebih banyak waktu menyelesaikan masalah yang berulang daripada mencegah masalah baru." },
        { type: "h", text: "Apa Artinya untuk Bisnis Anda" },
        { type: "p", text: "Setiap masalah yang berulang menyimpan biaya tersembunyi." },
        {
          type: "p",
          text:
            "Ia memakan perhatian manajemen, memperlambat pengambilan keputusan, mengurangi stabilitas produksi, dan menggerus kepercayaan pelanggan.",
        },
        { type: "p", text: "Dampak finansialnya sering kali mencakup:" },
        {
          type: "list",
          items: [
            "Rework dan investigasi berulang",
            "Gangguan produksi",
            "Proyek improvement yang tertunda",
            "Kapasitas yang hilang",
            "Supervisi tambahan",
            "Complaint pelanggan yang terus berlanjut",
          ],
        },
        { type: "h", text: "Perspektif Eksekutif" },
        {
          type: "quote",
          text:
            "Setiap jam yang dihabiskan menyelesaikan masalah kemarin adalah jam yang tidak dipakai untuk meningkatkan kinerja besok. Pabrik tumbuh lebih cepat ketika pimpinan mengurangi masalah berulang — bukan sekadar meresponsnya lebih cepat.",
        },
        { type: "h", text: "Pertanyaan yang Saya Ajukan Sebelum Mencari Solusi" },
        { type: "p", text: "Sebelum membahas corrective action, saya biasanya bertanya:" },
        {
          type: "list",
          items: [
            "Isu mana yang sudah kembali lebih dari dua kali tahun ini?",
            "Corrective action mana yang tidak pernah diimplementasikan sepenuhnya?",
            "Masalah mana yang sekarang dianggap \"normal\"?",
            "Bagaimana Anda tahu solusinya benar-benar bekerja?",
            "Departemen mana yang memiliki follow-up jangka panjang?",
          ],
        },
        {
          type: "p",
          text:
            "Jawabannya sering menunjukkan bahwa pabrik sangat baik dalam merespons masalah, tetapi lemah dalam mencegah masalah itu berulang.",
        },
        { type: "h", text: "Skenario Pabrik yang Umum" },
        { type: "p", text: "Sebuah contract manufacturer menyelidiki defect packaging yang sama tiga kali dalam enam bulan." },
        { type: "p", text: "Setiap investigasi mengidentifikasi penyebab langsung yang berbeda." },
        {
          type: "p",
          text:
            "Namun standar packaging tidak pernah diperbarui, operator menerima instruksi yang berbeda antar shift, dan tidak ada yang memverifikasi apakah corrective action tetap efektif setelah diimplementasikan.",
        },
        { type: "p", text: "Investigasinya selesai." },
        { type: "p", text: "Masalahnya tidak." },
        { type: "h", text: "Fokus Pabrik yang Lebih Baik" },
        { type: "p", text: "Manufaktur kelas atas membangun sistem yang membuat pembelajaran menjadi permanen." },
        {
          type: "p",
          text:
            "Mereka menstandarkan improvement yang berhasil, me-review corrective action secara rutin, dan mengukur apakah masalah tetap selesai dari waktu ke waktu.",
        },
        { type: "p", text: "Alih-alih bertanya, \"Siapa yang menyelesaikan isu hari ini?\"" },
        { type: "p", text: "Mereka bertanya," },
        { type: "quote", text: "\"Apa yang berubah dalam proses agar hal ini tidak terjadi lagi?\"" },
        { type: "h", text: "Tanyakan pada Diri Sendiri" },
        { type: "p", text: "Masalah mana yang sudah lebih dari sekali diselesaikan pabrik Anda selama setahun terakhir?" },
        { type: "p", text: "Jika jawabannya datang dengan cepat, isunya mungkin bukan pada orang Anda." },
        { type: "p", text: "Tetapi pada sistem improvement Anda." },
      ],
    },
  ],
  langToggle: { en: "ENG", id: "ID" },
};

export const translations: Record<Lang, Strings> = { en, id };