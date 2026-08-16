/** Small pieces of markup shared by more than one page. */

import type { Family, Machine } from './data.ts';
import { machinesInFamily } from './data.ts';

export const sectionHead = (
  { eyebrow, title, lead, align = 'start' }: {
    eyebrow: string;
    title: string;
    lead?: string;
    align?: 'start' | 'center';
  },
) => `
        <header class="sectionhead sectionhead--${align}">
          <p class="eyebrow">${eyebrow}</p>
          <h2>${title}</h2>
          ${lead ? `<p class="lead">${lead}</p>` : ''}
        </header>`;

/** Each card is a link to the quote form, which prefills itself from the query. */
export const machineCard = (machine: Machine, label?: string) => `
          <a class="machine" href="contact.html?machine=${encodeURIComponent(machine.name)}#quote" data-reveal>
            <div class="machine__shot">
              <img src="assets/machines/${machine.slug}.webp" alt="JAC ${machine.name}" width="760" height="760" loading="lazy" decoding="async" />
            </div>
            <div class="machine__body">
              ${label ? `<p class="machine__label">${label}</p>` : ''}
              <h3>${machine.name}</h3>
              <p class="machine__blurb">${machine.blurb}</p>
              <ul class="machine__specs">
                ${machine.bullets.map((bullet) => `<li>${bullet}</li>`).join('\n                ')}
              </ul>
              <span class="machine__cta">Request a quote${'<svg class="arrow" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6h13M9.5 1.5 14 6l-4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'}</span>
            </div>
          </a>`;

/** One family of machines: a header with the family shot, then the machines themselves. */
export const familySection = (family: Family, index: number) => `
      <section class="family" id="${family.slug}">
        <div class="shell">
          <header class="family__head">
            <div class="family__shot">
              <img src="assets/machines/${family.image}.webp" alt="" width="680" height="680" loading="lazy" />
            </div>
            <div class="family__text">
              <p class="eyebrow">${String(index + 1).padStart(2, '0')} — ${
  machinesInFamily(family.slug).length
} machines</p>
              <h2>${family.name}</h2>
              <p class="lead">${family.summary}</p>
            </div>
          </header>
          <div class="grid grid--machines">
            ${machinesInFamily(family.slug).map((machine) => machineCard(machine)).join('')}
          </div>
        </div>
      </section>`;

/** The comb of vertical rules that stands in for a slicer's blade stack. */
export const blades = '<div class="blades" aria-hidden="true"></div>';

export const statList = (stats: { value: string; label: string }[]) => `
        <ul class="stats">
          ${
  stats
    .map((stat) => `<li><strong>${stat.value}</strong><span>${stat.label}</span></li>`)
    .join('\n          ')
}
        </ul>`;
