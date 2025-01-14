import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import Image from "@/components/ui/image";
import { IMAGES } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-24 md:pt-20 pb-16 bg-background">
      <div className="container flex justify-center">
        <AnimatedSection className="text-center w-full max-w-3xl" delay={0.2}>
          <div className="mt-8">
            <Image 
              src={IMAGES.banner.src}
              alt="2 days early logo"
              className="w-full h-auto max-w-[500px] mx-auto"
              fallbackSrc={IMAGES.banner.fallback}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}