"use client";
import { useState } from "react";
import { FAQS } from "../lib/data";

export default function Faq() {
  const [open, setOpen] = useState(-1);
  return (
    <div className="divide-y divide-linesoft border-y border-linesoft">
      {FAQS.map((f, i) => (
        <div key={f.q}>
          <button
            type="button"
            className="flex min-h-[52px] w-full items-center justify-between gap-4 py-4 text-left text-[16px] font-semibold text-ink"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {f.q}
            <span aria-hidden="true" className="text-[20px] font-normal text-accentdeep">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <p className="max-w-[68ch] pb-5 text-[15px] leading-relaxed text-t2">{f.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
