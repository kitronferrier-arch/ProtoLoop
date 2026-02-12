import { Metadata } from "next";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { SectionTitle } from "@/src/components/ui/section-title";
import { pageSeo } from "@/src/content/seo";
import { buildPageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.loopDiagnostic);

export default function LoopDiagnosticPage() {
  return (
    <div className="container-shell section-space fade-in space-y-8">
      <SectionTitle
        as="h1"
        eyebrow="Coming soon"
        title="Loop Diagnostic"
        description="An interactive diagnostic tool that identifies where your growth loop is constrained: Attention, Interaction, or Conversion."
      />

      <Card className="max-w-3xl">
        <p className="text-sm text-slate-300">
          We are preparing a guided experience that scores loop health and recommends the highest leverage next action.
        </p>
        <Button href="/contact" variant="secondary" className="mt-5">
          Join updates
        </Button>
      </Card>
    </div>
  );
}
