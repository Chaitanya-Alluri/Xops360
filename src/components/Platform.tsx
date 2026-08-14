import AnimatedNumber from './AnimatedNumber';

export default function Platform() {
  return (
    <section aria-label="Platform overview"
      id="platform"
      className="py-12 md:py-16 px-4 md:px-6 bg-white"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 bg-teal-50 rounded-full mb-3">
          <p className="text-xs uppercase text-teal-700 font-semibold tracking-wide">
            MEET XOPS360
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-5">
          AI-Powered Cost, Security &amp; Compliance: Unified
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-5 md:mb-6 leading-relaxed">
          Xops360 brings FinOps, SecOps, CloudOps, and Agentic AI into one integrated platform, so finance, security, and engineering teams stay aligned on a single, real-time view of every cloud.
        </p>

        <blockquote className="text-lg md:text-xl lg:text-2xl italic text-blue-600 font-medium my-5 md:my-6">
          "Know what you're spending, what's at risk, and what to fix, instantly."
        </blockquote>

        <div className="relative mt-8 md:mt-10 fade-in">
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl md:rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden mx-auto max-w-5xl">
            <div className="p-4 md:p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-4 md:mb-5">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                <span className="ml-2 md:ml-4 text-xs md:text-sm text-gray-600 font-medium">Xops360 Platform Dashboard</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 shadow-md border border-gray-200">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <h3 className="text-xs md:text-sm font-semibold text-gray-600 uppercase">FinOps</h3>
                    <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-700 font-bold text-base md:text-lg">$</span>
                    </div>
                  </div>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                    $<AnimatedNumber value={847} className="inline-block" />K
                  </p>
                  <p className="text-xs md:text-sm text-green-700 font-semibold">
                    <AnimatedNumber value={22} suffix="%" prefix="-" className="inline-block" /> Optimized
                  </p>
                </div>

                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 shadow-md border border-gray-200">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <h3 className="text-xs md:text-sm font-semibold text-gray-600 uppercase">SecOps</h3>
                    <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 font-bold text-base md:text-lg">!</span>
                    </div>
                  </div>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                    <AnimatedNumber value={3} className="inline-block" /> Critical
                  </p>
                  <p className="text-xs md:text-sm text-orange-700 font-semibold">
                    <AnimatedNumber value={12} className="inline-block" /> Medium Risks
                  </p>
                </div>

                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 shadow-md border border-gray-200">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <h3 className="text-xs md:text-sm font-semibold text-gray-600 uppercase">Compliance</h3>
                    <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-700 font-bold text-base md:text-lg">&#10003;</span>
                    </div>
                  </div>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                    <AnimatedNumber value={100} suffix="%" className="inline-block" />
                  </p>
                  <p className="text-xs md:text-sm text-green-700 font-semibold">Audit Ready</p>
                </div>

                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 shadow-md border border-gray-200">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <h3 className="text-xs md:text-sm font-semibold text-gray-600 uppercase">Xhub</h3>
                    <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-700 font-bold text-base md:text-lg">AI</span>
                    </div>
                  </div>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                    <AnimatedNumber value={47} className="inline-block" />
                  </p>
                  <p className="text-xs md:text-sm text-cyan-700 font-semibold">One-click fixes</p>
                </div>
              </div>

              <div className="mt-3 md:mt-4 lg:mt-6 p-3 md:p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs md:text-sm text-blue-900">
                  <span className="font-semibold">AI Insight:</span> <AnimatedNumber value={15} className="inline-block" /> idle EC2 instances detected. Estimated monthly savings: $<AnimatedNumber value={4200} className="inline-block" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs md:text-sm text-gray-500 mt-5 md:mt-6 max-w-3xl mx-auto">
          Connect in minutes with <span className="font-medium text-gray-600">read-only access for discovery</span>, and enable <span className="font-medium text-gray-600">controlled, opt-in remediation</span> when you're ready to let Xops360 act.
        </p>
      </div>
    </section>
  );
}
