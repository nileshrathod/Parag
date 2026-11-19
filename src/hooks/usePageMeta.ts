import {useEffect} from 'react';
import {siteConfig} from '../config/siteConfig';

interface PageMetaOptions {
  title: string;
  description: string;
}

function upsertMetaTag(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export function usePageMeta({title, description}: PageMetaOptions) {
  useEffect(() => {
    const fullTitle = title.includes(siteConfig.seo.titleSuffix)
      ? title
      : `${title} | ${siteConfig.seo.titleSuffix}`;

    document.title = fullTitle;
    upsertMetaTag('name', 'description', description);
    upsertMetaTag('property', 'og:title', fullTitle);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('name', 'twitter:title', fullTitle);
    upsertMetaTag('name', 'twitter:description', description);

    if (typeof window !== 'undefined') {
      const canonicalUrl = window.location.origin + window.location.pathname;
      upsertMetaTag('property', 'og:url', canonicalUrl);

      let canonicalLink = document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]',
      );
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }
  }, [title, description]);
}
