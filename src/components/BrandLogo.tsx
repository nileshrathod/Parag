import {siteConfig} from '../config/siteConfig';

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({className = ''}: BrandLogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="w-8 h-8 shrink-0"
      >
        <rect
          width="40"
          height="40"
          rx="9"
          className="fill-[#101828] dark:fill-[#155EEF]/15 stroke-[#101828] dark:stroke-[#5B8CFF]/40"
          strokeWidth="1"
        />
        <path
          d="M10.5 15.25L20 10L29.5 15.25V21.25L20 26.5L10.5 21.25V15.25Z"
          className="stroke-[#5B8CFF] dark:stroke-[#5B8CFF]"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 21.25L20 26.5L29.5 21.25"
          className="stroke-[#2DD4BF]"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.75 26L20 29.5L26.25 26"
          className="stroke-[#2DD4BF]"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 10V18.5M20 18.5L29.5 15.25M20 18.5L10.5 15.25"
          className="stroke-[#5B8CFF]"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="18.5" r="2" className="fill-[#2DD4BF]" />
      </svg>
      <span className="font-[var(--font-display)] text-[1.125rem] font-bold tracking-tight text-[#101828] dark:text-[#FFFFFF]">
        {siteConfig.wordmark}
      </span>
    </span>
  );
}
