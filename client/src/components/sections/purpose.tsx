import { memo } from "react";
import AnimatedSection from "@/components/ui/animated-section";

const Purpose = () => {
  return (
    <section 
      id="purpose" 
      className="py-8 md:py-12 bg-gray-50 dark:bg-primary/5"
      aria-labelledby="purpose-heading"
    >
      <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <h2 
          id="purpose-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8"
        >
          By operators. For operators.
        </h2>
        <div className="space-y-4 md:space-y-6">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We are a community of{" "}
            <strong className="bg-primary/20">
              entrepreneurs, investors and operators
            </strong>
            . We have backgrounds in growth, product, engineering, operations, finance, analytics and more, determined to helping startups succeed like we did at Chime.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We aim to be the operator syndicate with{" "}
            <strong className="bg-primary/20">
              highest value per dollar invested.
            </strong>{" "}
            Companies we invest in get access to our experience network, and our commitment to empower impactful firms that provide better options for everyday people.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We love investing in amazing founders of all backgrounds, and we&apos;re especially committed to{" "}
            <strong className="bg-primary/20">
              invest in future companies founded by Chime alumni.
            </strong>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white dark:bg-primary/10 p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Chime operators in 2 Days Early syndicate</div>
          </div>
          <div className="bg-white dark:bg-primary/10 p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-2">40%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Have experience hyperscaling startups from 0 - 100</div>
          </div>
          <div className="bg-white dark:bg-primary/10 p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-2">73%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Have Product & Eng expertise</div>
          </div>
          <div className="bg-white dark:bg-primary/10 p-6 rounded-lg shadow-sm text-center">
            <div className="text-3xl font-bold text-primary mb-2">$2.5M</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">investing capacity each year</div>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-8 text-center italic">
          *To build the best community we can for our members, we&apos;re limiting access to current and former Chime employees only at this time
        </p>
      </AnimatedSection>
    </section>
  );
};

export default memo(Purpose);