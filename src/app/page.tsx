import MainLayout from "../components/ui/MainLayout";
import Hero from "../components/sections/Hero";
import BrandPortal from "../components/features/BrandPortal";

export default function Home(): JSX.Element {
  return (
    <MainLayout>
      <Hero />
      <BrandPortal />
    </MainLayout>
  );
}