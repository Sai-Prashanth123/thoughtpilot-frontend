import { panels, type Panel } from '../data/content';
import { SpacedLabel } from './SpacedLabel';
import { Reveal } from './Reveal';
import { Viz } from './Viz';
import { Lines } from './Lines';
import { ArrowRight } from './icons';

function PanelCard({ panel }: { panel: Panel }) {
  return (
    <Reveal as="article" className="panel">
      <div className="panel-text">
        <div className="pk">{panel.code}</div>
        <h3>
          <Lines text={panel.title} />
        </h3>
        <div className="tags">
          {panel.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p>{panel.body}</p>
        <a className="more" href={panel.more.href}>
          {panel.more.label}
          <ArrowRight className="arw" />
        </a>
      </div>
      <div className="panel-media">
        <Viz variant={panel.viz} />
        <span className="glyph">{panel.glyph}</span>
      </div>
    </Reveal>
  );
}

export function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <SpacedLabel lead="Our" tail="Stack" arrow className="stack-label" />
        <div className="stack-panels">
          {panels.map((panel) => (
            <PanelCard key={panel.code} panel={panel} />
          ))}
        </div>
      </div>
    </section>
  );
}
