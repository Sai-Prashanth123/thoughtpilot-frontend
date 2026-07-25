import { useState } from 'react';
import { navLinks, site } from '../data/site';
import { useScrolled } from '../hooks/useScrolled';
import { LogoMark, ArrowUpRight } from './icons';
import { MagneticLink } from './MagneticLink';

export function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#top" aria-label={`${site.name} home`}>
          <LogoMark />
          <span>{site.name}</span>
        </a>

        <nav className={`nav${open ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <MagneticLink
            className="header-cta"
            href={site.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Book a call
            <ArrowUpRight className="arw" width={14} height={14} />
          </MagneticLink>
        </nav>

        <button
          className={`burger${open ? ' open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
