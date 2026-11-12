function openLinkedSection() {
  const target = document.getElementById(location.hash.slice(1));
  if (!target) return;
  const section = target.closest('details');
  if (section) section.open = true;
  requestAnimationFrame(() => target.scrollIntoView());
}

window.addEventListener('hashchange', openLinkedSection);
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (link && link.hash === location.hash) openLinkedSection();
});
window.addEventListener('pageshow', () => {
  for (const id of ['agenda', 'prepare']) document.getElementById(id).open = false;
  if (location.hash) openLinkedSection();
});

let sectionsBeforePrint = [];
window.addEventListener('beforeprint', () => {
  sectionsBeforePrint = [...document.querySelectorAll('details')].map(section => [section, section.open, section.getAttribute('name')]);
  sectionsBeforePrint.forEach(([section]) => { section.removeAttribute('name'); });
  sectionsBeforePrint.forEach(([section]) => { section.open = true; });
});
window.addEventListener('afterprint', () => {
  sectionsBeforePrint.forEach(([section, wasOpen]) => { section.open = wasOpen; });
  sectionsBeforePrint.forEach(([section, , name]) => {
    if (name !== null) section.setAttribute('name', name);
  });
});
