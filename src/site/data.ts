/**
 * The catalogue and company facts the pages are rendered from.
 *
 * Machine names, blurbs and figures follow JAC's own published catalogue, and the
 * photography under `static/assets/` is JAC's, re-cropped for this layout.
 */

export type Machine = {
  slug: string;
  name: string;
  family: string;
  blurb: string;
  bullets: string[];
};

export type Family = {
  slug: string;
  name: string;
  range: 'slicing' | 'dough';
  summary: string;
  image: string;
};

export const families: Family[] = [
  {
    slug: 'professional-slicers',
    name: 'Slicers for professionals',
    range: 'slicing',
    summary:
      'Table-top or on castors, 45 or 60 cm cutting width, single, double or variable slice thickness — the working core of a bakery.',
    image: 'family-slicers',
  },
  {
    slug: 'self-service-slicers',
    name: 'Self-service slicers',
    range: 'slicing',
    summary:
      'The machine JAC invented in 1974, built for customers to use unsupervised in supermarkets and grocery stores.',
    image: 'new-self',
  },
  {
    slug: 'bagging',
    name: 'Bagging & blowing',
    range: 'slicing',
    summary: 'Open the bag, fill it, move on. The last step of the slicing line, without the wasted motion.',
    image: 'bagger-blower',
  },
  {
    slug: 'fermentors',
    name: 'Sourdough fermentors',
    range: 'dough',
    summary: 'Temperature, agitation and rest held steady, so the levain that leaves the tank is the one you designed.',
    image: 'family-fermentors',
  },
  {
    slug: 'hydraulic-dividers',
    name: 'Hydraulic dividers',
    range: 'dough',
    summary: 'Round or square tanks, 16 or 20 divisions, stainless steel throughout. The workhorse division.',
    image: 'family-hydraulic-dividers',
  },
  {
    slug: 'divider-moulders',
    name: 'Divider-moulders',
    range: 'dough',
    summary:
      'Tamping, cutting and moulding in one pass — from a lever-operated bench model to a fully automatic cycle.',
    image: 'family-divider-moulders',
  },
  {
    slug: 'press',
    name: 'Butter & dough press',
    range: 'dough',
    summary: 'Hydraulic pressing for blocks of fat and very dense doughs, in a stainless-steel bowl and casing.',
    image: 'easypress',
  },
  {
    slug: 'volumetric-dividers',
    name: 'Volumetric dividers',
    range: 'dough',
    summary: 'Consistent weight piece after piece, from an open hopper bench divider to a container-loading line.',
    image: 'family-volumetric-dividers',
  },
  {
    slug: 'proofers',
    name: 'Proofers',
    range: 'dough',
    summary: 'Controlled rest between dividing and shaping, with left or right hand controls and two trough widths.',
    image: 'family-proofers',
  },
  {
    slug: 'moulders',
    name: 'Moulders',
    range: 'dough',
    summary: 'Baguettes, batards, rolls or flat breads — vertical or belt moulders from 1,200 to 2,400 pieces an hour.',
    image: 'family-moulders',
  },
  {
    slug: 'production-lines',
    name: 'Automated production lines',
    range: 'dough',
    summary: 'Dividing, proofing and moulding joined into one continuous line, configured around your process.',
    image: 'family-production-lines',
  },
];

