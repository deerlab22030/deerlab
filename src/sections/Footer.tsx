import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollTo = (id: string) => {
    if (location.pathname === '/') {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="pt-20 pb-10 relative" style={{ background: 'var(--bg-dark)', color: '#fff' }}>
      <div className="container-main">
        <div className="mb-16 max-w-[500px]">
          <h3 className="font-serif text-[28px] md:text-[36px] leading-tight mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
            At DEER Lab, we build technology that serves human connection.
          </h3>
          <Link to="/join" className="text-[15px] font-medium underline underline-offset-4 hover:opacity-70 transition-opacity">
            Join the team
          </Link>
        </div>

        <div className="h-px w-full mb-12" style={{ background: 'rgba(255,255,255,0.1)' }} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-[13px] font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Research</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Social Computing', action: () => scrollTo('#research') },
                { label: 'AI & Creativity', action: () => scrollTo('#research') },
                { label: 'Accessible Gaming', action: () => scrollTo('#research') },
                { label: 'Digital Inclusion', action: () => scrollTo('#research') },
              ].map((l) => (
                <li key={l.label}><button onClick={l.action} className="text-[14px] hover:opacity-70 transition-opacity text-left" style={{ color: 'rgba(255,255,255,0.6)' }}>{l.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Lab</h4>
            <ul className="space-y-2.5">
              <li><Link to="/research" className="text-[14px] hover:opacity-70 transition-opacity" style={{ color: 'rgba(255,255,255,0.6)' }}>Research</Link></li>
              <li><Link to="/team" className="text-[14px] hover:opacity-70 transition-opacity" style={{ color: 'rgba(255,255,255,0.6)' }}>People</Link></li>
              <li><button onClick={() => scrollTo('#grants')} className="text-[14px] hover:opacity-70 transition-opacity text-left" style={{ color: 'rgba(255,255,255,0.6)' }}>Grants</button></li>
              <li><Link to="/blog" className="text-[14px] hover:opacity-70 transition-opacity" style={{ color: 'rgba(255,255,255,0.6)' }}>Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Connect</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Website', href: 'https://luzhc.github.io' },
                { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=7tUEh2gAAAAJ' },
                { label: 'Email', href: 'mailto:zhicong.lu@gmu.edu' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[14px] hover:opacity-70 transition-opacity" style={{ color: 'rgba(255,255,255,0.6)' }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Affiliation</h4>
            <div className="text-[14px] space-y-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <p>George Mason University</p>
              <p>Department of Computer Science</p>
              <p>Fairfax, Virginia</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.35)' }}>&copy; 2025 DEER Lab</p>
          <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Digital Engagement and Empowerment Research
          </p>
        </div>
      </div>
    </footer>
  );
}
