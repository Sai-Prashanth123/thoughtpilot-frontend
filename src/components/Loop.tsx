import { useEffect, useState } from 'react';
import { loopStages } from '../data/content';
import { useParallax } from '../hooks/useParallax';
import { Reveal } from './Reveal';

const AUTO_ADVANCE_MS = 5000;

export function Loop() {
  const [current, setCurrent] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const vizRef = useParallax<HTMLDivElement>();

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

        <Reveal className="loop-nav" delay={1}>
          {loopStages.map((s, i) => (
            <button
              key={s.num}
              className={i === current ? 'active' : undefined}
              onClick={() => select(i)}
            >
              {s.num} · {s.title}
            </button>
          ))}
        </Reveal>

        <Reveal className="loop-stage" delay={2}>
          <div className="loop-media">
            <div ref={vizRef} className={`viz viz-${stage.viz}`} aria-hidden="true" />
            <div className="num">{stage.num}</div>
          </div>
          <div className="loop-content">
            <div className="k">{stage.k}</div>
            <h3>{stage.title}</h3>
            <p>{stage.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
