import React, { useEffect, useState } from "react";
import { Menu, X, ExternalLink, Loader2 } from "lucide-react";
import ThemeToggle from "@/components/ui/theme-toggle";
import { scrollToElement, getActiveSection } from "@/lib/scroll";
import { Separator } from "@/components/ui/separator";
import Image from "@/components/ui/image";
import { useToast } from "@/hooks/use-toast";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isTallyLoading, setIsTallyLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setActiveSection(getActiveSection());
    };
    window.addEventListener("scroll", handleScroll);

    // Check if Tally script is loaded
    const checkTallyLoaded = () => {
      if (window.Tally) {
        setIsTallyLoading(false);
        return;
      }
      setIsTallyLoading(true);
    };

    // Check immediately
    checkTallyLoaded();

    // Listen for script load event
    const handleTallyLoad = () => {
      setIsTallyLoading(false);
    };

    window.addEventListener('tally-loaded', handleTallyLoad);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('tally-loaded', handleTallyLoad);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToElement(sectionId);
    setIsOpen(false);
  };

  const handleJoinClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isTallyLoading) {
      toast({
        title: "Form is loading",
        description: "Please wait a moment while we load the form.",
      });
      return;
    }

    if (!window.Tally) {
      toast({
        variant: "destructive",
        title: "Error loading form",
        description: "Please refresh the page and try again.",
      });
      return;
    }

    // Create an iframe for embedded form
    const formContainer = document.createElement('div');
    formContainer.id = 'tally-form-container';
    formContainer.style.position = 'fixed';
    formContainer.style.top = '50%';
    formContainer.style.left = '50%';
    formContainer.style.transform = 'translate(-50%, -50%)';
    formContainer.style.zIndex = '9999';
    formContainer.style.backgroundColor = 'white';
    formContainer.style.padding = '20px';
    formContainer.style.borderRadius = '12px';
    formContainer.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    formContainer.style.maxWidth = '90vw';
    formContainer.style.maxHeight = '90vh';
    formContainer.style.overflow = 'auto';

    // Add close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.right = '10px';
    closeButton.style.top = '10px';
    closeButton.style.fontSize = '24px';
    closeButton.style.border = 'none';
    closeButton.style.background = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => {
      document.body.removeChild(formContainer);
      document.body.style.overflow = 'auto';
    };

    // Add overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '9998';
    overlay.onclick = closeButton.onclick;

    // Create embedded form
    const iframe = document.createElement('iframe');
    iframe.src = `https://tally.so/embed/${window.TallyConfig?.formId || 'nP1v8e'}?alignLeft=1&hideTitle=1&transparentBackground=1`;
    iframe.width = '500';
    iframe.height = '600';
    iframe.style.border = 'none';
    iframe.title = "Join 2 Days Early";

    formContainer.appendChild(closeButton);
    formContainer.appendChild(iframe);
    document.body.appendChild(overlay);
    document.body.appendChild(formContainer);
    document.body.style.overflow = 'hidden';
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
      label: isTallyLoading ? "Loading..." : "JOIN*", 
      primary: false,
      onClick: handleJoinClick,
      icon: isTallyLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : undefined
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
              {actionButtons.map((button) => (
                <button
                  key={button.label}
                  onClick={button.onClick || (button.href ? () => window.open(button.href, '_blank') : undefined)}
                  className={`${
                    button.primary
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-gray-100 text-gray-900 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-200'
                  } px-3 py-1.5 rounded-md text-sm font-medium inline-flex items-center gap-1 transition-all duration-200 transform hover:-translate-y-0.5`}
                >
                  {button.label} {button.href && <ExternalLink className="h-3 w-3" />}
                  {button.icon}
                </button>
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
            {actionButtons.map((button) => (
              <button
                key={button.label}
                onClick={button.onClick || (button.href ? () => window.open(button.href, '_blank') : undefined)}
                className={`${
                  button.primary
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-gray-100 text-gray-900 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-200'
                } px-3 py-1.5 rounded-md text-sm font-medium inline-flex items-center gap-1 w-full justify-center transition-all duration-200 transform hover:-translate-y-0.5`}
              >
                {button.label} {button.href && <ExternalLink className="h-3 w-3" />}
                {button.icon}
              </button>
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