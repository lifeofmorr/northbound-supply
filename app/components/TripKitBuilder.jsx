'use client';
import { useState } from 'react';
import { TRIP_KITS, byId, money } from '@/lib/products';

// The live trip/party kit builder, ported faithfully: pick a trip type and
// who's going; the kit is assembled from the real collection (duo adds the
// partner extras); any item can be removed / added back; the total updates
// live; checkout stays per item through each product's own Stripe link.
const TRIP_KEYS = Object.keys(TRIP_KITS);

export default function TripKitBuilder() {
  const [tripKey, setTripKey] = useState('beach');
  const [party, setParty] = useState('solo');
  const [removed, setRemoved] = useState({});

  const recipe = TRIP_KITS[tripKey];
  const list = party === 'duo' ? [...recipe.base, ...recipe.duo] : [...recipe.base];
  const kept = list.filter((id) => !removed[id]);
  const total = kept.reduce((s, id) => s + byId[id].cents, 0);

  function reset(nextTrip, nextParty) {
    if (nextTrip) setTripKey(nextTrip);
    if (nextParty) setParty(nextParty);
    setRemoved({});
  }

  return (
    <div className="rounded-panel border border-line2 bg-ivory p-6 sm:p-10">
      <div className="grid gap-8 md:grid-cols-2">
        <fieldset>
          <legend className="text-[13.5px] font-semibold text-ink">Trip type</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {TRIP_KEYS.map((k) => (
              <button
                key={k}
                type="button"
                aria-pressed={tripKey === k}
                onClick={() => reset(k, null)}
                className={`rounded-pill px-4 py-2 text-[14px] font-semibold transition-colors ${
                  tripKey === k ? 'bg-navy text-white' : 'border border-line bg-white text-ink2 hover:border-navy hover:text-navy'
                }`}
              >
                {TRIP_KITS[k].label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-[13.5px] font-semibold text-ink">Party size</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              { key: 'solo', label: 'Just me' },
              { key: 'duo', label: 'Two of us' },
            ].map((o) => (
              <button
                key={o.key}
                type="button"
                aria-pressed={party === o.key}
                onClick={() => reset(null, o.key)}
                className={`rounded-pill px-4 py-2 text-[14px] font-semibold transition-colors ${
                  party === o.key ? 'bg-navy text-white' : 'border border-line bg-white text-ink2 hover:border-navy hover:text-navy'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((id) => {
          const p = byId[id];
          const off = !!removed[id];
          return (
            <article key={id} className={`rounded-card border border-line2 bg-white p-5 ${off ? 'opacity-55' : ''}`}>
              <h3 className="text-[16px] font-semibold leading-[1.3] text-ink">{p.name}</h3>
              <p className="mt-1 text-[16px] font-semibold text-navy">{money(p.cents)}</p>
              <div className="mt-4 flex gap-2">
                <a
                  href={p.url}
                  aria-label={`Buy ${p.name} for ${money(p.cents)}`}
                  className="rounded-pill bg-navy px-4 py-1.5 text-[13px] font-semibold text-white transition-colors hover:bg-navydeep"
                >
                  Buy
                </a>
                <button
                  type="button"
                  aria-pressed={off}
                  aria-label={`${off ? 'Add back' : 'Remove'} ${p.name}`}
                  onClick={() => setRemoved({ ...removed, [id]: !off })}
                  className="rounded-pill border border-line px-4 py-1.5 text-[13px] font-semibold text-ink2 transition-colors hover:border-navy hover:text-navy"
                >
                  {off ? 'Add back' : 'Remove'}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-8 text-[17px] text-ink">
        Kit total: <span className="font-semibold">{money(total)}</span>{' '}
        <span className="text-[14px] text-ink3">
          {kept.length
            ? `(${kept.length} of ${list.length} items in kit)`
            : '(kit empty — add an item back)'}
        </span>
      </p>
      <p className="mt-2 max-w-[640px] text-[14.5px] leading-[1.55] text-ink3">
        Each item checks out separately through its own secure payment link, so the total above is informational —
        there isn’t one combined checkout for a kit.
      </p>
    </div>
  );
}
