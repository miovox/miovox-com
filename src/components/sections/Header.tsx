'use client'

import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header(): JSX.Element {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Use light logo as fallback during hydration
  const logoSrc = mounted 
    ? (resolvedTheme === 'dark' 
        ? "/Miovox-dark-transparent.png" 
        : "/Miovox-light-transparent.png")
    : "/Miovox-light-transparent.png"

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt="Miovox"
              width={200}
              height={50}
              className="h-8 w-auto transition-opacity duration-300"
              priority
            />
          </Link>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}