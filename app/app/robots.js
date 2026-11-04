// Byte-faithful to the live robots.txt.
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://northboundsupply.net/sitemap.xml',
  };
}
