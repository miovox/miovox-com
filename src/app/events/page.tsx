import { Metadata } from "next";
import MainLayout from "@/components/ui/MainLayout";
import Container from "@/components/ui/Container";
import PortfolioGallery from "@/components/features/PortfolioGallery";

export const metadata: Metadata = {
  title: "Event Media Production | Miovox",
  description: "Capturing moments with a keen approach to storytelling and memory preservation.",
};

export default function EventsPage(): JSX.Element {
  return (
    <MainLayout>
      <Container>
        <article className="py-16 md:py-24">
          <header className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Event Media Production
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-medium" role="doc-subtitle">
              Crafting Memories
            </p>
          </header>
          
          <section className="max-w-4xl mx-auto text-center mt-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Capturing moments with a keen approach to storytelling and
              memory preservation. Our expert team specializes in creating
              compelling event media that transforms special occasions into
              lasting memories through innovative technology and creative vision.
            </p>
          </section>
            
          <section className="max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
              Featured Event Projects
            </h2>
            <PortfolioGallery category="Event" showFilters={false} />
          </section>
        </article>
      </Container>
    </MainLayout>
  );
}