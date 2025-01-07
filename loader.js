// JavaScript to hide loader and enable interaction once the page has finished loading
window.onload = function () {
  // Hide the loader container and enable interaction with content
  document.getElementById("loader").style.display = "none";
  document.body.style.pointerEvents = "auto"; // Enable interaction
  document.body.style.opacity = "1"; // Reset opacity to 1 after loading
};
