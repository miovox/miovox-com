export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-900 py-8 text-center text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="/about"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>
          <p className="text-gray-400 text-sm">© 2025 Miovox LLC</p>
        </div>
      </div>
    </footer>
  );
}
