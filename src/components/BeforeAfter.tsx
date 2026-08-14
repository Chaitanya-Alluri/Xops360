import { X, Check, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { scrollToSection } from '../utils/scrollHelpers';

const rows = [
  {
    before: 'Cost, security & compliance live in separate tools',
    after: 'One 360° view across every cloud and account',
  },
  {
    before: 'Cloud bills climb with no clear "why"',
    after: 'AI-explained spend with anomaly alerts before the bill lands',
  },
  {
    before: 'Compliance is an annual, per-framework fire drill',
    after: 'One continuous scan mapped to SOC 2, HIPAA, PCI-DSS, ISO 27001 & CIS',
  },
  {
    before: 'Open-source dependencies ship unchecked into production',
    after: 'SCA on every lock file and every build, wired into CI/CD',
  },
  {
    before: 'Findings pile up in a dashboard, unowned',
    after: 'SLA-tracked tickets with one-click remediation into Jira & ServiceNow',
  },
  {
    before: 'Multi-cloud sprawl across disconnected consoles',
    after: 'AWS, Azure, Microsoft 365 & Entra ID, governed as one',
  },
];

export default function BeforeAfter() {
  return (
    <section aria-label="Xops360 compared with disconnected tools"
      className="py-12 md:py-16 px-4 md:px-6 bg-white"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Most tools stop at the finding. <span className="text-gradient">Xops360 closes the loop.</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            The difference between a dashboard full of problems and a cloud that's actually optimized,
            secure, and audit-ready.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Without */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-7">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
                <X className="w-5 h-5 text-gray-500" />
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-gray-500">Without Xops360</h3>
            </div>
            <ul className="space-y-3.5">
              {rows.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-gray-500">
                  <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                  <span className="line-through decoration-gray-300">{r.before}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div className="relative rounded-2xl bg-gradient-to-br from-blue-800 to-teal-700 p-[1.5px] shadow-xl">
            <div className="h-full rounded-2xl bg-white p-5 md:p-7">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-800 to-teal-700 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">With Xops360</h3>
              </div>
              <ul className="space-y-3.5">
                {rows.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-gray-800 font-medium">
                    <Check className="w-4 h-4 text-green-700 mt-1 flex-shrink-0" />
                    <span>{r.after}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="text-center mt-8">
          <button
            onClick={() => scrollToSection('remediation')}
            className="group inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
          >
            See how the remediation loop works
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
