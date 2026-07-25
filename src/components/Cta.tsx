import { site } from '../data/site';
import { Reveal } from './Reveal';
import { MagneticLink } from './MagneticLink';
import { ArrowUpRight } from './icons';

const marqueeWords = [
  { text: 'Own your niche', fill: false },
  { text: 'Let the AI work', fill: true },
  { text: 'Own your niche', fill: false },
  { text: 'Let the AI work', fill: true },
];

export function Cta() {
  return (
    <section className="cta" id="contact">
      <div className="cta-marquee" aria-hidden="true">
        <div className="cta-marquee-track">
          {marqueeWords.map((word, i) => (
            <span key={i} className={word.fill ? 'fill' : undefined}>
              {word.text}
            </span>
          ))}
        </div>
      </div>

      <div className="wrap inner">
        <Reveal as="div" className="eyebrow">
          Ready when you are
        </Reveal>
        <Reveal as="h2" delay={1}>
          Own your niche. <span className="grad">Let the AI do the work.</span>
        </Reveal>
        <Reveal as="p" delay={2}>
          30-minute discovery. We'll audit your current presence and map out what we'd ship for you in
          the first 30 days.
        </Reveal>
        <Reveal className="cta-actions" delay={3}>
          <MagneticLink
            className="btn btn-purple"
            href={site.calUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
            <ArrowUpRight className="arw" />
          </MagneticLink>
          <MagneticLink
            className="btn btn-ghost-dark"
            href={site.xUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            DM on X
            <ArrowUpRight className="arw" />
          </MagneticLink>
        </Reveal>
      </div>
    </section>
  );
}
