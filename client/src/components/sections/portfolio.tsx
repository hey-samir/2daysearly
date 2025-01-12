import AnimatedSection from "@/components/ui/animated-section";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <section 
      id="portfolio" 
      className="py-8 md:py-12 bg-gray-50 dark:bg-primary/5"
      aria-labelledby="portfolio-heading"
    >
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 
            id="portfolio-heading" 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8"
          >
            We're proud to invest our time and money in operators at these startups:
          </h2>
        </div>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          role="list"
          aria-label="Portfolio companies"
        >
          <a 
            href="https://www.backpack529.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-64"
            role="listitem"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center p-8">
              <p className="text-white text-center text-lg font-medium">
                Simplifying 529 plan management for families and advisors with innovative payment solutions.
              </p>
            </div>
            <div className="h-full p-8 flex items-center justify-center">
              <img 
                src="./Backpack.png"
                alt="Backpack logo"
                className="w-full h-full object-contain"
              />
            </div>
          </a>

          <a 
            href="https://juno.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-64"
            role="listitem"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center p-8">
              <p className="text-white text-center text-lg font-medium">
                Modern banking for the crypto-native, with seamless on-ramps and a focus on user experience.
              </p>
            </div>
            <div className="h-full p-8 flex items-center justify-center">
              <img 
                src="./Juno.png"
                alt="JUNO logo"
                className="w-full h-full object-contain"
              />
            </div>
          </a>

          <a 
            href="https://www.waldo.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-64"
            role="listitem"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center p-8">
              <p className="text-white text-center text-lg font-medium">
                AI-powered fraud prevention that automates compliance and keeps your business safe.
              </p>
            </div>
            <div className="h-full p-8 flex items-center justify-center">
              <img 
                src="./Waldo.png"
                alt="waldo logo"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}