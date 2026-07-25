import { results } from '../data/content';
import { SpacedLabel } from './SpacedLabel';
import { Reveal } from './Reveal';

export function Results() {
  return (
    <section className="dark-sec" id="results">
      <div className="wrap">
        <SpacedLabel lead="Our" tail="Results" />
        <div className="results-grid">
          {results.map((result, i) => (
            <Reveal key={result.kicker} className="result" delay={([undefined, 1, 2] as const)[i]}>
              <div className="rk">{result.kicker}</div>
              <div className="big">{result.big}</div>
              <div className="rd">{result.body}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
