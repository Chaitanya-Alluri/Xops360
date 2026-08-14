import { Linkedin, Twitter } from 'lucide-react';
import { scrollToSection } from '../utils/scrollHelpers';
import { CONTACT_EMAIL } from '../config/site';

export default function Footer() {

  const productLinks = [
    { label: 'Platform Overview', section: 'platform' },
    { label: 'Capabilities', section: 'features' },
    { label: 'Supply-Chain Security', section: 'supplychain' },
    { label: 'Xhub Remediation', section: 'remediation' },
    { label: 'Multi-Cloud Coverage', section: 'multicloud' },
  ];

  const companyLinks = [
    { label: 'Watch the Overview', section: 'overview' },
    { label: 'Savings Calculator', section: 'roi' },
    { label: 'How It Works', section: 'howitworks' },
    { label: 'Solutions by Team', section: 'solutions' },
    { label: 'Contact', section: 'contact' },
  ];

  return (
    <footer className="py-10 md:py-12 lg:py-14 px-4 md:px-6 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-10 md:[&>*:first-child]:col-span-2">
          <div>
            <img
              src="/Logo_Colored_v1_trimmed.png"
              alt="Xops360"
              className="h-9 md:h-10 w-auto mb-3 md:mb-4 brightness-0 invert"
            />
            <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-5">
              AI-Powered Cloud Optimization, Risk Mitigation & Compliance
            </p>
            <div className="flex gap-3 md:gap-4">
              <div className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 rounded-lg text-xs font-medium grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    AWS
                  </div>
                  <span className="text-xs">Marketplace</span>
                </div>
              </div>
              <div className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 rounded-lg text-xs font-medium grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                    Az
                  </div>
                  <span className="text-xs">Azure</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Product</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded py-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Explore</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded py-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 my-6 md:my-7"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-xs md:text-sm text-gray-500">
            © {new Date().getFullYear()} AxiomIO. All rights reserved.
          </p>

          <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Privacy%20inquiry`}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded py-1"
            >
              Privacy
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Security%20inquiry`}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded py-1"
            >
              Security
            </a>
          </div>

          <div className="flex gap-3 md:gap-4">
            <a
              href="https://www.linkedin.com/company/xops360"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Xops360 on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/xops360"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Xops360 on X (Twitter)"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
