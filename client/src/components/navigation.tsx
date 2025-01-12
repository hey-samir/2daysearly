import React, { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
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

  const actionButtons = [
    { href: "mailto:pitch@daysearly.com", label: "PITCH", primary: true },
    { href: "https://tally.so/r/nP1v8e", label: "JOIN*", primary: false },
    { href: "https://interspace.samir.xyz/p/101-everything-you-wanted-to-know", label: "LEARN", primary: false }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white dark:bg-gray-900 ${
        isScrolled ? 'shadow-lg' : ''
      } md:top-4 md:mx-4 md:rounded-full`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex-shrink-0 text-2xl font-bold text-gray-900 dark:text-white">
            2 days early
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-4">
            {/* Navigation links */}
            <div className="flex items-center gap-2 mr-4">
              {navItems.map(({ id, label }) => (
                <a
                    href={`#${id}`} 
                    onClick={(e) => handleNavClick(e, id)} 
                    className={`text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1 transition-colors duration-200 ${
                      activeSection === id ? 'text-primary dark:text-primary font-medium' : ''
                    }`}
                    role="menuitem"
                    aria-current={activeSection === id ? 'page' : undefined}
                  >
                    {label}
                  </a>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              {actionButtons.map(({ href, label, primary }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`${
                    primary
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
                  } px-3 py-1.5 rounded-md text-sm font-medium inline-flex items-center gap-1`}
                >
                  {label} <ExternalLink className="h-3 w-3" />
                </a>
              ))}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-white hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div 
        className={`h-0.5 bg-gray-100 dark:bg-gray-800 mx-4 sm:mx-6 rounded-full overflow-hidden ${isOpen ? 'md:block hidden' : 'block'}`}
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
        <div className="px-4 pt-2 pb-3 space-y-4">
          {/* Mobile navigation links */}
          <div className="flex flex-wrap gap-2">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`} 
                onClick={(e) => handleNavClick(e, id)} 
                className={`text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1 transition-colors duration-200 ${
                  activeSection === id ? 'text-primary dark:text-primary font-medium' : ''
                }`}
                role="menuitem"
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile action buttons */}
          <div className="flex flex-wrap gap-2">
            {actionButtons.map(({ href, label, primary }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`${
                  primary
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
                } px-3 py-1.5 rounded-md text-sm font-medium inline-flex items-center gap-1 w-full justify-center`}
              >
                {label} <ExternalLink className="h-3 w-3" />
              </a>
            ))}
            <div className="flex justify-center w-full pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}