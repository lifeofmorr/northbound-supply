// Northbound Supply Co. — catalog source of truth.
// Every name, price, Stripe link, image, alt and line of copy below was
// extracted from the LIVE site (northboundsupply.net) on 2026-11-03:
// card copy + kit data from live main.js, detail copy from live
// products.html, gift copy from live gift-guide.html. Nothing invented.
export const money = (cents) => '$' + (cents / 100).toFixed(2);

const STD_SHIP = 'Shipping: 5–10 business days, tracking emailed. 30-day returns on unused items.';

export const PRODUCTS = [
  {
    id: 'packing-cubes',
    name: 'Compression Packing Cubes 8-Pc Set',
    cents: 2499,
    url: 'https://buy.stripe.com/7sY14mds34EGdBqgCd8sp08',
    img: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=900&q=80&auto=format&fit=crop',
    alt: 'Packed suitcase with organized clothing',
    copy: 'Squeeze the air out of a week of clothes and keep outfits sorted by day.',
    detail: {
      lead: 'Compression zips squeeze soft clothes down so a week fits in a carry-on',
      bullets: [
        'Eight sizes — shirts, layers, underwear and shoes each get a home',
        "Mesh tops let you see what's inside without unpacking",
        'Unpack in minutes: cubes go straight from case to drawer',
      ],
      ship: STD_SHIP,
    },
    gift: { name: 'Compression Packing Cubes 8-Pc', cat: 'travelers', forLine: 'For the over-packer: a week of clothes, compressed and sorted by day.' },
  },
  {
    id: 'garment-duffel',
    name: 'Convertible Garment Duffel',
    cents: 3999,
    url: 'https://buy.stripe.com/6oU6oG87J8UWgNCfy98sp09',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=80&auto=format&fit=crop',
    alt: 'Structured travel duffel bag',
    copy: 'Garment bag and carry-on duffel in one zip. The wedding-weekend answer.',
    detail: {
      lead: 'Opens flat as a garment bag — a suit or dress travels on its hanger, crease-free',
      bullets: [
        'Zips into a structured duffel sized for major airline carry-on sizers',
        'Dedicated shoe pocket separates soles from clean clothes',
        'Trolley sleeve rides on top of a rolling case through the terminal',
      ],
      ship: STD_SHIP,
    },
    gift: { name: 'Convertible Garment Duffel', cat: 'travelers', forLine: 'For the wedding-weekend traveler: a garment bag that zips into a carry-on duffel.' },
  },
  {
    id: 'dry-bag',
    name: 'Waterproof Dry Bag 10L',
    cents: 1999,
    url: 'https://buy.stripe.com/5kQ5kC4Vx1sugNCclX8sp0a',
    img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&q=80&auto=format&fit=crop',
    alt: 'Canoes on a clear lake at golden hour',
    copy: 'Roll-top dry storage for boat days, beach runs and rainy trailheads.',
    detail: {
      lead: 'Roll-top closure keeps spray, rain and sand off clothes, towels and snacks',
      bullets: [
        '10 litres — the right size for a boat day or a wet hike out',
        'Adjustable shoulder strap; clip it to a rail, a pack or a beach chair',
        "Wipes clean and packs flat when it's empty",
      ],
      note: "Honest note: a dry bag resists splashes and brief rain when rolled and sealed correctly. It is not a submersible case — don't swim with valuables inside it.",
      ship: STD_SHIP,
    },
    gift: { name: 'Waterproof Dry Bag 10L', cat: 'travelers', forLine: 'For the kayaker: roll-top dry storage for spray, rain and sand.' },
  },
  {
    id: 'phone-pouch',
    name: 'Floating Waterproof Phone Pouch 2-Pack',
    cents: 1999,
    url: 'https://buy.stripe.com/5kQdR89bN2wyeFueu58sp0b',
    img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&q=80&auto=format&fit=crop',
    alt: 'Beach shoreline with chairs facing the water',
    copy: 'Two sealed pouches that float — one for you, one for whoever drops theirs.',
    detail: {
      lead: "Two pouches per pack — yours, plus the spare that saves a friend's trip",
      bullets: [
        'Air-padded body floats if it goes overboard, instead of sinking',
        'Clear window: shoot photos and use the touchscreen through the pouch',
        'Neck lanyard included; fits phones up to roughly 7 inches diagonally',
      ],
      note: 'Read this first: test the seal with a tissue inside before your first use, and re-check the seal before every swim. No pouch can guarantee a phone — a failed seal, a puncture, or deep water can still let moisture in. Treat it as strong protection, not insurance.',
      ship: STD_SHIP,
    },
    gift: { name: 'Floating Phone Pouch 2-Pack', cat: 'travelers', forLine: 'For the boat-day friend who already lost one phone to the lake.' },
  },
  {
    id: 'travel-towel',
    name: 'Quick-Dry Travel Towel',
    cents: 5499,
    url: 'https://buy.stripe.com/fZuaEW87J8UW0OEdq18sp0c',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80&auto=format&fit=crop',
    alt: 'Turquoise beach with soft sand',
    copy: 'Full-size coverage that dries fast and packs down to the size of a paperback.',
    detail: {
      lead: 'Full-size coverage that packs down to about the size of a paperback',
      bullets: [
        "Quick-dry fibres are ready to re-pack by the time you've had coffee",
        'Sand shakes off instead of travelling home with you',
        'Works as beach towel, gym towel and impromptu picnic blanket',
      ],
      ship: STD_SHIP,
    },
    gift: { name: 'Quick-Dry Travel Towel', cat: 'travelers', forLine: 'For the beach loyalist: full-size coverage that packs to paperback size.' },
  },
  {
    id: 'crossbody',
    name: 'Utility Crossbody Bag',
    cents: 4999,
    url: 'https://buy.stripe.com/aFaaEWfAb7QScxm85H8sp0d',
    img: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=900&q=80&auto=format&fit=crop',
    alt: 'Traveler walking with a small crossbody bag',
    copy: 'Passport, phone and cards against your chest — hands free, valuables close.',
    detail: {
      lead: 'Keeps passport, phone, cards and keys on your chest, not in a back pocket',
      bullets: [
        'Slim profile sits flat under a jacket on transit days',
        'Adjustable strap for crossbody or shoulder carry',
        'Zip pockets inside and out, so the small things stop disappearing',
      ],
      ship: STD_SHIP,
    },
    gift: { name: 'Utility Crossbody Bag', cat: 'travelers', forLine: 'For the city breaker: passport and cards on the chest, hands free.' },
  },
  {
    id: 'tumbler',
    name: 'Stainless Travel Tumbler 20oz',
    cents: 4499,
    url: 'https://buy.stripe.com/3cIeVcew7b34eFugCd8sp0e',
    img: 'https://images.unsplash.com/photo-1553531384-411a247ccd73?w=900&q=80&auto=format&fit=crop',
    alt: 'Insulated travel tumbler on a desk',
    copy: 'Double-wall steel that keeps coffee hot through a layover and water cold all beach day.',
    detail: {
      lead: 'Double-wall stainless steel keeps drinks hot or cold for hours, not minutes',
      bullets: [
        '20oz — a proper large coffee, not an espresso with ambitions',
        'Tapered base fits standard car and boat cup holders',
        'Spill-resistant lid for terminals, trails and choppy water',
      ],
      ship: STD_SHIP,
    },
    gift: { name: 'Stainless Travel Tumbler 20oz', cat: 'garage', forLine: 'For the commuter: coffee hot through the whole drive in.' },
  },
  {
    id: 'day-bag',
    name: 'Packable Drawstring Day Bag',
    cents: 3499,
    url: 'https://buy.stripe.com/28E8wObjV8UW2WM0Df8sp0f',
    img: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=900&q=80&auto=format&fit=crop',
    alt: 'Lightweight day bag ready for a day trip',
    copy: 'Folds into its own pocket outbound; carries the market haul on the way back.',
    detail: {
      lead: 'Folds into its own pocket — takes up almost no room in your main bag',
      bullets: [
        'Opens into a full day bag for markets, gyms and beach runs',
        'Drawstring top with a zip side pocket for keys and cards',
        "The souvenir solution: capacity for everything you swore you wouldn't buy",
      ],
      ship: STD_SHIP,
    },
    gift: { name: 'Packable Drawstring Day Bag', cat: 'pets', forLine: 'For the dog-park regular: folds away, then carries everything.' },
  },
  {
    id: 'star-projector',
    name: 'Astronaut Galaxy Star Projector',
    cents: 2999,
    url: 'https://buy.stripe.com/4gMdR8bjVgno0OEbhT8sp0g',
    img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=900&q=80&auto=format&fit=crop',
    alt: 'Star-filled night sky',
    copy: 'Astronaut lamp that throws a starfield across the ceiling — remote control and Bluetooth speaker built in.',
    detail: {
      lead: 'Astronaut-shaped lamp projects a drifting starfield and nebula across walls and ceiling',
      bullets: [
        'Remote control for brightness, rotation and timer',
        'Built-in Bluetooth speaker — lullabies, podcasts, or ambient sound under the stars',
        'USB powered; the head tilts so the projection lands where you want it',
      ],
      ship: 'Shipping: 5–12 days, tracking emailed. Order by Dec 10 for Christmas delivery. 30-day returns on unused items.',
    },
    gift: { name: 'Astronaut Galaxy Star Projector', cat: 'homebodies', forLine: 'For the stargazer: a starfield on the ceiling, with remote and Bluetooth speaker.' },
  },
  {
    id: 'kemei-trimmer',
    name: 'KEMEI KM-032 Trimmer Kit',
    cents: 2999,
    url: 'https://buy.stripe.com/9B614m87JefgfJyclX8sp0h',
    img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80&auto=format&fit=crop',
    alt: 'Barber at work in a barbershop',
    copy: "KEMEI's pro grooming kit — hair, beard and detail work in one case. Ships in 8–13 days; order by Dec 9 for Christmas.",
    detail: {
      lead: 'KEMEI KM-032 professional trimmer — sold under its real brand name, because it earned it',
      bullets: [
        'Hair, beard and detail edging in one grooming kit',
        'Rechargeable; guide combs and cleaning brush in the box',
        "The grooming upgrade that doesn't need a barber-shop budget",
      ],
      ship: 'Shipping: 8–13 days, tracking emailed. Order by Dec 9 for Christmas delivery. 30-day returns on unused items.',
    },
    gift: { name: 'KEMEI KM-032 Trimmer Kit', cat: 'garage', forLine: 'For the sharp one: a pro grooming kit. Order by Dec 9 for Christmas.' },
  },
  {
    id: 'sunset-lamp',
    name: 'LED Sunset Projection Lamp',
    cents: 1399,
    url: 'https://buy.stripe.com/9B6aEWcnZb34eFu5Xz8sp0i',
    img: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900&q=80&auto=format&fit=crop',
    alt: 'Warm sunset over a field',
    copy: 'USB lamp that paints a golden-hour sunset on any wall — the under-$15 gift that photographs like a vacation.',
    detail: {
      lead: 'Projects a warm sunset glow — golden hour on demand, any wall, any room',
      bullets: [
        'USB powered with an adjustable head to aim the disc of light',
        "A photographer's cheap trick: portraits and product shots look instantly warmer",
        'Small enough for a stocking, dramatic enough to be the gift they remember',
      ],
      ship: 'Shipping: 5–12 days, tracking emailed. Order by Dec 10 for Christmas delivery. 30-day returns on unused items.',
    },
    gift: { name: 'LED Sunset Projection Lamp', cat: 'homebodies', forLine: 'For the photographer: golden hour on any wall, for the price of lunch.' },
  },
  {
    id: 'footwell-lights',
    name: 'Car RGB LED Footwell Light Kit',
    cents: 1499,
    url: 'https://buy.stripe.com/cNi7sK5ZBgno7d299L8sp0j',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80&auto=format&fit=crop',
    alt: 'Sports car ready for a night drive',
    copy: 'USB strip lights for the footwells — app and remote control, music-sync modes, no wiring to cut.',
    detail: {
      lead: '36-LED RGB strips for front and rear footwells — adhesive mount, USB plug, no wiring cuts',
      bullets: [
        "App and remote control: colors, brightness and patterns from the driver's seat",
        'Music-sync mode pulses the light with whatever is playing',
        "Peels off cleanly when it's time to sell the car",
      ],
      ship: 'Shipping: 5–12 days, tracking emailed. Order by Dec 10 for Christmas delivery. 30-day returns on unused items.',
    },
    gift: { name: 'Car RGB LED Footwell Kit', cat: 'garage', forLine: 'For the night driver: app-controlled interior glow, music-sync modes.' },
  },
  {
    id: 'flame-diffuser',
    name: 'Volcanic Flame Diffuser Humidifier',
    cents: 2499,
    url: 'https://buy.stripe.com/7sY9AS3Rt6MO68YadP8sp0k',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80&auto=format&fit=crop',
    alt: 'Calm spa setting with towels and stones',
    copy: 'Volcano-style diffuser with a flickering flame light — mist, scent and a night light in one small footprint.',
    detail: {
      lead: 'Volcano-style mist ring with a flickering flame-effect light',
      bullets: [
        '130ml tank, USB powered — bedside, desk or bathroom shelf size',
        'Works as diffuser, humidifier and night light in one',
        'Quiet enough for a bedroom; dramatic enough for a living room',
      ],
      note: 'Honest note: essential oils are not included — add a few drops of your own to the water tank. Like any humidifier, rinse the tank weekly so it stays fresh.',
      ship: 'Shipping: 6–10 days, tracking emailed. Order by Dec 10 for Christmas delivery. 30-day returns on unused items.',
    },
    gift: { name: 'Volcanic Flame Diffuser', cat: 'homebodies', forLine: 'For the unwind-er: mist, scent and a flickering flame light in one.' },
  },
  {
    id: 'cat-ball',
    name: 'Interactive Cat Ball Toy',
    cents: 899,
    url: 'https://buy.stripe.com/3cIeVc0Fh3AC1SIadP8sp0l',
    img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&q=80&auto=format&fit=crop',
    alt: 'Cat watching intently',
    copy: "Self-rolling USB-rechargeable ball that keeps indoor cats chasing while you're out. The stocking stuffer for cat people.",
    detail: {
      lead: 'Self-rolling ball that changes direction on contact — no app, no remote, just chase',
      bullets: [
        'USB rechargeable; a charge lasts through days of play sessions',
        'Automatic bursts of movement, then rests — mimics prey instead of running flat-out',
        'Small, quiet and cheaper than replacing the furniture your cat is bored with',
      ],
      ship: 'Shipping: 5–11 days, tracking emailed. Order by Dec 10 for Christmas delivery. 30-day returns on unused items.',
    },
    gift: { name: 'Interactive Cat Ball Toy', cat: 'pets', forLine: 'For the cat: a self-rolling chase toy. For the human: intact furniture.' },
  },
  {
    id: 'magnetic-wristband',
    name: 'Magnetic Wristband Tool Holder',
    cents: 999,
    url: 'https://buy.stripe.com/cNi14m0Fh8UW54U3Pr8sp0m',
    img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=900&q=80&auto=format&fit=crop',
    alt: 'Workshop tools laid out on a bench',
    copy: 'Strap it on and screws, nails and bits stick to your wrist instead of vanishing into the carpet. For the DIY stocking.',
    detail: {
      lead: 'Strong magnets embedded around the band hold screws, nails, bolts and drill bits',
      bullets: [
        'The third hand every ladder job needs — no more bits held in teeth',
        'Adjustable strap fits wrists over gloves or bare',
        'Works for sewing pins and craft hardware just as well as workshop screws',
      ],
      ship: 'Shipping: 5–10 days, tracking emailed. Order by Dec 10 for Christmas delivery. 30-day returns on unused items.',
    },
    gift: { name: 'Magnetic Wristband Tool Holder', cat: 'garage', forLine: 'For the DIYer: screws and bits on the wrist, not lost in the carpet.' },
  },
  {
    id: 'grooming-gloves',
    name: 'Pet Grooming Gloves — Pair',
    cents: 999,
    url: 'https://buy.stripe.com/9B64gyafR0oq9la2Ln8sp0C',
    img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&q=80&auto=format&fit=crop',
    alt: 'Happy dog with its owner',
    copy: 'Deshedding gloves for bath time and couch time — loose fur sticks to the gloves, not the furniture. One pair, left and right.',
    detail: {
      lead: 'One pair — left and right glove — with soft silicone bristles on both sides',
      bullets: [
        'Stroke-and-lift deshedding: loose fur clings to the glove and peels off in a sheet',
        'Works dry for everyday shedding and wet at bath time for a deeper clean',
        'Also lifts pet hair from sofas, carpets and car seats',
      ],
      ship: 'Shipping: 6–12 days, tracking emailed. Order by Dec 10 for Christmas delivery. 30-day returns on unused items.',
    },
    gift: { name: 'Pet Grooming Gloves — Pair', cat: 'pets', forLine: "For the shedder's human: fur sticks to the gloves, not the sofa." },
  },
];

