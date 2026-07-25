import { site } from './site';

export type ChannelIconName = 'x' | 'linkedin';
export type PanelIconName = 'operator' | 'isolated' | 'compound';
export type ApproachIconName = 'craft' | 'fingerprint' | 'ascend';

/* ---------- hero ---------- */
export interface Stat {
  /** Static display value used when count-up is disabled/unsupported. */
  value: string;
  /** When present, the number animates up to this target. */
  countTo?: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '200M+', countTo: 200, suffix: 'M+', label: 'Impressions across accounts we operate' },
  { value: '100+', countTo: 100, suffix: '+', label: '1M-view posts shipped' },
  { value: 'Daily', label: 'Output across X + LinkedIn' },
];

/* ---------- ticker ---------- */
export const tickerPhrases: string[] = [
  'End-to-end execution',
  'Run by operators',
  "Trained on what's winning now",
  'Ghostwritten in your voice',
  'Engineered to compound',
  'Shipped daily',
];

/* ---------- 01 · approach ---------- */
export interface ApproachItem {
  step: string;
  title: string;
  body: string;
  icon: ApproachIconName;
}

export const approach: ApproachItem[] = [
  {
    step: '01 —',
    title: 'Built by operators, not vendors',
    body: 'Agencies hire writers and hope for consistency. Tools hand you a blank prompt. We built the system in-house so a small team of operators can run accounts at a scale neither can match — and still own every word that ships.',
    icon: 'craft',
  },
  {
    step: '02 —',
    title: 'One system per client, not a shared prompt',
    body: "Generic best-practice content reads generic. Every account runs on its own isolated setup — your voice, your competitors, your market — because content trained on someone else's niche never quite fits yours.",
    icon: 'fingerprint',
  },
  {
    step: '03 —',
    title: 'Built to compound, not to plateau',
    body: "A ghostwriter gets you consistency. What we've built gets sharper with every post, because performance feeds back into the next draft. The longer you're in, the bigger the gap between you and whoever started later.",
    icon: 'ascend',
  },
];

/* ---------- 02 · stack (tier grid) ---------- */
export interface Panel {
  code: string;
  /** '\n' becomes a line break. */
  title: string;
  tags: string[];
  body: string;
  more: { label: string; href: string };
  icon: PanelIconName;
}

export const panels: Panel[] = [
  {
    code: 'S.01',
    title: 'An operator owns your account.\nAgents do the drafting.',
    tags: ['Dedicated operator', 'Ingestion + writing agents', 'Draft review before it reaches you'],
    body: "You get a named operator who sets direction, owns your voice, and reviews every draft before it reaches you — backed by agents that handle ingestion, research, and first drafts. The judgment stays human; the repetition doesn't.",
    more: { label: 'See what we ship', href: '#work' },
    icon: 'operator',
  },
  {
    code: 'S.02',
    title: 'Nothing is shared\nacross accounts',
    tags: ['Isolated per client', 'Competitor tracking', 'No shared prompts'],
    body: "Your voice model, your competitor tracking, your content history — none of it touches another account. That isolation is what lets the writing sound like you instead of a template with your name swapped in.",
    more: { label: 'How the loop works', href: '#loop' },
    icon: 'isolated',
  },
  {
    code: 'S.03',
    title: 'Every post makes\nthe next one sharper',
    tags: ['Weekly feedback', 'Scoring', 'Distribution'],
    body: 'Every post that ships gets scored against how it actually performed, and that result feeds the next draft. Six months in, the account is writing against real performance data — not a static playbook.',
    more: { label: 'See the results', href: '#results' },
    icon: 'compound',
  },
];

/* ---------- 03 · the loop (framework) ---------- */
export interface LoopStage {
  num: string;
  k: string;
  title: string;
  body: string;
  detail: string;
}

export const loopStages: LoopStage[] = [
  {
    num: '01',
    k: 'Stage 01',
    title: 'Ingestion',
    body: "Agents pull what's moving on-platform right now — the hooks, formats, and patterns performing this week, refreshed daily, filtered to your specific niche and platform.",
    detail: 'Refreshed daily · scoped to your niche',
  },
  {
    num: '02',
    k: 'Stage 02',
    title: 'Research',
    body: 'Agents map your ICP, your positioning, and the accounts you actually compete with — not a generic industry report. That map is what every draft gets written against.',
    detail: 'Your ICP + named competitor accounts',
  },
  {
    num: '03',
    k: 'Stage 03',
    title: 'Writing',
    body: "First drafts are built from your voice model — pulled from your existing posts, calls, and the direction you set at onboarding — so the starting point already sounds like you, not a template.",
    detail: 'Drafted from your voice model, not a prompt',
  },
  {
    num: '04',
    k: 'Stage 04',
    title: 'Scoring',
    body: 'Every draft is scored against how comparable posts in your niche performed recently — hook strength, retention pattern, reply and share signal. Anything below the bar gets rewritten or killed before you ever see it.',
    detail: 'Scored against recent in-niche performance',
  },
  {
    num: '05',
    k: 'Stage 05',
    title: 'Distribution',
    body: 'You review and approve; approved drafts publish within 24 hours, daily across X and LinkedIn. Performance feeds back into scoring every week, so next week starts from a sharper baseline than this one.',
    detail: '24h from approval to published',
  },
];

