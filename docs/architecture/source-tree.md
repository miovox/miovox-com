# Source Tree Reference

> **Project**: Miovox.com  
> **Stack**: Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui  
> **Purpose**: Team reference for project structure and navigation

## 📁 Directory Structure

```
miovox-com/
├── 📄 component-example.html           # Component prototypes/examples
├── 📄 component-example-2.html         # Additional component examples
│
├── 📂 docs/                            # 📚 PROJECT DOCUMENTATION HUB
│   ├── 📄 architecture.md              # Main architecture overview
│   ├── 📄 prd.md                       # Product Requirements Document
│   ├── 📄 ui-ux-spec.md               # UI/UX specifications
│   │
│   ├── 📂 architecture/                # 🏗️ DETAILED ARCHITECTURE DOCS
│   │   ├── 📄 index.md                 # Architecture documentation index
│   │   ├── 📄 introduction.md          # Project introduction & context
│   │   ├── 📄 high-level-architecture.md  # System overview & diagrams
│   │   ├── 📄 tech-stack.md            # Technology choices & rationale
│   │   ├── 📄 frontend-architecture.md # Frontend system design
│   │   ├── 📄 backend-architecture.md  # Backend system design
│   │   ├── 📄 api-specification.md     # API contracts & endpoints
│   │   ├── 📄 data-models.md           # Data structures & relationships
│   │   ├── 📄 database-schema.md       # Database design
│   │   ├── 📄 components.md            # Component architecture
│   │   ├── 📄 core-workflows.md        # Key user flows & processes
│   │   ├── 📄 security-and-performance.md  # Security & perf considerations
│   │   ├── 📄 testing-strategy.md      # Testing approach & tools
│   │   ├── 📄 deployment-architecture.md  # Deployment & infrastructure
│   │   ├── 📄 monitoring-and-observability.md  # Monitoring setup
│   │   ├── 📄 development-workflow.md  # Dev processes & guidelines
│   │   ├── 📄 coding-standards.md      # Code style & conventions
│   │   ├── 📄 error-handling-strategy.md  # Error handling patterns
│   │   ├── 📄 external-apis.md         # Third-party integrations
│   │   ├── 📄 unified-project-structure.md  # Project layout (this doc's source)
│   │   ├── 📄 checklist-results-report.md  # Architecture review results
│   │   └── 📄 next-steps.md            # Future development roadmap
│   │
│   ├── 📂 prd/                         # 📋 PRODUCT REQUIREMENTS
│   │   ├── 📄 index.md                 # PRD documentation index
│   │   ├── 📄 goals-and-background-context.md  # Project goals & context
│   │   ├── 📄 requirements.md          # Functional & non-functional requirements
│   │   ├── 📄 technical-assumptions.md # Technical constraints & assumptions
│   │   ├── 📄 user-interface-design-goals.md  # UI/UX objectives
│   │   ├── 📄 epic-list-final.md       # Complete epic breakdown
│   │   ├── 📄 epic-1-foundational-launch-ai-service-introduction.md
│   │   ├── 📄 epic-2-portfolio-service-expansion.md
│   │   ├── 📄 epic-3-about-contact-launch-readiness-revised.md
│   │   ├── 📄 checklist-results-report.md  # PRD review results
│   │   └── 📄 next-steps.md            # Implementation roadmap
│   │
│   └── 📂 stories/                     # 📖 USER STORIES & TASKS
│       └── 📄 1.1.project-initialization.md  # Initial setup story
│
├── 📂 web-bundles/                     # 🤖 AI AGENT CONFIGURATIONS
│   ├── 📂 agents/                      # Individual agent definitions
│   │   ├── 📄 analyst.txt              # Data analyst agent
│   │   ├── 📄 architect.txt            # System architect agent (me!)
│   │   ├── 📄 bmad-master.txt          # Master orchestrator agent
│   │   ├── 📄 bmad-orchestrator.txt    # Task orchestration agent
│   │   ├── 📄 dev.txt                  # Developer agent
│   │   ├── 📄 pm.txt                   # Project manager agent
│   │   ├── 📄 po.txt                   # Product owner agent
│   │   ├── 📄 qa.txt                   # Quality assurance agent
│   │   ├── 📄 sm.txt                   # Scrum master agent
│   │   └── 📄 ux-expert.txt            # UX specialist agent
│   │
│   ├── 📂 teams/                       # Team configuration bundles
│   │   ├── 📄 team-all.txt             # Full team configuration
│   │   ├── 📄 team-fullstack.txt       # Full-stack development team
│   │   ├── 📄 team-ide-minimal.txt     # Minimal IDE team setup
│   │   └── 📄 team-no-ui.txt           # Backend-focused team
│   │
│   └── 📂 expansion-packs/             # Specialized team extensions
│       ├── 📂 bmad-2d-phaser-game-dev/  # Phaser.js game development
│       ├── 📂 bmad-2d-unity-game-dev/   # Unity 2D game development
│       └── 📂 bmad-infrastructure-devops/  # DevOps & infrastructure
│
└── 📂 [FUTURE SOURCE CODE]             # 🚧 TO BE IMPLEMENTED
    ├── 📂 .github/                     # GitHub workflows & templates
    ├── 📂 public/                      # Static assets (images, icons, etc.)
    ├── 📂 src/                         # 💻 MAIN SOURCE CODE
    │   ├── 📂 app/                     # Next.js 14 app router pages
    │   ├── 📂 components/              # React components
    │   │   ├── 📂 ui/                  # shadcn/ui base components
    │   │   ├── 📂 shared/              # Reusable shared components
    │   │   └── 📂 features/            # Feature-specific components
    │   ├── 📂 data/                    # Static data & content
    │   └── 📂 styles/                  # Global styles & themes
    ├── 📄 .env.example                 # Environment variables template
    ├── 📄 .eslintrc.json              # ESLint configuration
    ├── 📄 next.config.mjs             # Next.js configuration
    ├── 📄 package.json                # Dependencies & scripts
    ├── 📄 tailwind.config.ts          # Tailwind CSS configuration
    └── 📄 tsconfig.json               # TypeScript configuration
```

