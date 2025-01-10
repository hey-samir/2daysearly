import AnimatedSection from "@/components/ui/animated-section";

export default function Principles() {
  return (
    <section id="principles" className="py-16">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Operating Principles
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="text-primary font-bold">1.</span>
            <p className="text-lg text-gray-700">
              We recognize the value of profiting with users, rather than from them
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-primary font-bold">2.</span>
            <p className="text-lg text-gray-700">
              We invest in businesses that create high member loyalty and earn trust
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-primary font-bold">3.</span>
            <p className="text-lg text-gray-700">
              We believe in doing well by doing good with transparent and sustainable operating models
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}