/* ---------- 04 · results ---------- */
export interface Result {
  kicker: string;
  big: string;
  body: string;
}

export const results: Result[] = [
  { kicker: 'Review', big: '100%', body: 'Every post is approved by you before it ships. Nothing publishes without your review — no exceptions.' },
  { kicker: 'Turnaround', big: '24h', body: 'From your approval to published, across X and LinkedIn — no content calendar, no batching, no waiting.' },
  { kicker: 'Cadence', big: 'Daily', body: 'Real daily output, not a monthly retainer drip — the loop only compounds if it keeps running.' },
];

/* ---------- 05 · deliverables ---------- */
export interface Channel {
  icon: ChannelIconName;
  name: string;
  sub: string;
  cadence: string;
  items: string[];
}

export const channels: Channel[] = [
  {
    icon: 'x',
    name: 'X',
    sub: 'Build audience · Grow pipeline',
    cadence: '5–7 posts / week',
    items: ['Long-form articles', 'Threads and viral hooks', 'Daily tweets and commentary', 'Reply strategy on sentinel accounts'],
  },
  {
    icon: 'linkedin',
    name: 'LinkedIn',
    sub: 'Build authority · Grow pipeline',
    cadence: '3–5 posts / week',
    items: ['Long-form founder posts', 'Carousels and narrative breakdowns', 'Thought leadership cadence', 'Comment strategy in your ICP'],
  },
];

/* ---------- 06 · who it's for ---------- */
export interface Audience {
  tag: string;
  title: string;
  body: string;
}

export const audiences: Audience[] = [
  { tag: 'B2B', title: 'B2B founders', body: "You have pipeline targets. You don't have time to post. We turn your expertise into a content machine that fills the top of funnel." },
  { tag: 'SaaS', title: 'SaaS founders', body: 'Launches, product cycles, category building. We ghostwrite the narrative that carries the product, and its founder, through all of it.' },
  { tag: 'AI', title: 'AI founders', body: "You're shipping into a market moving faster than traditional agencies can keep up with. We were built for this pace." },
];

export const notFor: string[] = [
  "Teams that need every post pre-cleared by legal before it ships",
  'Brands that want a monthly drip, not a daily practice',
  'Anyone looking for a ghostwriter with zero involvement — you still review and approve every post',
  'Pre-product founders with no market or ICP defined yet',
];

/* ---------- 07 · faq ---------- */
export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'Do you write in my voice, or a generic one?',
    a: 'Yours. Every account gets a dedicated voice model built from your existing writing, calls, and take on the market. You review everything before it publishes — nothing leaves the studio sounding like anyone but you.',
  },
  {
    q: 'How much do I have to be involved?',
    a: 'A short onboarding to capture your voice and direction, then a light review cadence. We handle ingestion, research, writing, scoring, and distribution — you approve and keep building the company.',
  },
  {
    q: 'Why not just use ChatGPT ourselves?',
    a: "A prompt isn't a system. We built our own ingestion, research, writing, and scoring agents, plus a private intelligence layer per client that learns what's winning in your niche this week. The stack compounds — a chat window doesn't.",
  },
  {
    q: 'How fast do you start shipping?',
    a: 'We book a 30-minute discovery call, audit your current presence, and map what we’d ship in your first 30 days. From onboarding, daily output across X and LinkedIn begins quickly and sharpens every week.',
  },
];

/* ---------- footer ---------- */
export const footerLinks: { label: string; href: string; external?: boolean }[] = [
  { label: 'Approach', href: '#approach' },
  { label: 'Stack', href: '#stack' },
  { label: 'Deliverables', href: '#work' },
  { label: 'FAQs', href: '#faq' },
  { label: 'X ↗', href: site.xUrl, external: true },
];

export const footerSectors: string[] = ['B2B', 'SaaS', 'AI founders'];
