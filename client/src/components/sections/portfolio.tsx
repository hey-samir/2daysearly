import AnimatedSection from "@/components/ui/animated-section";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          We're proud to invest our time and money in operators at these startups:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <div className="relative p-8 border border-gray-100 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900">JUNO</h3>
              <p className="mt-4 text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                Revolutionizing financial technology with innovative solutions.
              </p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a href="#" className="text-primary font-medium hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
          </div>

          <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <div className="relative p-8 border border-gray-100 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900">waldo</h3>
              <p className="mt-4 text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                Building the future of digital finance accessibility.
              </p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a href="#" className="text-primary font-medium hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm text-gray-600">
          *To build the best community we can for our members, we're limiting access to current and former Chime employees only at this time
        </p>
      </AnimatedSection>
    </section>
  );
}