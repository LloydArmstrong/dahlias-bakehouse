// Everything here is an enhancement: without JS the menu and "Open every Friday" still show.

const ukDate = (d, opts) => d.toLocaleDateString('en-GB', opts); // the Shed is in Reading

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

// Cake of the week: "Packed for the week of 28 September" (weeks start Monday).
const monday = new Date();
monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
document.querySelectorAll('[data-week]').forEach((el) => {
  el.textContent = `the week of ${ukDate(monday, { day: 'numeric', month: 'long' })}`;
});

// ---- When the Shed next opens: one day a week, set by data-open-day (0 = Sunday) ----
// ponytail: whole-day status on the visitor's clock; add opening times here once Dahlia confirms them.
const openDayEl = document.querySelector('[data-open-day]');
if (openDayEl) {
  const now = new Date();
  const wait = (Number(openDayEl.dataset.openDay) - now.getDay() + 7) % 7;
  const next = new Date(now);
  next.setDate(now.getDate() + wait);
  const day = ukDate(next, { weekday: 'long' });
  const text = wait === 0 ? `Open today, ${day}`
    : wait === 1 ? `Open tomorrow, ${day}`
    : `Next open ${ukDate(next, { weekday: 'long', day: 'numeric', month: 'long' })}`;
  document.querySelectorAll('[data-next-open]').forEach((el) => {
    el.textContent = text;
    el.closest('[data-state]').dataset.state = wait === 0 ? 'open' : 'closed';
  });
}

// ---- Catalogue filter: packets reflow in place ----
const filters = document.querySelector('.filters');
if (filters) {
  const packets = [...document.querySelectorAll('.packet')];
  const empty = document.querySelector('.catalogue-empty');
  const status = document.querySelector('[data-filter-status]');
  packets.forEach((p, i) => { p.style.viewTransitionName = `packet-${i}`; });
  filters.hidden = false;

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn || btn.getAttribute('aria-pressed') === 'true') return;
    const cat = btn.dataset.filter;
    const apply = () => {
      filters.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      let shown = 0;
      packets.forEach((p) => { p.hidden = cat !== 'all' && p.dataset.cat !== cat; shown += !p.hidden; });
      empty.hidden = shown > 0;
      status.textContent = cat === 'all' ? `Showing all ${shown} bakes` : `Showing ${shown} of ${packets.length} bakes: ${btn.textContent}`;
    };
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (document.startViewTransition && !calm) document.startViewTransition(apply);
    else apply();
  });
}
