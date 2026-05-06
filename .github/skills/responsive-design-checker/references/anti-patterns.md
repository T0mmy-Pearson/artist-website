# Responsive Design Anti-Patterns & Debugging

## Common Mistakes

### ❌ Anti-Pattern: Desktop-first approach
```tsx
// Bad: Starts with lg:, forgets mobile
className="lg:flex-row gap-lg:8"

// Good: Mobile-first
className="flex flex-col md:flex-row gap-4 md:gap-8"
```

### ❌ Anti-Pattern: Hardcoded dimensions
```tsx
// Bad: Fixed sizes
<div className="w-80 h-60 overflow-auto">

// Good: Responsive
<div className="w-full max-w-2xl h-auto">
```

### ❌ Anti-Pattern: Only large breakpoint specified
```tsx
// Bad: No mobile/tablet styles
className="lg:flex lg:gap-8 lg:px-8"

// Good: All breakpoints covered
className="flex flex-col gap-4 px-2 sm:px-4 md:flex-row md:gap-8 md:px-8"
```

### ❌ Anti-Pattern: Too many breakpoint overrides
```tsx
// Bad: Verbose and hard to maintain
className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4 sm:gap-4 md:gap-8 lg:gap-8"

// Good: Clean inheritance
className="flex flex-col md:flex-row gap-4 md:gap-8"
```

## Debugging Checklist

### Layout breaks on mobile
**Symptoms**: Elements stack incorrectly, content hidden, overflow visible
**Check**:
- [ ] Base classes don't have `md:` or `lg:` prefixes
- [ ] `flex-col` applied before `md:flex-row`
- [ ] Container has `w-full` for mobile
- [ ] No hardcoded `w-` values blocking mobile layout

**Example fix**:
```tsx
// Before (broken on mobile)
className="md:flex md:flex-row md:gap-8"

// After (works on all sizes)
className="flex flex-col md:flex-row gap-4 md:gap-8"
```

### Images/videos overflow on mobile
**Symptoms**: Horizontal scroll, content extends beyond viewport
**Check**:
- [ ] Parent container: `w-full max-w-*`
- [ ] Image/video: `className="w-full h-auto"`
- [ ] Modal: `max-w-2xl` with `w-full`
- [ ] No hardcoded `width` or `max-width` in px

**Example fix**:
```tsx
// Before (overflows)
<Image src={...} className="w-96" alt="..." />

// After (responsive)
<Image src={...} className="w-full max-w-2xl h-auto" alt="..." />
```

### Text too large on mobile
**Symptoms**: Text wraps awkwardly, overflows viewport on phone
**Check**:
- [ ] Base `text-sm` or `text-base` (not `text-2xl`)
- [ ] Scale up with `sm:text-base md:text-lg lg:text-xl`
- [ ] Line height proportional: `leading-6 md:leading-7`

**Example fix**:
```tsx
// Before (huge on mobile)
className="text-2xl md:text-3xl"

// After (scales properly)
className="text-base md:text-xl lg:text-2xl"
```

### Spacing too tight on mobile
**Symptoms**: Content cramped, hard to read, elements touching
**Check**:
- [ ] Padding increases: `px-2 sm:px-4 md:px-8`
- [ ] Gaps increase: `gap-4 md:gap-8`
- [ ] Margins scale: `m-2 sm:m-4 md:m-6`

**Example fix**:
```tsx
// Before (too tight)
className="px-8 gap-8"

// After (scales appropriately)
className="px-2 sm:px-4 md:px-8 gap-4 md:gap-8"
```

### Touch targets too small
**Symptoms**: Buttons/links hard to tap on mobile (< 44px recommended)
**Check**:
- [ ] Buttons have padding: `px-4 py-2` minimum
- [ ] Icons/interactive areas: 44px × 44px minimum
- [ ] Modal close button: adequate size for fingers

**Example fix**:
```tsx
// Before (too small)
<button className="p-1 text-sm">×</button>

// After (44px touch target)
<button className="p-4 text-2xl">×</button>
```

### Breakpoint not applied
**Symptoms**: `md:` or `lg:` classes not activating on larger screens
**Check**:
- [ ] Breakpoint prefix spelled correctly (`md:`, not `medium:`)
- [ ] Class name is valid Tailwind utility
- [ ] No `@apply` conflicts in CSS
- [ ] No inline styles overriding classes

**Debug**:
```bash
# Run linter to catch invalid classes
npm run lint
```

## Testing Protocol

### Manual Testing Steps
1. **Mobile (< 640px)**: Chrome DevTools, iPhone SE
2. **Tablet (768px)**: iPad Air
3. **Desktop (1024px+)**: Full-screen browser

### DevTools Mobile Emulation
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test with preset devices
4. Manually test all breakpoint widths (640, 768, 1024)

### Responsive Components to Test
- [x] Portfolio sections (all 5: Poetry, Visual, Journalism, Sound, BookDesign)
- [x] MenuBar navigation
- [x] Gallery carousels
- [x] Modal overlays
- [x] BackArrow positioning
- [x] Image/video sizing

## Performance Considerations

### Avoid
- CSS media queries that override Tailwind breakpoints
- Multiple `container` queries per component
- Unnecessary breakpoint overrides (inheritance works!)

### Use Instead
- Tailwind breakpoint prefixes exclusively
- CSS variables for consistent spacing
- Responsive images via Next.js `Image` component
