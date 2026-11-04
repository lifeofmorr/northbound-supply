import { money } from '@/lib/products';

// Paper card — elevation 2026-11-03. This card belongs ONLY to the light
// chapters (the extras shelf, the gift guide): white stock, ink type,
// squared-off catalogue feel that is deliberately different from the dark
// travel line's editorial plates. Photo, name, the product's own one-line
// copy, price, straight-to-Stripe Buy — content unchanged.
export default function ProductCard({ p }) {
  return (
    <article className="rv group flex flex-col overflow-hidden rounded-[4px] border border-ink/10 bg-white">
      <img src={p.img} alt={p.alt} loading="lazy" className="photo aspect-[4/3] w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[19px] font-semibold leading-[1.25] tracking-[-0.01em] text-ink">{p.name}</h3>
        <p className="mt-1.5 flex-1 text-[14.5px] leading-[1.55] text-ink2">{p.copy}</p>
        <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
          <span className="text-[16.5px] font-semibold text-ink">{money(p.cents)}</span>
          <a
            href={p.url}
            aria-label={`Buy ${p.name} for ${money(p.cents)}`}
            className="rounded-pill bg-navy px-5 py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-navydeep"
          >
            Buy
          </a>
        </div>
      </div>
    </article>
  );
}
