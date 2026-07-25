import { audiences } from '../data/content';
import { Reveal } from './Reveal';

export function WhoItsFor() {
  return (
    <section className="dark-sec" id="who">
      <div className="wrap">
        <div className="sec-head">
          <Reveal as="span" className="sec-num">
            07 · Who it's for
          </Reveal>
          <Reveal as="h2" className="sec-title display" delay={1}>
            Built for founders
            <br />
            who need reach.
          </Reveal>
        </div>

        <div className="who-grid">
          {audiences.map((audience, i) => (
            <Reveal key={audience.tag} as="article" className="who" delay={([undefined, 1, 2] as const)[i]}>
              <span className="tag">{audience.tag}</span>
              <h3>{audience.title}</h3>
              <p>{audience.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
