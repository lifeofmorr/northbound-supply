/**
 * Post-build verification: serve-independent checks over the prerendered
 * output in .next/server/app.
 *  1. Every route file exists (4 live routes + 16 product pages).
 *  2. The union of prerendered HTML carries exactly the 16 expected Stripe
 *     links, byte-identical to content/products.json AND to the business
 *     record (northbound-05-payment-links.md URLs, hardcoded below as the
 *     independent source of truth).
 *  3. Each product page carries its own Stripe link + price.
 *  4. Both GSC verification tags present in prerendered HTML.
 *  5. Zero review/rating/social-proof strings anywhere (reviews stay EMPTY —
 *     no fabricated or imported reviews ever).
 * Run after `npm run build`:  npm run verify
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const products = JSON.parse(readFileSync(join(root, "content", "products.json"), "utf8"));

// Independent source of truth: northbound-05-payment-links.md (2026-10-25 FINAL)
const EXPECTED = {
  "packing-cubes": ["$24.99", "https://buy.stripe.com/7sY14mds34EGdBqgCd8sp08"],
  "garment-duffel": ["$39.99", "https://buy.stripe.com/6oU6oG87J8UWgNCfy98sp09"],
  "dry-bag": ["$19.99", "https://buy.stripe.com/5kQ5kC4Vx1sugNCclX8sp0a"],
  "phone-pouch": ["$19.99", "https://buy.stripe.com/5kQdR89bN2wyeFueu58sp0b"],
  "travel-towel": ["$54.99", "https://buy.stripe.com/fZuaEW87J8UW0OEdq18sp0c"],
  "crossbody": ["$49.99", "https://buy.stripe.com/aFaaEWfAb7QScxm85H8sp0d"],
  "tumbler": ["$44.99", "https://buy.stripe.com/3cIeVcew7b34eFugCd8sp0e"],
  "day-bag": ["$34.99", "https://buy.stripe.com/28E8wObjV8UW2WM0Df8sp0f"],
  "star-projector": ["$29.99", "https://buy.stripe.com/4gMdR8bjVgno0OEbhT8sp0g"],
  "kemei-trimmer": ["$29.99", "https://buy.stripe.com/9B614m87JefgfJyclX8sp0h"],
  "sunset-lamp": ["$13.99", "https://buy.stripe.com/9B6aEWcnZb34eFu5Xz8sp0i"],
  "footwell-lights": ["$14.99", "https://buy.stripe.com/cNi7sK5ZBgno7d299L8sp0j"],
  "flame-diffuser": ["$24.99", "https://buy.stripe.com/7sY9AS3Rt6MO68YadP8sp0k"],
  "cat-ball": ["$8.99", "https://buy.stripe.com/3cIeVc0Fh3AC1SIadP8sp0l"],
  "magnetic-wristband": ["$9.99", "https://buy.stripe.com/cNi14m0Fh8UW54U3Pr8sp0m"],
  "grooming-gloves": ["$9.99", "https://buy.stripe.com/9B64gyafR0oq9la2Ln8sp0C"],
};

let fail = 0;
const ok = (cond, msg) => {
  console.log(`${cond ? "PASS" : "FAIL"}  ${msg}`);
  if (!cond) fail++;
};

// 0. Data layer matches the record
for (const p of products) {
  const e = EXPECTED[p.slug];
  ok(e && e[0] === p.price && e[1] === p.stripe, `data ${p.slug}: ${p.price} + link match record`);
}
ok(products.length === 16, `data: exactly 16 products (${products.length})`);

const appDir = join(root, ".next", "server", "app");
const read = (rel) => {
  const f = join(appDir, rel);
  return existsSync(f) ? readFileSync(f, "utf8") : null;
};

// 1. Routes
const routeFiles = {
  "/": "index.html",
  "/products.html": "products.html.html",
  "/gift-guide.html": "gift-guide.html.html",
  "/policies.html": "policies.html.html",
};
for (const [route, rel] of Object.entries(routeFiles)) {
  ok(read(rel) !== null, `route prerendered: ${route}`);
}
for (const p of products) {
  ok(read(join("products", `${p.slug}.html`)) !== null, `route prerendered: /products/${p.slug}`);
}

// 2-5. Content checks
const all = Object.values(routeFiles)
  .map((rel) => read(rel) || "")
  .concat(products.map((p) => read(join("products", `${p.slug}.html`)) || ""))
  .join("\n");
const found = [...new Set(all.match(/https:\/\/buy\.stripe\.com\/[A-Za-z0-9]+/g) || [])].sort();
const expectedLinks = Object.values(EXPECTED).map((e) => e[1]).sort();
ok(
  JSON.stringify(found) === JSON.stringify(expectedLinks),
  `stripe union: exactly the 16 record links, byte-identical (found ${found.length})`
);
for (const p of products) {
  const html = read(join("products", `${p.slug}.html`)) || "";
  ok(html.includes(p.stripe), `product page ${p.slug}: own Stripe link present`);
  ok(html.includes(p.price), `product page ${p.slug}: price ${p.price} present`);
}
ok(all.includes("Ei_KnP6ga_MYFeBtmXhUMGByaou9Cxuumm9eC5X4iIU"), "GSC tag 1 present");
ok(all.includes("QB-ssv-MjZdVz-dJ-gzDWv2qY6BC9JkV1xSJGt7VMZ8"), "GSC tag 2 present");
const banned = [/★/, /aggregateRating/i, /"review"/i, /customers love/i, /best seller/i];
for (const b of banned) ok(!b.test(all), `no social-proof fabrication: ${b}`);

console.log(fail ? `\nVERIFY: FAIL (${fail})` : "\nVERIFY: PASS — 16/16 links, 20/20 routes");
process.exit(fail ? 1 : 0);
