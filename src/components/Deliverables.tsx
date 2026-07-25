import { channels, type Channel } from '../data/content';
import { Reveal } from './Reveal';
import { ChannelIcon } from './icons';
import { spotlightMove } from '../hooks/spotlight';

function ChannelCard({ channel, delay }: { channel: Channel; delay?: 1 }) {
  return (
    <Reveal as="article" className="channel glow-hover" delay={delay} onMouseMove={spotlightMove}>
      <div className="channel-head">
        <div className="channel-badge">
          <ChannelIcon name={channel.icon} />
        </div>
        <div>
          <h3>{channel.name}</h3>
          <div className="sub">{channel.sub}</div>
        </div>
        <div className="cadence">{channel.cadence}</div>
      </div>
      <ul>
        {channel.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Deliverables() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head">
          <Reveal as="span" className="sec-num">
            05 · Deliverables
          </Reveal>
          <Reveal as="h2" className="sec-title display" delay={1}>
            What we ship, <span className="dim">every week.</span>
          </Reveal>
        </div>

        <div className="deliver-grid">
          {channels.map((channel, i) => (
            <ChannelCard key={channel.name} channel={channel} delay={i === 1 ? 1 : undefined} />
          ))}
        </div>

        <Reveal as="p" className="deliver-note">
          All ghostwritten in your voice. <b>Reviewed by you. Published daily.</b>
        </Reveal>
      </div>
    </section>
  );
}
