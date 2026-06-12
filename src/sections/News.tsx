import { Link } from 'react-router-dom';

const NEWS_ITEMS = [
  {
    date: 'April 21, 2026',
    title: 'When culture clicks: Zhicong Lu discusses technology and community',
    summary: 'George Mason Computer Science features Lu\'s work on livestreaming, cultural heritage, generative AI, and human connection.',
    tag: 'Feature',
  },
  {
    date: '2026',
    title: 'Research directions center on culture, community, and human-AI ecosystems',
    summary: 'DEER Lab is expanding work on digital platforms, social computing, and systems where humans and AI agents coexist.',
    tag: 'Lab',
  },
  {
    date: '2025',
    title: 'Recent publications examine creativity, communication, and online communities',
    summary: 'Current projects span LLM-supported prewriting, social VR communication, livestreaming, and emerging forms of digital identity.',
    tag: 'Publications',
  },
];

export default function News() {
  return (
    <section id="news" className="section-pad relative" style={{ background: 'var(--bg-cream)' }}>
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
          <div>
            <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>News</span>
            <h2 className="text-h2">Latest from the lab</h2>
          </div>
          <Link to="/news" className="text-[14px] font-medium underline underline-offset-4" style={{ color: 'var(--accent-green)' }}>
            View all news
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--border-dark)' }}>
          {NEWS_ITEMS.map((item) => (
            <article key={item.title} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-7" style={{ borderBottom: '1px solid var(--border)' }}>
              <div className="md:col-span-2">
                <p className="text-[13px] font-mono" style={{ color: 'var(--text-muted)' }}>{item.date}</p>
              </div>
              <div className="md:col-span-7">
                <h3 className="font-semibold text-[18px] leading-snug mb-2">{item.title}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.summary}</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <span className="tag text-[11px]">{item.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
