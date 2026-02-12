import { featuredVentures, siteContent } from "@/src/content/siteContent";

export function getVentureBySlug(slug: string) {
  return siteContent.ventures.find((venture) => venture.slug === slug);
}

export function getFeaturedHomeVentures() {
  const featured = getVentureBySlug(featuredVentures.homeFeatured);
  const build = siteContent.ventures.filter((venture) =>
    featuredVentures.homeBuild.includes(venture.slug),
  );

  return { featured, build };
}
