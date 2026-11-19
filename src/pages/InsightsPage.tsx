import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {ArrowLeft, ArrowRight, BookOpen} from 'lucide-react';
import insightsVisual from '../assets/images/hero_architecture_1795120321195.jpg';
import {MediaFrame} from '../components/MediaFrame';
import {
  insightArticles,
  insightCategories,
  type InsightArticle,
} from '../data/insights';
import {usePageMeta} from '../hooks/usePageMeta';

function ArticleDetailView({article}: {article: InsightArticle}) {
  usePageMeta({
    title: article.title,
    description: article.excerpt,
  });

  const otherArticles = insightArticles.filter(
    (item) => item.slug !== article.slug,
  );

  return (
    <div className="bg-[#F5F7FB] py-12 dark:bg-[#080B12] sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#155EEF] transition-colors hover:text-[#104CC9] dark:text-[#5B8CFF] dark:hover:text-[#86ABFF]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to all insights</span>
        </Link>

        <article className="mt-6 rounded-xl border border-[#E4E7EC] bg-[#FFFFFF] p-6 dark:border-[#263244] dark:bg-[#111827] sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#475467] dark:text-[#94A3B8]">
            <span className="font-medium text-[#155EEF] dark:text-[#5B8CFF]">
              {article.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{article.updatedLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>

          <h1 className="mt-4 font-[var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-[#101828] dark:text-[#FFFFFF]">
            {article.title}
          </h1>

          <div className="mt-6 space-y-4 border-b border-[#E4E7EC] pb-8 text-base leading-relaxed text-[#475467] dark:border-[#263244] dark:text-[#CBD5E1]">
            {article.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 space-y-9">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-[var(--font-display)] text-xl font-bold tracking-tight text-[#101828] dark:text-[#FFFFFF]">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3.5 text-base leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-4 space-y-2.5 pl-1">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1] sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#12B8A6] dark:bg-[#2DD4BF]"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-[#E4E7EC] bg-[#F5F7FB] p-6 dark:border-[#263244] dark:bg-[#080B12]">
            <p className="font-[var(--font-mono)] text-xs font-medium text-[#12B8A6] dark:text-[#2DD4BF]">
              Practical Summary
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#101828] dark:text-[#E2E8F0] sm:text-base">
              {article.practicalTakeaway}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                to={`/contact?service=${encodeURIComponent(
                  article.relatedServiceLabel,
                )}`}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#155EEF] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#104CC9] dark:bg-[#5B8CFF] dark:text-[#080B12] dark:hover:bg-[#7AA2FF]"
              >
                <span>Discuss This Topic</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to={`/services#${article.relatedServiceId}`}
                className="inline-flex min-h-10 items-center justify-center rounded-lg border border-[#E4E7EC] bg-[#FFFFFF] px-4 py-2 text-sm font-semibold text-[#101828] whitespace-nowrap shrink-0 transition-colors hover:bg-[#F5F7FB] dark:border-[#263244] dark:bg-[#111827] dark:text-[#FFFFFF] dark:hover:bg-[#162033]"
              >
                Related: {article.relatedServiceLabel}
              </Link>
            </div>
          </div>
        </article>

        {/* Continue Reading */}
        <section aria-labelledby="more-insights-heading" className="mt-12">
          <h2
            id="more-insights-heading"
            className="font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]"
          >
            More Practical Guides
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherArticles.map((item) => (
              <Link
                key={item.slug}
                to={`/insights/${item.slug}`}
                className="group rounded-xl border border-[#E4E7EC] bg-[#FFFFFF] p-5 transition-colors hover:border-[#155EEF]/50 dark:border-[#263244] dark:bg-[#111827] dark:hover:border-[#5B8CFF]/60"
              >
                <p className="text-xs text-[#475467] dark:text-[#94A3B8]">
                  {item.category} · {item.readingTime}
                </p>
                <h3 className="mt-2 font-[var(--font-display)] text-sm font-semibold leading-snug text-[#101828] transition-colors group-hover:text-[#155EEF] dark:text-[#FFFFFF] dark:group-hover:text-[#5B8CFF]">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export function InsightsPage() {
  const {slug} = useParams<{slug?: string}>();
  const [activeCategory, setActiveCategory] = useState('All');

  usePageMeta({
    title: 'Insights & Practical Technology Guides',
    description:
      'Original technology consulting articles from ShivShilp LLC covering website technology stacks, Microsoft Azure hosting options, workflow automation, and custom vs. off-the-shelf software.',
  });

  if (slug) {
    const matchedArticle = insightArticles.find((item) => item.slug === slug);
    if (matchedArticle) {
      return <ArticleDetailView article={matchedArticle} />;
    }
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="font-[var(--font-mono)] text-xs font-medium text-[#155EEF] dark:text-[#5B8CFF]">
          Article Not Found
        </p>
        <h1 className="mt-3 font-[var(--font-display)] text-2xl font-bold text-[#101828] dark:text-[#FFFFFF]">
          We couldn’t find that insight article.
        </h1>
        <p className="mt-3 text-sm text-[#475467] dark:text-[#CBD5E1]">
          Browse our published guides on web engineering, Microsoft Azure,
          workflow automation, and software strategy.
        </p>
        <Link
          to="/insights"
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#155EEF] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#104CC9] dark:bg-[#5B8CFF] dark:text-[#080B12]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Return to Insights</span>
        </Link>
      </section>
    );
  }

  const filteredArticles =
    activeCategory === 'All'
      ? insightArticles
      : insightArticles.filter(
          (article) => article.category === activeCategory,
        );

  return (
    <div>
      {/* Header */}
      <section className="border-b border-[#E4E7EC] bg-[#FFFFFF] dark:border-[#263244] dark:bg-[#0D121D]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="font-[var(--font-mono)] text-xs font-medium text-[#155EEF] dark:text-[#5B8CFF]">
                Insights · Practical Guidance
              </p>
              <h1 className="mt-3 font-[var(--font-display)] text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-[#101828] dark:text-[#FFFFFF]">
                Clear Thinking on Web, Cloud, and Business Software Decisions
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                Practical educational guides written for business leaders and
                technical teams evaluating website architectures, Microsoft
                Azure hosting models, workflow automation, and build-versus-buy
                trade-offs.
              </p>
            </div>

            <div className="flex lg:col-span-5">
              <MediaFrame
                src={insightsVisual}
                alt="Bright modern architectural studio representing collaborative technology planning"
                fallbackTitle="ShivShilp Insights"
                aspectClassName="aspect-[16/10] w-full lg:aspect-auto lg:h-full"
                priority
              />
            </div>
          </div>

          {/* Category Filters */}
          <div
            className="mt-10 flex flex-wrap items-center gap-2 border-t border-[#E4E7EC] pt-6 dark:border-[#263244]"
            role="group"
            aria-label="Filter insights by category"
          >
            {insightCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
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

      {/* Articles Grid */}
      <section className="bg-[#F5F7FB] py-14 dark:bg-[#080B12] sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col justify-between rounded-xl border border-[#E4E7EC] bg-[#FFFFFF] p-7 transition-colors duration-150 hover:border-[#155EEF]/50 dark:border-[#263244] dark:bg-[#111827] dark:hover:border-[#5B8CFF]/60"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#475467] dark:text-[#94A3B8]">
                    <span className="font-medium text-[#155EEF] dark:text-[#5B8CFF]">
                      {article.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.updatedLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readingTime}</span>
                  </div>

                  <h2 className="mt-3 font-[var(--font-display)] text-xl font-bold leading-snug text-[#101828] dark:text-[#FFFFFF]">
                    <Link
                      to={`/insights/${article.slug}`}
                      className="transition-colors hover:text-[#155EEF] dark:hover:text-[#5B8CFF]"
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#E4E7EC] pt-5 dark:border-[#263244]">
                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#155EEF] transition-colors hover:text-[#104CC9] dark:text-[#5B8CFF] dark:hover:text-[#86ABFF]"
                  >
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                    <span>Read full guide</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
