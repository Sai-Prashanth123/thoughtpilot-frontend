import type { SVGProps } from 'react';
import type { ApproachIconName, ChannelIconName, PanelIconName } from '../../data/content';

/**
 * The Thought Pilot "TP" monogram. The upper marks inherit `currentColor`
 * (so they flip between ink and paper per surface); the "P" bowl is the
 * fixed brand purple. Pass `purple` to override the accent (e.g. dark footer).
 */
export function LogoMark({ purple = '#8e7cd8', ...props }: SVGProps<SVGSVGElement> & { purple?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <rect x="11" y="13" width="11" height="10" fill="currentColor" />
      <rect x="22" y="13" width="10" height="30" fill="currentColor" />
      <rect x="36" y="13" width="10" height="10" fill="currentColor" />
      <rect x="22" y="31" width="10" height="23" fill={purple} />
      <path fill={purple} fillRule="evenodd" d="M32 31h11a8 8 0 0 1 0 16H32V31Zm8 6h3a2 2 0 0 1 0 4h-3v-4Z" />
    </svg>
  );
}

/** A simple friendly face — used as the chat widget's avatar. Not a photo of a real person. */
export function FaceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
      <path d="M8.5 14.5c1 1 2.2 1.5 3.5 1.5s2.5-.5 3.5-1.5" />
    </svg>
  );
}

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} {...props}>
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function OperatorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}
function IsolatedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
    </svg>
  );
}
function CompoundIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M15 6h6v6" />
    </svg>
  );
}

const panelIcons: Record<PanelIconName, (p: SVGProps<SVGSVGElement>) => JSX.Element> = {
  operator: OperatorIcon,
  isolated: IsolatedIcon,
  compound: CompoundIcon,
};

export function PanelIcon({ name, ...props }: { name: PanelIconName } & SVGProps<SVGSVGElement>) {
  const Icon = panelIcons[name];
  return <Icon {...props} />;
}

function CraftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  );
}
function FingerprintIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M12 11a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0v-1" />
      <path d="M8 9.5V16a4 4 0 0 0 8 0v-6" />
      <path d="M5 8v8a7 7 0 0 0 14 0V8" />
    </svg>
  );
}
function AscendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M4 20V14M10 20V9M16 20V4" />
      <path d="M3 20h18" />
    </svg>
  );
}

const approachIcons: Record<ApproachIconName, (p: SVGProps<SVGSVGElement>) => JSX.Element> = {
  craft: CraftIcon,
  fingerprint: FingerprintIcon,
  ascend: AscendIcon,
};

export function ApproachIcon({ name, ...props }: { name: ApproachIconName } & SVGProps<SVGSVGElement>) {
  const Icon = approachIcons[name];
  return <Icon {...props} />;
}

function XLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 1.6h3.5l-7.6 8.7L23.7 22h-7l-5.5-7.2L4.9 22H1.4l8.1-9.3L.7 1.6h7.2l5 6.6 5-6.6Zm-1.2 18.3h1.9L6.4 3.6H4.3l13.4 16.3Z" />
    </svg>
  );
}
function LinkedInLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const channelIcons: Record<ChannelIconName, (p: SVGProps<SVGSVGElement>) => JSX.Element> = {
  x: XLogo,
  linkedin: LinkedInLogo,
};

export function ChannelIcon({ name, ...props }: { name: ChannelIconName } & SVGProps<SVGSVGElement>) {
  const Icon = channelIcons[name];
  return <Icon {...props} />;
}
