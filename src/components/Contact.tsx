import { Mail, Phone, ArrowRight } from 'lucide-react';
import { CONTACT_EMAIL, SALES_PHONE, DEMO_BOOKING_URL, EXTERNAL_LINK, mailto } from '../config/site';

const EXPERT_MAILTO = mailto(
  'Speak with a cloud expert - Xops360',
  "Hi Xops360 team,\n\nI'd like to talk to a cloud expert about:\n\n\nThanks,"
);

export default function Contact() {

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT_EMAIL,
      link: `mailto:${CONTACT_EMAIL}`
    },
    {
      icon: Phone,
      label: 'Call us (US)',
      value: SALES_PHONE.display,
      link: SALES_PHONE.href
    }
  ];

  return (
    <section aria-label="Contact and demo request"
      id="contact"
      className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-5 lg:mb-6">
          Ready to turn your cloud into a competitive advantage?
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto">
          Connect read-only in minutes and see your own cost, security, and compliance findings in a
          live session. No procurement cycle required to get the first look.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <div className="space-y-4 md:space-y-5">
            <a
              href={DEMO_BOOKING_URL}
              {...EXTERNAL_LINK}
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
