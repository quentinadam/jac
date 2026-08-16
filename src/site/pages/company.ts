import type { Page } from '../layout.ts';
import { button, textLink } from '../layout.ts';
import { blades, sectionHead, statList } from '../components.ts';
import { milestones, offices } from '../data.ts';

const values = [
  {
    title: 'Our customers set the brief',
    text:
      'Craftsmen with one shop and chains with a thousand ask us for the same thing in different words: bread that comes out right, every time. Every machine we have built started from one of those conversations.',
  },
  {
    title: 'A team, not a head office',
    text:
      'JAC is still family-owned. That is what lets us invest on a ten-year horizon with a customer instead of a quarterly one, and answer the phone ourselves.',
  },
  {
    title: 'Partners who live nearby',
    text:
      'Approved, trained distributors handle after-sales service in more than 90 countries — bread specialists in their own right, experts in our machines and their own markets.',
  },
  {
    title: 'Built where it is designed',
    text:
      'Belgium for slicing, France for dough. Owning the production chain is how we hold the quality line, and how we keep parts available for machines installed decades ago.',
  },
];

const sites = [
  {
    key: 'factory-liege',
    city: 'Liège',
    text:
      'Bread slicer production, R&D and customer support. Opened in 2019 on a reclaimed slag heap, tripling our slicing capacity.',
  },
  { key: 'boston', city: 'Andover, MA', text: 'JAC Boston has supported customers across North America since 2006.' },
  { key: 'moscow', city: 'Moscow', text: 'Open since 2018, covering Russia and Eastern Europe.' },
];

const body = `
      <section class="pagehead">
        <div class="shell pagehead__inner">
          <div>
            <p class="eyebrow">The company</p>
            <h1>Eighty years of listening to bakers.</h1>
            <p class="lead">
              Since 1946 our driver has been to innovate in order to support bakery professionals as well as we can.
              That longevity we owe above all to our customers — to their trust, their encouragement, and what they
              tell us about their work.
            </p>
          </div>
          <figure class="pagehead__shot pagehead__shot--photo">
            <img src="assets/photos/team.webp" alt="The JAC team in front of the Liège factory" width="1200" height="799" fetchpriority="high" />
          </figure>
        </div>
        ${blades}
      </section>

      <section class="band band--mist">
        <div class="shell">
          ${
  statList([
    { value: '1946', label: 'founded in Liège' },
    { value: '90+', label: 'countries with approved partners' },
    { value: '4', label: 'sites across three continents' },
    { value: '2', label: 'ranges: slicing and dough' },
  ])
}
        </div>
      </section>

      <section class="section" id="who-we-are">
        <div class="shell">
          ${
  sectionHead({
    eyebrow: 'Who we are',
    title: 'The bread specialists’ machine builder.',
    lead:
      'Our customers are bread specialists worldwide — craftsmen in a single shop, and chains running hundreds of points of sale. From the same dough they make an endless number of products. Meeting their expectations whatever their bread is what our machines are built for.',
  })
}
          <div class="grid grid--values">
            ${
  values
    .map((value) => `
            <article class="value" data-reveal>
              <h3>${value.title}</h3>
              <p>${value.text}</p>
            </article>`)
    .join('')
}
          </div>
        </div>
      </section>

      <section class="section section--dark" id="history">
        <div class="shell">
          ${
  sectionHead({
    eyebrow: 'Our history',
    title: 'From a Liège workshop to 90 countries.',
    lead: 'The initials are those of the founder’s children: Jacques, Amélie, Charles.',
  })
}
          <ol class="timeline">
            ${
  milestones
    .map((milestone) => `
            <li data-reveal>
              <span class="timeline__year">${milestone.year}</span>
              <p>${milestone.text}</p>
            </li>`)
    .join('')
}
          </ol>
        </div>
      </section>

      <section class="section" id="sites">
        <div class="shell split">
          <figure class="split__media" data-reveal>
            <img src="assets/photos/self-service-1974.webp" alt="Shoppers using a JAC self-service bread slicer in the 1970s" width="1200" height="676" loading="lazy" />
            <figcaption>1974 — the first self-service slicer, in a Belgian store.</figcaption>
          </figure>
          <div class="split__text">
            ${
  sectionHead({
    eyebrow: 'Our sites',
    title: 'Four addresses, one phone call.',
    lead:
      'Two factories that build the machines, and two commercial offices that keep customers close to the people who make them.',
  })
}
            <ul class="ticks">
              ${
  offices
    .map((office) => `<li><strong>${office.city}, ${office.country}</strong> — ${office.role}</li>`)
    .join('\n              ')
}
            </ul>
            ${textLink('Addresses and phone numbers', 'contact.html#addresses')}
          </div>
        </div>
      </section>

      <section class="section section--tight">
        <div class="shell">
          <div class="grid grid--sites">
            ${
  sites
    .map((site) => `
            <figure class="sitecard" data-reveal>
              <img src="assets/photos/${site.key}.webp" alt="JAC ${site.city}" width="1200" height="676" loading="lazy" />
              <figcaption><strong>${site.city}</strong>${site.text}</figcaption>
            </figure>`)
    .join('')
}
          </div>
        </div>
      </section>

      <section class="cta" id="careers">
        <div class="shell cta__inner">
          <div>
            <p class="eyebrow eyebrow--light">Careers</p>
            <h2>Come and build machines with us.</h2>
            <p>We are hiring in Liège and Langres — engineering, assembly, field service and sales. If bread and machines both interest you, we should talk.</p>
          </div>
          <div class="cta__actions">
            ${button('See open roles', 'contact.html', 'light')}
          </div>
        </div>
      </section>
`;

export const company: Page = {
  id: 'company',
  file: 'company.html',
  title: 'Company — JAC',
  description:
    'JAC has been building bakery machines in Liège since 1946: who we are, our history from the first bread slicer to today, and our four sites worldwide.',
  body,
};
