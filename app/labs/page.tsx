import { Metadata } from "next";
import { Card } from "@/src/components/ui/card";
import { SectionTitle } from "@/src/components/ui/section-title";
import { siteContent } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Labs",
  description: "ProtoLoop experiments feed: bottleneck, hypothesis, results, and next step.",
};

export default function LabsPage() {
  return (
    <div className="container-shell section-space fade-in space-y-8">
      <SectionTitle
        eyebrow="Labs"
        title="Experiment feed"
        description="A running log of bottlenecks, hypotheses, and execution outcomes across the studio."
      />

      <div className="space-y-4">
        {siteContent.labsPosts.map((post) => (
          <Card key={post.title}>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{post.date}</p>
            <h2 className="mt-2 text-xl font-semibold text-white">{post.title}</h2>
            <dl className="mt-4 grid gap-3 text-sm text-slate-300">
              <div>
                <dt className="font-semibold text-slate-100">Bottleneck</dt>
                <dd>{post.bottleneck}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">Hypothesis</dt>
                <dd>{post.hypothesis}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">Current result</dt>
                <dd>{post.currentResult}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">Next step</dt>
                <dd>{post.nextStep}</dd>
              </div>
            </dl>
          </Card>
        ))}
      </div>
    </div>
  );
}
