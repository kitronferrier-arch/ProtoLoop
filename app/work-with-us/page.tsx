import { Metadata } from "next";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { SectionTitle } from "@/src/components/ui/section-title";
import { siteContent } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Work with us",
  description: "Partnership lanes at ProtoLoop for venture partners and systems partners.",
};

export default function WorkWithUsPage() {
  return (
    <div className="container-shell section-space fade-in space-y-8">
      <SectionTitle
        eyebrow="Partnership"
        title="Work with ProtoLoop"
        description={siteContent.partnershipModel}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {siteContent.workWithUsLanes.map((lane) => (
          <Card key={lane.title}>
            <h2 className="text-xl font-semibold text-white">{lane.title}</h2>
            <dl className="mt-4 space-y-3 text-sm text-slate-300">
              <div>
                <dt className="font-semibold text-slate-100">Who it&apos;s for</dt>
                <dd>{lane.whoItsFor}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">What we do</dt>
                <dd>{lane.whatWeDo}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">How we work</dt>
                <dd>{lane.howWeWork}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-100">Good fit</dt>
                <dd>{lane.goodFit}</dd>
              </div>
            </dl>
          </Card>
        ))}
      </div>

      <Card className="max-w-3xl">
        <h3 className="text-lg font-semibold text-white">Apply</h3>
        <p className="mt-2 text-sm text-slate-300">
          Share your context and goals. We review every inquiry for fit, timing, and execution readiness.
        </p>
        <Button href="/contact" className="mt-5">
          Start an application
        </Button>
      </Card>
    </div>
  );
}
