import { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react"; // Added ExternalLink import
import Image from "@/components/ui/image";
import ThemeToggle from "@/components/ui/theme-toggle";
import { scrollToElement, getActiveSection } from "@/lib/scroll";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      setActiveSection(getActiveSection());
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToElement(sectionId);
    setIsOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'mission', label: 'Mission' },
    { id: 'principles', label: 'Principles' },
    { id: 'portfolio', label: 'Portfolio' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
        } rounded-full`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <img 
              src="/2 Days Early Logo 2025.png" 
              alt="2 days early logo"
              className="w-32 h-auto object-contain"
            />
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
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
              {navItems.map(({ id, label }) => (
                <>
                  <a
                    key={id}
                    href={`#${id}`} 
                    onClick={(e) => handleNavClick(e, id)} 
                    className={`text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1 transition-colors duration-200 inline-flex items-center gap-1 ${
                      activeSection === id ? 'text-primary dark:text-primary font-medium' : ''
                    }`}
                    role="menuitem"
                    aria-current={activeSection === id ? 'page' : undefined}
                  >
                    {label}
                  </a>
                  {id !== 'join' && (
                    <div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
                  )}
                </>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div 
          className="h-0.5 bg-gray-100 dark:bg-gray-800 mx-6 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(scrollProgress)}
          aria-label="Page scroll progress"
        >
          <div
            className="h-full bg-primary transition-all duration-200 rounded-full"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Mobile menu panel */}
        <div 
          id="mobile-menu"
          className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900 shadow-lg`}
          role="menu"
          aria-label="Mobile navigation"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`} 
                onClick={(e) => handleNavClick(e, id)} 
                className={`block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 inline-flex items-center gap-1 ${
                  activeSection === id ? 'text-primary dark:text-primary font-medium' : ''
                }`}
                role="menuitem"
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
            <div className="flex items-center px-3 py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}