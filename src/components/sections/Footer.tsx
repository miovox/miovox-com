import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 py-8 text-center text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
          <p className="text-gray-400 text-sm">© 2025 Miovox LLC</p>
        </div>
      </div>
    </footer>
  );
}
