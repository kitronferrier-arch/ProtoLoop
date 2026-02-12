import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/src/components/site-header";
import { SiteFooter } from "@/src/components/site-footer";
import { seoConfig } from "@/src/content/seo";
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from "@/src/lib/seo";

export const metadataBase = new URL(seoConfig.siteUrl);
export const metadata: Metadata = {
  metadataBase,
  title: {
    default: seoConfig.defaultTitle,
    template: "%s | ProtoLoop",
  },
  description: seoConfig.defaultDescription,
  alternates: {
    canonical: seoConfig.siteUrl,
  },
  openGraph: {
    title: "ProtoLoop",
    description: "A Venture Systems Studio",
    url: seoConfig.siteUrl,
    siteName: "ProtoLoop",
    locale: "en_US",
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
    title: "ProtoLoop — Venture Systems Studio",
    description: "A Venture Systems Studio",
    images: [seoConfig.defaultOgImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080b12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = buildOrganizationJsonLd();
  const websiteJsonLd = buildWebsiteJsonLd();

  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="jsonld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
