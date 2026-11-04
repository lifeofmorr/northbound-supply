import TravelKit from "../components/TravelKit";
import KitBuilder from "../components/KitBuilder";
import ProductCard from "../components/ProductCard";
import Faq from "../components/Faq";
import { PRODUCTS, bySlug, money, travel, holiday, STATIC_KITS } from "../lib/data";

const HERO_IMG =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80&auto=format&fit=crop";
const duffel = bySlug["garment-duffel"];

function jsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Northbound Supply Co. Products",
    itemListElement: PRODUCTS.map((p) => ({
      "@type": "Product",
      name: p.name,
      image: p.img.replace("w=1000", "w=900"),
      description: p.bullets[0],
      offers: {
        "@type": "Offer",
        price: (p.cents / 100).toFixed(2),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: p.stripe,
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "US",
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 30,
          returnMethod: "https://schema.org/ReturnByMail",
          returnFees: "https://schema.org/ReturnFeesCustomerResponsibility",
        },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: { "@type": "QuantitativeValue", minValue: 5, maxValue: 10, unitCode: "DAY" },
            transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
            businessDays: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "https://schema.org/Monday",
                "https://schema.org/Tuesday",
                "https://schema.org/Wednesday",
                "https://schema.org/Thursday",
                "https://schema.org/Friday",
              ],
            },
          },
        },
      },
    })),
  };
  return JSON.stringify(data);
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd() }} />

      {/* Hero — type first, photography band below (§5.2) */}
      <section className="mx-auto max-w-wrap px-6 pb-10 pt-16 md:pt-[92px]">
        <div className="rv">
          <p className="eyebrow">Premium travel goods</p>
          <h1 className="display h-display mt-4">
            Pack lighter.
            <br />
            Go further.
          </h1>
          <p className="lead mt-5 max-w-[58ch]">
            Carry-on essentials chosen one at a time — no warehouse of lookalike gadgets, no
            inflated list prices. Just the gear that earns its space in your bag, at the price
            printed on the page.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#shop" className="btn btn-navy">Shop the collection</a>
            <a href="/products.html" className="btn btn-ghost">See every product</a>
          </div>
          <p className="mt-5 text-[13.5px] text-t3">
            Ships in 5–10 business days · Tracking emailed on every order · 30-day returns
          </p>
        </div>
      </section>
      <div className="rv">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG}
          alt="Traveler planning a trip with a map and camera"
          width="1600"
          height="900"
          fetchPriority="high"
          className="h-[52vh] w-full object-cover md:h-[62vh]"
        />
      </div>

      {/* Trust bar — the store's own facts only (§5.4) */}
      <section className="border-b border-linesoft">
        <div className="mx-auto grid max-w-wrap grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-3">
          {[
            ["Shipping", "Ships in 5–10 business days"],
            ["Tracking", "Tracking emailed on every order"],
            ["Returns", "30-day returns"],
          ].map(([k, v]) => (
            <div key={k} className="rv">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-t3">{k}</p>
              <p className="mt-1 text-[17px] font-semibold text-ink">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured — the hero piece, product huge */}
      <section className="mx-auto max-w-wrap px-6 py-sectionm md:py-section">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="rv order-2 md:order-1">
            <p className="eyebrow">Featured — the hero piece</p>
            <h2 className="display h-section mt-3">{duffel.name}</h2>
            <p className="lead mt-4">
              Starts as a garment bag that keeps a suit or dress flat and crease-free, then zips
              into a full carry-on duffel. One bag for the wedding weekend and the red-eye home.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Garment section holds one suit or two dresses, flat",
                "Zips into a duffel sized for major airline carry-on sizers",
                "Separate shoe pocket keeps soles off clean clothes",
                "Trolley sleeve slides over a rolling case handle",
              ].map((b) => (
                <li key={b} className="border-t border-linesoft pt-2.5 text-[15px] text-t2">{b}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="text-[26px] font-bold text-ink">{money(duffel.cents)}</span>
              <a href={duffel.stripe} className="btn btn-navy">Buy the Garment Duffel</a>
              <a href="/products/garment-duffel" className="text-[14.5px] font-semibold text-accentdeep hover:text-ink">
                Full details
              </a>
            </div>
            <p className="mt-3 text-[13.5px] text-t3">
              Ships in 5–10 business days. 30-day returns on unused items.
            </p>
          </div>
          <a href="/products/garment-duffel" className="rv order-1 block md:order-2" aria-label="Convertible Garment Duffel — details">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={duffel.img.replace("w=1000", "w=1200")}
              alt={duffel.alt}
              width="1200"
              height="900"
              className="aspect-[4/3] w-full rounded-card object-cover"
            />
          </a>
        </div>
      </section>

      {/* Interactive module — the dark product panel (§5.3) */}
      <section id="travel-kit" className="mx-auto max-w-wrap scroll-mt-20 px-6 pb-sectionm md:pb-section">
        <div className="rv">
          <TravelKit />
        </div>
        <noscript>
          <div className="mt-6 rounded-card border border-linesoft bg-paper p-6">
            <p className="text-[15px] text-t2">
              The interactive builder needs JavaScript — here are the same kits as simple lists.
              Every Buy button goes straight to secure checkout for that item, so a kit is
              completed one item at a time.
            </p>
            {STATIC_KITS.map((k) => (
              <div key={k.name} className="mt-5">
                <h3 className="font-semibold text-ink">
                  {k.name} — {money(k.slugs.reduce((s, slug) => s + bySlug[slug].cents, 0))}
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {k.slugs.map((slug) => (
                    <li key={slug} className="flex items-center justify-between gap-3 text-[14.5px] text-t2">
                      <span>{bySlug[slug].name} — {money(bySlug[slug].cents)}</span>
                      <a href={bySlug[slug].stripe} className="font-semibold text-accentdeep">Buy</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </noscript>
      </section>

      {/* The travel collection */}
      <section id="shop" className="scroll-mt-20 bg-alt">
        <div className="mx-auto max-w-wrap px-6 py-sectionm md:py-section">
          <div className="rv max-w-[68ch]">
            <p className="eyebrow">The collection</p>
            <h2 className="display h-section mt-3">The travel collection</h2>
            <p className="lead mt-4">
              Eight pieces a frequent traveler actually re-packs trip after trip — plus a small
              holiday shelf below, held to the same standard. Prices are final — what you see is
              what you pay at checkout, plus tax where it applies.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {travel.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Holiday picks */}
      <section className="mx-auto max-w-wrap px-6 py-sectionm md:py-section">
        <div className="rv max-w-[68ch]">
          <p className="eyebrow">Holiday picks</p>
          <h2 className="display h-section mt-3">Gifts that still ship in time</h2>
          <p className="lead mt-4">
            Eight seasonal finds, checked one by one before listing.{" "}
            <strong className="font-semibold text-ink">Order by Dec 10 for Christmas delivery</strong>{" "}
            — the trimmer by Dec 9. After those dates we won&rsquo;t promise Christmas, and neither
            should anyone else.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {holiday.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
        <p className="mt-8 text-[14.5px]">
          <a href="/gift-guide.html" className="font-semibold text-accentdeep hover:text-ink">
            Browse the full holiday gift guide
          </a>
        </p>
      </section>

      {/* Photography band — the lake at golden hour (live dry-bag photo) */}
      <div className="rv">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80&auto=format&fit=crop"
          alt="Canoes on a clear lake at golden hour"
          width="1600"
          height="900"
          loading="lazy"
          className="h-[46vh] w-full object-cover"
        />
      </div>

      {/* Kits */}
      <section id="kits" className="mx-auto max-w-wrap scroll-mt-20 px-6 py-sectionm md:py-section">
        <div className="rv max-w-[68ch]">
          <p className="eyebrow">Kits</p>
          <h2 className="display h-section mt-3">Built for the trip you&rsquo;re actually taking</h2>
          <p className="lead mt-4">
            Start with the hero piece, then add the rest of the kit at checkout or from the
            product pages — every item ships under the same 5–10 business day window and the
            same 30-day return promise.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              name: "Boat Day Kit",
              intro: "Start with the Convertible Garment Duffel for the dock-to-dinner change of clothes, then round out the kit:",
              slugs: ["dry-bag", "phone-pouch", "travel-towel"],
              note: "Add the Dry Bag, Pouch and Towel from the shop grid above to complete the kit.",
            },
            {
              name: "Carry-On Kit",
              intro: "One bag, one week, no checked luggage. Start with the Garment Duffel, then pack it properly:",
              slugs: ["packing-cubes", "crossbody", "day-bag"],
              note: "Add the Cubes, Crossbody and Day Bag from the shop grid above to complete the kit.",
            },
          ].map((k) => (
            <div key={k.name} className="rv rounded-card border border-linesoft bg-paper p-7">
              <h3 className="font-display text-[22px] font-semibold text-ink">{k.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-t2">{k.intro}</p>
              <ul className="mt-4 space-y-2">
                {k.slugs.map((slug) => (
                  <li key={slug} className="flex items-baseline justify-between gap-3 border-t border-linesoft pt-2 text-[15px] text-t2">
                    <a href={`/products/${slug}`} className="hover:text-ink">{bySlug[slug].name}</a>
                    <span className="font-semibold text-ink">{money(bySlug[slug].cents)}</span>
                  </li>
                ))}
              </ul>
              <a href={duffel.stripe} className="btn btn-navy mt-6">
                Start with the Duffel — {money(duffel.cents)}
              </a>
              <p className="mt-3 text-[13.5px] text-t3">{k.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kit builder (recipe module) */}
      <section id="kit-builder" className="scroll-mt-20 bg-alt">
        <div className="mx-auto max-w-wrap px-6 py-sectionm md:py-section">
          <div className="rv max-w-[68ch]">
            <p className="eyebrow">Interactive kit builder</p>
            <h2 className="display h-section mt-3">Build your travel kit</h2>
            <p className="lead mt-4">
              Pick a trip type and who&rsquo;s going. We&rsquo;ll put together a kit from the real
              collection — remove anything you don&rsquo;t need and watch the total update.
            </p>
          </div>
          <div className="rv mt-8">
            <KitBuilder />
          </div>
          <noscript>
            <p className="mt-4 text-[14.5px] text-t2">
              The kit builder needs JavaScript — you can still shop the full collection in the
              grid above.
            </p>
          </noscript>
        </div>
      </section>

      {/* Why Northbound */}
      <section className="mx-auto max-w-wrap px-6 py-sectionm md:py-section">
        <div className="rv max-w-[68ch]">
          <p className="eyebrow">Why Northbound</p>
          <h2 className="display h-section mt-3">Honest gear, honestly sold</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Curated, not catalogued", "A short travel list, each piece picked because it solves a real packing problem — plus a small holiday shelf each season. When a piece stops earning its place, it leaves. The list stays short on purpose."],
            ["Transparent shipping times", "Orders ship in 5–10 business days and tracking is emailed the moment your order is on its way. We print the timeline on every page instead of hiding it in fine print."],
            ["30-day returns", "Changed your mind? Return any unused item within 30 days. Defective gear is on us — we'll make it right, including the return postage."],
          ].map(([t, b]) => (
            <div key={t} className="rv border-t-2 border-ink pt-5">
              <h3 className="text-[17px] font-semibold text-ink">{t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-t2">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-wrap px-6 pb-sectionm md:pb-section">
        <div className="rv max-w-[68ch]">
          <p className="eyebrow">Good to know</p>
          <h2 className="display h-section mt-3">Shipping &amp; returns, in plain English</h2>
          <p className="lead mt-4">
            Shipping takes 5–10 business days with tracking emailed to you. Returns are open for
            30 days on unused items — you cover return postage unless the item arrived defective.
            Full detail lives on our <a href="/policies.html" className="font-semibold text-accentdeep hover:text-ink">policies page</a>.
          </p>
        </div>
        <div className="rv mt-8 max-w-[820px]">
          <Faq />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-dark">
        <div className="mx-auto max-w-wrap px-6 py-sectionm text-center md:py-section">
          <h2 className="display h-final rv text-ondark">
            Pack lighter. <span className="hl-dark">Go further.</span>
          </h2>
          <p className="rv mx-auto mt-4 max-w-[52ch] text-[16.5px] leading-relaxed text-ondark2">
            Carry-on essentials chosen one at a time — just the gear that earns its space in your
            bag, at the price printed on the page.
          </p>
          <div className="rv mt-7 flex flex-wrap justify-center gap-3">
            <a href="#shop" className="btn btn-primary">Shop the collection</a>
            <a href="/products.html" className="btn btn-ghost-dark">See every product</a>
          </div>
        </div>
      </section>
    </>
  );
}
