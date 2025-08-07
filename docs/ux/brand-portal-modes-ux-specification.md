# Brand Portal Modes - UX Specification

## Overview

This UX specification defines the interaction design, accessibility patterns, and visual hierarchy for the Brand Portal "Modes" navigation enhancement, building on the existing sophisticated design system while establishing clear user experience patterns.

---

## 1. Design System Integration

### **Existing Pattern Analysis**

#### Current Theme Toggle Pattern
```css
/* Established micro-interaction language */
transition-all duration-200 ease-out
hover:scale-[1.02] active:scale-[0.98]
focus-visible:ring-2 focus-visible:ring-ring
motion-reduce:transition-none
```

#### Current Brand Portal Pattern  
```css
/* Sophisticated hover transformations */
transition-all duration-500 ease-out
group-hover:scale-110 (for icons)
group-hover:bg-[next-shade] (color progression)
```

### **New Mode Navigation UX Pattern**

#### Mode Switcher (Big Brother Hierarchy)
```css
/* Enhanced prominence while maintaining design language */
.mode-switcher {
  /* Stronger visual presence */
  border: 1.5px solid var(--border);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition-all duration-250 ease-out; /* Slightly slower for prominence */
}

.mode-button {
  /* Larger interaction area */
  padding: 0.5rem 1rem; /* vs theme's 0.375rem 0.75rem */
  min-width: 4rem; /* vs theme's 52px */
  font-weight: 600; /* vs theme's 500 */
  
  /* Same micro-interaction language */
  transition-all duration-200 ease-out;
  hover:scale-[1.02] active:scale-[0.98];
}

.mode-button.active {
  /* Stronger active state */
  background: var(--primary);
  color: var(--primary-foreground);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transform: scale(1.0); /* Prevents double-scaling */
}
```

#### Homepage Tiles (Inheriting Brand Portal Sophistication)
```css
.mode-tile {
  /* Enhanced version of current Brand Portal pattern */
  transition: transform 0.3s ease-out, 
              background-color 0.3s ease-out,
              box-shadow 0.3s ease-out;
}

.mode-tile:hover {
  transform: scale(1.02); /* Subtle, refined vs current scale-110 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10; /* Lift above siblings */
}

.mode-icon {
  transition: transform 0.3s ease-out;
}

.mode-tile:hover .mode-icon {
  transform: scale(1.1); /* Icon emphasis on hover */
}
```

---

## 2. Interaction State Design

### **State Hierarchy & Visual Feedback**

#### Mode Switcher States (Header)
```
1. Default State:
   - Subtle border, background consistency
   - Clear but not dominant presence
   - Balanced with theme toggle but noticeably more prominent

2. Hover State:  
   - Background lightens to --accent
   - Scale micro-interaction (1.02)
   - Icon subtle glow or color shift
   - Smooth 200ms transition

3. Active State:
   - Primary background with contrast text
   - NO scale transform (prevents double-scaling)
   - Subtle shadow for depth
   - Immediate feedback (no transition delay)

4. Focus State:
   - Ring focus indicator (accessibility)
   - High contrast outline
   - Maintains active state styling if applicable
```

#### Homepage Tile States
```
1. Default State:
   - Miovox blue background (gradient progression)
   - Icon at normal scale (32px)
   - Clear typography hierarchy

2. Hover State:
   - Background shifts to next color shade
   - Entire tile scales (1.02) with shadow lift
   - Icon scales independently (1.1)
   - Smooth 300ms transition for sophistication

3. Focus State:
   - Clear focus ring around entire tile
   - Maintains hover state visuals
   - High contrast for accessibility

4. Active State (Click):
   - Brief scale-down (0.98) before navigation
   - Haptic feedback on mobile (if available)
   - Smooth transition to route change
```

### **Micro-Animation Specifications**

#### Timing Functions & Durations
```css
/* Established timing (maintain consistency) */
--transition-fast: 200ms ease-out;    /* Theme toggle, quick interactions */
--transition-medium: 300ms ease-out;  /* New mode tiles */
--transition-slow: 500ms ease-out;    /* Current Brand Portal (maintain) */

/* Mode Navigation Specific */
.mode-switcher-button {
  transition: all var(--transition-fast);
}

.mode-tile {
  transition: all var(--transition-medium);
}

.mode-icon {
  transition: transform var(--transition-medium);
}
```

#### Hover Choreography
```
Homepage Tile Hover Sequence:
1. Background color shift (0ms start)
2. Tile scale + shadow (50ms delay) 
3. Icon scale (100ms delay)
4. Total duration: 300ms

Header Button Hover:
1. Background + text color (0ms start)
2. Scale transform (0ms start)
3. Total duration: 200ms (immediate feedback)
```

---

## 3. Typography & Visual Hierarchy

### **Scale Relationships**

