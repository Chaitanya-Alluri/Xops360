import { Mail, Globe, Phone, ArrowRight, Sparkles } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@axiomio.com',
      link: 'mailto:hello@axiomio.com',
      bgGradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'axiomio.com/xops',
      link: 'https://axiomio.com/xops',
      bgGradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: Phone,
      label: 'Call Us (USA)',
      value: '+1 323 499 3203',
      link: 'tel:+13234993203',
      bgGradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-15 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 backdrop-blur-sm border border-teal-400/20 rounded-full px-4 py-2 mb-6 mt-8">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-sm font-medium text-teal-300">Let's Connect</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" style={{ lineHeight: '1.3' }}>
            <span className="text-white block mb-3">Ready to transform your</span>
            <span className="block bg-gradient-to-r from-blue-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
              cloud operations?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
            See how Xops360 can reduce costs, strengthen security, and ensure compliance for your enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Start Your Journey
              </h3>

              <div className="space-y-4">
                <a
                  href="https://xops.axiomio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full px-8 py-5 bg-gradient-to-r from-blue-500 to-teal-400 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 flex items-center justify-center gap-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                </a>

                <a
                  href="https://calendly.com/kishan-k/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full px-8 py-5 border-2 border-white/30 text-white text-lg font-bold rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 inline-flex items-center justify-center gap-3"
                >
                  <span>Talk to a Cloud Expert</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 text-center">
                  No credit card required • Setup in minutes
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contacts.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.link}
                      className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                      target={contact.icon === Globe ? '_blank' : undefined}
                      rel={contact.icon === Globe ? 'noopener noreferrer' : undefined}
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${contact.bgGradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-left flex-1">
                        <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                        <p className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">{contact.value}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-md rounded-3xl p-6 border border-teal-400/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Response Time</p>
                  <p className="text-sm text-teal-200">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
