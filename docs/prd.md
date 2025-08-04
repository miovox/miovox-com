# Miovox Studio Product Requirements Document (PRD)

## Goals and Background Context

### Goals

- Establish a professional web presence for the "Miovox Studio" brand.
- Create a credible touchpoint to validate the business for pre-existing leads.
- Clearly communicate the three core service offerings: AI Product Development, Home Tech Solutions, and Event Memories.
- Build the site as a portfolio piece showcasing modern, AI-driven development capabilities.

### Background Context

Miovox LLC is a new, single-owner business created to unify three distinct service lines under the brand "Miovox Studio." The primary challenge is to create a single brand identity that cohesively represents these disparate offerings. The website's main purpose is not new lead generation, but to serve as a professional validation point for potential clients who have already been contacted. The project operates under tight budget and time constraints, leveraging AI-driven development for efficiency.

### Change Log

| Date       | Version | Description       | Author    |
| :--------- | :------ | :---------------- | :-------- |
| 2025-08-01 | 1.0     | Initial PRD draft | John (PM) |

## Requirements

### Functional

1.  **FR1**: The website must clearly display the "Miovox Studio" brand identity and the "Crafting tools, memories, and lifestyles" tagline.
2.  **FR2**: The site must present dedicated, easily navigable sections for each of the three core services: AI Product Development, Home Tech Solutions, and Event Memories (Event Photo & Video).
3.  **FR3 (revised)**: The site must provide a clear and simple method for potential clients to make contact via a prominently displayed `mailto:` email link. (A contact form is out of scope for the initial version).
4.  **FR4**: The site's design and implementation must serve as a portfolio item, demonstrating modern web development practices.
5.  **FR5 (new)**: The site must feature a portfolio of completed projects, with each project being displayed within its relevant service section (e.g., home tech projects on the Home Tech page).

### Non-Functional

1.  **NFR1**: Hosting and operational costs must be minimized, aiming to stay within a $0-$20/month budget.
2.  **NFR2**: The initial version of the website must be achievable in a short timeframe, prioritizing simplicity and speed of development.
3.  **NFR3**: The website must be fully responsive and provide an excellent user experience on mobile devices.
4.  **NFR4**: The technology stack used should be modern and reflect current best practices to support its function as a portfolio piece.
5.  **NFR5 (new)**: The initial architecture must be extensible to support future additions, including a content/blog section, client testimonials, and analytics integration, without requiring a major refactor.

## User Interface Design Goals

### Overall UX Vision

The overall UX vision is to create a clean, professional, and modern digital presence that instills confidence and credibility. The site should feel like a high-end, bespoke studio. Navigation should be effortless, and the brand's three pillars must be communicated with absolute clarity. The site itself should serve as a testament to quality craftsmanship. _A primary UX challenge will be to present the three distinct services in a way that allows a visitor to immediately self-segment and dive into their area of interest, without feeling that the other services dilute the expertise in their chosen area._

### Key Interaction Paradigms (revised)

The homepage will function as a **Brand Portal**. Its primary goal is to allow users to immediately self-segment and navigate to one of three distinct sub-sections (or 'sub-sites'). Once within a sub-section, the primary navigation and content will focus exclusively on that service line, minimizing the presence of the other two services to maintain a strong sense of specialized expertise.

### Core Screens and Views

- A **Homepage / Landing Page** that introduces Miovox Studio and directs users to the three pillars.
- Three distinct **Service Pages** (for AI, Home Tech, and Events).
- A **Portfolio / Project Detail Page** template to showcase work within each service.
- A simple **About / Contact Page**.

### Accessibility: WCAG AA

The site will adhere to WCAG AA standards, ensuring it is accessible to a wide range of users.

### Branding

Branding should be minimalist and premium. A key design goal is to emulate an "Apple-style" aesthetic, using a mix of light-themed and dark-themed sections to create visual interest and delineate content areas. The overall feel should be clean and sophisticated.

### Target Device and Platforms: Web Responsive

The website will be fully responsive, designed with a mobile-first approach to ensure a seamless experience on all devices, from phones to desktops.

## Technical Assumptions

### Repository Structure: Single Repository (Polyrepo)

For a small, single-developer project, a monorepo introduces unnecessary complexity. A single, standard repository is simpler to set up, manage, and deploy.

### Service Architecture

The architecture will be **Static Site Generation (SSG) / Jamstack**. There will be no traditional backend server for the MVP. Any future backend needs (like a contact form or blog CMS) will be handled via serverless functions. This approach is the most cost-effective (fitting NFR1), offers the best performance, and allows for the fastest development speed (fitting NFR2).

