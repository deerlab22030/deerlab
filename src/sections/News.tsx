import { Link } from 'react-router-dom';

const NEWS_ITEMS = [
  {
    date: '2026 June',
    title: 'Why did the AI agent cross the road?',
    text: "Mason CEC featured Shiwei Hong's collaborative multi-agent AI system for improving machine-generated humor.",
    href: 'https://cec.gmu.edu/news/2026-06/why-did-ai-agent-cross-road',
  },
  {
    date: '2026 June',
    title: "Zhicong spoke to GMU STIP's AVATAR project",
    text: "Zhicong Lu was invited to give a talk for GMU STIP's AVATAR project.",
    href: 'https://provost.gmu.edu/academics/undergraduate-education/mason-impact/summer-team-impact-projects',
  },
  {
    date: '2026 May',
    title: 'Shiwei presented at Capital Graphics 2026',
    text: "Shiwei Hong presented her work at Capital Graphics 2026, held at George Mason University's FUSE at Mason Square in Arlington.",
  },
  {
    date: '2026 April',
    title: 'DEER Lab members joined Microsoft Family Day',
    text: 'Zhicong Lu, Shiwei Hong, and Junjie Ma were invited to Microsoft Reston for Family Day.',
  },
  {
    date: '2026 April',
    title: 'Zhicong interviewed by Mason CEC Communications',
    text: 'Zhicong Lu was interviewed by Mason CEC Communications about technology, culture, and community.',
    href: 'https://cs.gmu.edu/news/2026-04/when-culture-clicks-studying-technologys-power-build-community',
  },
  {
    date: '2026 April',
    title: 'Zhicong attended CHI 2026 in Barcelona',
    text: 'Zhicong Lu attended CHI 2026 in Barcelona, Spain.',
    href: 'https://chi2026.acm.org/',
  },
  {
    date: '2026 March',
    title: 'Lab website launched',
    text: 'DEER Lab launched its first public website.',
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
                  <span className="text-[15px] md:text-[16px] leading-relaxed" style={{ color: 'var(--text-primary)' }}> {item.text}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
