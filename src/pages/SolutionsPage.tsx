import {useState} from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight, Check} from 'lucide-react';
import {ArchitectureDiagram} from '../components/ArchitectureDiagram';
import {services} from '../data/services';
import {solutionBlueprints} from '../data/solutions';
import {usePageMeta} from '../hooks/usePageMeta';

const solutionCategories = [
  'All',
  ...Array.from(new Set(solutionBlueprints.map((item) => item.category))),
];

export function SolutionsPage() {
  usePageMeta({
    title: 'Solution Blueprints & Architecture Examples',
    description:
      'Conceptual solution blueprints from ShivShilp LLC illustrating how websites, Microsoft 365, Power Platform automation, Azure cloud hosting, AI integration, and dashboards work together.',
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const visibleSolutions =
    selectedCategory === 'All'
      ? solutionBlueprints
      : solutionBlueprints.filter(
          (solution) => solution.category === selectedCategory,
        );

  const serviceById = new Map(services.map((service) => [service.id, service]));

  return (
    <div>
      {/* Header */}
      <section className="border-b border-[#E4E7EC] bg-[#FFFFFF] dark:border-[#263244] dark:bg-[#0D121D]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="font-[var(--font-mono)] text-xs font-medium text-[#155EEF] dark:text-[#5B8CFF]">
              Solution Blueprints · Conceptual Examples
            </p>
            <h1 className="mt-3 font-[var(--font-display)] text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-[#101828] dark:text-[#FFFFFF]">
              How Modern Web, Cloud, and Workplace Technologies Work Together
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
              The eight solution blueprints below are conceptual architectural
              examples showing how ShivShilp LLC combines consulting, custom
              development, Microsoft 365, Azure, and automation to solve common
              business challenges. They are illustrative reference patterns
              rather than published client case studies.
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div className="mt-9 flex flex-wrap items-center gap-2" role="group" aria-label="Filter solution blueprints by category">
            {solutionCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={isActive}
                  className={`min-h-10 rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#155EEF] text-white dark:bg-[#5B8CFF] dark:text-[#080B12]'
                      : 'border border-[#E4E7EC] bg-[#F5F7FB] text-[#475467] hover:border-[#155EEF]/40 hover:text-[#101828] dark:border-[#263244] dark:bg-[#111827] dark:text-[#CBD5E1] dark:hover:border-[#5B8CFF]/50 dark:hover:text-[#FFFFFF]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Blueprint Cards */}
      <section className="bg-[#F5F7FB] py-14 dark:bg-[#080B12] sm:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {visibleSolutions.map((solution) => {
            const primaryRelatedService =
              serviceById.get(solution.relatedServiceIds[0]);
            const contactHref = `/contact?service=${encodeURIComponent(
              primaryRelatedService?.queryLabel ?? solution.title,
            )}`;

            return (
              <article
                key={solution.id}
                id={solution.id}
                className="rounded-xl border border-[#E4E7EC] bg-[#FFFFFF] p-6 dark:border-[#263244] dark:bg-[#111827] sm:p-8 lg:p-10"
              >
                <div className="flex flex-col justify-between gap-4 border-b border-[#E4E7EC] pb-6 dark:border-[#263244] lg:flex-row lg:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#475467] dark:text-[#94A3B8]">
                      <span className="font-[var(--font-mono)] font-medium tabular-nums text-[#155EEF] dark:text-[#5B8CFF]">
                        Blueprint {solution.number}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{solution.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Conceptual Example</span>
                    </div>
                    <h2 className="mt-2 font-[var(--font-display)] text-2xl font-bold tracking-tight text-[#101828] dark:text-[#FFFFFF]">
                      {solution.title}
                    </h2>
                  </div>

                  <Link
                    to={contactHref}
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[#E4E7EC] bg-[#F5F7FB] px-4 py-2 text-sm font-semibold text-[#101828] whitespace-nowrap shrink-0 transition-colors hover:border-[#155EEF]/50 hover:text-[#155EEF] dark:border-[#263244] dark:bg-[#080B12] dark:text-[#FFFFFF] dark:hover:border-[#5B8CFF]/60 dark:hover:text-[#5B8CFF]"
                  >
                    <span>Discuss This Blueprint</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                      The Business Problem
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                      {solution.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                      Proposed Approach
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                      {solution.approach}
                    </p>
                  </div>
                </div>

                <div className="mt-7 border-t border-[#E4E7EC] pt-6 dark:border-[#263244]">
                  <ArchitectureDiagram
                    layers={solution.architectureFlow}
                    label={`${solution.title} conceptual architecture diagram`}
                  />
                </div>

                <div className="mt-7 grid grid-cols-1 gap-8 border-t border-[#E4E7EC] pt-6 dark:border-[#263244] lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <h3 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                      Expected Operational Benefits
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {solution.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#12B8A6] dark:text-[#2DD4BF]"
                            aria-hidden="true"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4">
                    <h3 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                      Relevant Technologies
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                      {solution.technologies.join(' · ')}
                    </p>
                  </div>

                  <div className="lg:col-span-3">
                    <h3 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                      Related Services
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {solution.relatedServiceIds.map((serviceId) => {
                        const related = serviceById.get(serviceId);
                        if (!related) {
                          return null;
                        }
                        return (
                          <li key={serviceId}>
                            <Link
                              to={`/services#${related.id}`}
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#155EEF] transition-colors hover:text-[#104CC9] dark:text-[#5B8CFF] dark:hover:text-[#86ABFF]"
                            >
                              <span>{related.shortTitle}</span>
                              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
