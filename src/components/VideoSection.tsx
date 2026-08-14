import { PlayCircle } from 'lucide-react';
import Reveal from './Reveal';
import { scrollToSection } from '../utils/scrollHelpers';

export default function VideoSection() {
  return (
    <section aria-label="Product overview video"
      id="overview"
      className="relative py-14 md:py-20 px-4 md:px-6 bg-gradient-to-b from-slate-900 to-blue-950 overflow-hidden"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="absolute inset-0 opacity-[0.15] bg-grid-dots" />
      <div className="relative max-w-5xl mx-auto">
        <Reveal className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-3 border border-white/15">
            <PlayCircle size={14} className="text-teal-300" />
            <p className="text-xs uppercase text-teal-300 font-semibold tracking-wide">See it in action</p>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Watch the Xops360 overview
          </h2>
          <p className="text-base md:text-lg text-blue-100/80 max-w-2xl mx-auto">
            A two-minute tour of how teams cut spend, close security gaps, and stay audit-ready, from one 360° view.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/yzNV0cILYM0?rel=0"
              title="Xops360 Platform Overview"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Reveal>

        <Reveal className="text-center mt-8">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-7 py-3 bg-white text-blue-800 font-semibold rounded-lg shadow hover:scale-105 transition-transform"
          >
            Book a live walkthrough
          </button>
        </Reveal>
      </div>
    </section>
  );
}
