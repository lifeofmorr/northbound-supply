import { PRODUCTS } from "../lib/data";

export default function sitemap() {
  const base = "https://northboundsupply.net";
  const root = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products.html`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/policies.html`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/gift-guide.html`, changeFrequency: "weekly", priority: 0.8 },
  ];
  const products = PRODUCTS.map((p) => ({
    url: `${base}/products/${p.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));
  return [...root, ...products];
}
