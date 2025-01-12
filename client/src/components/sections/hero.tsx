import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-24 md:pt-20 pb-16 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimatedSection className="text-center lg:text-left w-full" delay={0.2}>
            <div className="mt-8 max-w-full">
              <img 
                src="2 Days Early Logo 2025 vF.png" 
                alt="2 days early logo"
                className="w-full h-auto max-w-[700px] mx-auto lg:mx-0"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}