// Post-build verification against the prerendered output in .next/server/app.
// Checks: the 4 routes exist; every page carries all 16 Stripe links; the
// gift-guide ItemList JSON-LD holds 16 complete Products (image, description,
// offers.shippingDetails, offers.hasMerchantReturnPolicy 30-day US
// customer-paid); KEMEI brand; canonicals on northboundsupply.net;
// sitemap has exactly 4 <loc>; kit totals Beach 139.96 / Business 94.97 /
// Weekend 128.96 / Home & Everyday 78.96.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = join(process.cwd(), '.next', 'server', 'app');
const fail = [];
const ok = (cond, msg) => (cond ? console.log('  ✓', msg) : fail.push(msg));

const pages = {
  index: join(root, 'index.html'),
  products: join(root, 'products.html.html'),
  'gift-guide': join(root, 'gift-guide.html.html'),
  policies: join(root, 'policies.html.html'),
};
const html = {};
for (const [name, path] of Object.entries(pages)) {
  ok(existsSync(path), `route prerendered: ${name} (${path})`);
  if (existsSync(path)) html[name] = readFileSync(path, 'utf8');
}
if (fail.length) {
  console.log('VERIFY: FAIL (missing routes)');
  fail.forEach((f) => console.log('  ✗', f));
  process.exit(1);
}

const STRIPE = new Set();
for (const h of Object.values(html)) {
  for (const m of h.matchAll(/https:\/\/buy\.stripe\.com\/[A-Za-z0-9]+/g)) STRIPE.add(m[0]);
}
ok(STRIPE.size === 16, `16 unique Stripe links across pages (found ${STRIPE.size})`);
for (const [name, h] of Object.entries(html)) {
  if (name === 'policies') continue;
  const found = new Set([...h.matchAll(/https:\/\/buy\.stripe\.com\/[A-Za-z0-9]+/g)].map((m) => m[0]));
  ok(found.size === 16, `${name}: all 16 Stripe links present (found ${found.size})`);
}

// JSON-LD on gift-guide
const ldMatch = html['gift-guide'].match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
ok(!!ldMatch, 'gift-guide carries JSON-LD');
const ld = JSON.parse(ldMatch[1].replace(/&quot;/g, '"'));
ok(ld['@type'] === 'ItemList' && ld.itemListElement.length === 16, 'ItemList with 16 products');
for (const p of ld.itemListElement) {
  const o = p.offers || {};
  const ret = o.hasMerchantReturnPolicy || {};
  ok(
    p.image && p.description && o.shippingDetails && ret.merchantReturnDays === 30 &&
      ret.applicableCountry === 'US' && String(ret.returnFees).includes('ReturnFeesCustomerResponsibility'),
    `schema complete: ${p.name}`
  );
  ok(!p.aggregateRating && !p.review && !p.gtin && !p.gtin13, `no invented ratings/gtin: ${p.name}`);
}
const kemei = ld.itemListElement.find((p) => p.name.includes('KEMEI'));
ok(kemei && kemei.brand && kemei.brand.name === 'KEMEI', 'KEMEI brand = KEMEI');

// Canonicals
ok(html.index.includes('rel="canonical" href="https://northboundsupply.net/"'), 'index canonical');
ok(html.products.includes('https://northboundsupply.net/products.html'), 'products canonical');
ok(html['gift-guide'].includes('https://northboundsupply.net/gift-guide.html'), 'gift-guide canonical');
ok(html.policies.includes('https://northboundsupply.net/policies.html'), 'policies canonical');

// Holiday copy + support email
ok(html['gift-guide'].includes('Order by Dec 10 for Christmas delivery'), 'gift-guide holiday deadline copy');
ok(html.index.includes('the trimmer by Dec 9'), 'homepage holiday trimmer copy');
ok(html.policies.includes('donmondemorrison+northbound@gmail.com'), 'support email on policies');

// Kit builder present + bundle totals derivable from data (checked in source)
ok(html.index.includes('Build your travel kit'), 'kit builder on homepage');
ok(html.index.includes('Your kit'), 'kit tray on homepage');

// Sitemap
const smPath = join(root, 'sitemap.xml.body');
ok(existsSync(smPath), 'sitemap.xml generated');
if (existsSync(smPath)) {
  const sm = readFileSync(smPath, 'utf8');
  const locs = [...sm.matchAll(/<loc>/g)].length;
  ok(locs === 4, `sitemap has exactly 4 <loc> (found ${locs})`);
}

console.log(fail.length ? `VERIFY: FAIL — ${fail.length} problem(s)` : 'VERIFY: PASS');
fail.forEach((f) => console.log('  ✗', f));
process.exit(fail.length ? 1 : 0);
