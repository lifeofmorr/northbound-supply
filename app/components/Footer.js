import { SUPPORT_EMAIL } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-linesoft bg-ivory">
      <div className="mx-auto max-w-wrap px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-primary.svg" alt="Northbound Supply Co." width="246" height="48" className="h-10 w-auto" />
            <p className="mt-4 font-display text-[19px] font-semibold text-ink">Pack lighter. Go further.</p>
            <p className="mt-2 max-w-[38ch] text-[13.5px] leading-relaxed text-t3">
              Premium travel goods, transparently shipped.
            </p>
          </div>
          <nav aria-label="Shop">
            <h3 className="text-[13.5px] font-semibold text-ink">Shop</h3>
            <ul className="mt-3 space-y-2 text-[13.5px] text-t2">
              <li><a className="hover:text-ink" href="/#shop">All products</a></li>
              <li><a className="hover:text-ink" href="/products.html">Product details</a></li>
              <li><a className="hover:text-ink" href="/#kits">Kits</a></li>
              <li><a className="hover:text-ink" href="/gift-guide.html">Gift guide</a></li>
            </ul>
          </nav>
          <nav aria-label="Help">
            <h3 className="text-[13.5px] font-semibold text-ink">Help</h3>
            <ul className="mt-3 space-y-2 text-[13.5px] text-t2">
              <li><a className="hover:text-ink" href="/policies.html#shipping">Shipping policy</a></li>
              <li><a className="hover:text-ink" href="/policies.html#returns">Returns policy</a></li>
              <li><a className="hover:text-ink" href="/policies.html#privacy">Privacy policy</a></li>
              <li><a className="hover:text-ink" href="/policies.html#terms">Terms</a></li>
              <li>
                <a className="hover:text-ink" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-12 border-t border-linesoft pt-6 text-[13px] leading-relaxed text-t3">
          © 2026 Northbound Supply Co. All prices USD. Shipping 5–10 business days on most items — see
          product pages for exact windows; 30-day returns on unused items. This storefront sells direct —
          checkout is handled securely by our payment processor.
        </p>
      </div>
    </footer>
  );
}
