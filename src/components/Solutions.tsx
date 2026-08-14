import { Wallet, ShieldCheck, Cpu } from 'lucide-react';
import Reveal from './Reveal';

const personas = [
  {
    icon: Wallet,
    gradient: 'from-blue-600 to-blue-800',
    audience: 'Finance & FinOps',
    headline: 'Turn cloud spend from a mystery into a managed line item.',
    points: [
      'Multi-account visibility with forecasting',
      'Anomaly alerts before the bill lands',
      'Quantified RI, Savings Plan & right-sizing wins',
    ],
  },
  {
    icon: ShieldCheck,
    gradient: 'from-slate-600 to-slate-800',
    audience: 'Security & GRC',
    headline: 'Continuous compliance, not annual panic.',
    points: [
      'One scan across SOC 2, HIPAA, PCI-DSS, ISO 27001 & CIS',
      'CVE-level workload scanning plus OSINT, DAST & network',
      'SCA on dependencies, wired into CI/CD',
      'Audit-ready posture score, every day',
    ],
  },
  {
    icon: Cpu,
    gradient: 'from-teal-600 to-teal-800',
    audience: 'Engineering & DevOps',
    headline: 'Fix cloud issues without leaving your workflow.',
    points: [
      'Unified triage of cost, security & ops findings',
      'One-click remediation synced to Jira & ServiceNow',
      'Self-service IaC and one-click EKS',
    ],
  },
];

export default function Solutions() {
  return (
    <section aria-label="Solutions by team"
      id="solutions"
      className="py-12 md:py-16 px-4 md:px-6 bg-gray-50"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Built for the whole cloud team
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            One platform, three points of view: each team gets the answers it needs from the same source of truth.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {personas.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.audience} delay={i * 100} className="h-full">
                <div className="group h-full bg-white rounded-2xl p-6 md:p-7 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">{p.audience}</p>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 leading-snug">{p.headline}</h3>
                  <ul className="space-y-2.5 mt-auto">
                    {p.points.map((pt) => (
                      <li key={pt} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-700 font-bold mt-0.5">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
