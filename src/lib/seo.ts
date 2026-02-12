import { Metadata } from "next";
import { Venture } from "@/src/content/siteContent";
import { seoConfig } from "@/src/content/seo";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${seoConfig.siteUrl}${normalizedPath}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: seoConfig.siteName,
      type: "website",
      images: [
        {
          url: seoConfig.defaultOgImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [seoConfig.defaultOgImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: absoluteUrl("/brand/logo-transparent-2026.png"),
    sameAs: [],
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildVentureCreativeWorkJsonLd(venture: Venture) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: venture.name,
    description: venture.valueProp,
    url: absoluteUrl(`/ventures/${venture.slug}`),
    creator: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
    },
    about: venture.category,
    genre: venture.status,
  };
}
