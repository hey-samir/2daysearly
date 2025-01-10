import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Mission from "@/components/sections/mission";
import Principles from "@/components/sections/principles";
import Portfolio from "@/components/sections/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Mission />
        <Principles />
        <Portfolio />
      </main>
    </div>
  );
}
