import { Quote, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Testimonials() {
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

  const testimonials = [
    {
      quote: "Xops360's AI-driven cost optimization helped us reduce our AWS spending by 42% in just three months. Their platform identified idle resources and provided actionable insights that our team could implement immediately.",
      author: "Samba",
      role: "VP of Engineering",
      company: "Cryptoforce",
      logo: "/cryptoforce.png",
      rating: 5,
      savings: "42%",
      metric: "Cost Reduction",
      needsDarkBg: false
    },
    {
      quote: "The continuous security posture management from Xops360 transformed our compliance journey. We achieved SOC 2 certification 6 months ahead of schedule, with clear remediation guidance every step of the way.",
      author: "Kishore",
      role: "CTO",
      company: "AWONE",
      logo: "/AWONE.png",
      rating: 5,
      savings: "6 months",
      metric: "Faster Compliance",
      needsDarkBg: true
    },
    {
      quote: "Managing multi-cloud environments was a nightmare until we found Xops360. Their unified dashboard gives us complete visibility across AWS and Azure, helping us optimize costs and maintain security standards effortlessly.",
      author: "Ganesh",
      role: "Cloud Infrastructure Lead",
      company: "CricClubs",
      logo: "/cricclubs-logo copy.png",
      rating: 5,
      savings: "100%",
      metric: "Visibility",
      needsDarkBg: false
    }
  ];

  const clientLogos = [
    { name: "Cryptoforce", logo: "/cryptoforce.png", needsDarkBg: false },
    { name: "AWONE", logo: "/AWONE.png", needsDarkBg: true },
    { name: "SharpSell", logo: "/sharpsell.png", needsDarkBg: false },
    { name: "Ofofo", logo: "/Ofofo copy.png", needsDarkBg: true },
    { name: "CricClubs", logo: "/cricclubs-logo copy.png", needsDarkBg: false },
    { name: "PenguinAI", logo: "/penguinai.png", needsDarkBg: true },
    { name: "RezorEx", logo: "/rezorex.png", needsDarkBg: false },
    { name: "King & Shaxson", logo: "/kands.jpg", needsDarkBg: false }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden relative transition-colors duration-300"
      style={{ scrollMarginTop: '5rem' }}
    >
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6 shadow-lg border border-blue-100 dark:border-blue-900">
            <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Client Success Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ lineHeight: '1.2' }}>
            <span className="text-slate-900 dark:text-slate-100">Trusted by </span>
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light" style={{ lineHeight: '1.6' }}>
            See how enterprises worldwide are transforming their cloud operations with Xops360
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-on-scroll group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-500 to-blue-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-2 flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-bl-full"></div>

                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-5 mb-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">{testimonial.savings}</div>
                    <div className="text-sm font-semibold text-blue-100 uppercase tracking-wide">{testimonial.metric}</div>
                  </div>
                </div>

                <blockquote className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-8 flex-grow relative" style={{ lineHeight: '1.8' }}>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">"{testimonial.quote}"</span>
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden shadow-md flex items-center justify-center p-3 ${
                    testimonial.needsDarkBg
                      ? 'bg-gradient-to-br from-slate-700 to-slate-800'
                      : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
                  }`}>
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 dark:text-slate-100 text-base truncate">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 truncate font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 truncate font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll" style={{ animationDelay: '450ms' }}>
          <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700 dark:border-slate-800 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-center text-white mb-8">
              Powering Innovation for Leading Organizations
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 items-center">
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`relative w-full h-20 md:h-24 flex items-center justify-center p-4 rounded-xl border transition-all duration-300 hover:shadow-xl active:scale-95 ${
                    client.needsDarkBg
                      ? 'bg-gradient-to-br from-slate-700 to-slate-800 border-slate-600 hover:border-blue-400 hover:shadow-blue-500/20'
                      : 'bg-white dark:bg-slate-800 border-gray-100 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-blue-500/20'
                  }`}>
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm md:text-base text-gray-300 mb-4">
                Join these industry leaders in revolutionizing cloud operations
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  99.9% Uptime
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  SOC 2 Compliant
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                  Enterprise Grade
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
