import Link from "next/link";
import { Venture } from "@/src/content/siteContent";
import { Badge } from "@/src/components/ui/badge";
import { Card } from "@/src/components/ui/card";

export function VentureCard({ venture }: { venture: Venture }) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="accent">{venture.status}</Badge>
        <Badge>{venture.category}</Badge>
      </div>
      <h3 className="text-xl font-semibold text-white">{venture.name}</h3>
      <p className="text-sm text-slate-300">{venture.valueProp}</p>
      <div className="mt-auto pt-2">
        <Link
          href={`/ventures/${venture.slug}`}
          className="text-sm font-medium text-[var(--accent)] transition hover:text-[var(--accent-strong)]"
        >
          View details
        </Link>
      </div>
    </Card>
  );
}
