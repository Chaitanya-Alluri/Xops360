import { Plug, Eye, Zap, Repeat } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      gradient: 'from-blue-600 to-blue-800',
      icon: Plug,
      iconColor: 'text-blue-700',
      title: 'Connect',
      description: 'Plug in your cloud accounts with secure, read-only access.'
    },
    {
      number: 2,
      gradient: 'from-teal-600 to-teal-800',
      icon: Eye,
      iconColor: 'text-teal-700',
      title: 'Observe',
      description: 'Xops360 builds a 360° view of cost, risk, and compliance posture.'
    },
    {
      number: 3,
      gradient: 'from-emerald-600 to-emerald-700',
      icon: Zap,
      iconColor: 'text-emerald-600',
      title: 'Optimize',
      description: 'Use AI-driven insights to right-size resources, remove waste, and fix vulnerabilities.'
    },
    {
      number: 4,
      gradient: 'from-slate-600 to-slate-800',
      icon: Repeat,
      iconColor: 'text-slate-700',
      title: 'Continuously Improve',
      description: 'Keep your environment optimized and audit-ready with ongoing reviews and alerts.'
    }
  ];

  return (
    <section aria-label="How Xops360 works"
      id="howitworks"
      className="py-12 md:py-16 px-4 md:px-6 bg-white"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-10 lg:mb-12">
          How Xops360 Fits Into Your Stack
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-4 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex-1 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-4 md:mb-5">
                  <div className={`w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 mx-auto rounded-full bg-gradient-to-br ${step.gradient} text-white text-2xl md:text-3xl font-bold flex items-center justify-center shadow-lg`}>
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 md:top-9 lg:top-10 left-1/2 w-full h-0.5 border-t-2 border-dashed border-gray-300"></div>
                  )}
                </div>

                <Icon className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ${step.iconColor} mx-auto mb-3 md:mb-4`} />

                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
