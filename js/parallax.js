// Parallax scroll effect
window.addEventListener('scroll', function () {
  const PARALLAX = document.querySelector('.parallax');
  const SCROLLPOSITION = window.scrollY;

  // Adjust background position dynamically
  PARALLAX.style.backgroundPositionY = `${SCROLLPOSITION * 0.5}px`;
});

// Mostrar el header al hacer scroll
let lastScrollPosition = 0;
const HEADER = document.querySelector('.header');
