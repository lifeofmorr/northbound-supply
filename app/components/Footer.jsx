import { SUPPORT_EMAIL } from '@/lib/products';

// §5.12 footer: ivory, hairline top border, 13px, complete nav + legal.
// Copy is the live footer's, verbatim. Props carry the live per-page
// variants: `thirdShop` (index/products/policies link "Kits"; the gift
// guide links "Gift guide") and `legal` (the page's own © line).
export default function Footer({
  thirdShop = { label: 'Kits', href: '/#kits' },
  legal = '© 2026 Northbound Supply Co. All prices USD. Shipping 5–10 business days on most items — see product pages for exact windows; 30-day returns on unused items.',
}) {
  return (
    <footer className="border-t border-white/10 bg-deep2">
      <div className="mx-auto max-w-shell px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-[19px] font-semibold text-sand">Northbound Supply Co.</p>
            <p className="mt-2 max-w-[300px] text-[13.5px] leading-relaxed text-sand/55">
              Premium travel goods, transparently shipped.
            </p>
          </div>
          <nav aria-label="Shop">
            <p className="text-[13px] font-semibold text-sand">Shop</p>
            <ul className="mt-3 space-y-2 text-[13.5px] text-sand/55">
              <li><a className="hover:text-sand" href="/">All products</a></li>
              <li><a className="hover:text-sand" href="/products.html">Product details</a></li>
              <li><a className="hover:text-sand" href={thirdShop.href}>{thirdShop.label}</a></li>
            </ul>
          </nav>
          <nav aria-label="Help">
            <p className="text-[13px] font-semibold text-sand">Help</p>
            <ul className="mt-3 space-y-2 text-[13.5px] text-sand/55">
              <li><a className="hover:text-sand" href="/policies.html#shipping">Shipping policy</a></li>
              <li><a className="hover:text-sand" href="/policies.html#returns">Returns policy</a></li>
              <li><a className="hover:text-sand" href="/policies.html#privacy">Privacy policy</a></li>
              <li><a className="hover:text-sand" href="/policies.html#terms">Terms</a></li>
              <li><a className="hover:text-sand" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></li>
            </ul>
          </nav>
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-[13px] leading-relaxed text-sand/45">{legal}</p>
      </div>
    </footer>
  );
}
