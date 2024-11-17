let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render cart items
function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Clear previous items

  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.className = "cart-item";
    itemElement.innerHTML = `
            <p>${item.name} - $${item.price} x ${item.quantity}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
            <button onclick="updateQuantity(${index}, 1)">+</button>
            <button onclick="updateQuantity(${index}, -1)">-</button>
        `;
    cartItemsContainer.appendChild(itemElement);

    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  document.getElementById("total-items").textContent = totalItems;
  document.getElementById("total-price").textContent = totalPrice.toFixed(2);

  saveCart();
}

// Update item quantity
function updateQuantity(index, change) {
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  renderCart();
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Initialize cart on page load
document.addEventListener("DOMContentLoaded", renderCart);
