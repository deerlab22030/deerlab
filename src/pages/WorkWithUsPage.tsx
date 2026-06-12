import { useEffect } from 'react';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

const OPPORTUNITIES = [
  {
    title: 'Prospective Students',
    body: 'We welcome students interested in HCI, social computing, human-AI interaction, NLP, cultural technologies, and embodied digital experience.',
  },
  {
    title: 'Collaborators',
    body: 'We work with researchers, designers, community partners, and practitioners studying how digital platforms and AI systems shape cultural participation and social connection.',
  },
  {
    title: 'Project Directions',
    body: 'Current directions include livestreaming communities, AI-mediated communication, social agent ecosystems, accessible play, and tools for preserving cultural knowledge.',
  },
];

export default function WorkWithUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[100dvh]" style={{ background: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />

      <div className="pt-32 pb-16">
        <div className="container-main">
          <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Work with us</span>
          <h1 className="text-h1 mb-5">Build culture-centered technology with DEER Lab</h1>
          <p className="text-body-lg max-w-[720px]">
            We are looking for people who care about rigorous research, real communities, and technology that expands how people connect, create, learn, and belong.
          </p>
        </div>
      </div>

      <section className="pb-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div style={{ borderTop: '1px solid var(--border-dark)' }}>
                {OPPORTUNITIES.map((item) => (
                  <article key={item.title} className="py-7" style={{ borderBottom: '1px solid var(--border)' }}>
                    <h2 className="text-h4 mb-3">{item.title}</h2>
                    <p className="text-body">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="p-7 rounded-2xl bg-white" style={{ border: '1px solid var(--border)' }}>
                <h2 className="font-serif text-[28px] leading-tight mb-4">Get in touch</h2>
                <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Send a short note about your background, research interests, and what kind of collaboration you are imagining.
                </p>
                <a href="mailto:deerlab22030@gmail.com" className="inline-flex text-[14px] font-medium px-5 py-2.5 rounded-full text-white" style={{ background: 'var(--bg-dark)' }}>
                  deerlab22030@gmail.com
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
