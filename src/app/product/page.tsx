import { Metadata } from "next";
import MainLayout from "@/components/ui/MainLayout";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "AI Product Development | Miovox",
  description: "Fusing world-class user experiences with cutting-edge AI technologies to bring your vision to life.",
};

export default function ProductPage(): JSX.Element {
  return (
    <MainLayout>
      <Container>
        <article className="py-16 md:py-24">
          <header className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              AI Product Development
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-medium" role="doc-subtitle">
              Crafting Tools
            </p>
          </header>
          
          <section className="max-w-4xl mx-auto text-center mt-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Fusing world-class user experiences with cutting-edge AI
              technologies to bring your vision to life. Our expert team
              specializes in creating innovative AI-powered products that
              transform ideas into reality.
            </p>
          </section>
            
          <aside className="max-w-4xl mx-auto mt-12">
            <div className="p-8 bg-gray-50 rounded-lg text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-600">
                Detailed service information and portfolio examples will be
                available here soon.
              </p>
            </div>
          </aside>
        </article>
      </Container>
    </MainLayout>
  );
}