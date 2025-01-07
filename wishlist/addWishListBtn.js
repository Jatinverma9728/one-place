// Select all wishlist buttons inside cards
const wishlistButtons = document.querySelectorAll(".wishlist-btn");

// Initialize wishlist array from localStorage
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Function to update UI for liked items
function updateUI() {
  wishlistButtons.forEach((button) => {
    const card = button.closest(".card");
    const cardId = card.dataset.id;
    const checkbox = button.querySelector(".checkbox");

    // Check if the product is already in the wishlist
    if (wishlist.some((item) => item.id === cardId)) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });
}

// Update UI for already liked items
updateUI();

// Add event listeners to wishlist buttons
wishlistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const cardId = card.dataset.id;

    const product = {
      id: cardId,
      name: card.querySelector("h3").textContent,
      price: card.querySelector(".price").textContent,
      image: card.querySelector("img").src,
    };

    const existingIndex = wishlist.findIndex((item) => item.id === cardId);

    if (existingIndex > -1) {
      // Remove from wishlist
      wishlist.splice(existingIndex, 1);
    } else {
      // Add to wishlist
      wishlist.push(product);
    }

    // Save updated wishlist to localStorage
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    // Update UI
    updateUI();
  });
});
prompt("hello")