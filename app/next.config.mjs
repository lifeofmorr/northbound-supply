/** @type {import('next').NextConfig} */
// URL preservation (ExploreAwaits pattern): the canonical URLs are the .html
// forms served by app/[page]. Clean one-segment forms ( /products, /gift-guide,
// /policies ) rewrite to the .html routes via beforeFiles so they resolve
// before the [page] segment can claim-and-404 them. Canonicals stay on the
// .html forms, exactly as the live site declares them.
const CLEAN = ['products', 'gift-guide', 'policies'];

const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: CLEAN.map((slug) => ({
        source: `/${slug}`,
        destination: `/${slug}.html`,
      })),
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
