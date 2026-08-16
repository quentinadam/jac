import type { Page } from '../layout.ts';
import { button } from '../layout.ts';
import { blades, familySection, sectionHead, statList } from '../components.ts';
import { familiesInRange } from '../data.ts';

const range = familiesInRange('dough');

const stages = [
  {
    step: 'Ferment',
    text: 'Levain held at temperature and agitated on a schedule, so what leaves the tank is the same every morning.',
  },
  {
    step: 'Divide',
    text: 'Hydraulic, volumetric or container loading — accurate portions without tearing the structure you built.',
  },
  {
    step: 'Rest',
    text: 'Proofers that give the dough the time it needs between dividing and shaping, at the pace of your line.',
  },
  {
    step: 'Shape',
    text: 'Moulders for baguettes, batards, rolls and flat breads, from 1,200 to 2,400 pieces an hour.',
  },
];

const body = `
      <section class="pagehead">
        <div class="shell pagehead__inner">
          <div>
            <p class="eyebrow">02 — Dough processing</p>
            <h1>Dough processing</h1>
            <p class="lead">
              A dough machine is no longer just a mixer. It is everything that ferments, divides, rests and shapes —
              built to take the strain out of the work without taking the craft out of the bread.
            </p>
            <div class="hero__actions">
              ${button('Request a quote', 'contact.html#quote')}
              ${button('Talk to an engineer', 'contact.html', 'ghost')}
            </div>
          </div>
          <figure class="pagehead__shot">
            <img src="assets/machines/paniform.webp" alt="JAC Paniform divider-moulder" width="760" height="760" fetchpriority="high" />
          </figure>
        </div>
        ${blades}
      </section>

      <section class="band band--mist">
        <div class="shell">
          ${
  statList([
    { value: '8', label: 'families, mixer to oven' },
    { value: '32', label: 'machines in the range' },
    { value: '2,400/h', label: 'pieces on our fastest moulder' },
    { value: 'Langres', label: 'designed and built in France' },
  ])
}
        </div>
      </section>

      <section class="section section--tight">
        <div class="shell">
          ${
  sectionHead({
    eyebrow: 'The sequence',
    title: 'Four stages, one continuous idea.',
    lead:
      'Machines that hand the dough to each other cleanly, whether you buy one of them or a complete production line.',
  })
}
          <ol class="stages">
            ${
  stages
    .map((stage, index) => `
            <li data-reveal>
              <span class="stages__number">${String(index + 1).padStart(2, '0')}</span>
              <h3>${stage.step}</h3>
              <p>${stage.text}</p>
            </li>`)
    .join('')
}
          </ol>
        </div>
      </section>

      <nav class="familynav" aria-label="Dough processing families">
        <div class="shell familynav__inner">
          ${range.map((family) => `<a href="#${family.slug}">${family.name}</a>`).join('')}
        </div>
      </nav>

      ${range.map((family, index) => familySection(family, index)).join('')}

      <section class="cta">
        <div class="shell cta__inner">
          <div>
            <p class="eyebrow eyebrow--light">Next step</p>
            <h2>Bring us your process.</h2>
            <p>Hydration, weights, output per hour, the floor you have to fit it on. We will tell you honestly whether it is one machine or a line.</p>
          </div>
          <div class="cta__actions">
            ${button('Request a quote', 'contact.html#quote', 'light')}
            ${button('Ask a question', 'contact.html', 'ghost')}
          </div>
        </div>
      </section>
`;

export const doughProcessing: Page = {
  id: 'dough',
  file: 'dough-processing.html',
  title: 'Dough processing — JAC',
  description:
    'JAC dough processing machines: sourdough fermentors, hydraulic and volumetric dividers, divider-moulders, proofers, moulders and automated production lines.',
  body,
};
