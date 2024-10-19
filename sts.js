const cardContainer = document.getElementById("cardContainer");
const cards = document.querySelectorAll(".card");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

// Set scroll amount per click (same as card width + gap)
let cardWidth = document.querySelector(".card").offsetWidth + 20; // Card width + gap between cards

// Function to handle scrolling left and right
function scrollLeft() {
  cardContainer.scrollBy({
    left: -cardWidth, // Scroll to the left
    behavior: "smooth", // Smooth scrolling
  });
  setTimeout(checkScroll, 300); // Delay to check scroll position after scrolling completes
}

function scrollRight() {
  cardContainer.scrollBy({
    left: cardWidth, // Scroll to the right
    behavior: "smooth", // Smooth scrolling
  });
  setTimeout(checkScroll, 300); // Delay to check scroll position after scrolling completes
}

// Function to hide/show buttons based on scroll position
function checkScroll() {
  const maxScrollLeft = cardContainer.scrollWidth - cardContainer.clientWidth;

  // Hide left button if at the start
  if (cardContainer.scrollLeft <= 0) {
    leftBtn.style.display = "none";
  } else {
    leftBtn.style.display = "block";
  }

  // Hide right button if at the end
  if (cardContainer.scrollLeft >= maxScrollLeft) {
    rightBtn.style.display = "none";
  } else {
    rightBtn.style.display = "block";
  }
}

// Update card width based on the first card's width
function updateCardWidth() {
  cardWidth = document.querySelector(".card").offsetWidth + 20; // Card width + gap
}

// Initial setup: add event listeners
cardContainer.addEventListener("scroll", checkScroll);
window.addEventListener("resize", () => {
  updateCardWidth(); // Update card width on resize
  checkScroll(); // Ensure button visibility is updated
});
checkScroll(); // Initial call to set button visibility

// Button event listeners
leftBtn.addEventListener("click", () => {
  scrollLeft();
});
rightBtn.addEventListener("click", () => {
  scrollRight();
});

