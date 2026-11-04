import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import Footer from '@/components/Footer';
import { Eyebrow, FinalCta, JsonLd } from '@/components/Sections';
import { GIFT_CATS, PHOTOS, SUPPORT_EMAIL, byId, money } from '@/lib/products';
import ldProducts from '@/content/ld-products.json';
import ldGift from '@/content/ld-gift-guide.json';

export const dynamicParams = false;

const PAGES = {
  'products.html': {
    title: 'Products — Northbound Supply Co.',
    description: 'Every Northbound Supply Co. product in detail: honest benefits, shipping notes and straight-to-checkout buying.',
    canonical: 'https://northboundsupply.net/products.html',
    ogImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80&auto=format&fit=crop',
  },
  'gift-guide.html': {
    title: 'Holiday Gift Guide 2026 — Northbound Supply Co.',
    description: 'Sixteen honest gift picks under $55: travel gear, home finds, grooming, car and pet gifts. Order by Dec 10 for Christmas delivery.',
    canonical: 'https://northboundsupply.net/gift-guide.html',
    ogImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80&auto=format&fit=crop',
  },
  'policies.html': {
    title: 'Policies — Northbound Supply Co.',
    description: 'Northbound Supply Co. shipping, returns, privacy and terms policies in plain language.',
    canonical: 'https://northboundsupply.net/policies.html',
    ogImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80&auto=format&fit=crop',
  },
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((page) => ({ page }));
}

export async function generateMetadata({ params }) {
  const { page } = await params;
  const m = PAGES[page];
  if (!m) return {};
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: m.canonical },
    openGraph: {
      siteName: 'Northbound Supply Co.',
      type: 'website',
      title: m.title,
      description: m.description,
      url: m.canonical,
      images: [m.ogImage],
    },
  };
}

/* ---------------- Products — a catalogue, in two chapters ----------------
   Elevation 2026-11-03: the 16-item spec-sheet list is gone. The travel
   line and the extras shelf get separate chapters with their own grounds;
   each entry leads with its photograph at catalogue scale, an index
   numeral, and Fraunces hierarchy. All detail copy is verbatim. */

const TRAVEL_IDS = ['packing-cubes', 'garment-duffel', 'dry-bag', 'phone-pouch', 'travel-towel', 'crossbody', 'tumbler', 'day-bag'];
const EXTRA_IDS = ['star-projector', 'kemei-trimmer', 'sunset-lamp', 'footwell-lights', 'flame-diffuser', 'cat-ball', 'magnetic-wristband', 'grooming-gloves'];

