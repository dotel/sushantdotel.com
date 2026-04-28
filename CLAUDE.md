# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — `next lint` (extends `next/core-web-vitals`; `no-unused-vars` is a warning)

There is no test runner configured.

## Stack

Next.js 13 App Router, React 18, plain JavaScript (no TypeScript). Path alias `@/*` → `./src/*` is set in `jsconfig.json`.

## Architecture

### Blog content pipeline
Blog posts are MDX files in `/content/<slug>.mdx`, read at request time:

- `src/helpers/file-helpers.js` reads `/content` from `process.cwd()` directly via `fs/promises`. Because of this, `next.config.js` sets `experimental.outputFileTracingIncludes['/*'] = ['./content/**/*']` so the `content/` directory is bundled into the serverless output. **Don't move `content/` or rename this glob without updating both files.**
- Frontmatter (parsed with `gray-matter`) drives the homepage list, tag filtering, and metadata. Required fields per post: `title`, `abstract`, `publishedOn` (ISO string used for sort + RSS dates), and optional `tags` (array).
- The dynamic route `src/app/[postSlug]/page.js` renders posts with `next-mdx-remote/rsc`. The MDX pipeline injects:
  - `pre` → `CodeSnippet` (uses `bright` for syntax highlighting; theme in `src/components/CodeSnippet/theme.js`)
  - `Aside` → callout component (importable directly in MDX, no import needed)
  - `img` → wrapped in `next/image` (defaults to 1200×675; pass explicit `width`/`height` in MDX to override)
  - `remark-math` + `rehype-katex` for math; KaTeX CSS is imported globally in `layout.js`.
- `src/app/feed.xml/route.js` is a Route Handler that builds the RSS feed from the same `getBlogPostList()` helper and is cached for 1 hour.

### Theming
- Theme tokens (CSS custom properties) live in `src/constants.js` as `LIGHT_TOKENS` / `DARK_TOKENS` and are applied as inline styles on `<html>` in `src/app/layout.js`.
- Light theme is currently disabled — `RootLayout` hard-codes `theme = 'dark'` and `LIGHT_THEME_ENABLED = false`. The `DarkLightToggle` component and `js-cookie` plumbing exist but are inert until the layout is changed back to read the cookie.
- `SITE_URL` defaults to `https://sushantdotel.com` and can be overridden with `NEXT_PUBLIC_SITE_URL` (used in `<head>` RSS link and the feed itself).

### Component conventions
Components live in `src/components/<Name>/` with component code, CSS modules, and an optional `index.js` barrel. Import via `@/components/<Name>`.
