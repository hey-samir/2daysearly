import { Building2, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import Image from "@/components/ui/image";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 md:pt-20 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <AnimatedSection className="text-center lg:text-left" delay={0.2}>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100">
            2 days early
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            By operators. For operators.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="mailto:pitch@daysearly.com" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 w-full sm:w-auto text-center inline-flex items-center gap-2">
              PITCH <ExternalLink className="h-4 w-4" />
            </a>
            <a href="https://tally.so/r/nP1v8e" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 px-6 py-3 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-700 w-full sm:w-auto text-center inline-flex items-center gap-2">
              JOIN* <ExternalLink className="h-4 w-4" />
            </a>
            <a href="https://interspace.samir.xyz/p/101-everything-you-wanted-to-know" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 px-6 py-3 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-700 w-full sm:w-auto text-center inline-flex items-center gap-2">
              LEARN <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            *To build the best community we can for our members, we're limiting access to current and former Chime employees only at this time
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}