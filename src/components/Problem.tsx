import { TrendingUp, ShieldAlert, Cloud, Server, CalendarX } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: TrendingUp,
      iconColor: 'text-red-500',
      title: 'Unpredictable Cost Escalation',
      description: 'Cloud bills surge monthly with no transparent breakdown of spending drivers. Finance teams lack visibility into which services, teams, or workloads are consuming budget.'
    },
    {
      icon: ShieldAlert,
      iconColor: 'text-orange-500',
      title: 'Hidden Security Exposures',
      description: 'Image vulnerabilities in cloud AMIs and ECR containers remain undetected until scheduled audits, creating critical security windows and compliance risks.'
    },
    {
      icon: Cloud,
      iconColor: 'text-amber-500',
      title: 'Silent Budget Erosion',
      description: 'Idle instances, over-provisioned resources, and forgotten workloads continuously drain budget. Without real-time visibility, waste compounds across quarters.'
    },
    {
      icon: Server,
      iconColor: 'text-blue-500',
      title: 'The Multi-Account Challenge',
      description: 'Distributed cloud environments spanning multiple accounts, regions, and services eliminate unified visibility. Teams operate reactively through disparate tools and manual processes.'
    },
    {
      icon: CalendarX,
      iconColor: 'text-orange-500',
      title: 'Annual Reviews Aren\'t Enough',
      description: 'Traditional cloud Well-Architected Reviews occur once yearly, leaving 364 days of potential inefficiencies unaddressed and optimization opportunities unrealized.',
      fullWidth: true
    }
  ];

  return (
    <section
      id="challenge"
      className="py-16 md:py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ lineHeight: '1.2' }}>
            <span className="block font-semibold text-gray-600 dark:text-slate-400 mb-3">Tackling issues</span>
            <span className="block bg-gradient-to-r from-blue-600 via-teal-500 to-blue-500 bg-clip-text text-transparent">before they become problems</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-400 max-w-4xl mx-auto" style={{ lineHeight: '1.7' }}>
            Enterprise cloud environments face mounting pressure: <span className="font-semibold text-gray-700 dark:text-slate-300">costs escalate</span> without clear attribution, <span className="font-semibold text-gray-700 dark:text-slate-300">security vulnerabilities</span> go undetected, and <span className="font-semibold text-gray-700 dark:text-slate-300">operational complexity</span> obscures optimization opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`card-hover smooth-color-transition bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  problem.fullWidth ? 'md:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${problem.iconColor.replace('text-', 'from-')}/10 ${problem.iconColor.replace('text-', 'to-')}/20 flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${problem.iconColor}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-slate-100 flex-1 pt-2">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base" style={{ lineHeight: '1.7' }}>
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
