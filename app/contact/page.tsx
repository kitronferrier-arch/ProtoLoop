import { Metadata } from "next";
import { Card } from "@/src/components/ui/card";
import { SectionTitle } from "@/src/components/ui/section-title";
import { siteContent } from "@/src/content/siteContent";
import { pageSeo } from "@/src/content/seo";
import { buildPageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildPageMetadata(pageSeo.contact);

export default function ContactPage() {
  return (
    <div className="container-shell section-space fade-in space-y-8">
      <SectionTitle
        as="h1"
        eyebrow="Contact"
        title="Start the conversation"
        description="Share what you are building and where you are blocked. We will respond with next steps if there is fit."
      />

      <Card className="max-w-3xl space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-200">
            For all partnership, speaking, and studio inquiries:
          </p>
          <a 
            className="inline-flex items-center px-4 py-2.5 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors font-semibold" 
            href={`mailto:${siteContent.brand.email}`}
          >
            {siteContent.brand.email}
          </a>
        </div>
        
        <div className="pt-4 border-t border-slate-700">
          <p className="text-xs text-slate-400">
            Email is the only active contact channel on this site right now. We typically respond within 24-48 hours.
          </p>
        </div>
      </Card>
    </div>
  );
}
