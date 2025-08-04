import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miovox",
  description: "AI-powered voice solutions platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}