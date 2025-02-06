import React, { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import ThemeToggle from "@/components/ui/theme-toggle";
import { scrollToElement, getActiveSection } from "@/lib/scroll";
import { Separator } from "@/components/ui/separator";
import Image from "@/components/ui/image";
import { IMAGES } from "@/lib/constants";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    { id: 'purpose', label: 'Purpose' },
    { id: 'principles', label: 'Principles' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'partners', label: 'Partners' }
  ];

  const actionButtons = [
    { href: "https://interspace.samir.xyz/p/101-everything-you-wanted-to-know", label: "LEARN", primary: false },
    { 
      href: "#",  
      label: "JOIN*", 
      primary: false,
      'data-tally-open': "nP1v8e",
      'data-tally-align-left': "1",
      'data-tally-emoji-text': "👋",
      'data-tally-emoji-animation': "wave"
    },
    { href: "mailto:pitch@daysearly.com", label: "PITCH", primary: true }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#baf5da]/80 dark:bg-white/80 backdrop-blur-sm
        ${isScrolled ? 'shadow-sm' : ''}
        md:top-4 md:mx-4 md:rounded-full`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, 'hero')} 
            className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200"
          >
            <Image 
              src="/images/2-days-early-calendar-icon-2025.png"
              alt="2 Days Early" 
              className="h-12 w-12 rounded-full object-contain"
              fallbackSrc="/images/2-days-early-logo-2025.png"
            />
          </a>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              {navItems.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`} 
                  onClick={(e) => handleNavClick(e, id)} 
                  className={`relative text-gray-700 dark:text-gray-700 hover:text-primary dark:hover:text-primary rounded-md px-2 py-1 transition-all duration-200 transform hover:-translate-y-0.5 ${
                    activeSection === id ? 'text-primary dark:text-primary font-medium after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary' : ''
                  }`}
                  role="menuitem"
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  {label}
                </a>
              ))}
            </div>

            <Separator orientation="vertical" className="h-6 mx-2" />

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
                      : 'bg-gray-100 text-gray-900 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-200'
                  } px-3 py-1.5 rounded-md text-sm font-medium inline-flex items-center gap-1 transition-all duration-200 transform hover:-translate-y-0.5`}
                >
                  {label} <ExternalLink className="h-3 w-3" />
                </a>
              ))}
              <Separator orientation="vertical" className="h-6 mx-2" />
              <ThemeToggle />
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-700 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-100 transition-colors duration-200"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div 
        id="mobile-menu"
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#baf5da]/95 dark:bg-white/95 backdrop-blur-sm`}
        role="menu"
        aria-label="Mobile navigation"
      >
        <div className="px-4 pt-2 pb-3 space-y-4">
          <div className="flex flex-wrap gap-2">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`} 
                onClick={(e) => handleNavClick(e, id)} 
                className={`relative text-gray-700 dark:text-gray-700 hover:text-primary dark:hover:text-primary rounded-md px-1.5 py-1 text-sm md:text-base md:px-2 transition-all duration-200 transform hover:-translate-y-0.5 ${
                  activeSection === id ? 'text-primary dark:text-primary font-medium after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary' : ''
                }`}
                role="menuitem"
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
          </div>

          <Separator className="my-2" />

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
                    : 'bg-gray-100 text-gray-900 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-200'
                } px-3 py-1.5 rounded-md text-sm font-medium inline-flex items-center gap-1 w-full justify-center transition-all duration-200 transform hover:-translate-y-0.5`}
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