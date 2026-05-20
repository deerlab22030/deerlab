import { useEffect } from 'react';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

const POSTS = [
  {
    title: 'DEER Lab Receives NSF CAREER Award',
    date: 'March 2024',
    excerpt: 'We are thrilled to announce that our lab has been awarded the NSF CAREER grant for our project on empowering older adults through livestreaming communities.',
    tag: 'Grants',
    image: '/images/workshop.jpg',
    featured: true,
  },
  {
    title: 'New Paper on Human-AI Co-creativity Accepted at CSCW 2025',
    date: 'February 2024',
    excerpt: 'Our latest work investigating how people collaborate with LLMs in prewriting tasks has been accepted at CSCW 2025.',
    tag: 'Publication',
    image: '/images/pub5.jpg',
  },
  {
    title: 'Welcoming New PhD Students to the Lab',
    date: 'September 2023',
    excerpt: 'We are excited to welcome several new PhD students to DEER Lab at both George Mason University and City University of Hong Kong.',
    tag: 'People',
    image: '/images/labgroup.jpg',
  },
  {
    title: 'Google Research Scholar Award for Accessible Gaming',
    date: 'July 2023',
    excerpt: 'Our research on accessible gaming for blind and low vision players has received funding from the Google Research Scholar program.',
    tag: 'Grants',
    image: '/images/userstudy.jpg',
  },
  {
    title: 'CHI 2024 Best Paper Honorable Mention',
    date: 'May 2023',
    excerpt: 'Our paper received the Best Paper Honorable Mention at CHI 2024. Thank you to all our collaborators and reviewers.',
    tag: 'Award',
    image: '/images/conference.jpg',
  },
  {
    title: 'Reflections on VTubing Research',
    date: 'January 2023',
    excerpt: 'Thoughts on our ongoing investigation into VTubing and how virtual identities reshape self-presentation in online spaces.',
    tag: 'Research',
    image: '/images/pub6.jpg',
  },
];

const TAG_COLORS: Record<string, string> = {
  Grants: 'rgba(45, 106, 79, 0.1)',
  Publication: 'rgba(59, 130, 246, 0.1)',
  People: 'rgba(168, 85, 247, 0.1)',
  Award: 'rgba(234, 179, 8, 0.1)',
  Research: 'rgba(239, 68, 68, 0.1)',
};

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <div className="min-h-[100dvh]" style={{ background: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />

      {/* Header */}
      <div className="pt-32 pb-12">
        <div className="container-main">
          <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Blog</span>
          <h1 className="text-h1 mb-4">Lab News</h1>
          <p className="text-body-lg max-w-[600px]">
            Updates, reflections, and announcements from DEER Lab.
          </p>
        </div>
      </div>

      {/* Featured post */}
      <section className="pb-12">
        <div className="container-main">
          <div
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden cursor-pointer bg-white"
            style={{ border: '1px solid var(--border)' }}
          >
            <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[12px] font-semibold px-3 py-1 rounded-full"
                  style={{ background: TAG_COLORS[featured.tag], color: '#2D6A4F' }}
                >
                  {featured.tag}
                </span>
                <span className="text-[13px]" style={{ color: 'var(--text-muted)' }}>{featured.date}</span>
              </div>
              <h2 className="font-serif text-[28px] md:text-[36px] leading-tight mb-4 group-hover:underline underline-offset-4 decoration-1">
                {featured.title}
              </h2>
              <p className="text-body mb-6">{featured.excerpt}</p>
              <span className="text-[14px] font-medium hover:underline underline-offset-4" style={{ color: '#2D6A4F' }}>
                Read more
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="pb-24">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <div
                key={post.title}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white transition-all hover:-translate-y-1"
                style={{ border: '1px solid var(--border)' }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ background: TAG_COLORS[post.tag], color: '#2D6A4F' }}
                    >
                      {post.tag}
                    </span>
                    <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-[16px] leading-snug mb-2 group-hover:underline underline-offset-4 decoration-1">
                    {post.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="pb-24">
        <div className="container-main">
          <div className="max-w-[500px] mx-auto text-center p-8 rounded-3xl" style={{ background: 'var(--bg-cream)', border: '1px solid var(--border)' }}>
            <h3 className="font-serif text-[24px] mb-3">Stay updated</h3>
            <p className="text-body mb-6">Get notified when we publish new research or lab updates.</p>
            <div className="flex gap-2 max-w-[360px] mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 text-[14px] px-4 py-2.5 rounded-full outline-none"
                style={{ background: '#fff', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              />
              <button className="text-[13px] font-medium px-5 py-2.5 rounded-full text-white shrink-0" style={{ background: 'var(--bg-dark)' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
