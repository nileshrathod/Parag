import {Link} from 'react-router-dom';
import {ArrowRight, MapPin, Phone} from 'lucide-react';
import workplaceVisual from '../assets/images/digital_workplace_1795120312860.jpg';
import {MediaFrame} from '../components/MediaFrame';
import {siteConfig} from '../config/siteConfig';
import {aboutPillars, deliveryApproachSteps} from '../data/company';
import {usePageMeta} from '../hooks/usePageMeta';

export function AboutPage() {
  usePageMeta({
    title: 'About ShivShilp LLC',
    description:
      'Learn about ShivShilp LLC, a Franklin, Tennessee software consulting and digital technology solutions company focused on maintainable websites, custom software, Azure cloud solutions, and practical automation.',
  });

  return (
    <div>
      {/* Overview Header */}
      <section className="border-b border-[#E4E7EC] bg-[#FFFFFF] dark:border-[#263244] dark:bg-[#0D121D]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="font-[var(--font-mono)] text-xs font-medium text-[#155EEF] dark:text-[#5B8CFF]">
                About {siteConfig.companyName}
              </p>
              <h1 className="mt-3 font-[var(--font-display)] text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-[#101828] dark:text-[#FFFFFF]">
                Practical Software Consulting Rooted in Clarity and Craft
              </h1>
              <p className="mt-5 text-base leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                {siteConfig.legalName} is a software consulting and digital
                technology solutions company based in{' '}
                {siteConfig.address.cityState}. We help small and medium-sized
                businesses, startups, and established organizations design
                dependable websites, build custom applications, modernize cloud
                and Microsoft 365 environments, and streamline operational
                workflows.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                Our work centers on turning technical complexity into clear,
                well-documented business tools. Whether an organization needs an
                objective architecture review, a responsive corporate website,
                or structured automation across existing systems, we focus on
                maintainable solutions that stay practical over time.
              </p>
            </div>

            <div className="flex lg:col-span-5">
              <MediaFrame
                src={workplaceVisual}
                alt="Calm modern consulting workspace with oak conference table and natural light"
                fallbackTitle="ShivShilp LLC · Franklin, Tennessee"
                aspectClassName="aspect-[4/3] w-full lg:aspect-auto lg:h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="bg-[#F5F7FB] py-16 dark:bg-[#080B12] sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-[var(--font-mono)] text-xs font-medium text-[#12B8A6] dark:text-[#2DD4BF]">
              How We Work
            </p>
            <h2 className="mt-2 font-[var(--font-display)] text-2xl font-bold tracking-tight text-[#101828] dark:text-[#FFFFFF] sm:text-3xl">
              Focused on Maintainable, Secure, and Useful Technology
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {aboutPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-[#E4E7EC] bg-[#FFFFFF] p-7 dark:border-[#263244] dark:bg-[#111827]"
              >
                <span className="font-[var(--font-mono)] text-xs font-medium tabular-nums text-[#155EEF] dark:text-[#5B8CFF]">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-[var(--font-display)] text-lg font-semibold text-[#101828] dark:text-[#FFFFFF]">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Commitment & Location */}
      <section className="border-t border-[#E4E7EC] bg-[#FFFFFF] py-16 dark:border-[#263244] dark:bg-[#0D121D] sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-[var(--font-mono)] text-xs font-medium text-[#155EEF] dark:text-[#5B8CFF]">
                Documented Delivery
              </p>
              <h2 className="mt-2 font-[var(--font-display)] text-2xl font-bold tracking-tight text-[#101828] dark:text-[#FFFFFF]">
                Clear Communication Across Every Stage
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                Software and cloud projects work best when both technical and
                nontechnical stakeholders share the same picture of scope,
                architecture, and priorities. Every engagement follows four
                transparent stages:
              </p>

              <div className="mt-6 divide-y divide-[#E4E7EC] border-y border-[#E4E7EC] dark:divide-[#263244] dark:border-[#263244]">
                {deliveryApproachSteps.map((step) => (
                  <div
                    key={step.number}
                    className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-12 sm:gap-4"
                  >
                    <div className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF] sm:col-span-4">
                      <span className="mr-2 font-[var(--font-mono)] tabular-nums text-[#155EEF] dark:text-[#5B8CFF]">
                        {step.number}.
                      </span>
                      {step.title}
                    </div>
                    <p className="text-sm text-[#475467] dark:text-[#CBD5E1] sm:col-span-8">
                      {step.summary} {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl border border-[#E4E7EC] bg-[#F5F7FB] p-7 dark:border-[#263244] dark:bg-[#111827]">
                <p className="font-[var(--font-mono)] text-xs font-medium text-[#12B8A6] dark:text-[#2DD4BF]">
                  Business Location & Service Area
                </p>
                <h3 className="mt-2 font-[var(--font-display)] text-xl font-bold text-[#101828] dark:text-[#FFFFFF]">
                  {siteConfig.legalName}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                  Based in {siteConfig.address.cityState}, serving organizations
                  across the {siteConfig.primaryMarket} and internationally.
                </p>

                <dl className="mt-6 space-y-4 border-t border-[#E4E7EC] pt-5 text-sm dark:border-[#263244]">
                  <div>
                    <dt className="text-xs font-medium text-[#475467] dark:text-[#94A3B8]">
                      Business Address
                    </dt>
                    <dd className="mt-1 flex items-start gap-2 font-medium text-[#101828] dark:text-[#FFFFFF]">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#12B8A6] dark:text-[#2DD4BF]"
                        aria-hidden="true"
                      />
                      <span>{siteConfig.address.full}</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-[#475467] dark:text-[#94A3B8]">
                      Business Telephone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={siteConfig.phoneHref}
                        className="inline-flex items-center gap-2 font-medium text-[#155EEF] transition-colors hover:text-[#104CC9] dark:text-[#5B8CFF] dark:hover:text-[#86ABFF]"
                      >
                        <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span className="tabular-nums">
                          {siteConfig.phoneDisplay}
                        </span>
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#155EEF] px-4 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#104CC9] dark:bg-[#5B8CFF] dark:text-[#080B12] dark:hover:bg-[#7AA2FF]"
                  >
                    <span>Contact ShivShilp</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#E4E7EC] bg-[#FFFFFF] px-4 py-2.5 text-sm font-semibold text-[#101828] whitespace-nowrap shrink-0 transition-colors hover:bg-[#F5F7FB] dark:border-[#263244] dark:bg-[#080B12] dark:text-[#FFFFFF] dark:hover:bg-[#162033]"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
