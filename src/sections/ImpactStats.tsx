import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 50, suffix: '+', label: 'Publications', sub: 'CHI, CSCW, CHI PLAY, DIS & more' },
  { value: 10, suffix: '+', label: 'Research Grants', sub: 'NSF, Google, Adobe' },
  { value: 12, suffix: '', label: 'PhD Students', sub: 'GMU & City University of HK' },
  { value: 4, suffix: '', label: 'Research Areas', sub: 'HCI, AI, Gaming, Inclusion' },
];

export default function ImpactStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    numberRefs.current.forEach((el, i) => {
      if (!el) return;
      const end = STATS[i].value;
      const obj = { val: 0 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      tl.to(obj, {
        val: end,
        duration: 2,
        delay: i * 0.15,
        ease: 'power2.out',
        onUpdate: () => {
          if (el) el.textContent = Math.round(obj.val).toString();
        },
      });

      if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 -mt-20 mb-0">
      <div className="container-main">
        <div
          className="rounded-3xl p-10 md:p-14"
          style={{
            background: 'linear-gradient(135deg, rgba(45, 106, 79, 0.2), rgba(20, 20, 20, 0.95))',
            border: '1px solid rgba(74, 222, 128, 0.1)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="stat-number mb-2">
                  <span ref={(el) => { numberRefs.current[i] = el; }}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-[15px] font-semibold mb-1">{stat.label}</p>
                <p className="text-caption">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
