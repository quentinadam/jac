/**
 * Renders the current local time and keeps it in step with the system clock.
 *
 * The clock re-renders on the second boundary rather than on a fixed 1000 ms
 * interval, so it never drifts a fraction of a second behind the wall clock.
 */

const SECONDS_PER_MINUTE = 60;

function element<T extends HTMLElement>(id: string): T {
  const node = document.getElementById(id);
  if (node === null) {
    throw new Error(`Missing element #${id}`);
  }
  return node as T;
}

const dateOutput = element('date');
const timeOutput = element<HTMLTimeElement>('time');
const zoneOutput = element('zone');
const ticksOutput = element('ticks');

const dateFormat = new Intl.DateTimeFormat(undefined, {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const timeFormat = new Intl.DateTimeFormat(undefined, {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

/** Builds the minute bar: one tick per second, filled as the minute elapses. */
const ticks = Array.from({ length: SECONDS_PER_MINUTE }, () => {
  const tick = document.createElement('span');
  tick.className = 'tick';
  ticksOutput.append(tick);
  return tick;
});

/** `2026-08-15T23:07:42` — the local time, in the format the `datetime` attribute expects. */
function toDateTimeAttribute(date: Date): string {
  const pad = (value: number) => value.toString().padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    `T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function render(date: Date) {
  dateOutput.textContent = dateFormat.format(date);
  timeOutput.textContent = timeFormat.format(date);
  timeOutput.dateTime = toDateTimeAttribute(date);

  const seconds = date.getSeconds();
  for (const [index, tick] of ticks.entries()) {
    tick.dataset.state = index === seconds ? 'now' : index < seconds ? 'past' : 'future';
  }
}

function tick() {
  const now = new Date();
  render(now);
  setTimeout(tick, 1000 - now.getMilliseconds());
}

zoneOutput.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
tick();
