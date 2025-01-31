import AnimatedSection from "@/components/ui/animated-section";
import Image from "@/components/ui/image";
import { IMAGES } from "@/lib/constants";

export default function Portfolio() {
  return (
    <section 
      id="portfolio" 
      className="min-h-[50vh] py-[5vh] md:py-[8vh] bg-gray-50 dark:bg-primary/5"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 
            id="portfolio-heading" 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-[4vh] md:mb-[6vh]"
          >
            We're proud to invest our time and money in operators at these startups:
          </h2>
        </AnimatedSection>
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-[3vh] md:gap-[4vh] max-w-4xl mx-auto"
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
              name: "Harper",
              href: "https://www.harperinsure.com/",
              description: "Modern insurance platform enabling embedded insurance experiences for innovative businesses.",
              logo: IMAGES.companies.harper
            },
            {
              name: "Kartera",
              href: "https://www.kartera.com",
              description: "Empowering financial advisors with digital-first solutions to serve the next generation of wealth.",
              logo: IMAGES.companies.kartera
            },
            {
              name: "Sundae",
              href: "https://www.sundae.com",
              description: "Marketplace connecting homeowners looking to sell with property investors for fair, off-market deals.",
              logo: IMAGES.companies.sundae
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
              className="group relative aspect-[3/1.5] bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              role="listitem"
            >
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-white rounded-lg">
                <div className="w-full h-full relative">
                  <Image 
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-full max-w-full w-[90%] object-contain" 
                    fallbackSrc={IMAGES.companies.placeholder}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center p-6">
                <p className="text-white text-center text-sm font-medium">
                  {company.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}