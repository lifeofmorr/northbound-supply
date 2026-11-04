import { SUPPORT_EMAIL } from "../../lib/data";

export const metadata = {
  title: "Policies — Northbound Supply Co.",
  description:
    "Northbound Supply Co. shipping, returns, privacy and terms policies in plain language.",
  alternates: { canonical: "https://northboundsupply.net/policies.html" },
  openGraph: {
    title: "Policies — Northbound Supply Co.",
    description:
      "Northbound Supply Co. shipping, returns, privacy and terms policies in plain language.",
    url: "https://northboundsupply.net/policies.html",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80&auto=format&fit=crop",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Policies — Northbound Supply Co.",
    description:
      "Northbound Supply Co. shipping, returns, privacy and terms policies in plain language.",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80&auto=format&fit=crop",
    ],
  },
};

/**
 * Policy copy is VERBATIM from the live policies.html (verified 2026-11-03:
 * local tree and live HTTP agree on every policy sentence; the only
 * live/local delta is page chrome). Do not reword.
 */
export default function PoliciesPage() {
  return (
    <div className="mx-auto max-w-wrap px-6">
      <div className="rv pt-16 md:pt-[92px]">
        <p className="eyebrow">Policies</p>
        <h1 className="display h-display mt-4">
          The fine print, minus the fine-print games
        </h1>
        <p className="lead mt-5 max-w-[62ch]">
          Shipping, returns, privacy and terms — in plain language, on one page.
        </p>
        <a href="/#travel-kit" className="btn btn-navy mt-7">
          Build your travel kit
        </a>
      </div>

      <div className="max-w-[820px] pb-sectionm md:pb-section">
        <section id="shipping" className="rv scroll-mt-24 border-t border-linesoft pt-10 mt-12">
          <h2 className="display text-[26px] font-semibold">Shipping policy</h2>
          <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-t2">
            <p>
              Orders are processed and shipped within <strong className="text-ink">5–10 business days</strong> of
              your order confirmation. Every order includes tracking, and your tracking details
              are emailed to the address you used at checkout as soon as your order is on its way.
            </p>
            <p>Shipping is currently available within the United States.</p>
            <p>
              Delivery times after dispatch depend on your carrier and location; the 5–10
              business day window above is our honest end-to-end estimate for most orders, not a
              best-case promise. Weather, carrier delays and peak holiday volumes can add time —
              if that happens, your tracking page is the most current source, and you can always
              email us.
            </p>
            <p>
              Please double-check your shipping address at checkout. We ship to the address
              provided and can&rsquo;t redirect a parcel once it has left.
            </p>
          </div>
        </section>

        <section id="returns" className="rv scroll-mt-24 border-t border-linesoft pt-10 mt-12">
          <h2 className="display text-[26px] font-semibold">Returns &amp; exchanges</h2>
          <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-t2">
            <p>
              You have <strong className="text-ink">30 days from delivery</strong> to return any item that is
              unused, unworn and in its original condition.
            </p>
            <p>
              <strong className="text-ink">Standard returns:</strong> you cover the return postage. Refunds are
              issued to your original payment method once the item arrives and passes a quick
              condition check, normally within 5 business days of receipt.
            </p>
            <p>
              <strong className="text-ink">Defective or damaged items: on us.</strong> If something arrives
              defective or damaged, email us a photo within the 30-day window and we&rsquo;ll cover
              return postage and send a replacement or a full refund — your choice.
            </p>
            <p>
              To start a return, email{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-accentdeep hover:text-ink">
                {SUPPORT_EMAIL}
              </a>{" "}
              with your order email and the item you&rsquo;d like to return, and we&rsquo;ll reply with
              instructions. Please don&rsquo;t send items back without contacting us first — we
              can&rsquo;t match an unannounced parcel to your order.
            </p>
            <p>
              For hygiene reasons, the waterproof phone pouch must be unopened to qualify as a
              standard return (defective items are always covered, opened or not).
            </p>
          </div>
        </section>

        <section id="privacy" className="rv scroll-mt-24 border-t border-linesoft pt-10 mt-12">
          <h2 className="display text-[26px] font-semibold">Privacy policy (short form)</h2>
          <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-t2">
            <p>
              We collect only what we need to take your order and deliver it: your name, email,
              shipping address and payment details. Payment is processed by our payment
              processor — your full card details never sit on our servers.
            </p>
            <p>
              We use your email to send your receipt, tracking updates and, if you ask for them,
              occasional product news. <strong className="text-ink">We do not sell your personal information.</strong>
            </p>
            <p>Analytics on this site are aggregate and used to improve the store.</p>
            <p>
              You can ask us at any time what information we hold about you, or ask us to delete
              it, by emailing{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-accentdeep hover:text-ink">
                {SUPPORT_EMAIL}
              </a>
              . We&rsquo;ll action requests within 30 days.
            </p>
          </div>
        </section>

        <section id="terms" className="rv scroll-mt-24 border-t border-linesoft pt-10 mt-12">
          <h2 className="display text-[26px] font-semibold">Terms (short form)</h2>
          <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-t2">
            <p>
              Prices are shown in USD and are final at checkout; any applicable tax is calculated
              there.
            </p>
            <p>
              A product listing is an offer to sell at the stated price — if a genuine pricing
              error slips through, we&rsquo;ll contact you before shipping and offer a correction or
              a full refund.
            </p>
            <p>
              Product descriptions are written to be accurate and honest, including limitations
              (for example, no waterproof pouch can guarantee a phone).
            </p>
            <p>
              Product photos on this site are representative imagery; the item you receive
              matches the description and specifications on its product page.
            </p>
            <p>
              These short-form terms sit alongside consumer protections in your jurisdiction —
              nothing here removes a right the law gives you.
            </p>
          </div>
        </section>

        <section className="rv border-t border-linesoft pt-10 mt-12">
          <h2 className="display text-[26px] font-semibold">Contact</h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-t2">
            Questions about an order, a return or anything above:{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-accentdeep hover:text-ink">
              {SUPPORT_EMAIL}
            </a>
            . We reply within two business days.
          </p>
        </section>
      </div>
    </div>
  );
}
