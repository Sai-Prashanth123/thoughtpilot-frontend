import { useState } from 'react';
import type { FormEvent } from 'react';
import { faqs } from '../data/content';
import { site } from '../data/site';
import { FaceIcon, ArrowUpRight } from './icons';

interface Message {
  from: 'bot' | 'user';
  text: string;
}

const GREETING = "Hey — I'm the Thought Pilot assistant. Pick a question below, or type your own.";
const FALLBACK = "I don't have a canned answer for that one — book a 30-minute call and we'll walk you through it directly.";

/** Matches free-text against the real FAQ content. No live AI backend — this is a static site. */
function findAnswer(query: string): string | null {
  const q = query.toLowerCase();
  const hit = faqs.find((f) => {
    const words = f.q.toLowerCase().split(/\W+/).filter((w) => w.length > 3);
    return words.some((w) => q.includes(w));
  });
  return hit ? hit.a : null;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', text: GREETING }]);
  const [input, setInput] = useState('');

  const ask = (text: string) => {
    if (!text.trim()) return;
    const answer = findAnswer(text) ?? FALLBACK;
    setMessages((m) => [...m, { from: 'user', text }, { from: 'bot', text: answer }]);
    setInput('');
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <>
      <button
        className="chat-launcher"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <FaceIcon />
        {!open && <span className="chat-launcher-dot" aria-hidden="true" />}
      </button>

      {open && (
        <div className="chat-panel" role="dialog" aria-label="Chat with Thought Pilot">
          <div className="chat-panel-head">
            <span className="chat-avatar">
              <FaceIcon />
            </span>
            <div>
              <div className="chat-name">Thought Pilot</div>
              <div className="chat-status">Usually replies within a day</div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg chat-msg--${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chat-quick">
            {faqs.map((f) => (
              <button key={f.q} onClick={() => ask(f.q)}>
                {f.q}
              </button>
            ))}
          </div>

          <form className="chat-input" onSubmit={onSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question…"
              aria-label="Type a question"
            />
            <button type="submit" aria-label="Send">
              <ArrowUpRight />
            </button>
          </form>

          <a className="chat-cta" href={site.calUrl} target="_blank" rel="noopener noreferrer">
            Book a 30-min call instead
          </a>
        </div>
      )}
    </>
  );
}
