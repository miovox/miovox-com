# Technical Assumptions

## Repository Structure: Single Repository (Polyrepo)

For a small, single-developer project, a monorepo introduces unnecessary complexity. A single, standard repository is simpler to set up, manage, and deploy.

## Service Architecture

The architecture will be **Static Site Generation (SSG) / Jamstack**. There will be no traditional backend server for the MVP. Any future backend needs (like a contact form or blog CMS) will be handled via serverless functions. This approach is the most cost-effective (fitting NFR1), offers the best performance, and allows for the fastest development speed (fitting NFR2).

## Testing Requirements

Testing will focus on **Unit + Integration tests** for key components and a simple suite of **End-to-End (E2E) tests** for the main user flows (e.g., navigating to each service page). A 100% code coverage goal is not practical or necessary for the MVP. This provides a pragmatic balance of confidence and development speed.

## Additional Technical Assumptions and Requests

- The technology stack will be based on a modern JavaScript/TypeScript framework (e.g., Next.js, Astro, SvelteKit) to support Static Site Generation (SSG), which aligns with NFR4.
