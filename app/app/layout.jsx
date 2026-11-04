import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
// Footer is rendered per page: the live footers differ slightly by page
// (Shop column + legal line), so each page passes its own variant.

const display = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});
const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

// Live root metadata is per-page (each page exports its own, byte-faithful to
// the live site); the layout carries only shared defaults.
export const metadata = {
  metadataBase: new URL('https://northboundsupply.net'),
  title: 'Northbound Supply Co. — Pack lighter. Go further.',
  description:
    'Premium travel goods, honestly priced. Packing cubes, garment duffels, dry bags and carry-on essentials with transparent shipping times and 30-day returns.',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        {/* Opt-in reveal hiding (§9): content is hidden only when JS runs. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js-ent')" }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
