'use client';
import { useState } from 'react';

// The live FAQ accordion — questions and answers verbatim from the live
// homepage's "Good to know" section.
export const FAQS = [
  {
    q: 'How long does shipping take?',
    a: "5–10 business days from order confirmation. You'll get a tracking email as soon as your order ships. If a trip is sooner than that window, order early — we won't promise a date we can't keep.",
  },
  {
    q: 'What is your return policy?',
    a: '30 days, unused and in original condition. You cover return postage unless the item is defective or arrived damaged — in that case we cover it. Email us first and we\'ll send instructions.',
  },
  {
    q: 'How do I check out?',
    a: "Every Buy button goes straight to a secure checkout page for that product — no account, no cart maze. You'll get an email receipt and a separate tracking email when your order ships.",
  },
  {
    q: 'How do I reach support?',
    a: "Email donmondemorrison+northbound@gmail.com with your order email and we'll get back to you within two business days.",
  },
  {
    q: 'Is the phone pouch really waterproof?',
    a: "It's built to keep water out when sealed correctly — but no pouch can guarantee a phone. Test the seal with a tissue before your first use, check it before every swim, and never dive with it. Full note on the product page.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(-1);
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {FAQS.map((f, i) => (
        <div key={f.q}>
          <button
            type="button"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left"
          >
            <span className="text-[16.5px] font-semibold text-sand">{f.q}</span>
            <span className="text-[20px] leading-none text-brasslt" aria-hidden="true">
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && <p className="max-w-[720px] pb-6 text-[15.5px] leading-[1.6] text-sand/70">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}
