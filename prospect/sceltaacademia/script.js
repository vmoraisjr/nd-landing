const nav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

document.querySelectorAll('.chart-fill[data-width]').forEach((fill) => {
  fill.style.width = `${fill.dataset.width}%`;
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('load', () => {
  // Barra fill-p: 0 → 100
  const fp = document.getElementById('fill-p');

  fp.style.height = '0%';
  fp.style.transition = 'height 3s ease-in-out';

  setTimeout(() => {
    fp.style.height = '100%';
  }, 400);

  // Barra fill-a: 0 → 72 e para
  const fa = document.getElementById('fill-a');
  const ca = document.getElementById('counter-a');

  fa.style.height = '0%';
  fa.style.transition = 'height 3s ease-in-out';

  let current = 0;
  const target = 70;

  const counter = setInterval(() => {
    current++;

    if (ca) {
      ca.textContent = current;
    }

    if (current >= target) {
      clearInterval(counter);
    }
  }, 3000 / target);

  setTimeout(() => {
    fa.style.height = target + '%';
  }, 400);

  // Animate bars
  document.querySelectorAll('.bar-fill').forEach(b => {
    const w = b.dataset.w;

    b.style.transition = 'width 1.5s cubic-bezier(.4,0,.2,1)';

    setTimeout(() => {
      b.style.width = w + '%';
    }, 300);
  });
});
