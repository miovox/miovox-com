# Brand Portal Modes - Layout Wireframes & Visual Specifications

## Overview

This document provides visual wireframes and layout specifications for the Brand Portal "Modes" navigation enhancement. These wireframes serve as design references for developers implementing the Epic 2.5 stories.

---

## 1. Current State vs. Target State

### Current Homepage Layout
```
┌─────────────────────────────────────────────────────────┐
│                    HERO SECTION                         │
│                                                         │
│              [Miovox Logo]                              │
│         "Crafting tools, memories,                      │
│            and lifestyles."                             │
│                                                         │
│                    [Scroll Down]                        │
└─────────────────────────────────────────────────────────┘
│                                                         │
│                 BRAND PORTAL                            │
│        ┌─────────────────────────────────────┐          │
│        │     AI Product Development          │          │
│        │        Crafting Tools               │          │
│        │   [Description text...]             │          │
│        └─────────────────────────────────────┘          │
│        ┌─────────────────────────────────────┐          │
│        │     Home Tech Solutions             │          │
│        │       Crafting Lifestyles           │          │
│        │   [Description text...]             │          │
│        └─────────────────────────────────────┘          │
│        ┌─────────────────────────────────────┐          │
│        │    Event Media Production           │          │
│        │       Crafting Memories             │          │
│        │   [Description text...]             │          │
│        └─────────────────────────────────────┘          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Target Homepage Layout (No Scroll) - 1×4 Grid on Desktop
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                    HERO SECTION                         │  70vh
│                   (Centered)                            │
│              [Miovox Logo]                              │
│         "Crafting tools, memories,                      │
│            and lifestyles."                             │
│                                                         │
├─────────────┬─────────────┬─────────────┬─────────────────┤
│    [M]      │    [M]      │    [M]      │   [Philip]      │
│  Products   │   Events    │   Homes     │    About        │  30vh
│Crafting Tools│Crafting     │Crafting     │ It's This Guy   │
│             │Memories     │Lifestyles   │                 │
└─────────────┴─────────────┴─────────────┴─────────────────┘
```

---

## 2. Homepage Grid Layout Specifications

### Desktop Layout (≥1025px) - Single Row, 4 Columns
```
Container: 100vw × 100vh (full viewport)

┌─────────────────────────────────────────────────────────┐
│                    Hero Section                         │ 70vh
│                  flex: 1 (grows)                        │
│                                                         │
│              [Miovox Logo - Large]                      │
│            "Crafting tools, memories,                   │
│               and lifestyles."                          │
│                                                         │
├─────────────┬─────────────┬─────────────┬─────────────────┤
│bg-miovox-   │bg-miovox-   │bg-miovox-   │bg-miovox-       │ 30vh
│blue-50      │blue-100     │blue-200     │blue-300         │ Fixed
│             │             │             │                 │ Height
│   [M] 32px  │   [M] 32px  │   [M] 32px  │ [Philip] 32px   │
│  Products   │   Events    │   Homes     │    About        │
│ text-3xl    │ text-3xl    │ text-3xl    │  text-3xl       │
│ bold        │ bold        │ bold        │  bold           │
│Crafting     │ Crafting    │ Crafting    │ It's This Guy   │
│Tools        │ Memories    │ Lifestyles  │                 │
│text-xl      │ text-xl     │ text-xl     │ text-xl         │
│muted-fg     │ muted-fg    │ muted-fg    │ muted-fg        │
│             │             │             │                 │
└─────────────┴─────────────┴─────────────┴─────────────────┘

Grid Configuration:
- display: grid
- grid-template-columns: repeat(4, 1fr) /* 4 equal columns */
- grid-template-rows: 1fr /* Single row */
- height: 30vh
- gap: 0 (tiles touch)
```

