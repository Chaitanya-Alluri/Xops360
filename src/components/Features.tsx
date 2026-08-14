import {
  Bot, BarChart3, ShieldCheck, Boxes, PackageSearch, Radar,
  Terminal, Activity, Compass, Grid3x3,
} from 'lucide-react';
import Reveal from './Reveal';

type ModuleTag = 'FinOps' | 'SecOps' | 'CloudOps' | 'Agentic AI';

const tagStyles: Record<ModuleTag, string> = {
  FinOps: 'bg-blue-50 text-blue-800 border-blue-200',
  SecOps: 'bg-slate-100 text-slate-700 border-slate-300',
  CloudOps: 'bg-teal-50 text-teal-800 border-teal-200',
  'Agentic AI': 'bg-indigo-50 text-indigo-800 border-indigo-200',
};

interface Feature {
  icon: typeof Bot;
  gradient: string;
  tag: ModuleTag;
  title: string;
  description: string;
  bullets: string[];
}

interface Pillar {
  key: string;
  label: string;
  tagline: string;
  accent: string;
  features: Feature[];
}

const pillars: Pillar[] = [
  {
    key: 'see',
    label: 'See it clearly',
    tagline: 'Total visibility and AI-driven intelligence across every account.',
    accent: 'text-blue-800',
    features: [
      {
        icon: Bot, gradient: 'from-indigo-600 to-indigo-800', tag: 'Agentic AI',
        title: 'Xara Agent: your cloud co-pilot',
        description: 'A conversational agent that explains cost spikes, runs Well-Architected reviews, and recommends fixes in plain language.',
        bullets: ['Ask "why did my bill jump?" and get the root cause', 'On-demand AWS & Azure Well-Architected reviews', 'Prioritised, actionable recommendations'],
      },
      {
        icon: BarChart3, gradient: 'from-blue-600 to-blue-800', tag: 'FinOps',
        title: 'Cost Analyser & anomaly detection',
        description: 'Live, multi-account spend with forecasts and month-over-month trends, so you catch anomalies as they emerge.',
        bullets: ['Spend by account, service & region', 'Forecasting with anomaly alerts', 'Daily granularity across 20+ accounts'],
      },
      {
        icon: PackageSearch, gradient: 'from-blue-600 to-teal-700', tag: 'FinOps',
        title: 'Saving Opportunities & right-sizing',
        description: 'Turn waste into savings with Reserved Instance / Savings Plan guidance and right-sizing.',
        bullets: ['RI & Savings Plan recommendations', 'Right-size EC2, EBS & storage', 'Quantified dollar impact per action'],
      },
      {
        icon: Grid3x3, gradient: 'from-teal-600 to-teal-800', tag: 'CloudOps',
        title: 'Resource Manager & Optimiser',
        description: 'Single-pane inventory across every region and account, with tag-compliance and cleanup insights.',
        bullets: ['Cross-region inventory (25+ services)', 'Tag compliance & backup coverage', 'Idle & unutilised resource detection'],
      },
    ],
  },
  {
    key: 'secure',
    label: 'Secure & prove it',
    tagline: 'Continuous security and always-on, audit-ready compliance.',
    accent: 'text-slate-700',
    features: [
      {
        icon: ShieldCheck, gradient: 'from-slate-600 to-slate-800', tag: 'SecOps',
        title: 'Continuous compliance (CSPM)',
        description: 'One scan scores you against every framework at once, with each control mapped across all standards.',
        bullets: ['One control → all frameworks', 'Live posture score & severity tiers', 'Scheduled scans, history & compare'],
      },
      {
        icon: Boxes, gradient: 'from-slate-500 to-slate-700', tag: 'SecOps',
        title: 'Workload & image scanning',
        description: 'CVE-level vulnerability detection across machine images and container registries.',
        bullets: ['AMI & ECR scanning (AWS)', 'ACR scanning (Azure)', 'Findings ranked by severity'],
      },
      {
        icon: Radar, gradient: 'from-slate-600 to-slate-900', tag: 'SecOps',
        title: 'Cyber & supply-chain suite',
        description: 'OSINT, DAST pentesting, network exposure, and SCA dependency scanning, wired into CI/CD.',
        bullets: ['OSINT: SSL, DNS, subdomain footprint', 'DAST for APIs, web & mobile', 'SCA for lock files, shifted left'],
      },
    ],
  },
  {
    key: 'run',
    label: 'Automate & run it',
    tagline: 'Provision, monitor, and continuously improve your cloud.',
    accent: 'text-teal-800',
    features: [
      {
        icon: Terminal, gradient: 'from-teal-600 to-cyan-700', tag: 'CloudOps',
        title: 'Self-service IaC automation',
        description: 'Provision hardened infrastructure from a catalogue of Terraform modules, including one-click EKS.',
        bullets: ['VPC, ECS, EC2, RDS, S3, ALB, CloudFront, IAM', 'One-click EKS deployment', 'Consistent, governed builds'],
      },
      {
        icon: Activity, gradient: 'from-cyan-700 to-blue-700', tag: 'CloudOps',
        title: 'ProbeView uptime monitoring',
        description: 'Built-in synthetic monitoring for your endpoints, with response-time and cert-expiry alerts.',
        bullets: ['Uptime across all endpoints', 'Response-time & health scoring', 'Certificate-renewal warnings'],
      },
      {
        icon: Compass, gradient: 'from-blue-700 to-indigo-700', tag: 'CloudOps',
        title: 'Well-Architected Reviews',
        description: 'Continuous WAR insights across cost, reliability, performance, security, and operations.',
        bullets: ['Ongoing insights across WAR pillars', 'Aligned with cloud best practices', 'Track improvements and prove ROI'],
      },
    ],
  },
];

function FeatureCard({ feature, delay }: { feature: Feature; delay: number }) {
  const Icon = feature.icon;
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full bg-white rounded-lg md:rounded-xl p-5 md:p-6 border-2 border-gray-200 shadow-md hover:border-blue-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${tagStyles[feature.tag]}`}>
            {feature.tag}
          </span>
        </div>
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">{feature.description}</p>
        <ul className="space-y-1.5">
          {feature.bullets.map((bullet, idx) => (
            <li key={idx} className="text-xs md:text-sm text-gray-500 flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Everything you need, in three moves
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            See it, secure it, run it: FinOps, SecOps, CloudOps, and Agentic AI working from one source of truth.
          </p>
        </Reveal>

        <div className="space-y-10 md:space-y-14">
          {pillars.map((pillar) => (
            <div key={pillar.key}>
              <Reveal className="flex items-center gap-3 mb-5 md:mb-6">
                <span className={`text-sm md:text-base font-bold uppercase tracking-wide ${pillar.accent}`}>
                  {pillar.label}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
                <span className="hidden md:block text-sm text-gray-500">{pillar.tagline}</span>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                {pillar.features.map((feature, index) => (
                  <FeatureCard key={feature.title} feature={feature} delay={(index % 4) * 80} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