### Testing Requirements

Testing will focus on **Unit + Integration tests** for key components and a simple suite of **End-to-End (E2E) tests** for the main user flows (e.g., navigating to each service page). A 100% code coverage goal is not practical or necessary for the MVP. This provides a pragmatic balance of confidence and development speed.

### Additional Technical Assumptions and Requests

- The technology stack will be based on a modern JavaScript/TypeScript framework (e.g., Next.js, Astro, SvelteKit) to support Static Site Generation (SSG), which aligns with NFR4.

## Epic List (Final)

- **Epic 1: Foundational Launch & AI Service Introduction:** Establish the complete project foundation (tech stack, repo, deployment), and launch a live site featuring the homepage and the complete AI Product Development service page _content_.
- **Epic 2: Portfolio & Service Expansion:** Develop the portfolio component to showcase completed work across all services and build out the content for the remaining service pages (Home Tech and Events).
- **Epic 3: Final Polish & Contact:** Add the About/Contact page with the `mailto:` functionality and incorporate any final design polish and pre-launch checks.

## Epic 1: Foundational Launch & AI Service Introduction

**Epic Goal:** The goal of this epic is to establish the entire technical foundation of the project and deploy a live, functional website. This initial version will serve as the MVP for the user's primary business line by launching the homepage and a detailed page for the AI Product Development service, allowing for immediate business validation.

### Story 1.1: Project Initialization & Repository Setup

**As a** Developer, **I want** a new project initialized with the chosen framework and a corresponding Git repository, **so that** I have a clean foundation to start building on.
**Acceptance Criteria:**

1.  A new project is created using the Architect's chosen framework (e.g., `npx create-next-app`).
2.  A new Git repository is initialized.
3.  The initial project files are committed to the `main` branch.
4.  A `.gitignore` file is configured with appropriate defaults for the chosen framework.

### Story 1.2: Basic CI/CD Pipeline & Hosting Setup

**As the** Owner, **I want** a basic CI/CD pipeline connected to the repository and a hosting provider, **so that** any push to the main branch is automatically deployed and the site is live.
**Acceptance Criteria:**

1.  A new project is created on the chosen hosting provider (e.g., Vercel, Netlify).
2.  The hosting project is linked to the Git repository.
3.  The CI/CD pipeline automatically deploys the `main` branch on every push.
4.  The default page of the new project is publicly accessible at its provided URL.
5.  The setup adheres to the free-tier constraints of the provider (NFR1).

### Story 1.3: Homepage Implementation

**As a** Visitor, **I want** to see a homepage that clearly introduces Miovox Studio and directs me to the three core services, **so that** I can understand the brand and choose my path.
**Acceptance Criteria:**

1.  The homepage displays the "Miovox Studio" brand and tagline (FR1).
2.  The page includes three clear, distinct navigation elements for "AI Product Development," "Home Tech Solutions," and "Event Memories" (FR2).
3.  The layout is fully responsive and mobile-first (NFR3).
4.  The design adheres to the high-level UI goals (minimalist, premium, "Brand Portal" model).

### Story 1.4: AI Service Page & Navigation

**As a** Visitor, **I want** to navigate from the homepage to a dedicated page for AI Product Development, **so that** I can learn about that specific service.
**Acceptance Criteria:**

1.  The "AI Product Development" navigation element on the homepage links to a new `/product` page.
2.  The AI service page is created with a title and placeholder content for the service description.
3.  The page is integrated into the site's overall layout and navigation structure.
4.  The page is fully responsive (NFR3).

## Epic 2: Portfolio & Service Expansion

**Epic Goal:** The goal of this epic is to build out the core substance of the website. This involves creating the portfolio system that provides social proof and showcases expertise, and launching the dedicated pages for the Home Tech and Event Memories services. At the end of this epic, the website will represent the full scope of Miovox Studio's offerings.

### Story 2.1: Portfolio Component & Data Structure

**As the** Owner, **I want** a reusable portfolio component and a simple data structure, **so that** I can easily add and display project case studies across the site.
**Acceptance Criteria:**

1.  A data structure (e.g., in a simple JSON or Markdown file) is defined to hold portfolio project information (e.g., title, description, image, service category).
2.  A reusable UI component is created that can consume project data and display it in a visually appealing format (e.g., a card or gallery item).
3.  The component is designed to be easily embedded on any page and filtered by service category.

### Story 2.2: Display AI Portfolio on Product Page

**As a** Visitor, **I want** to see a gallery of relevant completed projects on the AI Product page, **so that** I can validate the owner's expertise and experience.
**Acceptance Criteria:**

