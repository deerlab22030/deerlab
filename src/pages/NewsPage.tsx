import { useEffect } from 'react';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

const NEWS = [
  {
    title: 'When culture clicks: Studying technology\'s power to build community',
    date: 'April 21, 2026',
    excerpt: 'George Mason Computer Science profiled Zhicong Lu\'s research on livestreaming, intangible cultural heritage, generative AI, and digital platforms that help people build community.',
    tag: 'Feature',
    source: 'George Mason University',
  },
  {
    title: 'DEER Lab expands work on human-AI social ecosystems',
    date: '2026',
    excerpt: 'The lab is studying how generative AI affects social computing systems, from creative communication tools to future spaces where humans and AI agents interact.',
    tag: 'Research Direction',
    source: 'DEER Lab',
  },
  {
    title: 'Recent work explores creativity support, livestreaming, and social VR',
    date: '2025',
    excerpt: 'Our current projects examine LLM-supported prewriting, playful captions for social VR, in-stream visual communication, and livestreaming-based learning communities.',
    tag: 'Publications',
    source: 'DEER Lab',
  },
  {
    title: 'Work with us on culture, community, and embodied digital experience',
    date: 'Ongoing',
    excerpt: 'We welcome collaborators and students interested in HCI, social computing, AI-mediated creativity, cultural participation, and inclusive online communities.',
    tag: 'Opportunities',
    source: 'DEER Lab',
  },
];

export default function NewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[100dvh]" style={{ background: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />

      <div className="pt-32 pb-16">
        <div className="container-main">
          <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>News</span>
          <h1 className="text-h1 mb-4">Lab News</h1>
          <p className="text-body-lg max-w-[680px]">
            Updates on DEER Lab research, people, publications, and collaborations.
          </p>
        </div>
      </div>

      <section className="pb-24">
        <div className="container-main">
          <div style={{ borderTop: '1px solid var(--border-dark)' }}>
            {NEWS.map((item) => (
              <article key={item.title} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="md:col-span-2">
                  <p className="text-[13px] font-mono" style={{ color: 'var(--text-muted)' }}>{item.date}</p>
                </div>
                <div className="md:col-span-7">
                  <h2 className="font-serif text-[26px] leading-tight mb-3">{item.title}</h2>
                  <p className="text-body">{item.excerpt}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <span className="tag text-[11px] mb-3">{item.tag}</span>
                  <p className="text-[13px] mt-3" style={{ color: 'var(--text-muted)' }}>{item.source}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
