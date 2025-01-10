import AnimatedSection from "@/components/ui/animated-section";
import Image from "@/components/ui/image";

export default function Portfolio() {
  return (
    <section 
      id="portfolio" 
      className="py-16"
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
          <div 
            className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            role="listitem"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" aria-hidden="true" />
            <div className="relative p-8 border border-gray-100 dark:border-gray-700 rounded-lg">
              <div className="h-12 flex items-center justify-center mb-4">
                <Image 
                  src="./Juno.png"
                  alt="JUNO logo"
                  className="h-8 object-contain"
                />
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                Revolutionizing financial technology with innovative solutions.
              </p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a 
                  href="#" 
                  className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1 inline-block"
                  aria-label="Learn more about JUNO"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>

          <div 
            className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            role="listitem"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" aria-hidden="true" />
            <div className="relative p-8 border border-gray-100 dark:border-gray-700 rounded-lg">
              <div className="h-12 flex items-center justify-center mb-4">
                <Image 
                  src="./Waldo.png"
                  alt="waldo logo"
                  className="h-8 object-contain"
                />
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                Building the future of digital finance accessibility.
              </p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a 
                  href="#" 
                  className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1 inline-block"
                  aria-label="Learn more about waldo"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>

          <div 
            className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            role="listitem"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" aria-hidden="true" />
            <div className="relative p-8 border border-gray-100 dark:border-gray-700 rounded-lg">
              <div className="h-12 flex items-center justify-center mb-4">
                <Image 
                  src="./Backpack.png"
                  alt="Backpack logo"
                  className="h-8 object-contain"
                />
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                Empowering the next generation of financial services.
              </p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a 
                  href="#" 
                  className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1 inline-block"
                  aria-label="Learn more about Backpack"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          *To build the best community we can for our members, we're limiting access to current and former Chime employees only at this time
        </p>
      </AnimatedSection>
    </section>
  );
}