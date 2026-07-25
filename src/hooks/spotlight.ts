import type { MouseEvent } from 'react';
import { prefersReducedMotion } from './prefersReducedMotion';

/**
 * Tracks the cursor position over an element as CSS custom properties
 * (--mx/--my, percentage-based) for a radial-gradient spotlight hover.
 * Pass as an `onMouseMove` handler. No-op when the user prefers reduced motion.
 */
export function spotlightMove(e: MouseEvent<HTMLElement>) {
  if (prefersReducedMotion()) return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
  el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
}
