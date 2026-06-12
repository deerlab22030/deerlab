import { useEffect } from 'react';
import { ExternalLink, GraduationCap, Mail, UserRound } from 'lucide-react';
import Nav from '../sections/Nav';
import Footer from '../sections/Footer';
import MouseGlow from '../components/MouseGlow';

const AVATAR = '/images/deer-avatar.png';

const DIRECTOR = {
  name: 'Zhicong Lu',
  title: 'Assistant Professor',
  dept: 'Department of Computer Science, George Mason University',
  email: 'zlu6@gmu.edu',
  website: 'https://luzhc.github.io',
  cec: 'https://cec.gmu.edu/profiles/zlu6',
  scholar: 'https://scholar.google.com/citations?hl=en&user=xCxyGuwAAAAJ&view_op=list_works',
  photo: '/images/zhicong-lu-profile.jpg',
  bio: 'Zhicong Lu is an Assistant Professor of Computer Science at George Mason University. His research lies at the intersection of human-computer interaction, social computing, computational social science, and machine learning, with a focus on studying, designing, and building systems that support social interaction, trust, engagement, creativity, and knowledge sharing in virtual and physical spaces. He is currently exploring emerging media, livestreaming, mixed reality, and generative AI for knowledge sharing, creativity, and safeguarding intangible cultural heritage.',
  interests: ['Human-Computer Interaction', 'Social Computing', 'Generative AI', 'Livestreaming', 'Intangible Cultural Heritage'],
};

const GMU = [
  { name: 'Junjie Ma', title: 'PhD Student, George Mason University', focus: 'Social computing and online communities', email: 'jma23@gmu.edu' },
  { name: 'Haichang Li', title: 'PhD Student, George Mason University', focus: 'AI-mediated communication and creativity support', email: 'hli22@gmu.edu', website: 'https://haichang.li' },
  { name: 'Shiwei Hong', title: 'PhD Student, George Mason University', focus: 'Livestreaming, digital labor, and human-AI communities', email: 'shong3@gmu.edu' },
  { name: 'Weisen Zhao', title: 'PhD Student, George Mason University', focus: 'Accessible gaming and inclusive play', email: 'wzhao22@gmu.edu' },
  { name: 'Dhiman Goswami', title: 'PhD Student, George Mason University', focus: 'Digital inclusion, privacy, and older adults', email: 'dgoswami@gmu.edu' },
];

const CITYU = [
  { name: 'Piaohong Wang', title: 'PhD Student, City University of Hong Kong', focus: 'VTubing and streamer identity', email: 'pwang@cityu.edu.hk', website: 'https://sites.google.com/view/wamgpiaohong/homepage', coadvised: 'Co-advised with Jiawei Ma' },
  { name: 'Huanchen Wang', title: 'PhD Student, City University of Hong Kong', focus: 'Human-AI co-creativity and cultural design', email: 'hwang@cityu.edu.hk', website: 'https://wanghchen.github.io/', coadvised: 'Co-advised with Yuxin Ma' },
  { name: 'Luoying Lin', title: 'PhD Student, City University of Hong Kong', focus: 'Digital aging and collective mourning', email: 'llin@cityu.edu.hk', website: 'https://luoying0.com', coadvised: 'Co-advised with Shengdong Zhao' },
  { name: 'Zhiyang Wu', title: 'PhD Student, City University of Hong Kong', focus: 'Social VR and communication tools', email: 'zywu@cityu.edu.hk', coadvised: 'Co-advised with Chen Liu' },
  { name: 'Jian Ma', title: 'PhD Student, City University of Hong Kong', focus: 'Online platforms and governance', email: 'jma@cityu.edu.hk', coadvised: 'Co-advised with Kede Ma' },
  { name: 'Zhaoning Li', title: 'PhD Student, City University of Hong Kong', focus: 'Creative tools and visual communication', email: 'zli@cityu.edu.hk', coadvised: 'Co-advised with Chen Ma' },
  { name: 'Run Yang', title: 'PhD Student, City University of Hong Kong', focus: 'Inclusive and accessible technology', email: 'ryang@cityu.edu.hk', coadvised: 'Co-advised with Yuhan Luo' },
];

const ALUMNI = [
  { name: 'Siying Hu', title: 'Alumni PhD', focus: 'Human-AI interaction and communication', now: 'Industry' },
  { name: 'Yu Zhang', title: 'Alumni PhD', focus: 'AI-supported storytelling and research tools', now: 'Academia' },
  { name: 'Qian Wan', title: 'Alumni PhD', focus: 'Creativity support and human-AI co-creation', now: 'Research Lab', website: 'https://llewynwan.github.io/' },
];

const VISITORS = [
  { name: 'Ryan Yen', currentlyAt: 'MIT PhD; UWaterloo MSc' },
  { name: 'Felicia Li Feng', currentlyAt: 'UWaterloo PhD' },
  { name: 'Ethan Zhiyi Rong', currentlyAt: 'U Toronto PhD' },
  { name: 'Elise Chenxinran Shen', currentlyAt: 'U Toronto PhD; UBC MSc' },
  { name: 'Ningjing Tang', currentlyAt: 'CMU PhD' },
  { name: 'Ankolika De', currentlyAt: 'Penn State PhD' },
  { name: 'Lanjing Liu', currentlyAt: 'Virginia Tech PhD' },
  { name: 'Minzhu Zhao', currentlyAt: 'University of Minnesota PhD' },
];

