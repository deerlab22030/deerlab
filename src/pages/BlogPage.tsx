import { useEffect } from 'react';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[100dvh]" style={{ background: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />

      <div className="pt-32 pb-24">
        <div className="container-main">
          <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Blog</span>
          <h1 className="text-h1 mb-4">Coming Soon</h1>
          <p className="text-body-lg max-w-[680px]">
            Research notes and reflections from DEER Lab will be published here.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
