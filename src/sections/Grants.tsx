import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GRANTS = [
  { year: '2024', funder: 'NSF', title: 'CAREER: Empowering Older Adults Through Livestreaming Communities', amount: '$550,000' },
  { year: '2023', funder: 'NSF', title: 'Collaborative Research: Understanding Human-AI Co-creativity', amount: '$380,000' },
  { year: '2023', funder: 'Google', title: 'Accessible Gaming for Blind and Low Vision Players', amount: '$150,000' },
  { year: '2022', funder: 'Adobe Research', title: 'Creativity Support Tools for Visual Communication', amount: '$65,000' },
  { year: '2021', funder: 'GMU', title: 'Digital Engagement in Aging Communities', amount: '$25,000' },
];

const AWARDS = [
  { name: 'CHI 2024', award: 'Best Paper Honorable Mention' },
  { name: 'CSCW 2024', award: 'DEI Recognition Award' },
  { name: 'CHI PLAY 2023', award: 'Best Paper Award' },
];

export default function Grants() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const rows = sectionRef.current.querySelectorAll('.g-row');
    gsap.fromTo(rows, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    });
  }, []);

  return (
    <section ref={sectionRef} id="grants" className="section-pad relative" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <span className="g-row text-label block mb-4">Grants</span>
            <h2 className="g-row text-h2 mb-10">Funding</h2>

            <div>
              {GRANTS.map((g) => (
                <div
                  key={g.title}
                  className="g-row group py-6 md:py-7 flex flex-col md:flex-row md:items-start gap-2 md:gap-8"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <span className="text-[13px] font-mono shrink-0 w-12" style={{ color: 'var(--text-muted)' }}>{g.year}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] mb-1" style={{ color: 'var(--text-secondary)' }}>{g.funder}</p>
                    <p className="font-medium text-[16px]">{g.title}</p>
                  </div>
                  <span className="text-[14px] font-mono shrink-0" style={{ color: 'var(--accent-green)' }}>{g.amount}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--border)' }} />
            </div>
          </div>

          <div className="lg:col-span-4">
            <span className="g-row text-label block mb-6">Recognition</span>
            <div className="space-y-3">
              {AWARDS.map((a) => (
                <div
                  key={a.name}
                  className="g-row p-5 rounded-2xl"
                  style={{ background: 'var(--bg-white)', border: '1px solid var(--border)' }}
                >
                  <p className="font-semibold text-[16px] mb-1">{a.name}</p>
                  <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>{a.award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
