import { siteContent } from "@/src/content/siteContent";
import { Card } from "@/src/components/ui/card";

export function LoopSteps() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {siteContent.framework.stages.map((stage, idx) => (
        <Card key={stage.name} className="relative overflow-hidden">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Step {idx + 1}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{stage.name}</h3>
          <p className="mt-2 text-sm text-slate-300">{stage.description}</p>
        </Card>
      ))}
    </div>
  );
}
