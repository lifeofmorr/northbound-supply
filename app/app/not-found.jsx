export default function NotFound() {
  return (
    <section className="mx-auto max-w-shell px-6 py-[120px] text-center">
      <h1 className="font-display text-[clamp(32px,4.4vw,52px)] font-semibold text-sand">That page wandered off.</h1>
      <p className="mx-auto mt-4 max-w-[440px] text-[17px] leading-[1.55] text-sand/70">
        The collection is small on purpose — everything we sell is on the products page.
      </p>
      <a href="/products.html" className="mt-8 inline-block rounded-pill bg-sand px-6 py-3 text-[15px] font-semibold text-navy">
        See every product
      </a>
    </section>
  );
}
