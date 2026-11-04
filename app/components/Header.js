"use client";
import { useState } from "react";

const LINKS = [
  { href: "/#shop", label: "Shop" },
  { href: "/products.html", label: "Products" },
  { href: "/#kits", label: "Kits" },
  { href: "/gift-guide.html", label: "Gift Guide" },
  { href: "/policies.html", label: "Shipping & Returns" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-linesoft bg-ivory/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-wrap items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3" aria-label="Northbound Supply Co. — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.svg" alt="" width="30" height="30" className="rounded-[8px]" />
          <span className="font-display text-[19px] font-semibold leading-none text-ink">
            Northbound
            <span className="mt-[3px] block font-sans text-[9.5px] font-semibold uppercase tracking-[0.32em] text-accentdeep">
              Supply Co.
            </span>
          </span>
        </a>
        <button
          className="inline-flex min-h-[44px] items-center rounded-pill border border-line px-4 text-[13.5px] font-semibold text-ink md:hidden"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
        <nav
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-14 flex-col gap-1 border-b border-linesoft bg-ivory px-6 py-4 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
          aria-label="Main"
        >
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="py-2 text-[13.5px] font-medium text-t2 transition-colors hover:text-ink md:py-0"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="/products.html" className="btn btn-navy btn-small mt-2 md:mt-0">
            Build your travel kit
          </a>
        </nav>
      </div>
    </header>
  );
}
