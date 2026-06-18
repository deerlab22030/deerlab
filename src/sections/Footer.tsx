import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-16 pb-10 relative" style={{ background: 'var(--bg-dark)', color: '#fff' }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-12">
          <div className="lg:col-span-4">
            <img src="/images/MasonLogo.jpg" alt="George Mason University" className="w-[280px] max-w-full h-auto mb-6" />
            <p className="text-[15px] leading-relaxed max-w-[320px]" style={{ color: 'rgba(255,255,255,0.58)' }}>
              DEER Lab studies digital experience, embodied interaction, and the social futures of AI.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[13px] font-semibold mb-4 uppercase tracking-[0.08em]" style={{ color: 'rgba(255,255,255,0.42)' }}>Last Update</h4>
              <div className="text-[14px] leading-relaxed space-y-2" style={{ color: 'rgba(255,255,255,0.66)' }}>
                <p>June 18, 2026</p>
                <p>Homepage hero video generated with Grok.</p>
                <p>Research page images generated with GPT-Image2.</p>
              </div>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold mb-4 uppercase tracking-[0.08em]" style={{ color: 'rgba(255,255,255,0.42)' }}>Contact</h4>
              <div className="text-[14px] leading-relaxed space-y-2" style={{ color: 'rgba(255,255,255,0.66)' }}>
                <p><a href="mailto:deerlab22030@gmail.com" className="hover:opacity-70 transition-opacity">deerlab22030@gmail.com</a></p>
                <p>The Volgenau School of Engineering, 4511 Patriot Cir, Fairfax, VA 22030</p>
              </div>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold mb-4 uppercase tracking-[0.08em]" style={{ color: 'rgba(255,255,255,0.42)' }}>Links</h4>
              <ul className="text-[14px] leading-relaxed space-y-2" style={{ color: 'rgba(255,255,255,0.66)' }}>
                <li><a href="https://cec.gmu.edu/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">College of Engineering and Computing</a></li>
                <li><a href="https://www.gmu.edu/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">George Mason University</a></li>
                <li><Link to="/work-with-us" className="hover:opacity-70 transition-opacity">Work with us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.35)' }}>&copy; 2026 DEER Lab</p>
          <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Digital Experience and Embodied Research Lab
          </p>
        </div>
      </div>
    </footer>
  );
}
