import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-24 md:pt-20 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimatedSection className="text-center lg:text-left" delay={0.2}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              2 days early
            </h1>
            <div className="mt-8">
              <img 
                src="/2 Days Early Logo 2025.png" 
                alt="2 days early logo"
                className="w-64 h-auto mx-auto lg:mx-0"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}