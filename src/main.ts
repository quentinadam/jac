/**
 * The site's behaviour: the masthead menus, the mobile drawer, scroll reveals,
 * the family navigation's current-section marker, and the quote form.
 *
 * Everything here is progressive: without JavaScript the pages still read, the
 * menus fall back to the range pages they link to, and the form still validates.
 */

const DESKTOP = '(min-width: 62rem)';

/* ---------------------------------------------------------------- masthead */

const masthead = document.querySelector<HTMLElement>('[data-masthead]');
const menuItems = Array.from(document.querySelectorAll<HTMLElement>('[data-has-menu]'));

function menuParts(item: HTMLElement) {
  const trigger = item.querySelector<HTMLButtonElement>('.mainnav__toggle');
  const panel = item.querySelector<HTMLElement>('.megamenu');
  return trigger && panel ? { trigger, panel } : null;
}

function setMenu(item: HTMLElement, open: boolean) {
  const parts = menuParts(item);
  if (!parts) {
    return;
  }
  parts.trigger.setAttribute('aria-expanded', String(open));
  parts.panel.hidden = !open;
  item.classList.toggle('is-open', open);
}

function closeMenus(except?: HTMLElement) {
  for (const item of menuItems) {
    if (item !== except) {
      setMenu(item, false);
    }
  }
}

for (const item of menuItems) {
  const parts = menuParts(item);
  if (!parts) {
    continue;
  }

  parts.trigger.addEventListener('click', () => {
    const open = parts.trigger.getAttribute('aria-expanded') === 'true';
    closeMenus(item);
    setMenu(item, !open);
  });

  // On a mouse, the panels behave like menus; on touch and on mobile, like accordions.
  item.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse' && matchMedia(DESKTOP).matches) {
      closeMenus(item);
      setMenu(item, true);
    }
  });

  item.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse' && matchMedia(DESKTOP).matches) {
      setMenu(item, false);
    }
  });

  item.addEventListener('focusout', () => {
    if (matchMedia(DESKTOP).matches) {
      requestAnimationFrame(() => {
        if (!item.contains(document.activeElement)) {
          setMenu(item, false);
        }
      });
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenus();
    setDrawer(false);
  }
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target instanceof Node && masthead && !masthead.contains(target)) {
    closeMenus();
  }
});

/* ------------------------------------------------------------ mobile drawer */

const drawerToggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');

function setDrawer(open: boolean) {
  if (!drawerToggle) {
    return;
  }
  drawerToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('is-drawer-open', open);
  if (!open) {
    closeMenus();
  }
}

drawerToggle?.addEventListener('click', () => {
  setDrawer(drawerToggle.getAttribute('aria-expanded') !== 'true');
});

for (const link of document.querySelectorAll('.mainnav a')) {
  link.addEventListener('click', () => setDrawer(false));
}

matchMedia(DESKTOP).addEventListener('change', () => {
  setDrawer(false);
  closeMenus();
});

/* --------------------------------------------------------- scrolled header */

const onScroll = () => masthead?.classList.toggle('is-scrolled', globalThis.scrollY > 8);
onScroll();
globalThis.addEventListener('scroll', onScroll, { passive: true });

/* ------------------------------------------------------------ reveals */

const revealable = document.querySelectorAll<HTMLElement>('[data-reveal]');
const stillness = matchMedia('(prefers-reduced-motion: reduce)');

if (stillness.matches || !('IntersectionObserver' in globalThis)) {
  for (const node of revealable) {
    node.classList.add('is-revealed');
  }
} else {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  for (const node of revealable) {
    observer.observe(node);
  }
}

/* ------------------------------------------- family navigation, current link */

const familyNav = document.querySelector<HTMLElement>('.familynav__inner');

if (familyNav) {
  const links = Array.from(familyNav.querySelectorAll('a'))
    .map((link) => ({ link, section: document.getElementById(link.hash.slice(1)) }))
    .filter((entry): entry is { link: HTMLAnchorElement; section: HTMLElement } => entry.section !== null);

  // The current family is the last one whose top has passed the navigation bar;
  // above the first one, nothing is current.
  let marked: HTMLAnchorElement | null = null;

  const markCurrent = () => {
    const line = familyNav.getBoundingClientRect().bottom + 8;
    let current: HTMLAnchorElement | null = null;
    for (const { link, section } of links) {
      if (section.getBoundingClientRect().top <= line) {
        current = link;
      }
    }
    if (current === marked) {
      return;
    }
    marked = current;
    for (const { link } of links) {
      link.classList.toggle('is-current', link === current);
    }
    // Keep the current chip in view in the horizontally scrolling bar.
    if (current) {
      const bar = familyNav.getBoundingClientRect();
      const chip = current.getBoundingClientRect();
      if (chip.left < bar.left || chip.right > bar.right) {
        familyNav.scrollBy({ left: chip.left - bar.left - 16, behavior: 'smooth' });
      }
    }
  };

  markCurrent();
  globalThis.addEventListener('scroll', markCurrent, { passive: true });
  globalThis.addEventListener('resize', markCurrent, { passive: true });
}

/* ---------------------------------------------------------------- the form */

const form = document.querySelector<HTMLFormElement>('[data-quote-form]');

// A machine card links here as `contact.html?machine=Pico`, so the form can open
// with the enquiry already written.
if (form) {
  const machine = new URL(globalThis.location.href).searchParams.get('machine');
  const message = form.querySelector<HTMLTextAreaElement>('#message');
  const subject = form.querySelector<HTMLSelectElement>('#subject');

  if (machine && message && !message.value) {
    message.value = `I would like a quote for the ${machine}. `;
    if (subject) {
      subject.value = 'A quotation';
    }
    form.querySelector<HTMLElement>('[data-form-machine]')?.replaceChildren(
      `Your enquiry is about the ${machine}.`,
    );
  }
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const invalid of form.querySelectorAll('.is-invalid')) {
    invalid.classList.remove('is-invalid');
  }

  if (!form.checkValidity()) {
    const fields = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      'input, select, textarea',
    );
    for (const field of fields) {
      field.closest('.field')?.classList.toggle('is-invalid', !field.checkValidity());
    }
    form.querySelector<HTMLElement>('.is-invalid input, .is-invalid select, .is-invalid textarea')?.focus();
    return;
  }

  const data = new FormData(form);
  const value = (name: string) => String(data.get(name) ?? '').trim();

  const lines = [
    `Name: ${value('name')}`,
    `Company: ${value('company') || '—'}`,
    `Email: ${value('email')}`,
    `Phone: ${value('phone') || '—'}`,
    `Country: ${value('country')}`,
    `Looking for: ${value('subject')}`,
    '',
    value('message') || '(no message)',
  ];

  const subject = `Enquiry — ${value('subject')}`;
  const href = `mailto:info@jac-machines.com?subject=${encodeURIComponent(subject)}&body=${
    encodeURIComponent(lines.join('\n'))
  }`;

  const note = form.querySelector<HTMLElement>('[data-form-note]');
  if (note) {
    note.textContent = 'Your email client should now be open with the request ready to send.';
    note.classList.add('is-sent');
  }

  globalThis.location.href = href;
});
