import { Metadata } from "next";
import { SectionTitle } from "@/src/components/ui/section-title";
import { VenturesFilter } from "@/src/components/ventures-filter";
import { siteContent } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Ventures",
  description: "Curated ProtoLoop portfolio across infrastructure, education, and operator development.",
};

export default function VenturesPage() {
  return (
    <div className="container-shell section-space fade-in space-y-8">
      <SectionTitle
        eyebrow="Portfolio"
        title="Curated venture catalog"
        description="Each venture is built through the same loop system while serving distinct market roles."
      />
      <VenturesFilter ventures={siteContent.ventures} />
    </div>
  );
}
