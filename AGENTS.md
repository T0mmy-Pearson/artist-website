# AI Coding Agent Instructions for Artist Website

## Project Overview
This is a Next.js 15 portfolio website showcasing various artistic mediums (Poetry, Visual, Journalism, Sound, Book Design). The project emphasizes interactive UI, animations, and responsive design.

**Tech Stack:**
- Next.js 15 (App Router) with TypeScript
- React 19 with Tailwind CSS
- Three.js for 3D graphics
- ESLint with Next.js/TypeScript rules

## Development Commands
```bash
npm run dev          # Start dev server with Turbopack (localhost:3000)
npm run build        # Build for production
npm run start        # Run production server
npm run lint         # Run ESLint
```

## Project Structure & Patterns

### Portfolio Sections
Each portfolio section (Poetry, Visual, Journalism, Sound, BookDesign) follows a similar pattern:
- Default export component that accepts `setSelected?: (val: string | null) => void`
- Contains galleries, carousels, or media viewers
- Includes BackArrow component for navigation
- Uses FadeInPanel for entrance animations

**Example pattern for new sections:**
```tsx
"use client";
import BackArrow from './BackArrow';

export default function SectionName({ setSelected }: { setSelected?: (val: string | null) => void }) {
  // Component logic
}
```

### UI & Animation Conventions
- **State Management**: React hooks (useState, useEffect, useRef) for interactive components
- **Styling**: Tailwind CSS with responsive breakpoints (sm:, md:, lg:)
- **Animations**: CSS animations defined in globals.css (e.g., `fadeInPanel`)
- **Responsive Layout**: Flex containers with mobile-first approach
- **Client Components**: Use `"use client"` directive for interactivity

### Navigation & State
- MenuBar component manages main navigation and selected portfolio item
- Menu closes on outside click using ref and event listeners
- Bio overlay and contact menu controlled through state props

### Image & Media Handling
- Images stored in `public/imagees/` (note: typo in folder name, maintain consistency)
- Use Next.js Image component for optimization
- Video files supported in galleries with custom modal overlays
- Image paths referenced as `/imagees/[section]/[filename]`

## Key Files & Responsibilities
- **app/page.tsx**: Main entry point, portfolio navigation and layout
- **app/layout.tsx**: Root layout with metadata and Space Grotesk font
- **app/MenuBar.tsx**: Primary navigation component with hover states
- **app/globals.css**: Global styles, animations, and CSS variables
- **next.config.ts**: Image optimization and experimental features
- **eslint.config.mjs**: ESLint configuration extending Next.js/TypeScript presets

## Common Tasks

### Adding a New Portfolio Section
1. Create new .tsx component in app/ directory
2. Follow the pattern from existing sections (Poetry.tsx, Visual.tsx, etc.)
3. Add menu item to MenuBar.tsx menuItems array
4. Import section component in page.tsx
5. Add condition to render section when selected

### Adding Images/Videos
1. Place assets in `public/imagees/[SectionName]/`
2. Reference as `/imagees/SectionName/filename.ext`
3. Wrap video modals with FadeInPanel component

### Styling New Components
- Use Tailwind utility classes; avoid custom CSS unless necessary
- Define animations in globals.css with kebab-case names
- Test responsive design across sm, md, lg breakpoints

## Important Notes
- **Path alias**: Use `@/*` for absolute imports (configured in tsconfig.json)
- **TypeScript strict mode**: Enabled; all props and state must be typed
- **React/Next.js version**: React 19.1.0, Next 15.5.3 (latest versions)
- **Unused component**: Sun3D is positioned off-screen in page.tsx (intentional)
- **Folder naming**: "imagees" folder has a typo but should be maintained for consistency with current image paths

## Performance Considerations
- Turbopack enabled in dev for faster builds
- CSS optimization enabled in next.config.ts
- Next.js Image component used for automatic format conversion (WebP)
- 3D graphics (Sun3D) rendered off-screen and may need performance monitoring

## Code Style
- Functional components with hooks (no class components)
- Explicit type annotations for component props using TypeScript interfaces
- ESLint enforces Next.js core-web-vitals and TypeScript best practices
- Prefer const over let/var
