import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import CountingNumber from './CountingNumber';

export default function Platform() {
  return (
    <section
      id="platform"
      className="bg-white dark:bg-slate-950 transition-colors duration-300 py-16 md:py-20 px-6"
      style={{ scrollMarginTop: '5rem' }}
    >
      <div className="text-center w-full" style={{ maxWidth: 'min(80rem, 95%)', margin: '0 auto' }}>
        <ScrollAnimationWrapper>
          <div className="inline-block bg-teal-50 dark:bg-teal-900/30 rounded-full px-5 py-2.5 mb-6 transition-all duration-300 hover:scale-105 hover:shadow-md">
            <p className="uppercase text-teal-600 dark:text-teal-400 font-bold tracking-wide text-sm">
              Meet Xops360
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight" style={{ lineHeight: '1.2' }}>
            <span className="block text-gray-900 dark:text-slate-100 mb-3">AI-Powered Cloud Optimization,</span>
            <span className="block bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">Risk Mitigation & Compliance</span>
          </h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={200}>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-400 leading-relaxed mb-10 mx-auto max-w-4xl" style={{ lineHeight: '1.7' }}>
            Xops360 delivers comprehensive cloud management through an integrated platform combining AI-driven cost optimization, continuous security monitoring, and proactive compliance management. Bringing everything into one seamless view so finance, security, and engineering teams stay aligned in real time.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={300}>
          <blockquote className="italic text-blue-600 dark:text-blue-400 font-semibold my-10 text-lg sm:text-xl md:text-2xl" style={{ lineHeight: '1.4' }}>
            "Know what you're spending, what's at risk, and what to fix—instantly."
          </blockquote>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={400}>
          <div className="relative mt-12">
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl border-2 border-gray-200 dark:border-slate-700 overflow-hidden mx-auto transition-all duration-300 hover:border-gray-300 dark:hover:border-slate-600 p-6 sm:p-8 shadow-2xl max-w-6xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-red-500 rounded-full w-3 h-3"></div>
                <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
                <div className="bg-green-500 rounded-full w-3 h-3"></div>
                <span className="text-gray-600 dark:text-slate-400 font-medium ml-3 text-sm">Xops360 Platform Dashboard</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Cost Module', bg: 'bg-blue-100', text: 'text-blue-600', symbol: '$', numValue: 847, suffix: 'K', prefix: '$', detail: 'Optimized', detailNum: 22, detailPrefix: '-', detailSuffix: '%', detailColor: 'text-green-600' },
                  { title: 'Security', bg: 'bg-red-100', text: 'text-red-600', symbol: '!', numValue: 3, suffix: ' Critical', detail: 'Medium Risks', detailNum: 12, detailColor: 'text-orange-600' },
                  { title: 'Compliance', bg: 'bg-green-100', text: 'text-green-600', symbol: '✓', numValue: 100, suffix: '%', detail: 'Audit Ready', detailColor: 'text-green-600' },
                  { title: 'WAR AI', bg: 'bg-purple-100', text: 'text-purple-600', symbol: 'AI', numValue: 47, detail: 'Recommendations', detailColor: 'text-purple-600' }
                ].map((card, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-950 rounded-xl border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group p-5">
                    <div className="flex items-center justify-between" style={{ marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}>
                      <h3 className="font-semibold text-gray-600 uppercase" style={{ fontSize: 'clamp(0.7rem, 1.3vw, 0.75rem)' }}>{card.title}</h3>
                      <div className={`${card.bg} rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`} style={{ width: 'clamp(2rem, 4vw, 2.5rem)', height: 'clamp(2rem, 4vw, 2.5rem)' }}>
                        <span className={`${card.text} font-bold`} style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>{card.symbol}</span>
                      </div>
                    </div>
                    <p className="font-bold text-gray-900 mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)' }}>
                      <CountingNumber
                        end={card.numValue}
                        prefix={card.prefix || ''}
                        suffix={card.suffix || ''}
                        duration={2500}
                      />
                    </p>
                    <p className={`${card.detailColor} font-semibold`} style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>
                      {card.detailNum ? (
                        <>
                          <CountingNumber
                            end={card.detailNum}
                            prefix={card.detailPrefix || ''}
                            suffix={card.detailSuffix || ''}
                            duration={2500}
                          />
                          {' '}{card.detail}
                        </>
                      ) : card.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 mt-6 p-4">
                <p className="text-blue-900 dark:text-blue-300 text-sm">
                  <span className="font-bold">AI Insight:</span> 15 idle EC2 instances detected. Estimated monthly savings: $4,200
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={500}>
          <p className="text-gray-500 dark:text-slate-500 mx-auto text-sm max-w-3xl mt-8">
            Xops360 delivers cost-efficient operations, strengthened security, automated compliance, and intelligent remediation — all achieved with read-only access.
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
