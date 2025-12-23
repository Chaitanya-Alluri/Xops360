import { Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="py-9 px-4 sm:px-6 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-8">
          <div className="md:col-span-2">
            <img
              src="/Logo_Colored_v1.png"
              alt="Xops360 Logo"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-md">
              AI-Powered Cloud Optimization, Risk Mitigation & Compliance
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://aws.amazon.com/marketplace/pp/prodview-mgb4abuyr734a#:~:text=The%20best%20features%20of%20Xops,monitor%20security%20across%20various%20platforms."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-gray-800 rounded-lg grayscale hover:grayscale-0 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <img
                  src="/AWS.png"
                  alt="Available in AWS Marketplace"
                  className="h-6 w-auto brightness-0 invert"
                />
              </a>
              <a
                href="https://marketplace.microsoft.com/en-us/product/saas/axiomio1732009261776.xops?tab=overview"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-gray-800 rounded-lg grayscale hover:grayscale-0 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <img
                  src="/Azure.png"
                  alt="Available in Microsoft AppSource"
                  className="h-6 w-auto brightness-0 invert"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => scrollToSection('platform')}
                  className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded text-left"
                >
                  Platform Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <a
                  href="https://xops-docs.axiomio.com/books/xops-360-documentation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded inline-block"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://axiomio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <p className="text-xs text-gray-500">
                © 2025 <a href="https://axiomio.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AxiomIO</a>. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Powered by</span>
                <a
                  href="https://axiomio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/'Axiomio'-lightbcg (002).png"
                    alt="AxiomIO"
                    className="h-3 w-auto brightness-0 invert"
                  />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex gap-4 text-xs">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Terms of Service
                </button>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/axiomio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://x.com/axiomio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label="X (Twitter)"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://github.com/axiomio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
