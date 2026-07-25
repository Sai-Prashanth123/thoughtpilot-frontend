import { panels, type Panel } from '../data/content';
import { SpacedLabel } from './SpacedLabel';
import { Reveal } from './Reveal';
import { Lines } from './Lines';
import { PanelIcon, ArrowRight } from './icons';
import { spotlightMove } from '../hooks/spotlight';

function PanelCard({ panel, delay }: { panel: Panel; delay?: 1 | 2 }) {
  return (
    <Reveal as="article" className="panel glow-hover" delay={delay} onMouseMove={spotlightMove}>
      <div className="panel-ico">
        <PanelIcon name={panel.icon} />
      </div>
      <div className="pk">{panel.code}</div>
      <h3>
        <Lines text={panel.title} />
      </h3>
      <p>{panel.body}</p>
      <div className="tags">
        {panel.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <a className="more" href={panel.more.href}>
        {panel.more.label}
        <ArrowRight className="arw" />
      </a>
    </Reveal>
  );
}

export function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <SpacedLabel lead="Our" tail="Stack" arrow className="stack-label" />
        <div className="stack-panels">
          {panels.map((panel, i) => (
            <PanelCard key={panel.code} panel={panel} delay={([undefined, 1, 2] as const)[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
