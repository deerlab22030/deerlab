import { useEffect, useState } from 'react';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

const SCHOLAR_URL = 'https://scholar.google.com/citations?hl=en&user=xCxyGuwAAAAJ&view_op=list_works';

const AREAS = [
  {
    title: 'Human-AI Interaction',
    desc: 'Designing and evaluating AI systems for companionship, creativity, interviewing, reviewing, moderation, and multi-agent collaboration.',
    image: '/images/research-human-ai.png',
    pubs: ['PuppetChat', 'InterFlow', 'ProductMeta', 'RevTogether', 'User-driven value alignment', 'DanModCap'],
  },
  {
    title: 'Social Computing',
    desc: 'Understanding online communities, livestreaming, social media labor, fandom, collective action, mourning, and cultural participation.',
    image: '/images/research-social-computing.png',
    pubs: ['Live, Learn, and Connect', 'Emotions in Fandom Crowdfunding', 'Douyin as a Memorial Gathering for CoCo', 'Let\'s Influence Algorithms Together'],
  },
  {
    title: 'Human-Computer Interaction',
    desc: 'Studying embodied experience, accessibility, play, communication, and interactive systems that support people in real-world contexts.',
    image: '/images/research-hci-accessibility.png',
    pubs: ['SpeechCap', 'ThingMoji', 'How users who are blind or low vision play mobile games', 'Understanding How Visually Impaired Players Socialize in Mobile Games'],
  },
  {
    title: 'Natural Language Processing',
    desc: 'Using language, visual analytics, and multimodal AI to support review, sensemaking, moderation, storytelling, and media understanding.',
    image: '/images/research-nlp-visualization.png',
    pubs: ['The digital landscape of God', 'VisMoDAl', 'LLM-as-a-Reviewer', 'DanModCap'],
  },
];

