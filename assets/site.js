const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  mobileNav.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
mobileNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
matchMedia('(min-width: 821px)').addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});
const walkthroughButton = document.getElementById('walkthrough-toggle');
if (walkthroughButton) {
  const image = document.getElementById('walkthrough-image');
  let endTimer;
  function stopWalkthrough() {
    clearTimeout(endTimer);
    image.src = image.dataset.still;
    walkthroughButton.textContent = 'Play 24-second walkthrough';
    walkthroughButton.setAttribute('aria-pressed', 'false');
  }
  walkthroughButton.addEventListener('click', () => {
    if (walkthroughButton.getAttribute('aria-pressed') === 'true') {
      stopWalkthrough();
    } else {
      image.src = image.dataset.animation;
      walkthroughButton.textContent = 'Stop walkthrough';
      walkthroughButton.setAttribute('aria-pressed', 'true');
      endTimer = setTimeout(stopWalkthrough, 24000);
    }
  });
}
