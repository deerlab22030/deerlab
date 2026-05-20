import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GMU = [
  { name: 'Junjie Ma', focus: 'Social computing, online communities' },
  { name: 'Haichang Li', focus: 'AI-mediated communication', link: 'https://haichang.li' },
  { name: 'Shiwei Hong', focus: 'Livestreaming and digital labor' },
  { name: 'Weisen Zhao', focus: 'Accessible gaming' },
  { name: 'Dhiman Goswami', focus: 'Digital inclusion' },
];

const CITYU = [
  { name: 'Piaohong Wang', focus: 'VTubing, streamer identity', link: 'https://sites.google.com/view/wamgpiaohong/homepage' },
  { name: 'Huanchen Wang', focus: 'Human-AI co-creativity', link: 'https://wanghchen.github.io/' },
  { name: 'Luoying Lin', focus: 'Digital aging', link: 'https://luoying0.com' },
  { name: 'Zhiyang Wu', focus: 'Social VR' },
  { name: 'Jian Ma', focus: 'Online platforms' },
  { name: 'Zhaoning Li', focus: 'Creative tools' },
  { name: 'Run Yang', focus: 'Accessible technology' },
];

const ALUMNI = [
  { name: 'Siying Hu', now: 'Industry' },
  { name: 'Yu Zhang', now: 'Academia' },
  { name: 'Qian Wan', now: 'Research Lab', link: 'https://llewynwan.github.io/' },
];

export default function People() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const els = sectionRef.current.querySelectorAll('.p-item');
    gsap.fromTo(els, { opacity: 0, y: 24 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    });
  }, []);

  return (
    <section ref={sectionRef} id="people" className="section-pad relative" style={{ background: 'var(--bg-cream)' }}>
      <div className="container-main">
        {/* Director */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-4">
            <div className="p-item sticky top-24 rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
              <img src="/images/portrait.jpg" alt="Zhicong Lu" className="w-full h-auto object-cover aspect-[3/4]" loading="lazy" />
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center">
            <span className="p-item text-label block mb-4">Director</span>
            <h2 className="p-item text-h2 mb-3">Zhicong Lu</h2>
            <p className="p-item text-[17px] mb-6" style={{ color: 'var(--text-secondary)' }}>
              Assistant Professor, Computer Science
            </p>
            <p className="p-item text-body-lg mb-4">
              Research at the intersection of human-computer interaction and social computing, focusing on digital communication and creative expression. Recognized at CHI and CSCW, featured in the BBC and MIT Technology Review.
            </p>
            <p className="p-item text-body mb-8">
              Previously a postdoctoral researcher at the University of Toronto. PhD from City University of Hong Kong.
            </p>
            <div className="p-item flex gap-3">
              <a href="https://luzhc.github.io" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium px-5 py-2 rounded-full transition-all hover:opacity-80" style={{ background: 'var(--bg-dark)', color: '#fff' }}>
                Website
              </a>
              <a href="mailto:zhicong.lu@gmu.edu" className="text-[14px] font-medium px-5 py-2 rounded-full transition-all hover:opacity-80" style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-dark)' }}>
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="divider mb-16" />

        {/* PhD Students */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="p-item text-h4 mb-8">George Mason University</h3>
            {GMU.map((s) => (
              <div key={s.name} className="p-item py-4 flex items-start justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
                <div>
                  {s.link ? (
                    <a href={s.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline underline-offset-4">{s.name}</a>
                  ) : (
                    <span className="font-semibold">{s.name}</span>
                  )}
                  <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{s.focus}</p>
                </div>
                {s.link && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>}
              </div>
            ))}
          </div>
          <div>
            <h3 className="p-item text-h4 mb-8">City University of Hong Kong</h3>
            {CITYU.map((s) => (
              <div key={s.name} className="p-item py-4 flex items-start justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
                <div>
                  {s.link ? (
                    <a href={s.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline underline-offset-4">{s.name}</a>
                  ) : (
                    <span className="font-semibold">{s.name}</span>
                  )}
                  <p className="text-[14px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{s.focus}</p>
                </div>
                {s.link && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>}
              </div>
            ))}
          </div>
        </div>

        {/* Alumni */}
        <div>
          <h3 className="p-item text-h4 mb-6">Alumni PhDs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {ALUMNI.map((a) => (
              <div key={a.name} className="p-item p-5 rounded-2xl" style={{ background: 'var(--bg-white)', border: '1px solid var(--border)' }}>
                {a.link ? (
                  <a href={a.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">{a.name}</a>
                ) : (
                  <p className="font-semibold">{a.name}</p>
                )}
                <p className="text-[13px] mt-1" style={{ color: 'var(--text-muted)' }}>Now at {a.now}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
