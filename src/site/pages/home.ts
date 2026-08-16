import type { Page } from '../layout.ts';
import { button, textLink } from '../layout.ts';
import { blades, machineCard, sectionHead, statList } from '../components.ts';
import { machines } from '../data.ts';

const featured = ['eco-plus', 'varia-pro', 'paniform', 'divimax']
  .map((slug) => machines.find((machine) => machine.slug === slug)!);

const featuredLabels: Record<string, string> = {
  'eco-plus': 'Bread slicer',
  'varia-pro': 'Bread slicer',
  'paniform': 'Divider-moulder',
  'divimax': 'Volumetric divider',
};

const innovations = [
  {
    name: 'ISC®',
    year: '2005',
    text:
      'Intelligent Slicing Control reads the loaf and matches the cutting speed to it, so a dense rye and a soft white leave the same machine intact.',
  },
  {
    name: 'Self-service',
    year: '1974',
    text:
      'JAC built the first slicer a shopper could use alone. Fifty years on it is still the standard shape of a supermarket bread aisle.',
  },
  {
    name: 'Easyflour',
    year: '2018',
    text: 'A flour dispenser built into the divider-moulder, metered by the cycle rather than by hand.',
  },
  {
    name: 'Clic & Cut',
    year: '2018',
    text: 'Grids that change without tools, so one machine covers a whole product range between two batches.',
  },
  {
    name: 'Automode',
    year: '',
    text: 'The machine starts when the loaf arrives and stops when it leaves. No pedal, no button, no waiting.',
  },
  {
    name: 'Easyclean',
    year: '2018',
    text: 'Non-stick floats and smooth internal walls, designed so that the end-of-day clean takes minutes.',
  },
];

const news = [
  {
    date: '10 August 2026',
    title: '80 years young',
    text:
      'Eight decades after Jacques, Amélie and Charles gave the company their initials, the whole team gathered in Liège.',
    image: 'team',
  },
  {
    date: '3 August 2026',
    title: 'Come and see us at Südback',
    text: 'Our newest machines will be running on the stand in Stuttgart, from 24 to 27 October.',
    image: 'moscow',
  },
  {
    date: '31 May 2026',
    title: 'Meet the Easyform',
    text: 'A new lever-operated divider joins the divider-moulder range — compact, simple, and grid-compatible.',
    image: 'easyform',
    product: true,
  },
];

