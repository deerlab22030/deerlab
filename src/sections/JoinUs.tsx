import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function JoinUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const els = sectionRef.current.querySelectorAll('.j-anim');
    gsap.fromTo(els, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    });
  }, []);

  return (
    <section ref={sectionRef} id="join" className="section-pad relative" style={{ background: 'var(--bg-cream)' }}>
      <div className="container-main">
        <div className="max-w-[680px] mx-auto text-center">
          <span className="j-anim text-label block mb-6">Join Us</span>
          <h2 className="j-anim text-h2 mb-8">
            Shape the <em className="font-serif">future</em> with us
          </h2>
          <p className="j-anim text-body-lg mb-6">
            We are always looking for passionate PhD, master's, and undergraduate researchers excited about inventing the future of human-computer interaction. Our students come from diverse backgrounds but share a commitment to rigorous research and real-world impact.
          </p>
          <p className="j-anim text-body mb-10">
            Interested? Send your CV, research interests, and experience to{' '}
            <a href="mailto:zhicong.lu@gmu.edu" className="underline underline-offset-4" style={{ color: 'var(--accent-green)' }}>zhicong.lu@gmu.edu</a>
          </p>
          <div className="j-anim flex flex-wrap justify-center gap-3">
            <a href="mailto:zhicong.lu@gmu.edu" className="text-[14px] font-medium px-6 py-3 rounded-full transition-all hover:opacity-80" style={{ background: 'var(--bg-dark)', color: '#fff' }}>
              Get in Touch
            </a>
            <button
              onClick={() => document.querySelector('#people')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[14px] font-medium px-6 py-3 rounded-full transition-all hover:opacity-80"
              style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-dark)' }}
            >
              Meet the Team
            </button>
          </div>
        </div>

        {/* Image row */}
        <div className="j-anim grid grid-cols-2 md:grid-cols-4 gap-3 mt-20">
          {[
            { src: '/images/conference.jpg', alt: 'Conference presentation' },
            { src: '/images/userstudy.jpg', alt: 'User study' },
            { src: '/images/workshop.jpg', alt: 'Community workshop' },
            { src: '/images/labgroup.jpg', alt: 'Lab group' },
          ].map((img) => (
            <div key={img.src} className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: '1px solid var(--border)' }}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
