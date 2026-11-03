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

/* === Travel Kit Builder — interactive 3D add-to-kit widget (index.html #travel-kit) ===
   Client-side only, nothing persisted. Checkout stays per-item via each product's
   own Stripe link; the tray total is the sum of the real listed prices. */
(function () {
  'use strict';
  var root = document.querySelector('[data-widget="travel-kit"]');
  if (!root) return;
  var CAT = [{"id": "packing-cubes", "name": "Compression Packing Cubes 8-Pc Set", "cents": 2499, "url": "https://buy.stripe.com/7sY14mds34EGdBqgCd8sp08", "img": "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=900&q=80&auto=format&fit=crop", "alt": "Packed suitcase with organized clothing", "copy": "Squeeze the air out of a week of clothes and keep outfits sorted by day."}, {"id": "garment-duffel", "name": "Convertible Garment Duffel", "cents": 3999, "url": "https://buy.stripe.com/6oU6oG87J8UWgNCfy98sp09", "img": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=80&auto=format&fit=crop", "alt": "Structured travel duffel bag", "copy": "Garment bag and carry-on duffel in one zip. The wedding-weekend answer."}, {"id": "dry-bag", "name": "Waterproof Dry Bag 10L", "cents": 1999, "url": "https://buy.stripe.com/5kQ5kC4Vx1sugNCclX8sp0a", "img": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&q=80&auto=format&fit=crop", "alt": "Canoes on a clear lake at golden hour", "copy": "Roll-top dry storage for boat days, beach runs and rainy trailheads."}, {"id": "phone-pouch", "name": "Floating Waterproof Phone Pouch 2-Pack", "cents": 1999, "url": "https://buy.stripe.com/5kQdR89bN2wyeFueu58sp0b", "img": "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&q=80&auto=format&fit=crop", "alt": "Beach shoreline with chairs facing the water", "copy": "Two sealed pouches that float — one for you, one for whoever drops theirs."}, {"id": "travel-towel", "name": "Quick-Dry Travel Towel", "cents": 5499, "url": "https://buy.stripe.com/fZuaEW87J8UW0OEdq18sp0c", "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80&auto=format&fit=crop", "alt": "Turquoise beach with soft sand", "copy": "Full-size coverage that dries fast and packs down to the size of a paperback."}, {"id": "crossbody", "name": "Utility Crossbody Bag", "cents": 4999, "url": "https://buy.stripe.com/aFaaEWfAb7QScxm85H8sp0d", "img": "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=900&q=80&auto=format&fit=crop", "alt": "Traveler walking with a small crossbody bag", "copy": "Passport, phone and cards against your chest — hands free, valuables close."}, {"id": "tumbler", "name": "Stainless Travel Tumbler 20oz", "cents": 4499, "url": "https://buy.stripe.com/3cIeVcew7b34eFugCd8sp0e", "img": "https://images.unsplash.com/photo-1553531384-411a247ccd73?w=900&q=80&auto=format&fit=crop", "alt": "Insulated travel tumbler on a desk", "copy": "Double-wall steel that keeps coffee hot through a layover and water cold all beach day."}, {"id": "day-bag", "name": "Packable Drawstring Day Bag", "cents": 3499, "url": "https://buy.stripe.com/28E8wObjV8UW2WM0Df8sp0f", "img": "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=900&q=80&auto=format&fit=crop", "alt": "Lightweight day bag ready for a day trip", "copy": "Folds into its own pocket outbound; carries the market haul on the way back."}, {"id": "star-projector", "name": "Astronaut Galaxy Star Projector", "cents": 2999, "url": "https://buy.stripe.com/4gMdR8bjVgno0OEbhT8sp0g", "img": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=900&q=80&auto=format&fit=crop", "alt": "Star-filled night sky", "copy": "Astronaut lamp that throws a starfield across the ceiling — remote control and Bluetooth speaker built in."}, {"id": "kemei-trimmer", "name": "KEMEI KM-032 Trimmer Kit", "cents": 2999, "url": "https://buy.stripe.com/9B614m87JefgfJyclX8sp0h", "img": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80&auto=format&fit=crop", "alt": "Barber at work in a barbershop", "copy": "KEMEI's pro grooming kit — hair, beard and detail work in one case. Ships in 8–13 days; order by Dec 9 for Christmas."}, {"id": "sunset-lamp", "name": "LED Sunset Projection Lamp", "cents": 1399, "url": "https://buy.stripe.com/9B6aEWcnZb34eFu5Xz8sp0i", "img": "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900&q=80&auto=format&fit=crop", "alt": "Warm sunset over a field", "copy": "USB lamp that paints a golden-hour sunset on any wall — the under-$15 gift that photographs like a vacation."}, {"id": "footwell-lights", "name": "Car RGB LED Footwell Light Kit", "cents": 1499, "url": "https://buy.stripe.com/cNi7sK5ZBgno7d299L8sp0j", "img": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80&auto=format&fit=crop", "alt": "Sports car ready for a night drive", "copy": "USB strip lights for the footwells — app and remote control, music-sync modes, no wiring to cut."}, {"id": "flame-diffuser", "name": "Volcanic Flame Diffuser Humidifier", "cents": 2499, "url": "https://buy.stripe.com/7sY9AS3Rt6MO68YadP8sp0k", "img": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80&auto=format&fit=crop", "alt": "Calm spa setting with towels and stones", "copy": "Volcano-style diffuser with a flickering flame light — mist, scent and a night light in one small footprint."}, {"id": "cat-ball", "name": "Interactive Cat Ball Toy", "cents": 899, "url": "https://buy.stripe.com/3cIeVc0Fh3AC1SIadP8sp0l", "img": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&q=80&auto=format&fit=crop", "alt": "Cat watching intently", "copy": "Self-rolling USB-rechargeable ball that keeps indoor cats chasing while you're out. The stocking stuffer for cat people."}, {"id": "magnetic-wristband", "name": "Magnetic Wristband Tool Holder", "cents": 999, "url": "https://buy.stripe.com/cNi14m0Fh8UW54U3Pr8sp0m", "img": "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=900&q=80&auto=format&fit=crop", "alt": "Workshop tools laid out on a bench", "copy": "Strap it on and screws, nails and bits stick to your wrist instead of vanishing into the carpet. For the DIY stocking."}, {"id": "grooming-gloves", "name": "Pet Grooming Gloves — Pair", "cents": 999, "url": "https://buy.stripe.com/9B64gyafR0oq9la2Ln8sp0C", "img": "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&q=80&auto=format&fit=crop", "alt": "Happy dog with its owner", "copy": "Deshedding gloves for bath time and couch time — loose fur sticks to the gloves, not the furniture. One pair, left and right."}];
  var BUNDLES = {"beach": ["dry-bag", "phone-pouch", "travel-towel", "tumbler"], "business": ["garment-duffel", "packing-cubes", "kemei-trimmer"], "weekend": ["day-bag", "crossbody", "sunset-lamp", "star-projector"], "everyday": ["crossbody", "magnetic-wristband", "grooming-gloves", "cat-ball"]};
  var LABELS = {"beach": "Beach Trip", "business": "Business", "weekend": "Weekend Escape", "everyday": "Home & Everyday"};
  var byId = {};
  CAT.forEach(function (p) { byId[p.id] = p; });
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;
  var kit = [];           // product ids, in the order added
  var spotId = CAT[2].id; // initial spotlight: first Beach Trip pick

  var tray = root.querySelector('[data-tk-tray]');
  var itemsEl = root.querySelector('[data-tk-items]');
  var emptyEl = root.querySelector('[data-tk-empty]');
  var totalEl = root.querySelector('[data-tk-total]');
  var countEl = root.querySelector('[data-tk-count]');
  var bundleBtn = root.querySelector('[data-tk-bundle]');
  var spot = root.querySelector('[data-tk-spot]');
  var spotImg = root.querySelector('[data-tk-spot-img]');
  var spotName = root.querySelector('[data-tk-spot-name]');
  var spotCopy = root.querySelector('[data-tk-spot-copy]');
  var spotPrice = root.querySelector('[data-tk-spot-price]');
  var spotAdd = root.querySelector('[data-tk-spot-add]');
  var spotBuy = root.querySelector('[data-tk-spot-buy]');

  function money(c) { return '$' + (c / 100).toFixed(2); }
  function trip() {
    var checked = root.querySelector('input[name="tk-trip"]:checked');
    return checked ? checked.value : 'beach';
  }
  function inKit(id) { return kit.indexOf(id) !== -1; }

  /* ---------- 3D tilt + gloss sheen (pointer-driven) ---------- */
  function attachTilt(el, maxDeg) {
    if (!el || reduceMotion || !finePointer) return;
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      if (!r.width || !r.height) return;
      var x = (e.clientX - r.left) / r.width;
      var y = (e.clientY - r.top) / r.height;
      el.style.transform = 'perspective(950px) rotateX(' + ((0.5 - y) * maxDeg).toFixed(2) +
        'deg) rotateY(' + ((x - 0.5) * maxDeg).toFixed(2) + 'deg)';
      el.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
      el.style.setProperty('--my', (y * 100).toFixed(1) + '%');
    });
    el.addEventListener('pointerleave', function () { el.style.transform = ''; });
  }

  /* ---------- fly-to-tray animation ---------- */
  function fly(imgEl) {
    if (reduceMotion || !imgEl || !tray || typeof imgEl.animate !== 'function') { pulse(); return; }
    var r1 = imgEl.getBoundingClientRect();
    var r2 = tray.getBoundingClientRect();
    if (!r1.width) { pulse(); return; }
    var ghost = imgEl.cloneNode();
    ghost.setAttribute('aria-hidden', 'true');
    ghost.style.cssText = 'position:fixed;z-index:200;pointer-events:none;object-fit:cover;' +
      'border-radius:14px;box-shadow:0 24px 50px rgba(0,0,0,.45);left:' + r1.left + 'px;top:' + r1.top +
      'px;width:' + r1.width + 'px;height:' + r1.height + 'px;margin:0;';
    document.body.appendChild(ghost);
    var dx = (r2.left + r2.width / 2) - (r1.left + r1.width / 2);
    var dy = (r2.top + Math.min(r2.height, 120) / 2) - (r1.top + r1.height / 2);
    var anim = ghost.animate([
      { transform: 'translate(0,0) scale(1)', opacity: 1 },
      { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(.07)', opacity: .3 }
    ], { duration: 640, easing: 'cubic-bezier(.22,.61,.21,1)' });
    if (anim) { anim.onfinish = function () { ghost.remove(); pulse(); }; }
    else { ghost.remove(); pulse(); }
  }
  function pulse() {
    if (reduceMotion || !tray) return;
    tray.classList.remove('tk-pulse');
    void tray.offsetWidth;
    tray.classList.add('tk-pulse');
  }

  /* ---------- spotlight ---------- */
  function setSpot(id) {
    var p = byId[id];
    if (!p) return;
    spotId = id;
    spotImg.src = p.img;
    spotImg.alt = p.alt;
    spotName.textContent = p.name;
    spotCopy.textContent = p.copy;
    spotPrice.textContent = money(p.cents);
    spotBuy.href = p.url;
    spotBuy.textContent = 'Buy it now — ' + money(p.cents);
    syncAddButtons();
  }

  /* ---------- add / remove ---------- */
  function addToKit(id, fromImg) {
    if (inKit(id)) return;
    kit.push(id);
    renderTray();
    syncAddButtons();
    fly(fromImg);
  }
  function removeFromKit(id) {
    kit = kit.filter(function (x) { return x !== id; });
    renderTray();
    syncAddButtons();
  }
  function syncAddButtons() {
    root.querySelectorAll('[data-tk-add]').forEach(function (btn) {
      var card = btn.closest('[data-tk-card]');
      var added = card && inKit(card.getAttribute('data-id'));
      btn.disabled = !!added;
      btn.textContent = added ? 'In your kit ✓' : 'Add to kit';
      btn.classList.toggle('is-added', !!added);
    });
    var sAdded = inKit(spotId);
    spotAdd.disabled = sAdded;
    spotAdd.textContent = sAdded ? 'In your kit ✓' : 'Add to kit';
    spotAdd.classList.toggle('is-added', sAdded);
    // bundle button state
    var picks = BUNDLES[trip()];
    var remaining = picks.filter(function (id) { return !inKit(id); });
    if (!remaining.length) {
      bundleBtn.disabled = true;
      bundleBtn.textContent = 'All ' + LABELS[trip()] + ' picks are in your kit ✓';
    } else {
      bundleBtn.disabled = false;
      var sum = remaining.reduce(function (s, id) { return s + byId[id].cents; }, 0);
      bundleBtn.textContent = (remaining.length === picks.length ? 'Add all ' : 'Add the remaining ') +
        remaining.length + ' ' + LABELS[trip()] + (remaining.length === 1 ? ' pick' : ' picks') + ' — ' + money(sum);
    }
    // trip-pick highlighting
    root.querySelectorAll('[data-tk-card]').forEach(function (card) {
      card.classList.toggle('is-rec', picks.indexOf(card.getAttribute('data-id')) !== -1);
    });
  }
  function renderTray() {
    itemsEl.innerHTML = '';
    var total = 0;
    kit.forEach(function (id) {
      var p = byId[id];
      total += p.cents;
      var li = document.createElement('li');
      li.className = 'tk-item';
      var img = document.createElement('img');
      img.src = p.img; img.alt = ''; img.width = 104; img.height = 78; img.loading = 'lazy';
      li.appendChild(img);
      var info = document.createElement('div');
      info.className = 'tk-item-info';
      var nm = document.createElement('span');
      nm.className = 'tk-item-name'; nm.textContent = p.name;
      var pr = document.createElement('span');
      pr.className = 'tk-item-price'; pr.textContent = money(p.cents);
      info.appendChild(nm); info.appendChild(pr);
      li.appendChild(info);
      var buy = document.createElement('a');
      buy.className = 'tk-item-buy'; buy.href = p.url; buy.textContent = 'Buy';
      buy.setAttribute('aria-label', 'Buy ' + p.name + ' for ' + money(p.cents) + ' at secure Stripe checkout');
      li.appendChild(buy);
      var rm = document.createElement('button');
      rm.type = 'button'; rm.className = 'tk-item-remove'; rm.textContent = '×';
      rm.setAttribute('aria-label', 'Remove ' + p.name + ' from your kit');
      rm.addEventListener('click', function () { removeFromKit(id); });
      li.appendChild(rm);
      itemsEl.appendChild(li);
    });
    emptyEl.style.display = kit.length ? 'none' : '';
    totalEl.textContent = money(total);
    countEl.textContent = kit.length ? kit.length + (kit.length === 1 ? ' item' : ' items') +
      ' — each checks out on its own secure Stripe page.' : '';
  }

  /* ---------- wiring ---------- */
  root.querySelectorAll('[data-tk-card]').forEach(function (card) {
    var id = card.getAttribute('data-id');
    var viewBtn = card.querySelector('[data-tk-view]');
    var addBtn = card.querySelector('[data-tk-add]');
    var img = card.querySelector('img');
    if (viewBtn) viewBtn.addEventListener('click', function () { setSpot(id); });
    if (addBtn) addBtn.addEventListener('click', function () { addToKit(id, img); });
    attachTilt(card, 5);
  });
  spotAdd.addEventListener('click', function () { addToKit(spotId, spotImg); });
  bundleBtn.addEventListener('click', function () {
    var picks = BUNDLES[trip()].filter(function (id) { return !inKit(id); });
    picks.forEach(function (id) { kit.push(id); });
    renderTray();
    syncAddButtons();
    pulse();
  });
  root.querySelectorAll('input[name="tk-trip"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      var first = BUNDLES[trip()][0];
      if (first) setSpot(first);
      syncAddButtons();
    });
  });
  attachTilt(spot, 7);
  attachTilt(tray, 2.5);

  setSpot(spotId);
  renderTray();
  syncAddButtons();
})();