1.  The new portfolio component is implemented on the `/product` page (FR5).
2.  The component is configured to display only projects with the "AI Product" service category.
3.  At least one sample AI project is added to the data file and displays correctly on the page.

### Story 2.3: Home Tech Service Page & Portfolio

**As a** Visitor, **I want** to navigate from the homepage to a dedicated page for Home Tech Solutions and see relevant work, **so that** I can learn about the service and see proof of quality.
**Acceptance Criteria:**

1.  The "Home Tech Solutions" navigation element on the homepage links to a new `/home` page (FR2).
2.  The page is created with a title and content for the service.
3.  The portfolio component is implemented on the page, filtered to show only "Home Tech" projects (FR5).
4.  The page is fully responsive (NFR3).

### Story 2.4: Event Memories Service Page & Portfolio

**As a** Visitor, **I want** to navigate from the homepage to a dedicated page for Event Memories and see relevant work, **so that** I can understand the service and see proof of quality.
**Acceptance Criteria:**

1.  The "Event Memories" navigation element on the homepage links to a new `/events` page (FR2).
2.  The page is created with a title and content for the service.
3.  The portfolio component is implemented on the page, filtered to show only "Events" projects (FR5).
4.  The page is fully responsive (NFR3).

## Epic 3: About, Contact & Launch Readiness (Revised)

**Epic Goal:** The goal of this final epic is to complete the website's core content and functionality. This includes creating a personal connection with visitors through an interactive 'About' page and providing a clear contact method. We will also conduct final polishing and checks to ensure the site is fully ready for its public launch.

### Story 3.1: Interactive About Page Implementation (Revised)

**As a** Visitor, **I want** an interactive 'About' page that showcases the different facets of the owner's expertise, **so that** I can understand the unique, multi-talented person behind Miovox Studio.
**Acceptance Criteria:**

1.  A new `/about` page is created and linked in the site's main navigation or footer.
2.  The page contains a primary photo and a general bio that strongly references and links to `thephilipjones.com`.
3.  The page features an interactive element with the three service areas (e.g., clickable tabs or hoverable links).
4.  Hovering over or clicking a service area dynamically updates a portion of the page to show a specific photo and a short blurb relevant to that service (AI, Home, Events).
5.  The interaction is smooth and the layout remains stable during content changes.
6.  The page is fully responsive.

### Story 3.2: Contact Implementation & Site Footer

**As a** Visitor, **I want** to find contact information easily **so that** I can reach out with a business inquiry.
**Acceptance Criteria:**

1.  The `/about` page prominently features the `mailto:` email link as defined in FR3.
2.  A global site footer is implemented and appears on all pages.
3.  The footer contains copyright information, the business name, and a link to the about/contact page.

### Story 3.3: Final Design Polish & Pre-launch Review

**As the** Owner, **I want** to perform a final review of the entire site to check for consistency, polish, and correctness, **so that** I am confident in the final product before launch.
**Acceptance Criteria:**

1.  All placeholder content across the site is replaced with final copy.
2.  A full site review is conducted to ensure consistent styling, spacing, and typography.
3.  All internal and external links are checked and verified to be working correctly.
4.  The site is reviewed against all high-level UI goals from the PRD.

## Checklist Results Report

### Category Statuses

| Category                         | Status  | Critical Issues |
| :------------------------------- | :------ | :-------------- |
| 1. Problem Definition & Context  | ✅ PASS | None            |
| 2. MVP Scope Definition          | ✅ PASS | None            |
| 3. User Experience Requirements  | ✅ PASS | None            |
| 4. Functional Requirements       | ✅ PASS | None            |
| 5. Non-Functional Requirements   | ✅ PASS | None            |
| 6. Epic & Story Structure        | ✅ PASS | None            |
| 7. Technical Guidance            | ✅ PASS | None            |
| 8. Cross-Functional Requirements | ✅ PASS | None            |
| 9. Clarity & Communication       | ✅ PASS | None            |

### Final Decision

**READY FOR ARCHITECT**: The PRD and epics are comprehensive, properly structured, and ready for architectural design.

## Next Steps

### UX Expert Prompt

"Hello Sally, please review this PRD, specifically the 'User Interface Design Goals' section. Use this as a brief to create the detailed `UI/UX Specification` for the Miovox Studio website."

### Architect Prompt

"Hello Winston, please review this PRD, paying close attention to the 'Technical Assumptions' and the full story breakdown. Use this document to create the `Fullstack Architecture Document` for the Miovox Studio website."
