import {Link, useSearchParams} from 'react-router-dom';
import {ArrowRight, Building2, Check, MapPin, Phone, User} from 'lucide-react';
import {siteConfig} from '../config/siteConfig';
import {services} from '../data/services';
import {usePageMeta} from '../hooks/usePageMeta';

export function ContactPage() {
  usePageMeta({
    title: 'Contact ShivShilp LLC',
    description:
      'Contact ShivShilp LLC in Franklin, Tennessee to discuss software consulting, website development, Microsoft Azure cloud solutions, Microsoft 365, workflow automation, or AI integration.',
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedServiceParam = searchParams.get('service')?.trim() || '';

  const matchedService = services.find(
    (service) =>
      service.queryLabel.toLowerCase() === selectedServiceParam.toLowerCase() ||
      service.title.toLowerCase() === selectedServiceParam.toLowerCase() ||
      service.id.toLowerCase() === selectedServiceParam.toLowerCase(),
  );

  const handleSelectTopic = (queryLabel: string) => {
    if (
      selectedServiceParam.toLowerCase() === queryLabel.toLowerCase()
    ) {
      searchParams.delete('service');
      setSearchParams(searchParams, {replace: true});
    } else {
      setSearchParams({service: queryLabel}, {replace: true});
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="border-b border-[#E4E7EC] bg-[#FFFFFF] dark:border-[#263244] dark:bg-[#0D121D]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="font-[var(--font-mono)] text-xs font-medium text-[#155EEF] dark:text-[#5B8CFF]">
              Contact · Direct Telephone Consultation
            </p>
            <h1 className="mt-3 font-[var(--font-display)] text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-[#101828] dark:text-[#FFFFFF]">
              Let’s Discuss Your Project
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
              Speak directly with {siteConfig.companyName} about software
              consulting, website development, Microsoft Azure cloud
              architecture, Microsoft 365, workflow automation, or AI
              integration.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="bg-[#F5F7FB] py-14 dark:bg-[#080B12] sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Primary Contact & Phone CTA */}
            <div className="space-y-8 lg:col-span-5">
              <div className="rounded-xl border border-[#E4E7EC] bg-[#FFFFFF] p-7 dark:border-[#263244] dark:bg-[#111827] sm:p-8">
                <p className="font-[var(--font-mono)] text-xs font-medium text-[#12B8A6] dark:text-[#2DD4BF]">
                  Direct Contact Details
                </p>
                <h2 className="mt-2 font-[var(--font-display)] text-2xl font-bold text-[#101828] dark:text-[#FFFFFF]">
                  {siteConfig.legalName}
                </h2>

                <dl className="mt-6 space-y-5 border-t border-[#E4E7EC] pt-6 text-sm dark:border-[#263244]">
                  <div className="flex items-start gap-3">
                    <User
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#155EEF] dark:text-[#5B8CFF]"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs text-[#475467] dark:text-[#94A3B8]">
                        Primary Contact
                      </dt>
                      <dd className="mt-0.5 font-semibold text-[#101828] dark:text-[#FFFFFF]">
                        {siteConfig.ownerName}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#155EEF] dark:text-[#5B8CFF]"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs text-[#475467] dark:text-[#94A3B8]">
                        Business Telephone
                      </dt>
                      <dd className="mt-0.5">
                        <a
                          href={siteConfig.phoneHref}
                          className="font-[var(--font-display)] text-lg font-bold tabular-nums text-[#155EEF] transition-colors hover:text-[#104CC9] dark:text-[#5B8CFF] dark:hover:text-[#86ABFF]"
                        >
                          {siteConfig.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#12B8A6] dark:text-[#2DD4BF]"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-xs text-[#475467] dark:text-[#94A3B8]">
                        Business Address
                      </dt>
                      <dd className="mt-0.5 font-medium text-[#101828] dark:text-[#FFFFFF]">
                        {siteConfig.address.full}
                      </dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-7">
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-[#155EEF] px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#104CC9] dark:bg-[#5B8CFF] dark:text-[#080B12] dark:hover:bg-[#7AA2FF]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>Call ShivShilp · {siteConfig.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Business Location Card */}
              <div className="rounded-xl border border-[#E4E7EC] bg-[#FFFFFF] p-7 dark:border-[#263244] dark:bg-[#111827] sm:p-8">
                <div className="flex items-center gap-2.5">
                  <Building2
                    className="h-4 w-4 text-[#12B8A6] dark:text-[#2DD4BF]"
                    aria-hidden="true"
                  />
                  <h2 className="font-[var(--font-display)] text-base font-bold text-[#101828] dark:text-[#FFFFFF]">
                    Business Location
                  </h2>
                </div>
                <address className="mt-4 not-italic text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                  <p className="font-semibold text-[#101828] dark:text-[#FFFFFF]">
                    {siteConfig.legalName}
                  </p>
                  <p>{siteConfig.address.street}</p>
                  <p>
                    {siteConfig.address.city}, {siteConfig.address.state}{' '}
                    {siteConfig.address.postalCode}
                  </p>
                  <p>{siteConfig.address.country}</p>
                </address>
                <p className="mt-4 border-t border-[#E4E7EC] pt-4 text-xs leading-relaxed text-[#475467] dark:border-[#263244] dark:text-[#94A3B8]">
                  Based in {siteConfig.address.cityState}. Available to support{' '}
                  {siteConfig.serviceArea}.
                </p>
              </div>
            </div>

            {/* Right Column: Discuss Your Project + Service Categories Review
                Structured modularly so a real contact form can be added in a
                future phase without redesigning the page layout. */}
            <div className="space-y-8 lg:col-span-7">
              <div className="rounded-xl border border-[#E4E7EC] bg-[#FFFFFF] p-7 dark:border-[#263244] dark:bg-[#111827] sm:p-8">
                <p className="font-[var(--font-mono)] text-xs font-medium text-[#155EEF] dark:text-[#5B8CFF]">
                  Discuss Your Project
                </p>
                <h2 className="mt-2 font-[var(--font-display)] text-2xl font-bold text-[#101828] dark:text-[#FFFFFF]">
                  Prepare for Your Introductory Call
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                  {siteConfig.companyName} currently handles initial project
                  inquiries directly by telephone so you can discuss business
                  goals, constraints, and next steps without waiting through
                  automated ticket queues.
                </p>

                {selectedServiceParam && (
                  <div className="mt-6 rounded-lg border border-[#155EEF]/30 bg-[#F5F7FB] p-5 dark:border-[#5B8CFF]/40 dark:bg-[#080B12]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-[var(--font-mono)] text-xs font-medium text-[#155EEF] dark:text-[#5B8CFF]">
                        Selected Service Topic
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          searchParams.delete('service');
                          setSearchParams(searchParams, {replace: true});
                        }}
                        className="text-xs font-medium text-[#475467] underline underline-offset-2 transition-colors hover:text-[#101828] dark:text-[#94A3B8] dark:hover:text-[#FFFFFF]"
                      >
                        Clear selection
                      </button>
                    </div>
                    <p className="mt-1.5 font-[var(--font-display)] text-base font-bold text-[#101828] dark:text-[#FFFFFF]">
                      {matchedService
                        ? matchedService.title
                        : selectedServiceParam}
                    </p>
                    {matchedService && (
                      <p className="mt-1.5 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                        {matchedService.homeSummary}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <a
                        href={siteConfig.phoneHref}
                        className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#155EEF] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#104CC9] dark:bg-[#5B8CFF] dark:text-[#080B12] dark:hover:bg-[#7AA2FF]"
                      >
                        <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Call to Discuss This Service</span>
                      </a>
                      {matchedService && (
                        <Link
                          to={`/services#${matchedService.id}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#155EEF] transition-colors hover:text-[#104CC9] dark:text-[#5B8CFF]"
                        >
                          <span>Review service deliverables</span>
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                )}

                {/* Helpful Call Preparation Points */}
                <div className="mt-7 border-t border-[#E4E7EC] pt-6 dark:border-[#263244]">
                  <h3 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                    Helpful Topics to Have Ready When You Call
                  </h3>
                  <ul className="mt-3.5 space-y-2.5 text-sm text-[#475467] dark:text-[#CBD5E1]">
                    <li className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#12B8A6] dark:text-[#2DD4BF]"
                        aria-hidden="true"
                      />
                      <span>
                        A brief summary of the business objective, workflow
                        bottleneck, or digital project you want to address.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#12B8A6] dark:text-[#2DD4BF]"
                        aria-hidden="true"
                      />
                      <span>
                        Current platforms or tools in use (for example,
                        Microsoft 365, SharePoint, Azure, or an existing
                        website).
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#12B8A6] dark:text-[#2DD4BF]"
                        aria-hidden="true"
                      />
                      <span>
                        Whether you are looking for initial architecture
                        consulting, hands-on implementation, or modernization
                        planning.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Service Categories Visitors Can Review Before Calling */}
                <div className="mt-8 border-t border-[#E4E7EC] pt-6 dark:border-[#263244]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                      Service Categories to Review Before Calling
                    </h3>
                    <span className="text-xs text-[#475467] dark:text-[#94A3B8]">
                      Select a topic to highlight your focus
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {services.map((service) => {
                      const isSelected =
                        matchedService?.id === service.id ||
                        selectedServiceParam.toLowerCase() ===
                          service.queryLabel.toLowerCase();

                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleSelectTopic(service.queryLabel)}
                          aria-pressed={isSelected}
                          className={`flex min-h-11 items-start justify-between gap-3 rounded-lg border p-3.5 text-left transition-colors duration-150 ${
                            isSelected
                              ? 'border-[#155EEF] bg-[#155EEF]/8 text-[#101828] dark:border-[#5B8CFF] dark:bg-[#5B8CFF]/15 dark:text-[#FFFFFF]'
                              : 'border-[#E4E7EC] bg-[#F5F7FB] text-[#101828] hover:border-[#155EEF]/40 dark:border-[#263244] dark:bg-[#080B12] dark:text-[#CBD5E1] dark:hover:border-[#5B8CFF]/50'
                          }`}
                        >
                          <div>
                            <span className="font-[var(--font-mono)] text-xs tabular-nums text-[#12B8A6] dark:text-[#2DD4BF]">
                              {service.number}
                            </span>
                            <p className="mt-0.5 text-sm font-semibold leading-snug text-[#101828] dark:text-[#FFFFFF]">
                              {service.title}
                            </p>
                          </div>
                          {isSelected && (
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#155EEF] dark:text-[#5B8CFF]"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
