import { money } from "../lib/data";

/**
 * Full product detail — the live products.html article, re-composed as an
 * editorial spread: photo huge on one side, honest bullets + shipping line +
 * the product's exact Stripe Buy button on the other. Copy is verbatim.
 */
export default function ProductDetail({ p, flip = false, anchor = true }) {
  return (
    <article
      id={anchor ? p.slug : undefined}
      className="rv grid scroll-mt-24 items-center gap-8 border-t border-linesoft py-12 first:border-t-0 md:grid-cols-2 md:py-14"
    >
      <a
        href={`/products/${p.slug}`}
        className={`block ${flip ? "md:order-2" : ""}`}
        aria-label={`${p.name} — product page`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.img}
          alt={p.alt}
          width="1000"
          height="750"
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full rounded-card object-cover"
        />
      </a>
      <div className={flip ? "md:order-1" : ""}>
        <h2 className="display text-[26px] font-semibold md:text-[30px]">
          <a href={`/products/${p.slug}`} className="hover:text-accentdeep">{p.name}</a>
        </h2>
        <p className="mt-2 text-[22px] font-bold text-ink">{money(p.cents)}</p>
        <ul className="mt-5 space-y-2.5">
          {p.bullets.map((b) => (
            <li key={b} className="border-t border-linesoft pt-2.5 text-[15px] leading-relaxed text-t2">
              {b}
            </li>
          ))}
        </ul>
        {p.note && (
          <p className="mt-5 rounded-sm2 bg-alt px-4 py-3 text-[14px] leading-relaxed text-t2">
            {p.note}
          </p>
        )}
        <p className="mt-5 text-[13.5px] leading-relaxed text-t3">
          Shipping: {p.shipping}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <a href={p.stripe} className="btn btn-navy">
            Buy — {money(p.cents)}
          </a>
          <a href={`/products/${p.slug}`} className="text-[14.5px] font-semibold text-accentdeep hover:text-ink">
            Product page
          </a>
        </div>
      </div>
    </article>
  );
}
