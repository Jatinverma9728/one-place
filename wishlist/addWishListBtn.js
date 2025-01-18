// Wishlist Logic with Dynamic Button Placement

document.addEventListener("DOMContentLoaded", () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Function to render wishlist buttons dynamically
  function addWishlistButtons() {
    const products = document.querySelectorAll(".product");

    products.forEach((product) => {
      if (!product.querySelector(".wishlist-button")) {
        const button = document.createElement("div");
        button.className = "heart-container wishlist-button";
        button.title = "Add to Wishlist";

        button.innerHTML = `
          <input type="checkbox" class="checkbox">
          <div class="svg-container">
            <svg viewBox="0 0 24 24" class="svg-outline" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
            </svg>
            <svg viewBox="0 0 24 24" class="svg-filled" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
            </svg>
             <svg class="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                </svg>
          </div>
        `;

        product.appendChild(button);

        // Attach click event for wishlist functionality
        button.querySelector(".checkbox").addEventListener("change", () => {
          toggleWishlist(product);
        });

        // Pre-check the button if the product is already in the wishlist
        const productId = product.getAttribute("data-id");
        if (wishlist.some((item) => item.id === productId)) {
          button.querySelector(".checkbox").checked = true;
        }
      }
    });
  }

  // Function to add or remove products from wishlist
  function toggleWishlist(product) {
    const productId = product.getAttribute("data-id");
    const productName = product.getAttribute("data-name");
    const productPrice = product.getAttribute("data-price");

    const existingIndex = wishlist.findIndex((item) => item.id === productId);

    if (existingIndex === -1) {
      wishlist.push({
        id: productId,
        name: productName,
        price: productPrice,
      });
    } else {
      wishlist.splice(existingIndex, 1);
    }

    // Update localStorage
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }

  // Initialize buttons on page load
  addWishlistButtons();
});
