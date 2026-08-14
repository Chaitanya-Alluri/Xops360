import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms (applied once the element enters the viewport). */
  delay?: number;
  className?: string;
  /** Render as a different element (e.g. 'li'). Defaults to 'div'. */
  as?: 'div' | 'li' | 'section';
}

/**
 * Wraps content and fades/slides it in the first time it scrolls into view.
 * Respects prefers-reduced-motion via the .reveal styles in index.css.
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fail open: if the observer is unavailable or never fires (hidden tab,
    // reduced-motion, older browsers), show the content rather than leaving
    // the page blank.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);

    // Safety net — never leave content permanently invisible.
    const failSafe = window.setTimeout(() => setVisible(true), 2000);

    return () => {
      window.clearTimeout(failSafe);
      observer.disconnect();
    };
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
