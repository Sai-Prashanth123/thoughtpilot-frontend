/** A thin gradient-blend div between light/dark section boundaries, so the
 *  color shift reads as a deliberate transition instead of a hard cut. */
export function SectionSeam({ direction }: { direction: 'toDark' | 'toLight' }) {
  return <div className={`seam seam-${direction}`} aria-hidden="true" />;
}
