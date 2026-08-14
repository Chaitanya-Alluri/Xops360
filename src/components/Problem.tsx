import { TrendingUp, ShieldAlert, Server, CalendarX, Wrench, PackageSearch } from 'lucide-react';
import Reveal from './Reveal';

export default function Problem() {
  const problems = [
    {
      icon: TrendingUp,
      iconColor: 'text-slate-600',
      title: 'Unpredictable Cost Escalation',
      description: 'Cloud bills surge monthly with no transparent breakdown of spending drivers, while idle and over-provisioned resources quietly drain budget. Finance teams cannot say which services, teams, or workloads are responsible.'
    },
    {
      icon: ShieldAlert,
      iconColor: 'text-blue-700',
      title: 'Hidden Security Exposures',
      description: 'Vulnerabilities in AMIs, ECR/ACR container images, and misconfigurations stay undetected until the next audit, creating long, silent risk windows.'
    },
    {
      icon: PackageSearch,
      iconColor: 'text-teal-700',
      title: 'Unvetted Open-Source Supply Chain',
      description: 'Most of your application is third-party code, and the risk lives in transitive dependencies nobody reviewed. Without scanning at build time, a vulnerable package ships to production and stays there.'
    },
    {
      icon: Server,
      iconColor: 'text-blue-700',
      title: 'Multi-Cloud Blind Spots',
      description: 'Dozens of AWS accounts plus Azure, Microsoft 365, and Entra ID leave teams without unified visibility, operating reactively across disparate tools and consoles.'
    },
    {
      icon: CalendarX,
      iconColor: 'text-slate-600',
      title: 'Compliance Is a Once-a-Year Fire Drill',
      description: 'Annual Well-Architected and framework reviews leave 364 days of drift unaddressed, and re-checking SOC 2, HIPAA, PCI-DSS, and ISO 27001 separately multiplies the effort.'
    },
    {
      icon: Wrench,
      iconColor: 'text-teal-700',
      title: 'Findings That Never Get Fixed',
      description: 'Most tools surface problems but stop there. Without owners, SLAs, and a path into Jira or ServiceNow, insights pile up in a dashboard while the risk and the spend remain.'
    }
  ];

  return (
    <section
      id="challenge"
      className="py-12 md:py-16 px-4 md:px-6 bg-gray-50"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-3 md:mb-4">
            The Challenge We Solve
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 md:mb-10">
            Enterprise cloud teams juggle cost, security, and compliance across many clouds, through
            disconnected tools that surface problems but rarely close them.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Reveal key={index} delay={(index % 3) * 90}>
                <div className="h-full bg-white rounded-lg md:rounded-xl p-5 md:p-6 lg:p-7 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all duration-300">
                  <Icon className={`w-10 h-10 md:w-11 md:h-11 ${problem.iconColor} mb-3 md:mb-4`} />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
