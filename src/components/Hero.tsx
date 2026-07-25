import { site } from '../data/site';
import { stats, type Stat } from '../data/content';
import { useCountUp } from '../hooks/useCountUp';
import { Reveal } from './Reveal';
import { HeroHeadline } from './HeroHeadline';
import { MagneticLink } from './MagneticLink';
import { ArrowDown } from './icons';
import { AuroraBackground } from './ui/aurora-background';

function StatBadge({ stat }: { stat: Stat }) {
  const counts = stat.countTo !== undefined;
  const { ref, text } = useCountUp<HTMLDivElement>(stat.countTo ?? 0, stat.suffix ?? '');
  return (
    <div className="badge">
      <div className="num" ref={counts ? ref : undefined}>
        {counts ? text : stat.value}
      </div>
      <div className="lbl">{stat.label}</div>
    </div>
  );
}

export function Hero() {
  return (
    <AuroraBackground className="block h-auto bg-transparent text-inherit">
      <header className="hero" id="top">
        <div className="wrap">
          <Reveal as="div" className="eyebrow">
            End-to-end content execution
          </Reveal>

          <HeroHeadline
            segments={[{ text: 'Engineered' }, { text: 'to compound.', grad: true }]}
          />

          <div className="hero-row">
            <Reveal as="p" className="hero-sub" delay={2}>
              End-to-end content execution for <b>B2B, SaaS, and AI founders</b> on X and LinkedIn.
              Ghostwritten in your voice. Shipped daily. While you build the company.
            </Reveal>

            <Reveal delay={2}>
              <div className="hero-actions">
                <MagneticLink
                  className="btn btn-purple"
                  href={site.calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call
                  <ArrowDown className="arw" />
                </MagneticLink>
                <MagneticLink className="btn btn-line" href="#approach">
                  How we work
                  <ArrowDown className="arw" />
                </MagneticLink>
              </div>
            </Reveal>
          </div>

          <Reveal className="hero-badges" delay={3}>
            {stats.map((stat) => (
              <StatBadge key={stat.label} stat={stat} />
            ))}
          </Reveal>
        </div>
      </header>
    </AuroraBackground>
  );
}
