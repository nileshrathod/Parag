export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

export interface DeliveryStep {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export interface TechnologyCapability {
  name: string;
  category: string;
  note: string;
}

export const whyShivShilpPrinciples: PrincipleItem[] = [
  {
    number: '01',
    title: 'Business-focused technology recommendations',
    description:
      'Every architecture, platform, or tool recommendation is grounded in operational outcomes, budget realities, and long-term usefulness rather than passing trends.',
  },
  {
    number: '02',
    title: 'Solutions designed around real operational needs',
    description:
      'We study how your team actually handles information, approvals, and customer interactions before proposing software structures.',
  },
  {
    number: '03',
    title: 'Secure and maintainable application architecture',
    description:
      'Clean modular code, clear access boundaries, and readable documentation ensure systems remain reliable well beyond initial launch.',
  },
  {
    number: '04',
    title: 'Responsive, user-friendly digital experiences',
    description:
      'Websites and business applications are crafted for clarity, accessibility, and effortless usability across desktop, tablet, and mobile screens.',
  },
  {
    number: '05',
    title: 'Integration with existing business systems',
    description:
      'Rather than forcing disruptive rip-and-replace projects, we connect new solutions thoughtfully with Microsoft 365, APIs, and existing tools.',
  },
  {
    number: '06',
    title: 'Practical implementation and ongoing improvement',
    description:
      'Delivery is structured in clear, verifiable milestones with transparent handoff documentation and room for phased enhancements where agreed.',
  },
];

export const deliveryApproachSteps: DeliveryStep[] = [
  {
    number: '01',
    title: 'Discover',
    summary: 'Understand the business objectives and challenges.',
    detail:
      'Clarify operational pain points, existing tools, stakeholders, and practical constraints before making technical commitments.',
  },
  {
    number: '02',
    title: 'Design',
    summary: 'Define requirements, architecture, and user experience.',
    detail:
      'Translate priorities into clear functional scope, system diagrams, technology choices, and clean interface layouts.',
  },
  {
    number: '03',
    title: 'Develop',
    summary: 'Build and test the agreed solution.',
    detail:
      'Implement modular software, integrations, or cloud configurations with steady visibility, code quality checks, and functional testing.',
  },
  {
    number: '04',
    title: 'Deliver and Improve',
    summary: 'Deploy, document, and support future enhancements where agreed.',
    detail:
      'Launch reliably into production, provide clear technical documentation, and plan structured next phases when your business grows.',
  },
];

export const technologyEcosystem: TechnologyCapability[] = [
  {
    name: 'Microsoft Azure',
    category: 'Cloud Platform',
    note: 'Architecture consulting, static web hosting, app services, and cost-conscious deployment.',
  },
  {
    name: 'Microsoft 365',
    category: 'Digital Workplace',
    note: 'Connected workplace planning, collaboration governance, and productivity workflows.',
  },
  {
    name: 'SharePoint',
    category: 'Intranet & Content',
    note: 'Employee intranets, hub navigation, and structured document libraries.',
  },
  {
    name: 'Power Apps',
    category: 'Business Applications',
    note: 'Targeted internal tools and operational forms connected to Microsoft 365 data.',
  },
  {
    name: 'Power Automate',
    category: 'Workflow Automation',
    note: 'Automated approvals, notifications, document routing, and process orchestration.',
  },
  {
    name: 'Microsoft Entra ID',
    category: 'Identity & Access',
    note: 'Single sign-on planning, role-based access structure, and secure identity architecture.',
  },
  {
    name: 'React and TypeScript',
    category: 'Modern Frontend',
    note: 'Type-safe component architectures for websites, portals, and web applications.',
  },
  {
    name: 'JavaScript and modern web technologies',
    category: 'Web Standards',
    note: 'Semantic HTML, accessible CSS systems, responsive layouts, and performance optimization.',
  },
  {
    name: 'REST APIs and system integrations',
    category: 'Integration Layer',
    note: 'Reliable data exchange connecting web applications, cloud services, and back-office tools.',
  },
  {
    name: 'AI and business automation',
    category: 'Intelligent Workflows',
    note: 'API-based document assistance, knowledge workflows, and human-reviewed automation.',
  },
  {
    name: 'Data analytics and reporting',
    category: 'Operational Visibility',
    note: 'Structured data feeds, automated reporting pipelines, and management dashboards.',
  },
];

export const aboutPillars = [
  {
    title: 'Clarity before code',
    description:
      'Technology investments succeed when expectations are clear. We take time to understand operational context, define scope in plain language, and outline trade-offs honestly before implementation begins.',
  },
  {
    title: 'Engineered for maintainability',
    description:
      'We favor clean architecture, standard modern frameworks, and concise documentation over fragile complexity—so your websites, applications, and cloud setups remain straightforward to operate.',
  },
  {
    title: 'Security and structure by design',
    description:
      'Identity boundaries, permission models, accessibility standards, and clean separation of concerns are treated as core engineering fundamentals rather than afterthoughts.',
  },
  {
    title: 'Practical, accountable delivery',
    description:
      'From initial consulting conversations to deployment and handoff, communication stays direct, transparent, and focused on measurable operational usefulness.',
  },
];
