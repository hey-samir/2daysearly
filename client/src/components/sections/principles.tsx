import { memo } from "react";
import AnimatedSection from "@/components/ui/animated-section";

interface PrincipleItemProps {
  number: number;
  text: string;
}

const PrincipleItem = memo(({ number, text }: PrincipleItemProps) => (
  <div className="flex gap-4">
    <span className="text-primary font-bold text-xl" aria-hidden="true">
      {number}.
    </span>
    <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">
      {text}
    </p>
  </div>
));

PrincipleItem.displayName = "PrincipleItem";

const principles = [
  {
    number: 1,
    text: "We recognize the value of profiting with users, rather than from them",
  },
  {
    number: 2,
    text: "We invest in businesses that create high member loyalty and earn trust",
  },
  {
    number: 3,
    text: "We believe in doing well by doing good with transparent and sustainable operating models",
  },
];

const Principles = () => {
  return (
    <section 
      id="principles" 
      className="py-8 md:py-12 bg-white dark:bg-primary/10"
      aria-labelledby="principles-heading"
    >
      <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <h2 
          id="principles-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8"
        >
          Operating Principles
        </h2>
        <div className="space-y-6">
          {principles.map((principle) => (
            <PrincipleItem
              key={principle.number}
              number={principle.number}
              text={principle.text}
            />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default memo(Principles);