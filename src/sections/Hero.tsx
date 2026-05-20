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
  const ctaRef = useRef<HTMLDivElement>(null);

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
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.8);
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
        poster="/images/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ willChange: 'transform', zIndex: 0 }}
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
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
                Research on <em>human</em>
              </span>
              <span className="line block" style={{ opacity: 0 }}>
                connection and
              </span>
              <span className="line block" style={{ opacity: 0 }}>
                digital <u className="underline underline-offset-8 decoration-2" style={{ textDecorationColor: '#4ADE80' }}>empowerment</u>
              </span>
            </h1>

            <p ref={bodyRef} className="text-[17px] leading-relaxed max-w-[460px] mb-8" style={{ opacity: 0, color: 'rgba(255,255,255,0.7)' }}>
              DEER Lab explores how technology brings people closer — from livestreaming communities to AI-powered creativity.
            </p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-5" style={{ opacity: 0 }}>
              <button
                onClick={() => document.querySelector('#research')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[14px] font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                style={{ background: '#fff', color: '#1A1A1A' }}
              >
                Explore Research
              </button>
              <a
                href="mailto:zhicong.lu@gmu.edu"
                className="text-[14px] font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                Collaborate with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
