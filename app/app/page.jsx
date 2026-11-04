import Reveal from '@/components/Reveal';
import Footer from '@/components/Footer';
import KitBuilder from '@/components/KitBuilder';
import Faq from '@/components/Faq';
import ProductCard from '@/components/ProductCard';
import { Eyebrow, SectionHead, PhotoBand, TrustBar, FinalCta, JsonLd } from '@/components/Sections';
import { TRAVEL_COLLECTION, HOLIDAY_PICKS, SPOTLIGHT_KITS, PHOTOS, byId, money } from '@/lib/products';
import ldIndex from '@/content/ld-index.json';

export const metadata = {
  title: 'Northbound Supply Co. — Pack lighter. Go further.',
  description:
    'Premium travel goods, honestly priced. Packing cubes, garment duffels, dry bags and carry-on essentials with transparent shipping times and 30-day returns.',
  // Canonical is rendered as an explicit <link> in the page (below): Next's
  // metadata pipeline normalizes the root URL to the no-slash form, while
  // the live site declares https://northboundsupply.net/ — preserved exactly.
  openGraph: {
    siteName: 'Northbound Supply Co.',
    type: 'website',
    title: 'Northbound Supply Co. — Pack lighter. Go further.',
    description:
      'Premium travel goods, honestly priced. Packing cubes, garment duffels, dry bags and carry-on essentials with transparent shipping times and 30-day returns.',
    url: 'https://northboundsupply.net/',
    images: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80&auto=format&fit=crop'],
  },
};

const duffel = byId['garment-duffel'];

// The travel line on the homepage: the duffel is the featured spread above,
// so the catalogue below carries the other seven — every product appears
// once per page, with a purpose (elevation 2026-11-03, duplication cut).
const TRAVEL_LINE = TRAVEL_COLLECTION.filter((id) => id !== 'garment-duffel');

const KIT_NARRATIVES = [
  {
    title: 'Boat Day Kit',
    intro: 'Start with the Convertible Garment Duffel for the dock-to-dinner change of clothes, then round out the kit:',
    items: ['dry-bag', 'phone-pouch', 'travel-towel'],
    outro: 'Add the Dry Bag, Pouch and Towel from the shop grid above to complete the kit.',
  },
  {
    title: 'Carry-On Kit',
    intro: 'One bag, one week, no checked luggage. Start with the Garment Duffel, then pack it properly:',
    items: ['packing-cubes', 'crossbody', 'day-bag'],
    outro: 'Add the Cubes, Crossbody and Day Bag from the shop grid above to complete the kit.',
  },
];

const WHY = [
  {
    title: 'Curated, not catalogued',
    body: 'A short travel list, each piece picked because it solves a real packing problem — plus a small holiday shelf each season. When a piece stops earning its place, it leaves. The list stays short on purpose.',
  },
  {
    title: 'Transparent shipping times',
    body: 'Orders ship in 5–10 business days and tracking is emailed the moment your order is on its way. We print the timeline on every page instead of hiding it in fine print.',
  },
  {
    title: '30-day returns',
    body: "Changed your mind? Return any unused item within 30 days. Defective gear is on us — we'll make it right, including the return postage.",
  },
];

