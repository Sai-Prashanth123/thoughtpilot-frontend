import { useParallax } from '../hooks/useParallax';
import type { VizVariant } from '../data/content';

/** A gradient media block that drifts with scroll parallax. */
export function Viz({ variant }: { variant: VizVariant }) {
  const ref = useParallax<HTMLDivElement>();
  return <div ref={ref} className={`viz viz-${variant}`} aria-hidden="true" />;
}
