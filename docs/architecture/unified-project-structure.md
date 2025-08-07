# Unified Project Structure

```text
miovox-com/
├── .github/
├── /docs
├── /public
│   ├── /backgrounds                  # Background media for ModeCard tiles
│   │   ├── products-bg.jpg           # Products service background image/texture
│   │   ├── events-bg.jpg             # Events service background image/texture  
│   │   ├── home-tech-bg.jpg          # Home Tech service background image/texture
│   │   ├── about-bg.jpg              # About service background image/texture
│   │   └── /videos                   # Optional background videos
│   ├── philip.png                    # Philip icon (optimized <100KB)
│   ├── Miovox-dark-transparent.png   # Full logo (existing)
│   └── Miovox-light-transparent.png  # Full logo (existing)
├── /src
│   ├── /app
│   │   ├── /about                    # New Info/About page route
│   │   ├── /events                   # Events service route
│   │   ├── /home                     # Home Tech service route
│   │   ├── /product                  # Products service route
│   │   └── page.tsx                  # Homepage with ServiceNavigation
│   ├── /components
│   │   ├── /ui
│   │   │   ├── ServiceIcon.tsx       # Unified service pillar icons (Products/Events/Home Tech/About)
│   │   │   └── ThemeToggle.tsx       # Existing theme toggle (secondary position)
│   │   ├── /features
│   │   │   ├── ServiceNavigation.tsx # Main navigation component (homepage/header variants)
│   │   │   ├── BrandPortal.tsx       # [DEPRECATED] - replaced by ServiceNavigation
│   │   │   └── PortfolioGallery.tsx  # Existing portfolio component
│   │   └── /sections
│   │       ├── Header.tsx            # Updated with inline brand dropdown
│   │       └── Hero.tsx              # Modified for fixed-height layout
│   ├── /data
│   │   ├── services.ts               # Service configuration and definitions
│   │   └── portfolio.ts              # Existing portfolio data
│   └── /styles
├── .env.example
├── .eslintrc.json
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```
