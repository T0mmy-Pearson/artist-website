# Responsive Breakpoint Reference

## Tailwind Breakpoints
| Breakpoint | px | Use Case |
|------------|----|----|
| Base | 0–639px | Mobile phones (default) |
| `sm:` | 640px+ | Small phones & large phones |
| `md:` | 768px+ | Tablets & iPad |
| `lg:` | 1024px+ | Desktops & large screens |

## Mobile-First Pattern
Apply base styles first (no prefix), then override with breakpoint prefixes:

```tsx
// ✓ Correct mobile-first approach
className="flex flex-col md:flex-row gap-4 md:gap-8 px-2 sm:px-4 md:px-8"

// Breakdown:
// Mobile (0-639px):    flex-col, gap-4, px-2
// Tablet (768px+):     flex-row, gap-8, px-4
// Desktop (1024px+):   flex-row, gap-8, px-8
```

## Common Responsive Classes

### Layout
| Use | Mobile | Tablet | Desktop |
|-----|--------|--------|---------|
| Direction | `flex-col` | `md:flex-row` | (inherits md:) |
| Grid | `grid-cols-1` | `md:grid-cols-2` | `lg:grid-cols-3` |
| Gap | `gap-4` | `md:gap-6` | `lg:gap-8` |
| Width | `w-full` | — | `max-w-5xl` |

### Spacing
| Use | Mobile | Tablet | Desktop |
|-----|--------|--------|---------|
| Padding X | `px-2` | `sm:px-4` | `md:px-8` |
| Padding Y | `py-2` | `md:py-4` | `lg:py-6` |
| Margin | `m-2` | `sm:m-4` | `md:m-6` |
| Gap | `gap-4` | `md:gap-8` | — |

### Typography
| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Text Size | `text-sm` | `text-base` | `md:text-lg` |
| Line Height | `leading-6` | `md:leading-7` | — |
| Font Weight | — | `md:font-semibold` | — |

## Project Patterns

### Standard Portfolio Section Container
```tsx
<div className="w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-8 pt-2 md:pt-4 pb-6 md:pb-12 flex flex-col md:flex-row gap-12 items-start">
```

### Image/Gallery
```tsx
<Image src={...} alt="..." className="w-full h-auto max-w-2xl" />
```

### Modal Overlay
```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
  <div className="relative bg-black rounded-lg p-4 max-w-2xl w-full">
```

### Navigation/Menu
```tsx
className="flex flex-col md:flex-row gap-4 md:gap-8"
```

## Quick Validation

1. **Does mobile layout exist?** Base classes without `md:`/`lg:` prefixes
2. **Are breakpoints consistent?** Use `sm:` for 640px, `md:` for 768px, `lg:` for 1024px
3. **Mobile-first applied?** Override with `md:`, `lg:`, not create new with `sm:`
4. **Touch targets ≥44px?** Buttons and interactive elements on mobile
5. **Images responsive?** `w-full h-auto max-w-*` or Next.js Image with responsive sizes
6. **No hardcoded widths?** Avoid `w-80`, `w-full` unless constrained
7. **Spacing scales?** Padding/gaps increase on larger screens
8. **Flex direction changes?** `flex-col` → `md:flex-row` as screen grows
