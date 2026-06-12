import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import TeamPage from './pages/TeamPage';
import NewsPage from './pages/NewsPage';
import BlogPage from './pages/BlogPage';
import WorkWithUsPage from './pages/WorkWithUsPage';
import PageMotion from './components/PageMotion';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    lenis.on('scroll', () => ScrollTrigger.update());
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<PageMotion><NewsPage /></PageMotion>} />
        <Route path="/research" element={<PageMotion><ResearchPage /></PageMotion>} />
        <Route path="/team" element={<PageMotion><TeamPage /></PageMotion>} />
        <Route path="/blog" element={<PageMotion><BlogPage /></PageMotion>} />
        <Route path="/work-with-us" element={<PageMotion><WorkWithUsPage /></PageMotion>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
