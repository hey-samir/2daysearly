
import AnimatedSection from "@/components/ui/animated-section";
import Image from "@/components/ui/image";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <section 
      id="portfolio" 
      className="py-8 md:py-12 bg-gray-50 dark:bg-primary/5"
      aria-labelledby="portfolio-heading"
    >
      <AnimatedSection>
        <h2 
          id="portfolio-heading" 
          className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8"
        >
          We're proud to invest our time and money in operators at these startups:
        </h2>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Portfolio companies"
        >
          <a 
            href="https://www.backpack529.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-64"
            role="listitem"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center p-8">
              <p className="text-white text-center text-lg font-medium">
                Making college savings simple and accessible for every family.
              </p>
            </div>
            <div className="h-full p-8 flex items-center justify-center">
              <Image 
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
            className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-64 inline-flex items-center gap-1"
            role="listitem"
          >
            <ExternalLink className="h-4 w-4 absolute top-4 right-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center p-8">
              <p className="text-white text-center text-lg font-medium">
                AI-powered finance teams for modern businesses.
              </p>
            </div>
            <div className="h-full p-8 flex items-center justify-center">
              <Image 
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
            className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-64"
            role="listitem"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center p-8">
              <p className="text-white text-center text-lg font-medium">
                Simple and reliable automated testing for mobile engineering teams.
              </p>
            </div>
            <div className="h-full p-8 flex items-center justify-center">
              <Image 
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
