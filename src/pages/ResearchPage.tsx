import { useEffect, useState } from 'react';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

const SCHOLAR_URL = 'https://scholar.google.com/citations?hl=en&user=xCxyGuwAAAAJ&view_op=list_works';

const AREAS = [
  {
    title: 'Livestreaming Communities',
    desc: 'Studying live, in-stream, and short-video communities where viewers learn, participate, gift, comment, moderate, and build shared social presence with creators.',
    image: '/images/research-human-ai.png',
    pubs: ['Live, Learn, and Connect', 'ThingMoji', 'DanModCap', 'More Kawaii than a Real-Person Live Streamer'],
  },
  {
    title: 'VTubers, Avatars & Embodiment',
    desc: 'Understanding avatar-mediated performance, VTuber identity, parasocial bonds, social VR, and embodied interfaces that reshape how people appear and relate online.',
    image: '/images/research-social-computing.png',
    pubs: ['Public Parasocial Grieving and Coping Towards VTuber Graduation and Termination', 'Investigating VTubing as a Reconstruction', 'SpeechCap', 'PuppetChat'],
  },
  {
    title: 'Science Communication & Public Sensemaking',
    desc: 'Designing human-AI systems and studying digital media practices that make complex knowledge, science stories, and public-interest narratives more accessible.',
    image: '/images/research-hci-accessibility.png',
    pubs: ['RevTogether', 'The Digital Landscape of God', 'InterFlow', 'Multi-Agent Comedy Club'],
  },
  {
    title: 'AI Agents for Social Interaction',
    desc: 'Building and evaluating LLM-powered agents, companions, interview scaffolds, moderators, and creative collaborators with attention to agency, safety, and community context.',
    image: '/images/research-nlp-visualization.png',
    pubs: ['Multi-Agent Comedy Club', 'RevTogether', 'InterFlow', 'User-Driven Value Alignment'],
  },
];

