import Footer from "../sections/Footer";
import Header from "../sections/Header";

interface MainLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export default function MainLayout({ children, showHeader = true, showFooter = true }: MainLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header />}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}