import { approach } from '../data/content';
import { Reveal } from './Reveal';
import { spotlightMove } from '../hooks/spotlight';
import { ApproachIcon } from './icons';

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
            <Reveal
              key={item.step}
              as="article"
              className="appr-item glow-hover"
              delay={([undefined, 1, 2] as const)[i]}
              onMouseMove={spotlightMove}
            >
              <div className="appr-marker">
                <span className="appr-ico">
                  <ApproachIcon name={item.icon} />
                </span>
                <span className="appr-num">{item.step.slice(0, 2)}</span>
              </div>
              <div className="appr-body">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
