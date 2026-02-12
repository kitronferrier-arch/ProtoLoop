"use client";

import { useMemo, useState } from "react";
import { Venture, VentureCategory, VentureStatus } from "@/src/content/siteContent";
import { VentureCard } from "@/src/components/venture-card";

const categories: Array<"All" | VentureCategory> = [
  "All",
  "Infrastructure",
  "Education",
  "Experimental",
  "Operator Development",
];

const statuses: Array<"All" | VentureStatus> = ["All", "Live", "Build", "Research"];

export function VenturesFilter({ ventures }: { ventures: Venture[] }) {
  const [category, setCategory] = useState<"All" | VentureCategory>("All");
  const [status, setStatus] = useState<"All" | VentureStatus>("All");

  const filtered = useMemo(() => {
    return ventures.filter((venture) => {
      const categoryMatch = category === "All" || venture.category === category;
      const statusMatch = status === "All" || venture.status === status;
      return categoryMatch && statusMatch;
    });
  }, [category, status, ventures]);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">Category</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  category === item
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-white/15 text-slate-300 hover:border-white/30"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">Status</p>
          <div className="flex flex-wrap gap-2">
            {statuses.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setStatus(item)}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  status === item
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-white/15 text-slate-300 hover:border-white/30"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((venture) => (
          <VentureCard key={venture.slug} venture={venture} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-slate-400">No ventures match the selected filters.</p>
      ) : null}
    </div>
  );
}
