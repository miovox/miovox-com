import MainLayout from "../components/ui/MainLayout";
import Hero from "../components/sections/Hero";
import ServiceNavigation from "../components/features/ServiceNavigation";

export default function Home(): JSX.Element {
  return (
    <MainLayout showHeader={false} showFooter={false}>
      <div className="min-h-screen h-screen flex flex-col overflow-hidden">
        {/* Hero section - Responsive heights */}
        <div className="h-[60vh] md:h-[65vh] xl:h-[70vh] flex-shrink-0">
          <Hero />
        </div>
        
        {/* Service Navigation - Responsive heights */}
        <div className="flex-shrink-0">
          <ServiceNavigation variant="homepage" />
        </div>
      </div>
    </MainLayout>
  );
}