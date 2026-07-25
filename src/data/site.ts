/** Site-wide constants and links. */
export const site = {
  name: 'Thought Pilot',
  calUrl: 'https://cal.com/thought-pilot-da4joh/30min',
  xUrl: 'https://x.com/nagashares',
  email: 'hello@thought-pilot.com',
  year: 2026,
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Approach', href: '#approach' },
  { label: 'Stack', href: '#stack' },
  { label: 'Deliverables', href: '#work' },
  { label: 'Contact', href: '#contact' },
];
