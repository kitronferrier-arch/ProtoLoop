import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/src/components/site-header";
import { SiteFooter } from "@/src/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://protoloop.studio"),
  title: {
    default: "ProtoLoop | Venture Systems Studio",
    template: "%s | ProtoLoop",
  },
  description:
    "ProtoLoop is a Venture Systems Studio. We design and launch ventures through structured feedback loops.",
  openGraph: {
    title: "ProtoLoop | Venture Systems Studio",
    description:
      "We build operators, infrastructure, and compounding momentum through the Loop Framework.",
    url: "https://protoloop.studio",
    siteName: "ProtoLoop",
    type: "website",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProtoLoop | Venture Systems Studio",
    description:
      "Structured vision for ventures: Attention, Interaction, Conversion.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
