import Link from "next/link";
import { siteContent } from "@/src/content/siteContent";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md space-y-2">
          <p className="text-lg font-semibold text-white">{siteContent.brand.name}</p>
          <p className="text-sm text-slate-300">{siteContent.brand.shortMission}</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
          {siteContent.footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
