import AnimatedSection from "@/components/ui/animated-section";
import { ExternalLink } from "lucide-react";
import Image from "@/components/ui/image";
import { IMAGES } from "@/lib/constants";

export default function Portfolio() {
  return (
    <section 
      id="portfolio" 
      className="py-8 md:py-12 bg-gray-50 dark:bg-primary/5"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 
            id="portfolio-heading" 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8"
          >
            We're proud to invest our time and money in operators at these startups:
          </h2>
        </AnimatedSection>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          role="list"
          aria-label="Portfolio companies"
        >
          {[
            {
              name: "Backpack",
              href: "https://www.backpack529.com/",
              description: "Simplifying 529 plan management for families and advisors with innovative payment solutions.",
              logo: IMAGES.companies.backpack
            },
            {
              name: "JUNO",
              href: "https://juno.finance/",
              description: "Modern banking for the crypto-native, with seamless on-ramps and a focus on user experience.",
              logo: IMAGES.companies.juno
            },
            {
              name: "Waldo",
              href: "https://www.waldo.ai/",
              description: "AI-powered fraud prevention that automates compliance and keeps your business safe.",
              logo: IMAGES.companies.waldo
            }
          ].map((company) => (
            <a 
              key={company.name}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center h-32"
              role="listitem"
            >
              <Image 
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-auto h-auto max-w-[160px] max-h-12 object-contain" 
                fallbackSrc={IMAGES.companies.placeholder}
                onLoad={() => console.log(`${company.name} image loaded`)}
                onError={() => console.error(`Error loading ${company.name} image`)}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="h-full w-full flex items-center justify-center p-4">
                  <p className="text-white text-center text-sm font-medium">
                    {company.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}