const PUBLICATIONS = [
  {
    year: '2026',
    title: 'The digital landscape of God: narrative, visuals and viewer engagement of religious videos on YouTube',
    authors: 'Rongyi Chen, Ziyan Xin, Qing Xiao, Ruiwei Xiao, Jingjia Xiao, Bingbing Zhang, Hong Shen, and Zhicong Lu',
    venue: 'Proceedings of the International AAAI Conference on Web and Social Media, 2026',
    tags: ['Social Computing', 'Natural Language Processing', 'Online Video', 'ICWSM'],
  },
  {
    year: '2026',
    title: 'Cultures as Catalysts: Nurturing HCI Communities Across Regions',
    authors: 'Maristella Matera, Zhicong Lu, Gustavo Lopez, Houda Elmimouni, and Susan Dray',
    venue: 'Proceedings of the Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems, 2026',
    tags: ['Human-Computer Interaction', 'HCI Communities', 'CHI'],
  },
  {
    year: '2026',
    title: '“I Will Dream Sweet Dreams”: Understanding Remote Companionship Volunteer Activities for Factual Orphans in Rural China',
    authors: 'Jingjing Zhang, Yuanrong Tang, Yueqing Hu, Tianhong Wang, Hanchao Song, Zhicong Lu, and Jiangtao Gong',
    venue: 'Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems, 2026',
    tags: ['Human-Computer Interaction', 'Social Computing', 'Care', 'CHI'],
  },
  {
    year: '2026',
    title: 'Sportoonizer: Augmenting Sports Highlights\' Narratives via AI-Generated Manga B-Roll',
    authors: 'Siying Hu, Jiajun Wang, Xiangzhe Yuan, Jian Ma, Zhiyang Wu, and Zhicong Lu',
    venue: 'Proceedings of the Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems, 2026',
    tags: ['Human-AI Interaction', 'Human-Computer Interaction', 'Creative AI', 'CHI'],
  },
  {
    year: '2026',
    title: 'PuppetChat: Fostering Intimate Communication through Bidirectional Actions and Micronarratives',
    authors: 'Emma Jiren Wang, Siying Hu, and Zhicong Lu',
    venue: 'Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems, 2026',
    tags: ['Human-AI Interaction', 'Human-Computer Interaction', 'Intimate Communication', 'CHI'],
  },
  {
    year: '2026',
    title: 'InterFlow: Designing Unobtrusive AI to Empower Interviewers in Semi-Structured Interviews',
    authors: 'Yi Wen, Yu Zhang, Sriram Suresh, Zhicong Lu, Can Liu, and Meng Xia',
    venue: 'Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems, 2026',
    tags: ['Human-AI Interaction', 'Human-Computer Interaction', 'Research Tools', 'CHI'],
  },
  {
    year: '2026',
    title: 'AI vs. human paintings? Deciphering public interactions and perceptions towards AI-generated paintings on TikTok',
    authors: 'Jiajun Wang, Xiangzhe Yuan, Siying Hu, and Zhicong Lu',
    venue: 'International Journal of Human-Computer Interaction 42 (5), 3307-3330, 2026',
    tags: ['Human-AI Interaction', 'Social Computing', 'Creative AI', 'Journal'],
  },
  {
    year: '2025',
    title: 'Emotions in Fandom Crowdfunding: Investigating How Online Interactions Affect Collaborative Monetary Activities',
    authors: 'Molly Zhuangtong Huang, Zhicong Lu, Caishi Huang, Zhenning Li, Hantao Zhao, Xiaobo Zhou, Dazhao Cheng, and Kanye Ye Wang',
    venue: 'ACM Transactions on Computer-Human Interaction 32 (6), 1-46, 2025',
    tags: ['Social Computing', 'Human-Computer Interaction', 'Fandom', 'Journal'],
  },
  {
    year: '2025',
    title: 'Exploring Engagement, Interaction, and Community-Building Among Content Creators and Viewers in RedNote’s Autism-Related Content',
    authors: 'Yiming Fu, Sichang Su, Jiaan Li, Shuming Yang, Zhicong Lu, and Xin Tong',
    venue: 'Proceedings of the 2025 International Conference on Human-Engaged Computing, 2025',
    tags: ['Social Computing', 'Human-Computer Interaction', 'Online Community', 'Other'],
  },
  {
    year: '2025',
    title: 'VisMoDAl: Visual Analytics for Evaluating and Improving Corruption Robustness of Vision-Language Models',
    authors: 'Huanchen Wang, Wencheng Zhang, Zhiqiang Wang, Zhicong Lu, and Yuxin Ma',
    venue: 'IEEE Transactions on Visualization and Computer Graphics, 2025',
    tags: ['Natural Language Processing', 'Human-AI Interaction', 'Visual Analytics', 'Journal'],
  },
  {
    year: '2025',
    title: 'Understanding How Visually Impaired Players Socialize in Mobile Games',
    authors: 'Zihe Ran, Xiyu Li, Qing Xiao, Yanyun Wang, Franklin Mingzhe Li, and Zhicong Lu',
    venue: 'Proceedings of the 27th International ACM SIGACCESS Conference on Computers and Accessibility, 2025',
    tags: ['Human-Computer Interaction', 'Accessibility', 'Games', 'ASSETS'],
  },
  {
    year: '2025',
    title: '“Here Comes the Makeup Tutorial You Asked For!”: Exploring Communication Strategies and Viewer Engagement in Beauty Videos on Rednote',
    authors: 'Xueer Lin, Chenyu Li, Yuhan Lyu, Zhicong Lu, and Zhenhui Peng',
    venue: 'Companion Publication of the 2025 Conference on Computer-Supported Cooperative Work and Social Computing, 2025',
    tags: ['Social Computing', 'Human-Computer Interaction', 'Online Video', 'CSCW'],
  },
  {
    year: '2025',
    title: 'Live, Learn, and Connect: Unpacking Live-Streaming-Based Silver Classroom in China',
    authors: 'Ethan Z. Rong, Jifan Shen, Zhicong Lu, and Yuling Sun',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (7), 1-29, 2025',
    tags: ['Social Computing', 'Human-Computer Interaction', 'Livestreaming', 'CSCW'],
  },
  {
    year: '2025',
    title: 'ThingMoji: User-Captured Cut-Outs For In-Stream Visual Communication',
    authors: 'Erzhen Hu, Qian Wan, Changkong Zhou, Md Aashikur Rahman Azim, PiaoHong Wang, Xingyi Hu, Yuhan Zeng, Zhicong Lu, and Seongkook Heo',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (7), 1-29, 2025',
    tags: ['Human-Computer Interaction', 'Social Computing', 'Visual Communication', 'CSCW'],
  },
  {
    year: '2025',
    title: 'Online Game Players on Peer-to-Peer Trading Platform: An Infrastructure Perspective',
    authors: 'PiaoHong Wang, Yao Lyu, and Zhicong Lu',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (7), 1-24, 2025',
    tags: ['Social Computing', 'Human-Computer Interaction', 'Games', 'CSCW'],
  },
  {
    year: '2025',
    title: 'SpeechCap: Leveraging Playful Impact Captions to Facilitate Interpersonal Communication in Social Virtual Reality',
    authors: 'Yu Zhang, Yi Wen, Siying Hu, and Zhicong Lu',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (7), 1-33, 2025',
    tags: ['Human-Computer Interaction', 'Human-AI Interaction', 'Social VR', 'CSCW'],
  },
  {
    year: '2025',
    title: 'Polymind: Parallel Visual Diagramming with Large Language Models to Support Prewriting Through Microtasks',
    authors: 'Qian Wan, Jiannan Li, Huanchen Wang, and Zhicong Lu',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (7), 1-29, 2025',
    tags: ['Human-AI Interaction', 'Natural Language Processing', 'Creativity Support', 'CSCW'],
  },
  {
    year: '2025',
    title: 'From digital art to crypto art: The evolution of art brought by NFT',
    authors: 'Maggie Yongqi Guan, Jiliang Li, Junjie Hu, Zhenqing Gu, Yuyi Wang, Zhicong Lu, and Kanye Ye Wang',
    venue: 'International Journal of Human-Computer Interaction 41 (12), 7384-7403, 2025',
    tags: ['Human-Computer Interaction', 'Social Computing', 'Digital Art', 'Journal'],
  },
  {
    year: '2025',
    title: 'The Configuration of Space: Probing the Way Social Interaction and Perception are Affected by Task-Specific Spatial Representations in Online Video Communication',
    authors: 'Yihuan Chen, Kexue Fu, Qianyi Chen, Zhicong Lu, and Ray LC',
    venue: 'International Conference on Human-Computer Interaction, 113-132, 2025',
    tags: ['Human-Computer Interaction', 'Social Computing', 'Video Communication', 'Other'],
  },
  {
    year: '2025',
    title: 'How Social Media Plays A Role in Stay-At-Home-Moms’ Transition: A Case Study in China',
    authors: 'Xinyi Zhang, Minzhu Zhao, Yaxing Yao, and Zhicong Lu',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (2), 1-18, 2025',
    tags: ['Social Computing', 'Human-Computer Interaction', 'Digital Care', 'CSCW'],
  },
  {
    year: '2025',
    title: 'Douyin as a Memorial Gathering for CoCo: Algorithmic Experiences of Online Collective Mourning',
    authors: 'Luoying Lin and Zhicong Lu',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (2), 1-22, 2025',
    tags: ['Social Computing', 'Human-Computer Interaction', 'Collective Mourning', 'CSCW'],
  },
  {
    year: '2025',
    title: 'Behind the Same Mask: Understanding the Practice of Spontaneous Collective Anonymity on Chinese Social Platforms',
    authors: 'Suqi Lou, Weijun Li, Chao Zhang, Shi Chen, Zhicong Lu, and Yaxing Yao',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (2), 1-31, 2025',
    tags: ['Social Computing', 'Human-Computer Interaction', 'Anonymity', 'CSCW'],
  },
  {
    year: '2025',
    title: 'DanModCap: Designing a Danmaku Moderation Tool for Video-Sharing Platforms that Leverages Impact Captions with Large Language Models',
    authors: 'Siying Hu, Huanchen Wang, Yu Zhang, Piaohong Wang, and Zhicong Lu',
    venue: 'Proceedings of the ACM on Human-Computer Interaction 9 (2), 1-27, 2025',
    tags: ['Human-AI Interaction', 'Natural Language Processing', 'Content Moderation', 'CSCW'],
  },
  {
    year: '2025',
    title: 'Bridging Gaps in HCI: Advancing Education, Research, and Careers in Asia',
    authors: 'Dilrukshi Gamage, Shiwei Cheng, Preeti Mudliar, Zhicong Lu, Shengdong Zhao, Nova Ahmed, Xiaojuan Ma, Uichin Lee, and Ding Wang',
    venue: 'Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems, 2025',
    tags: ['Human-Computer Interaction', 'HCI Education', 'CHI'],
  },
  {
    year: '2025',
    title: 'ProductMeta: An interactive System for metaphorical product design ideation with multimodal large Language models',
    authors: 'Qinyi Zhou, Jie Deng, Yu Liu, Yun Wang, Yan Xia, Yang Ou, Zhicong Lu, Sai Ma, Scarlett Li, and Yingqing Xu',
    venue: 'Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 2025',
    tags: ['Human-AI Interaction', 'Natural Language Processing', 'Design Ideation', 'CHI'],
  },
  {
    year: '2025',
    title: '“Douyin is My Nourishment of the Mind”: Exploring the Infrastructuralization Process of Short Video Sharing Platforms From Rural People’s Perspective',
    authors: 'Yuling Sun, Minglong Tang, Zhicong Lu, and Liang He',
    venue: 'Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 2025',
    tags: ['Social Computing', 'Human-Computer Interaction', 'Rural Platforms', 'CHI'],
  },
  {
    year: '2025',
    title: 'The Odyssey Journey: Top-Tier Medical Resource Seeking for Specialized Disorder in China',
    authors: 'Ka I Chan, Siying Hu, Yuntao Wang, Xuhai Xu, Zhicong Lu, and Yuanchun Shi',
    venue: 'Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 2025',
    tags: ['Human-Computer Interaction', 'Social Computing', 'Health Information', 'CHI'],
  },
  {
    year: '2025',
    title: '“Can’t believe I’m crying over an anime girl”: Public Parasocial Grieving and Coping Towards VTuber Graduation and Termination',
    authors: 'Ken Jen Lee, PiaoHong Wang, and Zhicong Lu',
    venue: 'Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 2025',
    tags: ['Social Computing', 'Human-Computer Interaction', 'VTubing', 'CHI'],
  },
  {
    year: '2025',
    title: 'RevTogether: Supporting Science Story Revision with Multiple AI Agents',
    authors: 'Yu Zhang, Kexue Fu, and Zhicong Lu',
    venue: 'Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems, 2025',
    tags: ['Human-AI Interaction', 'Natural Language Processing', 'Multi-Agent Systems', 'CHI'],
  },
  {
    year: '2025',
    title: 'How users who are blind or low vision play mobile games: Perceptions, challenges, and strategies',
    authors: 'Zihe Ran, Xiyu Li, Qing Xiao, Xianzhe Fan, Franklin Mingzhe Li, Yanyun Wang, and Zhicong Lu',
    venue: 'Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 2025',
    tags: ['Human-Computer Interaction', 'Accessibility', 'Games', 'CHI'],
  },
  {
    year: '2025',
    title: 'HarmonyCut: Supporting creative Chinese paper-cutting design with form and connotation harmony',
    authors: 'Huanchen Wang, Tianrun Qiu, Jiaping Li, Zhicong Lu, and Yuxin Ma',
    venue: 'Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 2025',
    tags: ['Human-AI Interaction', 'Human-Computer Interaction', 'Cultural Creativity', 'CHI'],
  },
  {
    year: '2025',
    title: 'Let’s Influence Algorithms Together: How Millions of Fans Build Collective Understanding of Algorithms and Organize Coordinated Algorithmic Actions',
    authors: 'Qing Xiao, Yuhang Zheng, Xianzhe Fan, Bingbing Zhang, and Zhicong Lu',
    venue: 'Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 2025',
    tags: ['Social Computing', 'Human-Computer Interaction', 'Algorithmic Action', 'CHI'],
  },
  {
    year: '2025',
    title: 'User-driven value alignment: Understanding users’ perceptions and strategies for addressing biased and discriminatory statements in AI companions',
    authors: 'Xianzhe Fan, Qing Xiao, Xuhui Zhou, Jiaxin Pei, Maarten Sap, Zhicong Lu, and Hong Shen',
    venue: 'Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 2025',
    tags: ['Human-AI Interaction', 'Natural Language Processing', 'AI Companions', 'CHI'],
  },
];

