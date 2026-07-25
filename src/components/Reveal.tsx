import type { ElementType, MouseEvent, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  /** Element/tag to render. Defaults to a div. */
  as?: ElementType;
  /** Stagger step (1–3) mapped to a CSS transition-delay. */
  delay?: 1 | 2 | 3;
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  onMouseMove?: (e: MouseEvent<HTMLElement>) => void;
}

/**
 * Renders its children as the given element with the `.reveal` class and wires
 * up the intersection observer that toggles `.in` on first view.
 */
export function Reveal({ as, delay, className, children, style, onMouseMove }: RevealProps) {
  // Polymorphic + callback-ref: cast keeps the JSX ergonomic without `any` leaking out.
  const Comp = (as ?? 'div') as ElementType;
  const ref = useReveal();
  return (
    <Comp
      ref={ref as unknown as never}
      className={['reveal', className].filter(Boolean).join(' ')}
      data-delay={delay}
      style={style}
      onMouseMove={onMouseMove}
    >
      {children}
    </Comp>
  );
}
