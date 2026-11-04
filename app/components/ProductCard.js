import { money } from "../lib/data";

/** Catalog card — product huge, price plain, one Buy action on the exact
 *  Stripe link, one quiet Details link to the product page. */
export default function ProductCard({ p, giftLine }) {
  return (
    <article className="card-hover rv flex flex-col overflow-hidden rounded-card border border-linesoft bg-paper">
      <a href={`/products/${p.slug}`} className="block" aria-label={`${p.name} — details`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.img}
          alt={p.alt}
          width="1000"
          height="750"
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover"
        />
      </a>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.012em] text-ink">
          <a href={`/products/${p.slug}`} className="hover:text-accentdeep">{p.name}</a>
        </h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-t2">{giftLine || p.short}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-[17px] font-bold text-ink">{money(p.cents)}</span>
          <a
            href={p.stripe}
            className="btn btn-navy btn-small"
            aria-label={`Buy ${p.name} for ${money(p.cents)}`}
          >
            Buy
          </a>
        </div>
      </div>
    </article>
  );
}