function CatalogueRow({ p, n, flip = false }) {
  return (
    <article className="rv grid items-center gap-10 lg:grid-cols-12">
      <img
        src={p.img}
        alt={p.alt}
        loading="lazy"
        className={`photo aspect-[16/10] w-full rounded-[4px] object-cover lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}
      />
      <div className="lg:col-span-5">
        <div className="flex items-baseline gap-4">
          <span className="font-display text-[15px] font-semibold text-brasslt">{n}</span>
          <h3 className="font-display text-[clamp(27px,3.2vw,38px)] font-semibold leading-[1.12] tracking-[-0.018em] text-sand">
            {p.name}
          </h3>
        </div>
        <p className="mt-3 font-display text-[20px] font-semibold text-sand">{money(p.cents)}</p>
        <p className="mt-3 text-[16.5px] leading-[1.6] text-sand/70">{p.detail.lead}</p>
        <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
          {p.detail.bullets.map((b) => (
            <li key={b} className="py-2.5 text-[14.5px] leading-[1.5] text-sand/75">{b}</li>
          ))}
        </ul>
        {p.detail.note && (
          <p className="mt-4 border-l-2 border-brasslt bg-white/5 p-4 text-[14.5px] leading-[1.55] text-sand/80">{p.detail.note}</p>
        )}
        <p className="mt-4 text-[13.5px] text-sand/45">{p.detail.ship}</p>
        <a
          href={p.url}
          aria-label={`Buy ${p.name} for ${money(p.cents)}`}
          className="mt-5 inline-block rounded-pill bg-sand px-7 py-3 text-[15px] font-semibold text-navy transition-colors hover:bg-white"
        >
          Buy — {money(p.cents)}
        </a>
      </div>
    </article>
  );
}

function ChapterHead({ index, title, count }) {
  return (
    <div className="rv flex flex-wrap items-end justify-between gap-4 border-b border-white/15 pb-6">
      <div>
        <Eyebrow>{index}</Eyebrow>
        <h2 className="mt-3 font-display text-[clamp(32px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.02em] text-sand">
          {title}
        </h2>
      </div>
      <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-sand/45">{count}</p>
    </div>
  );
}

function ProductsPage() {
  return (
    <>
      <JsonLd data={ldProducts} />
      {/* Photo-led head: the road photograph carries the page title */}
      <section className="relative overflow-hidden">
        <img
          src={PHOTOS.roadBand.src}
          alt={PHOTOS.roadBand.alt}
          loading="eager"
          fetchPriority="high"
          className="photo absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-deep/35" />
        <div className="relative mx-auto flex min-h-[68svh] max-w-shell flex-col justify-end px-6 pb-14 pt-36">
          <div className="rv max-w-[760px]">
            <Eyebrow>Product details</Eyebrow>
            <h1 className="mt-4 font-display text-[clamp(44px,6.4vw,84px)] font-semibold leading-[1.02] tracking-[-0.024em] text-sand text-balance">
              Every piece, in detail
            </h1>
            <p className="mt-5 max-w-[620px] text-[18.5px] leading-[1.55] text-sand/85">
              What each product does, what it doesn’t, and exactly how it ships. Every Buy button goes straight to
              secure checkout for that item.
            </p>
            <a href="/#travel-kit" className="mt-7 inline-block rounded-pill bg-sand px-7 py-3 text-[15px] font-semibold text-navy transition-colors hover:bg-white">
              Build your travel kit
            </a>
          </div>
        </div>
      </section>

      {/* Chapter 01 — the travel line */}
      <section className="mx-auto max-w-shell px-6 py-[88px]">
        <ChapterHead index="Chapter 01" title="The travel line" count="Eight pieces" />
        <div className="mt-16 space-y-20">
          {TRAVEL_IDS.map((id, i) => (
            <CatalogueRow key={id} p={byId[id]} n={String(i + 1).padStart(2, '0')} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Chapter 02 — the extras shelf, on its own ground */}
      <section className="bg-navy">
        <div className="mx-auto max-w-shell px-6 py-[88px]">
          <ChapterHead index="Chapter 02" title="The extras shelf" count="Eight pieces" />
          <div className="mt-16 space-y-20">
            {EXTRA_IDS.map((id, i) => (
              <CatalogueRow key={id} p={byId[id]} n={String(i + 9).padStart(2, '0')} flip={i % 2 === 0} />
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
      <Footer />
    </>
  );
}

/* ---------------- Gift guide ---------------- */

function GiftCard({ p }) {
  return (
    <article className="rv flex flex-col overflow-hidden rounded-[4px] border border-ink/10 bg-white">
      <img src={p.img} alt={p.alt} loading="lazy" className="photo aspect-[4/3] w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[19px] font-semibold leading-[1.25] tracking-[-0.01em] text-ink">
          {p.gift.name} — {money(p.cents)}
        </h3>
        <p className="mt-1.5 flex-1 text-[14.5px] leading-[1.55] text-ink2">{p.gift.forLine}</p>
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

function GiftGuidePage() {
  return (
    <>
      <JsonLd data={ldGift} />
      <section className="relative overflow-hidden">
        <img
          src={PHOTOS.flatlayBand.src}
          alt={PHOTOS.flatlayBand.alt}
          loading="eager"
          fetchPriority="high"
          className="photo absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-deep/35" />
        <div className="relative mx-auto flex min-h-[72svh] max-w-shell flex-col justify-end px-6 pb-14 pt-36">
          <div className="rv max-w-[820px]">
            <Eyebrow>Holiday gift guide 2026</Eyebrow>
            <h1 className="mt-4 font-display text-[clamp(44px,6.4vw,84px)] font-semibold leading-[1.02] tracking-[-0.024em] text-sand text-balance">
              Gifts people actually use. <span className="text-brasslt">Nothing over $55.</span>
            </h1>
            <p className="mt-5 max-w-[640px] text-[18.5px] leading-[1.55] text-sand/85">
              Every pick below is stocked, shipping-verified, and priced on the page — no fake list prices, no
              countdown timers. Order by Dec 10 for Christmas delivery (the KEMEI trimmer by Dec 9 — it ships a
              little slower). After those dates, we’ll still take your order, but we won’t promise Christmas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/#travel-kit" className="rounded-pill bg-sand px-7 py-3 text-[15px] font-semibold text-navy transition-colors hover:bg-white">
                Build your travel kit
              </a>
              <a href="/products.html" className="rounded-pill border border-sand/40 px-7 py-3 text-[15px] font-semibold text-sand transition-colors hover:border-sand">
                See every product
              </a>
            </div>
            <p className="mt-7 text-[13.5px] text-sand/60">
              Free returns window: 30 days · Tracking emailed on every order · Checkout takes about a minute
            </p>
          </div>
        </div>
      </section>

      {GIFT_CATS.map((cat, ci) => (
        <section key={cat.key} className={ci % 2 ? 'bg-navy' : ''}>
          <div className="mx-auto max-w-shell px-6 py-[88px]">
            <div className="rv max-w-[760px]">
              <Eyebrow>{cat.sub}</Eyebrow>
              <h2 className="mt-3 font-display text-[clamp(32px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.02em] text-sand">
                {cat.title}
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cat.order.map((id) => (
                <GiftCard key={id} p={byId[id]} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-shell px-6 py-[88px]">
        <div className="rv max-w-[760px]">
          <p className="text-[17.5px] leading-[1.6] text-sand/75">
            Buying for someone impossible? The full product pages show exactly what each item does and doesn’t do — no
            surprises on Christmas morning. Questions:{' '}
            <a className="font-semibold text-brasslt underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
        </div>
        <div className="rv mt-12 rounded-[4px] bg-navy p-8 ring-1 ring-white/10 sm:p-12">
          <Eyebrow dark>Interactive kit builder</Eyebrow>
          <h2 className="mt-3 font-display text-[clamp(28px,3.4vw,42px)] font-semibold leading-[1.12] text-sand">
            Build your travel kit
          </h2>
          <p className="mt-3 max-w-[620px] text-[16.5px] leading-[1.55] text-sand/75">
            Pick a trip, tap a product to see it up close, and add the pieces that earn their space — your kit
            total builds as you go.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/#travel-kit" className="rounded-pill bg-sand px-7 py-3 text-[15px] font-semibold text-navy transition-colors hover:bg-white">
              Build your travel kit
            </a>
            <a href="/products.html" className="rounded-pill border border-sand/40 px-7 py-3 text-[15px] font-semibold text-sand transition-colors hover:border-sand">
              See every product
            </a>
          </div>
        </div>
      </section>
      <Footer
        thirdShop={{ label: 'Gift guide', href: '/gift-guide.html' }}
        legal="© 2026 Northbound Supply Co. All prices USD. Order by Dec 10 for Christmas delivery (KEMEI trimmer by Dec 9). 30-day returns on unused items."
      />
    </>
  );
}

/* ---------------- Policies ---------------- */

const POLICY_SECTIONS = [
  {
    id: 'shipping',
    title: 'Shipping policy',
    paras: [
      'Orders are processed and shipped within 5–10 business days of your order confirmation. Every order includes tracking, and your tracking details are emailed to the address you used at checkout as soon as your order is on its way.',
      'Shipping is currently available within the United States. Delivery times after dispatch depend on your carrier and location; the 5–10 business day window above is our honest end-to-end estimate for most orders, not a best-case promise. Weather, carrier delays and peak holiday volumes can add time — if that happens, your tracking page is the most current source, and you can always email us.',
      "Please double-check your shipping address at checkout. We ship to the address provided and can't redirect a parcel once it has left.",
    ],
  },
  {
    id: 'returns',
    title: 'Returns & exchanges',
    paras: [
      'You have 30 days from delivery to return any item that is unused, unworn and in its original condition.',
      'Standard returns: you cover the return postage. Refunds are issued to your original payment method once the item arrives and passes a quick condition check, normally within 5 business days of receipt.',
      "Defective or damaged items: on us. If something arrives defective or damaged, email us a photo within the 30-day window and we'll cover return postage and send a replacement or a full refund — your choice.",
      "To start a return, email donmondemorrison+northbound@gmail.com with your order email and the item you'd like to return, and we'll reply with instructions. Please don't send items back without contacting us first — we can't match an unannounced parcel to your order.",
      'For hygiene reasons, the waterproof phone pouch must be unopened to qualify as a standard return (defective items are always covered, opened or not).',
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy policy (short form)',
    paras: [
      'We collect only what we need to take your order and deliver it: your name, email, shipping address and payment details. Payment is processed by our payment processor — your full card details never sit on our servers.',
      'We use your email to send your receipt, tracking updates and, if you ask for them, occasional product news. We do not sell your personal information. Analytics on this site are aggregate and used to improve the store.',
      "You can ask us at any time what information we hold about you, or ask us to delete it, by emailing donmondemorrison+northbound@gmail.com. We'll action requests within 30 days.",
    ],
  },
  {
    id: 'terms',
    title: 'Terms (short form)',
    paras: [
      "Prices are shown in USD and are final at checkout; any applicable tax is calculated there. A product listing is an offer to sell at the stated price — if a genuine pricing error slips through, we'll contact you before shipping and offer a correction or a full refund.",
      'Product descriptions are written to be accurate and honest, including limitations (for example, no waterproof pouch can guarantee a phone). Product photos on this site are representative imagery; the item you receive matches the description and specifications on its product page.',
      'These short-form terms sit alongside consumer protections in your jurisdiction — nothing here removes a right the law gives you.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paras: [
      "Questions about an order, a return or anything above: donmondemorrison+northbound@gmail.com. We reply within two business days.",
    ],
  },
];

function PoliciesPage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-shell px-6 pb-10 pt-[84px]">
          <div className="rv max-w-[760px]">
            <Eyebrow>Policies</Eyebrow>
            <h1 className="mt-4 font-display text-[clamp(40px,5.6vw,68px)] font-semibold leading-[1.05] tracking-[-0.024em] text-sand text-balance">
              The fine print, minus the fine-print games
            </h1>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-shell px-6 pb-[96px] pt-6">
        <div className="max-w-[780px]">
          {POLICY_SECTIONS.map((s) => (
            <div key={s.id} id={s.id} className="rv scroll-mt-24 border-t border-white/10 py-10">
              <h2 className="font-display text-[clamp(25px,3vw,34px)] font-semibold text-sand">{s.title}</h2>
              {s.paras.map((p) => (
                <p key={p.slice(0, 24)} className="mt-4 text-[16.5px] leading-[1.65] text-sand/70">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

/* ---------------- Route ---------------- */

export default async function Page({ params }) {
  const { page } = await params;
  return (
    <>
      <Reveal />
      {page === 'products.html' && <ProductsPage />}
      {page === 'gift-guide.html' && <GiftGuidePage />}
      {page === 'policies.html' && <PoliciesPage />}
      {!PAGES[page] && notFound()}
    </>
  );
}
