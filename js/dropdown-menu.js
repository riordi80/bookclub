// Button and dropdown menu
const MENU_TOGGLE = document.getElementById("menu-toggle");
const DROPDOWN_MENU = document.getElementById("dropdown-menu");

// Add an event when menu mobile button is clicked
MENU_TOGGLE.addEventListener("click", function (e) {
  e.preventDefault();
  DROPDOWN_MENU.classList.toggle("dropdown-menu-visible");
  DROPDOWN_MENU.classList.toggle("dropdown-menu-hidden");
});