### Tablet Layout (641px-1024px) - 2×2 Grid
```
┌─────────────────────────────────────────────────────────┐
│                    Hero Section                         │ 65vh
│                 (Slightly compressed)                   │
│                                                         │
│              [Miovox Logo - Medium]                     │
│            "Crafting tools, memories,                   │
│               and lifestyles."                          │
│                                                         │
├──────────────────┬──────────────────┐                     │
│                  │                  │                     │ 35vh
│      [M] 24px    │      [M] 24px    │                     │ Increased
│    Products      │     Events       │                     │ Height
│   text-2xl bold  │   text-2xl bold  │                     │
│  Crafting Tools  │ Crafting Memories│                     │
│  text-lg muted   │  text-lg muted   │                     │
│                  │                  │                     │
├──────────────────┼──────────────────┤                     │
│                  │                  │                     │
│      [M] 24px    │   [Philip] 24px  │                     │
│      Homes       │     About        │                     │
│   text-2xl bold  │   text-2xl bold  │                     │
│Crafting Lifestyles│  It's This Guy   │                     │
│  text-lg muted   │  text-lg muted   │                     │
│                  │                  │                     │
└──────────────────┴──────────────────┘                     │

Grid Configuration:
- display: grid  
- grid-template-columns: repeat(2, 1fr) /* 2×2 */
- grid-template-rows: repeat(2, 1fr)
- height: 35vh
- Touch targets: minimum 44px
```

### Mobile Layout (≤640px) - 2×2 Grid to Match Header Style
```
┌─────────────────────────────────────┐
│            Hero Section             │ 60vh
│          (More compressed)          │
│                                     │
│        [Miovox Logo - Small]        │
│      "Crafting tools, memories,     │
│         and lifestyles."            │
│                                     │
├──────────────────┬──────────────────┤
│      [M] 20px    │      [M] 20px    │ 40vh total
│    Products      │     Events       │ (20vh each row)
│  text-lg bold    │   text-lg bold   │
│ Crafting Tools   │Crafting Memories │
├──────────────────┼──────────────────┤
│      [M] 20px    │   [Philip] 20px  │
│      Homes       │     About        │
│   text-lg bold   │   text-lg bold   │
│Crafting Lifestyles│  It's This Guy  │
└──────────────────┴──────────────────┘

Grid Configuration (matches mobile header pattern):
- display: grid
- grid-template-columns: repeat(2, 1fr) /* 2×2 grid */
- grid-template-rows: repeat(2, 1fr)
- height: 40vh
- Spiritual alignment with mobile header 2×2 button layout
```

---

## 3. Header Layout Integration - Redesigned Hierarchy

### Current Header
```
┌─────────────────────────────────────────────────────────┐
│ [Miovox Logo]                        [Theme Toggle]    │
│                                      Light|Dark|System  │
└─────────────────────────────────────────────────────────┘
```

### Target Header - Mode Switcher as "Big Brother"
```
┌─────────────────────────────────────────────────────────┐
│[Miovox Logo][Mode Switcher - Prominent]  [Theme Toggle]│
│             [M]Prod[M]Event[M]Home[P]About    L|D|S    │
└─────────────────────────────────────────────────────────┘
```

### Header Desktop Layout (≥1025px) - Mode Switcher Left-Aligned
```
Container: max-width with padding

┌─────────────────────────────────────────────────────────┐
│                          Header                         │ 64px height
│                                                         │
│[Miovox Logo]  [Mode Switcher - Big Brother]  [Theme]   │
│ 200×50        ┌─────────────────────────┐    Toggle     │
│               │    PROMINENT STYLING    │   ┌────────┐  │
│               │ [M] Products  [M] Events│   │☀️ 🌙 🖥️ │  │
│               │ [M] Homes    [P] About  │   │        │  │
│               │                         │   │  L D S │  │
│               │ (Larger, more visual    │   │        │  │
│               │  emphasis than theme)   │   └────────┘  │
│               └─────────────────────────┘              │
└─────────────────────────────────────────────────────────┘

Layout Hierarchy:
1. Miovox Logo (left)
2. Mode Switcher (left-aligned after logo, prominent) 
3. Theme Toggle (right, smaller/secondary)

Styling Emphasis:
- Mode Switcher: Larger buttons, more visual weight
- Theme Toggle: Maintains current size (secondary role)
- Clear visual hierarchy: Logo > Mode > Theme
```

