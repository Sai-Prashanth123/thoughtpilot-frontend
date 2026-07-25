import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

/* ------------------------------------------------------------------ *
 * Standard shadcn button
 * ------------------------------------------------------------------ */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/40',
        outline:
          'border border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        xl: 'h-12 rounded-md px-8 has-[>svg]:px-6 text-base',
        xxl: 'h-14 rounded-md px-10 has-[>svg]:px-8 text-lg',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

/* ------------------------------------------------------------------ *
 * Liquid glass button
 * ------------------------------------------------------------------ */

const liquidbuttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer",
  {
    variants: {
      variant: {
        default: 'bg-transparent',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        xl: 'h-12 rounded-md px-8 has-[>svg]:px-6 text-base',
        xxl: 'h-14 rounded-md px-10 has-[>svg]:px-8 text-lg',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type LiquidButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean;
  };

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: LiquidButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      data-slot="button"
      className={cn(
        'group/liquid',
        liquidbuttonVariants({ variant, size, className }),
        'transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03]',
      )}
      {...props}
    >
      {/* frosted refractive surface (behind the label) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-full"
        style={{ backdropFilter: 'url("#container-glass")', WebkitBackdropFilter: 'blur(2px)' }}
      />
      {/* inner + outer light rings that give the glass its bevel */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full rounded-full shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.9),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      <GlassFilter />
    </Comp>
  );
}

/* ------------------------------------------------------------------ *
 * SVG displacement filter used by the liquid glass surface
 * ------------------------------------------------------------------ */

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ *
 * Metal button
 * ------------------------------------------------------------------ */

const metalButtonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'text-white bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_2px_8px_rgba(0,0,0,0.4)] hover:from-neutral-600 hover:to-neutral-800',
        primary:
          'text-primary-foreground bg-gradient-to-b from-[#a99af0] to-[#6f5cc4] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_2px_10px_rgba(110,92,196,0.45)] hover:brightness-110',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type MetalButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof metalButtonVariants>;

function MetalButton({ className, variant, ...props }: MetalButtonProps) {
  return (
    <button
      data-slot="button"
      className={cn(metalButtonVariants({ variant, className }))}
      {...props}
    />
  );
}

export {
  Button,
  buttonVariants,
  LiquidButton,
  liquidbuttonVariants,
  GlassFilter,
  MetalButton,
};