const body = `
      <section class="hero">
        <div class="shell hero__inner">
          <div class="hero__title">
            <p class="eyebrow">Liège, Belgium · since 1946</p>
            <h1>Machines for people who&nbsp;make bread.</h1>
          </div>
          <div class="hero__text">
            <p class="lead">
              Bread slicers and dough processing machines, designed and built in our own factories in Belgium and
              France, and looked after by our own people in more than 90 countries.
            </p>
            <div class="hero__actions">
              ${button('Explore bread slicers', 'bread-slicers.html')}
              ${button('Explore dough processing', 'dough-processing.html', 'ghost')}
            </div>
          </div>
        </div>
        <figure class="hero__shot">
          <img src="assets/photos/slicer-lineup.webp" alt="The JAC range of professional bread slicers, side by side" width="1355" height="290" fetchpriority="high" />
        </figure>
        ${blades}
      </section>

      <section class="band band--mist">
        <div class="shell">
          ${
  statList([
    { value: '80 years', label: 'of building bakery machines' },
    { value: '90 countries', label: 'served by approved partners' },
    { value: '2 factories', label: 'in Liège and Langres' },
    { value: '5 years', label: 'parts warranty on every machine' },
  ])
}
        </div>
      </section>

      <section class="section" id="ranges">
        <div class="shell">
          ${
  sectionHead({
    eyebrow: 'Two ranges',
    title: 'Everything between the mixer and the counter.',
    lead: 'One company, two production sites, and two families of machines that meet in the middle of a bakery’s day.',
  })
}
          <div class="rangecards">
            <a class="rangecard" href="bread-slicers.html" data-reveal>
              <div class="rangecard__shot">
                <img src="assets/machines/family-slicers.webp" alt="JAC bread slicers" width="680" height="680" loading="lazy" />
              </div>
              <div class="rangecard__body">
                <p class="eyebrow">01 — Bread slicing</p>
                <h3>Bread slicers</h3>
                <p>
                  Fifteen machines, from a compact bench slicer to a 500 loaves an hour production model, plus the
                  self-service slicer we invented in 1974.
                </p>
                <span class="textlink">See the range<svg class="arrow" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6h13M9.5 1.5 14 6l-4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
              </div>
            </a>
            <a class="rangecard" href="dough-processing.html" data-reveal>
              <div class="rangecard__shot">
                <img src="assets/machines/family-divider-moulders.webp" alt="JAC dough processing machines" width="680" height="680" loading="lazy" />
              </div>
              <div class="rangecard__body">
                <p class="eyebrow">02 — Dough processing</p>
                <h3>Dough processing</h3>
                <p>
                  Fermentors, dividers, proofers, moulders and complete production lines — eight families covering
                  every stage between mixing and the oven.
                </p>
                <span class="textlink">See the range<svg class="arrow" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6h13M9.5 1.5 14 6l-4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section class="section section--tight" id="featured">
        <div class="shell">
          ${
  sectionHead({
    eyebrow: 'Selected machines',
    title: 'Four that bakers keep coming back to.',
  })
}
          <div class="grid grid--machines">
            ${featured.map((machine) => machineCard(machine, featuredLabels[machine.slug])).join('')}
          </div>
          <p class="section__after">
            ${textLink('See all 47 machines', 'bread-slicers.html')}
          </p>
        </div>
      </section>

      <section class="section section--dark" id="innovation">
        <div class="shell">
          ${
  sectionHead({
    eyebrow: 'Innovation',
    title: 'Patents that quietly changed a bakery’s day.',
    lead:
      'Every one of these started as a customer telling us what got in the way. Our engineers in Liège and Langres did the rest.',
  })
}
          <div class="grid grid--innovation">
            ${
  innovations
    .map((item) => `
            <article class="innovation" data-reveal>
              ${item.year ? `<p class="innovation__year">${item.year}</p>` : ''}
              <h3>${item.name}</h3>
              <p>${item.text}</p>
            </article>`)
    .join('')
}
          </div>
        </div>
      </section>

      <section class="section" id="made">
        <div class="shell split">
          <figure class="split__media" data-reveal>
            <img src="assets/photos/factory-liege.webp" alt="The JAC factory in Liège" width="1200" height="676" loading="lazy" />
            <figcaption>Liège, Belgium — built on a reclaimed slag heap, opened 2019.</figcaption>
          </figure>
          <div class="split__text">
            ${
  sectionHead({
    eyebrow: 'Made by us',
    title: 'Two factories. No subcontracted quality.',
    lead:
      'Every JAC machine is manufactured in Liège or Langres. Owning the production chain is what lets us guarantee the build — and keep spare parts on the shelf for machines that have been running for decades.',
  })
}
            <ul class="ticks">
              <li>Slicers designed, built and supported in Liège</li>
              <li>Dough processing designed, built and supported in Langres</li>
              <li>Genuine spare parts direct from the manufacturer</li>
              <li>A family-owned company, still investing for the long term</li>
            </ul>
            ${textLink('More about the company', 'company.html')}
          </div>
        </div>
      </section>

      <section class="cta">
        <div class="shell cta__inner">
          <div>
            <p class="eyebrow eyebrow--light">Warranty</p>
            <h2>Five years of parts cover, included.</h2>
            <p>Register your machine and your warranty runs for five years on parts, wear items excepted. Have the machine or its manual to hand — you will need the serial number.</p>
          </div>
          <div class="cta__actions">
            ${button('Activate my warranty', 'contact.html#warranty', 'light')}
            ${button('Talk to us', 'contact.html', 'ghost')}
          </div>
        </div>
      </section>

      <section class="section" id="news">
        <div class="shell">
          ${
  sectionHead({
    eyebrow: 'News',
    title: 'What we are up to.',
  })
}
          <div class="grid grid--news">
            ${
  news
    .map((item) => `
            <article class="newscard" data-reveal>
              <div class="newscard__shot${'product' in item && item.product ? ' newscard__shot--product' : ''}">
                <img src="assets/photos/${item.image}.webp" alt="" width="1200" height="676" loading="lazy" />
              </div>
              <p class="newscard__date">${item.date}</p>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>`)
    .join('')
}
          </div>
        </div>
      </section>
`;

export const home: Page = {
  id: 'home',
  file: 'index.html',
  title: 'JAC — Bread slicers and dough processing machines since 1946',
  description:
    'JAC designs and builds professional bread slicers and dough processing machines in Belgium and France, for bakeries, supermarkets and restaurants in more than 90 countries.',
  body,
};
