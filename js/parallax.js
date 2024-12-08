// Parallax scroll effect
window.addEventListener('scroll', function () {
  const PARALLAX = document.querySelector('.parallax');
  const SCROLLPOSITION = window.scrollY;

  // Adjust background position dynamically
  PARALLAX.style.backgroundPositionY = `${SCROLLPOSITION * 0.5}px`;
});

// Show header on scroll
let lastScrollPosition = 0;
const HEADER = document.querySelector('.header');
