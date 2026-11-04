"use client";
import { useEffect } from "react";

/** Arms the §9 reveal motion once, globally. Adds .js-rv to <html> so the
 *  hidden state only exists when JS can reveal it; a safety timer reveals
 *  everything even if IntersectionObserver misbehaves. */
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv");
    if (!els.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("js-rv");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    const t = setTimeout(() => els.forEach((el) => el.classList.add("in")), 2600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return null;
}
