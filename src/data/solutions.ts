export interface ArchitectureLayer {
  stage: string;
  title: string;
  detail: string;
}

export interface SolutionBlueprint {
  id: string;
  number: string;
  title: string;
  category: string;
  problem: string;
  approach: string;
  technologies: string[];
  benefits: string[];
  relatedServiceIds: string[];
  architectureFlow: ArchitectureLayer[];
}

export const solutionBlueprints: SolutionBlueprint[] = [
  {
    id: 'business-website-digital-presence',
    number: '01',
    title: 'Business Website and Digital Presence',
    category: 'Web & Digital',
    problem:
      'Growing organizations often outgrow template websites that load slowly, render poorly on mobile screens, and make it hard for prospective clients to understand what the business offers.',
    approach:
      'Design a structured, responsive React and TypeScript web presence with clear service architecture, accessible navigation, lightweight static asset bundling, and automated deployment pipelines.',
    technologies: [
      'React & TypeScript',
      'Tailwind CSS',
      'Static Cloud Hosting',
      'Semantic HTML & SEO Metadata',
    ],
    benefits: [
      'Clear service communication across desktop, tablet, and mobile devices',
      'Fast page loads and low ongoing hosting overhead',
      'Maintainable content configuration for future page updates',
    ],
    relatedServiceIds: [
      'website-design-development',
      'software-consulting-architecture',
    ],
    architectureFlow: [
      {stage: 'Experience', title: 'Responsive React UI', detail: 'Accessible pages & navigation'},
      {stage: 'Content', title: 'Structured Config', detail: 'Centralized service & company data'},
      {stage: 'Delivery', title: 'Automated CI/CD', detail: 'Build verification & static deploy'},
      {stage: 'Hosting', title: 'Global CDN Edge', detail: 'HTTPS & custom domain routing'},
    ],
  },
  {
    id: 'employee-intranet-digital-workplace',
    number: '02',
    title: 'Employee Intranet and Digital Workplace',
    category: 'Microsoft 365',
    problem:
      'Policies, operational guides, announcements, and project files often end up fragmented across email threads and unmanaged folders, making onboarding and daily work slower.',
    approach:
      'Establish a structured SharePoint Online hub intranet connected to Microsoft Entra ID groups, with clean departmental navigation, metadata-driven document libraries, and clear content ownership.',
    technologies: [
      'Microsoft 365',
      'SharePoint Online',
      'Microsoft Entra ID',
      'Document Library Governance',
    ],
    benefits: [
      'Single reliable hub for internal policies, templates, and announcements',
      'Role-based access permissions aligned with company structure',
      'Faster document discovery through consistent metadata and search',
    ],
    relatedServiceIds: [
      'microsoft-365-digital-workplace',
      'software-consulting-architecture',
    ],
    architectureFlow: [
      {stage: 'Identity', title: 'Microsoft Entra ID', detail: 'SSO & role-based security groups'},
      {stage: 'Portal', title: 'SharePoint Hub', detail: 'Company & department landing pages'},
      {stage: 'Knowledge', title: 'Managed Libraries', detail: 'Versioned files & metadata views'},
      {stage: 'Governance', title: 'Access & Lifecycle', detail: 'Clear owners & review cadence'},
    ],
  },
  {
    id: 'automated-approvals-document-workflows',
    number: '03',
    title: 'Automated Approvals and Document Workflows',
    category: 'Automation',
    problem:
      'Purchase requests, onboarding checklists, and document sign-offs managed manually through ad-hoc messages create delays, missed steps, and poor audit visibility.',
    approach:
      'Build a structured intake form in Power Apps or a web portal backed by Power Automate approval routing, status tracking lists, automated reminders, and archived completion logs.',
    technologies: [
      'Microsoft Power Apps',
      'Microsoft Power Automate',
      'SharePoint Lists & Libraries',
      'Microsoft 365 Connectors',
    ],
    benefits: [
      'Consistent approval rules with clear visibility into pending items',
      'Reduced manual follow-up and fewer misplaced requests',
      'Structured audit trail of who approved each stage and when',
    ],
    relatedServiceIds: [
      'workflow-automation-power-platform',
      'microsoft-365-digital-workplace',
    ],
    architectureFlow: [
      {stage: 'Intake', title: 'Structured Form', detail: 'Validated request & attachments'},
      {stage: 'Routing', title: 'Power Automate', detail: 'Conditional multi-step approvals'},
      {stage: 'Record', title: 'Central Register', detail: 'Live status & approval timestamps'},
      {stage: 'Archive', title: 'Document Store', detail: 'Finalized files with permissions'},
    ],
  },
  {
    id: 'custom-internal-business-applications',
    number: '04',
    title: 'Custom Internal Business Applications',
    category: 'Custom Software',
    problem:
      'Core operational tasks such as job tracking, client intake, or service scheduling frequently outgrow spreadsheets yet do not fit rigid generic SaaS products.',
    approach:
      'Architect and develop a focused web application using React, TypeScript, and clean REST APIs tailored to your exact data model, validation rules, and user roles.',
    technologies: [
      'React & TypeScript',
      'REST APIs',
      'Microsoft Entra ID / Auth',
      'Relational or Cloud Storage',
    ],
    benefits: [
      'Software screens matched directly to your team’s daily workflow',
      'Input validation that improves operational data accuracy',
      'Clean API boundaries for integrating accounting or ERP systems',
    ],
    relatedServiceIds: [
      'custom-software-development',
      'software-consulting-architecture',
    ],
    architectureFlow: [
      {stage: 'Interface', title: 'Role-Based Web App', detail: 'Task-focused React screens'},
      {stage: 'Logic', title: 'Application API', detail: 'Business rules & validation'},
      {stage: 'Integration', title: 'System Connectors', detail: 'Sync with existing platforms'},
      {stage: 'Storage', title: 'Structured Data', detail: 'Backups & access controls'},
    ],
  },
  {
    id: 'cloud-hosted-web-applications',
    number: '05',
    title: 'Cloud-Hosted Web Applications',
    category: 'Cloud & Azure',
    problem:
      'Businesses deploying modern web applications often struggle to balance hosting reliability, authentication, deployment repeatability, and predictable cloud spending.',
    approach:
      'Combine Azure Static Web Apps or right-sized Azure App Services with automated CI/CD builds, environment separation, Microsoft Entra ID authentication, and baseline monitoring.',
    technologies: [
      'Microsoft Azure',
      'Azure Static Web Apps',
      'Microsoft Entra ID',
      'CI/CD Deployment Pipelines',
    ],
    benefits: [
      'Repeatable, low-risk releases from version-controlled repositories',
      'Clear separation between staging and production environments',
      'Right-sized cloud architecture designed to keep costs predictable',
    ],
    relatedServiceIds: [
      'microsoft-azure-cloud',
      'custom-software-development',
    ],
    architectureFlow: [
      {stage: 'Source', title: 'Git & CI Pipeline', detail: 'Lint, typecheck & automated build'},
      {stage: 'Frontend', title: 'Azure Hosting', detail: 'HTTPS, CDN & custom domain'},
      {stage: 'Security', title: 'Identity & Secrets', detail: 'Entra ID & managed configuration'},
      {stage: 'Operations', title: 'Observability', detail: 'Health logs & cost governance'},
    ],
  },
  {
    id: 'ai-assisted-business-processes',
    number: '06',
    title: 'AI-Assisted Business Processes',
    category: 'AI Integration',
    problem:
      'Teams spend substantial time triaging incoming documents, summarizing long reference files, or searching internal manuals for routine operational answers.',
    approach:
      'Integrate vetted AI APIs into controlled internal workflows that extract structured fields or draft summaries from approved documents, always routing outputs through human verification before action.',
    technologies: [
      'AI APIs',
      'Document Processing Pipelines',
      'Power Automate / Custom APIs',
      'Human-in-the-Loop Review UI',
    ],
    benefits: [
      'Faster document triage and first-draft preparation for staff',
      'Clear privacy boundaries using approved source repositories',
      'Human oversight preserved for every operational decision',
    ],
    relatedServiceIds: [
      'ai-integration-intelligent-solutions',
      'workflow-automation-power-platform',
    ],
    architectureFlow: [
      {stage: 'Input', title: 'Approved Sources', detail: 'Controlled documents or requests'},
      {stage: 'Processing', title: 'AI API Layer', detail: 'Extraction, tagging or synthesis'},
      {stage: 'Verification', title: 'Human Review', detail: 'Staff confirms or edits output'},
      {stage: 'Action', title: 'Target System', detail: 'Clean data written downstream'},
    ],
  },
  {
    id: 'management-reporting-dashboards',
    number: '07',
    title: 'Management Reporting and Dashboards',
    category: 'Data & Analytics',
    problem:
      'Leadership teams frequently wait days for manually combined spreadsheet reports, leading to stale visibility and inconsistent operational numbers.',
    approach:
      'Connect operational systems through scheduled API queries or structured data feeds into clean, role-specific dashboards with documented metric definitions.',
    technologies: [
      'REST API Data Feeds',
      'Reporting Automation',
      'Interactive Web & BI Dashboards',
      'Data Modeling',
    ],
    benefits: [
      'Timely visibility into operational trends without manual copy-paste work',
      'Consistent metric definitions shared across teams',
      'Focused visual layouts designed for clear leadership review',
    ],
    relatedServiceIds: [
      'data-analytics-business-dashboards',
      'custom-software-development',
    ],
    architectureFlow: [
      {stage: 'Sources', title: 'Business Systems', detail: 'CRM, operations & finance APIs'},
      {stage: 'Pipeline', title: 'Scheduled Sync', detail: 'Validation & metric normalization'},
      {stage: 'Model', title: 'Reporting Layer', detail: 'Documented KPI definitions'},
      {stage: 'Views', title: 'Executive Dashboard', detail: 'Filterable role-based views'},
    ],
  },
  {
    id: 'microsoft-365-modernization',
    number: '08',
    title: 'Microsoft 365 Modernization',
    category: 'Microsoft 365',
    problem:
      'Organizations transitioning from file servers or unorganized cloud folders often face duplicated files, ad-hoc sharing links, and underused collaboration features.',
    approach:
      'Assess existing workspace structure, design a logical SharePoint and Microsoft Teams architecture, modernize document libraries, and introduce practical workflow automations in phases.',
    technologies: [
      'Microsoft 365',
      'SharePoint Online',
      'Microsoft Teams',
      'Power Automate & Entra ID',
    ],
    benefits: [
      'Cleaner file governance with reduced version confusion',
      'Higher value from existing Microsoft 365 licensing',
      'Phased rollout designed to minimize disruption to daily operations',
    ],
    relatedServiceIds: [
      'microsoft-365-digital-workplace',
      'workflow-automation-power-platform',
      'microsoft-azure-cloud',
    ],
    architectureFlow: [
      {stage: 'Assess', title: 'Workspace Audit', detail: 'Map files, teams & access gaps'},
      {stage: 'Structure', title: 'Information Design', detail: 'Sites, hubs & naming standards'},
      {stage: 'Migrate', title: 'Phased Transition', detail: 'Clean transfer & permissions'},
      {stage: 'Automate', title: 'Workplace Flows', detail: 'Streamlined day-to-day tasks'},
    ],
  },
];
