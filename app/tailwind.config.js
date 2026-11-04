/** ENTERPRISE-DESIGN-STANDARD §4 tokens as the Tailwind theme.
 *  Fleet-shared values (type scale, spacing, radii, neutrals) follow the
 *  standard. Northbound per-business overrides, taken from the brand itself
 *  (logo + live style.css): ink = deep navy #0B2239 (the live theme-color),
 *  accent = brass #A98A56 (logo "SUPPLY CO." gold), surfaces = warm ivory
 *  #FAF8F2 and sand #E8DFD0. Display face = Fraunces — the brand's own
 *  typeface on the live store — body = Inter. */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#a98a56", // Northbound brass (logo gold)
        accentdeep: "#7d6335", // brass deepened for text/links on light
        ink: "#0b2239", // brand navy — dark sections, display text
        ink2: "#0e2c4a",
        inkdeep: "#071829",
        body: "#1d1d1f",
        t2: "#424245",
        t3: "#6e6e73",
        t4: "#86868b",
        ivory: "#faf8f2", // warm ivory page surface
        alt: "#f3efe4", // warm sand-grey alt section
        sand: "#e8dfd0", // brand sand
        paper: "#fffdf8",
        line: "#ddd5c2",
        linesoft: "#eae3d2",
        linedark: "#24405c",
        dark: "#0b2239",
        panel: "#0a1e33", // §5.3 module panel — deep navy
        ondark: "#f5f1e8",
        ondark2: "#b6c2cf",
      },
      fontFamily: {
        display: ["Fraunces", "Didot", '"Bodoni MT"', "Georgia", "serif"],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        wrap: "1120px",
      },
      borderRadius: {
        card: "18px",
        panel: "22px",
        pill: "980px",
        sm2: "12px",
      },
      boxShadow: {
        soft: "0 16px 40px rgba(0,0,0,.07)",
        panel: "0 30px 80px rgba(7,24,41,.28)",
      },
      spacing: {
        section: "92px",
        sectionm: "64px",
      },
    },
  },
  plugins: [],
};
