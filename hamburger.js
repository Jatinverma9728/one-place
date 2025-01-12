function toggleMenu() {
  const offcanvas = document.getElementById("offcanvas");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  // Toggle the menu open/close
  offcanvas.classList.toggle("open");
  hamburgerIcon.classList.toggle("open"); // Add/remove animation class

  // Hide hamburger icon when menu is open
  if (offcanvas.classList.contains("open")) {
    hamburgerIcon.classList.add("hidden");
    setTimeout(() => {
      hamburgerIcon.style.opacity = 0; // Smoothly fade out
    }, 300); // Matches the animation timing
  } else {
    hamburgerIcon.style.opacity = 1;
    hamburgerIcon.classList.remove("hidden");
  }
}
function toggleDropdown() {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
}
