import { MetadataRoute } from "next";
import { siteContent } from "@/src/content/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://protoloop.net";

  const staticRoutes = [
    "",
    "/studio",
    "/framework",
    "/ventures",
    "/operators",
    "/labs",
    "/work-with-us",
    "/ivan",
    "/contact",
    "/loop-diagnostic",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...siteContent.ventures.map((venture) => ({
      url: `${baseUrl}/ventures/${venture.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
