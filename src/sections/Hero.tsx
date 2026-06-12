import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Video parallax
    if (sectionRef.current && videoRef.current) {
      gsap.to(videoRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }

    // Text entrance
    const tl = gsap.timeline({ delay: 0.3 });
    if (labelRef.current) {
      tl.fromTo(labelRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0);
    }
    if (titleRef.current) {
      const lines = titleRef.current.querySelectorAll('.line');
      tl.fromTo(lines, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
      }, 0.15);
    }
    if (bodyRef.current) {
      tl.fromTo(bodyRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.6);
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[100dvh] min-h-[600px] overflow-hidden" id="hero">
      {/* Layer 0: Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ willChange: 'transform', zIndex: 0 }}
      >
        <source src="/images/hero-grok.mp4" type="video/mp4" />
      </video>

      {/* Layer 1: Gradient overlay for readability */}
      <div className="absolute inset-0" style={{ zIndex: 3, background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.6) 100%)' }} />

      {/* Layer 3: Bottom fade to page */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px]" style={{ zIndex: 3, background: 'linear-gradient(to top, var(--bg-primary), transparent)' }} />

      {/* Layer 4: Content */}
      <div className="absolute inset-0 flex items-end" style={{ zIndex: 6 }}>
        <div className="container-main pb-16 md:pb-24">
          <div className="max-w-[750px]">
            <span ref={labelRef} className="text-[13px] font-semibold tracking-widest uppercase block mb-5" style={{ opacity: 0, color: 'rgba(255,255,255,0.65)' }}>
              George Mason University
            </span>

            <h1
              ref={titleRef}
              className="mb-6"
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(40px, 6.5vw, 84px)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: '#fff',
              }}
            >
              <span className="line block" style={{ opacity: 0 }}>
                Where culture,
              </span>
              <span className="line block" style={{ opacity: 0 }}>
                community, and
              </span>
              <span className="line block" style={{ opacity: 0 }}>
                AI <u className="underline underline-offset-8 decoration-2" style={{ textDecorationColor: '#4ADE80' }}>meet</u>
              </span>
            </h1>

            <p ref={bodyRef} className="text-[17px] leading-relaxed max-w-[460px] mb-8" style={{ opacity: 0, color: 'rgba(255,255,255,0.7)' }}>
              Digital Experience and Embodied Research Lab studies how digital platforms and AI systems help people preserve culture, build community, and create meaning together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
