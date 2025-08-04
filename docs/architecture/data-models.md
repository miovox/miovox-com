# Data Models

## Portfolio Project

- **Purpose:** Represents a single piece of work to be showcased on the website. For the MVP, this data will be stored in a simple JSON or TypeScript file within the project repository (e.g., `/data/portfolio.ts`).
- **TypeScript Interface:**
  ```typescript
  interface PortfolioProject {
    slug: string;
    title: string;
    date: string; // For sorting, in "YYYY-MM-DD" format
    shortDescription: string; // For the card view on the service page
    imageUrl: string; // The main "thumbnail" or "cover" image
    galleryImageUrls?: string[]; // (optional): For a gallery inside the modal
    content: string; // Detailed content for the modal, written in Markdown
    category: "AI" | "HomeTech" | "Events";
    isFeatured?: boolean; // (optional): To pin a project to the top of the list
  }
  ```
- **Future Considerations:** This file-based data source is intended for the MVP. The interface is designed to be compatible with modern Headless CMS platforms. A future upgrade would involve creating a matching content model in a CMS and replacing the local data import with an API fetch, with minimal to no changes required for the UI components.

---
