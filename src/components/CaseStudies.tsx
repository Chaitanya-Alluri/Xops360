import { TrendingDown, ShieldCheck, Activity } from 'lucide-react';

export default function CaseStudies() {
  const metrics = [
    {
      number: '22%',
      label: 'Average Cost Reduction',
      sublabel: 'Cost savings via smart resource optimization',
      icon: TrendingDown,
      color: 'text-blue-600'
    },
    {
      number: '100%',
      label: 'Compliance Maintained',
      sublabel: 'Continuous monitoring ensures compliance',
      icon: ShieldCheck,
      color: 'text-green-600'
    },
    {
      number: '24/7',
      label: 'Active Monitoring',
      sublabel: 'Always-on security and performance oversight',
      icon: Activity,
      color: 'text-teal-600'
    }
  ];

  const caseStudies = [
    {
      company: 'Sharpsell',
      industry: 'Financial Services • Insurance',
      industryColor: 'bg-blue-100 text-blue-600',
      location: '📍 India',
      results: [
        '22% reduction in cloud costs',
        'Compliance maintained with cloud Well-Architected Reviews',
        'Continuous optimization via posture checks and vulnerability scans'
      ],
      quote: 'Xops360 transformed our cloud operations while ensuring insurance compliance standards.'
    },
    {
      company: 'King & Shaxson',
      industry: 'Financial Services • Trading',
      industryColor: 'bg-green-100 text-green-600',
      location: '📍 United Kingdom • Top UK Banks',
      results: [
        '25% lower operational costs via smart resource optimization',
        'Enhanced security through regular vulnerability scanning',
        'Proactive monitoring enables continuous optimization and risk mitigation'
      ],
      quote: 'Security and cost optimization delivered simultaneously—exactly what banking requires.'
    },
    {
      company: 'DreamCasino',
      industry: 'Online Gaming Platform',
      industryColor: 'bg-orange-100 text-orange-600',
      location: '📍 Norway • Global Operations',
      results: [
        '25%+ reduction in costs via architecture optimization',
        'Enhanced scalability supporting high-traffic demand',
        'Performance improvements delivering superior user experiences',
        'Continuous cloud reviews keep operations future-proof'
      ],
      quote: 'Handling millions of concurrent users while cutting costs—Xops360 made it possible.'
    }
  ];

  return (
    <section
      id="casestudies"
      className="py-16 md:py-20 px-6 bg-blue-50 dark:bg-slate-900 transition-colors duration-300"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6" style={{ lineHeight: '1.2' }}>
          <span className="text-gray-900 dark:text-slate-100">Customer Success </span>
          <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">with Xops360</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-400 text-center mb-16 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
          Driving Measurable Cost Savings & Cloud Optimization Across Industries
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="hover-lift smooth-color-transition bg-white dark:bg-slate-950 rounded-2xl p-8 shadow-lg border-2 border-gray-200 dark:border-slate-800 text-center active:scale-95"
              >
                <Icon className={`w-14 h-14 ${metric.color} mx-auto mb-4`} />
                <p className={`text-5xl font-bold ${metric.color} mb-2`}>
                  {metric.number}
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2">
                  {metric.label}
                </p>
                <p className="text-sm text-gray-600 dark:text-slate-400">
                  {metric.sublabel}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="card-hover smooth-color-transition bg-white dark:bg-slate-950 rounded-2xl p-6 sm:p-8 border-2 border-gray-200 dark:border-slate-800 shadow-md transition-all duration-300"
            >
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-100 mb-3">
                {study.company}
              </h3>

              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${study.industryColor}`}>
                  {study.industry}
                </span>
              </div>

              <p className="text-sm text-gray-600 dark:text-slate-400 mb-6">
                {study.location}
              </p>

              <div className="space-y-3 mb-6">
                {study.results.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold mt-1">✓</span>
                    <p className="text-sm font-medium text-gray-700 dark:text-slate-300">{result}</p>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic text-sm text-gray-600 dark:text-slate-400">
                "{study.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto mt-16">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-slate-300 font-medium mb-4">
            Xops360 enables enterprises to achieve operational maturity and ROI within the first quarter through continuous optimization and risk reduction—without expanding internal teams.
          </p>
          <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-bold">
            The platform largely pays for itself through realized savings.
          </p>
        </div>
      </div>
    </section>
  );
}