const PUBLICATIONS = [
  {
    year: '2026',
    title: 'Multi-Agent Comedy Club: Investigating Community Discussion Effects on LLM Humor Generation',
    authors: 'Shiwei Hong, Lingyao Li, Ethan Z. Rong, Chenxinran Shen, and Zhicong Lu',
    venue: 'Findings of the Association for Computational Linguistics: ACL 2026, 2026',
    link: 'https://aclanthology.org/2026.findings-acl.145',
    tags: ['ACL', 'Human-AI Interaction', 'Natural Language Processing', 'Avatars & Agents', 'Multi-Agent Systems'],
  },
  {
    year: '2026',
    title: 'InterFlow: Designing Unobtrusive AI to Empower Interviewers in Semi-Structured Interviews',
    authors: 'Yi Wen, Yu Zhang, Sriram Suresh, Zhicong Lu, Can Liu, and Meng Xia',
    venue: 'Proceedings of the Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems, 2026',
    link: 'https://dl.acm.org/doi/10.1145/3772318.3790866',
    tags: ['CHI', 'Human-AI Interaction', 'Human-Computer Interaction', 'Avatars & Agents', 'AI Interviewing'],
  },
  {
    year: '2026',
    title: 'PuppetChat: Fostering Intimate Communication through Bidirectional Actions and Micronarratives',
    authors: 'Emma Jiren Wang, Siying Hu, and Zhicong Lu',
    venue: 'Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems, 2026',
    link: 'https://dl.acm.org/doi/10.1145/3772318.3790685',
    tags: ['CHI', 'Human-AI Interaction', 'Human-Computer Interaction', 'Avatars & Agents', 'Embodied Communication'],
  },
  {
    year: '2026',
    title: 'The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube',
    authors: 'Rongyi Chen, Ziyan Xin, Qing Xiao, Ruiwei Xiao, Jingjia Xiao, Bingbing Zhang, Hong Shen, and Zhicong Lu',
    venue: 'Proceedings of the International AAAI Conference on Web and Social Media, 2026',
    link: 'https://ojs.aaai.org/index.php/ICWSM/article/view/42649',
    tags: ['ICWSM', 'Social Computing', 'Natural Language Processing', 'Science Communication', 'Online Video'],
  },
  {
    year: '2025',
    title: 'Live, Learn, and Connect: Unpacking Live-Streaming-Based Silver Classroom in China',
    authors: 'Ethan Z. Rong, Jifan Shen, Zhicong Lu, and Yuling Sun',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (CSCW), Article 366, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3757436',
    tags: ['CSCW', 'Social Computing', 'Human-Computer Interaction', 'Livestreaming', 'Online Learning'],
  },
  {
    year: '2025',
    title: '"Can\'t believe I\'m crying over an anime girl": Public Parasocial Grieving and Coping Towards VTuber Graduation and Termination',
    authors: 'Ken Jen Lee, PiaoHong Wang, and Zhicong Lu',
    venue: 'Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3706598.3714216',
    tags: ['CHI', 'Social Computing', 'Human-Computer Interaction', 'VTubers', 'Parasocial Relationships'],
  },
  {
    year: '2025',
    title: 'ThingMoji: User-Captured Cut-Outs For In-Stream Visual Communication',
    authors: 'Erzhen Hu, Qian Wan, Changkong Zhou, Md Aashikur Rahman Azim, PiaoHong Wang, Xingyi Hu, Yuhan Zeng, Zhicong Lu, and Seongkook Heo',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (CSCW), Article 406, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3757676',
    tags: ['CSCW', 'Human-Computer Interaction', 'Social Computing', 'Livestreaming', 'Visual Communication'],
  },
  {
    year: '2025',
    title: 'DanModCap: Designing a Danmaku Moderation Tool for Video-Sharing Platforms that Leverages Impact Captions with Large Language Models',
    authors: 'Siying Hu, Huanchen Wang, Yu Zhang, Piaohong Wang, and Zhicong Lu',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (CSCW), Article 144, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3710954',
    tags: ['CSCW', 'Human-AI Interaction', 'Natural Language Processing', 'Livestreaming', 'Content Moderation'],
  },
  {
    year: '2025',
    title: 'SpeechCap: Leveraging Playful Impact Captions to Facilitate Interpersonal Communication in Social Virtual Reality',
    authors: 'Yu Zhang, Yi Wen, Siying Hu, and Zhicong Lu',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (CSCW), Article 358, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3757427',
    tags: ['CSCW', 'Human-Computer Interaction', 'Human-AI Interaction', 'Avatars & Agents', 'Social VR'],
  },
  {
    year: '2025',
    title: 'RevTogether: Supporting Science Story Revision with Multiple AI Agents',
    authors: 'Yu Zhang, Kexue Fu, and Zhicong Lu',
    venue: 'Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3706599.3719888',
    tags: ['CHI', 'Human-AI Interaction', 'Natural Language Processing', 'Science Communication', 'Avatars & Agents'],
  },
  {
    year: '2025',
    title: 'User-Driven Value Alignment: Understanding Users\' Perceptions and Strategies for Addressing Biased and Discriminatory Statements in AI Companions',
    authors: 'Xianzhe Fan, Qing Xiao, Xuhui Zhou, Jiaxin Pei, Maarten Sap, Zhicong Lu, and Hong Shen',
    venue: 'Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3706598.3713477',
    tags: ['CHI', 'Human-AI Interaction', 'Natural Language Processing', 'Avatars & Agents', 'AI Companions'],
  },
  {
    year: '2024',
    title: 'Investigating VTubing as a Reconstruction of Streamer Self-Presentation: Identity, Performance, and Gender',
    authors: 'Qian Wan and Zhicong Lu',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 8 (CSCW), Article 80, 2024',
    link: 'https://dl.acm.org/doi/10.1145/3637357',
    tags: ['CSCW', 'Human-Computer Interaction', 'Social Computing', 'VTubers', 'Livestreaming'],
  },
  {
    year: '2021',
    title: 'More Kawaii than a Real-Person Live Streamer: Understanding How the Otaku Community Engages with and Perceives Virtual YouTubers',
    authors: 'Zhicong Lu, Chenxinran Shen, Jiannan Li, Hong Shen, and Daniel Wigdor',
    venue: 'Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems, 2021',
    link: 'https://dl.acm.org/doi/10.1145/3411764.3445660',
    tags: ['CHI', 'Social Computing', 'Human-Computer Interaction', 'VTubers', 'Livestreaming'],
  },
];

const VENUE_FILTERS = ['All', 'CHI', 'CSCW', 'ACL', 'ASSETS', 'ICWSM', 'Journal', 'Other'];
const THEME_FILTERS = ['All themes', 'Human-AI Interaction', 'Social Computing', 'Human-Computer Interaction', 'Natural Language Processing'];

const pubByTitle = new Map(PUBLICATIONS.map((pub) => [pub.title, pub]));

const getPublication = (label: string) => {
  const exact = pubByTitle.get(label);
  if (exact) return exact;
  return PUBLICATIONS.find((pub) => pub.title.includes(label));
};

