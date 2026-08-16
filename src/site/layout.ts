/** The shell every page is rendered into: document head, masthead, footer. */

import { familiesInRange, machinesInFamily, offices } from './data.ts';

/** Where the built site lives, for the absolute URLs link previews need. */
export const origin = 'https://quentinadam.github.io/jac/';

const organisation = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JAC',
  url: origin,
  logo: `${origin}assets/logo-jac.svg`,
  foundingDate: '1946',
  description: 'Manufacturer of professional bread slicers and dough processing machines, founded in Liège in 1946.',
  address: offices.map((office) => ({
    '@type': 'PostalAddress',
    streetAddress: office.lines[0],
    addressLocality: office.city,
    addressCountry: office.country,
  })),
});

export type PageId = 'home' | 'slicing' | 'dough' | 'company' | 'contact';

export type Page = {
  id: PageId;
  file: string;
  title: string;
  description: string;
  body: string;
};

const icon = {
  chevron:
    '<svg class="chevron" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  arrow:
    '<svg class="arrow" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6h13M9.5 1.5 14 6l-4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

/** `Explore the range →` — the link style used at the end of every section. */
export const textLink = (label: string, href: string) => `<a class="textlink" href="${href}">${label}${icon.arrow}</a>`;

export const button = (label: string, href: string, variant: 'primary' | 'ghost' | 'light' = 'primary') =>
  `<a class="button button--${variant}" href="${href}">${label}</a>`;

const megamenu = (id: 'slicing' | 'dough', href: string, blurb: string) => {
  const items = familiesInRange(id === 'slicing' ? 'slicing' : 'dough')
    .map((family) => `
        <a class="megamenu__item" href="${href}#${family.slug}">
          <img src="assets/machines/${family.image}.webp" alt="" width="72" height="72" loading="lazy" />
          <span>
            <strong>${family.name}</strong>
            <em>${machinesInFamily(family.slug).length} machines</em>
          </span>
        </a>`)
    .join('');

  return `
      <div class="megamenu" id="menu-${id}" hidden>
        <div class="shell megamenu__inner">
          <div class="megamenu__lead">
            <p class="eyebrow">${id === 'slicing' ? 'Bread slicing' : 'Dough processing'}</p>
            <p>${blurb}</p>
            ${textLink('See the whole range', href)}
          </div>
          <div class="megamenu__grid">${items}</div>
        </div>
      </div>`;
};

const navItem = (id: PageId, current: PageId, label: string, href: string) => {
  const active = id === current ? ' aria-current="page"' : '';
  if (id !== 'slicing' && id !== 'dough') {
    return `<li class="mainnav__item"><a class="mainnav__link" href="${href}"${active}>${label}</a></li>`;
  }
  // The label always goes to the range page; the chevron next to it opens the panel,
  // so a mouse can hover, a keyboard can tab, and a thumb can expand.
  return `<li class="mainnav__item" data-has-menu>
        <a class="mainnav__link" href="${href}"${active}>${label}</a>
        <button class="mainnav__toggle" type="button" aria-expanded="false" aria-controls="menu-${id}">
          <span class="visually-hidden">Show the ${label.toLowerCase()} range</span>${icon.chevron}
        </button>
        ${
    megamenu(
      id,
      href,
      id === 'slicing'
        ? 'Slicers for bakeries, supermarkets and restaurants — from a compact bench machine to 500 loaves an hour.'
        : 'Fermenting, dividing, resting, shaping — machines built in Langres for every stage between mixer and oven.',
    )
  }
      </li>`;
};

const masthead = (current: PageId) => `
  <a class="skiplink" href="#main">Skip to content</a>
  <header class="masthead" data-masthead>
    <div class="shell masthead__row">
      <a class="logo" href="index.html" aria-label="JAC — home">
        <img src="assets/logo-jac.svg" alt="" width="44" height="44" />
        <span class="logo__text">Bakery machines<br />since 1946</span>
      </a>
      <nav class="mainnav" aria-label="Main">
        <ul class="mainnav__list">
          ${navItem('slicing', current, 'Bread slicers', 'bread-slicers.html')}
          ${navItem('dough', current, 'Dough processing', 'dough-processing.html')}
          ${navItem('company', current, 'Company', 'company.html')}
          ${navItem('contact', current, 'Contact', 'contact.html')}
        </ul>
        <div class="mainnav__cta">
          ${button('Request a quote', 'contact.html#quote')}
          <p>Liège · Langres · Andover · Moscow</p>
        </div>
      </nav>
      <div class="masthead__actions">
        ${button('Request a quote', 'contact.html#quote')}
        <button class="burger" type="button" aria-expanded="false" aria-controls="mainnav" data-nav-toggle>
          <span class="burger__bars" aria-hidden="true"></span>
          <span class="visually-hidden">Menu</span>
        </button>
      </div>
    </div>
  </header>`;

const footer = () => {
  const column = (title: string, href: string, range: 'slicing' | 'dough') => `
        <div class="sitefoot__column">
          <h2><a href="${href}">${title}</a></h2>
          <ul>${
    familiesInRange(range)
      .map((family) => `<li><a href="${href}#${family.slug}">${family.name}</a></li>`)
      .join('')
  }</ul>
        </div>`;

  return `
  <footer class="sitefoot">
    <div class="shell">
      <div class="sitefoot__top">
        <div class="sitefoot__brand">
          <img src="assets/logo-jac.svg" alt="" width="48" height="48" />
          <p class="sitefoot__claim">Bread slicers and dough processing machines, built in Belgium and France since 1946.</p>
          <p class="sitefoot__note">Liège · Langres · Andover · Moscow</p>
        </div>
        ${column('Bread slicers', 'bread-slicers.html', 'slicing')}
        ${column('Dough processing', 'dough-processing.html', 'dough')}
        <div class="sitefoot__column">
          <h2><a href="company.html">Company</a></h2>
          <ul>
            <li><a href="company.html#who-we-are">Who we are</a></li>
            <li><a href="company.html#history">Our history</a></li>
            <li><a href="company.html#sites">Our sites</a></li>
            <li><a href="company.html#careers">Careers</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="contact.html#warranty">Warranty &amp; spare parts</a></li>
          </ul>
        </div>
      </div>
      <div class="sitefoot__bottom">
        <p>© ${new Date().getFullYear()} JAC. All rights reserved.</p>
        <p class="sitefoot__disclaimer">
          An independent design concept for jac-machines.com. Product photography, machine names and company facts belong to JAC.
        </p>
      </div>
    </div>
  </footer>`;
};

export const render = (page: Page) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="canonical" href="${origin}${page.file}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="JAC" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${origin}${page.file}" />
    <meta property="og:image" content="${origin}assets/og.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${organisation}</script>
    <link rel="icon" href="assets/logo-jac.svg" type="image/svg+xml" />
    <link rel="preload" href="fonts/archivo-latin.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="main.js"></script>
  </head>
  <body data-page="${page.id}">
${masthead(page.id)}
    <main id="main">
${page.body}
    </main>
${footer()}
  </body>
</html>
`;
