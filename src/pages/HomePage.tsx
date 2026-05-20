import Nav from '../sections/Nav';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Research from '../sections/Research';
import Publications from '../sections/Publications';
import People from '../sections/People';
import Grants from '../sections/Grants';
import JoinUs from '../sections/JoinUs';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

export default function HomePage() {
  return (
    <div className="min-h-[100dvh]" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />
      <Hero />
      <About />
      <Research />
      <Publications />
      <People />
      <Grants />
      <JoinUs />
      <Footer />
    </div>
  );
}