export default function ResearchPage() {
  const [activeArea, setActiveArea] = useState(0);
  const [venueFilter, setVenueFilter] = useState('All');
  const [themeFilter, setThemeFilter] = useState('All themes');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = PUBLICATIONS.filter((pub) => {
    const venueMatch = venueFilter === 'All' || pub.tags.includes(venueFilter);
    const themeMatch = themeFilter === 'All themes' || pub.tags.includes(themeFilter);
    return venueMatch && themeMatch;
  });

  return (
    <div className="min-h-[100dvh]" style={{ background: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />

      <div className="pt-32 pb-16">
        <div className="container-main">
          <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Research</span>
          <h1 className="text-h1 mb-4">Research</h1>
          <p className="text-body-lg max-w-[720px]">
            DEER Lab studies livestreaming, VTubers, science communication, avatars, and AI agents as connected sites where digital experience becomes social, embodied, and community-shaped.
          </p>
        </div>
      </div>

      <section className="pb-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              {AREAS.map((area, i) => (
                <button
                  key={area.title}
                  onClick={() => setActiveArea(i)}
                  className="w-full text-left py-5 transition-all"
                  style={{ borderTop: i === 0 ? '1px solid var(--border-dark)' : '1px solid var(--border)' }}
                >
                  <span className="text-[13px] mb-1 block" style={{ color: 'var(--text-muted)' }}>0{i + 1}</span>
                  <h2 className="text-h4 transition-all" style={{ color: activeArea === i ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                    {area.title}
                  </h2>
                </button>
              ))}
              <div style={{ borderTop: '1px solid var(--border)' }} />
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden mb-8 bg-white" style={{ border: '1px solid var(--border)' }}>
                <img src={AREAS[activeArea].image} alt={AREAS[activeArea].title} className="w-full h-[300px] object-cover" />
              </div>
              <h2 className="font-serif text-[30px] mb-4">{AREAS[activeArea].title}</h2>
              <p className="text-body-lg mb-7">{AREAS[activeArea].desc}</p>
              <div>
                <h3 className="text-label mb-3">Recent Publications</h3>
                <div className="flex flex-wrap gap-2">
                  {AREAS[activeArea].pubs.map((p) => {
                    const pub = getPublication(p);
                    return pub ? (
                      <a
                        key={p}
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-medium px-3 py-1.5 rounded-full transition-all hover:-translate-y-0.5"
                        style={{ background: 'rgba(45,106,79,0.08)', color: '#2D6A4F' }}
                      >
                        {p}
                      </a>
                    ) : (
                      <span key={p} className="text-[13px] font-medium px-3 py-1.5 rounded-full" style={{ background: 'rgba(45,106,79,0.08)', color: '#2D6A4F' }}>{p}</span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="py-20">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Publications</span>
              <h2 className="text-h3">Published work</h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                {VENUE_FILTERS.map((venue) => (
                  <button
                    key={venue}
                    onClick={() => setVenueFilter(venue)}
                    className="text-[13px] font-medium px-4 py-2 rounded-full transition-all"
                    style={{
                      background: venueFilter === venue ? 'var(--bg-dark)' : 'transparent',
                      color: venueFilter === venue ? '#fff' : 'var(--text-secondary)',
                      border: venueFilter === venue ? 'none' : '1px solid var(--border)',
                    }}
                  >
                    {venue}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                {THEME_FILTERS.map((theme) => (
                  <button
                    key={theme}
                    onClick={() => setThemeFilter(theme)}
                    className="text-[13px] font-medium px-4 py-2 rounded-full transition-all"
                    style={{
                      background: themeFilter === theme ? 'rgba(45,106,79,0.12)' : 'transparent',
                      color: themeFilter === theme ? '#2D6A4F' : 'var(--text-secondary)',
                      border: themeFilter === theme ? '1px solid rgba(45,106,79,0.18)' : '1px solid var(--border)',
                    }}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {filtered.map((pub) => (
              <article key={`${pub.year}-${pub.title}`} className="p-6 rounded-2xl bg-white transition-all hover:-translate-y-0.5" style={{ border: '1px solid var(--border)' }}>
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
                  <div className="lg:w-[80px] shrink-0">
                    <span className="font-mono text-[13px]" style={{ color: 'var(--text-muted)' }}>{pub.year}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[18px] leading-snug mb-2">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#2D6A4F]">
                        {pub.title}
                      </a>
                    </h3>
                    <p className="text-[14px] mb-1" style={{ color: 'var(--text-secondary)' }}>{pub.authors}</p>
                    <p className="text-[14px] mb-4" style={{ color: 'var(--text-muted)' }}>{pub.venue}</p>
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <a key={tag} href={pub.link} target="_blank" rel="noopener noreferrer" className="tag text-[11px] transition-opacity hover:opacity-70">{tag}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl" style={{ background: 'var(--bg-cream)', border: '1px solid var(--border)' }}>
            <p className="text-body">
              For more publications and citation details, visit Zhicong Lu&apos;s{' '}
              <a href={SCHOLAR_URL} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4" style={{ color: 'var(--accent-green)' }}>
                Google Scholar profile
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
