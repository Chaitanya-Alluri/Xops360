import { Bot, BarChart3, Shield, Box, Compass, Search, Grid } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Bot,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      title: 'Cloud Cost Optimization Agent',
      description: 'Conversational AI agent provides instant answers about cost drivers, optimization opportunities, and resource utilization patterns across your entire cloud footprint.',
      bullets: [
        'Discover idle and over-provisioned resources',
        'See cost drivers by account, team, or workload',
        'Get prioritized optimization recommendations'
      ]
    },
    {
      icon: BarChart3,
      iconColor: 'text-teal-600',
      iconBg: 'bg-teal-50',
      title: 'Real-Time Cost Intelligence',
      description: 'Live visibility into cloud spending patterns with actionable recommendations. Identify savings opportunities as they emerge, not months later in quarterly reviews.',
      bullets: [
        'Live views of spend across regions and services',
        'Early warnings on anomalies and budget overruns',
        'Recommendations that translate directly into savings'
      ]
    },
    {
      icon: Shield,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-50',
      title: 'Continuous Cloud Security Posture Management (CSPM)',
      description: 'Continuous security posture management identifies, prioritizes, and remediates misconfigurations and vulnerabilities, ensuring adherence to security frameworks and compliance standards.',
      bullets: [
        'Continuous scanning against leading security frameworks',
        'Risk-ranked findings with clear remediation guidance',
        'Always-on monitoring to maintain compliance posture'
      ]
    },
    {
      icon: Box,
      iconColor: 'text-cyan-600',
      iconBg: 'bg-cyan-50',
      title: 'Image & Container Vulnerability Scanning',
      description: 'Automated security assessments for cloud AMIs and ECR container images detect vulnerabilities before deployment, preventing security incidents.',
      bullets: [
        'Automated checks for cloud images and containers',
        'Catch vulnerabilities pre-deployment',
        'Reduce security windows and compliance gaps'
      ]
    },
    {
      icon: Compass,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      title: 'Cloud WAR AI Module',
      description: 'Continuous Well-Architected Review insights covering cost optimization, reliability, performance efficiency, security, and operational excellence pillars.',
      bullets: [
        'Ongoing insights across WAR pillars',
        'Recommendations aligned with cloud best practices',
        'Track improvements and prove ROI over time'
      ]
    },
    {
      icon: Search,
      iconColor: 'text-teal-600',
      iconBg: 'bg-teal-50',
      title: 'Agentic Security – NLP Vulnerability Detection',
      description: 'Natural language-driven security scanning for websites, IPs, and domains. Input any target and receive comprehensive vulnerability reports identifying open ports and security risks.',
      bullets: [
        'Open ports and exposure mapping',
        'Vulnerability reporting in clear, human language',
        'Instant security snapshots for any domain/IP'
      ]
    },
    {
      icon: Grid,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-50',
      title: 'Unified Asset & Idle Resource Management',
      description: 'Single-pane visibility across all cloud assets, regions, and accounts. Instantly identify idle resources, obsolete workloads, and optimization candidates.',
      bullets: [
        'Single-pane view across all cloud assets',
        'Instant identification of idle workloads',
        'One place to drive ongoing optimization'
      ]
    }
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-white dark:bg-slate-950 transition-colors duration-300 py-16 md:py-20 px-6"
      style={{ scrollMarginTop: '5rem' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-6 animate-on-scroll" style={{ lineHeight: '1.2' }}>
          <span className="text-gray-900 dark:text-slate-100">Key </span>
          <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">Capabilities</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-400 text-center mb-16 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
          Comprehensive cloud management powered by AI-driven insights and automation
        </p>

        <div className="space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`animate-on-scroll flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start lg:items-center bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-slate-800 hover:border-gray-200 dark:hover:border-slate-700 hover:shadow-xl transition-all duration-300`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl blur-lg opacity-40"></div>
                    <div className={`relative ${feature.iconBg} dark:bg-slate-800 rounded-2xl w-full h-full flex items-center justify-center transition-transform duration-300 hover:scale-105`}>
                      <Icon className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ${feature.iconColor}`} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 mb-3 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-400 mb-5" style={{ lineHeight: '1.7' }}>
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-slate-300">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base leading-relaxed flex-1" style={{ lineHeight: '1.7' }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
