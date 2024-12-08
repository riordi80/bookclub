window.addEventListener('scroll', revealOnScroll);

// Select all elements with the reveal effect
const REVEALELEMENTS = document.querySelectorAll('.main-bottom-button, .top-left-main-item, .top-right-main-item, .gallery-item, .comments-item-left, .comments-item-right, .logo-parallax');

// Check if an element is visible in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Apply the reveal effect
function revealOnScroll() {
    REVEALELEMENTS.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('reveal'); // Add the "reveal" class
        }
    });
}

revealOnScroll();
