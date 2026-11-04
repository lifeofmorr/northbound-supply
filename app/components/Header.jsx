'use client';
import { useState } from 'react';

// §5.1 header: sticky, translucent ivory, backdrop blur, hairline border, 56px.
// Nav targets are the live site's: Shop / Products / Kits / Gift Guide /
// Shipping & Returns, plus the pill CTA.
const NAV = [
  { label: 'Shop', href: '/' },
  { label: 'Products', href: '/products.html' },
  { label: 'Kits', href: '/#travel-kit' },
  { label: 'Gift Guide', href: '/gift-guide.html' },
  { label: 'Shipping & Returns', href: '/policies.html' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-deep/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-shell items-center justify-between px-6">
        <a href="/" className="font-display text-[19px] font-semibold tracking-[-0.01em] text-sand">
          Northbound Supply Co.
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="text-[13.5px] text-sand/65 transition-colors hover:text-sand">
              {n.label}
            </a>
          ))}
          <a
            href="/products.html"
            className="rounded-pill bg-sand px-4 py-2 text-[13.5px] font-semibold text-navy transition-colors hover:bg-white"
          >
            Shop the collection
          </a>
        </nav>
        <button
          type="button"
          className="text-[13.5px] font-semibold text-sand lg:hidden"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-6 py-4 lg:hidden" aria-label="Main mobile">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="block py-2 text-[15px] text-sand/75" onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
