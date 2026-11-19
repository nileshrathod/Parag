export interface NavItem {
  label: string;
  to: string;
}

export const siteConfig = {
  companyName: 'ShivShilp LLC',
  wordmark: 'ShivShilp',
  legalName: 'ShivShilp LLC',
  ownerName: 'Parag Barot',
  phoneDisplay: '+1 (931) 529-1000',
  phoneHref: 'tel:+19315291000',
  address: {
    street: '6210 Hospitality Dr',
    city: 'Franklin',
    state: 'TN',
    postalCode: '37067',
    country: 'USA',
    full: '6210 Hospitality Dr, Franklin, TN 37067, USA',
    cityState: 'Franklin, Tennessee',
  },
  primaryMarket: 'United States',
  serviceArea: 'United States and international clients',
  businessCategory: 'Software Consulting and Digital Technology Solutions',
  tagline: 'Technology Solutions That Move Your Business Forward.',
  supportingMessage:
    'From modern websites and custom software to cloud infrastructure and intelligent automation, ShivShilp helps businesses turn technology into practical results.',
  footerSummary:
    'Software consulting, website design and development, Microsoft Azure cloud solutions, Microsoft 365, workflow automation, and AI integration based in Franklin, Tennessee.',
  primaryCtaLabel: 'Let’s Discuss Your Project',
  navigation: [
    {label: 'Home', to: '/'},
    {label: 'Services', to: '/services'},
    {label: 'Solutions', to: '/solutions'},
    {label: 'About', to: '/about'},
    {label: 'Insights', to: '/insights'},
    {label: 'Contact', to: '/contact'},
  ] as NavItem[],
  legalNavigation: [
    {label: 'Privacy Policy', to: '/privacy-policy'},
    {label: 'Terms of Use', to: '/terms-of-use'},
  ] as NavItem[],
  seo: {
    defaultTitle:
      'ShivShilp LLC | Software Consulting, Web Development & Cloud Solutions',
    titleSuffix: 'ShivShilp LLC',
    defaultDescription:
      'ShivShilp LLC in Franklin, Tennessee delivers software consulting, modern website development, Microsoft Azure cloud solutions, Microsoft 365, workflow automation, and AI integration.',
  },
} as const;
