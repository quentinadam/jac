import type { Page } from '../layout.ts';
import { blades, sectionHead } from '../components.ts';
import { offices } from '../data.ts';

const enquiries = [
  'A quotation',
  'Product information',
  'A distributor near me',
  'Technical assistance',
  'Spare parts',
  'Your catalogue',
  'Something else',
];

const field = (
  { id, label, type = 'text', required = false, autocomplete }: {
    id: string;
    label: string;
    type?: string;
    required?: boolean;
    autocomplete?: string;
  },
) => `
            <p class="field">
              <label for="${id}">${label}${required ? ' <abbr title="required">*</abbr>' : ''}</label>
              <input id="${id}" name="${id}" type="${type}"${required ? ' required' : ''}${
  autocomplete ? ` autocomplete="${autocomplete}"` : ''
} />
            </p>`;

const body = `
      <section class="pagehead pagehead--slim">
        <div class="shell">
          <p class="eyebrow">Contact</p>
          <h1>Let’s talk about your bakery.</h1>
          <p class="lead">
            Questions about a machine, about our distributors, or about the technicians who service them — write to us
            and we will come back to you.
          </p>
        </div>
        ${blades}
      </section>

      <section class="section section--tight" id="quote">
        <div class="shell contact">
          <form class="quoteform" data-quote-form novalidate>
            <h2>Request a quote</h2>
            <p class="quoteform__intro">
              <span data-form-machine></span> Fields marked <abbr title="required">*</abbr> are required.
            </p>
            <div class="fields">
              ${field({ id: 'name', label: 'Name', required: true, autocomplete: 'name' })}
              ${field({ id: 'company', label: 'Company', autocomplete: 'organization' })}
              ${field({ id: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' })}
              ${field({ id: 'phone', label: 'Phone', type: 'tel', autocomplete: 'tel' })}
              ${field({ id: 'country', label: 'Country', required: true, autocomplete: 'country-name' })}
              <p class="field">
                <label for="subject">I am looking for <abbr title="required">*</abbr></label>
                <select id="subject" name="subject" required>
                  ${enquiries.map((item) => `<option>${item}</option>`).join('\n                  ')}
                </select>
              </p>
              <p class="field field--wide">
                <label for="message">How can we help?</label>
                <textarea id="message" name="message" rows="5" placeholder="The bread you make, the volume you run, the space you have."></textarea>
              </p>
              <p class="field field--wide field--check">
                <input id="consent" name="consent" type="checkbox" required />
                <label for="consent">I accept the site’s privacy policy. <abbr title="required">*</abbr></label>
              </p>
            </div>
            <div class="quoteform__foot">
              <button class="button button--primary" type="submit">Send my request</button>
              <p class="quoteform__note" data-form-note>
                This redesign has no server behind it: sending opens your email client with the message ready to go.
              </p>
            </div>
          </form>

          <aside class="contactside">
            <div class="contactside__block" id="warranty">
              <p class="eyebrow">Warranty</p>
              <h2>Five years on parts</h2>
              <p>
                Register your machine to activate five years of parts cover, wear items excepted. Keep the machine or
                its manual to hand — you will need the serial number.
              </p>
              <p><a class="textlink" href="mailto:info@jac-machines.com?subject=Warranty%20activation">Activate my warranty<svg class="arrow" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6h13M9.5 1.5 14 6l-4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a></p>
            </div>
            <div class="contactside__block">
              <p class="eyebrow">Spare parts</p>
              <h2>Genuine parts, direct</h2>
              <p>
                Parts bought from JAC are the parts the machine was built with — no guesswork about whether they will
                fit a slicer or a divider that has been running for twenty years.
              </p>
            </div>
            <div class="contactside__block">
              <p class="eyebrow">Distributors</p>
              <h2>Someone close by</h2>
              <p>
                Approved partners in more than 90 countries handle installation and after-sales service. Tell us where
                you are and we will put you in touch.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section class="section" id="addresses">
        <div class="shell">
          ${
  sectionHead({
    eyebrow: 'Addresses',
    title: 'Four sites, three continents.',
  })
}
          <div class="grid grid--offices">
            ${
  offices
    .map((office) => `
            <article class="office" data-reveal>
              <h3>${office.city}<span>${office.country}</span></h3>
              <p class="office__role">${office.role}</p>
              <address>
                ${office.lines.join('<br />')}<br />
                <a href="tel:${office.phone.replace(/[^+\d]/g, '')}">${office.phone}</a>
              </address>
            </article>`)
    .join('')
}
          </div>
        </div>
      </section>
`;

export const contact: Page = {
  id: 'contact',
  file: 'contact.html',
  title: 'Contact — JAC',
  description:
    'Contact JAC for a quotation, product information, spare parts or technical assistance. Offices in Liège, Langres, Andover and Moscow.',
  body,
};
