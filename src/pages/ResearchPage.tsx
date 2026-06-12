import { useEffect, useState } from 'react';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

const AREAS = [
  {
    title: 'Culture, Platforms & Community',
    desc: 'How people use digital platforms to preserve cultural practices, learn from one another, and sustain community across distance.',
    projects: ['Intangible cultural heritage', 'Livestreaming communities', 'Online learning cultures', 'Community knowledge sharing'],
    pubs: ['CSCW 2025', 'CHI 2024', 'CSCW 2024'],
    image: '/images/pub4.jpg',
  },
  {
    title: 'Human-AI Social Ecosystems',
    desc: 'Designing and evaluating systems where generative AI supports communication, reflection, and creativity without flattening human meaning.',
    projects: ['AI-mediated relationships', 'LLM-assisted prewriting', 'Multi-agent social systems', 'Human-AI co-creativity'],
    pubs: ['CSCW 2025', 'CSCW 2024', 'DIS 2024'],
    image: '/images/pub5.jpg',
  },
  {
    title: 'Embodied and Playful Experience',
    desc: 'How people experience presence, play, identity, and accessibility across games, social VR, and embodied digital environments.',
    projects: ['Accessible gaming', 'Social VR communication', 'Playful captions', 'Inclusive experience design'],
    pubs: ['ASSETS 2025', 'CHI PLAY 2023'],
    image: '/images/userstudy.jpg',
  },
  {
    title: 'Digital Access, Aging & Care',
    desc: 'How older adults and underrepresented communities engage with technology for learning, connection, care, and self-expression.',
    projects: ['Silver classrooms', 'Technology adoption in aging', 'Intergenerational computing', 'Community technology programs'],
    pubs: ['CSCW 2025', 'ChineseCHI 2024'],
    image: '/images/workshop.jpg',
  },
];

const PUBLICATIONS = [
  { title: 'Polymind', full: 'Parallel Visual Diagramming with LLMs to Support Prewriting Through Microtasks', venue: 'CSCW 2025', image: '/images/pub1.jpg' },
  { title: 'SpeechCap', full: 'Leveraging Playful Impact Captions to Facilitate Interpersonal Communication in Social VR', venue: 'CSCW 2025', image: '/images/pub2.jpg' },
  { title: 'ThingMoji', full: 'User-Captured Cut-Outs For In-Stream Visual Communication', venue: 'CSCW 2025', image: '/images/pub3.jpg' },
  { title: 'Live, Learn, and Connect', full: 'Unpacking Live-Streaming-Based Silver Classroom in China', venue: 'CSCW 2025', image: '/images/pub4.jpg' },
  { title: '"It Felt Like Having a Second Mind"', full: 'Investigating Human-AI Co-creativity in Prewriting with LLMs', venue: 'CSCW 2024', image: '/images/pub5.jpg' },
  { title: 'Investigating VTubing', full: 'VTubing as a Reconstruction of Streamer Self-Presentation', venue: 'CSCW 2024', image: '/images/pub6.jpg' },
];

const FILTERS = ['All', 'CSCW 2025', 'CSCW 2024', 'CHI 2024'];

export default function ResearchPage() {
  const [filter, setFilter] = useState('All');
  const [activeArea, setActiveArea] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = filter === 'All' ? PUBLICATIONS : PUBLICATIONS.filter((p) => p.venue.includes(filter));

  return (
    <div className="min-h-[100dvh]" style={{ background: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />

      {/* Header */}
      <div className="pt-32 pb-16">
        <div className="container-main">
          <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Research</span>
          <h1 className="text-h1 mb-4">What we explore</h1>
          <p className="text-body-lg max-w-[600px]">
            Four interconnected directions for studying how digital platforms and AI systems shape culture, community, embodiment, and access.
          </p>
        </div>
      </div>

      {/* Research Areas */}
      <section className="pb-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Area list */}
            <div className="lg:col-span-5">
              {AREAS.map((area, i) => (
                <button
                  key={area.title}
                  onClick={() => setActiveArea(i)}
                  className="w-full text-left py-5 transition-all"
                  style={{
                    borderTop: i === 0 ? '1px solid var(--border-dark)' : '1px solid var(--border)',
                  }}
                >
                  <span className="text-[13px] mb-1 block" style={{ color: 'var(--text-muted)' }}>0{i + 1}</span>
                  <h3
                    className="text-h4 transition-all"
                    style={{ color: activeArea === i ? 'var(--text-primary)' : 'var(--text-muted)' }}
                  >
                    {area.title}
                  </h3>
                </button>
              ))}
              <div style={{ borderTop: '1px solid var(--border)' }} />
            </div>

            {/* Right: Active area detail */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden mb-8" style={{ border: '1px solid var(--border)' }}>
                <img src={AREAS[activeArea].image} alt={AREAS[activeArea].title} className="w-full h-[280px] object-cover" />
              </div>
              <h2 className="font-serif text-[28px] mb-4">{AREAS[activeArea].title}</h2>
              <p className="text-body-lg mb-6">{AREAS[activeArea].desc}</p>

              <div className="mb-6">
                <h4 className="text-label mb-3">Active Projects</h4>
                <div className="flex flex-wrap gap-2">
                  {AREAS[activeArea].projects.map((p) => (
                    <span key={p} className="tag">{p}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-label mb-3">Recent Publications</h4>
                <div className="flex gap-2">
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

      {/* Publications */}
      <section className="py-20">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Publications</span>
              <h2 className="text-h3">Selected papers</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="text-[13px] font-medium px-4 py-2 rounded-full transition-all"
                  style={{
                    background: filter === f ? 'var(--bg-dark)' : 'transparent',
                    color: filter === f ? '#fff' : 'var(--text-secondary)',
                    border: filter === f ? 'none' : '1px solid var(--border)',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filtered.map((pub, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row gap-6 p-5 rounded-2xl bg-white transition-all hover:-translate-y-0.5" style={{ border: '1px solid var(--border)' }}>
                <div className="w-full md:w-[160px] shrink-0 rounded-xl overflow-hidden">
                  <img src={pub.image} alt={pub.title} className="w-full h-full object-cover aspect-[4/3]" loading="lazy" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="tag text-[11px]">{pub.venue}</span>
                  </div>
                  <h3 className="font-semibold text-[17px] leading-snug mb-1 group-hover:underline underline-offset-4 decoration-1">{pub.title}</h3>
                  <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>{pub.full}</p>
                  <div className="flex gap-4 mt-3">
                    <button className="text-[13px] font-medium hover:underline underline-offset-4" style={{ color: '#2D6A4F' }}>PDF</button>
                    <button className="text-[13px] font-medium hover:underline underline-offset-4" style={{ color: '#2D6A4F' }}>DOI</button>
                    <button className="text-[13px] font-medium hover:underline underline-offset-4" style={{ color: '#2D6A4F' }}>BibTeX</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
