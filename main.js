// Northbound Supply Co. — minimal interactions: mobile nav, FAQ toggles,
// and reveal-on-scroll motion (vanilla JS only, no libraries).
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  document.querySelectorAll('.faq-item > button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.parentElement;
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  // Reveal on scroll: blocks fade/rise in once as they enter the viewport.
  // Content is only hidden after JS arms it, so no-JS visitors see everything.
  var revealEls = document.querySelectorAll(
    '.hero-copy, .section-head, .featured, .card, .kit, .why > div, .faq-item, .product, .page-head, .policy-body > *'
  );
  if (!revealEls.length) return;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  revealEls.forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = ((i % 4) * 65) + 'ms';
  });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  revealEls.forEach(function (el) { observer.observe(el); });
});
