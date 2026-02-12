# ProtoLoop Web

Production-ready marketing site for ProtoLoop built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- File-based content model (`src/content/siteContent.ts`)

## Routes

- `/`
- `/studio`
- `/framework`
- `/ventures`
- `/ventures/[slug]`
- `/operators`
- `/labs`
- `/work-with-us`
- `/ivan`
- `/contact`
- `/loop-diagnostic`

## Content Editing

All core copy and structured content live in:

- `src/content/siteContent.ts`

Update this file to edit mission copy, ventures, labs posts, founders, partnership lanes, and speaking topics.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## SEO

Implemented in App Router metadata and route handlers:

- Global metadata + OpenGraph + Twitter cards in `app/layout.tsx`
- Dynamic OG/Twitter images in `app/opengraph-image.tsx` and `app/twitter-image.tsx`
- `app/sitemap.ts`
- `app/robots.ts`

## Contact

`/contact` is email-only for v1.

- Active contact: `KitronFerrier@gmail.com`

## Deploy to Vercel

1. Push repository to GitHub.
2. Import project into Vercel.
3. Build command: `npm run build`
4. Output: default Next.js output.

No external CMS or third-party form dependencies are required for v1.
