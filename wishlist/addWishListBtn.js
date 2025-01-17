// Wishlist Logic
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

document.querySelectorAll(".wishlist-btn").forEach((button) => {
  const checkbox = button.querySelector(".checkbox");
  const id = button.getAttribute("data-id");

  // Pre-check if item is already in wishlist
  if (wishlist.some((item) => item.id === id)) {
    checkbox.checked = true;
  }

  button.addEventListener("change", function () {
    const name = this.getAttribute("data-name");
    const image = this.getAttribute("data-image");
    const price = this.getAttribute("data-price");
    const itemIndex = wishlist.findIndex((item) => item.id === id);

    if (checkbox.checked) {
      // Add to wishlist if not already present
      if (itemIndex === -1) {
        wishlist.push({ id, name, price });
      }
    } else {
      // Remove from wishlist
      if (itemIndex !== -1) {
        wishlist.splice(itemIndex, 1);
      }
    }

    // Save to localStorage
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  });
});