export const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));

// Homepage grids (live order).
export const TRAVEL_COLLECTION = ['packing-cubes', 'garment-duffel', 'dry-bag', 'phone-pouch', 'travel-towel', 'crossbody', 'tumbler', 'day-bag'];
export const HOLIDAY_PICKS = ['star-projector', 'kemei-trimmer', 'sunset-lamp', 'footwell-lights', 'flame-diffuser', 'cat-ball', 'magnetic-wristband', 'grooming-gloves'];

// Spotlight kit builder (live main.js BUNDLES / LABELS — totals verified:
// beach 13996, business 9497, weekend 12896, everyday 7896).
export const SPOTLIGHT_KITS = [
  { key: 'beach', label: 'Beach Trip', picks: ['dry-bag', 'phone-pouch', 'travel-towel', 'tumbler'] },
  { key: 'business', label: 'Business', picks: ['garment-duffel', 'packing-cubes', 'kemei-trimmer'] },
  { key: 'weekend', label: 'Weekend Escape', picks: ['day-bag', 'crossbody', 'sunset-lamp', 'star-projector'] },
  { key: 'everyday', label: 'Home & Everyday', picks: ['crossbody', 'magnetic-wristband', 'grooming-gloves', 'cat-ball'] },
];

// Trip / party kit builder (live inline script KITS — base + duo extras).
export const TRIP_KITS = {
  beach: { label: 'Beach', base: ['dry-bag', 'phone-pouch', 'travel-towel'], duo: ['tumbler', 'day-bag'] },
  city: { label: 'City', base: ['crossbody', 'packing-cubes', 'tumbler'], duo: ['day-bag', 'garment-duffel'] },
  adventure: { label: 'Adventure', base: ['dry-bag', 'day-bag', 'packing-cubes'], duo: ['travel-towel', 'tumbler'] },
  business: { label: 'Business', base: ['garment-duffel', 'packing-cubes', 'tumbler'], duo: ['crossbody', 'kemei-trimmer'] },
};

