// Function to load the wishlist from localStorage
function loadWishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const wishlistContainer = document.getElementById("wishlist-container");

  // If wishlist is empty
  if (wishlist.length === 0) {
    wishlistContainer.innerHTML =
      "<p class='empty-message'>Your wishlist is empty. Add some products!</p>";
  } else {
    // Clear any previous content
    wishlistContainer.innerHTML = "";

    // Display each item in the wishlist
    wishlist.forEach((product) => {
      const wishlistItem = document.createElement("div");
      wishlistItem.classList.add("wishlist-item");

      wishlistItem.innerHTML = `
              <img src="${product.image}" alt="${product.name}" />
              <h4>${product.name}</h4>
              <p class="price"> ₹ ${product.price}</p>
              <button onclick="removeFromWishlist('${product.id}')">Remove</button>
            `;

      wishlistContainer.appendChild(wishlistItem);
    });
  }
}

// Function to remove a product from the wishlist
function removeFromWishlist(productId) {
  // Get current wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Remove the product from the array
  wishlist = wishlist.filter((product) => product.id !== productId);

  // Update localStorage with the new wishlist
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  // Reload the wishlist page to update the view
  loadWishlist();
}

// Load wishlist items when the page loads
window.onload = loadWishlist;
