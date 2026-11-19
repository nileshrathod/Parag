import {Link} from 'react-router-dom';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import {usePageMeta} from '../hooks/usePageMeta';

export function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found (404)',
    description:
      'The requested page on the ShivShilp LLC website could not be found. Return to the home page or explore our services.',
  });

  return (
    <section className="flex flex-1 items-center bg-[#F5F7FB] py-20 dark:bg-[#080B12] sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-[var(--font-mono)] text-sm font-medium tabular-nums text-[#155EEF] dark:text-[#5B8CFF]">
          Error 404
        </p>
        <h1 className="mt-3 font-[var(--font-display)] text-3xl font-bold tracking-tight text-[#101828] dark:text-[#FFFFFF] sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
          The page you are looking for may have moved or does not exist. Use one
          of the links below to continue exploring ShivShilp LLC.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#155EEF] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#104CC9] dark:bg-[#5B8CFF] dark:text-[#080B12] dark:hover:bg-[#7AA2FF]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#E4E7EC] bg-[#FFFFFF] px-5 py-2.5 text-sm font-semibold text-[#101828] whitespace-nowrap shrink-0 transition-colors hover:bg-[#F5F7FB] dark:border-[#263244] dark:bg-[#111827] dark:text-[#FFFFFF] dark:hover:bg-[#162033]"
          >
            <span>Explore Services</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#E4E7EC] bg-[#FFFFFF] px-5 py-2.5 text-sm font-semibold text-[#101828] whitespace-nowrap shrink-0 transition-colors hover:bg-[#F5F7FB] dark:border-[#263244] dark:bg-[#111827] dark:text-[#FFFFFF] dark:hover:bg-[#162033]"
          >
            Contact ShivShilp
          </Link>
        </div>
      </div>
    </section>
  );
}
