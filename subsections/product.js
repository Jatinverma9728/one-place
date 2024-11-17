let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add a product to the cart
function addToCart(productId, productName, productPrice) {
  const existingProduct = cart.find((item) => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1,
    });
  }

  saveCart();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Update cart count in the navigation bar
function updateCartCount() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cart-count").textContent = cartCount;
}

// Event listeners for "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productElement = button.closest(".product");
    const productId = productElement.dataset.id;
    const productName = productElement.dataset.name;
    const productPrice = parseFloat(productElement.dataset.price);

    addToCart(productId, productName, productPrice);
    // alert(`${productName} added to the cart!`);
  });
});

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", updateCartCount);
