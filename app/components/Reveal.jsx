'use client';
import { useEffect } from 'react';

// §9 reveal: IntersectionObserver adds .in as elements enter; a 2.6s safety
// fallback reveals everything whatever happens. Renders nothing.
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.rv:not(.in)'));
    if (!els.length) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    els.forEach((el) => io.observe(el));
    const t = setTimeout(() => els.forEach((el) => el.classList.add('in')), 2600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return null;
}
