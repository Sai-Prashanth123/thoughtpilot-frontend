import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';

interface MagneticLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

/** An anchor that follows the cursor (respecting reduced-motion). */
export function MagneticLink({ className, children, ...rest }: MagneticLinkProps) {
  const ref = useMagnetic<HTMLAnchorElement>();
  return (
    <a ref={ref} className={['magnetic', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </a>
  );
}
