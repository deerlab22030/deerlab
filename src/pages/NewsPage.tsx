import { useEffect } from 'react';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

const NEWS = [
  {
    title: 'Zhicong attended CHI 2026 in Barcelona',
    date: '2026 April',
    excerpt: 'Zhicong Lu participated in CHI 2026, the ACM conference on Human Factors in Computing Systems, held in Barcelona, Spain.',
    tag: 'Conference',
    link: 'https://chi2026.acm.org/',
    linkLabel: 'CHI 2026',
  },
  {
    title: 'Zhicong interviewed by Mason CEC Communications',
    date: '2026 April',
    excerpt: 'The interview discusses how his research studies technology\'s power to support culture, livestreaming, community, and meaningful human connection.',
    tag: 'Interview',
    link: 'https://cs.gmu.edu/news/2026-04/when-culture-clicks-studying-technologys-power-build-community',
    linkLabel: 'Read the interview',
  },
  {
    title: 'DEER Lab members joined Microsoft Family Day',
    date: '2026 April',
    excerpt: 'Zhicong Lu, Shiwei Hong, and Junjie Ma were invited to Microsoft Reston for a Family Day event connecting research with local communities.',
    tag: 'Community',
  },
  {
    title: 'Lab website launched',
    date: '2026 March',
    excerpt: 'DEER Lab established its first public website to share research, news, publications, and opportunities with the wider community.',
    tag: 'Lab',
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
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex mt-4 text-[14px] font-medium underline underline-offset-4" style={{ color: 'var(--accent-green)' }}>
                      {item.linkLabel}
                    </a>
                  )}
                </div>
                <div className="md:col-span-3 md:text-right">
                  <span className="tag text-[11px] mb-3">{item.tag}</span>
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
