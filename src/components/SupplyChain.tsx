import { PackageSearch, GitPullRequest, FileCode2, ScanLine, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import { scrollToSection } from '../utils/scrollHelpers';

/** Lock files the SCA scanner accepts, with the ecosystem it auto-detects. */
const lockFiles = [
  { file: 'package-lock.json', lang: 'npm' },
  { file: 'yarn.lock', lang: 'Yarn' },
  { file: 'pnpm-lock.yaml', lang: 'pnpm' },
  { file: 'poetry.lock', lang: 'Python' },
  { file: 'go.sum', lang: 'Go' },
  { file: 'Cargo.lock', lang: 'Rust' },
];

const modes = [
  {
    icon: ScanLine,
    label: 'Basic scan',
    gradient: 'from-slate-600 to-slate-800',
    desc: 'Upload a lock file and get a ranked CVE breakdown in minutes. Language and ecosystem are detected automatically, so there is nothing to configure.',
    points: ['Drop in any supported lock file', 'Automatic language detection', 'Findings ranked by severity'],
  },
  {
    icon: GitPullRequest,
    label: 'CI/CD integration',
    gradient: 'from-teal-600 to-teal-800',
    desc: "Wire the same scan into your pipeline so a vulnerable dependency is caught at the pull request, not in next quarter's audit.",
    points: ['Runs on every build', 'Catches risk before it ships', 'Feeds straight into the Xhub board'],
  },
];

export default function SupplyChain() {
  return (
    <section aria-label="Software composition analysis"
      id="supplychain"
      className="relative py-14 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="absolute inset-0 opacity-30 bg-grid-dots" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 rounded-full mb-3 border border-teal-100">
            <span className="text-[10px] font-bold uppercase tracking-wide text-white bg-teal-700 px-2 py-0.5 rounded">
              New
            </span>
            <PackageSearch size={13} className="text-teal-700" />
            <p className="text-xs uppercase text-teal-700 font-semibold tracking-wide">
              Software Composition Analysis
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Most of your code is <span className="text-gradient">someone else's code</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Open-source dependencies carry the vulnerabilities you inherit without ever reviewing.
            Xops360 SCA reads your lock files, maps every direct and transitive package to known CVEs,
            and puts the result on the same remediation board as the rest of your cloud risk.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Two scanning modes */}
          <Reveal className="flex flex-col gap-4 md:gap-5">
            {modes.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="group flex-1 rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm hover:shadow-lg hover:border-teal-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${m.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{m.label}</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">{m.desc}</p>
                  <ul className="space-y-1.5">
                    {m.points.map((p) => (
                      <li key={p} className="text-xs md:text-sm text-gray-500 flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-green-700 mt-0.5 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </Reveal>

          {/* Scanner panel */}
          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden flex flex-col">
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                <p className="text-sm font-semibold text-gray-700">Dependency scan</p>
                <span className="text-[11px] font-medium text-gray-500 px-2 py-1 rounded bg-white border border-gray-200">
                  Auto-detected
                </span>
              </div>

              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2.5">
                  Supported lock files
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {lockFiles.map((l) => (
                    <span
                      key={l.file}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] md:text-xs font-medium text-slate-700"
                    >
                      <FileCode2 size={12} className="text-slate-500" />
                      <code className="font-mono">{l.file}</code>
                      <span className="text-slate-500">{l.lang}</span>
                    </span>
                  ))}
                </div>

                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2.5">
                  Sample findings
                </p>
                <div className="space-y-2.5">
                  <div className="rounded-xl border border-red-100 bg-red-50/60 p-3.5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wide text-red-700 bg-red-100 px-2 py-0.5 rounded">
                        Critical
                      </span>
                      <span className="text-[11px] font-medium text-gray-600">transitive</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800">Remote code execution in a nested dependency</p>
                    <p className="text-[11px] text-gray-600 mt-0.5">
                      Pulled in 3 levels deep &middot; fixed in a newer minor release
                    </p>
                  </div>

                  <div className="rounded-xl border border-orange-100 bg-orange-50/60 p-3.5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wide text-orange-700 bg-orange-100 px-2 py-0.5 rounded">
                        High
                      </span>
                      <span className="text-[11px] font-medium text-gray-600">direct</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800">Prototype pollution in a direct dependency</p>
                    <p className="text-[11px] text-gray-600 mt-0.5">Upgrade path available &middot; no breaking change</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-start gap-2">
                  <ShieldAlert size={16} className="text-teal-700 mt-0.5 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-gray-600">
                    Every finding lands on the <span className="font-semibold text-gray-800">Xhub Remediation Board</span>{' '}
                    with an owner and an SLA clock, alongside your cloud misconfigurations and CVEs.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="text-center mt-8 md:mt-10">
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-2 text-teal-700 font-semibold hover:gap-3 transition-all"
          >
            Scan your dependencies in a demo
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
