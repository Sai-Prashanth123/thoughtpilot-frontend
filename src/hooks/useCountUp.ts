import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from './prefersReducedMotion';

/**
 * Counts from 0 up to `target` (eased) the first time the element enters the
 * viewport. Returns a ref for the element and the current display text.
 */
export function useCountUp<T extends HTMLElement = HTMLElement>(
  target: number,
  suffix = '',
  durationMs = 1300,
) {
  const ref = useRef<T>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          io.unobserve(el);

          let startTs: number | null = null;
          const tick = (ts: number) => {
            if (startTs === null) startTs = ts;
            const p = Math.min((ts - startTs) / durationMs, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, durationMs]);

  return { ref, text: `${value}${suffix}` };
}
