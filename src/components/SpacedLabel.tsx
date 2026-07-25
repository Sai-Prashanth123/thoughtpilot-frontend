import { Fragment, useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from './icons';

interface SpacedLabelProps {
  lead: string;
  tail: string;
  /** Show the rotating corner arrow (as on the Stack heading). */
  arrow?: boolean;
  className?: string;
}

/**
 * Oversized "Lead — Tail" heading (e.g. "Our — Stack") whose letters wipe in
 * character-by-character on scroll, with an optional arrow that rotates in.
 */
export function SpacedLabel({ lead, tail, arrow = false, className }: SpacedLabelProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [spin, setSpin] = useState(false);

  const chars = [
    ...lead.split('').map((c) => ({ c, part: 'lead' as const })),
    ...tail.split('').map((c) => ({ c, part: 'tail' as const })),
  ];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!revealed || !arrow) return;
    const id = window.setTimeout(() => setSpin(true), chars.length * 35 + 250);
    return () => window.clearTimeout(id);
  }, [revealed, arrow, chars.length]);

  let index = -1;
  const renderPart = (part: 'lead' | 'tail') => (
    <span className={`${part} word`}>
      {chars
        .filter((ch) => ch.part === part)
        .map((ch) => {
          index += 1;
          const delay = `${index * 0.035}s`;
          return (
            <span key={index} className={`msk${revealed ? ' in' : ''}`} style={{ transitionDelay: delay }}>
              <i>{ch.c}</i>
            </span>
          );
        })}
    </span>
  );

  return (
    <h2 ref={ref} className={['spaced-label', className].filter(Boolean).join(' ')}>
      {renderPart('lead')}
      <Fragment> </Fragment>
      {renderPart('tail')}
      {arrow && <ArrowUpRight className={`stack-arrow${spin ? ' spin' : ''}`} width={42} height={42} />}
    </h2>
  );
}