type Member = {
  name: string;
  title: string;
  focus: string;
  email?: string;
  website?: string;
  now?: string;
  coadvised?: string;
};

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="group p-5 rounded-2xl bg-white transition-all hover:-translate-y-1" style={{ border: '1px solid var(--border)' }}>
      <div className="flex gap-5 items-start">
        <img src={AVATAR} alt="" className="w-[92px] h-[92px] rounded-full object-cover shrink-0" />
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-[18px] leading-tight">{member.name}</h3>
          <p className="text-[13px] mt-1" style={{ color: 'var(--text-muted)' }}>{member.title}</p>
          <p className="text-[14px] mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{member.focus}</p>
          {member.coadvised && <p className="text-[13px] mt-2" style={{ color: 'var(--accent-green)' }}>{member.coadvised}</p>}
          {member.now && <p className="text-[13px] mt-2" style={{ color: 'var(--text-muted)' }}>Currently at {member.now}</p>}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {member.website && (
          <a href={member.website} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} website`} title="Website" className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-all hover:-translate-y-0.5" style={{ border: '1px solid var(--border-dark)' }}>
            <ExternalLink size={16} />
          </a>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`} title="Email" className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-all hover:-translate-y-0.5" style={{ border: '1px solid var(--border)' }}>
            <Mail size={16} />
          </a>
        )}
      </div>
    </article>
  );
}

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[100dvh]" style={{ background: 'var(--bg-primary)' }}>
      <MouseGlow />
      <Nav />

      <div className="pt-32 pb-16">
        <div className="container-main">
          <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>People</span>
          <h1 className="text-h1 mb-4">Our Team</h1>
          <p className="text-body-lg max-w-[680px]">
            Researchers building culture-centered technologies for social connection, creativity, accessibility, and human-AI futures.
          </p>
        </div>
      </div>

      <section className="pb-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden sticky top-24 bg-white" style={{ border: '1px solid var(--border)' }}>
                <img src={DIRECTOR.photo} alt={DIRECTOR.name} className="w-full aspect-[4/5] object-cover" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <span className="text-label block mb-3">Principal Investigator</span>
              <h2 className="font-serif text-[42px] md:text-[52px] leading-tight mb-2">{DIRECTOR.name}</h2>
              <p className="text-[16px] mb-1">{DIRECTOR.title}</p>
              <p className="text-body mb-6">{DIRECTOR.dept}</p>
              <p className="text-body-lg mb-8">{DIRECTOR.bio}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {DIRECTOR.interests.map((interest) => <span key={interest} className="tag">{interest}</span>)}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={DIRECTOR.cec} target="_blank" rel="noopener noreferrer" aria-label="CEC Profile" title="CEC Profile" className="inline-flex items-center justify-center w-11 h-11 rounded-full text-white" style={{ background: 'var(--bg-dark)' }}><UserRound size={18} /></a>
                <a href={DIRECTOR.website} target="_blank" rel="noopener noreferrer" aria-label="Website" title="Website" className="inline-flex items-center justify-center w-11 h-11 rounded-full" style={{ border: '1px solid var(--border-dark)' }}><ExternalLink size={18} /></a>
                <a href={`mailto:${DIRECTOR.email}`} aria-label="Email" title="Email" className="inline-flex items-center justify-center w-11 h-11 rounded-full" style={{ border: '1px solid var(--border-dark)' }}><Mail size={18} /></a>
                <a href={DIRECTOR.scholar} target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" title="Google Scholar" className="inline-flex items-center justify-center w-11 h-11 rounded-full" style={{ border: '1px solid var(--border-dark)' }}><GraduationCap size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="py-20">
        <div className="container-main">
          <div className="mb-10">
            <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>PhD Students</span>
            <h2 className="text-h3 mb-3">George Mason University</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {GMU.map((member) => <MemberCard key={member.name} member={member} />)}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-main">
          <div className="mb-10">
            <h2 className="text-h3 mb-3">City University of Hong Kong</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {CITYU.map((member) => <MemberCard key={member.name} member={member} />)}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="py-20">
        <div className="container-main">
          <div className="mb-10">
            <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Alumni</span>
            <h2 className="text-h3">Alumni PhDs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ALUMNI.map((member) => <MemberCard key={member.name} member={member} />)}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="py-20">
        <div className="container-main">
          <div className="mb-10">
            <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Visitors</span>
            <h2 className="text-h3">Visiting Researchers & Interns</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VISITORS.map((visitor) => (
              <article key={visitor.name} className="p-5 rounded-2xl bg-white" style={{ border: '1px solid var(--border)' }}>
                <img src={AVATAR} alt="" className="w-[72px] h-[72px] rounded-full object-cover mb-4" />
                <h3 className="font-semibold text-[16px] leading-tight">{visitor.name}</h3>
                <p className="text-[13px] mt-2" style={{ color: 'var(--text-muted)' }}>Currently at {visitor.currentlyAt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
