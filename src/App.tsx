import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { Approach } from './components/Approach';
import { Stack } from './components/Stack';
import { Loop } from './components/Loop';
import { Results } from './components/Results';
import { Deliverables } from './components/Deliverables';
import { WhoItsFor } from './components/WhoItsFor';
import { Faq } from './components/Faq';
import { Cta } from './components/Cta';
import { Footer } from './components/Footer';
import { SectionSeam } from './components/SectionSeam';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Approach />
        <Stack />
        <Loop />
        <SectionSeam direction="toDark" />
        <Results />
        <SectionSeam direction="toLight" />
        <Deliverables />
        <SectionSeam direction="toDark" />
        <WhoItsFor />
        <SectionSeam direction="toLight" />
        <Faq />
        <SectionSeam direction="toDark" />
        <Cta />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
