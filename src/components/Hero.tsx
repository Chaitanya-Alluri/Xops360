import { ArrowRight, Sparkles, ShieldCheck, TrendingDown } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';
import { scrollToSection } from '../utils/scrollHelpers';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 md:pt-28 md:pb-16 px-4 md:px-6 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="absolute inset-0 opacity-40 bg-grid-dots" />

      <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-teal-500 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 rounded-full mb-4 border border-teal-100">
              <Sparkles size={13} className="text-teal-600" />
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                AI-Powered Multi-Cloud Governance
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-5">
              Cut spend. Close gaps.{' '}
              <span className="text-gradient">Stay audit-ready.</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto lg:mx-0">
              One 360° view of FinOps, security, and compliance across AWS, Azure, and Microsoft 365,
              with an AI co-pilot that explains every spike, flags every risk, and turns findings into
              one-click fixes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-6 md:mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-6 md:px-8 py-3 md:py-3.5 bg-gradient-animated text-white text-base md:text-lg font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center gap-2"
              >
                Request a Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 md:px-8 py-3 md:py-3.5 border-2 border-blue-600 text-blue-600 text-base md:text-lg font-semibold rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Talk to a Cloud Expert
              </button>
            </div>

            <div>
              <p className="text-xs md:text-sm text-gray-500 mb-3">
                Available on the AWS and Azure Marketplaces
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                <div className="px-4 md:px-5 py-2 md:py-2.5 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xs">
                    AWS
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-700">AWS Marketplace</span>
                </div>
                <div className="px-4 md:px-5 py-2 md:py-2.5 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                    Az
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-700">Azure Marketplace</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="animate-float">
              <div className="relative bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="p-4 md:p-5 lg:p-6">
                  {/* window chrome + live indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-400" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      <span className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Live · AWS + Azure
                      </span>
                    </div>
                  </div>

                  {/* Xara Agent conversational strip */}
                  <div className="mb-3.5 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-teal-50 p-3">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 w-6 h-6 rounded-md bg-gradient-to-br from-blue-800 to-teal-700 flex items-center justify-center flex-shrink-0">
                        <Sparkles size={13} className="text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] md:text-xs text-gray-500">You asked Xara</p>
                        <p className="text-xs md:text-sm font-medium text-gray-800 truncate">
                          "Why did my AWS bill jump this month?"
                        </p>
                        <p className="mt-1 text-[11px] md:text-xs text-blue-700">
                          15 idle EC2 instances found · ~AU$4,200/mo recoverable
                          <span className="ml-0.5 inline-block w-1.5 h-3 align-middle bg-blue-500 animate-blink" />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-3.5">
                    <div className="flex justify-between items-center p-3 md:p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
                      <div>
                        <p className="text-xs md:text-sm text-gray-600">Total Cloud Spend</p>
                        <p className="text-xl md:text-2xl font-bold text-gray-900">
                          <AnimatedNumber value={847230} prefix="AU$" className="inline-block" />
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-sm md:text-base text-green-600 font-semibold">
                        <TrendingDown size={16} />
                        <AnimatedNumber value={22} suffix="%" prefix="-" className="inline-block" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-3.5">
                      <div className="p-3 md:p-4 bg-red-50 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Critical Risks</p>
                        <p className="text-lg md:text-xl font-bold text-red-600">
                          <AnimatedNumber value={3} className="inline-block" />
                        </p>
                      </div>
                      <div className="p-3 md:p-4 bg-green-50 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                          <ShieldCheck size={12} className="text-green-600" /> Compliance
                        </p>
                        <p className="text-lg md:text-xl font-bold text-green-600">
                          <AnimatedNumber value={98} suffix="%" className="inline-block" />
                        </p>
                      </div>
                    </div>

                    <div className="p-3 md:p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-1.5 md:mb-2">
                        <p className="text-xs text-gray-600">Savings identified</p>
                        <p className="text-xs font-semibold text-blue-600">78% actioned</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-800 to-teal-700 h-2 rounded-full transition-all duration-1000" style={{ width: '78%' }} />
                      </div>
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
