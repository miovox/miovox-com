import Footer from "../sections/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen">
      {children}
      <Footer />
    </div>
  );
}