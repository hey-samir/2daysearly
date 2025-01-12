import { Building2, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import Image from "@/components/ui/image";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 md:pt-20 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <AnimatedSection className="text-center lg:text-left" delay={0.2}>
          <div className="mb-8">
            <Image 
              src="/2 Days Early Logo 2025.png" 
              alt="2 days early logo"
              className="w-64 h-auto mx-auto lg:mx-0"
            />
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            By operators. For operators.
          </h2>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            *To build the best community we can for our members, we're limiting access to current and former Chime employees only at this time
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}