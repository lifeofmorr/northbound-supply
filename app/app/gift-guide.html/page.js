import ProductCard from "../../components/ProductCard";
import KitBuilder from "../../components/KitBuilder";
import { bySlug, GIFT_GROUPS, SUPPORT_EMAIL } from "../../lib/data";

export const metadata = {
  title: "Holiday Gift Guide 2026 — Northbound Supply Co.",
  description:
    "Sixteen honest gift picks under $55: travel gear, home finds, grooming, car and pet gifts. Order by Dec 10 for Christmas delivery.",
  alternates: { canonical: "https://northboundsupply.net/gift-guide.html" },
  openGraph: {
    title: "Holiday Gift Guide 2026 — Northbound Supply Co.",
    description:
      "Sixteen honest gift picks under $55: travel gear, home finds, grooming, car and pet gifts. Order by Dec 10 for Christmas delivery.",
    url: "https://northboundsupply.net/gift-guide.html",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80&auto=format&fit=crop",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holiday Gift Guide 2026 — Northbound Supply Co.",
    description:
      "Sixteen honest gift picks under $55: travel gear, home finds, grooming, car and pet gifts. Order by Dec 10 for Christmas delivery.",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80&auto=format&fit=crop",
    ],
  },
};

export default function GiftGuidePage() {
  return (
    <>
      <section className="mx-auto max-w-wrap px-6 pb-10 pt-16 md:pt-[92px]">
        <div className="rv">
          <p className="eyebrow">Holiday gift guide 2026</p>
          <h1 className="display h-display mt-4">
            Gifts people actually use.
            <br />
            Nothing over $55.
          </h1>
          <p className="lead mt-5 max-w-[62ch]">
            Every pick below is stocked, shipping-verified, and priced on the page — no fake
            list prices, no countdown timers.
          </p>
          <p className="lead mt-4 max-w-[62ch]">
            <strong className="font-semibold text-ink">Order by Dec 10 for Christmas delivery</strong>{" "}
            (the KEMEI trimmer by Dec 9 — it ships a little slower). After those dates, we&rsquo;ll
            still take your order, but we won&rsquo;t promise Christmas.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/#travel-kit" className="btn btn-navy">Build your travel kit</a>
            <a href="/products.html" className="btn btn-ghost">See every product</a>
          </div>
          <p className="mt-5 text-[13.5px] text-t3">
            Free returns window: 30 days · Tracking emailed on every order · Checkout takes about a minute
          </p>
        </div>
      </section>
      <div className="rv">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1600&q=80&auto=format&fit=crop"
          alt="Structured travel duffel bag"
          width="1600"
          height="900"
          fetchPriority="high"
          className="h-[46vh] w-full object-cover"
        />
      </div>

      {GIFT_GROUPS.map((g, gi) => (
        <section key={g.title} className={gi % 2 === 1 ? "bg-alt" : ""}>
          <div className="mx-auto max-w-wrap px-6 py-sectionm md:py-section">
            <div className="rv">
              <p className="eyebrow">{g.eyebrow}</p>
              <h2 className="display h-section mt-3">{g.title}</h2>
            </div>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map(([slug, line]) => (
                <ProductCard key={slug} p={bySlug[slug]} giftLine={line} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-wrap px-6 py-sectionm md:py-section">
        <p className="rv max-w-[68ch] text-[16.5px] leading-relaxed text-t2">
          Buying for someone impossible? The{" "}
          <a href="/products.html" className="font-semibold text-accentdeep hover:text-ink">
            full product pages
          </a>{" "}
          show exactly what each item does and doesn&rsquo;t do — no surprises on Christmas
          morning. Questions:{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-accentdeep hover:text-ink">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
        <div className="rv mt-12">
          <p className="eyebrow">Interactive kit builder</p>
          <h2 className="display h-section mt-3">Build your travel kit</h2>
          <p className="lead mt-4 max-w-[62ch]">
            Pick a trip type and who&rsquo;s going, and the kit builder puts together a kit from
            the real collection — remove anything you don&rsquo;t need and watch the total update.
          </p>
          <div className="mt-8">
            <KitBuilder />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/#travel-kit" className="btn btn-navy">Build your travel kit</a>
            <a href="/products.html" className="btn btn-ghost">See every product</a>
          </div>
        </div>
      </section>
    </>
  );
}
