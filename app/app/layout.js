import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export const viewport = {
  themeColor: "#0B2239",
};

export const metadata = {
  metadataBase: new URL("https://northboundsupply.net"),
  title: "Northbound Supply Co. — Pack lighter. Go further.",
  description:
    "Premium travel goods, honestly priced. Packing cubes, garment duffels, dry bags and carry-on essentials with transparent shipping times and 30-day returns.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "Northbound Supply Co.",
    type: "website",
    title: "Northbound Supply Co. — Pack lighter. Go further.",
    description:
      "Premium travel goods, honestly priced. Packing cubes, garment duffels, dry bags and carry-on essentials with transparent shipping times and 30-day returns.",
    url: "https://northboundsupply.net/",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80&auto=format&fit=crop",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northbound Supply Co. — Pack lighter. Go further.",
    description:
      "Premium travel goods, honestly priced. Packing cubes, garment duffels, dry bags and carry-on essentials with transparent shipping times and 30-day returns.",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80&auto=format&fit=crop",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification — BOTH tags, never remove
            (see northbound-fulfillment-ops.md; removal lapses verification). */}
        <meta name="google-site-verification" content="Ei_KnP6ga_MYFeBtmXhUMGByaou9Cxuumm9eC5X4iIU" />
        <meta name="google-site-verification" content="QB-ssv-MjZdVz-dJ-gzDWv2qY6BC9JkV1xSJGt7VMZ8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
