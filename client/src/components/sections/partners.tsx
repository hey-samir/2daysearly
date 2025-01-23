import { memo } from "react";
import AnimatedSection from "@/components/ui/animated-section";
import Image from "@/components/ui/image";

interface PartnerCardProps {
  name: string;
  bio: string;
  image: string;
  imageClassName?: string;
}

const PartnerCard = memo(({ name, bio, image, imageClassName }: PartnerCardProps) => (
  <div className="flex flex-col items-center space-y-4 p-6">
    <div className="w-48 h-48 rounded-full overflow-hidden bg-white shadow-lg">
      <Image
        src={image}
        alt={`${name}'s portrait`}
        className={`w-full h-full object-cover ${imageClassName || ''}`}
        fallbackSrc="/images/2-days-early-logo-2025.png"
      />
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center">{name}</h3>
    <p className="text-gray-700 dark:text-gray-300 text-left text-sm max-w-sm">{bio}</p>
  </div>
));

const partners = [
  {
    name: "Maia",
    bio: <>Builds cool fintech stuff at Chime (after they acquired her credit-building startup Pinch). Previously founded Rocksbox (also acquired). Now backs founders at XFactor & Parcel B. Probably sharing <a href="https://x.com/maiab" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/90 underline">tmi tweets</a> about raising her two amazing daughers.</>,
    image: "/images/Maia.png"
  },
  {
    name: "Baishi",
    bio: "At Chime, shapes lending products helping millions get the credit they deserve. Previously revolutionized mortgages at LendingHome and home search at Compass. Building great fintech while raising tiny humans.",
    image: "/images/Baishi.png"
  },
  {
    name: "Samir",
    bio: <>Finance nerd building money superpowers at Cash App. Previously shaped Strategic Finance at HRT, Unit, and Chime after starting at JP Morgan. Writes <a href="https://interspace.samir.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/90 underline">over-engineered fintech takes</a> and is learning to code at the speed of thought with Replit.</>,
    image: "/images/Samir-Desai-min.png",
    imageClassName: "scale-[0.8]"
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
          Partners
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