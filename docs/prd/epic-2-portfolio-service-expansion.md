# Epic 2: Portfolio & Service Expansion

**Epic Goal:** The goal of this epic is to build out the core substance of the website. This involves creating the portfolio system that provides social proof and showcases expertise, and launching the dedicated pages for the Home Tech and Event Memories services. At the end of this epic, the website will represent the full scope of Miovox Studio's offerings.

## Story 2.1: Portfolio Component & Data Structure

**As the** Owner, **I want** a reusable portfolio component and a simple data structure, **so that** I can easily add and display project case studies across the site.
**Acceptance Criteria:**

1.  A data structure (e.g., in a simple JSON or Markdown file) is defined to hold portfolio project information (e.g., title, description, image, service category).
2.  A reusable UI component is created that can consume project data and display it in a visually appealing format (e.g., a card or gallery item).
3.  The component is designed to be easily embedded on any page and filtered by service category.

## Story 2.2: Display AI Portfolio on Product Page

**As a** Visitor, **I want** to see a gallery of relevant completed projects on the AI Product page, **so that** I can validate the owner's expertise and experience.
**Acceptance Criteria:**

1.  The new portfolio component is implemented on the `/product` page (FR5).
2.  The component is configured to display only projects with the "AI Product" service category.
3.  At least one sample AI project is added to the data file and displays correctly on the page.

## Story 2.3: Home Tech Service Page & Portfolio

**As a** Visitor, **I want** to navigate from the homepage to a dedicated page for Home Tech Solutions and see relevant work, **so that** I can learn about the service and see proof of quality.
**Acceptance Criteria:**

1.  The "Home Tech Solutions" navigation element on the homepage links to a new `/home` page (FR2).
2.  The page is created with a title and content for the service.
3.  The portfolio component is implemented on the page, filtered to show only "Home Tech" projects (FR5).
4.  The page is fully responsive (NFR3).

## Story 2.4: Event Memories Service Page & Portfolio

**As a** Visitor, **I want** to navigate from the homepage to a dedicated page for Event Memories and see relevant work, **so that** I can understand the service and see proof of quality.
**Acceptance Criteria:**

1.  The "Event Memories" navigation element on the homepage links to a new `/events` page (FR2).
2.  The page is created with a title and content for the service.
3.  The portfolio component is implemented on the page, filtered to show only "Events" projects (FR5).
4.  The page is fully responsive (NFR3).
