import { Fragment } from 'react';
import { tickerPhrases } from '../data/content';

function Row() {
  return (
    <span>
      {tickerPhrases.map((phrase) => (
        <Fragment key={phrase}>
          {phrase}
          <i className="sep">●</i>
        </Fragment>
      ))}
    </span>
  );
}

export function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
