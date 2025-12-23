import { Plug, Eye, Zap, Repeat, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      gradient: 'from-blue-500 to-blue-600',
      icon: Plug,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      title: 'Connect',
      description: 'Plug in your cloud accounts with secure, read-only access in minutes.'
    },
    {
      number: 2,
      gradient: 'from-teal-500 to-teal-600',
      icon: Eye,
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
      title: 'Observe',
      description: 'Xops360 builds a 360° view of cost, risk, and compliance posture.'
    },
    {
      number: 3,
      gradient: 'from-green-500 to-green-600',
      icon: Zap,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      title: 'Optimize',
      description: 'Use AI-driven insights to right-size resources, remove waste, and fix vulnerabilities.'
    },
    {
      number: 4,
      gradient: 'from-orange-500 to-orange-600',
      icon: Repeat,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      title: 'Continuously Improve',
      description: 'Keep your environment optimized and audit-ready with ongoing reviews and alerts.'
    }
  ];

  return (
    <section
      id="howitworks"
      className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight" style={{ lineHeight: '1.2' }}>
            <span className="text-gray-900 dark:text-slate-100">How Xops360 </span>
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">Fits Into Your Stack</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
            Four simple steps to transform your cloud operations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="card-hover smooth-color-transition h-full bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-800 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                        <span className="text-white text-xl font-bold">{step.number}</span>
                      </div>
                      <div className={`w-12 h-12 rounded-lg ${step.bgColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${step.iconColor}`} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-slate-100 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 dark:text-slate-400 text-base leading-relaxed flex-grow" style={{ lineHeight: '1.7' }}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-4 z-10 items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-gray-300" strokeWidth={2} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://xops.axiomio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 active:scale-95" style={{ minHeight: '44px' }}
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
