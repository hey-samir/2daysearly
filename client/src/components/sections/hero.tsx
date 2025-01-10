import { Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold text-gray-900">
            2 days early
          </h1>
          <h2 className="mt-4 text-3xl font-semibold text-gray-700">
            By operators. For operators.
          </h2>
          <div className="mt-8 flex gap-4">
            <a href="#pitch" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90">
              PITCH
            </a>
            <a href="#join" className="bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-200">
              JOIN*
            </a>
            <a href="#learn" className="bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-200">
              LEARN
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <Building2 className="w-64 h-64 text-primary" />
        </div>
      </div>
    </section>
  );
}
