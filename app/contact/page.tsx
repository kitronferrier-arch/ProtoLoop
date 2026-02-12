import { Metadata } from "next";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { SectionTitle } from "@/src/components/ui/section-title";
import { siteContent } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact ProtoLoop for partnership and speaking inquiries.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>;
}) {
  const params = await searchParams;
  const sent = params.sent === "1";

  return (
    <div className="container-shell section-space fade-in space-y-8">
      <SectionTitle
        eyebrow="Contact"
        title="Start the conversation"
        description="Share what you are building and where you are blocked. We will respond with next steps if there is fit."
      />

      <Card className="max-w-3xl space-y-4">
        <p className="text-sm text-slate-300">
          Email: <a className="text-[var(--accent)]" href={`mailto:${siteContent.brand.email}`}>{siteContent.brand.email}</a>
        </p>
        <form action="/api/contact" method="post" className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none transition focus:border-[var(--accent)]"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-slate-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none transition focus:border-[var(--accent)]"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none transition focus:border-[var(--accent)]"
            />
          </div>
          <Button type="submit">Send inquiry</Button>
        </form>
        {sent ? <p className="text-sm text-[var(--accent)]">Message received. We will review and reply.</p> : null}
      </Card>
    </div>
  );
}
