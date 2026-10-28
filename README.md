# Northbound Supply Co. — static storefront

Premium travel goods. Tagline: "Pack lighter. Go further."
Separate new venture. Standalone static storefront — Buy buttons go straight to Stripe payment links.

## Files
- `index.html` — home: hero, featured Garment Duffel, shop grid (8 products), Kits
  (Boat Day Kit / Carry-On Kit), why-us, shipping & returns summary, FAQ, footer
- `products.html` — one linked detail section per product with honest benefit bullets,
  shipping notes and per-product Stripe Buy links
- `policies.html` — shipping (5–10 business days, tracking emailed), returns
  (30-day, unused; buyer covers return post unless defective), privacy + terms short-form
- `style.css` — shared styles (deep navy #0B2239, warm sand #E8DFD0, Fraunces + Inter)
- `main.js` — mobile nav toggle + FAQ accordions only

## ⚠ Launch placeholders — MUST be resolved before paid traffic
1. **Product photos are launch placeholders from Unsplash** (commercially licensed
   stock imagery, verified HTTP 200 on 2026-10-25). They are representative travel
   imagery, NOT photos of the actual products. **Swap every product image for
   photos of the physical samples before any paid traffic runs** — selling from
   stock photos that don't match the shipped item invites returns and disputes.
2. **Support email is a placeholder:** `donmondemorrison+northbound@gmail.com` appears across
   the site (FAQ, footers, policies). The mailbox/domain must be live and monitored
   before launch, or replaced with the real support address everywhere.
3. Stripe links are live payment links (created 2026-10-25) — confirm each link's
   product name/price in Stripe matches this site before launch.

## Verify locally
```
cd ~/workspace/northbound-store && python3 -m http.server 8901
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8901/index.html
```
