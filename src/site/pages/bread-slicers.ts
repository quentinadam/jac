import type { Page } from '../layout.ts';
import { button } from '../layout.ts';
import { blades, familySection, sectionHead, statList } from '../components.ts';
import { familiesInRange } from '../data.ts';

const range = familiesInRange('slicing');

const features = [
  {
    title: 'ISC® adaptive cut',
    text:
      'The machine senses the loaf and sets the cutting speed for it. Dense rye and soft white come off the same blades intact. A JAC patent.',
  },
  {
    title: 'Automode',
    text:
      'The cycle starts when the loaf arrives and stops when it leaves — no pedal, no button, no waiting on the operator.',
  },
  {
    title: 'Variable thickness',
    text: 'From 4 to 30 mm depending on the model, changed between two loaves rather than between two batches.',
  },
  {
    title: 'Automatic claw',
    text:
      'The claw finds its own position, so the first slice is as square as the last one and hands stay clear of the blades.',
  },
  {
    title: 'Jacfix',
    text:
      'Slice management that holds the loaf together on the way out, ready for bagging without a second pair of hands.',
  },
  {
    title: 'Cleaning by design',
    text:
      'Blades, crumb tray and covers open without tools. The end-of-day clean is measured in minutes, not staff hours.',
  },
];

const body = `
      <section class="pagehead">
        <div class="shell pagehead__inner">
          <div>
            <p class="eyebrow">01 — Bread slicing</p>
            <h1>Bread slicers</h1>
            <p class="lead">
              An essential machine for bakeries, supermarkets and restaurants. Table-top or on castors, 45 or 60 cm
              cutting width, single, double or variable slicing — with a traditional look or an uncluttered one, in a
              choice of colours.
            </p>
            <div class="hero__actions">
              ${button('Request a quote', 'contact.html#quote')}
              ${button('Find a distributor', 'contact.html', 'ghost')}
            </div>
          </div>
          <figure class="pagehead__shot">
            <img src="assets/machines/eco-plus.webp" alt="JAC Eco+ bread slicer" width="760" height="760" fetchpriority="high" />
          </figure>
        </div>
        ${blades}
      </section>

      <section class="band band--mist">
        <div class="shell">
          ${
  statList([
    { value: '1949', label: 'first JAC bread slicer' },
    { value: '1974', label: 'we invented self-service slicing' },
    { value: '500/h', label: 'loaves on our fastest model' },
    { value: '15', label: 'slicing machines in the range' },
  ])
}
        </div>
      </section>

      <nav class="familynav" aria-label="Slicer families">
        <div class="shell familynav__inner">
          ${range.map((family) => `<a href="#${family.slug}">${family.name}</a>`).join('')}
          <a href="#features">Innovations</a>
        </div>
      </nav>

      ${range.map((family, index) => familySection(family, index)).join('')}

      <section class="section section--dark" id="features">
        <div class="shell">
          ${
  sectionHead({
    eyebrow: 'Why a JAC slicer',
    title: 'Innovation you notice on a Saturday morning.',
    lead:
      'Nothing here is a specification for its own sake. Each one removes a movement, a wait or a risk from the person standing at the machine.',
  })
}
          <div class="grid grid--innovation">
            ${
  features
    .map((feature) => `
            <article class="innovation" data-reveal>
              <h3>${feature.title}</h3>
              <p>${feature.text}</p>
            </article>`)
    .join('')
}
          </div>
        </div>
      </section>

      <section class="cta">
        <div class="shell cta__inner">
          <div>
            <p class="eyebrow eyebrow--light">Next step</p>
            <h2>Tell us about your bread.</h2>
            <p>Loaf shape, volume, the space you have and the people who will use it — that is usually enough for us to point you at two or three machines.</p>
          </div>
          <div class="cta__actions">
            ${button('Request a quote', 'contact.html#quote', 'light')}
            ${button('Ask a question', 'contact.html', 'ghost')}
          </div>
        </div>
      </section>
`;

export const breadSlicers: Page = {
  id: 'slicing',
  file: 'bread-slicers.html',
  title: 'Bread slicers — JAC',
  description:
    'The JAC bread slicer range: professional slicers from a compact bench machine to 500 loaves an hour, self-service slicers for retail, and bagging equipment.',
  body,
};
