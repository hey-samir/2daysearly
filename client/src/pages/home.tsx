import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Mission from "@/components/sections/mission";
import Principles from "@/components/sections/principles";
import Portfolio from "@/components/sections/portfolio";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Mission />
        <Principles />
        <Portfolio />
      </main>
    </motion.div>
  );
}