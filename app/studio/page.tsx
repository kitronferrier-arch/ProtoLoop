import { Metadata } from "next";
import { SectionTitle } from "@/src/components/ui/section-title";
import { Card } from "@/src/components/ui/card";
import { siteContent } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Studio",
  description: "What ProtoLoop is and how structured loops guide venture creation.",
};

export default function StudioPage() {
  return (
    <div className="container-shell section-space fade-in space-y-10">
      <SectionTitle
        eyebrow="Studio"
        title="ProtoLoop is a Venture Systems Studio"
        description="We design and launch ventures through structured feedback loops so teams can move with precision and compounding momentum."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <h3 className="text-lg font-semibold text-white">Design</h3>
          <p className="mt-2 text-sm text-slate-300">
            We define venture theses, market signals, and operating constraints before build cycles begin.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold text-white">Launch</h3>
          <p className="mt-2 text-sm text-slate-300">
            Ventures progress through staged pilots with measured attention, interaction, and conversion goals.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold text-white">Scale</h3>
          <p className="mt-2 text-sm text-slate-300">
            We standardize repeatable systems so growth can happen without losing execution discipline.
          </p>
        </Card>
      </div>

      <Card className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Deeper principle</p>
        <p className="mt-3 text-slate-200">{siteContent.brand.deeperNote}</p>
      </Card>
    </div>
  );
}
