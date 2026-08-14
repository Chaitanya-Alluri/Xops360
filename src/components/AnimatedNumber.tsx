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
  const elementRef = useRef<HTMLSpanElement>(null);

  const animateValue = useCallback(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = value * easeOutQuart;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

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
    return () => observer.disconnect();
  }, [animateValue]);

  const formattedValue = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.floor(displayValue).toLocaleString();

  return (
    <span ref={elementRef} className={className}>
      {prefix}{formattedValue}{suffix}
    </span>
  );
}
