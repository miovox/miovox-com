import { Metadata } from "next";
import MainLayout from "@/components/ui/MainLayout";
import Container from "@/components/ui/Container";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export const metadata: Metadata = {
  title: "About Philip Jones | Miovox",
  description: "Meet Philip Jones - the creative force behind Miovox. AI product development, event media production, and home tech solutions.",
};

export default function AboutPage(): JSX.Element {
  return (
    <MainLayout>
      <Container>
        <article className="py-16 md:py-24">
          <header className="max-w-4xl mx-auto text-center space-y-6">
            <div className="mb-8 flex justify-center">
              <ServiceIcon
                service="about"
                size="xxlarge"
                className="w-24 h-24 md:w-32 md:h-32"
                priority={true}
                alt="Philip Jones"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              About Philip
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium" role="doc-subtitle">
              It&apos;s This Guy
            </p>
          </header>
          
          <section className="max-w-4xl mx-auto text-center mt-12 space-y-8">
            <div className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto space-y-6">
              <p>
                Hey there! I&apos;m Philip Jones, and I&apos;m the person behind Miovox. 
                While the company name might sound corporate, the reality is much more personal - 
                it&apos;s really just me, crafting solutions that matter.
              </p>
              
              <p>
                I wear many hats: AI product developer, event media producer, and home tech enthusiast. 
                What ties it all together? A passion for creating tools, memories, and lifestyles 
                that make life better.
              </p>
              
              <p>
                Whether I&apos;m building AI-powered products that solve real problems, 
                capturing your most important moments through video and photography, 
                or setting up smart home systems that just work - it&apos;s all about 
                bringing that personal touch to technology.
              </p>
              
              <p className="text-xl md:text-2xl font-semibold text-primary mt-8">
                Let&apos;s create something amazing together.
              </p>
            </div>
          </section>
            
          <section className="max-w-4xl mx-auto mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              What I Do
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <ServiceIcon
                  service="products"
                  size="large"
                  className="mx-auto"
                />
                <h3 className="text-xl font-semibold text-foreground">Products</h3>
                <p className="text-muted-foreground">
                  AI-powered tools that solve real problems with elegant user experiences.
                </p>
              </div>
              <div className="space-y-4">
                <ServiceIcon
                  service="events"
                  size="large"
                  className="mx-auto"
                />
                <h3 className="text-xl font-semibold text-foreground">Events</h3>
                <p className="text-muted-foreground">
                  Capturing life&apos;s most important moments through professional video and photography.
                </p>
              </div>
              <div className="space-y-4">
                <ServiceIcon
                  service="home-tech"
                  size="large"
                  className="mx-auto"
                />
                <h3 className="text-xl font-semibold text-foreground">Home Tech</h3>
                <p className="text-muted-foreground">
                  Smart home solutions that enhance your lifestyle without the complexity.
                </p>
              </div>
            </div>
          </section>
        </article>
      </Container>
    </MainLayout>
  );
}