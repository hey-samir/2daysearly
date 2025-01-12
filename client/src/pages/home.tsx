import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Purpose from "@/components/sections/purpose";
import Principles from "@/components/sections/principles";
import Portfolio from "@/components/sections/portfolio";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
    >
      <Navigation />
      <div className="w-full">
        <Hero />
        <Purpose />
        <Principles />
        <Portfolio />
      </div>
      <footer className="w-full text-center py-8 text-sm bg-background">
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          *To build the best community we can for our members, we're limiting access to current and former Chime employees only at this time
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          © <a href="https://www.samir.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/90 underline">Interspace Labs</a> 2025. Built with <a href="https://www.replit.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/90 underline">Replit AI</a> at the speed of thought
        </p>
      </footer>
    </motion.div>
  );
}