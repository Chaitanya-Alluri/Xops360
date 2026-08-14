import { useEffect, useState } from 'react';
import { Search, ListChecks, Wrench, GitBranch, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import Reveal from './Reveal';
import AnimatedNumber from './AnimatedNumber';

const stages = [
  { icon: Search, title: 'Detect', desc: 'Cost, security & compliance findings from every cloud', color: 'from-blue-600 to-blue-800' },
  { icon: ListChecks, title: 'Triage', desc: 'Auto-prioritised by severity with an SLA clock', color: 'from-indigo-600 to-indigo-800' },
  { icon: Wrench, title: 'Remediate', desc: 'One-click fix, no console hopping', color: 'from-teal-600 to-teal-800' },
  { icon: GitBranch, title: 'Sync', desc: 'Pushed to Jira or ServiceNow with full context', color: 'from-slate-600 to-slate-800' },
  { icon: CheckCircle2, title: 'Resolved', desc: 'Closed, tracked, and proven for audit', color: 'from-emerald-600 to-emerald-700' },
];

export default function Remediation() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setActive(stages.length - 1);
      return;
    }
    const id = setInterval(() => setActive((a) => (a + 1) % stages.length), 1300);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="remediation"
      className="py-14 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white via-blue-50/40 to-white relative overflow-hidden"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="absolute inset-0 opacity-30 bg-grid-dots" />
      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 rounded-full mb-3 border border-teal-100">
            <Wrench size={13} className="text-teal-600" />
            <p className="text-xs uppercase text-teal-600 font-semibold tracking-wide">
              The Xhub Remediation Board
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            From <span className="text-gradient">"what's wrong"</span> to <span className="text-gradient">"it's fixed"</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Other tools stop at the finding. Xops360 turns every issue into an owned, SLA-tracked ticket
            you can remediate in one click, and sync straight to Jira or ServiceNow.
          </p>
        </Reveal>

        {/* Animated workflow pipeline */}
        <Reveal className="mb-10 md:mb-14">
          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-3">
            {stages.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              const isDone = i < active;
              return (
                <div key={s.title} className="relative flex flex-col items-center text-center">
                  <div className="relative">
                    {isActive && (
                      <span className="absolute inset-0 rounded-2xl bg-teal-400/40 animate-pulse-ring" />
                    )}
                    <div
                      className={`relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-3 transition-all duration-500 ${
                        isActive
                          ? `bg-gradient-to-br ${s.color} scale-110 ring-4 ring-teal-200`
                          : isDone
                          ? 'bg-gradient-to-br from-emerald-600 to-emerald-700'
                          : 'bg-slate-200'
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      ) : (
                        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      )}
                    </div>
                  </div>
                  <p className={`text-sm md:text-base font-semibold transition-colors ${isActive || isDone ? 'text-gray-900' : 'text-gray-400'}`}>
                    {s.title}
                  </p>
                  <p className="text-[11px] md:text-xs text-gray-500 mt-1 max-w-[10rem]">{s.desc}</p>
                  {i < stages.length - 1 && (
                    <ArrowRight
                      className={`hidden md:block absolute top-4 -right-2 w-5 h-5 transition-colors duration-500 ${
                        i < active ? 'text-green-500' : 'text-gray-300'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Governance posture tiles */}
          <Reveal className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm text-center">
                <p className="text-2xl md:text-3xl font-bold text-gray-900">
                  <AnimatedNumber value={1123} className="inline-block" />
                </p>
                <p className="text-[11px] md:text-xs text-gray-500 mt-1">Issues triaged</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm text-center">
                <p className="text-2xl md:text-3xl font-bold text-teal-600">
                  <AnimatedNumber value={72} suffix="%" className="inline-block" />
                </p>
                <p className="text-[11px] md:text-xs text-gray-500 mt-1">Governance score</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm text-center">
                <p className="text-2xl md:text-3xl font-bold text-red-500">
                  AU$<AnimatedNumber value={3197} className="inline-block" />
                </p>
                <p className="text-[11px] md:text-xs text-gray-500 mt-1">Monthly leakage</p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm flex-1">
              <p className="text-sm font-semibold text-gray-900 mb-3">Unified triage across every discipline</p>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" /> Security misconfigurations &amp; compliance failures</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" /> Workload CVEs from AMI, ECR &amp; ACR scans</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" /> Cost leakage &amp; idle-resource waste</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" /> Per-account governance score, leakage &amp; SLA breaches</li>
              </ul>
            </div>
          </Reveal>

          {/* Sample finding card */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden h-full">
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                <p className="text-sm font-semibold text-gray-700">Remediation Board</p>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-gray-500 px-2 py-1 rounded bg-white border border-gray-200">Jira</span>
                  <span className="text-[11px] font-medium text-gray-500 px-2 py-1 rounded bg-white border border-gray-200">ServiceNow</span>
                </div>
              </div>
              <div className="p-4 md:p-5 space-y-3">
                <div className="rounded-xl border border-red-100 bg-red-50/60 p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-red-600 bg-red-100 px-2 py-0.5 rounded">Critical</span>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-red-500">
                      <Clock size={12} /> SLA breach · 2d 4h
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-800">Root user not protected with hardware MFA</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">SecOps · CIS-1.5 · 3 resources</p>
                  <div
                    aria-hidden="true"
                    className="mt-3 w-full bg-gradient-animated text-white text-sm font-semibold py-2 rounded-lg shadow flex items-center justify-center gap-1.5 select-none"
                  >
                    <Wrench size={14} /> Remediate
                  </div>
                </div>
                <div className="rounded-xl border border-orange-100 bg-orange-50/60 p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-orange-600 bg-orange-100 px-2 py-0.5 rounded">High</span>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-gray-500">
                      <Clock size={12} /> Due in 5d
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-800">CVE-2022-32221 detected in ECR image</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">CloudOps · Workload Security · 3 resources</p>
                </div>
                <div className="rounded-xl border border-green-100 bg-green-50/60 p-3 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                  <p className="text-sm text-gray-700">17 idle EC2 instances right-sized · <span className="font-semibold text-green-700">AU$4,200/mo saved</span></p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
