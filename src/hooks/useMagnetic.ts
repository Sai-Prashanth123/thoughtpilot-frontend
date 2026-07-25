import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from './prefersReducedMotion';

/**
 * Makes an element gently follow the cursor while hovered, snapping back on
 * leave. No-op when the user prefers reduced motion.
 */
export function useMagnetic<T extends HTMLElement>(strengthX = 0.28, strengthY = 0.45) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const mx = (e.clientX - r.left - r.width / 2) * strengthX;
      const my = (e.clientY - r.top - r.height / 2) * strengthY;
      el.style.transform = `translate(${mx}px, ${my}px)`;
    };
    const onLeave = () => {
      el.style.transform = '';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.style.transform = '';
    };
  }, [strengthX, strengthY]);

  return ref;
}
