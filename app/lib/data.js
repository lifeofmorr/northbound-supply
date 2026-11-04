import products from "../content/products.json";

export const PRODUCTS = products;
export const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]));
export const travel = products.filter((p) => p.collection === "travel");
export const holiday = products.filter((p) => p.collection === "holiday");

export const money = (cents) => "$" + (cents / 100).toFixed(2);

/** Travel-kit widget bundles (live main.js BUNDLES, verbatim). */
export const TK_BUNDLES = {
  beach: ["dry-bag", "phone-pouch", "travel-towel", "tumbler"],
  business: ["garment-duffel", "packing-cubes", "kemei-trimmer"],
  weekend: ["day-bag", "crossbody", "sunset-lamp", "star-projector"],
  everyday: ["crossbody", "magnetic-wristband", "grooming-gloves", "cat-ball"],
};
export const TK_LABELS = {
  beach: "Beach Trip",
  business: "Business",
  weekend: "Weekend Escape",
  everyday: "Home & Everyday",
};

/** Kit-builder recipes (live inline script KITS, catalog indexes -> slugs).
 *  beach {base:[2,3,4],duo:[6,7]} · city {base:[5,0,6],duo:[7,1]}
 *  adventure {base:[2,7,0],duo:[4,6]} · business {base:[1,0,6],duo:[5,9]} */
const idx = (i) => products[i].slug;
export const KB_KITS = {
  beach: { base: [2, 3, 4].map(idx), duo: [6, 7].map(idx) },
  city: { base: [5, 0, 6].map(idx), duo: [7, 1].map(idx) },
  adventure: { base: [2, 7, 0].map(idx), duo: [4, 6].map(idx) },
  business: { base: [1, 0, 6].map(idx), duo: [5, 9].map(idx) },
};

/** Static kit lists on the homepage (live, totals verified against prices). */
export const STATIC_KITS = [
  {
    name: "Beach Trip",
    slugs: ["dry-bag", "phone-pouch", "travel-towel", "tumbler"],
  },
  {
    name: "Business",
    slugs: ["garment-duffel", "packing-cubes", "kemei-trimmer"],
  },
  {
    name: "Weekend Escape",
    slugs: ["day-bag", "crossbody", "sunset-lamp", "star-projector"],
  },
  {
    name: "Home & Everyday",
    slugs: ["crossbody", "magnetic-wristband", "grooming-gloves", "cat-ball"],
  },
];

export const GIFT_GROUPS = [
  {
    eyebrow: "For travelers",
    title: "The carry-on crowd",
    items: [
      ["garment-duffel", "For the wedding-weekend traveler: a garment bag that zips into a carry-on duffel."],
      ["packing-cubes", "For the over-packer: a week of clothes, compressed and sorted by day."],
      ["crossbody", "For the city breaker: passport and cards on the chest, hands free."],
      ["travel-towel", "For the beach loyalist: full-size coverage that packs to paperback size."],
      ["phone-pouch", "For the boat-day friend who already lost one phone to the lake."],
      ["dry-bag", "For the kayaker: roll-top dry storage for spray, rain and sand."],
    ],
  },
  {
    eyebrow: "For homebodies",
    title: "The cozy crowd",
    items: [
      ["star-projector", "For the stargazer: a starfield on the ceiling, with remote and Bluetooth speaker."],
      ["sunset-lamp", "For the photographer: golden hour on any wall, for the price of lunch."],
      ["flame-diffuser", "For the unwind-er: mist, scent and a flickering flame light in one."],
    ],
  },
  {
    eyebrow: "For him · garage · car",
    title: "The practical crowd",
    items: [
      ["kemei-trimmer", "For the sharp one: a pro grooming kit. Order by Dec 9 for Christmas."],
      ["magnetic-wristband", "For the DIYer: screws and bits on the wrist, not lost in the carpet."],
      ["footwell-lights", "For the night driver: app-controlled interior glow, music-sync modes."],
      ["tumbler", "For the commuter: coffee hot through the whole drive in."],
    ],
  },
  {
    eyebrow: "For pet people",
    title: "The furry crowd",
    items: [
      ["cat-ball", "For the cat: a self-rolling chase toy. For the human: intact furniture."],
      ["grooming-gloves", "For the shedder's human: fur sticks to the gloves, not the sofa."],
      ["day-bag", "For the dog-park regular: folds away, then carries everything."],
    ],
  },
];

export const FAQS = [
  {
    q: "How long does shipping take?",
    a: "5–10 business days from order confirmation. You'll get a tracking email as soon as your order ships. If a trip is sooner than that window, order early — we won't promise a date we can't keep.",
  },
  {
    q: "What is your return policy?",
    a: "30 days, unused and in original condition. You cover return postage unless the item is defective or arrived damaged — in that case we cover it. Email us first and we'll send instructions.",
  },
  {
    q: "How do I check out?",
    a: "Every Buy button goes straight to a secure checkout page for that product — no account, no cart maze. You'll get an email receipt and a separate tracking email when your order ships.",
  },
  {
    q: "How do I reach support?",
    a: "Email donmondemorrison+northbound@gmail.com with your order email and we'll get back to you within two business days.",
  },
  {
    q: "Is the phone pouch really waterproof?",
    a: "It's built to keep water out when sealed correctly — but no pouch can guarantee a phone. Test the seal with a tissue before your first use, check it before every swim, and never dive with it. Full notes are on the product page.",
  },
];

export const SUPPORT_EMAIL = "donmondemorrison+northbound@gmail.com";
export const SITE = "https://northboundsupply.net";
