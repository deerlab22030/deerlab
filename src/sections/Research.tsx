import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AREAS = [
  {
    num: '01',
    title: 'Social Computing & Online Communities',
    desc: 'How people build and maintain relationships through livestreaming, social media, and virtual spaces.',
    pubs: 'CSCW 2025, CHI 2024',
  },
  {
    num: '02',
    title: 'AI-Mediated Creativity',
    desc: 'Systems leveraging LLMs and generative AI to support human creativity, writing, and visual communication.',
    pubs: 'CSCW 2025, CSCW 2024',
  },
  {
    num: '03',
    title: 'Accessible Gaming & Play',
    desc: 'How people with disabilities experience games, designing inclusive playful technologies.',
    pubs: 'ASSETS 2025, CHI 2025',
  },
  {
    num: '04',
    title: 'Digital Inclusion & Aging',
    desc: 'How underrepresented communities and older adults engage with technology.',
    pubs: 'CSCW 2025, ChineseCHI 2024',
  },
];

export default function Research() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const items = sectionRef.current.querySelectorAll('.r-item');
    gsap.fromTo(items, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
    });
  }, []);

  return (
    <section ref={sectionRef} id="research" className="section-pad relative" style={{ background: 'var(--bg-cream)' }}>
      <div className="container-main">
        <div className="max-w-[700px] mb-16">
          <span className="r-item text-label block mb-4">Research</span>
          <h2 className="r-item text-h2">What we explore</h2>
        </div>

        <div>
          {AREAS.map((area) => (
            <div
              key={area.num}
              className="r-item group py-8 md:py-10 cursor-default"
              style={{ borderTop: '1px solid var(--border-dark)' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                <span className="md:col-span-1 text-[13px] font-medium" style={{ color: 'var(--text-muted)' }}>{area.num}</span>
                <div className="md:col-span-6">
                  <h3 className="text-h4 group-hover:underline underline-offset-4 decoration-1 transition-all duration-300" style={{ textDecorationColor: 'var(--accent-green)' }}>
                    {area.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{area.desc}</p>
                </div>
                <div className="md:col-span-1 text-right hidden md:block">
                  <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>{area.pubs}</span>
                </div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border-dark)' }} />
        </div>
      </div>
    </section>
  );
}
