
import { memo } from "react";
import AnimatedSection from "@/components/ui/animated-section";
import Image from "@/components/ui/image";

interface PartnerCardProps {
  name: string;
  bio: string;
  image: string;
}

const PartnerCard = memo(({ name, bio, image }: PartnerCardProps) => (
  <div className="flex flex-col items-center space-y-4 p-6">
    <div className="w-48 h-48 rounded-full bg-white p-2 shadow-lg">
      <Image
        src={image}
        alt={`${name}'s portrait`}
        className="w-full h-full rounded-full object-contain"
        fallbackSrc="/images/2-days-early-logo-2025.png"
      />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{name}</h3>
    <p className="text-gray-700 dark:text-gray-300 text-center max-w-sm">{bio}</p>
  </div>
));

const partners = [
  {
    name: "Maia",
    bio: "Maia builds cool fintech stuff at Chime (after they acquired her credit-building startup Pinch). Previously turned jewelry rental into an empire at Rocksbox (also acquired). Now backs other founders at XFactor & Parcel B while nerding out on fintech. Probably thinking about ramen right now.",
    image: "/images/maia.png"
  },
  {
    name: "Baishi",
    bio: "At Chime, Baishi shapes lending products that help millions get the credit they deserve. Previously built tech to revolutionize mortgages at LendingHome and reimagined home search at Compass. Now building surprisingly great financial features while raising surprisingly great tiny humans.",
    image: "/images/baishi.png"
  },
  {
    name: "Samir",
    bio: "Finance nerd turned fintech builder, Samir leads Financial Partnerships at Cash App, expanding money superpowers for millions. Previously shaped strategic finance at HRT, Unit, and Chime, after getting his start wrangling spreadsheets at JP Morgan. Writes over-engineered fintech takes and is learning to code at the speed of thought with Replit.",
    image: "/images/samir-desai-min.png"
  }
];

const Partners = () => {
  return (
    <section 
      id="partners" 
      className="py-8 md:py-12 bg-white dark:bg-primary/10"
      aria-labelledby="partners-heading"
    >
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          id="partners-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center"
        >
          Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} {...partner} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default memo(Partners);
