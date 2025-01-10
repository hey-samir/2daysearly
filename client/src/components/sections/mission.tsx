
import AnimatedSection from "@/components/ui/animated-section";

export default function Mission() {
  return (
    <section id="mission" className="py-8 md:py-12 bg-gray-50 dark:bg-primary/5">
      <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          We are a community of <strong>entrepreneurs, investors and operators</strong>. We have backgrounds in growth, product, engineering, operations, finance, analytics and more, determined to helping startups succeed like we did at Chime.
        </p>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          We aim to be the operator syndicate with <strong>highest value per dollar invested</strong>. Companies we invest in get access to our experience network, and our commitment to empower impactful firms that provide better options for everyday people.
        </p>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          We love investing in amazing founders of all backgrounds, and we're especially committed to <strong>invest in future companies founded by Chime alumni</strong>.
        </p>
      </AnimatedSection>
    </section>
  );
}
