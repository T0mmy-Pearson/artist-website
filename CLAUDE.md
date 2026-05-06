# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server with Turbopack at localhost:3000
npm run build    # Production build
npm run start    # Production server
npm run lint     # Next.js / TypeScript ESLint (next/core-web-vitals + next/typescript)
```

There is no test runner configured.

## Architecture

Single-page Next.js 15 App Router portfolio for T. Person. The entire UI is driven by one piece of state — `selected: string | null` in [app/page.tsx](app/page.tsx) — which controls whether the radial menu or a portfolio section is visible.

**Render flow ([app/page.tsx](app/page.tsx)):**
- `Sun3D` (Three.js scene) is always mounted as a background. When a section is selected it animates to opacity 60 and `pointer-events: none`; when nothing is selected it fills the hero region.
- `MenuBar` renders only when `selected === null`. It lays section labels around a rotating circle and uses counter-rotation on each label so text stays upright.
- When `selected` is set, `page.tsx` switches on the string and renders one of `Poetry | Visual | Journalism | Sound | BookDesign`, wrapped in `FadeInPanel`. Each section receives `setSelected` so it can call `setSelected(null)` (via `BackArrow`) to return to the menu.

**Section component contract:** every portfolio section is a `"use client"` default export with the signature `({ setSelected }: { setSelected?: (val: string | null) => void })`, includes a `BackArrow` wired to `() => setSelected?.(null)`, and lives at `app/<Section>.tsx` (flat — there is no `components/` directory). To add a section: create the file, add an entry to the `menuItems` array in [app/MenuBar.tsx](app/MenuBar.tsx), and add a `case` to the switch in [app/page.tsx](app/page.tsx).

**Bio / contact overlay:** `MenuBar` owns the contact popover internally; the bio overlay is owned by `page.tsx` and toggled via the `setShowBioOverlay` prop passed into `MenuBar`.

## Conventions and gotchas

- **`public/imagees/` is intentionally misspelled** — every image path in the codebase references `/imagees/...`. Do not rename it.
- **Path alias `@/*`** maps to the project root (see [tsconfig.json](tsconfig.json)).
- **TypeScript strict mode** is on; all props must be typed.
- **Styling** is Tailwind v4 (via `@tailwindcss/postcss`). Animations like `fadeInPanel` are defined in [app/globals.css](app/globals.css), not as Tailwind utilities.
- **`optimizeCss: true`** is enabled in [next.config.ts](next.config.ts), which is why `critters` is a runtime dependency — required for the production build to succeed.
- **Font:** `Space_Grotesk` via `next/font/google` in [app/layout.tsx](app/layout.tsx), exposed as the `--font-space-grotesk` CSS variable.
