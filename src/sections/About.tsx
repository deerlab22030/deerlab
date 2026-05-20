import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHTS = [
  { num: '50+', label: 'Publications', detail: 'CHI, CSCW, CHI PLAY, DIS' },
  { num: '$1.2M+', label: 'Grants', detail: 'NSF, Google, Adobe' },
  { num: '12', label: 'PhD Students', detail: 'GMU & CityU HK' },
  { num: '4', label: 'Research Pillars', detail: 'HCI, AI, Gaming, Inclusion' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll('.anim');
    gsap.fromTo(els, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    });

    if (imgRef.current) {
      gsap.to(imgRef.current, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-pad relative">
      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left - Statement */}
          <div className="lg:col-span-7">
            <span className="anim text-label block mb-6" style={{ color: '#2D6A4F' }}>About the Lab</span>
            <h2 className="anim text-h2 mb-8">
              We believe technology should <em className="font-serif">empower</em> everyone
            </h2>
            <p className="anim text-body-lg mb-6">
              Directed by Zhicong Lu at George Mason University, DEER Lab investigates how digital technologies shape human connection, creative expression, and social participation.
            </p>
            <p className="anim text-body mb-10">
              Our work spans human-computer interaction, computer-supported cooperative work, and social computing. From older adults discovering community through livestreaming, to creators navigating AI-mediated creativity, to gamers building inclusive communities across cultural boundaries.
            </p>
            <div className="anim flex flex-wrap gap-2">
              {['CHI', 'CSCW', 'CHI PLAY', 'DIS', 'ASSETS'].map((v) => (
                <span key={v} className="tag">{v}</span>
              ))}
            </div>
          </div>

          {/* Right - Image + Stats */}
          <div className="lg:col-span-5">
            <div className="anim rounded-2xl overflow-hidden mb-8" style={{ border: '1px solid var(--border)' }}>
              <div ref={imgRef} style={{ willChange: 'transform' }}>
                <img
                  src="/images/workspace.jpg"
                  alt="DEER Lab research workspace"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="anim grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="py-3" style={{ borderTop: '1px solid var(--border-dark)' }}>
                  <p className="font-serif text-[26px] leading-tight mb-1" style={{ color: '#2D6A4F' }}>{h.num}</p>
                  <p className="text-[14px] font-semibold">{h.label}</p>
                  <p className="text-[13px]" style={{ color: 'var(--text-muted)' }}>{h.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