#### Desktop Homepage Tiles
```css
.mode-label-desktop {
  font-size: 2rem; /* text-3xl */
  font-weight: 700; /* font-bold */
  line-height: 1.2;
  letter-spacing: -0.025em; /* Tight for impact */
}

.mode-tagline-desktop {
  font-size: 1.25rem; /* text-xl */
  font-weight: 400;
  color: var(--muted-foreground);
  opacity: 0.9; /* Subtle hierarchy */
}
```

#### Header Mode Buttons
```css
.mode-button-text {
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* Enhanced from theme's 500 */
  line-height: 1.4;
  letter-spacing: 0.025em; /* Wide for clarity */
}
```

### **Responsive Typography**
```css
/* Maintain existing responsive patterns */
@media (min-width: 768px) {
  .mode-label { font-size: 2.25rem; } /* text-4xl on md+ */
}

@media (min-width: 1024px) {
  .mode-label { font-size: 3rem; } /* text-5xl on lg+ */
}

/* Mobile optimization */
@media (max-width: 640px) {
  .mode-label { 
    font-size: 1.5rem; /* text-2xl */
    line-height: 1.3; /* Tighter for mobile */
  }
  .mode-tagline { 
    font-size: 1rem; /* text-base */
  }
}
```

---

## 4. Accessibility UX Patterns

### **Keyboard Navigation Flow**

#### Homepage Navigation
```
Tab Order: Logo → Mode Tiles (L→R, T→B) → Theme Toggle
1. Products tile
2. Events tile  
3. Homes tile
4. About tile

Each tile:
- Enter/Space: Navigate to route
- Arrow keys: Move between tiles (optional enhancement)
- Clear focus indicators with high contrast
```

#### Header Navigation
```
Tab Order: Logo → Mode Switcher buttons → Theme Toggle buttons
Mode Switcher: 
- Arrow Left/Right: Navigate between mode buttons
- Enter/Space: Activate mode navigation
- Tab: Exit to next element (theme toggle)
```

### **Screen Reader Experience**

#### Semantic Structure
```html
<!-- Homepage -->
<nav aria-label="Site sections" role="navigation">
  <ul role="list">
    <li role="listitem">
      <a href="/product" aria-describedby="product-desc">
        <span>Products</span>
        <span id="product-desc">Crafting Tools</span>
      </a>
    </li>
    <!-- etc -->
  </ul>
</nav>

<!-- Header -->
<div role="group" aria-label="Navigate between site sections">
  <button role="radio" aria-checked="true">Products</button>
  <button role="radio" aria-checked="false">Events</button>
  <!-- etc -->
</div>
```

#### ARIA Announcements
```
Mode Switch: "Navigating to Products section - Crafting Tools"
Current Mode: "Currently viewing Products section" 
State Changes: "Products section selected, 1 of 4"
```

### **Motion & Accessibility**

#### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .mode-tile,
  .mode-button,
  .mode-icon {
    transition: none !important;
  }
  
  .mode-tile:hover {
    transform: none;
    /* Maintain color/shadow feedback */
    background-color: var(--hover-bg);
    box-shadow: 0 0 0 2px var(--ring);
  }
}
```

#### High Contrast Support  
```css
@media (prefers-contrast: high) {
  .mode-tile {
    border: 2px solid var(--border);
  }
  
  .mode-button {
    border: 1px solid var(--border);
  }
  
  .mode-button.active {
    border: 2px solid var(--primary);
  }
}
```

---

## 5. Mobile UX Optimization

### **Touch Target Optimization**

#### Minimum Touch Targets
```css
/* Ensure 44px minimum (iOS guidelines) */
.mode-tile-mobile {
  min-height: 44px;
  min-width: 44px;
  padding: 1rem; /* Generous touch area */
}

.mode-button-mobile {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1rem;
}
```

#### Touch Feedback
```css
.mode-tile:active {
  transform: scale(0.98);
  transition-duration: 100ms; /* Quick feedback */
}

/* iOS Safari touch highlight */
.mode-tile,
.mode-button {
  -webkit-tap-highlight-color: transparent;
  /* Custom touch feedback instead */
}
```

### **2×2 Spiritual Alignment UX**

#### Visual Consistency
```
Homepage Mobile (2×2):     Header Mobile (2×2):
┌──────────┬──────────┐    ┌─────┬─────┐
│ [M] Prod │ [M] Event│ ←→ │ [M] │ [M] │
├──────────┼──────────┤    │ P   │ E   │
│ [M] Home │ [P] About│    ├─────┼─────┤
└──────────┴──────────┘    │ [M] │ [P] │
                           │ H   │ A   │
                           └─────┴─────┘

