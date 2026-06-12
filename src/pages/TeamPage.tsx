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
  { name: 'Junjie Ma', title: 'PhD Student, George Mason University', email: 'jma26@gmu.edu', website: 'https://jeffrey-wiki.vercel.app/wiki/home' },
  { name: 'Haichang Li', title: 'PhD Student, George Mason University', email: 'haichangli@alumni.purdue.edu', website: 'https://www.linkedin.com/in/haichangli/' },
  { name: 'Shiwei Hong', title: 'PhD Student, George Mason University', email: 'shong46@gmu.edu' },
  { name: 'Weisen Zhao', title: 'PhD Student, George Mason University', email: 'wzhao9@gmu.edu', website: 'https://www.linkedin.com/in/zhaoweisen/' },
  { name: 'Dhiman Goswami', title: 'PhD Student, George Mason University', website: 'https://www.linkedin.com/in/dhimangoswami8/' },
];

const CITYU = [
  { name: 'Huanchen Wang', title: 'PhD Student, City University of Hong Kong', website: 'https://wanghchen.github.io/', coadvised: 'Co-advised with Yuxin Ma', photo: '/images/people/huanchen-wang.jpg' },
  { name: 'Luoying Lin', title: 'PhD Student, City University of Hong Kong', website: 'https://luoying0.com/', coadvised: 'Co-advised with Shengdong Zhao', photo: '/images/people/luoying-lin.jpg' },
  { name: 'Zhiyang Wu', title: 'PhD Student, City University of Hong Kong', website: 'https://scholars.cityu.edu.hk/en/persons/zhiyangwu5/', coadvised: 'Co-advised with Chen Liu', photo: '/images/people/zhiyang-wu.png' },
  { name: 'Jian Ma', title: 'PhD Student, City University of Hong Kong', website: 'https://scholars.cityu.edu.hk/en/persons/jianma4/', coadvised: 'Co-advised with Kede Ma', photo: '/images/people/jian-ma.png' },
  { name: 'Run Yang', title: 'PhD Student, City University of Hong Kong', website: 'https://scholars.cityu.edu.hk/en/persons/runyang2/', coadvised: 'Co-advised with Yuhan Luo', photo: '/images/people/run-yang.png' },
];

const ALUMNI = [
  { name: 'Piaohong Wang', title: 'Alumni PhD', website: 'https://allenpiaohong.github.io/AllenPiaoHong/index.html', coadvised: 'Co-advised with Jiawei Ma' },
  { name: 'Siying Hu', title: 'Alumni PhD', website: 'https://sychh.github.io/', photo: '/images/people/siying-hu.jpg' },
  { name: 'Yu Zhang', title: 'Alumni PhD', website: 'https://yuiz.github.io/' },
  { name: 'Qian Wan', title: 'Alumni PhD', website: 'https://ahin-qianwan.github.io/', photo: '/images/people/qian-wan.jpg' },
];

const COLLABORATORS = [
  { name: 'Ryan Yen', title: 'PhD Student, MIT', website: 'https://ryanyen2.github.io/' },
  { name: 'Felicia Li Feng', title: 'PhD Student, University of Waterloo', website: 'https://felicia35.github.io/' },
  { name: 'Ethan Zhiyi Rong', title: 'PhD Student, University of Toronto', website: 'https://scholar.google.com/citations?user=M6A4OVYAAAAJ&hl=en&authuser=2', photo: '/images/people/ethan-zhiyi-rong.png' },
  { name: 'Elise Chenxinran Shen', title: 'PhD Student, University of Toronto', website: 'https://elisexinranshen.github.io/', photo: '/images/people/elise-chenxinran-shen.png' },
  { name: 'Ningjing Tang', title: 'PhD Student, Carnegie Mellon University', website: 'https://ningjingtang.com/' },
  { name: 'AnKolika De', title: 'PhD Student, Penn State', website: 'https://sites.psu.edu/ankolikade/' },
  { name: 'Lanjing Liu', title: 'HCI Researcher & Designer, Johns Hopkins', website: 'https://lanjing.design/' },
  { name: 'Minzhu Zhao', title: 'PhD Student, University of Minnesota', website: 'https://mindyzhaominzhu.github.io/', photo: '/images/people/minzhu-zhao.jpg' },
  { name: 'Emma Jiren Wang', title: 'Research Collaborator', website: 'https://github.com/Jiren1247', photo: '/images/people/emma-jiren-wang.png' },
  { name: 'Zhe Tan', title: 'Research Collaborator', website: 'https://www.linkedin.com/in/zhe-tan-650163238/' },
  { name: 'Mingyuan Li', title: 'Designer and Research Collaborator', website: 'https://www.mingyuanli.site/' },
  { name: 'Ziying Wang', title: 'Research Collaborator', website: 'https://dl.acm.org/profile/99661743577' },
];

type Person = {
  name: string;
  title: string;
  email?: string;
  website?: string;
  photo?: string;
  coadvised?: string;
};

function IconLink({ href, label, type }: { href: string; label: string; type: 'email' | 'website' }) {
  const Icon = type === 'email' ? Mail : ExternalLink;
  return (
    <a
      href={href}
      target={type === 'website' ? '_blank' : undefined}
      rel={type === 'website' ? 'noopener noreferrer' : undefined}
      aria-label={label}
      title={label}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-all hover:-translate-y-0.5"
      style={{ border: '1px solid var(--border)' }}
    >
      <Icon size={16} />
    </a>
  );
}

function PersonCard({ person }: { person: Person }) {
  return (
    <article className="group p-5 rounded-2xl bg-white transition-all hover:-translate-y-1" style={{ border: '1px solid var(--border)' }}>
      <div className="flex gap-5 items-center">
        <img src={person.photo || AVATAR} alt="" className="w-[112px] h-[112px] rounded-full object-cover shrink-0" />
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-[19px] leading-tight">{person.name}</h3>
          <p className="text-[14px] mt-2 leading-snug" style={{ color: 'var(--text-muted)' }}>{person.title}</p>
          {person.coadvised && <p className="text-[13px] mt-3" style={{ color: 'var(--accent-green)' }}>{person.coadvised}</p>}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {person.website && <IconLink href={person.website} label={`${person.name} website`} type="website" />}
        {person.email && <IconLink href={`mailto:${person.email}`} label={`Email ${person.name}`} type="email" />}
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
            {GMU.map((person) => <PersonCard key={person.name} person={person} />)}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-main">
          <div className="mb-10">
            <h2 className="text-h3 mb-3">City University of Hong Kong</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {CITYU.map((person) => <PersonCard key={person.name} person={person} />)}
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {ALUMNI.map((person) => <PersonCard key={person.name} person={person} />)}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="py-20">
        <div className="container-main">
          <div className="mb-10">
            <span className="text-label block mb-4" style={{ color: '#2D6A4F' }}>Collaborators</span>
            <h2 className="text-h3">Collaborators & Interns</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {COLLABORATORS.map((person) => <PersonCard key={person.name} person={person} />)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
