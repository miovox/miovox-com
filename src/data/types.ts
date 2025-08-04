export interface PortfolioProject {
  slug: string;
  title: string;
  date: string; // For sorting, in "YYYY-MM-DD" format
  shortDescription: string; // For the card view on the service page
  imageUrl: string; // The main "thumbnail" or "cover" image
  galleryImageUrls?: string[]; // (optional): For a gallery inside the modal
  content: string; // Detailed content for the modal, written in Markdown
  category: "Product" | "Home" | "Event";
  isFeatured?: boolean; // (optional): To pin a project to the top of the list
}