Shared UX Patterns:
- Same grid proportions (1:1 aspect ratio)
- Consistent icon sizes (20-24px)
- Similar touch targets
- Matching transition timing
- Identical mode ordering
```

#### Mobile-Specific Enhancements
```css
/* Thumb-friendly spacing */
.mode-grid-mobile {
  gap: 2px; /* Subtle separation */
  padding: 0.5rem; /* Edge safety */
}

/* Enhanced touch feedback */
@media (hover: none) and (pointer: coarse) {
  .mode-tile:active {
    background-color: var(--active-bg);
    transform: scale(0.96); /* More pronounced on touch */
  }
}
```

---

## 6. Performance UX Considerations

### **Loading States & Progressive Enhancement**

#### Component Loading
```css
.mode-navigation-loading {
  /* Skeleton loader matching final layout */
  background: linear-gradient(90deg, 
    var(--muted) 0%, 
    var(--accent) 50%, 
    var(--muted) 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

#### Icon Loading Strategy
```
1. Fallback: Generic icon shape
2. Progressive: Load optimized assets
3. Enhancement: Theme-aware switching
4. Preload: Critical path icons (homepage)
```

### **Perceived Performance**

#### Instant Feedback Patterns
```css
/* Immediate visual feedback before route change */
.mode-tile:active::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--primary);
  opacity: 0.1;
  border-radius: inherit;
}
```

#### Route Transition UX
```css
/* Smooth page transitions */
.page-transition-enter {
  opacity: 0;
  transform: translateY(8px);
}

.page-transition-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 200ms ease-out;
}
```

---

## 7. Cross-Platform UX Patterns

### **Desktop Experience**
- **Primary interaction**: Mouse hover with rich feedback
- **Visual hierarchy**: Strong emphasis on mode switcher prominence
- **Layout**: Horizontal 1×4 tile flow for scanning efficiency
- **Typography**: Large scale progression for impact

### **Tablet Experience**  
- **Hybrid interaction**: Touch + hover states
- **Balanced layout**: 2×2 grid with generous touch targets
- **Moderate typography**: Scaled appropriately for viewing distance
- **Enhanced feedback**: Stronger active states for touch

### **Mobile Experience**
- **Touch-optimized**: Large targets, clear feedback
- **Simplified hierarchy**: Essential elements only
- **Spiritual alignment**: Consistent 2×2 patterns
- **Performance-focused**: Fast interactions, minimal animation

---

## 8. User Flow & Mental Models

### **Navigation Mental Model**

#### Dual Access Pattern
```
User Intent: "I want to explore site sections"

Path A (Discovery): Homepage → Visual tile scanning → Selection
- Large visual tiles for exploration
- Rich content preview (taglines)
- Spatial memory (position-based)

Path B (Quick Navigation): Any page → Header mode switcher → Selection  
- Compact, efficient access
- Text-based labels for speed
- Persistent availability
```

#### Cognitive Load Reduction
```
Consistency Principles:
1. Same mode ordering everywhere (Products, Events, Homes, About)
2. Visual icon consistency (M-logos + Philip)
3. Color progression (miovox-blue gradient)
4. Interaction patterns (hover, focus, active states)
```

### **Expected User Behaviors**

#### First-Time Users
- Likely to discover via homepage tiles (visual, exploratory)
- Need clear visual hierarchy and descriptive content
- Benefit from hover states that provide feedback

#### Return Users
- Likely to use header navigation (efficient, goal-oriented)  
- Need persistent access and clear active states
- Benefit from muscle memory (consistent positioning)

---

## 9. Success Metrics & UX Validation

### **Usability Metrics**
- **Task completion rate**: Successfully navigate to intended sections
- **Error rate**: Mis-clicks or confusion about current location
- **Efficiency**: Time to navigate between sections
- **Satisfaction**: Perceived ease and enjoyment of navigation

### **Accessibility Metrics**
- **Keyboard navigation success**: Complete flows using only keyboard
- **Screen reader comprehension**: Clear understanding of navigation options
- **High contrast usability**: Functionality in high contrast modes
- **Motor accessibility**: Success with limited dexterity or precision

### **Performance Metrics**
- **Interaction responsiveness**: <16ms for hover feedback
- **Route change speed**: <200ms perceived navigation time
- **Asset loading**: Icons load within first paint
- **Animation smoothness**: 60fps for all transitions

---

## Summary

This UX specification ensures the Brand Portal "Modes" navigation enhancement:

✅ **Integrates seamlessly** with existing design language and patterns  
✅ **Establishes clear hierarchy** with mode switcher as "big brother" to theme toggle  
✅ **Provides exceptional accessibility** with comprehensive ARIA and keyboard support  
✅ **Optimizes for all platforms** with device-appropriate interaction patterns  
✅ **Maintains performance** with efficient animations and loading strategies  
✅ **Creates intuitive mental models** with consistent dual-access navigation patterns  

The specification builds on Miovox's sophisticated existing UX while introducing playful, modern navigation that enhances rather than disrupts the user experience.