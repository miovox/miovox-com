"use client";

import Image from "next/image";

export default function Hero(): JSX.Element {
  return (
    <section className="bg-gray-900 text-white h-full flex flex-col items-center justify-center px-6">
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
    </section>
  );
}
