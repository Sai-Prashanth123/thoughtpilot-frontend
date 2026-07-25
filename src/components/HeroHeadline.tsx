import { Fragment, useEffect, useState } from 'react';

interface Segment {
  text: string;
  /** Apply the gradient treatment to these words. */
  grad?: boolean;
}

interface Word {
  text: string;
  grad: boolean;
}

function toWords(segments: Segment[]): Word[] {
  const words: Word[] = [];
  for (const seg of segments) {
    for (const w of seg.text.split(/\s+/).filter(Boolean)) {
      words.push({ text: w, grad: Boolean(seg.grad) });
    }
  }
  return words;
}

/**
 * The hero headline: each word wipes up from behind a clip mask on mount,
 * staggered. Gradient words keep the `.grad` treatment.
 */
export function HeroHeadline({ segments }: { segments: Segment[] }) {
  const words = toWords(segments);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <h1 className="display">
      {words.map((word, i) => (
        <Fragment key={i}>
          {i > 0 && ' '}
          <span
            className={`msk${entered ? ' in' : ''}`}
            style={{ transitionDelay: `${0.12 + i * 0.07}s` }}
          >
            <i className={word.grad ? 'grad' : undefined}>{word.text}</i>
          </span>
        </Fragment>
      ))}
    </h1>
  );
}
