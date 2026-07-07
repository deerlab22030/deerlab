import { useEffect, useState } from 'react';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

const SCHOLAR_URL = 'https://scholar.google.com/citations?hl=en&user=xCxyGuwAAAAJ&view_op=list_works';

const THEMES = [
  {
    name: 'Livestreaming',
    desc: 'Live classrooms, danmaku, creator-viewer interaction, and in-stream communication.',
    color: '#2D6A4F',
    bg: 'rgba(45,106,79,0.10)',
    border: 'rgba(45,106,79,0.20)',
  },
  {
    name: 'VTubers, Avatars & Embodiment',
    desc: 'Avatar identity, virtual performance, parasocial relationships, and embodied presence.',
    color: '#2F6F88',
    bg: 'rgba(47,111,136,0.10)',
    border: 'rgba(47,111,136,0.22)',
  },
  {
    name: 'Science Communication & Public Sensemaking',
    desc: 'Public-facing knowledge, story revision, platform narratives, and collective interpretation.',
    color: '#9A6A1F',
    bg: 'rgba(154,106,31,0.12)',
    border: 'rgba(154,106,31,0.24)',
  },
  {
    name: 'AI Agents for Social Interaction',
    desc: 'LLM agents, AI companions, interview support, moderation, and community-aware generation.',
    color: '#B65F4B',
    bg: 'rgba(182,95,75,0.11)',
    border: 'rgba(182,95,75,0.22)',
  },
];

const AREAS = [
  {
    title: 'Human-Computer Interaction',
    desc: 'Designing and studying interactive systems for embodied communication, accessibility, creator-viewer interaction, and meaningful digital experience.',
    image: '/images/research-hci-2026.png',
    pubs: ['ThingMoji', 'SpeechCap', 'PuppetChat', 'Investigating VTubing as a Reconstruction'],
  },
  {
    title: 'Human-AI Interaction',
    desc: 'Building and evaluating AI systems that support creativity, interviews, moderation, value alignment, and public-facing communication.',
    image: '/images/research-human-ai-2026.png',
    pubs: ['RevTogether', 'InterFlow', 'DanModCap', 'User-Driven Value Alignment'],
  },
  {
    title: 'Human-Agent Interaction',
    desc: 'Investigating how people work with AI agents, companions, avatars, and multi-agent communities in social, creative, and knowledge-intensive settings.',
    image: '/images/research-human-agent-2026.png',
    pubs: ['Multi-Agent Comedy Club', 'RevTogether', 'PuppetChat', 'User-Driven Value Alignment'],
  },
  {
    title: 'Social Computing / Computational Social Science',
    desc: 'Understanding online communities, livestreaming, VTuber publics, platform cultures, and public sensemaking through qualitative and computational approaches.',
    image: '/images/research-social-css-2026.png',
    pubs: ['Live, Learn, and Connect', 'Public Parasocial Grieving and Coping Towards VTuber Graduation and Termination', 'The Digital Landscape of God', 'More Kawaii than a Real-Person Live Streamer'],
  },
];

