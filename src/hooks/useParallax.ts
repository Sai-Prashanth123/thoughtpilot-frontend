import { useCallback, useRef } from 'react';
import { prefersReducedMotion } from './prefersReducedMotion';

/**
 * Shared parallax manager: every registered element drifts vertically based on
 * its position in the viewport, driven by a single rAF-throttled scroll loop.
 */
const elements = new Set<HTMLElement>();
let initialised = false;
let ticking = false;

function update() {
  ticking = false;
  const vh = window.innerHeight;
  elements.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.bottom < -120 || r.top > vh + 120) return;
    const progress = (r.top + r.height / 2 - vh / 2) / vh;
    el.style.transform = `translateY(${progress * -28}px) scale(1.14)`;
  });
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}

function ensureInit() {
  if (initialised || prefersReducedMotion()) return;
  initialised = true;
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
}

export function useParallax<T extends HTMLElement>() {
  const current = useRef<T | null>(null);

  return useCallback((el: T | null) => {
    if (current.current) elements.delete(current.current);
    current.current = el;
    if (!el || prefersReducedMotion()) return;
    elements.add(el);
    ensureInit();
    // Position immediately so it isn't flat on first paint.
    requestAnimationFrame(update);
  }, []);
}
