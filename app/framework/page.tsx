import { Metadata } from "next";
import { LoopSteps } from "@/src/components/loop-steps";
import { Card } from "@/src/components/ui/card";
import { SectionTitle } from "@/src/components/ui/section-title";
import { siteContent } from "@/src/content/siteContent";
import { pageSeo } from "@/src/content/seo";
import { buildPageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.framework);

export default function FrameworkPage() {
  return (
    <div className="container-shell section-space fade-in space-y-10">
      <SectionTitle
        as="h1"
        eyebrow="Loop Framework"
        title="Attention -> Interaction -> Conversion"
        description="ProtoLoop uses one operating loop across every venture so momentum compounds instead of fragmenting."
      />
      <LoopSteps />
      <Card>
        <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Compounding loop</p>
        <p className="mt-3 text-lg text-white">{siteContent.framework.loopStatement}</p>
      </Card>
    </div>
  );
}
