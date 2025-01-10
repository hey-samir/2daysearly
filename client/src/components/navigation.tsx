import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state
      setIsScrolled(window.scrollY > 10);

      // Calculate scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex justify-end items-center gap-6 w-full">
              <a href="#hero" className="text-gray-700 hover:text-primary">Home</a>
              <a href="#mission" className="text-gray-700 hover:text-primary">Mission</a>
              <a href="#principles" className="text-gray-700 hover:text-primary">Principles</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary">Portfolio</a>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="h-0.5 bg-gray-100">
          <div
            className="h-full bg-primary transition-all duration-200"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Mobile menu panel */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#hero" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#mission" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100" onClick={() => setIsOpen(false)}>Mission</a>
            <a href="#principles" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100" onClick={() => setIsOpen(false)}>Principles</a>
            <a href="#portfolio" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100" onClick={() => setIsOpen(false)}>Portfolio</a>
          </div>
        </div>
      </nav>
    </>
  );
}