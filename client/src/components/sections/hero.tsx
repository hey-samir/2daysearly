import { ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import Image from "@/components/ui/image";
import { IMAGES } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="hero" className="w-full flex items-center justify-center bg-white pt-24 pb-8"> {/* Changed background to white */}
      <div className="container">
        <AnimatedSection className="text-center w-full max-w-3xl mx-auto" delay={0.2}>
          <div>
            <Image 
              src={IMAGES.banner.src}
              alt="2 days early logo"
              className="w-full h-auto max-w-[500px] mx-auto"
              fallbackSrc={IMAGES.banner.fallback}
              onLoad={() => console.log('Banner image loaded successfully')}
              onError={(e) => console.error('Error loading banner image:', e)}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}