// Editorial plate for the travel line: index numeral, graded photograph,
// Fraunces name, the product's own line, price + Buy. No boxes, no cards —
// a catalogue, not a card grid.
function TravelPlate({ p, n, wide = false }) {
  return (
    <article className={`rv ${wide ? 'lg:col-span-2' : ''}`}>
      <img
        src={p.img}
        alt={p.alt}
        loading="lazy"
        className={`photo w-full rounded-[4px] object-cover ${wide ? 'aspect-[16/8]' : 'aspect-[4/3]'}`}
      />
      <div className="flex items-start gap-5 pt-5">
        <span className="pt-1 font-display text-[15px] font-semibold text-brasslt">{n}</span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-[23px] font-semibold leading-[1.2] tracking-[-0.012em] text-sand">{p.name}</h3>
          <p className="mt-1.5 max-w-[440px] text-[15px] leading-[1.55] text-sand/60">{p.copy}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-[17px] font-semibold text-sand">{money(p.cents)}</p>
          <a
            href={p.url}
            aria-label={`Buy ${p.name} for ${money(p.cents)}`}
            className="mt-2 inline-block rounded-pill border border-sand/30 px-5 py-1.5 text-[13.5px] font-semibold text-sand transition-colors hover:bg-sand hover:text-navy"
          >
            Buy
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <link rel="canonical" href="https://northboundsupply.net/" />
      <Reveal />
      <JsonLd data={ldIndex} />

      {/* Hero — photo-led from the first screen (elevation 2026-11-03):
          the lake photograph IS the hero; type rides on it. */}
      <section className="relative overflow-hidden">
        <img
          src={PHOTOS.heroBand.src}
          alt={PHOTOS.heroBand.alt}
          loading="eager"
          fetchPriority="high"
          className="photo absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/25 to-deep/30" />
        <div className="relative mx-auto flex min-h-[calc(100svh-57px)] max-w-shell flex-col justify-end px-6 pb-16 pt-40">
          <div className="rv max-w-[900px]">
            <Eyebrow>Premium travel goods</Eyebrow>
            <h1 className="mt-5 font-display text-[clamp(54px,8.6vw,118px)] font-semibold leading-[0.98] tracking-[-0.024em] text-sand text-balance">
              Pack lighter. <span className="text-brasslt">Go further.</span>
            </h1>
            <p className="mt-6 max-w-[560px] text-[18.5px] leading-[1.55] text-sand/85">
              Carry-on essentials chosen one at a time — no warehouse of lookalike gadgets, no inflated list prices.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="/products.html" className="rounded-pill bg-sand px-7 py-3 text-[15px] font-semibold text-navy transition-colors hover:bg-white">
                Shop the collection
              </a>
              <a href="/#travel-kit" className="rounded-pill border border-sand/40 px-7 py-3 text-[15px] font-semibold text-sand transition-colors hover:border-sand">
                Build your travel kit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto + the store's own facts */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-shell px-6 pt-16">
          <p className="rv max-w-[880px] font-display text-[clamp(26px,3.4vw,40px)] font-medium leading-[1.25] tracking-[-0.015em] text-sand">
            Just the gear that earns its space in your bag, at the price printed on the page.
          </p>
        </div>
        <div className="mx-auto max-w-shell px-6 pb-4 pt-8">
          <TrustBar
            items={[
              { value: 'Ships in 5–10 business days', label: 'Shipping' },
              { value: 'Tracking emailed on every order', label: 'Tracking' },
              { value: '30-day returns', label: 'Returns' },
            ]}
          />
        </div>
      </section>

      {/* Featured hero piece — the one true product photograph, at scale */}
      <section className="mx-auto max-w-shell px-6 py-[104px]">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <img
            src={duffel.img}
            alt={duffel.alt}
            loading="lazy"
            className="photo rv aspect-[4/3] w-full rounded-[4px] object-cover lg:col-span-7"
          />
          <div className="rv lg:col-span-5">
            <Eyebrow>Featured — the hero piece</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(34px,4.2vw,52px)] font-semibold leading-[1.08] tracking-[-0.02em] text-sand">
              Convertible Garment Duffel
            </h2>
            <p className="mt-5 text-[17.5px] leading-[1.6] text-sand/70">
              Starts as a garment bag that keeps a suit or dress flat and crease-free, then zips into a full carry-on
              duffel. One bag for the wedding weekend and the red-eye home.
            </p>
            <ul className="mt-7 divide-y divide-white/10 border-y border-white/10">
              {[
                'Garment section holds one suit or two dresses, flat',
                'Zips into a duffel sized for major airline carry-on sizers',
                'Separate shoe pocket keeps soles off clean clothes',
                'Trolley sleeve slides over a rolling case handle',
              ].map((f) => (
                <li key={f} className="py-3 text-[15.5px] text-sand/80">{f}</li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <span className="font-display text-[26px] font-semibold text-sand">{money(duffel.cents)}</span>
              <a href={duffel.url} className="rounded-pill bg-sand px-7 py-3 text-[15px] font-semibold text-navy transition-colors hover:bg-white">
                Buy the Garment Duffel
              </a>
            </div>
            <p className="mt-3 text-[13.5px] text-sand/50">Ships in 5–10 business days. 30-day returns on unused items.</p>
          </div>
        </div>
      </section>

      {/* THE kit builder — one builder, one kit truth (paper chapter).
          The second, contradictory trip builder was removed in the
          elevation; this spotlight builder is the single kit experience. */}
      <section id="travel-kit" className="scroll-mt-20 bg-sand py-[104px] text-ink">
        <div className="mx-auto max-w-shell px-6">
          <SectionHead
            tone="paper"
            eyebrow="Interactive kit builder"
            title="Build your travel kit"
            lead="The hands-on way to shop the collection: pick a trip, tap a product to see it up close, tap Add to put it in your kit. Your total builds as you go — then check out item by item, each through its own secure Stripe page."
          />
          <div className="rv mt-12">
            <KitBuilder />
          </div>
          <noscript>
            <div className="mt-8 rounded-[4px] border border-ink/10 bg-white p-6 sm:p-8">
              <p className="text-[15.5px] leading-[1.6] text-ink2">
                The interactive builder needs JavaScript — here are the same kits as simple lists. Every Buy button
                goes straight to secure checkout for that item, so a kit is completed one item at a time.
              </p>
              {SPOTLIGHT_KITS.map((k) => {
                const sum = k.picks.reduce((s, id) => s + byId[id].cents, 0);
                return (
                  <div key={k.key} className="mt-6">
                    <h3 className="text-[17px] font-semibold text-ink">
                      {k.label} — {money(sum)}
                    </h3>
                    <ul className="mt-2 space-y-1.5">
                      {k.picks.map((id) => (
                        <li key={id} className="text-[15px] text-ink2">
                          {byId[id].name} — {money(byId[id].cents)}{' '}
                          <a className="font-semibold text-navy underline" href={byId[id].url}>Buy</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </noscript>
        </div>
      </section>

      {/* The travel collection — editorial catalogue plates */}
      <section className="mx-auto max-w-shell px-6 py-[104px]">
        <SectionHead
          eyebrow="The collection"
          title="The travel collection"
          lead="Eight pieces a frequent traveler actually re-packs trip after trip — plus a small holiday shelf below, held to the same standard. Prices are final — what you see is what you pay at checkout, plus tax where it applies."
        />
        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-2">
          {TRAVEL_LINE.map((id, i) => (
            <TravelPlate key={id} p={byId[id]} n={String(i + 1).padStart(2, '0')} wide={i === 0} />
          ))}
        </div>
      </section>

      <PhotoBand photo={PHOTOS.lakeBand} />

      {/* Kits narrative — editorial chapters, no re-gridded products */}
      <section id="kits" className="scroll-mt-20 py-[104px]">
        <div className="mx-auto max-w-shell px-6">
          <SectionHead
            eyebrow="Kits"
            title="Built for the trip you're actually taking"
            lead="Start with the hero piece, then add the rest of the kit at checkout or from the product pages — every item ships under the same 5–10 business day window and the same 30-day return promise."
          />
          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_360px]">
            <div className="grid gap-12 md:grid-cols-2">
              {KIT_NARRATIVES.map((kit) => (
                <article key={kit.title} className="rv border-t-2 border-sand/70 pt-6">
                  <h3 className="font-display text-[26px] font-semibold text-sand">{kit.title}</h3>
                  <p className="mt-3 text-[15.5px] leading-[1.6] text-sand/70">{kit.intro}</p>
                  <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
                    {kit.items.map((id) => (
                      <li key={id} className="flex items-baseline justify-between gap-3 py-3 text-[14.5px]">
                        <span className="text-sand/80">{byId[id].name}</span>
                        <span className="font-semibold text-sand">{money(byId[id].cents)}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={duffel.url} className="mt-6 inline-block rounded-pill bg-sand px-6 py-2.5 text-[14px] font-semibold text-navy transition-colors hover:bg-white">
                    Start with the Duffel — {money(duffel.cents)}
                  </a>
                  <p className="mt-3 text-[13.5px] text-sand/50">{kit.outro}</p>
                </article>
              ))}
            </div>
            <img
              src={PHOTOS.wingDetail.src}
              alt={PHOTOS.wingDetail.alt}
              loading="lazy"
              className="photo rv hidden aspect-[3/4] w-full rounded-[4px] object-cover lg:block"
            />
          </div>
        </div>
      </section>

      {/* The extras shelf — the holiday lane, visually divorced from the
          premium travel story: paper ground, squared catalogue cards, its
          own chapter furniture. (This chapter replaces the removed second
          kit builder's section.) */}
      <section className="bg-sand py-[104px] text-ink">
        <div className="mx-auto max-w-shell px-6">
          <div className="rv flex items-baseline justify-between gap-4 border-y-2 border-ink/70 py-3">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-ink">The extras shelf</p>
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-ink/60">Small finds · stocking-grade</p>
          </div>
          <div className="mt-12">
            <SectionHead
              tone="paper"
              eyebrow="Holiday picks"
              title="Gifts that still ship in time"
              lead="Eight seasonal finds, checked one by one before listing. Order by Dec 10 for Christmas delivery — the trimmer by Dec 9. After those dates we won't promise Christmas, and neither should anyone else."
            />
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOLIDAY_PICKS.map((id) => (
              <ProductCard key={id} p={byId[id]} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Northbound — statements, not cards */}
      <section className="py-[104px]">
        <div className="mx-auto max-w-shell px-6">
          <SectionHead eyebrow="Why Northbound" title="Honest gear, honestly sold" />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {WHY.map((w) => (
              <article key={w.title} className="rv border-t border-white/15 pt-6">
                <h3 className="font-display text-[22px] font-semibold tracking-[-0.012em] text-sand">{w.title}</h3>
                <p className="mt-3 text-[15.5px] leading-[1.65] text-sand/65">{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Good to know + FAQ */}
      <section className="mx-auto max-w-shell px-6 pb-[104px]">
        <SectionHead
          eyebrow="Good to know"
          title="Shipping & returns, in plain English"
          lead={
            <>
              Shipping takes 5–10 business days with tracking emailed to you. Returns are open for 30 days on unused
              items — you cover return postage unless the item arrived defective. Full detail lives on our{' '}
              <a className="font-semibold text-brasslt underline" href="/policies.html">policies page</a>.
            </>
          }
        />
        <div className="rv mt-12">
          <Faq />
        </div>
      </section>

      <FinalCta />
      <Footer
        legal="© 2026 Northbound Supply Co. All prices USD. Shipping 5–10 business days on most items — see product pages for exact windows; 30-day returns on unused items. This storefront sells direct — checkout is handled securely by our payment processor."
      />
    </>
  );
}
