import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-24 md:pt-20 pb-16 bg-background">
      <div className="container flex justify-center">
        <AnimatedSection className="text-center w-full max-w-3xl" delay={0.2}>
          <div className="mt-8">
            <img 
              src="/calendar-logo.png"
              alt="2 days early logo"
              className="w-full h-auto max-w-[500px] mx-auto"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}