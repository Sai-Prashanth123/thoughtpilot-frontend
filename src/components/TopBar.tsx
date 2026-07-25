import { site } from '../data/site';

export function TopBar() {
  return (
    <div className="topbar">
      Now booking Q3 · AI-native content studio ·{' '}
      <a href={site.calUrl} target="_blank" rel="noopener noreferrer">
        Book a discovery call →
      </a>
    </div>
  );
}
