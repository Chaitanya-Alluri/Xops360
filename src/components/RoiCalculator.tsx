import { useState } from 'react';
import { Calculator, TrendingDown, ArrowRight, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import { scrollToSection } from '../utils/scrollHelpers';
import { SAVINGS_RATE, formatUSD } from '../config/site';

export default function RoiCalculator() {
  const [monthly, setMonthly] = useState(80000);

  const monthlySavings = Math.round(monthly * SAVINGS_RATE);
  const annualSavings = monthlySavings * 12;

  return (
    <section
      id="roi"
      className="py-12 md:py-16 px-4 md:px-6 bg-gray-50"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full mb-3 border border-blue-100">
            <Calculator size={13} className="text-blue-600" />
            <p className="text-xs uppercase text-blue-600 font-semibold tracking-wide">See your number</p>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Estimate what Xops360 could save you
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Slide to your monthly cloud spend and see the savings teams typically recover in year one.
          </p>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Input side */}
              <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
                <label htmlFor="monthly-spend" className="block text-sm font-semibold text-gray-700 mb-1">
                  Your monthly cloud spend
                </label>
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                  ${formatUSD(monthly)}
                  <span className="text-base font-medium text-gray-400"> /mo</span>
                </p>
                <input
                  id="monthly-spend"
                  type="range"
                  min={10000}
                  max={1000000}
                  step={5000}
                  value={monthly}
                  onChange={(e) => setMonthly(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-blue-800 to-teal-700 accent-blue-600"
                  aria-label="Monthly cloud spend"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-2">
                  <span>$10K</span>
                  <span>$1M</span>
                </div>
                <p className="text-xs text-gray-500 mt-5 leading-relaxed">
                  Based on an average <span className="font-semibold text-gray-700">22%</span> reduction across
                  typical deployments. Illustrative only, your actual savings depend on your environment.
                </p>
              </div>

              {/* Output side */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-blue-800 to-teal-700 text-white flex flex-col justify-center">
                <p className="text-sm font-medium text-blue-50 flex items-center gap-1.5">
                  <TrendingDown size={16} /> Estimated recoverable / year
                </p>
                <p className="text-4xl md:text-5xl font-bold my-2 tabular-nums">
                  ${formatUSD(annualSavings)}
                </p>
                <p className="text-sm text-blue-50">
                  ≈ <span className="font-semibold text-white">${formatUSD(monthlySavings)}</span> every month back in budget
                </p>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="group mt-6 inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:scale-[1.02] transition-transform"
                >
                  <Sparkles size={16} />
                  Get a free Cloud Health Check
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[11px] text-blue-100 mt-2 text-center">
                  Read-only connect · findings in minutes · no credit card
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
