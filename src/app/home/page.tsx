import { Metadata } from "next";
import MainLayout from "@/components/ui/MainLayout";
import Container from "@/components/ui/Container";
import PortfolioGallery from "@/components/features/PortfolioGallery";

export const metadata: Metadata = {
  title: "Home Tech Solutions | Miovox",
  description: "Transforming your home with expertly designed technology systems that enhance daily life.",
};

export default function HomePage(): JSX.Element {
  return (
    <MainLayout>
      <Container>
        <article className="py-16 md:py-24">
          <header className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Home Tech Solutions
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium" role="doc-subtitle">
              Crafting Lifestyles
            </p>
          </header>
          
          <section className="max-w-4xl mx-auto text-center mt-8">
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
              Transforming your home with expertly designed technology systems 
              that enhance daily life. Our innovative solutions focus on smart 
              home automation, energy efficiency, and lifestyle enhancement to 
              create the perfect connected living environment.
            </p>
          </section>
            
          <aside className="max-w-4xl mx-auto mt-12">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                Featured Homes
              </h2>
              <PortfolioGallery category="Home" showFilters={false} />
            </section>
          </aside>
        </article>
      </Container>
    </MainLayout>
  );
}