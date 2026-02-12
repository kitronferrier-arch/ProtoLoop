import { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Card } from "@/src/components/ui/card";
import { getVentureBySlug } from "@/src/content/selectors";
import { siteContent } from "@/src/content/siteContent";
import { seoConfig } from "@/src/content/seo";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildVentureCreativeWorkJsonLd,
} from "@/src/lib/seo";

export async function generateStaticParams() {
  return siteContent.ventures.map((venture) => ({ slug: venture.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);

  if (!venture) {
    return {
      title: "Venture",
      description: seoConfig.defaultDescription,
      alternates: {
        canonical: absoluteUrl("/ventures"),
      },
    };
  }

  const canonicalPath = `/ventures/${venture.slug}`;
  const ogImage = venture.thumbnail ?? seoConfig.defaultOgImage;

  return {
    title: `${venture.name} Venture`,
    description: venture.valueProp,
    alternates: {
      canonical: absoluteUrl(canonicalPath),
    },
    openGraph: {
      title: `${venture.name} | ProtoLoop`,
      description: venture.valueProp,
      url: absoluteUrl(canonicalPath),
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${venture.name} | ProtoLoop`,
      description: venture.valueProp,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function VentureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);

  if (!venture) {
    notFound();
  }

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Ventures", path: "/ventures" },
    { name: venture.name, path: `/ventures/${venture.slug}` },
  ]);
  const ventureJsonLd = buildVentureCreativeWorkJsonLd(venture);

  return (
    <div className="container-shell section-space fade-in space-y-8">
      <Script
        id={`jsonld-venture-breadcrumb-${venture.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id={`jsonld-venture-creativework-${venture.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ventureJsonLd) }}
      />
      <header className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge tone="accent">{venture.status}</Badge>
          <Badge>{venture.category}</Badge>
        </div>
        <h1 className="text-4xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
          {venture.name}
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">{venture.valueProp}</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold text-white">Overview</h2>
          <div className="mt-3 space-y-3 text-sm text-slate-300">
            {venture.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-white">Who it&apos;s for</h2>
          <p className="mt-3 text-sm text-slate-300">{venture.whoItsFor}</p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-white">How it works</h2>
          <p className="mt-3 text-sm text-slate-300">{venture.howItWorks}</p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-white">Current stage</h2>
          <p className="mt-3 text-sm text-slate-300">{venture.currentStage}</p>
          <h3 className="mt-5 text-base font-semibold text-white">Next milestone</h3>
          <p className="mt-2 text-sm text-slate-300">{venture.nextMilestone}</p>
        </Card>
      </div>

      {venture.metric || venture.links?.length ? (
        <Card className="space-y-4">
          {venture.metric ? (
            <div>
              <h2 className="text-lg font-semibold text-white">Metrics</h2>
              <p className="mt-2 text-sm text-slate-300">{venture.metric}</p>
            </div>
          ) : null}
          {venture.links?.length ? (
            <div className="flex flex-wrap gap-3">
              {venture.links.map((link) => (
                <Button key={link.href} href={link.href} variant="secondary">
                  {link.label}
                </Button>
              ))}
            </div>
          ) : null}
        </Card>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <Button href="/ventures" variant="secondary">
          Back to ventures
        </Button>
        <Button href="/work-with-us">Work with us</Button>
        {venture.links?.[0] ? (
          <Button href={venture.links[0].href} variant="secondary">
            Visit
          </Button>
        ) : null}
      </div>
    </div>
  );
}
