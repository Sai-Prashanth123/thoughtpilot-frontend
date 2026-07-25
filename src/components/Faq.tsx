import { useState } from 'react';
import { faqs } from '../data/content';
import { Reveal } from './Reveal';

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="wrap">
        <div className="sec-head">
          <Reveal as="span" className="sec-num">
            08 · FAQs
          </Reveal>
          <Reveal as="h2" className="sec-title display" delay={1}>
            The questions
            <br />
            founders ask.
          </Reveal>
        </div>

        <Reveal className="faq" delay={1}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className={`faq-item${isOpen ? ' open' : ''}`}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {faq.q}
                  <span className="faq-ico" aria-hidden="true" />
                </button>
                <div className="faq-a">
                  <div>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
