import { approach } from '../data/content';
import { Reveal } from './Reveal';

export function Approach() {
  return (
    <section id="approach">
      <div className="wrap">
        <div className="approach-head">
          <Reveal as="h2" className="display">
            Built on our own AI.
            <br />
            Run by operators.
          </Reveal>
          <Reveal as="p" delay={1}>
            Most content agencies hire writers. A handful plug into ChatGPT. We built our own AI
            agents and content algorithms from the ground up. A small team of operators owns voice,
            direction, and taste.
          </Reveal>
        </div>

        <div className="approach-grid">
          {approach.map((item, i) => (
            <Reveal key={item.step} className="appr-item" delay={([undefined, 1, 2] as const)[i]}>
              <span className="step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
