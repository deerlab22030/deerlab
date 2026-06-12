import { Link } from 'react-router-dom';

const NEWS_ITEMS = [
  {
    date: '2026 April',
    title: 'When culture clicks',
    text: 'George Mason Computer Science features Zhicong Lu\'s work on technology, culture, and community.',
  },
  {
    date: '2026 April',
    title: 'Reheat Nachos',
    text: 'got accepted as ACL Findings.',
  },
  {
    date: '2026 February',
    title: 'Ripplet',
    text: 'and related work got accepted at CHI.',
  },
  {
    date: '2025 August',
    title: 'Human-AI social ecosystems',
    text: 'became a growing direction in DEER Lab\'s work on AI agents and online communities.',
  },
  {
    date: '2025 May',
    title: 'Seeing through the overlap',
    text: 'continues our work on communication, interpretation, and accessible digital experience.',
  },
  {
    date: '2024 July',
    title: 'Lab website',
    text: 'entered its first public version.',
  },
];

export default function News() {
  return (
    <section id="news" className="section-pad relative" style={{ background: 'var(--bg-cream)' }}>
      <div className="container-main">
        <div className="flex items-center justify-between gap-5 mb-10">
          <h2 className="text-[18px] font-bold tracking-[0.16em] uppercase">Lab News</h2>
          <Link to="/news" className="text-[13px] font-medium underline underline-offset-4" style={{ color: 'var(--accent-green)' }}>
            View all
          </Link>
        </div>

        <div
          className="max-h-[360px] overflow-y-auto pr-4"
          style={{ scrollbarColor: 'rgba(26,26,26,0.28) transparent' }}
        >
          <div className="space-y-4">
            {NEWS_ITEMS.map((item) => (
              <article key={`${item.date}-${item.title}`} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-0">
                <p className="text-[15px] font-semibold" style={{ color: 'var(--text-muted)' }}>{item.date}</p>
                <p className="text-[15px] md:text-[16px] leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  <Link to="/news" className="font-semibold hover:underline underline-offset-4" style={{ color: 'var(--accent-green)' }}>
                    "{item.title}"
                  </Link>
                  {' '}{item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
