// Button and dropdown menu
const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

// Add an event when button menu is clicked
menuToggle.addEventListener("click", function (e) {
  e.preventDefault();
  dropdownMenu.classList.toggle("dropdown-menu-visible");
  dropdownMenu.classList.toggle("dropdown-menu-hidden");
});
