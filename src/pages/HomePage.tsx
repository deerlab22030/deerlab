import Nav from '../sections/Nav';
import Hero from '../sections/Hero';
import About from '../sections/About';
import News from '../sections/News';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

export default function HomePage() {
  return (
    <div className="min-h-[100dvh]" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />
      <Hero />
      <About />
      <News />
      <Footer />
    </div>
  );
}
