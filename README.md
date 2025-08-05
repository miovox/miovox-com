# Miovox.com

A modern web application built with Next.js, React, and TypeScript for showcasing business services and portfolio content.

## Features

- 🎯 Portfolio and information about each service pillar
- 🚀 Built with Next.js 14 and React 18
- 🎨 Styled with Tailwind CSS
- 📱 Responsive design
- 🧪 Comprehensive testing with Vitest and Cypress
- 🔧 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd miovox-com
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run unit tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:ui` - Run tests with UI
- `pnpm e2e` - Open Cypress for E2E testing
- `pnpm e2e:headless` - Run E2E tests headlessly

## Project Structure

```
src/
├── app/           # Next.js app router pages
├── components/    # React components
│   ├── features/  # Feature-specific components
│   ├── sections/  # Page sections
│   ├── shared/    # Shared components
│   └── ui/        # UI components
├── data/          # Data models and types
└── test/          # Test configuration
docs/              # Documentation files to guide development
├── architecture/  # Sharded architecture reference
└── prd/           # Sharded project plan


```

## License

MIT License - see [LICENSE](LICENSE) file for details.
