import { site } from './site';

export type VizVariant = 'a' | 'b' | 'c';
export type EdgeIconName = 'signal' | 'scoring' | 'voice' | 'loop';
export type ChannelIconName = 'x' | 'linkedin';

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
  { value: '200M+', countTo: 200, suffix: 'M+', label: 'Impressions generated' },
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
}

export const approach: ApproachItem[] = [
  {
    step: '01 —',
    title: 'Custom AI agents',
    body: 'Ingestion, research, writing, and scoring all run on AI we built in-house. The output of a ten-person team, without the overhead of one.',
  },
  {
    step: '02 —',
    title: 'Private intelligence',
    body: "Every account gets a dedicated knowledge base and its own agents — your voice, your market, and the formats winning this week.",
  },
  {
    step: '03 —',
    title: 'A loop that compounds',
    body: "Every post, score, and result sharpens what comes next. The longer you're in, the better the writing gets.",
  },
];

/* ---------- 02 · stack panels ---------- */
export interface Panel {
  code: string;
  /** '\n' becomes a line break. */
  title: string;
  tags: string[];
  body: string;
  more: { label: string; href: string };
  viz: VizVariant;
  glyph: string;
}

export const panels: Panel[] = [
  {
    code: 'S.01',
    title: 'Custom AI agents,\nin-house algorithms',
    tags: ['Ingestion agents', 'Research agents', 'Writing agents'],
    body: 'Every part of our stack runs on AI we built: ingestion agents, research agents, writing agents, scoring algorithms. Operators set direction and own voice — the output of a ten-person team, without the overhead of one.',
    more: { label: 'See what we ship', href: '#work' },
    viz: 'a',
    glyph: 'Ingestion → Writing',
  },
  {
    code: 'S.02',
    title: 'A private intelligence\nlayer per client',
    tags: ['Knowledge base', 'Voice model', 'Competitor tracking'],
    body: "Every account gets a dedicated knowledge base and its own set of agents. Your voice. Your market. The accounts you're competing with. The formats winning this week. We write against the current game, not generic best practices.",
    more: { label: 'How the edge works', href: '#edge' },
    viz: 'b',
    glyph: 'Voice · Per client',
  },
  {
    code: 'S.03',
    title: 'The stack compounds.\nSo does your lead.',
    tags: ['Scoring', 'Feedback loop', 'Distribution'],
    body: "Every post, every score, every result sharpens what comes next. The longer you're in, the better the writing gets. This is the loop agencies can't build and tools can't ship — the one that matters.",
    more: { label: 'See the loop', href: '#loop' },
    viz: 'c',
    glyph: 'Scoring → Distribution',
  },
];

/* ---------- 03 · the loop (framework) ---------- */
export interface LoopStage {
  num: string;
  k: string;
  title: string;
  body: string;
  viz: VizVariant;
}

export const loopStages: LoopStage[] = [
  {
    num: '01',
    k: 'Stage 01',
    title: 'Ingestion',
    body: "Our scrapers and agents pull what's moving on-platform in real time — the hooks, formats, and patterns performing right now. Per niche. Per platform.",
    viz: 'a',
  },
  {
    num: '02',
    k: 'Stage 02',
    title: 'Research',
    body: 'Research agents build a picture of your market, your ICP, and the accounts you compete with, feeding a private intelligence layer unique to your account.',
    viz: 'b',
  },
  {
    num: '03',
    k: 'Stage 03',
    title: 'Writing',
    body: 'Writing agents draft against the current game in your voice model — your rhythm, your vocabulary, your take — not generic best practices.',
    viz: 'c',
  },
  {
    num: '04',
    k: 'Stage 04',
    title: 'Scoring',
    body: 'Every draft runs through our proprietary content algorithms and is scored against what is winning now. Weak posts never leave the studio.',
    viz: 'a',
  },
  {
    num: '05',
    k: 'Stage 05',
    title: 'Distribution',
    body: 'Reviewed by you, then shipped daily across X and LinkedIn. Performance feeds back into the stack weekly, so the writing sharpens over time.',
    viz: 'b',
  },
];

/* ---------- 04 · results ---------- */
export interface Result {
  kicker: string;
  big: string;
  body: string;
}

export const results: Result[] = [
  { kicker: 'Reach', big: '200M+', body: 'Impressions generated across X and LinkedIn for the founders we run.' },
  { kicker: 'Breakout', big: '100+', body: 'Posts past a million views shipped — engineered, scored, and reviewed before they left the studio.' },
  { kicker: 'Cadence', big: 'Daily', body: 'Output across both platforms, ghostwritten in your voice and published every day.' },
];

/* ---------- 05 · the edge ---------- */
export interface Edge {
  icon: EdgeIconName;
  title: string;
  body: string;
}

export const edges: Edge[] = [
  { icon: 'signal', title: 'Signal', body: 'Our scrapers and algorithms track formats, hooks, and patterns performing right now. Per niche. Per platform.' },
  { icon: 'scoring', title: 'Scoring', body: "Every draft runs through our proprietary content algorithms. Weak posts don't leave the studio." },
  { icon: 'voice', title: 'Voice', body: 'A voice model per client. Your rhythm, your vocabulary, your take. Captured and reinforced.' },
  { icon: 'loop', title: 'Loop', body: "Performance feeds back into the stack weekly. The longer you're with us, the sharper the writing." },
];

/* ---------- 06 · deliverables ---------- */
export interface Channel {
  icon: ChannelIconName;
  name: string;
  sub: string;
  items: string[];
}

export const channels: Channel[] = [
  {
    icon: 'x',
    name: 'X',
    sub: 'Build audience · Grow pipeline',
    items: ['Long-form articles', 'Threads and viral hooks', 'Daily tweets and commentary', 'Reply strategy on sentinel accounts'],
  },
  {
    icon: 'linkedin',
    name: 'LinkedIn',
    sub: 'Build authority · Grow pipeline',
    items: ['Long-form founder posts', 'Carousels and narrative breakdowns', 'Thought leadership cadence', 'Comment strategy in your ICP'],
  },
];

/* ---------- 07 · who it's for ---------- */
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

/* ---------- 08 · faq ---------- */
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
