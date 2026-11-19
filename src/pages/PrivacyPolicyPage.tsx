import {Link} from 'react-router-dom';
import {Phone} from 'lucide-react';
import {siteConfig} from '../config/siteConfig';
import {usePageMeta} from '../hooks/usePageMeta';

export function PrivacyPolicyPage() {
  usePageMeta({
    title: 'Privacy Policy',
    description:
      'Starter Privacy Policy for the ShivShilp LLC corporate website outlining informational website practices, local theme storage, and contact details.',
  });

  return (
    <div className="bg-[#F5F7FB] py-14 dark:bg-[#080B12] sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-xl border border-[#E4E7EC] bg-[#FFFFFF] p-7 dark:border-[#263244] dark:bg-[#111827] sm:p-10 lg:p-12">
          <p className="font-[var(--font-mono)] text-xs font-medium text-[#155EEF] dark:text-[#5B8CFF]">
            Legal · Starter Policy Document
          </p>
          <h1 className="mt-2 font-[var(--font-display)] text-3xl font-bold tracking-tight text-[#101828] dark:text-[#FFFFFF]">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-[#475467] dark:text-[#94A3B8]">
            Entity: {siteConfig.legalName} · Last reviewed: [Placeholder — Insert
            Final Effective Date After Legal Review]
          </p>

          <div className="mt-6 rounded-lg border border-[#E4E7EC] bg-[#F5F7FB] p-4 text-xs leading-relaxed text-[#475467] dark:border-[#263244] dark:bg-[#080B12] dark:text-[#CBD5E1]">
            <strong className="font-semibold text-[#101828] dark:text-[#FFFFFF]">
              Legal Review Notice:
            </strong>{' '}
            This document is a starter Privacy Policy template structured for
            the current informational build of the {siteConfig.legalName}{' '}
            website. Bracketed placeholders should be reviewed and finalized
            with qualified legal counsel prior to formal publication or whenever
            website functionality changes.
          </div>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1] sm:text-base">
            <section>
              <h2 className="font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]">
                1. Overview
              </h2>
              <p className="mt-2">
                This Privacy Policy explains how {siteConfig.legalName} handles
                information in connection with this informational website.{' '}
                {siteConfig.legalName} is located at {siteConfig.address.full}.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]">
                2. Information Collection on This Website
              </h2>
              <p className="mt-2">
                In its current static configuration, this website does not
                include user account registration, online inquiry forms,
                newsletter subscriptions, or built-in third-party analytics
                tracking scripts. Visitors are not asked to submit personal
                information through web forms on this site.
              </p>
              <p className="mt-3">
                If you choose to contact {siteConfig.legalName} by telephone at{' '}
                <a
                  href={siteConfig.phoneHref}
                  className="font-medium text-[#155EEF] underline underline-offset-2 dark:text-[#5B8CFF]"
                >
                  {siteConfig.phoneDisplay}
                </a>
                , any information you share during that conversation is used to
                respond to your inquiry and discuss potential consulting
                services.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]">
                3. Browser Storage and Hosting Logs
              </h2>
              <p className="mt-2">
                This website stores a single local preference key (
                <code className="font-[var(--font-mono)] text-xs">
                  shivshilp-theme
                </code>
                ) in your browser&apos;s{' '}
                <code className="font-[var(--font-mono)] text-xs">
                  localStorage
                </code>{' '}
                solely to remember your light or dark display preference, and
                may temporarily use{' '}
                <code className="font-[var(--font-mono)] text-xs">
                  sessionStorage
                </code>{' '}
                for client-side page navigation routing. These browser values
                remain on your device and are not transmitted to an external
                analytics service by this website.
              </p>
              <p className="mt-3">
                Static web hosting providers (such as GitHub Pages or a
                configured domain host) may automatically collect standard
                network and server access logs (such as IP address, browser
                type, and request timestamp) in accordance with the hosting
                provider&apos;s own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]">
                4. External Links and Third-Party Resources
              </h2>
              <p className="mt-2">
                This website loads typography assets from Google Fonts and may
                link to external resources in the future. {siteConfig.legalName}{' '}
                is not responsible for the privacy practices of third-party
                providers or external websites.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]">
                5. Future Updates and Jurisdiction Disclosures
              </h2>
              <p className="mt-2">
                [Placeholder — Legal Review Required: Insert applicable state,
                federal, or international privacy rights disclosures, data
                retention periods, and update notification procedures if forms,
                analytics, or client portals are introduced in future phases.]
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]">
                6. Contact Information
              </h2>
              <p className="mt-2">
                Questions regarding this Privacy Policy may be directed to{' '}
                {siteConfig.legalName} by telephone or postal mail:
              </p>
              <div className="mt-4 rounded-lg border border-[#E4E7EC] bg-[#F5F7FB] p-5 text-sm dark:border-[#263244] dark:bg-[#080B12]">
                <p className="font-semibold text-[#101828] dark:text-[#FFFFFF]">
                  {siteConfig.legalName}
                </p>
                <p className="mt-1">Attn: {siteConfig.ownerName}</p>
                <p className="mt-1">{siteConfig.address.full}</p>
                <p className="mt-2">
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center gap-2 font-medium text-[#155EEF] dark:text-[#5B8CFF]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span className="tabular-nums">{siteConfig.phoneDisplay}</span>
                  </a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-10 border-t border-[#E4E7EC] pt-6 text-sm dark:border-[#263244]">
            <Link
              to="/terms-of-use"
              className="font-semibold text-[#155EEF] hover:text-[#104CC9] dark:text-[#5B8CFF]"
            >
              Read Terms of Use
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
