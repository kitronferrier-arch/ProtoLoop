import { Metadata } from "next";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { SectionTitle } from "@/src/components/ui/section-title";
import { siteContent } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Ivan",
  description: "Ivan profile: speaking, education, rapid prototyping, and consulting.",
};

export default function IvanPage() {
  return (
    <div className="container-shell section-space fade-in space-y-8">
      <SectionTitle
        eyebrow="Ivan"
        title="Creator, educator, and prototype operator"
        description="Ivan leads creation at ProtoLoop through rapid prototyping, communication systems, and practical education design."
      />

      <Card className="max-w-4xl">
        <p className="text-slate-300">
          Ivan works at the intersection of concept and execution. He helps teams move from vague ideas to testable systems, with messaging that drives interaction and outcomes.
        </p>
        <p className="mt-3 text-slate-300">
          His work spans venture prototyping, education design, and strategic communication for founders and operator teams.
        </p>
        <p className="mt-3 text-slate-300">
          Across each format, his focus is clarity: clear offer, clear loop stage, clear next step.
        </p>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold text-white">Topics</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {siteContent.speakingTopics.map((topic) => (
              <li key={topic}>- {topic}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-white">Formats</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {siteContent.ivanFormats.map((format) => (
              <li key={format}>- {format}</li>
            ))}
          </ul>
        </Card>
      </div>

      <Button href="/contact">Book Ivan</Button>
    </div>
  );
}
