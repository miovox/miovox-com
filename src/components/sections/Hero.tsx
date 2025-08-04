import Image from "next/image";
import ChevronDown from "../icons/ChevronDown";

export default function Hero(): JSX.Element {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Logo and Tagline Container */}
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Logo Image */}
        <div className="w-full max-w-2xl md:max-w-4xl lg:max-w-5xl h-auto mx-auto">
          <Image
            src="/Miovox-dark-transparent.png"
            alt="Miovox"
            width={800}
            height={200}
            className="w-full max-w-2xl md:max-w-4xl lg:max-w-5xl h-auto"
            priority
          />
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 max-w-2xl mx-auto">
          Crafting tools, memories, and lifestyles.
        </p>
      </div>

      {/* Animated Down Arrow */}
      <div className="absolute bottom-8 flex flex-col items-center justify-center space-y-2 animate-bounce">
        <p className="text-gray-500 text-xs uppercase tracking-widest text-center">
          Studios
        </p>
        <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
      </div>
    </section>
  );
}
