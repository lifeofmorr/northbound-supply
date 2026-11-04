import { PHOTOS } from '@/lib/products';

// Shared section furniture — elevation 2026-11-03. The site is dark-first:
// `tone="dark"` (default) sets sand type on the deep navy ground;
// `tone="paper"` is the light chapter treatment (builder + extras shelf)
// that deliberately breaks the rhythm. Copy passed in is unchanged from
// the live site; only presentation moved.
export function Eyebrow({ children, tone = 'dark', dark = false }) {
  const t = dark ? 'dark' : tone;
  return (
    <p
      className={`text-[12.5px] font-semibold uppercase tracking-[0.18em] ${
        t === 'paper' ? 'text-brass' : 'text-brasslt'
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHead({ eyebrow, title, lead, tone = 'dark', dark = false, children }) {
  const t = dark ? 'dark' : tone;
  const paper = t === 'paper';
  return (
    <div className="rv max-w-[760px]">
      {eyebrow && <Eyebrow tone={t}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 font-display text-[clamp(34px,4.4vw,54px)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance ${
          paper ? 'text-ink' : 'text-sand'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-[17.5px] leading-[1.6] ${paper ? 'text-ink2' : 'text-sand/70'}`}>{lead}</p>
      )}
      {children}
    </div>
  );
}

// Full-bleed photography band: the photo is the design — no text on it.
// Scenery lives here, as atmosphere, instead of posing as product shots.
export function PhotoBand({ photo, eager = false, h = 'h-[64vh] min-h-[380px]' }) {
  return (
    <section className="rv relative overflow-hidden">
      <img
        src={photo.src}
        alt={photo.alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        className={`photo w-full object-cover ${h}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-deep/35 via-transparent to-deep/35" />
    </section>
  );
}

// Trust strip: the store's own facts only — value + label, hairline-divided.
export function TrustBar({ items }) {
  return (
    <div className="rv grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {items.map((it) => (
        <div key={it.label} className="px-2 py-7 sm:px-8">
          <p className="text-[17px] font-semibold text-sand">{it.value}</p>
          <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-sand/45">{it.label}</p>
        </div>
      ))}
    </div>
  );
}

// Closing band: photo-led, and it does NOT repeat the hero headline —
// the elevation removed the verbatim hero/closing/footer triple.
export function FinalCta() {
  return (
    <section className="rv relative overflow-hidden">
      <img
        src={PHOTOS.roadBand.src}
        alt={PHOTOS.roadBand.alt}
        loading="lazy"
        className="photo absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-deep/70" />
      <div className="relative mx-auto max-w-shell px-6 py-[110px] text-center">
        <h2 className="mx-auto max-w-[680px] font-display text-[clamp(36px,4.6vw,58px)] font-semibold leading-[1.08] tracking-[-0.02em] text-sand text-balance">
          Gear that earns its space.
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[17.5px] leading-[1.6] text-sand/80">
          Carry-on essentials chosen one at a time, at the price printed on the page. Ships in 5–10 business
          days, with 30-day returns.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="/products.html" className="rounded-pill bg-sand px-7 py-3 text-[15px] font-semibold text-navy transition-colors hover:bg-white">
            Shop the collection
          </a>
          <a href="/gift-guide.html" className="rounded-pill border border-sand/40 px-7 py-3 text-[15px] font-semibold text-sand transition-colors hover:border-sand">
            Gift guide
          </a>
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
