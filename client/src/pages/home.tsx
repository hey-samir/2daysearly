import { memo } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Purpose from "@/components/sections/purpose";
import Principles from "@/components/sections/principles";
import Portfolio from "@/components/sections/portfolio";
import Partners from "@/components/sections/partners";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import PageTransition from "@/components/ui/page-transition";

const MemoizedNavigation = memo(Navigation);
const MemoizedHero = memo(Hero);
const MemoizedPurpose = memo(Purpose);
const MemoizedPrinciples = memo(Principles);
const MemoizedPartners = memo(Partners);
const MemoizedPortfolio = memo(Portfolio);

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-background"
        >
          <MemoizedNavigation />
          <main className="w-full">
            <MemoizedHero />
            <MemoizedPurpose />
            <MemoizedPrinciples />
            <MemoizedPartners />
            <MemoizedPortfolio />
          </main>
          <footer className="w-full text-center py-8 text-sm bg-background">
            <motion.p 
              className="text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              © <a href="https://www.samir.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/90 underline transition-colors duration-200">Interspace Labs</a> 2025. Built with <a href="https://www.replit.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/90 underline transition-colors duration-200">Replit AI</a> at the speed of thought
            </motion.p>
          </footer>
        </motion.div>
      </PageTransition>
    </LazyMotion>
  );
}