import { Building2 } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 md:pt-20 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <AnimatedSection className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            2 days early
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700">
            By operators. For operators.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#pitch" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 w-full sm:w-auto text-center">
              PITCH
            </a>
            <a href="#join" className="bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-200 w-full sm:w-auto text-center">
              JOIN*
            </a>
            <a href="#learn" className="bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-200 w-full sm:w-auto text-center">
              LEARN
            </a>
          </div>
        </AnimatedSection>
        <AnimatedSection className="flex justify-center">
          <Building2 className="w-48 h-48 md:w-64 md:h-64 text-primary" />
        </AnimatedSection>
      </div>
    </section>
  );
}