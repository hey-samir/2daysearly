import { useEffect, useState } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end h-16 items-center gap-6">
          <a href="#hero" className="text-gray-700 hover:text-primary">Home</a>
          <a href="#mission" className="text-gray-700 hover:text-primary">Mission</a>
          <a href="#principles" className="text-gray-700 hover:text-primary">Principles</a>
          <a href="#portfolio" className="text-gray-700 hover:text-primary">Portfolio</a>
        </div>
      </div>
    </nav>
  );
}
