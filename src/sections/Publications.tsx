import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PUBS = [
  { title: 'Polymind', desc: 'Parallel Visual Diagramming with LLMs for Prewriting', venue: 'CSCW 2025', image: '/images/pub1.jpg' },
  { title: 'SpeechCap', desc: 'Playful Impact Captions for Social VR Communication', venue: 'CSCW 2025', image: '/images/pub2.jpg' },
  { title: 'ThingMoji', desc: 'User-Captured Cut-Outs for In-Stream Visual Communication', venue: 'CSCW 2025', image: '/images/pub3.jpg' },
  { title: 'Live, Learn, Connect', desc: 'Unpacking Live-Streaming-Based Silver Classroom in China', venue: 'CSCW 2025', image: '/images/pub4.jpg' },
  { title: 'Human-AI Co-creativity', desc: '"It Felt Like Having a Second Mind" in Prewriting with LLMs', venue: 'CSCW 2024', image: '/images/pub5.jpg' },
  { title: 'VTubing Identity', desc: 'Investigating VTubing as Reconstruction of Streamer Self-Presentation', venue: 'CSCW 2024', image: '/images/pub6.jpg' },
];

export default function Publications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredImgRef = useRef<HTMLImageElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Text + card animations
    const els = sectionRef.current.querySelectorAll('.p-anim');
    gsap.fromTo(els, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
    });

    // Featured image parallax
    if (featuredImgRef.current) {
      gsap.to(featuredImgRef.current, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }

    // Card hover scale
    const cards = sectionRef.current.querySelectorAll('.pub-card');
    cards.forEach((card) => {
      const img = card.querySelector('img');
      if (!img) return;
      card.addEventListener('mouseenter', () => gsap.to(img, { scale: 1.03, duration: 0.6, ease: 'power2.out' }));
      card.addEventListener('mouseleave', () => gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' }));
    });
  }, []);

  return (
    <section ref={sectionRef} id="publications" className="section-pad relative" style={{ background: '#F5F3EE' }}>
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="p-anim text-label block mb-4" style={{ color: '#2D6A4F' }}>Publications</span>
            <h2 className="p-anim text-h2">Recent work</h2>
          </div>
          <span className="p-anim text-[13px] font-mono" style={{ color: 'var(--text-muted)' }}>
            {String(active + 1).padStart(2, '0')} / {String(PUBS.length).padStart(2, '0')}
          </span>
        </div>

        {/* Featured large - with parallax image */}
        <div className="p-anim mb-4">
          <div
            className="relative aspect-[16/7] md:aspect-[16/6] cursor-pointer group overflow-hidden rounded-3xl"
            style={{ border: '1px solid var(--border)' }}
            onMouseEnter={() => setActive(0)}
          >
            <img
              ref={featuredImgRef}
              src={PUBS[0].image}
              alt={PUBS[0].title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ willChange: 'transform' }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 45%, transparent 75%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="tag text-xs mb-3 inline-block">{PUBS[0].venue}</span>
              <h3 className="font-serif text-[28px] md:text-[44px] text-white mb-2 leading-tight">{PUBS[0].title}</h3>
              <p className="text-[15px] text-white/60 max-w-[500px]">{PUBS[0].desc}</p>
            </div>
          </div>
        </div>

        {/* Grid row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-anim pub-card cursor-pointer group rounded-3xl overflow-hidden bg-white"
              style={{ border: '1px solid var(--border)' }}
              onMouseEnter={() => setActive(i)}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={PUBS[i].image} alt={PUBS[i].title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="tag text-[11px] mb-2 inline-block">{PUBS[i].venue}</span>
                <h4 className="font-semibold text-[16px] leading-snug mb-1">{PUBS[i].title}</h4>
                <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>{PUBS[i].desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Last row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[4, 5].map((i) => (
            <div
              key={i}
              className="p-anim pub-card cursor-pointer group rounded-3xl overflow-hidden bg-white"
              style={{ border: '1px solid var(--border)' }}
              onMouseEnter={() => setActive(i)}
            >
              <div className="flex">
                <div className="w-[140px] md:w-[180px] shrink-0 overflow-hidden">
                  <img src={PUBS[i].image} alt={PUBS[i].title} className="w-full h-full object-cover aspect-square" loading="lazy" />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <span className="tag text-[11px] mb-2 inline-block">{PUBS[i].venue}</span>
                  <h4 className="font-semibold text-[16px] leading-snug mb-1">{PUBS[i].title}</h4>
                  <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>{PUBS[i].desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
