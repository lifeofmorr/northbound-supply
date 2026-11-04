import ProductDetail from "../../components/ProductDetail";
import { PRODUCTS } from "../../lib/data";

export const metadata = {
  title: "Products — Northbound Supply Co.",
  description:
    "Every Northbound Supply Co. product in detail: honest benefits, shipping notes and straight-to-checkout buying.",
  alternates: { canonical: "https://northboundsupply.net/products.html" },
  openGraph: {
    title: "Products — Northbound Supply Co.",
    description:
      "Every Northbound Supply Co. product in detail: honest benefits, shipping notes and straight-to-checkout buying.",
    url: "https://northboundsupply.net/products.html",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80&auto=format&fit=crop",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products — Northbound Supply Co.",
    description:
      "Every Northbound Supply Co. product in detail: honest benefits, shipping notes and straight-to-checkout buying.",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80&auto=format&fit=crop",
    ],
  },
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-wrap px-6">
      <div className="rv pb-2 pt-16 md:pt-[92px]">
        <p className="eyebrow">Product details</p>
        <h1 className="display h-display mt-4">Every piece, in detail</h1>
        <p className="lead mt-5 max-w-[62ch]">
          What each product does, what it doesn&rsquo;t, and exactly how it ships. Every Buy
          button goes straight to secure checkout for that item.
        </p>
        <a href="/#travel-kit" className="btn btn-navy mt-7">
          Build your travel kit
        </a>
      </div>
      <div>
        {PRODUCTS.map((p, i) => (
          <ProductDetail key={p.slug} p={p} flip={i % 2 === 1} />
        ))}
      </div>
    </div>
  );
}