const VENUE_FILTERS = ['All', 'CHI', 'CSCW', 'ASSETS', 'ICWSM', 'Journal', 'Other'];

export default function ResearchPage() {
  const [activeArea, setActiveArea] = useState(0);
  const [venueFilter, setVenueFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = venueFilter === 'All' ? PUBLICATIONS : PUBLICATIONS.filter((pub) => pub.tags.includes(venueFilter));

  return (
    <div className="min-h-[100dvh]" style={{ background: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />

      <div className="pt-32 pb-16">
        <div className="container-main">
          <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Research</span>
          <h1 className="text-h1 mb-4">Research</h1>
          <p className="text-body-lg max-w-[720px]">
            2025-2026 published work by Zhicong Lu and collaborators, organized around human-AI interaction, social computing, HCI, and NLP-driven sensemaking.
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
                  {AREAS[activeArea].pubs.map((p) => (
                    <span key={p} className="text-[13px] font-medium px-3 py-1.5 rounded-full" style={{ background: 'rgba(45,106,79,0.08)', color: '#2D6A4F' }}>{p}</span>
                  ))}
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
            <div className="flex flex-wrap gap-2">
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

          <div className="space-y-4">
            {filtered.map((pub) => (
              <article key={`${pub.year}-${pub.title}`} className="p-6 rounded-2xl bg-white transition-all hover:-translate-y-0.5" style={{ border: '1px solid var(--border)' }}>
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
                  <div className="lg:w-[80px] shrink-0">
                    <span className="font-mono text-[13px]" style={{ color: 'var(--text-muted)' }}>{pub.year}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[18px] leading-snug mb-2">{pub.title}</h3>
                    <p className="text-[14px] mb-1" style={{ color: 'var(--text-secondary)' }}>{pub.authors}</p>
                    <p className="text-[14px] mb-4" style={{ color: 'var(--text-muted)' }}>{pub.venue}</p>
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="tag text-[11px]">{tag}</span>
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
