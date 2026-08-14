import { useEffect, useRef, useState, useCallback } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function AnimatedNumber({
  value,
  duration = 2000,
  className = '',
  prefix = '',
  suffix = '',
  decimals = 0
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);
  const frameRef = useRef(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  const animateValue = useCallback(() => {
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      if (progress < 1) {
        setDisplayValue(value * easeOutQuart);
        frameRef.current = requestAnimationFrame(animate);
      } else {
        frameRef.current = 0;
        setDisplayValue(value);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  }, [value, duration]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Counting up is decorative; honour the OS setting and show the final
    // figure immediately instead.
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animateValue();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      // Without this the loop keeps calling setState after unmount.
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [animateValue, value]);

  // Pinned to en-US so thousands separators never follow the visitor's locale.
  const formattedValue = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.floor(displayValue).toLocaleString('en-US');

  return (
    <span ref={elementRef} className={className}>
      {prefix}{formattedValue}{suffix}
    </span>
  );
}
