import { Mail, Phone, ArrowRight } from 'lucide-react';

const DEMO_MAILTO =
  'mailto:hello@xops360.com.au?subject=Demo%20request%20%E2%80%94%20Xops360&body=Hi%20Xops360%20team%2C%0A%0AI%27d%20like%20to%20see%20a%20demo.%0A%0ACompany%3A%0AClouds%20in%20use%20(AWS%2FAzure%2FM365)%3A%0AApprox.%20monthly%20cloud%20spend%3A%0A%0AThanks%2C';

const EXPERT_MAILTO =
  'mailto:hello@xops360.com.au?subject=Speak%20with%20a%20cloud%20expert%20%E2%80%94%20Xops360&body=Hi%20Xops360%20team%2C%0A%0AI%27d%20like%20to%20talk%20to%20a%20cloud%20expert%20about%3A%0A%0A%0AThanks%2C';

export default function Contact() {

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@xops360.com.au',
      link: 'mailto:hello@xops360.com.au'
    },
    {
      icon: Phone,
      label: 'Call us (AU)',
      value: '+61 402 199 442',
      link: 'tel:+61402199442'
    }
  ];

  return (
    <section
      id="contact"
      className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-5 lg:mb-6">
          Ready to turn your cloud into a competitive advantage?
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto">
          See how Xops360 can reduce costs, strengthen security, and ensure compliance for your enterprise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <div className="space-y-4 md:space-y-5">
            <a
              href={DEMO_MAILTO}
              className="group w-full px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-base md:text-lg lg:text-xl font-bold rounded-xl shadow-2xl hover:scale-105 md:hover:scale-110 hover:shadow-blue-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center gap-2 md:gap-3"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={EXPERT_MAILTO}
              className="w-full px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 border-2 border-white text-white text-base md:text-lg lg:text-xl font-bold rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center"
            >
              Talk to a Cloud Expert
            </a>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-5">Get in Touch</h3>
            <div className="space-y-3 md:space-y-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-center gap-3 md:gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs md:text-sm text-gray-300">{contact.label}</p>
                      <p className="text-base md:text-lg font-medium text-white">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