// Gift guide categories (live order inside each section differs from catalog
// order — gift.order preserves the live gift-guide sequence).
export const GIFT_CATS = [
  { key: 'travelers', title: 'For travelers', sub: 'The carry-on crowd', order: ['garment-duffel', 'packing-cubes', 'crossbody', 'travel-towel', 'phone-pouch', 'dry-bag'] },
  { key: 'homebodies', title: 'For homebodies', sub: 'The cozy crowd', order: ['star-projector', 'sunset-lamp', 'flame-diffuser'] },
  { key: 'garage', title: 'For him · garage · car', sub: 'The practical crowd', order: ['kemei-trimmer', 'magnetic-wristband', 'footwell-lights', 'tumbler'] },
  { key: 'pets', title: 'For pet people', sub: 'The furry crowd', order: ['cat-ball', 'grooming-gloves', 'day-bag'] },
];

// Editorial photography (Unsplash; every photo viewed at full size during
// curation — see BUILD-REPORT.md provenance table). Product imagery above is
// unchanged from the live site.
export const PHOTOS = {
  heroBand: {
    src: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1600&q=80&auto=format&fit=crop',
    alt: 'Traveler sitting on a wooden dock looking across a mountain lake',
    unsplashId: 'photo-1508672019048-805c876b67e2',
  },
  lakeBand: {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80&auto=format&fit=crop',
    alt: 'Rowboats on a turquoise alpine lake below steep peaks',
    unsplashId: 'photo-1501785888041-af3ef285b470',
  },
  roadBand: {
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80&auto=format&fit=crop',
    alt: 'Camper van on a desert road through red rock country',
    unsplashId: 'photo-1469854523086-cc02fe5d8800',
  },
  wingDetail: {
    src: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=900&q=80&auto=format&fit=crop',
    alt: 'Airplane wing above clouds lit by a low sun',
    unsplashId: 'photo-1500835556837-99ac94a94552',
  },
  flatlayBand: {
    src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80&auto=format&fit=crop',
    alt: 'Map, camera, notebook and day bag laid out for trip planning',
    unsplashId: 'photo-1488646953014-85cb44e25828',
  },
};

export const SUPPORT_EMAIL = 'donmondemorrison+northbound@gmail.com';
export const SITE = 'https://northboundsupply.net';
