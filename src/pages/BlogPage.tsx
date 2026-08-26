import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

const BLOG_POSTS = [
  {
    slug: 'beyond-irony-emnlp-2026',
    title: 'Beyond Irony: Our Social-Pragmatic Inference Benchmark Accepted to EMNLP 2026',
    date: 'August 26, 2026',
    author: 'Shiwei Hong',
    excerpt: 'What does it take for a language model to move beyond recognizing irony and actually understand what people mean in context?',
    image: '/images/blog/social-pragmatic-benchmark-examples.png',
    tag: 'Research',
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

      <header className="pt-32 pb-14 md:pb-20">
        <div className="container-main">
          <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Blog</span>
          <h1 className="text-h1 mb-4">Notes from DEER Lab</h1>
          <p className="text-body-lg max-w-[680px]">Research stories, reflections, and ideas from our community.</p>
        </div>
      </header>

      <main className="pb-24">
        <div className="container-main">
          <div className="grid gap-8">
            {[...BLOG_POSTS]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((post) => (
                <article key={post.slug} className="blog-module overflow-hidden rounded-[24px] border bg-white md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]" style={{ borderColor: 'var(--border-dark)' }}>
                  <Link to={`/blog/${post.slug}`} className="block overflow-hidden bg-[#f2f1ed]">
                    <img src={post.image} alt="Representative diagnostic items from the social-pragmatic inference benchmark" className="h-full min-h-[260px] w-full object-contain p-4 md:min-h-[360px] md:p-7" />
                  </Link>
                  <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                    <div>
                      <div className="mb-7 flex flex-wrap items-center gap-3">
                        <span className="tag text-[11px]">{post.tag}</span>
                        <span className="text-[12px] font-mono uppercase tracking-[0.08em]" style={{ color: 'var(--text-muted)' }}>{post.date}</span>
                      </div>
                      <h2 className="font-serif text-[32px] leading-[1.12] tracking-[-0.02em] md:text-[42px]">
                        <Link to={`/blog/${post.slug}`} className="transition-colors hover:text-[#2D6A4F]">{post.title}</Link>
                      </h2>
                      <p className="mt-5 text-[17px] leading-[1.7]" style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
                    </div>
                    <div className="mt-9 flex items-center justify-between gap-4 border-t pt-5" style={{ borderColor: 'var(--border)' }}>
                      <span className="text-[14px] font-medium">By {post.author}</span>
                      <Link to={`/blog/${post.slug}`} className="text-[14px] font-semibold underline underline-offset-4" style={{ color: 'var(--accent-green)' }}>Read article</Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
