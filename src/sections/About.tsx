import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VENUES = ['Human-Computer Interaction', 'Human-AI Interaction', 'Social Computing', 'Natural Language Processing'];

const ABOUT_IMAGES = [
  { src: '/images/about-livestream.png', alt: 'Livestreaming cultural practices', position: 'center' },
  { src: '/images/about-human-ai.png', alt: 'Human-AI interaction storyboard', position: 'center' },
  { src: '/images/about-agent-community.png', alt: 'AI agent community simulation', position: 'center' },
];

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="anim text-label block mb-5" style={{ color: '#2D6A4F' }}>About the Lab</span>
            <h2 className="anim font-serif mb-7" style={{ fontSize: 'clamp(30px, 4vw, 52px)', lineHeight: 1.12, fontWeight: 400 }}>
              We study how culture clicks into place through technology.
            </h2>
            <div className="max-w-[690px]">
              <p className="anim text-[18px] md:text-[20px] leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                Directed by Zhicong Lu at George Mason University, DEER Lab examines how digital platforms and AI systems shape community, cultural participation, close relationships, and creative expression.
              </p>
              <p className="anim text-[16px] md:text-[17px] leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                Our research is grounded in human-computer interaction and social computing. We study settings where people use technology to preserve intangible cultural heritage, learn from one another through livestreaming, deepen communication with loved ones, and build meaning in online communities.
              </p>
              <p className="anim text-[16px] md:text-[17px] leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                As generative AI enters social media, creative tools, and multi-agent systems, we ask how to design ecosystems where humans and AI agents can coexist critically, responsibly, and in ways that expand access rather than flatten human experience.
              </p>
            </div>
            <div className="anim flex flex-wrap gap-2">
              {VENUES.map((v) => (
                <span key={v} className="tag">{v}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="anim grid grid-cols-1 gap-4">
              {ABOUT_IMAGES.map((image) => (
                <div key={image.src} className="overflow-hidden rounded-2xl bg-white" style={{ border: '1px solid var(--border)' }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[150px] md:h-[170px] lg:h-[156px] object-cover"
                    style={{ objectPosition: image.position }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
