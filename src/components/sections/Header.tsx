import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";

export default function Header(): JSX.Element {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <Container>
        <div className="flex items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/Miovox-light-transparent.png"
              alt="Miovox"
              width={200}
              height={50}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>
      </Container>
    </header>
  );
}