### Header Tablet Layout (641px-1024px)
```
┌─────────────────────────────────────────┐
│             Header                      │ 60px height
│                                         │
│[Miovox Logo] [Mode - Compact] [Theme]  │
│ (smaller)    ┌───────────────┐ Toggle   │
│              │[M][M][M][P]   │          │
│              │Prod|Event|    │          │
│              │Home|About     │          │
│              └───────────────┘          │
└─────────────────────────────────────────┘

Mode Switcher Tablet:
- Slightly smaller but still prominent
- May use abbreviated labels
- Still "big brother" to theme toggle
```

### Header Mobile Layout (≤640px) - 2×2 Grid Style
```
┌─────────────────────────────────────────┐
│             Header                      │ 56px height
│                                         │
│[Logo] [Mode Switcher 2×2] [Theme]      │
│       ┌─────┬─────┐                     │
│       │ [M] │ [M] │                     │
│       │ Pro │Event│        ┌──────┐    │
│       ├─────┼─────┤        │☀️🌙🖥️│    │
│       │ [M] │ [P] │        └──────┘    │
│       │Home │Abou │                    │
│       └─────┴─────┘                    │
└─────────────────────────────────────────┘

Mobile Mode Switcher:
- 2×2 grid layout (spiritual alignment with homepage)
- Icons + abbreviated text or icons only
- Still visually prominent vs theme toggle
- Compact but maintains hierarchy
```

---

## 4. Visual Style Specifications

### Header Component Hierarchy & Emphasis

#### Mode Switcher (Big Brother)
```css
.mode-switcher {
  /* More prominent styling */
  padding: 0.375rem;
  border: 1.5px solid var(--border);
  border-radius: 0.5rem;
  background: var(--background);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.mode-button {
  padding: 0.5rem 1rem; /* Larger than theme buttons */
  font-size: 0.875rem;
  font-weight: 600; /* Slightly bolder */
  border-radius: 0.375rem;
  min-width: 3.5rem; /* Wider buttons */
}

.mode-button.active {
  background: var(--primary);
  color: var(--primary-foreground);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
```

#### Theme Toggle (Secondary/Supporting)
```css
.theme-toggle {
  /* Maintains current size - secondary role */
  padding: 0.25rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
}

.theme-button {
  padding: 0.375rem 0.75rem; /* Current size */
  font-size: 0.875rem;
  font-weight: 500; /* Current weight */
  min-width: 52px; /* Current width */
}
```

### Homepage Grid Visual Hierarchy

#### Single Row Layout (Desktop)
```css
.homepage-grid-desktop {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  height: 30vh;
  gap: 0;
}

.mode-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

/* Responsive card sizing */
.mode-card-desktop {
  width: 25%; /* Each card takes 1/4 width */
  min-height: 30vh;
}
```

#### Responsive Grid Alignment
```css
/* Tablet - 2×2 matches mobile header pattern */
@media (max-width: 1024px) {
  .homepage-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 35vh;
  }
}

/* Mobile - 2×2 spiritual alignment with header */
@media (max-width: 640px) {
  .homepage-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 40vh;
  }
  
  .mode-card {
    padding: 1rem;
  }
}
```

### Color Palette & Visual Weight
```css
:root {
  --miovox-blue-50: /* Products - Lightest */
  --miovox-blue-100: /* Events - Light */
  --miovox-blue-200: /* Homes - Medium */
  --miovox-blue-300: /* About - Darker */
}

/* Homepage tile progression */
.tile-product { background: var(--miovox-blue-50); }
.tile-events { background: var(--miovox-blue-100); }
.tile-home { background: var(--miovox-blue-200); }
.tile-about { background: var(--miovox-blue-300); }
```

---

## 5. Component Layout Examples

