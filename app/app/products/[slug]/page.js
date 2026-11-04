import ProductDetail from "../../../components/ProductDetail";
import ProductCard from "../../../components/ProductCard";
import { PRODUCTS, bySlug } from "../../../lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = bySlug[slug];
  return {
    title: `${p.name} — Northbound Supply Co.`,
    description: p.short,
    alternates: { canonical: `https://northboundsupply.net/products/${p.slug}` },
    openGraph: {
      title: `${p.name} — Northbound Supply Co.`,
      description: p.short,
      url: `https://northboundsupply.net/products/${p.slug}`,
      images: [p.img],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.name} — Northbound Supply Co.`,
      description: p.short,
      images: [p.img],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = bySlug[slug];
  const others = PRODUCTS.filter((x) => x.slug !== slug && x.collection === p.collection).slice(0, 4);
  return (
    <div className="mx-auto max-w-wrap px-6">
      <nav aria-label="Breadcrumb" className="pt-10 text-[13.5px] text-t3">
        <a href="/products.html" className="font-medium text-accentdeep hover:text-ink">
          Products
        </a>{" "}
        <span aria-hidden="true">/</span> {p.name}
      </nav>
      <ProductDetail p={p} anchor={false} />
      <section className="border-t border-linesoft py-12">
        <h2 className="display text-[24px] font-semibold">More from the {p.collection === "travel" ? "travel collection" : "holiday shelf"}</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <ProductCard key={o.slug} p={o} />
          ))}
        </div>
      </section>
    </div>
  );
}
