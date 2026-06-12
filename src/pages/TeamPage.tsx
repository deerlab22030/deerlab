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
  prior: 'Before joining George Mason University, he was an Assistant Professor at the City University of Hong Kong.',
  interests: ['Human-Computer Interaction', 'Social Computing', 'Generative AI', 'Livestreaming', 'Intangible Cultural Heritage'],
};

const GMU = [
  { name: 'Junjie Ma', title: 'PhD Student', email: 'jma26@gmu.edu', website: 'https://jeffrey-wiki.vercel.app/wiki/home', photo: '/images/people/manual/junjie-ma.jpg' },
  { name: 'Haichang Li', title: 'PhD Student', email: 'hli52@gmu.edu', website: 'https://www.linkedin.com/in/haichangli/', photo: '/images/people/manual/haichang-li.jpg' },
  { name: 'Shiwei Hong', title: 'PhD Student', email: 'shong46@gmu.edu', photo: '/images/people/manual/shiwei-hong.jpg' },
  { name: 'Weisen Zhao', title: 'PhD Student', email: 'wzhao9@gmu.edu', website: 'https://www.linkedin.com/in/zhaoweisen/', photo: '/images/people/manual/weisen-zhao.jpg' },
  { name: 'Dhiman Goswami', title: 'PhD Student', website: 'https://www.linkedin.com/in/dhimangoswami8/', coadvised: 'Co-advised with Sanchari Das', photo: '/images/people/manual/dhiman-goswami.jpg' },
];

const CITYU = [
  { name: 'Huanchen Wang', title: 'PhD Student', website: 'https://wanghchen.github.io/', coadvised: 'Co-advised with Yuxin Ma', photo: '/images/people/manual/huanchen-wang.jpg' },
  { name: 'Luoying Lin', title: 'PhD Student', website: 'https://luoying0.com/', coadvised: 'Co-advised with Shengdong Zhao', photo: '/images/people/manual/luoying-lin.jpg' },
  { name: 'Zhiyang Wu', title: 'PhD Student', website: 'https://scholars.cityu.edu.hk/en/persons/zhiyangwu5/', coadvised: 'Co-advised with Chen Liu' },
  { name: 'Jian Ma', title: 'PhD Student', website: 'https://scholars.cityu.edu.hk/en/persons/jianma4/', coadvised: 'Co-advised with Kede Ma' },
  { name: 'Run Yang', title: 'PhD Student', website: 'https://scholars.cityu.edu.hk/en/persons/runyang2/', coadvised: 'Co-advised with Yuhan Luo' },
];

const ALUMNI = [
  { name: 'Piaohong Wang, Ph.D.', title: 'Industry Researcher in OPPO Research Institute', degree: 'Ph.D., City University of Hong Kong', website: 'https://allenpiaohong.github.io/AllenPiaoHong/index.html', coadvised: 'Co-advised with Jiawei Ma', photo: '/images/people/manual/piaohong-wang.jpg' },
  { name: 'Siying Hu, Ph.D.', title: 'Research Fellow in University of Queensland', degree: 'Ph.D., City University of Hong Kong', website: 'https://sychh.github.io/', photo: '/images/people/manual/siying-hu.jpg' },
  { name: 'Yu Zhang, Ph.D.', title: 'Postdoctoral Fellow in City University of Hong Kong', degree: 'Ph.D., City University of Hong Kong', website: 'https://yuiz.github.io/', photo: '/images/people/manual/yu-zhang.jpg' },
  { name: 'Qian Wan, Ph.D.', title: 'Research Fellow in Nanyang Technological University.', degree: 'Ph.D., City University of Hong Kong', website: 'https://ahin-qianwan.github.io/', photo: '/images/people/manual/qian-wan.jpg' },
];

const COLLABORATORS = [
  { name: 'Ryan Yen', title: 'PhD Student, Massachusetts Institute of Technology', website: 'https://ryanyen2.github.io/', photo: '/images/people/manual/ryan-yen.jpg' },
  { name: 'Felicia Li Feng', title: 'PhD Student, University of Waterloo', website: 'https://felicia35.github.io/', photo: '/images/people/manual/felicia-li-feng.jpg' },
  { name: 'Ethan Zhiyi Rong', title: 'PhD Student, University of Toronto', website: 'https://scholar.google.com/citations?user=M6A4OVYAAAAJ&hl=en&authuser=2' },
  { name: 'Elise Chenxinran Shen', title: 'PhD Student, University of Toronto', website: 'https://elisexinranshen.github.io/', photo: '/images/people/manual/elise-chenxinran-shen.jpg' },
  { name: 'Ningjing Tang', title: 'PhD Student, Carnegie Mellon University', website: 'https://ningjingtang.com/', photo: '/images/people/manual/ningjing-tang.jpg' },
  { name: 'AnKolika De', title: 'PhD Student, Penn State', website: 'https://sites.psu.edu/ankolikade/', photo: '/images/people/manual/ankolika-de.jpg' },
  { name: 'Lanjing Liu', title: 'PhD Student, Johns Hopkins University', website: 'https://lanjing.design/', photo: '/images/people/manual/lanjing-liu.jpg' },
  { name: 'Minzhu Zhao', title: 'PhD Student, University of Minnesota', website: 'https://mindyzhaominzhu.github.io/', photo: '/images/people/manual/minzhu-zhao.jpg' },
  { name: 'Emma Jiren Wang', title: 'Research Assistant, Virginia Tech', website: 'https://github.com/Jiren1247', photo: '/images/people/manual/emma-jiren-wang.jpg' },
  { name: 'Zhe Tan', title: 'Master Student, University of Illinois Urbana-Champaign', website: 'https://www.linkedin.com/in/zhe-tan-650163238/', photo: '/images/people/manual/zhe-tan.jpg' },
  { name: 'Mingyuan Li', title: 'Master Student, University of Pennsylvania', website: 'https://limingyuan.com', photo: '/images/people/manual/mingyuan-li.jpg' },
  { name: 'Ziying Wang', title: 'Undergraduate Student, Duke Kunshan University', website: 'https://dl.acm.org/profile/99661743577', photo: '/images/people/manual/ziying-wang.jpg' },
];

type Person = {
  name: string;
  title: string;
  email?: string;
  website?: string;
  photo?: string;
  coadvised?: string;
  degree?: string;
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
    <article className="group p-5 rounded-2xl bg-white h-[340px] flex flex-col justify-between transition-all hover:-translate-y-1" style={{ border: '1px solid var(--border)' }}>
      <div className="flex flex-col gap-5 items-center">
        <img src={person.photo || AVATAR} alt="" className="w-[132px] h-[132px] rounded-full object-cover shrink-0" />
        <div className="w-full min-w-0 text-center">
          <h3 className="font-semibold text-[18px] md:text-[19px] leading-tight whitespace-nowrap">{person.name}</h3>
          <p className="text-[14px] mt-2 leading-snug" style={{ color: 'var(--text-muted)' }}>{person.title}</p>
          {person.degree && <p className="text-[13px] mt-2" style={{ color: 'var(--text-secondary)' }}>{person.degree}</p>}
          {person.coadvised && <p className="text-[13px] mt-3" style={{ color: 'var(--accent-green)' }}>{person.coadvised}</p>}
        </div>
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
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
              <p className="text-body-lg mb-5">{DIRECTOR.bio}</p>
              <p className="text-body-lg mb-8">{DIRECTOR.prior}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
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
