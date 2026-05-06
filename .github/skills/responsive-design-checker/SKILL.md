---
name: responsive-design-checker
description: "Validate responsive layout across breakpoints. Use for checking Tailwind breakpoints (sm/md/lg), mobile-first approach, media query consistency, and testing responsive components in the portfolio sections."
argument-hint: "Component name or file to check (e.g., Visual.tsx, MenuBar.tsx)"
---

# Responsive Design Checker

## When to Use
- Adding or modifying portfolio section components
- Checking responsive layout for new portfolio features
- Validating Tailwind utility class usage across sm/md/lg breakpoints
- Ensuring mobile-first design approach is followed
- Testing gallery/carousel responsiveness
- Fixing layout issues on specific viewport sizes

## Tailwind Breakpoints in This Project

The project uses Tailwind's default breakpoints configured via `globals.css` and utility classes:
- `sm:` (640px) - Small phones
- `md:` (768px) - Tablets and large phones
- `lg:` (1024px) - Desktops

## Procedure

### 1. Analyze Component Structure
Review the component for:
- Flex/grid containers with responsive properties
- Conditional rendering for different screen sizes (if used)
- Image/video dimensions with `sm:`, `md:`, `lg:` prefixes
- Gap, padding, and margin utilities with breakpoint variants
- Font sizes and text alignment responsive classes

Example patterns to check:
```tsx
// ✓ Good: Mobile-first with breakpoint overrides
className="flex flex-col md:flex-row gap-4 md:gap-8"

// ✓ Good: Responsive padding
className="px-2 sm:px-4 md:px-8 pt-2 md:pt-4"

// ✗ Bad: Only large breakpoint specified
className="lg:flex" // Missing mobile/tablet versions

// ✗ Bad: Fixed dimensions
className="w-80 h-60" // Not responsive
```

### 2. Check Image & Media Sizing
For gallery/carousel components:
- Next.js `Image` components should use responsive sizing
- Video containers need width/height responsive classes
- Modal overlays should adapt to screen size
- Aspect ratios should be maintained across breakpoints

### 3. Validate Layout Flow
- Verify `flex` direction changes appropriately (column → row on larger screens)
- Check `grid` column count changes (`grid-cols-1 md:grid-cols-2`)
- Ensure max-width containers don't expand excessively on large screens
- Test that text remains readable at all breakpoints

### 4. Test Portfolio Section Pattern
All portfolio sections (Poetry, Visual, Journalism, Sound, BookDesign) follow:
```tsx
<div className="w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-8 pt-2 md:pt-4 pb-6 md:pb-12 flex flex-col md:flex-row gap-12 items-start">
  {/* Content */}
</div>
```

Verify new sections maintain this consistent pattern.

### 5. Check BackArrow Component Responsiveness
BackArrow should:
- Be visible and appropriately sized on all breakpoints
- Have sufficient touch target size on mobile (min 44px)
- Position correctly without overlapping content

### 6. Verify Animation & Transition Responsiveness
CSS animations defined in `globals.css`:
- Fade-in animations should work on all screen sizes
- Carousel transitions should be smooth across breakpoints
- Modal overlays should be fullscreen-responsive

## Validation Checklist

When reviewing a component, verify:

- [ ] Mobile layout defined without `md:` or `lg:` prefixes (mobile-first)
- [ ] Tablet layout specified with `md:` prefixes for changes
- [ ] Desktop layout specified with `lg:` prefixes for changes
- [ ] Images use Next.js `Image` component or `max-w-` responsive classes
- [ ] Text sizes adjust: `text-sm sm:text-base md:text-lg`
- [ ] Spacing uses responsive utilities: `px-2 sm:px-4 md:px-8`
- [ ] Flex containers use `flex-col md:flex-row` pattern
- [ ] Max-width constrained to `max-w-5xl` for portfolio sections
- [ ] Padding/margin consistent with existing sections
- [ ] Modal/overlay full-screen on mobile, centered on desktop
- [ ] Touch targets at least 44px on mobile

## Common Responsive Patterns in This Project

### Portfolio Section Container
```tsx
<div className="w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-8 pt-2 md:pt-4 pb-6 md:pb-12 flex flex-col md:flex-row gap-12 items-start">
```

### Gallery Grid
```tsx
className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
```

### Image with Responsive Width
```tsx
<Image src={...} alt="..." className="w-full h-auto max-w-2xl" />
```

### Text Responsive Sizing
```tsx
className="text-lg md:text-2xl lg:text-3xl"
```

## Related Files
- [globals.css](../../globals.css) - Animation definitions and CSS variables
- [next.config.ts](../../next.config.ts) - Image optimization settings
- [Visual.tsx](../../Visual.tsx) - Example responsive gallery component
- [MenuBar.tsx](../../MenuBar.tsx) - Example responsive navigation

## Quick Debugging

**Layout breaks on mobile**: Check for missing `flex-col` and hardcoded `md:` constraints without mobile base class

**Images overflow container**: Ensure `Image` has `className="w-full h-auto"` and parent has `max-w-` constraint

**Text too large on mobile**: Add `text-sm sm:text-base` to scale down on small screens

**Gap between items too tight**: Use `gap-4 md:gap-8` to increase spacing on larger screens