const PUBLICATIONS = [
  {
    year: '2026',
    title: 'Multi-Agent Comedy Club: Investigating Community Discussion Effects on LLM Humor Generation',
    authors: 'Shiwei Hong, Lingyao Li, Ethan Z. Rong, Chenxinran Shen, and Zhicong Lu',
    venue: 'Findings of the Association for Computational Linguistics: ACL 2026, 2026',
    link: 'https://aclanthology.org/2026.findings-acl.145',
    tags: ['ACL', 'Human-Agent Interaction', 'Human-AI Interaction', 'AI Agents for Social Interaction'],
  },
  {
    year: '2026',
    title: 'InterFlow: Designing Unobtrusive AI to Empower Interviewers in Semi-Structured Interviews',
    authors: 'Yi Wen, Yu Zhang, Sriram Suresh, Zhicong Lu, Can Liu, and Meng Xia',
    venue: 'Proceedings of the Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems, 2026',
    link: 'https://dl.acm.org/doi/10.1145/3772318.3790866',
    tags: ['CHI', 'Human-AI Interaction', 'Human-Agent Interaction', 'AI Agents for Social Interaction'],
  },
  {
    year: '2026',
    title: 'PuppetChat: Fostering Intimate Communication through Bidirectional Actions and Micronarratives',
    authors: 'Emma Jiren Wang, Siying Hu, and Zhicong Lu',
    venue: 'Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems, 2026',
    link: 'https://dl.acm.org/doi/10.1145/3772318.3790685',
    tags: ['CHI', 'Human-Computer Interaction', 'Human-Agent Interaction', 'VTubers, Avatars & Embodiment', 'AI Agents for Social Interaction'],
  },
  {
    year: '2026',
    title: 'The Digital Landscape of God: Narrative, Visuals and Viewer Engagement of Religious Videos on YouTube',
    authors: 'Rongyi Chen, Ziyan Xin, Qing Xiao, Ruiwei Xiao, Jingjia Xiao, Bingbing Zhang, Hong Shen, and Zhicong Lu',
    venue: 'Proceedings of the International AAAI Conference on Web and Social Media, 2026',
    link: 'https://ojs.aaai.org/index.php/ICWSM/article/view/42649',
    tags: ['ICWSM', 'Social Computing / Computational Social Science', 'Science Communication & Public Sensemaking'],
  },
  {
    year: '2025',
    title: 'Live, Learn, and Connect: Unpacking Live-Streaming-Based Silver Classroom in China',
    authors: 'Ethan Z. Rong, Jifan Shen, Zhicong Lu, and Yuling Sun',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (CSCW), Article 366, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3757436',
    tags: ['CSCW', 'Social Computing / Computational Social Science', 'Human-Computer Interaction', 'Livestreaming'],
  },
  {
    year: '2025',
    title: '"Can\'t believe I\'m crying over an anime girl": Public Parasocial Grieving and Coping Towards VTuber Graduation and Termination',
    authors: 'Ken Jen Lee, PiaoHong Wang, and Zhicong Lu',
    venue: 'Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3706598.3714216',
    tags: ['CHI', 'Social Computing / Computational Social Science', 'Human-Computer Interaction', 'VTubers, Avatars & Embodiment'],
  },
  {
    year: '2025',
    title: 'ThingMoji: User-Captured Cut-Outs For In-Stream Visual Communication',
    authors: 'Erzhen Hu, Qian Wan, Changkong Zhou, Md Aashikur Rahman Azim, PiaoHong Wang, Xingyi Hu, Yuhan Zeng, Zhicong Lu, and Seongkook Heo',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (CSCW), Article 406, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3757676',
    tags: ['CSCW', 'Human-Computer Interaction', 'Social Computing / Computational Social Science', 'Livestreaming'],
  },
  {
    year: '2025',
    title: 'DanModCap: Designing a Danmaku Moderation Tool for Video-Sharing Platforms that Leverages Impact Captions with Large Language Models',
    authors: 'Siying Hu, Huanchen Wang, Yu Zhang, Piaohong Wang, and Zhicong Lu',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (CSCW), Article 144, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3710954',
    tags: ['CSCW', 'Human-AI Interaction', 'Human-Computer Interaction', 'Livestreaming', 'AI Agents for Social Interaction'],
  },
  {
    year: '2025',
    title: 'SpeechCap: Leveraging Playful Impact Captions to Facilitate Interpersonal Communication in Social Virtual Reality',
    authors: 'Yu Zhang, Yi Wen, Siying Hu, and Zhicong Lu',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (CSCW), Article 358, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3757427',
    tags: ['CSCW', 'Human-Computer Interaction', 'Human-AI Interaction', 'VTubers, Avatars & Embodiment'],
  },
  {
    year: '2025',
    title: 'RevTogether: Supporting Science Story Revision with Multiple AI Agents',
    authors: 'Yu Zhang, Kexue Fu, and Zhicong Lu',
    venue: 'Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3706599.3719888',
    tags: ['CHI', 'Human-AI Interaction', 'Human-Agent Interaction', 'Science Communication & Public Sensemaking', 'AI Agents for Social Interaction'],
  },
  {
    year: '2025',
    title: 'User-Driven Value Alignment: Understanding Users\' Perceptions and Strategies for Addressing Biased and Discriminatory Statements in AI Companions',
    authors: 'Xianzhe Fan, Qing Xiao, Xuhui Zhou, Jiaxin Pei, Maarten Sap, Zhicong Lu, and Hong Shen',
    venue: 'Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 2025',
    link: 'https://dl.acm.org/doi/10.1145/3706598.3713477',
    tags: ['CHI', 'Human-AI Interaction', 'Human-Agent Interaction', 'AI Agents for Social Interaction'],
  },
  {
    year: '2024',
    title: 'Investigating VTubing as a Reconstruction of Streamer Self-Presentation: Identity, Performance, and Gender',
    authors: 'Qian Wan and Zhicong Lu',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 8 (CSCW), Article 80, 2024',
    link: 'https://dl.acm.org/doi/10.1145/3637357',
    tags: ['CSCW', 'Human-Computer Interaction', 'Social Computing / Computational Social Science', 'VTubers, Avatars & Embodiment', 'Livestreaming'],
  },
  {
    year: '2021',
    title: 'More Kawaii than a Real-Person Live Streamer: Understanding How the Otaku Community Engages with and Perceives Virtual YouTubers',
    authors: 'Zhicong Lu, Chenxinran Shen, Jiannan Li, Hong Shen, and Daniel Wigdor',
    venue: 'Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems, 2021',
    link: 'https://dl.acm.org/doi/10.1145/3411764.3445660',
    tags: ['CHI', 'Social Computing / Computational Social Science', 'Human-Computer Interaction', 'VTubers, Avatars & Embodiment', 'Livestreaming'],
  },
];

