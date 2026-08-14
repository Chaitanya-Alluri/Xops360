import { Cloud, Layers, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

const clouds = [
  { label: 'AWS', sub: 'Organizations + linked accounts', color: 'bg-orange-600' },
  { label: 'Azure', sub: 'Management groups', color: 'bg-blue-600' },
  { label: 'Microsoft 365', sub: 'Tenant security', color: 'bg-sky-600' },
  { label: 'Entra ID', sub: 'Identity posture', color: 'bg-indigo-600' },
  { label: 'EKS', sub: 'Kubernetes clusters', color: 'bg-teal-600' },
];

const frameworks = ['CIS', 'PCI-DSS', 'GDPR', 'SOC 2', 'ISO 27001'];

export default function MultiCloud() {
  return (
    <section
      id="multicloud"
      className="py-12 md:py-16 px-4 md:px-6 bg-white border-y border-gray-100"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full mb-3 border border-blue-100">
            <Layers size={13} className="text-blue-600" />
            <p className="text-xs uppercase text-blue-600 font-semibold tracking-wide">
              One platform, every cloud
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Govern AWS, Azure &amp; Microsoft from a single pane
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Each cloud renders with its own native services and frameworks, not a thin AWS wrapper.
            Connect accounts once with read-only access and see cost, risk, and compliance side by side.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Covers your Australian regions, including{' '}
            <span className="font-medium text-gray-600">AWS ap-southeast-2 (Sydney)</span> and{' '}
            <span className="font-medium text-gray-600">Azure Australia East / Southeast</span>, alongside
            every other region you run in.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-8 md:mb-10">
          {clouds.map((c) => (
            <div
              key={c.label}
              className="group flex flex-col items-center text-center p-4 md:p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all duration-300"
            >
              <div className={`w-11 h-11 md:w-12 md:h-12 ${c.color} rounded-xl flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300`}>
                <Cloud className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-900">{c.label}</p>
              <p className="text-[11px] md:text-xs text-gray-500 mt-0.5">{c.sub}</p>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <div className="rounded-2xl bg-gradient-to-r from-blue-800 to-teal-700 p-[1.5px] shadow-lg">
            <div className="rounded-2xl bg-white px-5 md:px-8 py-6 md:py-7">
              <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-8">
                <div className="flex items-center gap-3 lg:w-1/2">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700">
                    <span className="font-semibold text-gray-900">One scan, every framework.</span>{' '}
                    A single compliance run maps each control across all standards at once, so you can score,
                    prove, and remediate continuously instead of once a year.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5 lg:gap-3 lg:justify-end lg:w-1/2">
                  {frameworks.map((f) => (
                    <span
                      key={f}
                      className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
