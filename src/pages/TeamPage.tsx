import { useEffect, useState } from 'react';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

const DIRECTOR = {
  name: 'Zhicong Lu',
  title: 'Assistant Professor',
  dept: 'Computer Science, George Mason University',
  email: 'zhicong.lu@gmu.edu',
  website: 'https://luzhc.github.io',
  scholar: 'https://scholar.google.com/citations?user=7tUEh2gAAAAJ',
  photo: '/images/portrait.jpg',
  bio: "Zhicong Lu's research sits at the intersection of human-computer interaction and social computing, with a focus on understanding and designing for emerging forms of digital communication and creative expression. His work has been recognized with awards at CHI and CSCW, and has been covered by media outlets including the BBC and MIT Technology Review. He was a postdoctoral researcher at the University of Toronto and received his PhD from City University of Hong Kong.",
  interests: ['Social Computing', 'HCI', 'Livestreaming', 'AI-Mediated Creativity', 'Accessible Gaming'],
};

const GMU = [
  { name: 'Junjie Ma', focus: 'Social computing, online communities', project: 'Livestreamer-fan relationship dynamics on Bilibili', email: 'jma23@gmu.edu' },
  { name: 'Haichang Li', focus: 'AI-mediated communication', project: 'Polymind: LLM-assisted visual diagramming for prewriting', email: 'hli22@gmu.edu', link: 'https://haichang.li' },
  { name: 'Shiwei Hong', focus: 'Livestreaming and digital labor', project: 'Digital labor practices among Chinese livestreamers', email: 'shong3@gmu.edu' },
  { name: 'Weisen Zhao', focus: 'Accessible gaming', project: 'Accessible game design for blind and low-vision players', email: 'wzhao22@gmu.edu' },
  { name: 'Dhiman Goswami', focus: 'Digital inclusion', project: 'Privacy and security for older adults in digital spaces (co-advised with Sanchari Das)', email: 'dgoswami@gmu.edu' },
];

const CITYU = [
  { name: 'Piaohong Wang', focus: 'VTubing, streamer identity', project: 'VTubing as reconstruction of streamer self-presentation (co-advised with Jiawei Ma)', email: 'pwang@cityu.edu.hk', link: 'https://sites.google.com/view/wamgpiaohong/homepage' },
  { name: 'Huanchen Wang', focus: 'Human-AI co-creativity', project: 'Human-AI co-creativity in prewriting with LLMs (co-advised with Yuxin Ma)', email: 'hwang@cityu.edu.hk', link: 'https://wanghchen.github.io/' },
  { name: 'Luoying Lin', focus: 'Digital aging', project: 'Older adults\' engagement with livestreaming education (co-advised with Shengdong Zhao)', email: 'llin@cityu.edu.hk', link: 'https://luoying0.com' },
  { name: 'Zhiyang Wu', focus: 'Social VR', project: 'Impact captions for interpersonal communication in social VR (co-advised with Chen Liu)', email: 'zywu@cityu.edu.hk' },
  { name: 'Jian Ma', focus: 'Online platforms', project: 'Platform governance and user behavior (co-advised with Kede Ma)', email: 'jma@cityu.edu.hk' },
  { name: 'Zhaoning Li', focus: 'Creative tools', project: 'Creativity support tools for visual communication (co-advised with Chen Ma)', email: 'zli@cityu.edu.hk' },
  { name: 'Run Yang', focus: 'Accessible technology', project: 'Inclusive design for emerging technologies (co-advised with Yuhan Luo)', email: 'ryang@cityu.edu.hk' },
];

const ALUMNI = [
  { name: 'Siying Hu', now: 'Industry' },
  { name: 'Yu Zhang', now: 'Academia' },
  { name: 'Qian Wan', now: 'Research Lab', link: 'https://llewynwan.github.io/' },
];

const VISITORS = [
  { name: 'Ryan Yen', detail: 'UWaterloo MSc, MIT PhD' },
  { name: 'Felicia Li Feng', detail: 'UWaterloo PhD' },
  { name: 'Ethan Zhiyi Rong', detail: 'U Toronto PhD' },
  { name: 'Elise Chenxinran Shen', detail: 'UBC MSc, U Toronto PhD' },
  { name: 'Ningjing Tang', detail: 'CMU PhD' },
  { name: 'Ankolika De', detail: 'Penn State PhD' },
  { name: 'Lanjing Liu', detail: 'Virginia Tech PhD' },
  { name: 'Minzhu Zhao', detail: 'University of Minnesota PhD' },
];