const VENUE_FILTERS = ['All', 'CHI', 'CSCW', 'ACL', 'ICWSM'];

const pubByTitle = new Map(PUBLICATIONS.map((pub) => [pub.title, pub]));
const themeByName = new Map(THEMES.map((theme) => [theme.name, theme]));

const getPublication = (label: string) => {
  const exact = pubByTitle.get(label);
  if (exact) return exact;
  return PUBLICATIONS.find((pub) => pub.title.includes(label));
};

export default function ResearchPage() {
  const [activeArea, setActiveArea] = useState(0);
  const [venueFilter, setVenueFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = venueFilter === 'All' ? PUBLICATIONS : PUBLICATIONS.filter((pub) => pub.tags.includes(venueFilter));

  const tagStyle = (tag: string) => {
    const theme = themeByName.get(tag);
    if (!theme) return undefined;
    return { background: theme.bg, color: theme.color, borderColor: theme.border };
  };

  const recentStyle = (pub?: (typeof PUBLICATIONS)[number]) => {
    const theme = pub?.tags.map((tag) => themeByName.get(tag)).find(Boolean);
    return theme ? { background: theme.bg, color: theme.color, border: `1px solid ${theme.border}` } : { background: 'rgba(45,106,79,0.08)', color: '#2D6A4F' };
  };

  return (
    <div className="min-h-[100dvh]" style={{ background: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />

      <div className="pt-32 pb-16">
        <div className="container-main">
          <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Research</span>
          <h1 className="text-h1 mb-4">Research</h1>
          <p className="text-body-lg max-w-[720px]">
            DEER Lab organizes its research across human-computer interaction, human-AI interaction, human-agent interaction, and social computing / computational social science, with current work centered on livestreaming, VTubers and avatars, science communication, and social AI agents.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mt-10">
            {THEMES.map((theme) => (
              <div key={theme.name} className="rounded-2xl p-4" style={{ background: theme.bg, border: `1px solid ${theme.border}` }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: theme.color }} />
                  <h2 className="text-[14px] font-semibold" style={{ color: theme.color }}>{theme.name}</h2>
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{theme.desc}</p>
              </div>
            ))}
          </div>
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
                        style={recentStyle(pub)}
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
                        <a key={tag} href={pub.link} target="_blank" rel="noopener noreferrer" className="tag text-[11px] transition-opacity hover:opacity-70" style={tagStyle(tag)}>{tag}</a>
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
