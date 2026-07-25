import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { Approach } from './components/Approach';
import { Stack } from './components/Stack';
import { Loop } from './components/Loop';
import { Results } from './components/Results';
import { Edge } from './components/Edge';
import { Deliverables } from './components/Deliverables';
import { WhoItsFor } from './components/WhoItsFor';
import { Faq } from './components/Faq';
import { Cta } from './components/Cta';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Approach />
        <Stack />
        <Loop />
        <Results />
        <Edge />
        <Deliverables />
        <WhoItsFor />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
