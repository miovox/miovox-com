import Link from "next/link";
import BrainCircuit from "../icons/BrainCircuit";
import Home from "../icons/Home";
import Camera from "../icons/Camera";

export default function BrandPortal(): JSX.Element {
  return (
    <section className="bg-gray-900 text-white">
      <div>
        <div className="space-y-0">
          {/* AI Product Development */}
          <Link href="/product" className="group block">
            <div className="bg-miovox-blue-50 hover:bg-miovox-blue-100 transition-all duration-500 ease-out py-12 md:py-16">
              <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-gray-900 transition-all duration-300 group-hover:scale-110">
                  <BrainCircuit className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                      AI Product Development
                    </h3>
                    <h4 className="text-xl md:text-2xl text-gray-600 font-medium">
                      Crafting Tools
                    </h4>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                    Fusing world-class user experiences with cutting-edge AI
                    technologies to bring your vision to life.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Home Tech Solutions */}
          <Link href="/home" className="group block">
            <div className="bg-miovox-blue-100 hover:bg-miovox-blue-200 transition-all duration-500 ease-out py-12 md:py-16 border-y border-gray-800">
              <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-gray-900 transition-all duration-300 group-hover:scale-110">
                  <Home className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                      Home Tech Solutions
                    </h3>
                    <h4 className="text-xl md:text-2xl text-gray-600 font-medium">
                      Crafting Lifestyles
                    </h4>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                    Transforming your home with expertly designed technology
                    systems that enhance daily life.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Event Memories */}
          <Link href="#" className="group block">
            <div className="bg-miovox-blue-200 hover:bg-miovox-blue-300 transition-all duration-500 ease-out py-12 md:py-16">
              <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-gray-900 transition-all duration-300 group-hover:scale-110">
                  <Camera className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                      Event Media Production
                    </h3>
                    <h4 className="text-xl md:text-2xl text-gray-600 font-medium">
                      Crafting Memories
                    </h4>
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                    Capturing moments with a keen approach to storytelling and
                    memory preservation.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