export const machines: Machine[] = [
  {
    slug: 'pico',
    name: 'Pico',
    family: 'professional-slicers',
    blurb: 'The compact bench slicer that set the JAC standard.',
    bullets: ['Compact and affordable', 'Assisted lever', 'JAC innovation, entry level'],
  },
  {
    slug: 'duro',
    name: 'Duro',
    family: 'professional-slicers',
    blurb: 'The JAC timeless classic, at home with rye and dense loaves.',
    bullets: ['Robust, ergonomic, versatile', 'Assisted lever', 'Micronised blade lubrication'],
  },
  {
    slug: 'picomatic',
    name: 'Picomatic',
    family: 'professional-slicers',
    blurb: 'The Pico footprint with an automatic cycle.',
    bullets: ['Compact and affordable', 'Automatic', 'Slice thickness 9 to 18 mm'],
  },
  {
    slug: 'eco-plus',
    name: 'Eco+',
    family: 'professional-slicers',
    blurb: 'The benchmark slicer, configured to the bakery around it.',
    bullets: ['Automatic', 'Customisable', 'Single or double slicing'],
  },
  {
    slug: 'varia-pro',
    name: 'Varia Pro',
    family: 'professional-slicers',
    blurb: 'One machine for every loaf on the shelf.',
    bullets: ['Variable slice thickness: 5 to 25 mm', 'For artisan loaves', 'Safe and hygienic'],
  },
  {
    slug: 'integra-pro',
    name: 'Integra Pro',
    family: 'professional-slicers',
    blurb: 'Built into the counter, out of the customer’s way.',
    bullets: ['Built-in', 'Variable slice thickness: 4 to 30 mm', 'Safe and hygienic'],
  },
  {
    slug: 'zip',
    name: 'Zip',
    family: 'professional-slicers',
    blurb: 'High output without a change of operator.',
    bullets: ['High output', 'Versatile', 'Safe'],
  },
  {
    slug: 'swift',
    name: 'Swift',
    family: 'professional-slicers',
    blurb: 'Three hundred loaves an hour, no adjustment between them.',
    bullets: ['300 loaves/h', 'Versatile, no adjustment', 'Ergonomic'],
  },
  {
    slug: 'chute',
    name: 'Chute',
    family: 'professional-slicers',
    blurb: 'Gravity-fed slicing for soft white loaves.',
    bullets: ['300 loaves/h', 'For soft white loaves', 'Continuous feed'],
  },
  {
    slug: 'full',
    name: 'Full',
    family: 'professional-slicers',
    blurb: 'Production-floor throughput, sustained all shift.',
    bullets: ['500 loaves/h sustained', 'For industrial bakeries', 'Continuous duty'],
  },
  {
    slug: 'new-self',
    name: 'New Self',
    family: 'self-service-slicers',
    blurb: 'The reference self-service slicer, in stores worldwide.',
    bullets: ['Ergonomic and safe', 'Robust and economical to maintain', 'Standard 60 × 60 cm footprint'],
  },
  {
    slug: 'varia-self',
    name: 'Varia Self',
    family: 'self-service-slicers',
    blurb: 'Customers pick the thickness; the machine handles the rest.',
    bullets: ['3 settings from 5 to 25 mm', 'All types of loaves', 'Safe and hygienic'],
  },
  {
    slug: 'baguette',
    name: 'Baguette',
    family: 'self-service-slicers',
    blurb: 'Slices and bags a baguette in one motion.',
    bullets: ['For baguettes', 'Automatic bagging', 'Intuitive and fast'],
  },
  {
    slug: 'bagger-blower',
    name: 'Mobile bagger-blower',
    family: 'bagging',
    blurb: 'Blows the bag open where the bread comes out.',
    bullets: ['Mobile on castors', 'Pairs with any JAC slicer', 'One-handed bagging'],
  },
  {
    slug: 'bagging-turnstile',
    name: 'Bagging turnstile',
    family: 'bagging',
    blurb: 'Bags presented one after another, at the right height.',
    bullets: ['Turnstile bag feed', 'Bench or stand mounted', 'Keeps the counter clear'],
  },
  {
    slug: 'tradilevain-40',
    name: 'Tradilevain 40',
    family: 'fermentors',
    blurb: 'The compact fermentor, for a single-site bakery.',
    bullets: ['40 l working volume', 'Controlled temperature', 'Programmable agitation'],
  },
  {
    slug: 'tradilevain-110',
    name: 'Tradilevain 110',
    family: 'fermentors',
    blurb: 'The middle of the range, and the most common choice.',
    bullets: ['110 l working volume', 'Controlled temperature', 'Programmable agitation'],
  },
  {
    slug: 'tradilevain-270',
    name: 'Tradilevain 270',
    family: 'fermentors',
    blurb: 'Levain for a multi-oven production floor.',
    bullets: ['270 l working volume', 'Controlled temperature', 'Programmable agitation'],
  },
  {
    slug: 'div-round',
    name: 'Div round',
    family: 'hydraulic-dividers',
    blurb: 'The round-tank hydraulic divider.',
    bullets: ['Round tank, 16 or 20 divisions', 'Stainless-steel exterior and knives'],
  },
  {
    slug: 'div-r-round',
    name: 'Div-R round',
    family: 'hydraulic-dividers',
    blurb: 'Round tank with an assisted return.',
    bullets: ['Round tank, 16 or 20 divisions', 'Assisted return', 'Stainless-steel knives'],
  },
  {
    slug: 'div-20-square',
    name: 'Div 20 square',
    family: 'hydraulic-dividers',
    blurb: 'Square divisions, easier to line up on the peel.',
    bullets: ['Square tank, 20 divisions', 'Stainless-steel tank, exterior and knives', 'Easyclean non-stick floats'],
  },
  {
    slug: 'div-r-20-square',
    name: 'Div-R 20 square',
    family: 'hydraulic-dividers',
    blurb: 'The square tank with an assisted return.',
    bullets: ['Square tank, 20 divisions', 'Assisted return', 'Easyclean non-stick floats'],
  },
  {
    slug: 'easyform',
    name: 'Easyform',
    family: 'divider-moulders',
    blurb: 'The lever-operated newcomer to the range.',
    bullets: [
      'Manual tamping and cutting cycles',
      'Compact, eco-friendly, economical to maintain',
      'Takes the full JAC grid catalogue',
    ],
  },
  {
    slug: 'diviform',
    name: 'Diviform',
    family: 'divider-moulders',
    blurb: 'For doughs with a high water content.',
    bullets: ['High hydration doughs', 'Stainless-steel tank and exterior'],
  },
  {
    slug: 'diviform-plus',
    name: 'Diviform+',
    family: 'divider-moulders',
    blurb: 'Tamping brings every dough within reach.',
    bullets: ['All types of dough thanks to tamping', 'Adjustable pressure', 'Stainless-steel tank and exterior'],
  },
  {
    slug: 'tradiform',
    name: 'Tradiform',
    family: 'divider-moulders',
    blurb: 'Divides in the tank, or with grids.',
    bullets: ['In tank and/or using grids', 'All doughs thanks to tamping', 'Flour anti-splatter system'],
  },
  {
    slug: 'paniform',
    name: 'Paniform',
    family: 'divider-moulders',
    blurb: 'The automatic divider-moulder, with Clic & Cut and Easyflour.',
    bullets: ['Automatic tamping and cutting', 'Built-in flour dispenser', 'Pressure and time management'],
  },
  {
    slug: 'easypress',
    name: 'Easypress',
    family: 'press',
    blurb: 'Presses blocks of fat and very dense doughs.',
    bullets: ['19 kg stainless-steel tank', 'Hydraulic pressing', '460 × 387 × 125 mm plate'],
  },
  {
    slug: 'gd',
    name: 'GD',
    family: 'volumetric-dividers',
    blurb: 'The open-hopper volumetric divider.',
    bullets: ['Open hopper', 'Built-in flour dispenser', 'Consistency and precision'],
  },
  {
    slug: 'gds',
    name: 'GDS',
    family: 'volumetric-dividers',
    blurb: 'The GD, with pre-rounding on the way out.',
    bullets: ['Open hopper', 'Pre-rounding', 'Consistency and precision'],
  },
  {
    slug: 'divimax',
    name: 'Divimax',
    family: 'volumetric-dividers',
    blurb: 'The container-loading divider: up to 327 containers an hour.',
    bullets: ['Containers from 2 to 11 kg', 'Groups and folds up to 8 pieces', 'Oil recycling system'],
  },
  {
    slug: 'pe50p',
    name: 'Pe50P',
    family: 'volumetric-dividers',
    blurb: 'Air-pressure hopper, gentle on the dough.',
    bullets: ['Air pressure hopper', 'Kind to the dough', 'Consistency and precision'],
  },
  {
    slug: 'mb',
    name: 'MB',
    family: 'proofers',
    blurb: 'The compact proofer for a bench line.',
    bullets: ['Left / right hand controls', '2 sockets available', '2 trough widths'],
  },
  {
    slug: 'ba',
    name: 'BA',
    family: 'proofers',
    blurb: 'High capacity for a full production run.',
    bullets: ['Up to 592 dough pieces', 'Left / right hand controls', '2 sockets, 2 trough widths'],
  },
  {
    slug: 'ba-pro',
    name: 'BA Pro',
    family: 'proofers',
    blurb: 'Smooth internal walls, adjustable unloading.',
    bullets: ['Up to 504 dough pieces', 'Smooth internal walls', 'Adjustable unloading speed'],
  },
  {
    slug: 'rollform',
    name: 'Rollform',
    family: 'moulders',
    blurb: 'For traditional baguettes with rounded ends.',
    bullets: ['Rounded ends', 'Kind to the dough', 'Compact and easy to use'],
  },
  {
    slug: 'unic',
    name: 'Unic',
    family: 'moulders',
    blurb: 'One moulder for the whole bread range.',
    bullets: ['Versatile for all loaves', 'Three rolling rollers as standard', 'Ergonomic controls'],
  },
  {
    slug: 'ultima',
    name: 'Ultima',
    family: 'moulders',
    blurb: 'Variable speed stretching mat.',
    bullets: ['Variable speed mat', 'For a wide range of products', 'Ergonomic controls'],
  },
  {
    slug: 'forma',
    name: 'Forma',
    family: 'moulders',
    blurb: 'The vertical moulder that also rolls flat breads.',
    bullets: ['Up to 1,200 pieces/h', 'Three sheeting rollers', 'Front door opens for pita'],
  },
  {
    slug: 'hf',
    name: 'HF',
    family: 'moulders',
    blurb: 'Fast and quiet, without working the dough.',
    bullets: ['Up to 1,800 pieces/h', 'Kind to the dough', 'Quiet'],
  },
  {
    slug: 'optima',
    name: 'Optima',
    family: 'moulders',
    blurb: 'The high-output moulder of the range.',
    bullets: ['Up to 2,400 pieces/h', 'Wide range of products', 'Belt moulding'],
  },
  {
    slug: 'drivy-s',
    name: 'Drivy S',
    family: 'moulders',
    blurb: 'The short bench moulder.',
    bullets: ['Compact', 'Light', '1.5 m length'],
  },
  {
    slug: 'moov-m',
    name: 'Moov M',
    family: 'moulders',
    blurb: 'Two metres of adjustable belt.',
    bullets: ['Robust', 'Adjustable speed', '2 m length'],
  },
  {
    slug: 'moov-l',
    name: 'Moov L',
    family: 'moulders',
    blurb: 'The long belt, for longer breads.',
    bullets: ['Robust', 'Adjustable speed', '2.5 m length'],
  },
  {
    slug: 'pro-plus',
    name: 'Pro+',
    family: 'production-lines',
    blurb: 'A complete line with a 20 minute proof.',
    bullets: ['Sustained speed', 'Advanced hygiene', 'Proofing time: 20 min'],
  },
  {
    slug: 'proline',
    name: 'Proline',
    family: 'production-lines',
    blurb: 'A longer proof, for a wider range of processes.',
    bullets: ['Sustained speed', 'Proofing time: 45 min', 'Adaptable to many processes'],
  },
  {
    slug: 'unio',
    name: 'UNIO',
    family: 'production-lines',
    blurb: 'Configurable from end to end, around your process.',
    bullets: ['Customised configuration', 'Built with your team', 'Installed and commissioned by JAC'],
  },
];

