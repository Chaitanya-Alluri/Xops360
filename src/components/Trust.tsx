import { Eye, Users, KeyRound, FileClock, CalendarClock, Building2, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

/**
 * Governance and access controls. This is the material enterprise security
 * review and procurement ask for, so every item here maps to a shipped
 * capability rather than a generic trust claim.
 */
const controls = [
  {
    icon: Eye,
    title: 'Read-only by default',
    desc: 'Connect your accounts with read-only access for discovery. Remediation stays opt-in, so Xops360 only changes what you explicitly allow it to change.',
  },
  {
    icon: Users,
    title: 'Role-based access control',
    desc: 'Invite teammates and assign roles, track active and pending members, resend invitations, and deactivate access when people move on.',
  },
  {
    icon: KeyRound,
    title: 'Enforced multi-factor auth',
    desc: 'MFA via authenticator app or email OTP, enforceable across your whole organization rather than left to individual users.',
  },
  {
    icon: FileClock,
    title: 'Audit trail and reports',
    desc: 'A centralized report repository with full scan history. Filter by scan type and date range, then view or export whatever your auditor asks for.',
  },
  {
    icon: CalendarClock,
    title: 'Scheduled, continuous scanning',
    desc: 'Set every scan type to a 12-hour, daily, weekly, monthly, or custom cadence, so continuous compliance is a schedule rather than a promise.',
  },
  {
    icon: Building2,
    title: 'Multi-account onboarding',
    desc: 'Connect AWS Organizations with linked accounts, Azure Management Groups, Microsoft 365, Entra ID, and EKS, with connection status visible per account.',
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      aria-label="Security and governance controls"
      className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full mb-3 border border-blue-100">
            <ShieldCheck size={13} className="text-blue-700" />
            <p className="text-xs uppercase text-blue-700 font-semibold tracking-wide">
              Security &amp; governance
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Answers your security review will ask for
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Governance tooling has to clear its own governance bar. Here is how access, identity, and
            auditability work before the first scan runs.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {controls.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={(i % 3) * 90} className="h-full">
                <div className="h-full bg-white rounded-xl p-5 md:p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-3.5">
                    <Icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
