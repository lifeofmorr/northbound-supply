/** @type {import('tailwindcss').Config} */
// ENTERPRISE-DESIGN-STANDARD §4 tokens, Northbound theme:
// accent = deep navy #0B2239 (the brand color — CTAs, links, numerals);
// sand #E8DFD0 = warm surface; brass is the documented secondary highlight
// (eyebrow + the single headline span on light grounds only, §12.2 exception).
// Display type: Fraunces (per-business override, cf. EA's Playfair); UI/body: Inter.
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1d1d1f',
        ink2: '#424245',
        ink3: '#6e6e73',
        ink4: '#86868b',
        page: '#ffffff',
        ivory: '#fbfbfd',
        alt: '#f5f5f7',
        line: '#d2d2d7',
        line2: '#e8e8ec',
        navy: '#0B2239',
        navydeep: '#071829',
        deep: '#04101E',
        deep2: '#030B14',
        sand: '#E8DFD0',
        sanddeep: '#d9cbb2',
        brass: '#8a6d2f',
        brasslt: '#c9a86a',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        shell: '1240px',
      },
      borderRadius: {
        card: '18px',
        panel: '22px',
        pill: '980px',
      },
      boxShadow: {
        soft: '0 16px 40px rgba(0,0,0,.07)',
        panel: '0 30px 80px rgba(11,34,57,.28)',
      },
    },
  },
  plugins: [],
};
