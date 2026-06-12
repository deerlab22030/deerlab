import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VENUES = ['CHI', 'CSCW', 'ACL', 'DIS', 'CHI PLAY', 'ICWSM'];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll('.anim');
    gsap.fromTo(els, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    });
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-pad relative">
      <div className="container-main relative z-10">
        <div className="max-w-[920px]">
          <span className="anim text-label block mb-6" style={{ color: '#2D6A4F' }}>About the Lab</span>
          <h2 className="anim font-serif mb-8" style={{ fontSize: 'clamp(34px, 5vw, 64px)', lineHeight: 1.08, fontWeight: 400 }}>
            We study how culture clicks into place through technology.
          </h2>
          <div className="max-w-[760px]">
            <p className="anim text-[20px] md:text-[23px] leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              Directed by Zhicong Lu at George Mason University, DEER Lab examines how digital platforms and AI systems shape community, cultural participation, close relationships, and creative expression.
            </p>
            <p className="anim text-[17px] md:text-[18px] leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              Our research is grounded in human-computer interaction and social computing. We study settings where people use technology to preserve intangible cultural heritage, learn from one another through livestreaming, deepen communication with loved ones, and build meaning in online communities.
            </p>
            <p className="anim text-[17px] md:text-[18px] leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
              As generative AI enters social media, creative tools, and multi-agent systems, we ask how to design ecosystems where humans and AI agents can coexist critically, responsibly, and in ways that expand access rather than flatten human experience.
            </p>
          </div>
          <div className="anim flex flex-wrap gap-2">
            {VENUES.map((v) => (
              <span key={v} className="tag">{v}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
