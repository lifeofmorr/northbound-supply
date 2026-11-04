"use client";
import { useMemo, useState } from "react";
import { PRODUCTS, bySlug, money, TK_BUNDLES, TK_LABELS } from "../lib/data";

/**
 * Travel-kit builder — faithful React port of the live widget's commerce
 * logic (main.js [data-widget="travel-kit"]): trip tabs, spotlight product,
 * add/remove tray with running total, "add all picks" bundle button, and
 * per-item checkout through each product's own Stripe link.
 * Deliberate variance: the live widget's 3D tilt / fly-to-tray effects are
 * NOT ported — ENTERPRISE-DESIGN-STANDARD §7 bans tilt on cards and §9
 * allows reveal motion only. All prices, links, labels and totals are the
 * live values.
 */
export default function TravelKit() {
  const [trip, setTrip] = useState("beach");
  const [spotId, setSpotId] = useState("dry-bag");
  const [kit, setKit] = useState([]);

  const spot = bySlug[spotId];
  const picks = TK_BUNDLES[trip];
  const remaining = picks.filter((id) => !kit.includes(id));
  const total = kit.reduce((s, id) => s + bySlug[id].cents, 0);

  const bundleLabel = !remaining.length
    ? `All ${TK_LABELS[trip]} picks are in your kit ✓`
    : `${remaining.length === picks.length ? "Add all " : "Add the remaining "}${remaining.length} ${TK_LABELS[trip]}${remaining.length === 1 ? " pick" : " picks"} — ${money(remaining.reduce((s, id) => s + bySlug[id].cents, 0))}`;

  function changeTrip(t) {
    setTrip(t);
    setSpotId(TK_BUNDLES[t][0]);
  }
  function add(id) {
    if (!kit.includes(id)) setKit([...kit, id]);
  }

  return (
    <div className="rounded-panel bg-panel p-6 shadow-panel md:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow eyebrow-dark">Interactive · Kit builder</p>
          <h2 className="display mt-2 text-[29px] font-semibold text-ondark md:text-[36px]">
            Build your travel kit
          </h2>
          <p className="mt-3 max-w-[62ch] text-[15.5px] leading-relaxed text-ondark2">
            The hands-on way to shop the collection: pick a trip, tap a product to see it up
            close, tap Add and it lands in your kit. Your total builds as you go — then check
            out item by item, each through its own secure Stripe checkout.
          </p>
        </div>
        <fieldset>
          <legend className="mb-2 text-[13px] font-semibold text-ondark2">Trip type</legend>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Trip type">
            {Object.keys(TK_BUNDLES).map((t) => (
              <label key={t} className="kb-pill relative">
                <input
                  type="radio"
                  name="tk-trip"
                  value={t}
                  checked={trip === t}
                  onChange={() => changeTrip(t)}
                />
                <span>{TK_LABELS[t]}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Spotlight */}
      <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={spot.img}
            alt={spot.alt}
            width="1000"
            height="750"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow eyebrow-dark">In the spotlight</p>
          <h3 className="display mt-2 text-[26px] font-semibold text-ondark">{spot.name}</h3>
          <p className="mt-3 text-[15.5px] leading-relaxed text-ondark2">{spot.short}</p>
          <p className="mt-4 text-[24px] font-bold text-ondark">{money(spot.cents)}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn btn-primary"
              disabled={kit.includes(spotId)}
              onClick={() => add(spotId)}
            >
              {kit.includes(spotId) ? "In your kit ✓" : "Add to kit"}
            </button>
            <a href={spot.stripe} className="btn btn-ghost-dark">
              Buy it now — {money(spot.cents)}
            </a>
          </div>
          <button
            type="button"
            className="btn btn-primary mt-4 w-full md:w-auto"
            disabled={!remaining.length}
            onClick={() => setKit([...kit, ...remaining])}
          >
            {bundleLabel}
          </button>
        </div>
      </div>

      {/* All 16 picks */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((p) => {
          const isRec = picks.includes(p.slug);
          const inKit = kit.includes(p.slug);
          return (
            <article
              key={p.slug}
              className={`rounded-card border bg-inkdeep/40 p-4 ${isRec ? "border-accent" : "border-linedark"}`}
            >
              <button type="button" className="block w-full text-left" onClick={() => setSpotId(p.slug)} aria-label={`See ${p.name} up close`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.alt} width="1000" height="750" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-sm2 object-cover" />
                <span className="mt-3 block text-[15px] font-semibold leading-snug text-ondark">{p.name}</span>
                <span className="mt-1 block text-[13.5px] leading-relaxed text-ondark2">{p.short}</span>
              </button>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[15px] font-bold text-ondark">{money(p.cents)}</span>
                {isRec && <span className="text-[12px] font-semibold uppercase tracking-wide text-accent">Trip pick</span>}
              </div>
              <button
                type="button"
                className="btn btn-ghost-dark btn-small mt-3 w-full"
                disabled={inKit}
                onClick={() => add(p.slug)}
              >
                {inKit ? "In your kit ✓" : "Add to kit"}
              </button>
            </article>
          );
        })}
      </div>

      {/* Tray */}
      <div className="mt-10 rounded-card border border-linedark bg-inkdeep/40 p-5" aria-live="polite">
        <h3 className="text-[16px] font-semibold text-ondark">Your kit</h3>
        {kit.length === 0 ? (
          <p className="mt-2 text-[14.5px] text-ondark2">
            Nothing in here yet. Pick a trip above and add the pieces that earn their space.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-linedark">
            {kit.map((id) => {
              const p = bySlug[id];
              return (
                <li key={id} className="flex items-center gap-4 py-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt="" width="104" height="78" loading="lazy" className="h-[52px] w-[69px] rounded-sm2 object-cover" />
                  <span className="flex-1">
                    <span className="block text-[14.5px] font-semibold text-ondark">{p.name}</span>
                    <span className="block text-[13.5px] text-ondark2">{money(p.cents)}</span>
                  </span>
                  <a href={p.stripe} className="btn btn-primary btn-small" aria-label={`Buy ${p.name} for ${money(p.cents)} at secure Stripe checkout`}>
                    Buy
                  </a>
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-pill border border-linedark text-[18px] text-ondark2 hover:text-ondark"
                    aria-label={`Remove ${p.name} from your kit`}
                    onClick={() => setKit(kit.filter((x) => x !== id))}
                  >
                    ×
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 border-t border-linedark pt-4">
          <p className="text-[15px] text-ondark2">
            Kit total <strong className="ml-2 text-[20px] text-ondark">{money(total)}</strong>
          </p>
          <p className="text-[13px] text-ondark2">
            {kit.length
              ? `${kit.length} ${kit.length === 1 ? "item" : "items"} — each checks out on its own secure Stripe page.`
              : "Checkout is per item — each opens secure Stripe checkout."}
          </p>
        </div>
      </div>
    </div>
  );
}