### Desktop Homepage Card (1×4 Layout)
```
Single Row, 4 Equal Columns (25% each):

┌─────────────┬─────────────┬─────────────┬─────────────┐
│             │             │             │             │
│             │             │             │             │
│    [M]      │    [M]      │    [M]      │ [Philip]    │
│  32px       │  32px       │  32px       │  32px       │
│             │             │             │             │
│ Products    │  Events     │   Homes     │   About     │
│text-3xl     │ text-3xl    │ text-3xl    │ text-3xl    │
│bold         │ bold        │ bold        │ bold        │
│             │             │             │             │
│Crafting     │ Crafting    │ Crafting    │It's This    │
│Tools        │ Memories    │Lifestyles   │Guy          │
│text-xl      │ text-xl     │ text-xl     │ text-xl     │
│muted        │ muted       │ muted       │ muted       │
│             │             │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┘

Each card: 25% width × 30vh height
Clean horizontal progression across the bottom
```

### Mobile Homepage (2×2) & Header Spiritual Alignment
```
Homepage Mobile Grid:          Header Mobile Grid:
┌──────────┬──────────┐        ┌─────┬─────┐
│   [M]    │   [M]    │        │ [M] │ [M] │
│Products  │ Events   │        │ Pro │Event│
├──────────┼──────────┤   ←→   ├─────┼─────┤
│   [M]    │[Philip]  │        │ [M] │ [P] │
│  Homes   │ About    │        │Home │Abou │
└──────────┴──────────┘        └─────┴─────┘

Spiritual Alignment:
- Both use 2×2 grid pattern
- Same visual arrangement
- Consistent mode ordering
- Similar proportions and spacing
- Creates cohesive mobile experience
```

### Desktop Header Mode Switcher (Big Brother)
```
Header Layout with Emphasis:

[Miovox Logo - 200px] [Mode Switcher - PROMINENT] [Theme Toggle - secondary]

Mode Switcher Big Brother Style:
┌─────────────────────────────────────┐
│          PROMINENT STYLING          │
│                                     │
│  [M] Products    [M] Events         │
│                                     │ 
│  [M] Homes       [P] About          │
│                                     │
│ • Larger buttons                    │
│ • Stronger border                   │
│ • More visual weight                │
│ • Clear hierarchy over theme toggle │
└─────────────────────────────────────┘

vs Theme Toggle (maintains current size):
┌──────────┐
│ ☀️ 🌙 🖥️  │
│ L  D  S  │ <- Stays secondary
└──────────┘
```

---

## 6. Responsive Behavior Flowchart

```
User visits homepage
        ↓
Is viewport ≥1025px?
   ↓ Yes          ↓ No
Desktop Layout    Is viewport ≥641px?
1×4 Grid             ↓ Yes        ↓ No  
30vh height      Tablet Layout   Mobile Layout
                 2×2 Grid        2×2 Grid
                 35vh height     40vh height
                                (matches header)

Header Behavior:
Desktop: Logo + Prominent Mode Switcher + Theme Toggle
Tablet: Logo + Compact Mode Switcher + Theme Toggle  
Mobile: Logo + 2×2 Mode Grid + Theme Toggle

Spiritual Alignment:
Mobile homepage 2×2 ←→ Mobile header 2×2
Creates consistent grid-based experience
```

## Summary

### Key Design Changes:

1. **Homepage Grid**: 
   - **Desktop**: Single row, 4 columns (1×4) for clean horizontal flow
   - **Mobile/Tablet**: 2×2 grid for touch-friendly interaction

2. **Header Hierarchy**:
   - **Mode Switcher**: "Big Brother" - prominent, left-aligned after logo
   - **Theme Toggle**: Secondary role, maintains current size
   - **Visual Emphasis**: Clear Logo > Mode > Theme hierarchy

3. **Spiritual Alignment**:
   - Mobile homepage 2×2 grid matches mobile header 2×2 pattern
   - Consistent visual language across navigation methods
   - Same mode ordering and proportions

4. **Responsive Strategy**:
   - Desktop: Emphasize horizontal layout (1×4)
   - Mobile: Emphasize grid consistency (2×2 everywhere)
   - Tablet: Balanced approach between desktop and mobile

These specifications maintain the sophisticated brand aesthetic while creating a more intuitive, playful navigation experience that works seamlessly across all device sizes.