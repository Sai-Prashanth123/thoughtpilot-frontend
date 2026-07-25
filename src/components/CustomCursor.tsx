import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks/prefersReducedMotion';
import { LogoMark } from './icons';

/** A white badge carrying the brand mark, eased toward the cursor. Fine-pointer devices only. */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    const loop = () => {
      x += (targetX - x) * 0.25;
      y += (targetY - y) * 0.25;
      dot.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(loop);
    };

    document.body.classList.add('has-custom-cursor');
    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={dotRef} className="cursor-dot" aria-hidden="true">
      <LogoMark />
    </div>
  );
}
