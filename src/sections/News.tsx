import { Link } from 'react-router-dom';

const NEWS_ITEMS = [
  {
    date: '2026 March',
    title: 'Lab website launched',
    text: 'DEER Lab established its first public website to share research, news, and opportunities.',
  },
  {
    date: '2026 April',
    title: 'Zhicong attended CHI 2026 in Barcelona',
    text: 'Zhicong Lu participated in CHI 2026, the ACM conference on Human Factors in Computing Systems, held in Barcelona, Spain.',
    href: 'https://chi2026.acm.org/',
  },
  {
    date: '2026 April',
    title: 'Zhicong interviewed by Mason CEC Communications',
    text: 'The interview highlights his research on digital platforms, livestreaming, culture, and community-building.',
    href: 'https://cs.gmu.edu/news/2026-04/when-culture-clicks-studying-technologys-power-build-community',
  },
  {
    date: '2026 April',
    title: 'DEER Lab members joined Microsoft Family Day',
    text: 'Zhicong Lu, Shiwei Hong, and Junjie Ma were invited to Microsoft Reston for a community-facing Family Day event.',
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

        <div className="max-h-[360px] overflow-y-auto pr-4" style={{ scrollbarColor: 'rgba(26,26,26,0.28) transparent' }}>
          <div className="space-y-5">
            {NEWS_ITEMS.slice(0, 6).map((item) => (
              <article key={`${item.date}-${item.title}`} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-0">
                <p className="text-[15px] font-semibold" style={{ color: 'var(--text-muted)' }}>{item.date}</p>
                <div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[16px] font-semibold hover:underline underline-offset-4" style={{ color: 'var(--accent-green)' }}>
                      "{item.title}"
                    </a>
                  ) : (
                    <Link to="/news" className="text-[16px] font-semibold hover:underline underline-offset-4" style={{ color: 'var(--accent-green)' }}>
                      "{item.title}"
                    </Link>
                  )}
                  <p className="text-[14px] md:text-[15px] leading-relaxed mt-1" style={{ color: 'var(--text-secondary)' }}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
