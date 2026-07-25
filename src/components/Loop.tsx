import { useEffect, useState } from 'react';
import { loopStages } from '../data/content';
import { Reveal } from './Reveal';
import { spotlightMove } from '../hooks/spotlight';

const AUTO_ADVANCE_MS = 5000;

export function Loop() {
  const [current, setCurrent] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((c) => (c + 1) % loopStages.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [resetKey]);

  const stage = loopStages[current];

  const select = (index: number) => {
    setCurrent(index);
    // Restart the auto-advance timer after a manual pick.
    setResetKey((k) => k + 1);
  };

  return (
    <section className="loop" id="loop">
      <div className="wrap">
        <div className="sec-head">
          <Reveal as="span" className="sec-num">
            03 · The framework
          </Reveal>
          <Reveal as="h2" className="sec-title display" delay={1}>
            The loop that gets
            <br />
            smarter every week.
          </Reveal>
        </div>

        <Reveal className="pipeline" delay={1}>
          {loopStages.map((s, i) => (
            <button
              key={s.num}
              className={`pipeline-step${i === current ? ' active' : ''}`}
              onClick={() => select(i)}
            >
              <span className="pipeline-node">{s.num}</span>
              <span className="pipeline-title">{s.title}</span>
              <span className="pipeline-detail">{s.detail}</span>
              {i === current && (
                <span key={current} className="pipeline-progress">
                  <span
                    className="pipeline-progress-fill"
                    style={{ animationDuration: `${AUTO_ADVANCE_MS}ms` }}
                  />
                </span>
              )}
            </button>
          ))}
        </Reveal>

        <Reveal key={stage.num} className="loop-panel glow-hover" delay={2} onMouseMove={spotlightMove}>
          <div className="k">{stage.k}</div>
          <p>{stage.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
