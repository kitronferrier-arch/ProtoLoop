import { Metadata } from "next";
import { Card } from "@/src/components/ui/card";
import { SectionTitle } from "@/src/components/ui/section-title";
import { siteContent } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact ProtoLoop for partnership and speaking inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container-shell section-space fade-in space-y-8">
      <SectionTitle
        eyebrow="Contact"
        title="Start the conversation"
        description="Share what you are building and where you are blocked. We will respond with next steps if there is fit."
      />

      <Card className="max-w-3xl space-y-4">
        <p className="text-sm text-slate-300">
          For all partnership, speaking, and studio inquiries:
        </p>
        <p className="text-sm text-slate-300">
          <a className="text-[var(--accent)] underline underline-offset-4" href={`mailto:${siteContent.brand.email}`}>
            {siteContent.brand.email}
          </a>
        </p>
        <p className="text-sm text-slate-400">
          Email is the only active contact channel on this site right now.
        </p>
      </Card>
    </div>
  );
}
