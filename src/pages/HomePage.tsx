import {Link} from 'react-router-dom';
import {ArrowRight, Phone} from 'lucide-react';
import heroCloudVisual from '../assets/images/cloud_infrastructure_1795120313480.jpg';
import {MediaFrame} from '../components/MediaFrame';
import {siteConfig} from '../config/siteConfig';
import {
  deliveryApproachSteps,
  technologyEcosystem,
  whyShivShilpPrinciples,
} from '../data/company';
import {services} from '../data/services';
import {usePageMeta} from '../hooks/usePageMeta';

export function HomePage() {
  usePageMeta({
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="border-b border-[#E4E7EC] bg-[#FFFFFF] dark:border-[#263244] dark:bg-[#080B12]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="text-sm font-medium text-[#155EEF] dark:text-[#5B8CFF]">
                {siteConfig.address.cityState}
                <span aria-hidden="true" className="mx-2 text-[#475467] dark:text-[#64748B]">
                  ·
                </span>
                <span className="text-[#475467] dark:text-[#CBD5E1]">
                  {siteConfig.businessCategory}
                </span>
              </p>

              <h1 className="mt-4 font-[var(--font-display)] text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[#101828] dark:text-[#FFFFFF]">
                Smart Technology. Seamless Digital Experiences.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#475467] dark:text-[#CBD5E1] sm:text-lg">
                ShivShilp LLC helps businesses design better websites, build
                custom software, modernize cloud environments, and automate
                everyday operations with practical technology solutions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#155EEF] px-5 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#104CC9] dark:bg-[#5B8CFF] dark:text-[#080B12] dark:hover:bg-[#7AA2FF]"
                >
                  <span>{siteConfig.primaryCtaLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#E4E7EC] bg-[#FFFFFF] px-5 py-3 text-sm font-semibold text-[#101828] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#155EEF]/40 hover:bg-[#F5F7FB] dark:border-[#263244] dark:bg-[#111827] dark:text-[#FFFFFF] dark:hover:border-[#5B8CFF]/50 dark:hover:bg-[#162033]"
                >
                  Explore Our Services
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#E4E7EC] pt-6 text-xs text-[#475467] dark:border-[#263244] dark:text-[#94A3B8]">
                <span>Serving {siteConfig.serviceArea}</span>
                <span aria-hidden="true">·</span>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-1.5 font-medium text-[#101828] transition-colors hover:text-[#155EEF] dark:text-[#CBD5E1] dark:hover:text-[#5B8CFF]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#12B8A6] dark:text-[#2DD4BF]" aria-hidden="true" />
                  <span className="tabular-nums">{siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="flex lg:col-span-6">
              <MediaFrame
                src={heroCloudVisual}
                alt="Precision glass and aluminum modular architecture representing connected software systems and cloud infrastructure"
                fallbackTitle="Connected Cloud & Software Architecture"
                aspectClassName="aspect-[16/10] w-full lg:aspect-auto lg:h-full lg:min-h-[380px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Positioning Strip */}
      <section className="border-b border-[#E4E7EC] bg-[#F5F7FB] dark:border-[#263244] dark:bg-[#0D121D]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="font-[var(--font-display)] text-xl font-semibold tracking-tight text-[#101828] dark:text-[#FFFFFF] sm:text-2xl">
                {siteConfig.tagline}
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                {siteConfig.supportingMessage}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section
        aria-labelledby="core-services-heading"
        className="bg-[#F5F7FB] py-16 dark:bg-[#080B12] sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="font-[var(--font-mono)] text-xs font-medium text-[#155EEF] dark:text-[#5B8CFF]">
                Core Services
              </p>
              <h2
                id="core-services-heading"
                className="mt-2 font-[var(--font-display)] text-2xl font-bold tracking-tight text-[#101828] dark:text-[#FFFFFF] sm:text-3xl"
              >
                Eight Practical Capabilities Under One Technical Partner
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#155EEF] whitespace-nowrap shrink-0 transition-colors hover:text-[#104CC9] dark:text-[#5B8CFF] dark:hover:text-[#86ABFF]"
            >
              <span>View detailed services</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="group flex flex-col justify-between rounded-xl border border-[#E4E7EC] bg-[#FFFFFF] p-6 transition-colors duration-150 hover:border-[#155EEF]/50 dark:border-[#263244] dark:bg-[#111827] dark:hover:border-[#5B8CFF]/60"
              >
                <div>
                  <span className="font-[var(--font-mono)] text-xs font-medium tabular-nums text-[#12B8A6] dark:text-[#2DD4BF]">
                    {service.number}
                  </span>
                  <h3 className="mt-3 font-[var(--font-display)] text-base font-semibold leading-snug text-[#101828] transition-colors group-hover:text-[#155EEF] dark:text-[#FFFFFF] dark:group-hover:text-[#5B8CFF]">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                    {service.homeSummary}
                  </p>
                </div>

                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#155EEF] dark:text-[#5B8CFF]">
                  <span>Service details</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why ShivShilp */}
      <section
        aria-labelledby="why-shivshilp-heading"
        className="border-y border-[#E4E7EC] bg-[#FFFFFF] py-16 dark:border-[#263244] dark:bg-[#0D121D] sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-[var(--font-mono)] text-xs font-medium text-[#12B8A6] dark:text-[#2DD4BF]">
              Why ShivShilp
            </p>
            <h2
              id="why-shivshilp-heading"
              className="mt-2 font-[var(--font-display)] text-2xl font-bold tracking-tight text-[#101828] dark:text-[#FFFFFF] sm:text-3xl"
            >
              Working Principles Built Around Operational Clarity
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
              Every engagement follows straightforward engineering standards
              designed to keep your systems understandable, secure, and aligned
              with how your business operates.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyShivShilpPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="rounded-xl border border-[#E4E7EC] bg-[#F5F7FB] p-6 dark:border-[#263244] dark:bg-[#111827]"
              >
                <span className="font-[var(--font-mono)] text-xs font-medium tabular-nums text-[#155EEF] dark:text-[#5B8CFF]">
                  Principle {principle.number}
                </span>
                <h3 className="mt-3 font-[var(--font-display)] text-base font-semibold leading-snug text-[#101828] dark:text-[#FFFFFF]">
                  {principle.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section
        aria-labelledby="delivery-approach-heading"
        className="bg-[#F5F7FB] py-16 dark:bg-[#080B12] sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-[var(--font-mono)] text-xs font-medium text-[#155EEF] dark:text-[#5B8CFF]">
              Delivery Approach
            </p>
            <h2
              id="delivery-approach-heading"
              className="mt-2 font-[var(--font-display)] text-2xl font-bold tracking-tight text-[#101828] dark:text-[#FFFFFF] sm:text-3xl"
            >
              A Structured Four-Step Path From Idea to Production
            </h2>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {deliveryApproachSteps.map((step) => (
              <li
                key={step.number}
                className="flex flex-col justify-between rounded-xl border border-[#E4E7EC] bg-[#FFFFFF] p-6 dark:border-[#263244] dark:bg-[#111827]"
              >
                <div>
                  <span className="font-[var(--font-mono)] text-2xl font-semibold tabular-nums text-[#155EEF] dark:text-[#5B8CFF]">
                    {step.number}.
                  </span>
                  <h3 className="mt-3 font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#101828] dark:text-[#E2E8F0]">
                    {step.summary}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section
        aria-labelledby="technology-ecosystem-heading"
        className="border-t border-[#E4E7EC] bg-[#FFFFFF] py-16 dark:border-[#263244] dark:bg-[#0D121D] sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="font-[var(--font-mono)] text-xs font-medium text-[#12B8A6] dark:text-[#2DD4BF]">
                Technology Ecosystem
              </p>
              <h2
                id="technology-ecosystem-heading"
                className="mt-2 font-[var(--font-display)] text-2xl font-bold tracking-tight text-[#101828] dark:text-[#FFFFFF] sm:text-3xl"
              >
                Platforms and Engineering Capabilities We Work With
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                The capabilities below represent technologies ShivShilp LLC
                designs, builds, and integrates for business projects. References
                to third-party platforms describe technical service areas and do
                not imply official vendor partnerships or certifications.
              </p>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#155EEF] whitespace-nowrap shrink-0 transition-colors hover:text-[#104CC9] dark:text-[#5B8CFF] dark:hover:text-[#86ABFF]"
            >
              <span>Explore solution blueprints</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologyEcosystem.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-[#E4E7EC] bg-[#F5F7FB] p-5 dark:border-[#263244] dark:bg-[#111827]"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                    {item.name}
                  </h3>
                  <span className="text-xs text-[#475467] whitespace-nowrap shrink-0 dark:text-[#94A3B8]">
                    {item.category}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-[#E4E7EC] bg-[#101828] py-16 text-white dark:border-[#263244] dark:bg-[#111827] sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="font-[var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Have a Technology Challenge to Solve?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#CBD5E1]">
                Let’s explore a practical solution for your business.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#155EEF] px-5 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#2970FF] dark:bg-[#5B8CFF] dark:text-[#080B12] dark:hover:bg-[#7AA2FF]"
              >
                <span>Contact ShivShilp</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-white/40 hover:bg-white/5"
              >
                <Phone className="h-4 w-4 text-[#2DD4BF]" aria-hidden="true" />
                <span className="tabular-nums">{siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
