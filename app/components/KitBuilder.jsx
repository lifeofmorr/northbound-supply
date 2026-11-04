'use client';
import { useMemo, useState } from 'react';
import { PRODUCTS, SPOTLIGHT_KITS, byId, money } from '@/lib/products';

// "Build Your Travel Kit" — the live spotlight builder, elevated to the
// §5.3 dark product panel. Functionality is the live widget's, 1:1:
// trip tabs switch the spotlight to the bundle's first pick and mark the
// bundle's picks; every product can be viewed in the spotlight and added
// to the tray; "add all picks" fills the tray; the tray totals live and
// every item checks out through its own Stripe link.
// Removed per §7/§9 (flagged in BUILD-REPORT.md): the 3D tilt and the
// fly-to-tray animation — motion on this page is the §9 reveal only.
export default function KitBuilder() {
  const [tripKey, setTripKey] = useState('beach');
  const [spotId, setSpotId] = useState('garment-duffel');
  const [kit, setKit] = useState([]);

  const trip = SPOTLIGHT_KITS.find((k) => k.key === tripKey);
  const spot = byId[spotId];
  const inKit = (id) => kit.includes(id);
  const total = useMemo(() => kit.reduce((s, id) => s + byId[id].cents, 0), [kit]);

  const remaining = trip.picks.filter((id) => !inKit(id));
  const bundleSum = remaining.reduce((s, id) => s + byId[id].cents, 0);

  function chooseTrip(key) {
    setTripKey(key);
    const first = SPOTLIGHT_KITS.find((k) => k.key === key).picks[0];
    if (first) setSpotId(first);
  }
  function add(id) {
    if (!inKit(id)) setKit([...kit, id]);
  }
  function remove(id) {
    setKit(kit.filter((x) => x !== id));
  }
  function addBundle() {
    setKit([...kit, ...remaining]);
  }

  return (
    <div className="rounded-panel bg-navydeep p-6 shadow-panel ring-1 ring-white/10 sm:p-10">
      {/* Trip tabs */}
      <div className="flex flex-wrap items-center gap-2" role="radiogroup" aria-label="Trip type">
        <span className="mr-2 text-[13.5px] font-semibold text-sand/80">Trip type</span>
        {SPOTLIGHT_KITS.map((k) => (
          <button
            key={k.key}
            type="button"
            role="radio"
            aria-checked={tripKey === k.key}
            onClick={() => chooseTrip(k.key)}
            className={`rounded-pill px-4 py-2 text-[14px] font-semibold transition-colors ${
              tripKey === k.key ? 'bg-white text-navy' : 'border border-white/30 text-white hover:border-white'
            }`}
          >
            {k.label}
          </button>
        ))}
      </div>

      {/* Spotlight */}
      <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
        <img
          src={spot.img}
          alt={spot.alt}
          className="photo aspect-[4/3] w-full rounded-card object-cover"
        />
        <div>
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-brasslt">In the spotlight</p>
          <h3 className="mt-2 font-display text-[clamp(30px,3.4vw,42px)] font-semibold leading-[1.12] text-white">
            {spot.name}
          </h3>
          <p className="mt-3 text-[16.5px] leading-[1.55] text-sand/85">{spot.copy}</p>
          <p className="mt-4 text-[22px] font-semibold text-white">{money(spot.cents)}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              disabled={inKit(spot.id)}
              onClick={() => add(spot.id)}
              className={`rounded-pill px-5 py-2.5 text-[14.5px] font-semibold transition-colors ${
                inKit(spot.id)
                  ? 'cursor-default bg-white/15 text-sand/70'
                  : 'bg-white text-navy hover:bg-sand'
              }`}
            >
              {inKit(spot.id) ? 'In your kit ✓' : 'Add to kit'}
            </button>
            <a
              href={spot.url}
              className="rounded-pill border border-white/40 px-5 py-2.5 text-[14.5px] font-semibold text-white transition-colors hover:border-white"
            >
              Buy it now — {money(spot.cents)}
            </a>
          </div>
        </div>
      </div>

      {/* All sixteen picks */}
      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((p) => {
          const rec = trip.picks.includes(p.id);
          const added = inKit(p.id);
          return (
            <article
              key={p.id}
              className={`flex flex-col rounded-card border p-3 ${
                rec ? 'border-brasslt/60 bg-white/10' : 'border-white/10 bg-white/5'
              }`}
            >
              <button type="button" onClick={() => setSpotId(p.id)} aria-label={`See ${p.name} up close`} className="text-left">
                <img src={p.img} alt={p.alt} loading="lazy" className="photo aspect-[4/3] w-full rounded-[12px] object-cover" />
              </button>
              {rec && <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.04em] text-brasslt">Trip pick</p>}
              <h4 className="mt-1 text-[15px] font-semibold leading-[1.3] text-white">{p.name}</h4>
              <p className="mt-1 flex-1 text-[13.5px] leading-[1.5] text-sand/75">{p.copy}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[15px] font-semibold text-white">{money(p.cents)}</span>
                <button
                  type="button"
                  disabled={added}
                  onClick={() => add(p.id)}
                  className={`rounded-pill px-4 py-1.5 text-[13px] font-semibold transition-colors ${
                    added ? 'cursor-default bg-white/15 text-sand/70' : 'bg-white text-navy hover:bg-sand'
                  }`}
                >
                  {added ? 'In your kit ✓' : 'Add to kit'}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <button
        type="button"
        disabled={!remaining.length}
        onClick={addBundle}
        className={`mt-8 w-full rounded-pill px-6 py-3 text-[15px] font-semibold transition-colors ${
          !remaining.length ? 'cursor-default bg-white/15 text-sand/70' : 'bg-sand text-navy hover:bg-white'
        }`}
      >
        {!remaining.length
          ? `All ${trip.label} picks are in your kit ✓`
          : `${remaining.length === trip.picks.length ? 'Add all' : 'Add the remaining'} ${remaining.length} ${trip.label} ${
              remaining.length === 1 ? 'pick' : 'picks'
            } — ${money(bundleSum)}`}
      </button>

      {/* Tray */}
      <div className="mt-6 rounded-card bg-white/5 p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-[21px] font-semibold text-white">Your kit</h3>
          <p className="text-[15px] text-sand/85">
            Kit total <span className="text-[19px] font-semibold text-white">{money(total)}</span>
          </p>
        </div>
        {kit.length === 0 ? (
          <p className="mt-3 text-[15px] text-sand/75">
            Nothing in here yet. Pick a trip above and add the pieces that earn their space.
          </p>
        ) : (
          <>
            <ul className="mt-4 divide-y divide-white/10">
              {kit.map((id) => {
                const p = byId[id];
                return (
                  <li key={id} className="flex items-center gap-4 py-3">
                    <img src={p.img} alt="" className="photo h-[52px] w-[68px] rounded-[10px] object-cover" loading="lazy" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[15px] font-semibold text-white">{p.name}</p>
                      <p className="text-[13.5px] text-sand/75">{money(p.cents)}</p>
                    </div>
                    <a
                      href={p.url}
                      aria-label={`Buy ${p.name} for ${money(p.cents)} at secure Stripe checkout`}
                      className="rounded-pill bg-white px-4 py-1.5 text-[13px] font-semibold text-navy transition-colors hover:bg-sand"
                    >
                      Buy
                    </a>
                    <button
                      type="button"
                      onClick={() => remove(id)}
                      aria-label={`Remove ${p.name} from your kit`}
                      className="px-1 text-[20px] leading-none text-sand/70 transition-colors hover:text-white"
                    >
                      ×
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-[13.5px] text-sand/75">
              {kit.length} {kit.length === 1 ? 'item' : 'items'} — each checks out on its own secure Stripe page.
            </p>
          </>
        )}
        <p className="mt-2 text-[13.5px] text-sand/60">Checkout is per item — each opens secure Stripe checkout.</p>
      </div>
    </div>
  );
}
