import { Metadata } from "next";
import { Card } from "@/src/components/ui/card";
import { SectionTitle } from "@/src/components/ui/section-title";
import { siteContent } from "@/src/content/siteContent";
import { pageSeo } from "@/src/content/seo";
import { buildPageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.operators);

export default function OperatorsPage() {
  const { founders } = siteContent;

  return (
    <div className="container-shell section-space fade-in space-y-8">
      <SectionTitle
        as="h1"
        eyebrow="Operators"
        title="ProtoLoop operates on role clarity"
        description="Ivan leads creation: prototyping, storytelling, education, and connection. Kitron leads architecture: systems, operations, distribution, and team execution."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold text-white">Ivan, Creator</h2>
          <p className="mt-3 text-sm text-slate-300">{founders.ivan.summary}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {founders.ivan.strengths.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold text-white">Kitron, Architect</h2>
          <p className="mt-3 text-sm text-slate-300">{founders.kitron.summary}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {founders.kitron.strengths.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="max-w-4xl">
        <p className="text-sm text-slate-300">{founders.shared}</p>
      </Card>

      <Card className="max-w-4xl">
        <h3 className="text-lg font-semibold text-white">Operator development</h3>
        <p className="mt-3 text-sm text-slate-300">
          ProtoLoop develops operators through structured execution systems, loop diagnostics, and mentorship.
          The objective is reliable leadership capacity, not short-term task throughput.
        </p>
      </Card>
    </div>
  );
}
