import {useEffect, useState, type ReactNode} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {MapPin, Menu, Moon, Phone, Sun, X} from 'lucide-react';
import {siteConfig} from '../config/siteConfig';
import {services} from '../data/services';
import {useTheme} from '../hooks/useTheme';
import {BrandLogo} from './BrandLogo';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({children}: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {theme, toggleTheme} = useTheme();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <div className="flex min-h-screen flex-col bg-[#F5F7FB] text-[#101828] transition-colors duration-200 dark:bg-[#080B12] dark:text-[#FFFFFF]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#155EEF] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-[#E4E7EC] bg-[#FFFFFF]/95 backdrop-blur-md dark:border-[#263244] dark:bg-[#080B12]/95">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            aria-label={`${siteConfig.companyName} — Home`}
            className="rounded-md py-1"
          >
            <BrandLogo />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {siteConfig.navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({isActive}) =>
                  `relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? 'text-[#155EEF] dark:text-[#5B8CFF]'
                      : 'text-[#475467] hover:text-[#101828] dark:text-[#CBD5E1] dark:hover:text-[#FFFFFF]'
                  }`
                }
              >
                {({isActive}) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-[1.2rem] h-0.5 bg-[#155EEF] dark:bg-[#5B8CFF]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark'
                  ? 'Switch to light theme'
                  : 'Switch to dark theme'
              }
              title={
                theme === 'dark'
                  ? 'Switch to light theme'
                  : 'Switch to dark theme'
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E4E7EC] bg-[#FFFFFF] text-[#475467] transition-colors duration-150 hover:border-[#155EEF]/40 hover:text-[#101828] dark:border-[#263244] dark:bg-[#111827] dark:text-[#CBD5E1] dark:hover:border-[#5B8CFF]/50 dark:hover:text-[#FFFFFF]"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <Link
              to="/contact"
              className="hidden items-center justify-center rounded-lg bg-[#155EEF] px-4 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#104CC9] dark:bg-[#5B8CFF] dark:text-[#080B12] dark:hover:bg-[#7AA2FF] sm:inline-flex"
            >
              {siteConfig.primaryCtaLabel}
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={
                mobileMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E4E7EC] bg-[#FFFFFF] text-[#101828] transition-colors duration-150 hover:bg-[#F5F7FB] dark:border-[#263244] dark:bg-[#111827] dark:text-[#FFFFFF] dark:hover:bg-[#1B2434] lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-x-0 top-16 bottom-0 z-30 bg-[#101828]/40 backdrop-blur-xs"
            />
            <nav
              id="mobile-navigation-drawer"
              aria-label="Mobile navigation"
              className="relative z-40 border-b border-[#E4E7EC] bg-[#FFFFFF] px-4 pb-6 pt-4 shadow-lg dark:border-[#263244] dark:bg-[#111827] sm:px-6"
            >
              <div className="flex flex-col space-y-1">
                {siteConfig.navigation.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({isActive}) =>
                      `flex min-h-11 items-center rounded-lg px-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#155EEF]/10 text-[#155EEF] dark:bg-[#5B8CFF]/15 dark:text-[#5B8CFF]'
                          : 'text-[#101828] hover:bg-[#F5F7FB] dark:text-[#CBD5E1] dark:hover:bg-[#1B2434] dark:hover:text-[#FFFFFF]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-5 border-t border-[#E4E7EC] pt-5 dark:border-[#263244]">
                <Link
                  to="/contact"
                  className="flex min-h-11 w-full items-center justify-center rounded-lg bg-[#155EEF] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#104CC9] dark:bg-[#5B8CFF] dark:text-[#080B12] dark:hover:bg-[#7AA2FF]"
                >
                  {siteConfig.primaryCtaLabel}
                </Link>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#E4E7EC] px-4 py-2.5 text-sm font-medium text-[#101828] transition-colors hover:bg-[#F5F7FB] dark:border-[#263244] dark:text-[#FFFFFF] dark:hover:bg-[#1B2434]"
                >
                  <Phone className="h-4 w-4 text-[#155EEF] dark:text-[#5B8CFF]" aria-hidden="true" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-[#E4E7EC] bg-[#FFFFFF] dark:border-[#263244] dark:bg-[#0B0F19]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Link
                to="/"
                aria-label={`${siteConfig.companyName} — Home`}
                className="inline-flex rounded-md"
              >
                <BrandLogo />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#475467] dark:text-[#CBD5E1]">
                {siteConfig.footerSummary}
              </p>
              <div className="mt-6 space-y-2.5 text-sm text-[#475467] dark:text-[#CBD5E1]">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2.5 font-medium text-[#101828] transition-colors hover:text-[#155EEF] dark:text-[#FFFFFF] dark:hover:text-[#5B8CFF]"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-[#155EEF] dark:text-[#5B8CFF]"
                    aria-hidden="true"
                  />
                  <span className="tabular-nums">{siteConfig.phoneDisplay}</span>
                </a>
                <p className="flex items-start gap-2.5">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#12B8A6] dark:text-[#2DD4BF]"
                    aria-hidden="true"
                  />
                  <span>{siteConfig.address.full}</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                Company
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {siteConfig.navigation.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-[#475467] transition-colors hover:text-[#155EEF] dark:text-[#CBD5E1] dark:hover:text-[#5B8CFF]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h2 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                Services
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services#${service.id}`}
                      className="text-[#475467] transition-colors hover:text-[#155EEF] dark:text-[#CBD5E1] dark:hover:text-[#5B8CFF]"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
                Legal
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {siteConfig.legalNavigation.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-[#475467] transition-colors hover:text-[#155EEF] dark:text-[#CBD5E1] dark:hover:text-[#5B8CFF]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-[#475467] dark:text-[#94A3B8]">
                Serving clients across the {siteConfig.primaryMarket} and internationally.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#E4E7EC] pt-8 text-xs text-[#475467] dark:border-[#263244] dark:text-[#94A3B8] sm:flex-row sm:items-center">
            <p>
              &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                to="/privacy-policy"
                className="transition-colors hover:text-[#101828] dark:hover:text-[#FFFFFF]"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                to="/terms-of-use"
                className="transition-colors hover:text-[#101828] dark:hover:text-[#FFFFFF]"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
