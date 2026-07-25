import { edges } from '../data/content';
import { Reveal } from './Reveal';
import { EdgeIcon } from './icons';

export function Edge() {
  return (
    <section id="edge">
      <div className="wrap">
        <div className="sec-head">
          <Reveal as="span" className="sec-num">
            05 · The edge
          </Reveal>
          <Reveal as="h2" className="sec-title display" delay={1}>
            Trained on{' '}
            <span className="dim">
              what's
              <br />
              winning now.
            </span>
          </Reveal>
          <Reveal as="p" className="sec-lead" delay={2}>
            The content game changes every quarter. Our models change with it. We track what's moving
            on-platform in real time, score every draft against it, and ship only what clears the bar.
          </Reveal>
        </div>

        <div className="edge-grid">
          {edges.map((edge, i) => (
            <Reveal key={edge.title} className="edge" delay={([undefined, 1, 1, 2] as const)[i]}>
              <div className="ico">
                <EdgeIcon name={edge.icon} />
              </div>
              <div>
                <h3>{edge.title}</h3>
                <p>{edge.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
