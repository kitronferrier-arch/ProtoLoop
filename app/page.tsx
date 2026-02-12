import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { SectionTitle } from "@/src/components/ui/section-title";
import { LoopSteps } from "@/src/components/loop-steps";
import { VentureCard } from "@/src/components/venture-card";
import { getFeaturedHomeVentures } from "@/src/content/selectors";
import { siteContent } from "@/src/content/siteContent";
import { pageSeo } from "@/src/content/seo";
import { buildPageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.home);

export default function HomePage() {
  const { featured, build } = getFeaturedHomeVentures();
  const labsHighlight = siteContent.labsPosts[0];

  return (
    <div className="fade-in">
      <section className="section-space container-shell">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Venture Systems Studio</p>
          <h1
            className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ProtoLoop
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">{siteContent.brand.shortMission}</p>
          <p className="mt-2 max-w-3xl text-lg text-slate-300">{siteContent.brand.mission}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/work-with-us">Work with us</Button>
            <Button href="/ventures" variant="secondary">
              Explore ventures
            </Button>
          </div>
        </div>
      </section>

      <section className="section-space section-divider container-shell">
        <SectionTitle
          eyebrow="What We Build"
          title="Structured ventures, systems, and operator growth"
          description="Each initiative is designed for clarity, accountability, and compounding momentum."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {siteContent.whatWeBuild.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-space section-divider container-shell">
        <SectionTitle
          eyebrow="Loop Framework"
          title="The studio spine: Attention -> Interaction -> Conversion"
          description="A simple loop system that keeps ventures focused on outcomes and measurable progression."
        />
        <div className="mt-8 space-y-4">
          <LoopSteps />
          <Button href="/framework" variant="secondary">
            Explore framework
          </Button>
        </div>
      </section>

      <section className="section-space section-divider container-shell">
        <SectionTitle
          eyebrow="Featured Portfolio"
          title="Focused portfolio, unified operating standard"
          description="Home view is curated for clarity. The full catalog lives on the ventures page."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {featured ? <VentureCard venture={featured} /> : null}
          <div className="grid gap-4">
            {build.map((venture) => (
              <VentureCard key={venture.slug} venture={venture} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-divider container-shell">
        <SectionTitle eyebrow="Labs" title="In motion, not static" />
        <Card className="mt-8 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{labsHighlight.date}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{labsHighlight.title}</h3>
          <p className="mt-4 text-sm text-slate-300">Bottleneck: {labsHighlight.bottleneck}</p>
          <Button href="/labs" variant="secondary" className="mt-6">
            View labs feed
          </Button>
        </Card>
      </section>

      <section className="section-space section-divider container-shell">
        <SectionTitle
          eyebrow="Founder Duo"
          title="Role clarity at leadership level"
          description={siteContent.founders.shared}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold text-white">Ivan, Creator</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {siteContent.founders.ivan.callings.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-white">Kitron, Architect</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {siteContent.founders.kitron.callings.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="mt-6">
          <Button href="/operators" variant="secondary">
            Meet the operators
          </Button>
        </div>
      </section>

      <section className="section-space section-divider container-shell">
        <SectionTitle
          eyebrow="Explore"
          title="Key studio pages"
          description="Use these pages to review the studio model, venture catalog, and partnership lanes."
        />
        <nav aria-label="Key internal links" className="mt-6 flex flex-wrap gap-5 text-sm text-slate-300">
          <Link className="hover:text-[var(--accent)]" href="/studio">
            What is ProtoLoop
          </Link>
          <Link className="hover:text-[var(--accent)]" href="/framework">
            Loop Framework
          </Link>
          <Link className="hover:text-[var(--accent)]" href="/ventures">
            Venture catalog
          </Link>
          <Link className="hover:text-[var(--accent)]" href="/work-with-us">
            Partnership lanes
          </Link>
        </nav>
      </section>
    </div>
  );
}
