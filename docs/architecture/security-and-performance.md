# Security and Performance

- **Security:** Vercel provides secure headers by default. React/Next.js provide XSS protection. Dependencies will be audited for vulnerabilities.
- **Performance:** The primary strategy is Static Site Generation (SSG) served via Vercel's Edge Network. Next.js's `<Image>` component will be used for automatic image optimization.

---
