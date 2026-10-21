import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import Stack from './components/Stack';
import Projects from './components/Projects';
import WhyMe from './components/WhyMe';
import About from './components/About';
import Contact from './components/Contact';
import Process from './components/Process';
import Faq from './components/Faq';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.07 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Projects />
        <Process />
        <Pricing />
        <WhyMe />
        <About />
        <Stack />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
