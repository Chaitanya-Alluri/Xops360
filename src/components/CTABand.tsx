import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scrollHelpers';
import Reveal from './Reveal';

interface CTABandProps {
  headline: string;
  sub?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export default function CTABand({
  headline,
  sub,
  primaryLabel = 'Request a Demo',
  secondaryLabel = 'Talk to a Cloud Expert',
}: CTABandProps) {
  return (
    <section aria-label="Request a demo" className="px-4 md:px-6 py-10 md:py-12">
      <Reveal className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-animated px-6 py-8 md:px-10 md:py-10 shadow-xl">
          <div className="absolute inset-0 opacity-20 bg-grid-dots" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-5">
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{headline}</h3>
              {sub && <p className="text-sm md:text-base text-blue-50 mt-1.5 max-w-xl">{sub}</p>}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                {primaryLabel}
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-white/70 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {secondaryLabel}
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
