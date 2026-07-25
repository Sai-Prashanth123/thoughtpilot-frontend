import { site } from '../data/site';
import { footerLinks, footerSectors } from '../data/content';
import { LogoMark } from './icons';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <a className="footer-brand" href="#top">
            <LogoMark purple="#a897ee" style={{ color: '#f2f0ea' }} />
            <span>{site.name}</span>
          </a>
          <a className="footer-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>

        <div className="footer-mid">
          <nav className="footer-links">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="footer-sectors">
            <span className="lbl">Built for:</span>
            {footerSectors.map((sector) => (
              <a key={sector} href="#who">
                {sector}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            {site.name} · AI-native content studio · © {site.year}
          </span>
          <span>Ghostwritten in your voice. Shipped daily.</span>
        </div>
      </div>
    </footer>
  );
}
