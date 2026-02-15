# ProtoLoop Web — AI Agent Instructions

## Project Overview

**ProtoLoop Web** is a Next.js 16 marketing site for ProtoLoop (a Venture Systems Studio). The entire site is content-driven from a single source-of-truth TypeScript file, with no external CMS.

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Language**: TypeScript 5
- **Content Model**: File-based (`src/content/siteContent.ts`)

## Architecture

### Content-First Design

**All copy and structured data live in `src/content/siteContent.ts`** — this is the single source-of-truth:
- Brand messaging (`brand.name`, `brand.mission`, `brand.email`)
- Navigation structure (`navigation`, `footerLinks`)
- Venture definitions (type: `Venture[]` with slug, category, status, value prop, description)
- Labs posts (research findings)
- Founder bios
- Framework stages (Attention → Interaction → Conversion)

**Selectors** in `src/content/selectors.ts` query this data (e.g., `getVentureBySlug()`, `getFeaturedHomeVentures()`).

**Pattern**: Never hardcode copy in components. Always fetch from `siteContent` through selectors.

### SEO & Metadata Architecture

- **Config**: `src/content/seo.ts` defines `seoConfig` (site URL, defaults) and `pageSeo` (per-route metadata)
- **Builders**: `src/lib/seo.ts` exports functions: `buildPageMetadata()`, `buildOrganizationJsonLd()`, `buildBreadcrumbJsonLd()`, `buildVentureCreativeWorkJsonLd()`
- **Implementation**: All routes use `buildPageMetadata(pageSeo.routeName)` and export it as `export const metadata`
- **Dynamic routes**: Ventures use `generateMetadata()` and `generateStaticParams()` for static generation + dynamic OG images

**Pattern**: Every public page exports static `metadata` via the builder pattern. Venture detail pages are statically generated.

### Component Library

Reusable components in `src/components/`:
- **Layout**: `SiteHeader`, `SiteFooter`
- **Display**: `VentureCard`, `LoopSteps`, `SectionTitle`
- **UI**: Button, Card, Badge (in `ui/` subdirectory)
- **Filtering**: `VenturesFilter` (interactive venture filtering)

**Pattern**: Prefer existing UI components over custom styled divs. Keep components pure and pass data as props from pages.

## Routing & Page Structure

Next.js App Router structure maps to routes:
- `/app/page.tsx` → home, features hero, venture previews, labs highlight
- `/app/ventures/page.tsx` → venture grid with filtering
- `/app/ventures/[slug]/page.tsx` → venture detail with JSON-LD schema
- `/app/framework/page.tsx` → Attention/Interaction/Conversion loop explanation
- `/app/studio/page.tsx` → about ProtoLoop approach
- `/app/labs/page.tsx` → research posts feed
- `/app/operators/page.tsx` → role clarity (Ivan, Kitron)
- `/app/api/contact/route.ts` → contact form handler (email-only for v1)
- Static assets: `opengraph-image.tsx`, `twitter-image.tsx`, `sitemap.ts`, `robots.ts`

**Pattern**: Add new pages as folders with `page.tsx`. Always include metadata export.

## Development Workflows

### Build & Run
```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build with webpack
npm run start      # Run production server
```

### Quality Checks
```bash
npm run lint       # ESLint (Next.js + TypeScript rules)
npm run typecheck  # Full TypeScript check (finds unused imports, type errors)
npm run build      # Catches build-time issues
```

**Workflow**: Always run `typecheck` after edits. Check `lint` before committing.

## Key Conventions

1. **Venture Frontmatter**: Ventures are typed as `Venture` interface (slug, category: Infrastructure|Education|Experimental|Operator Development, status: Production|Build|Research)
2. **Tailwind Organization**: Use Tailwind utilities directly; custom CSS in `app/globals.css` for brand variables (`--font-display`, `--accent`)
3. **Path Aliases**: Use `@/src` prefix (configured in `tsconfig.json`) for all imports from `src/`
4. **Component Naming**: PascalCase, component files match exports (e.g., `venture-card.tsx` exports `VentureCard`)
5. **Metadata Pattern**: Never hardcode `<title>` or `<meta>` tags; use Next.js `Metadata` export + builders

## Common Tasks

### Add a New Venture
1. Add entry to `siteContent.ventures[]` in `src/content/siteContent.ts` with required fields (name, slug, category, status, valueProp, etc.)
2. If featured on homepage, add slug to `featuredVentures` object
3. Dynamic detail page auto-generates via `[slug]/page.tsx` (no file creation needed)

### Update Copy
Edit `src/content/siteContent.ts` directly. Components reference it via selectors. Changes live after rebuild.

### Modify SEO for a Route
1. Edit route entry in `pageSeo` object in `src/content/seo.ts`
2. In the page file (e.g., `app/studio/page.tsx`), import and use: `export const metadata = buildPageMetadata(pageSeo.studio)`

### Add a New Page
1. Create folder: `app/new-page/`
2. Add `page.tsx` with:
   - Import metadata builder and import/add entry to `pageSeo`
   - `export const metadata = buildPageMetadata(pageSeo.newPage)`
   - Default export component
3. Add navigation entry to `siteContent.navigation` if it should appear in header

## External Dependencies & Integrations

- **Vercel**: Deployed via Vercel. No custom server config needed.
- **Contact**: v1 is email-only (active: `kitron@protoloop.net`). Form validation and email logic in `/app/api/contact/route.ts`
- **No CMS, No Databases**: All content is committed to git in TypeScript
- **Images**: Static OG/Twitter images generated via `opengraph-image.tsx` and `twitter-image.tsx`

## File Organization Rules

```
app/                    → Next.js App Router (pages, layouts, API routes)
src/
  components/           → Reusable React components
    ui/                 → Primitive UI components (Button, Card, Badge)
  content/
    siteContent.ts      → SINGLE SOURCE-OF-TRUTH for all copy/data
    seo.ts              → SEO config & per-route metadata definitions
    selectors.ts        → Query functions to fetch from siteContent
  lib/
    seo.ts              → Metadata builders (buildPageMetadata, buildJsonLd, etc.)
public/                 → Static assets (favicons, images, manifest)
```

**Rule**: If it's content (copy, ventures, posts), it goes in `src/content/`. If it's infrastructure (components, utilities, builders), it goes in `src/` subdirectories.

## Quick Debugging

| Symptom | Check |
| --- | --- |
| TypeScript errors in page | Ensure metadata is exported correctly; check `src/content/seo.ts` has entry for the route |
| Venture not appearing | Verify slug in `siteContent.ventures` matches `[slug]` folder name; check selector query |
| Build fails | Run `npm run typecheck` to find type errors; check imports use `@/src` prefix |
| Styling looks off | Verify Tailwind classes; check custom CSS in `app/globals.css` for brand variable values |

---

**Last Updated**: February 2026  
**Maintainer**: ProtoLoop web team