export type Milestone = { year: string; text: string };

export const milestones: Milestone[] = [
  { year: '1946', text: 'JAC is founded in Liège — the initials of the founder’s children: Jacques, Amélie, Charles.' },
  { year: '1949', text: 'The first JAC bread slicer leaves the workshop.' },
  {
    year: '1974',
    text: 'JAC invents the self-service bread slicer for supermarkets, which becomes a retail standard worldwide.',
  },
  { year: '1992', text: 'The 60 × 60 cm slicer footprint is defined, so machines fit standard store furnishing.' },
  { year: '2000', text: 'The dough processing range begins, with the takeover of Marie / Prodec, then Matfour.' },
  {
    year: '2005',
    text: 'Invention of ISC® — Intelligent Slicing Control — matching cutting speed to the loaf. A JAC patent.',
  },
  { year: '2006', text: 'JAC Boston opens, to support customers across North America.' },
  { year: '2010', text: 'The variable thickness slicer range, Varia, is launched.' },
  { year: '2015', text: 'Slim brings variable thickness slicing into a compact machine.' },
  { year: '2017', text: 'Langres doubles its capacity and becomes the dedicated dough processing centre.' },
  { year: '2017', text: 'The German slicer manufacturer Wabäma joins JAC.' },
  { year: '2018', text: 'Paniform launches with Clic & Cut, Easylock, Easyclean and the Easyflour dispenser.' },
  { year: '2018', text: 'JAC Moscow opens; the Dutch slicer manufacturer ABO joins the group.' },
  {
    year: '2019',
    text: 'The new Liège factory opens on a reclaimed slag heap, tripling slicer production capacity.',
  },
];

export type Office = {
  city: string;
  country: string;
  role: string;
  lines: string[];
  phone: string;
};

export const offices: Office[] = [
  {
    city: 'Liège',
    country: 'Belgium',
    role: 'Bread slicer production, R&D and customer support',
    lines: ['Chemin d’Éole 1', 'B-4000 Liège'],
    phone: '+32 4 234 98 70',
  },
  {
    city: 'Langres',
    country: 'France',
    role: 'Dough processing production, R&D and customer support',
    lines: ['Rue du Lieutenant Didier 3', 'F-52200 Langres'],
    phone: '+33 3 25 86 00 20',
  },
  {
    city: 'Andover',
    country: 'United States',
    role: 'Customer support for North America',
    lines: ['149 River Street, Suite 2', 'Andover MA 01810'],
    phone: '+1 781 721 2100',
  },
  {
    city: 'Moscow',
    country: 'Russia',
    role: 'Customer support for Russia and Eastern Europe',
    lines: ['29 Pokrovka Street', 'Moscow 105062'],
    phone: '+7 495 621 70 45',
  },
];

export const machinesInFamily = (family: string) => machines.filter((machine) => machine.family === family);

export const familiesInRange = (range: Family['range']) => families.filter((family) => family.range === range);
