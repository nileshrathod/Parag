import {useState} from 'react';
import {Layers} from 'lucide-react';

interface MediaFrameProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  aspectClassName?: string;
  className?: string;
  priority?: boolean;
}

export function MediaFrame({
  src,
  alt,
  fallbackTitle,
  aspectClassName = 'aspect-[16/9]',
  className = '',
  priority = false,
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-[#E4E7EC] dark:border-[#263244] bg-[#EAEEF5] dark:bg-[#111827] ${aspectClassName} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#F5F7FB] via-[#E8EEF8] to-[#DCE7F7] p-6 text-center dark:from-[#0D1320] dark:via-[#111827] dark:to-[#162135]"
        >
          <Layers
            className="h-8 w-8 text-[#155EEF] dark:text-[#5B8CFF]"
            aria-hidden="true"
          />
          <span className="font-[var(--font-display)] text-sm font-semibold text-[#101828] dark:text-[#FFFFFF]">
            {fallbackTitle}
          </span>
        </div>
      )}
    </div>
  );
}
