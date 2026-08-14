import { TrendingDown, ShieldCheck, ListChecks, Clock } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';
import Reveal from './Reveal';

const badges = ['AWS Marketplace', 'Azure Marketplace', 'SOC 2', '99.9% Uptime', 'Read-only access'];

const stats = [
  { icon: TrendingDown, value: 22, suffix: '%', prefix: '', label: 'Average cost reduction', color: 'text-blue-800' },
  { icon: ListChecks, value: 1100, suffix: '+', prefix: '', label: 'Issues auto-triaged', color: 'text-teal-700' },
  { icon: ShieldCheck, value: 5, suffix: '', prefix: '', label: 'Frameworks, one scan', color: 'text-slate-700' },
  { icon: Clock, value: 24, suffix: '/7', prefix: '', label: 'Continuous monitoring', color: 'text-indigo-700' },
];

export default function TrustBar() {
  return (
    <section className="py-8 md:py-10 px-4 md:px-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-6 md:mb-8">
          <p className="text-xs md:text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
            Available on the major marketplaces
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {badges.map((b) => (
              <span key={b} className="text-[11px] md:text-xs font-semibold text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50">
                {b}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 rounded-2xl border border-gray-200 bg-gradient-to-r from-blue-50/60 via-white to-teal-50/60 p-5 md:p-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex flex-col items-center text-center">
                <Icon className={`w-5 h-5 md:w-6 md:h-6 ${s.color} mb-1.5`} />
                <p className={`text-2xl md:text-3xl lg:text-4xl font-bold ${s.color}`}>
                  <AnimatedNumber value={s.value} prefix={s.prefix} suffix={s.suffix} className="inline-block" />
                </p>
                <p className="text-[11px] md:text-xs text-gray-600 mt-1 leading-tight">{s.label}</p>
              </div>
            );
          })}
        </Reveal>
        <p className="text-[10px] md:text-[11px] text-gray-400 text-center mt-3">
          Figures reflect typical deployment outcomes; results vary by environment.
        </p>
      </div>
    </section>
  );
}
