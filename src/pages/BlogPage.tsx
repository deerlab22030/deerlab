import { useEffect } from 'react';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

const POSTS = [
  {
    title: 'Designing for cultural participation online',
    date: 'Coming soon',
    excerpt: 'Notes from our research on how digital platforms help people share, preserve, and reinterpret cultural practices.',
    tag: 'Culture',
  },
  {
    title: 'What human-AI coexistence asks of HCI',
    date: 'Coming soon',
    excerpt: 'Reflections on generative AI, social computing, and the design of online spaces populated by people and AI agents.',
    tag: 'Human-AI',
  },
  {
    title: 'Livestreaming as community infrastructure',
    date: 'Coming soon',
    excerpt: 'A closer look at livestreaming communities as sites of learning, care, labor, and identity formation.',
    tag: 'Community',
  },
];

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[100dvh]" style={{ background: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />

      <div className="pt-32 pb-16">
        <div className="container-main">
          <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Blog</span>
          <h1 className="text-h1 mb-4">Research Notes</h1>
          <p className="text-body-lg max-w-[680px]">
            Reflections from DEER Lab on HCI, social computing, cultural technologies, and human-AI futures.
          </p>
        </div>
      </div>

      <section className="pb-24">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {POSTS.map((post) => (
              <article key={post.title} className="p-6 rounded-2xl bg-white" style={{ border: '1px solid var(--border)' }}>
                <span className="tag text-[11px] mb-5">{post.tag}</span>
                <h2 className="font-serif text-[25px] leading-tight mb-3">{post.title}</h2>
                <p className="text-[13px] mb-4" style={{ color: 'var(--text-muted)' }}>{post.date}</p>
                <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
