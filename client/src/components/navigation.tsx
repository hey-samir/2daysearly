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
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>

            {/* Desktop menu */}
            <div 
              className="hidden md:flex justify-end items-center gap-6 w-full"
              role="menubar"
              aria-label="Desktop navigation"
            >
              <a href="#hero" className="text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1" role="menuitem">Home</a>
              <a href="#mission" className="text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1" role="menuitem">Mission</a>
              <a href="#principles" className="text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1" role="menuitem">Principles</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1" role="menuitem">Portfolio</a>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div 
          className="h-0.5 bg-gray-100"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(scrollProgress)}
          aria-label="Page scroll progress"
        >
          <div
            className="h-full bg-primary transition-all duration-200"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Mobile menu panel */}
        <div 
          id="mobile-menu"
          className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}
          role="menu"
          aria-label="Mobile navigation"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#hero" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary" role="menuitem" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#mission" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary" role="menuitem" onClick={() => setIsOpen(false)}>Mission</a>
            <a href="#principles" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary" role="menuitem" onClick={() => setIsOpen(false)}>Principles</a>
            <a href="#portfolio" className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary" role="menuitem" onClick={() => setIsOpen(false)}>Portfolio</a>
          </div>
        </div>
      </nav>
    </>
  );
}