export default function TeamPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [showContact, setShowContact] = useState<string | null>(null);

  return (
    <div className="min-h-[100dvh]" style={{ background: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />

      {/* Header */}
      <div className="pt-32 pb-16">
        <div className="container-main">
          <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>People</span>
          <h1 className="text-h1 mb-4">Our Team</h1>
          <p className="text-body-lg max-w-[600px]">
            A diverse group of researchers passionate about inventing the future of human-computer interaction.
          </p>
        </div>
      </div>

      {/* Director */}
      <section className="pb-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden sticky top-24" style={{ border: '1px solid var(--border)' }}>
                <img src={DIRECTOR.photo} alt={DIRECTOR.name} className="w-full aspect-[3/4] object-cover" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <span className="text-label block mb-3">Director</span>
              <h2 className="font-serif text-[42px] mb-2">{DIRECTOR.name}</h2>
              <p className="text-[16px] mb-1">{DIRECTOR.title}</p>
              <p className="text-body mb-6">{DIRECTOR.dept}</p>
              <p className="text-body-lg mb-8">{DIRECTOR.bio}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {DIRECTOR.interests.map((i) => <span key={i} className="tag">{i}</span>)}
              </div>
              <div className="flex gap-3">
                <a href={DIRECTOR.website} target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium px-5 py-2.5 rounded-full text-white" style={{ background: 'var(--bg-dark)' }}>Website</a>
                <a href={`mailto:${DIRECTOR.email}`} className="text-[14px] font-medium px-5 py-2.5 rounded-full" style={{ border: '1px solid var(--border-dark)' }}>Email</a>
                <a href={DIRECTOR.scholar} target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium px-5 py-2.5 rounded-full" style={{ border: '1px solid var(--border-dark)' }}>Google Scholar</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PhD Students */}
      <section className="py-20">
        <div className="container-main">
          <h2 className="text-h3 mb-4">PhD Students</h2>
          <p className="text-body mb-12 max-w-[600px]">
            Each PhD student leads their own research project. Interested in collaborating? You can reach out to the lab or contact individual students directly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-label mb-6">George Mason University</h3>
              {GMU.map((s, i) => (
                <div key={s.name} className="py-5" style={{ borderTop: i === 0 ? '1px solid var(--border-dark)' : '1px solid var(--border)' }}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {s.link ? (
                        <a href={s.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-[17px] hover:underline underline-offset-4">{s.name}</a>
                      ) : (
                        <span className="font-semibold text-[17px]">{s.name}</span>
                      )}
                      <p className="text-[14px] mt-1" style={{ color: 'var(--text-secondary)' }}>{s.focus}</p>
                    </div>
                    <button
                      onClick={() => setShowContact(showContact === s.name ? null : s.name)}
                      className="text-[12px] font-medium px-3 py-1.5 rounded-full shrink-0 transition-all"
                      style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                    >
                      {showContact === s.name ? 'Close' : 'Contact'}
                    </button>
                  </div>

                  {/* Project */}
                  <p className="text-[15px] mt-3 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Project: </span>{s.project}
                  </p>

                  {/* Contact info */}
                  {showContact === s.name && (
                    <div className="mt-3 flex gap-3 items-center">
                      <a href={`mailto:${s.email}`} className="text-[13px] font-medium px-3 py-1.5 rounded-full text-white" style={{ background: '#2D6A4F' }}>
                        {s.email}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-label mb-6">City University of Hong Kong</h3>
              {CITYU.map((s, i) => (
                <div key={s.name} className="py-5" style={{ borderTop: i === 0 ? '1px solid var(--border-dark)' : '1px solid var(--border)' }}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {s.link ? (
                        <a href={s.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-[17px] hover:underline underline-offset-4">{s.name}</a>
                      ) : (
                        <span className="font-semibold text-[17px]">{s.name}</span>
                      )}
                      <p className="text-[14px] mt-1" style={{ color: 'var(--text-secondary)' }}>{s.focus}</p>
                    </div>
                    <button
                      onClick={() => setShowContact(showContact === s.name ? null : s.name)}
                      className="text-[12px] font-medium px-3 py-1.5 rounded-full shrink-0 transition-all"
                      style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                    >
                      {showContact === s.name ? 'Close' : 'Contact'}
                    </button>
                  </div>

                  <p className="text-[15px] mt-3 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Project: </span>{s.project}
                  </p>

                  {showContact === s.name && (
                    <div className="mt-3 flex gap-3 items-center">
                      <a href={`mailto:${s.email}`} className="text-[13px] font-medium px-3 py-1.5 rounded-full text-white" style={{ background: '#2D6A4F' }}>
                        {s.email}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Alumni */}
      <section className="py-20">
        <div className="container-main">
          <h2 className="text-h3 mb-8">Alumni PhDs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {ALUMNI.map((a) => (
              <div key={a.name} className="p-5 rounded-2xl bg-white" style={{ border: '1px solid var(--border)' }}>
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
      </section>

      <div className="divider" />

      {/* Visiting */}
      <section className="py-20">
        <div className="container-main">
          <h2 className="text-h3 mb-8">Visiting Researchers & Interns</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {VISITORS.map((v) => (
              <div key={v.name} className="p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.5)', border: '1px solid var(--border)' }}>
                <p className="font-medium text-[15px]">{v.name}</p>
                <p className="text-[13px] mt-1" style={{ color: 'var(--text-muted)' }}>{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-main text-center">
          <div className="max-w-[500px] mx-auto">
            <h3 className="font-serif text-[28px] mb-4">Work with us</h3>
            <p className="text-body mb-6">We are always looking for passionate researchers. Reach out to the lab director or any PhD student.</p>
            <a href="mailto:zhicong.lu@gmu.edu" className="text-[14px] font-medium px-6 py-3 rounded-full text-white inline-block" style={{ background: 'var(--bg-dark)' }}>
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