## 🎯 Key Navigation Points

### 📚 **Start Here for New Team Members**

- `docs/architecture/introduction.md` - Project overview & context
- `docs/prd/goals-and-background-context.md` - Business goals & background
- `docs/architecture/tech-stack.md` - Technology choices & rationale

### 🏗️ **Architecture & Design**

- `docs/architecture/` - Complete architectural documentation
- `docs/architecture/high-level-architecture.md` - System overview
- `docs/architecture/frontend-architecture.md` - Frontend design patterns
- `docs/architecture/api-specification.md` - API contracts

### 📋 **Requirements & Planning**

- `docs/prd/` - Product requirements & specifications
- `docs/prd/epic-list-final.md` - Development roadmap
- `docs/stories/` - User stories & implementation tasks

### 🤖 **AI Development Tools**

- `web-bundles/agents/` - Specialized AI agents for development tasks
- `web-bundles/teams/` - Pre-configured team setups

## 🔍 **Quick Reference**

| **Need to find...**  | **Look in...**                                 |
| -------------------- | ---------------------------------------------- |
| System architecture  | `docs/architecture/high-level-architecture.md` |
| API endpoints        | `docs/architecture/api-specification.md`       |
| Component patterns   | `docs/architecture/components.md`              |
| Database schema      | `docs/architecture/database-schema.md`         |
| Development workflow | `docs/architecture/development-workflow.md`    |
| Coding standards     | `docs/architecture/coding-standards.md`        |
| Testing strategy     | `docs/architecture/testing-strategy.md`        |
| Deployment process   | `docs/architecture/deployment-architecture.md` |
| Feature requirements | `docs/prd/requirements.md`                     |
| Project roadmap      | `docs/prd/epic-list-final.md`                  |

## 📖 **Project Status**

**Current Phase**: 📋 Planning & Architecture  
**Tech Stack**: Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui  
**Deployment**: Vercel (planned)  
**Testing**: Vitest + Cypress (planned)

## 🚀 **Getting Started**

1. **Understand the Vision**: Read `docs/architecture/introduction.md`
2. **Review Requirements**: Check `docs/prd/goals-and-background-context.md`
3. **Study Architecture**: Explore `docs/architecture/` directory
4. **Check Current Tasks**: Review `docs/stories/` for active work
5. **Set Up Environment**: Follow setup instructions (when available)

---

_Last Updated: 2025-08-04_  
_Maintained by: Architecture Team_  
_Questions? Check the docs or ask the team!_
