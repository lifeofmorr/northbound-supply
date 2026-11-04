"use client";
import { useState } from "react";
import { bySlug, money, KB_KITS } from "../lib/data";

/**
 * Kit builder — faithful React port of the live inline widget
 * ([data-widget="kit-builder"], also on gift-guide.html): trip type +
 * party size produce a recipe kit from the real collection; items can be
 * removed / added back; the total updates live. Recipes, copy and Stripe
 * links are the live values (catalog indexes mapped to slugs in lib/data).
 */
const TRIPS = [
  ["beach", "Beach"],
  ["city", "City"],
  ["adventure", "Adventure"],
  ["business", "Business"],
];

export default function KitBuilder() {
  const [trip, setTrip] = useState("beach");
  const [party, setParty] = useState("solo");
  const [removed, setRemoved] = useState({});

  const kit = KB_KITS[trip];
  const list = party === "duo" ? [...kit.base, ...kit.duo] : [...kit.base];
  const kept = list.filter((s) => !removed[s]);
  const total = kept.reduce((s, slug) => s + bySlug[slug].cents, 0);

  function reset(t, p) {
    if (t) setTrip(t);
    if (p) setParty(p);
    setRemoved({});
  }

  return (
    <div>
      <div className="flex flex-wrap gap-x-10 gap-y-5">
        <fieldset>
          <legend className="mb-2 text-[13.5px] font-semibold text-ink">Trip type</legend>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Trip type">
            {TRIPS.map(([v, label]) => (
              <label key={v} className="kb-pill tk-pill relative">
                <input type="radio" name="kb-trip" value={v} checked={trip === v} onChange={() => reset(v, null)} />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-2 text-[13.5px] font-semibold text-ink">Party size</legend>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Party size">
            <label className="kb-pill tk-pill relative">
              <input type="radio" name="kb-party" value="solo" checked={party === "solo"} onChange={() => reset(null, "solo")} />
              <span>Just me</span>
            </label>
            <label className="kb-pill tk-pill relative">
              <input type="radio" name="kb-party" value="duo" checked={party === "duo"} onChange={() => reset(null, "duo")} />
              <span>Two of us</span>
            </label>
          </div>
        </fieldset>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {list.map((slug) => {
          const p = bySlug[slug];
          const off = !!removed[slug];
          return (
            <article
              key={slug}
              className={`rounded-card border border-linesoft bg-paper p-5 ${off ? "opacity-55" : ""}`}
            >
              <h3 className="text-[16px] font-semibold leading-snug text-ink">{p.name}</h3>
              <p className="mt-1 text-[16px] font-bold text-ink">{money(p.cents)}</p>
              <div className="mt-4 flex gap-2">
                <a
                  href={p.stripe}
                  className="btn btn-navy btn-small"
                  aria-label={`Buy ${p.name} for ${money(p.cents)}`}
                >
                  Buy
                </a>
                <button
                  type="button"
                  className="btn btn-ghost btn-small"
                  aria-pressed={off}
                  aria-label={`${off ? "Add back" : "Remove"} ${p.name}`}
                  onClick={() => setRemoved({ ...removed, [slug]: !off })}
                >
                  {off ? "Add back" : "Remove"}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 border-t border-linesoft pt-5">
        <p className="text-[16px] text-t2">
          Kit total: <strong className="text-[20px] text-ink">{money(total)}</strong>{" "}
          <span className="text-[13.5px] text-t3">
            {kept.length
              ? `(${kept.length} of ${list.length} items in kit)`
              : "(kit empty — add an item back)"}
          </span>
        </p>
        <p className="mt-2 max-w-[68ch] text-[13.5px] leading-relaxed text-t3">
          Each item checks out separately through its own secure payment link, so the total
          above is informational — there isn&rsquo;t one combined checkout for a kit.
        </p>
      </div>
    </div>
  );
}
