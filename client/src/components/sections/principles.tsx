
import AnimatedSection from "@/components/ui/animated-section";

export default function Principles() {
  return (
    <section id="principles" className="py-8 md:py-12">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Operating Principles
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="text-primary font-bold text-xl">1.</span>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">
              We recognize the value of profiting with users, rather than from them
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-primary font-bold text-xl">2.</span>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">
              We invest in businesses that create high member loyalty and earn trust
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-primary font-bold text-xl">3.</span>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">
              We believe in doing well by doing good with transparent and sustainable operating models
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
