export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

export function getActiveSection(): string {
  const sections = document.querySelectorAll('section[id]');
  let currentSection = '';

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const sectionHeight = rect.height;
    if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
      currentSection = section.id;
    }
  });

  return currentSection;
}