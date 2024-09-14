let intro = document.querySelector('.intro');
let logoSpan = document.querySelectorAll('.logo');

if (intro && logoSpan.length > 0) {
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add('active');
        }, (idx + 1) * 400);
      });

      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove('active');
          }, (idx + 1) * 50);
        });
      }, 2000);

      setTimeout(() => {
        intro.style.top = '-100vh';
      }, 2300);
    }, 100);  // Adding a small initial delay just to ensure everything is rendered
  });
}
