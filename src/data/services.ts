export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  queryLabel: string;
  homeSummary: string;
  description: string;
  capabilities: string[];
  challengesAddressed: string[];
  deliverables: string[];
  engagementNote?: string;
}

export const services: ServiceItem[] = [
  {
    id: 'software-consulting-architecture',
    number: '01',
    title: 'Software Consulting and Architecture',
    shortTitle: 'Software Consulting',
    queryLabel: 'Software Consulting and Architecture',
    homeSummary:
      'Practical technical guidance, system architecture design, and modernization roadmaps aligned with your operational priorities.',
    description:
      'Sound software architecture prevents expensive rework and operational bottlenecks. ShivShilp LLC works with business leaders and technical teams to clarify requirements, evaluate platforms objectively, and design maintainable systems built for long-term stability.',
    capabilities: [
      'Technical discovery and requirements analysis',
      'Software architecture and technology selection',
      'Application modernization planning',
      'System integration planning across business tools',
      'Technical documentation and architecture records',
      'Solution design and implementation guidance',
    ],
    challengesAddressed: [
      'Unclear technical scope before committing budget to software development',
      'Disconnected legacy tools that slow down daily operations',
      'Difficulty comparing cloud, custom, and off-the-shelf software trade-offs',
      'Lack of structured documentation for internal teams or external vendors',
    ],
    deliverables: [
      'Written requirements specification and scope baseline',
      'Target system architecture diagrams and component specifications',
      'Technology stack evaluation with cost and maintainability trade-offs',
      'Phased implementation and modernization roadmap',
    ],
  },
  {
    id: 'website-design-development',
    number: '02',
    title: 'Website Design and Development',
    shortTitle: 'Website Development',
    queryLabel: 'Website Design and Development',
    homeSummary:
      'Fast, accessible, responsive corporate websites and modern React frontends engineered for clarity and long-term maintainability.',
    description:
      'Your website is often the first place prospective customers evaluate your credibility. We design and develop clean, responsive websites with clear information architecture, modern frontend engineering, strong accessibility fundamentals, and straightforward deployment workflows.',
    capabilities: [
      'Professional business websites',
      'Responsive website development for desktop, tablet, and mobile',
      'Landing pages and corporate websites',
      'React and modern frontend development',
      'Website redesign and modernization',
      'Search engine optimization fundamentals',
      'Accessibility and performance optimization',
      'Deployment and hosting guidance',
    ],
    challengesAddressed: [
      'Outdated websites that fail to communicate services clearly on mobile devices',
      'Slow page loads, cluttered layouts, or hard-to-maintain templates',
      'Poor semantic structure that limits discoverability and keyboard accessibility',
      'Unnecessarily complex hosting setups for content-focused company sites',
    ],
    deliverables: [
      'Responsive, production-ready website codebase',
      'Structured page layouts, reusable components, and consistent visual styling',
      'Semantic HTML, metadata, sitemap, and accessibility baseline',
      'Hosting setup documentation and maintainability handoff guide',
    ],
  },
  {
    id: 'custom-software-development',
    number: '03',
    title: 'Custom Software and Application Development',
    shortTitle: 'Custom Software',
    queryLabel: 'Custom Software and Application Development',
    homeSummary:
      'Purpose-built web applications, internal operational tools, and API integrations tailored to how your team actually works.',
    description:
      'When off-the-shelf tools force awkward workarounds or manual spreadsheet stitching, custom software can bring order and reliability to core workflows. We build clean, well-structured web applications that integrate cleanly with your existing systems.',
    capabilities: [
      'Business applications tailored to operational rules',
      'Internal employee tools and operational portals',
      'Customer-facing web applications',
      'Workflow-oriented web applications',
      'REST API integrations and data synchronization',
      'Application maintenance and structured enhancements',
    ],
    challengesAddressed: [
      'Manual spreadsheet workflows that introduce data entry errors',
      'Software gaps between accounting, operations, and customer-facing processes',
      'Legacy internal applications that are difficult to update or scale',
      'Rigid third-party SaaS platforms that do not fit specialized workflows',
    ],
    deliverables: [
      'Clean, version-controlled TypeScript and web application source code',
      'Documented API integration layer and data schema',
      'Tested user interfaces aligned with everyday team workflows',
      'Deployment procedures and technical handoff documentation',
    ],
  },
  {
    id: 'microsoft-azure-cloud',
    number: '04',
    title: 'Microsoft Azure and Cloud Solutions',
    shortTitle: 'Microsoft Azure & Cloud',
    queryLabel: 'Microsoft Azure',
    homeSummary:
      'Azure architecture consulting, cloud hosting design, identity planning, and cost-conscious deployment guidance.',
    description:
      'Moving to or refining a Microsoft Azure environment requires disciplined architecture rather than over-provisioned resources. We help organizations select right-sized Azure services, plan secure identity and access boundaries, and deploy reliable cloud applications.',
    capabilities: [
      'Azure architecture consulting',
      'Azure Static Web Apps and suitable hosting solutions',
      'Cloud application deployment and CI/CD workflows',
      'Cloud migration planning',
      'Azure identity and access architecture (Microsoft Entra ID)',
      'Scalability, security, and reliability considerations',
      'Cloud cost optimization guidance',
    ],
    challengesAddressed: [
      'Uncertainty around which Azure hosting model fits a web application or API',
      'Rising cloud bills caused by over-sized or poorly configured resources',
      'Inconsistent identity, role-based access control, and environment separation',
      'Risky manual deployments without repeatable build and release steps',
    ],
    deliverables: [
      'Azure target architecture and service selection matrix',
      'Identity, access, and security configuration blueprint',
      'Deployment pipeline and environment configuration documentation',
      'Right-sizing and cloud cost review recommendations',
    ],
    engagementNote:
      'Engagement clarity: Consulting (architecture reviews, migration planning, and cost guidance), hands-on implementation (cloud provisioning and application deployment), and any ongoing operational support are scoped and agreed separately based on your internal IT needs.',
  },
  {
    id: 'microsoft-365-digital-workplace',
    number: '05',
    title: 'Microsoft 365 and Digital Workplace',
    shortTitle: 'Microsoft 365 Workplace',
    queryLabel: 'Microsoft 365 and Digital Workplace',
    homeSummary:
      'Organized SharePoint intranets, structured document management, and identity-aware Microsoft 365 collaboration experiences.',
    description:
      'Many organizations already pay for Microsoft 365 yet underutilize SharePoint and integrated collaboration tools. ShivShilp LLC helps turn scattered folders and email attachments into organized, searchable, permission-aware digital workplaces.',
    capabilities: [
      'SharePoint Online site architecture and solutions',
      'Employee intranet design and navigation structure',
      'Microsoft 365 integration across teams and departments',
      'Structured document management and metadata design',
      'Identity-aware workplace experiences using Microsoft Entra ID',
      'Digital collaboration workflow improvements',
    ],
    challengesAddressed: [
      'Important policies, templates, and files scattered across personal drives',
      'Unclear permissions and inconsistent folder structures across departments',
      'Low employee adoption of existing SharePoint and Microsoft 365 sites',
      'Manual onboarding and internal communication friction',
    ],
    deliverables: [
      'SharePoint information architecture and hub navigation plan',
      'Configured intranet pages and structured document libraries',
      'Permission governance model aligned with organizational roles',
      'Site ownership guidelines and content update documentation',
    ],
  },
  {
    id: 'workflow-automation-power-platform',
    number: '06',
    title: 'Workflow Automation and Power Platform',
    shortTitle: 'Workflow Automation',
    queryLabel: 'Workflow Automation and Power Platform',
    homeSummary:
      'Streamlined approval chains, document processing, and operational apps built with Microsoft Power Apps and Power Automate.',
    description:
      'Repetitive manual handoffs drain team capacity and create avoidable delays. We design practical automations and lightweight operational apps using Microsoft Power Platform and API integrations so approvals, notifications, and record updates happen reliably.',
    capabilities: [
      'Microsoft Power Apps business applications',
      'Microsoft Power Automate cloud workflows',
      'Multi-step approval workflows with clear audit trails',
      'Structured document intake and processing',
      'Business process automation across Microsoft 365 and external APIs',
      'Operational applications and system integrations',
    ],
    challengesAddressed: [
      'Slow manual approval chains tracked through spreadsheets or chat threads',
      'Duplicate data entry across intake forms, lists, and back-office tools',
      'Lack of visibility into where requests are stalled',
      'Fragile ad-hoc automations built without error handling or documentation',
    ],
    deliverables: [
      'Process flow map documenting triggers, approvals, and exception paths',
      'Configured Power Apps interfaces and Power Automate workflows',
      'Error handling, notification rules, and ownership documentation',
      'Admin handoff guide for maintaining connectors and permissions',
    ],
  },
  {
    id: 'ai-integration-intelligent-solutions',
    number: '07',
    title: 'AI Integration and Intelligent Solutions',
    shortTitle: 'AI Integration',
    queryLabel: 'AI Integration and Intelligent Solutions',
    homeSummary:
      'Practical AI API integration, document processing assistance, and internal knowledge workflows guided by responsible engineering.',
    description:
      'Useful AI adoption starts with specific operational bottlenecks—not hype. ShivShilp LLC helps organizations evaluate where AI APIs genuinely save time, integrate them safely into existing workflows, and establish clear human-review and data-handling boundaries.',
    capabilities: [
      'AI-assisted business workflows integrated with existing tools',
      'AI API integration within custom applications and automations',
      'Structured document and information extraction workflows',
      'Internal knowledge assistant design grounded in approved company materials',
      'Productivity-focused automation with human-in-the-loop checkpoints',
      'Responsible AI implementation, privacy, and governance considerations',
    ],
    challengesAddressed: [
      'Uncertainty about which AI use cases deliver practical value vs. unnecessary complexity',
      'Time-consuming manual review, summarization, or classification of internal documents',
      'Concerns about data boundaries, output accuracy, and human oversight',
      'Need to connect modern AI APIs cleanly into existing web or Microsoft 365 workflows',
    ],
    deliverables: [
      'Use-case feasibility assessment with clear scope and data boundaries',
      'Custom workflow or API integration prototype and production implementation',
      'Prompt, validation, and human-review workflow documentation',
      'Operational cost monitoring and responsible-use checklist',
    ],
    engagementNote:
      'Implementation focus: Solutions are custom-designed and integrated around your workflows and chosen AI providers rather than sold as pre-packaged proprietary AI platforms.',
  },
  {
    id: 'data-analytics-business-dashboards',
    number: '08',
    title: 'Data Analytics and Business Dashboards',
    shortTitle: 'Data & Dashboards',
    queryLabel: 'Data Analytics and Business Dashboards',
    homeSummary:
      'Clear operational dashboards, automated reporting pipelines, and consolidated metrics that support informed business decisions.',
    description:
      'Decision-makers should not have to spend hours reconciling multiple exports every week to understand operational health. We design structured data integrations and clean, readable dashboards that surface accurate operational indicators.',
    capabilities: [
      'Operational and management dashboards',
      'Clear, accessible data visualization design',
      'Reporting automation to reduce manual spreadsheet assembly',
      'API and multi-source data integration',
      'Business performance reporting structures',
      'Decision-support tools aligned with operational KPIs',
    ],
    challengesAddressed: [
      'Weekly or monthly reports assembled manually from disconnected exports',
      'Conflicting definitions of key operational figures across departments',
      'Cluttered charts that obscure trends rather than clarifying decisions',
      'Delayed visibility into operational workloads, pipeline, or fulfillment status',
    ],
    deliverables: [
      'KPI definition sheet and data source mapping',
      'Automated data ingestion or API integration pipeline',
      'Interactive dashboard views tailored to operational and leadership roles',
      'Data refresh schedule and maintenance documentation',
    ],
  },
];
