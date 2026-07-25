import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { liquidbuttonVariants, GlassFilter } from './ui/liquid-glass-button';

type LiquidGlassLinkProps = React.ComponentProps<'a'> &
  VariantProps<typeof liquidbuttonVariants> & {
    /** Optional darker glass treatment for use on light backgrounds. */
    tone?: 'light' | 'dark';
  };

/**
 * Anchor sibling of `LiquidButton`. The button component renders several
 * children (glass layers + label + SVG filter), which means Radix `Slot`
 * (`asChild`) can't be used to turn it into a link — Slot needs a single
 * child. This component reproduces the same liquid-glass surface on a real
 * `<a>` so the primary CTAs can be links.
 */
export function LiquidGlassLink({
  className,
  variant,
  size,
  tone = 'light',
  children,
  ...props
}: LiquidGlassLinkProps) {
  const ring =
    tone === 'dark'
      ? 'shadow-[0_0_6px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.35),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.5),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.35),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.3),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.3),inset_0_0_6px_6px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.25)]'
      : 'shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.9),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(255,255,255,0.15)]';

  return (
    <a
      data-slot="liquid-link"
      className={cn(
        'group/liquid',
        liquidbuttonVariants({ variant, size, className }),
        'transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03]',
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-full"
        style={{ backdropFilter: 'url("#container-glass")', WebkitBackdropFilter: 'blur(2px)' }}
      />
      <div className={cn('pointer-events-none absolute inset-0 z-0 h-full w-full rounded-full transition-all', ring)} />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      <GlassFilter />
    </a>
  );
}
