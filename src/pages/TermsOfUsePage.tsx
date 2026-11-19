import {Link} from 'react-router-dom';
import {Phone} from 'lucide-react';
import {siteConfig} from '../config/siteConfig';
import {usePageMeta} from '../hooks/usePageMeta';

export function TermsOfUsePage() {
  usePageMeta({
    title: 'Terms of Use',
    description:
      'Starter Terms of Use for the ShivShilp LLC website governing informational content, conceptual blueprints, intellectual property, and contact details.',
  });

  return (
    <div className="bg-[#F5F7FB] py-14 dark:bg-[#080B12] sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-xl border border-[#E4E7EC] bg-[#FFFFFF] p-7 dark:border-[#263244] dark:bg-[#111827] sm:p-10 lg:p-12">
          <p className="font-[var(--font-mono)] text-xs font-medium text-[#155EEF] dark:text-[#5B8CFF]">
            Legal · Starter Terms Document
          </p>
          <h1 className="mt-2 font-[var(--font-display)] text-3xl font-bold tracking-tight text-[#101828] dark:text-[#FFFFFF]">
            Terms of Use
          </h1>
          <p className="mt-2 text-xs text-[#475467] dark:text-[#94A3B8]">
            Entity: {siteConfig.legalName} · Last reviewed: [Placeholder — Insert
            Final Effective Date After Legal Review]
          </p>

          <div className="mt-6 rounded-lg border border-[#E4E7EC] bg-[#F5F7FB] p-4 text-xs leading-relaxed text-[#475467] dark:border-[#263244] dark:bg-[#080B12] dark:text-[#CBD5E1]">
            <strong className="font-semibold text-[#101828] dark:text-[#FFFFFF]">
              Legal Review Notice:
            </strong>{' '}
            This document is a starter Terms of Use template prepared for the{' '}
            {siteConfig.legalName} website. Please review and finalize all
            bracketed placeholders with qualified legal counsel before relying
            on these terms as final legal text.
          </div>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1] sm:text-base">
            <section>
              <h2 className="font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]">
                1. Informational Purpose
              </h2>
              <p className="mt-2">
                This website is operated by {siteConfig.legalName} for general
                informational purposes regarding its software consulting,
                website development, cloud, and automation services. Nothing on
                this website constitutes a binding offer, service-level
                commitment, or professional contract. Actual consulting or
                development engagements are governed exclusively by separate
                written agreements executed between {siteConfig.legalName} and
                the client.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]">
                2. Conceptual Examples and Third-Party Names
              </h2>
              <p className="mt-2">
                Solution blueprints, architectural diagrams, and educational
                articles published on this site are conceptual examples provided
                for general guidance. References to third-party technologies
                such as Microsoft Azure, Microsoft 365, SharePoint, Power Apps,
                Power Automate, Microsoft Entra ID, or React describe technical
                capabilities and remain the property of their respective owners.
                Such references do not imply endorsement, affiliation, or
                official vendor partnership.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]">
                3. Intellectual Property
              </h2>
              <p className="mt-2">
                Unless otherwise noted, original text, brand marks, visual
                layouts, and educational content on this website are the
                property of {siteConfig.legalName}. You may view and reference
                this content for evaluating {siteConfig.legalName}&apos;s
                services, but you may not reproduce or republish site content
                for commercial reuse without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]">
                4. Disclaimer and Limitation of Liability
              </h2>
              <p className="mt-2">
                This website and its informational content are provided on an
                &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without
                warranties of any kind. [Placeholder — Legal Review Required:
                Insert jurisdiction-appropriate warranty disclaimers,
                limitation-of-liability clauses, and indemnification language.]
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]">
                5. Governing Law
              </h2>
              <p className="mt-2">
                [Placeholder — Legal Review Required: Confirm governing law and
                venue provisions, such as the laws of the State of Tennessee,
                United States, with legal counsel.]
              </p>
            </section>

            <section>
              <h2 className="font-[var(--font-display)] text-lg font-bold text-[#101828] dark:text-[#FFFFFF]">
                6. Contact Information
              </h2>
              <p className="mt-2">
                For questions regarding these Terms of Use, please contact{' '}
                {siteConfig.legalName}:
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
              to="/privacy-policy"
              className="font-semibold text-[#155EEF] hover:text-[#104CC9] dark:text-[#5B8CFF]"
            >
              Read Privacy Policy
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
