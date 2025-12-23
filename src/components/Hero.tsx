import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import CountingNumber from './CountingNumber';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="absolute inset-0 opacity-30 parallax-bg">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #0066CC 1px, transparent 1px)',
          backgroundSize: 'clamp(30px, 5vw, 40px) clamp(30px, 5vw, 40px)'
        }}></div>
      </div>

      <div className="absolute top-[10%] right-[5%] w-[min(24rem,40vw)] h-[min(24rem,40vw)] bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[min(24rem,40vw)] h-[min(24rem,40vw)] bg-teal-500 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left animate-on-scroll space-y-6">
            <div className="inline-block bg-teal-50 dark:bg-teal-900/30 rounded-full px-5 py-2.5 transition-all duration-300 hover:scale-105 hover:shadow-md">
              <p className="font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wide text-sm">
                AI-Powered Cloud Optimization
              </p>
            </div>

            <h1 className="font-bold leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ lineHeight: '1.15' }}>
              <span className="block text-gray-900 dark:text-slate-100 mb-2">Slash Cloud Spend, Close Security Gaps,</span>
              <span className="block text-gray-900 dark:text-slate-100 mb-2">and Stay Audit-Ready</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">With One 360° View</span>
            </h1>

            <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0" style={{ lineHeight: '1.7' }}>
              Give your teams an AI co-pilot that explains every spike, flags every risk, and finds savings in real time—without changing a single line of code.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://xops.axiomio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ripple pulse-ring touch-feedback group relative bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 flex items-center justify-center gap-2 overflow-hidden hover:-translate-y-1 hover:shadow-xl active:scale-95 px-8 py-4 text-base sm:text-lg"
                style={{ minHeight: '44px', minWidth: '200px' }}
              >
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>

              <a
                href="https://calendly.com/kishan-k/"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-feedback smooth-color-transition border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 inline-flex items-center justify-center hover:-translate-y-1 hover:bg-blue-50 dark:hover:bg-slate-900 hover:shadow-lg active:scale-95 px-8 py-4 text-base sm:text-lg"
                style={{ minHeight: '44px', minWidth: '200px' }}
              >
                Talk to a Cloud Expert
              </a>
            </div>

            <div className="pt-6 space-y-4">
              <p className="text-gray-500 dark:text-slate-500 text-sm">
                Trusted by enterprises in Healthcare, Finance, Education, and Gaming
              </p>
              <p className="text-gray-700 dark:text-slate-300 font-medium text-sm sm:text-base">
                Available on AWS Marketplace and Microsoft Azure Marketplace
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="https://aws.amazon.com/marketplace/pp/prodview-mgb4abuyr734a#:~:text=The%20best%20features%20of%20Xops,monitor%20security%20across%20various%20platforms."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-lift touch-feedback bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 active:scale-95 px-4 py-3"
                  style={{ minHeight: '44px' }}
                >
                  <img
                    src="/AWS.png"
                    alt="Available in AWS Marketplace"
                    className="h-9 w-auto"
                  />
                </a>
                <a
                  href="https://marketplace.microsoft.com/en-us/product/saas/axiomio1732009261776.xops?tab=overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-lift touch-feedback bg-white rounded-lg border border-gray-200 flex items-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-3 sm:px-4 py-2 sm:py-3"
                  style={{ minHeight: '44px' }}
                >
                  <img
                    src="/Azure.png"
                    alt="Available in Microsoft AppSource"
                    className="h-9 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="relative animate-on-scroll">
            <div className="animate-float">
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-red-500 rounded-full w-3 h-3 transition-all duration-300 hover:scale-110"></div>
                  <div className="bg-yellow-500 rounded-full w-3 h-3 transition-all duration-300 hover:scale-110"></div>
                  <div className="bg-green-500 rounded-full w-3 h-3 transition-all duration-300 hover:scale-110"></div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 p-3 sm:p-4">
                    <div>
                      <p className="text-gray-600 text-xs sm:text-sm">Total Cloud Spend</p>
                      <p className="font-bold text-gray-900 text-xl sm:text-2xl">
                        <CountingNumber end={847230} prefix="$" className="font-bold text-gray-900" />
                      </p>
                    </div>
                    <div className="text-green-600 font-semibold text-base sm:text-lg">
                      <CountingNumber end={22} prefix="-" suffix="%" className="text-green-600 font-semibold" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-red-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 p-3 sm:p-4">
                      <p className="text-gray-600 mb-1 text-xs">Critical Risks</p>
                      <p className="font-bold text-red-600 text-lg sm:text-xl">
                        <CountingNumber end={3} className="font-bold text-red-600" />
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 p-3 sm:p-4">
                      <p className="text-gray-600 mb-1 text-xs">Compliance</p>
                      <p className="font-bold text-green-600 text-lg sm:text-xl">
                        <CountingNumber end={100} suffix="%" className="font-bold text-green-600" />
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md p-3 sm:p-4">
                    <p className="text-gray-600 mb-2 text-xs">Cost Optimization</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-full transition-all duration-1000 ease-out h-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
