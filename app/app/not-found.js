export default function NotFound() {
  return (
    <section className="mx-auto max-w-wrap px-6 py-sectionm md:py-section">
      <p className="eyebrow">404</p>
      <h1 className="display h-display mt-4">This trail ends here.</h1>
      <p className="lead mt-5 max-w-[52ch]">
        The page you&rsquo;re looking for isn&rsquo;t in the catalog. The full collection is one
        click away.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a href="/#shop" className="btn btn-navy">Shop the collection</a>
        <a href="/products.html" className="btn btn-ghost">See every product</a>
      </div>
    </section>
  );
}
