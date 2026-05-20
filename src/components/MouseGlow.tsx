import { useRef, useEffect } from 'react';

export default function MouseGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const trail = trailRef.current;
    if (!dot || !trail) return;

    let mx = -100, my = -100;
    let tx = -100, ty = -100;
    let ttx = -100, tty = -100;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    let frame = 0;
    const animate = () => {
      // Smooth follow
      tx += (mx - tx) * 0.15;
      ty += (my - ty) * 0.15;
      ttx += (tx - ttx) * 0.08;
      tty += (ty - tty) * 0.08;

      dot.style.transform = `translate(${tx - 4}px, ${ty - 4}px)`;
      trail.style.transform = `translate(${ttx - 24}px, ${tty - 24}px)`;

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Outer glow trail */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none hidden md:block"
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45, 106, 79, 0.06) 0%, transparent 70%)',
          zIndex: 9998,
          willChange: 'transform',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none hidden md:block"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'rgba(45, 106, 79, 0.25)',
          zIndex: 9999,
          willChange: 'transform',
        }}
      />
    </>
  );
}
