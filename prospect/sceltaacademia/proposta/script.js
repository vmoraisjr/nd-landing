const nav = document.getElementById('mainNav');

if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

document.querySelectorAll('.chart-fill[data-width]').forEach((fill) => {
  fill.style.width = `${fill.dataset.width}%`;
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetSelector = anchor.getAttribute('href');
    if (!targetSelector || targetSelector === '#') {
      return;
    }

    const target = document.querySelector(targetSelector);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('load', () => {
  const fp = document.getElementById('fill-p');
  if (fp) {
    fp.style.height = '0%';
    fp.style.transition = 'height 3s ease-in-out';

    setTimeout(() => {
      fp.style.height = '100%';
    }, 400);
  }

  const fa = document.getElementById('fill-a');
  const ca = document.getElementById('counter-a');
  const target = 70;

  if (fa) {
    fa.style.height = '0%';
    fa.style.transition = 'height 3s ease-in-out';

    setTimeout(() => {
      fa.style.height = `${target}%`;
    }, 400);
  }

  if (ca) {
    let current = 0;
    const counter = setInterval(() => {
      current += 1;
      ca.textContent = String(current);

      if (current >= target) {
        clearInterval(counter);
      }
    }, 3000 / target);
  }

  document.querySelectorAll('.bar-fill').forEach((bar) => {
    const width = bar.dataset.w;
    if (!width) {
      return;
    }

    bar.style.transition = 'width 1.5s cubic-bezier(.4,0,.2,1)';

    setTimeout(() => {
      bar.style.width = `${width}%`;
    }, 300);
  });
});
