import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { scrollToSection as scrollTo } from '../utils/scrollHelpers';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = [
      'hero', 'challenge', 'platform', 'remediation', 'supplychain',
      'features', 'multicloud', 'solutions', 'roi', 'howitworks', 'contact',
    ];

    // The raw scroll event fires far more often than we can paint, and each run
    // does a getElementById sweep. Coalesce to one measurement per frame.
    let frame = 0;
    const measure = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    scrollTo(sectionId);
    setIsMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { id: 'platform', label: 'Platform' },
    { id: 'remediation', label: 'Remediation' },
    { id: 'supplychain', label: 'Supply Chain' },
    { id: 'features', label: 'Capabilities' },
    { id: 'solutions', label: 'Solutions' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-lg border-b border-gray-200 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Equal 1fr side columns keep the nav links optically centered
            regardless of the logo / CTA widths. */}
        <div className="flex items-center justify-between py-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center lg:justify-self-start focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            aria-label="Scroll to top"
          >
            <img
              src="/Logo_Colored_v1_trimmed.png"
              alt="Xops360"
              className="h-9 md:h-10 w-auto"
            />
          </button>

          <div className="hidden lg:flex items-center justify-center lg:space-x-5 xl:space-x-8 whitespace-nowrap">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm font-medium transition-colors duration-200 focus:outline-none rounded px-1 py-2.5 group ${
                  activeSection === link.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-blue-800 to-teal-700 transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center justify-end space-x-4">
            <a
              href="https://console.xops360.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2"
            >
              Sign In
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-6 py-2.5 bg-gradient-animated text-white text-sm font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
            >
              Request a Demo
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://console.xops360.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg"
            >
              Sign In
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-3 bg-gradient-animated text-white font-semibold rounded-lg shadow-md"
            >
              Request a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
