import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'News', href: '/news', isPage: true },
  { label: 'Research', href: '/research', isPage: true },
  { label: 'People', href: '/team', isPage: true },
  { label: 'Blog', href: '/blog', isPage: true },
  { label: 'Work with us', href: '/work-with-us', isPage: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const scrollTarget = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    if (scrollTarget.current && isHome) {
      const id = scrollTarget.current;
      scrollTarget.current = null;
      setTimeout(() => {
        const el = document.querySelector(`#${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location, isHome]);

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('/#', '');
    if (isHome) {
      document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      scrollTarget.current = id;
      navigate('/');
    }
  };

  const navLinkColor = scrolled || !isHome ? 'var(--text-secondary)' : 'rgba(255,255,255,0.7)';
  const navLinkHoverColor = scrolled || !isHome ? 'var(--text-primary)' : '#fff';
  const barColor = scrolled || !isHome ? 'bg-black' : 'bg-white';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500" style={{ background: scrolled ? 'rgba(236, 234, 229, 0.88)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderBottom: scrolled ? '1px solid rgba(26,26,26,0.06)' : '1px solid transparent' }}>
      <div className="container-main">
        <div className="flex items-center justify-between h-[64px]">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-[15px] font-semibold tracking-tight transition-colors duration-300" style={{ color: scrolled || !isHome ? 'var(--text-primary)' : '#fff' }}>DEER Lab</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => item.isPage ? (
              <Link key={item.label} to={item.href} className="px-3 py-1.5 text-[14px] font-medium rounded-md transition-all duration-200 hover:bg-black/5" style={{ color: navLinkColor }} onMouseEnter={(e) => (e.currentTarget.style.color = navLinkHoverColor)} onMouseLeave={(e) => (e.currentTarget.style.color = navLinkColor)}>{item.label}</Link>
            ) : (
              <button key={item.label} onClick={() => handleAnchorClick(item.href)} className="px-3 py-1.5 text-[14px] font-medium rounded-md transition-all duration-200 hover:bg-black/5" style={{ color: navLinkColor }} onMouseEnter={(e) => (e.currentTarget.style.color = navLinkHoverColor)} onMouseLeave={(e) => (e.currentTarget.style.color = navLinkColor)}>{item.label}</button>
            ))}
          </div>

          <button className="md:hidden flex flex-col gap-[4px] p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className={`w-[16px] h-[1.5px] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[2.5px] bg-black' : barColor}`} />
            <span className={`w-[16px] h-[1.5px] transition-all duration-300 ${mobileOpen ? 'opacity-0' : barColor}`} />
            <span className={`w-[16px] h-[1.5px] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[2.5px] bg-black' : barColor}`} />
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-[400px]' : 'max-h-0'}`} style={{ background: 'rgba(236, 234, 229, 0.98)', backdropFilter: 'blur(16px)' }}>
        <div className="container-main py-4 flex flex-col">
          {NAV_ITEMS.map((item) => item.isPage ? (
            <Link key={item.label} to={item.href} onClick={() => setMobileOpen(false)} className="text-left py-3 text-[15px] font-medium" style={{ color: 'var(--text-secondary)' }}>{item.label}</Link>
          ) : (
            <button key={item.label} onClick={() => handleAnchorClick(item.href)} className="text-left py-3 text-[15px] font-medium" style={{ color: 'var(--text-secondary)' }}>{item.label}</button>
          ))}
        </div>
      </div>
    </nav>
  );
}
