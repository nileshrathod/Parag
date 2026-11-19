import {Link} from 'react-router-dom';
import {ArrowRight, Check} from 'lucide-react';
import softwareCraftVisual from '../assets/images/software_craft_1795120311798.jpg';
import {MediaFrame} from '../components/MediaFrame';
import {services} from '../data/services';
import {usePageMeta} from '../hooks/usePageMeta';

export function ServicesPage() {
  usePageMeta({
    title: 'Software Consulting, Web & Cloud Services',
    description:
      'Explore ShivShilp LLC services: software consulting, website design and development, custom software, Microsoft Azure cloud solutions, Microsoft 365, Power Platform automation, AI integration, and business dashboards.',
  });

  return (
    <div>
      {/* Page Intro */}
      <section className="border-b border-[#E4E7EC] bg-[#FFFFFF] dark:border-[#263244] dark:bg-[#0D121D]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="font-[var(--font-mono)] text-xs font-medium text-[#155EEF] dark:text-[#5B8CFF]">
                Services · ShivShilp LLC
              </p>
              <h1 className="mt-3 font-[var(--font-display)] text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-[#101828] dark:text-[#FFFFFF]">
                Software, Cloud, and Automation Services Engineered for Real Operations
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                From architecture consulting and responsive corporate websites
                to Microsoft Azure hosting, Microsoft 365 workplaces, and
                practical AI workflows, each engagement is scoped transparently
                around your business objectives.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#155EEF] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#104CC9] dark:bg-[#5B8CFF] dark:text-[#080B12] dark:hover:bg-[#7AA2FF]"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#E4E7EC] px-5 py-2.5 text-sm font-semibold text-[#101828] whitespace-nowrap shrink-0 transition-colors hover:bg-[#F5F7FB] dark:border-[#263244] dark:text-[#FFFFFF] dark:hover:bg-[#111827]"
                >
                  See Solution Blueprints
                </Link>
              </div>
            </div>

            <div className="flex lg:col-span-5">
              <MediaFrame
                src={softwareCraftVisual}
                alt="Layered architectural glass and matte dark slate geometry symbolizing structured software engineering"
                fallbackTitle="Structured Software Engineering"
                aspectClassName="aspect-[4/3] w-full lg:aspect-auto lg:h-full"
                priority
              />
            </div>
          </div>

          {/* Anchor Navigation */}
          <nav
            aria-label="Service section navigation"
            className="mt-12 border-t border-[#E4E7EC] pt-6 dark:border-[#263244]"
          >
            <p className="text-xs font-medium text-[#475467] dark:text-[#94A3B8]">
              Jump directly to a service area
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-[#E4E7EC] bg-[#F5F7FB] px-3 py-1.5 text-xs font-medium text-[#101828] whitespace-nowrap shrink-0 transition-colors hover:border-[#155EEF]/50 hover:text-[#155EEF] dark:border-[#263244] dark:bg-[#111827] dark:text-[#CBD5E1] dark:hover:border-[#5B8CFF]/60 dark:hover:text-[#FFFFFF]"
                >
                  <span className="font-[var(--font-mono)] tabular-nums text-[#12B8A6] dark:text-[#2DD4BF]">
                    {service.number}
                  </span>
                  <span>{service.shortTitle}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section className="bg-[#F5F7FB] py-14 dark:bg-[#080B12] sm:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {services.map((service) => {
            const contactHref = `/contact?service=${encodeURIComponent(
              service.queryLabel,
            )}`;

            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24 rounded-xl border border-[#E4E7EC] bg-[#FFFFFF] p-6 dark:border-[#263244] dark:bg-[#111827] sm:p-8 lg:p-10"
              >
                <div className="flex flex-col justify-between gap-4 border-b border-[#E4E7EC] pb-6 dark:border-[#263244] lg:flex-row lg:items-start">
                  <div className="max-w-3xl">
                    <span className="font-[var(--font-mono)] text-xs font-medium tabular-nums text-[#155EEF] dark:text-[#5B8CFF]">
                      Service {service.number}
                    </span>
                    <h2 className="mt-2 font-[var(--font-display)] text-2xl font-bold tracking-tight text-[#101828] dark:text-[#FFFFFF]">
                      {service.number}. {service.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                      {service.description}
                    </p>
                  </div>

                  <div className="shrink-0 pt-1">
                    <Link
                      to={contactHref}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#155EEF] px-4 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#104CC9] dark:bg-[#5B8CFF] dark:text-[#080B12] dark:hover:bg-[#7AA2FF]"
                    >
                      <span>Discuss This Service</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-3">
                  <div>
                    <h3 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                      Key Capabilities
                    </h3>
                    <ul className="mt-3.5 space-y-2.5">
                      {service.capabilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#12B8A6] dark:text-[#2DD4BF]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                      Common Business Challenges Addressed
                    </h3>
                    <ul className="mt-3.5 space-y-2.5">
                      {service.challengesAddressed.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]/50 dark:bg-[#94A3B8]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                      Typical Deliverables
                    </h3>
                    <ul className="mt-3.5 space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#155EEF] dark:text-[#5B8CFF]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {service.engagementNote && (
                  <p className="mt-7 border-t border-[#E4E7EC] pt-5 text-xs leading-relaxed text-[#475467] dark:border-[#263244] dark:text-[#94A3B8]">
                    {service.engagementNote}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
