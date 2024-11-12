const cartItems = []; // Array to store items in the cart

// Select DOM elements
const cartItemsContainer = document.querySelector(".cart-items");
const totalItemsElement = document.getElementById("total-items");
const totalPriceElement = document.getElementById("total-price");

// Function to add an item to the cart
function addItemToCart(id, name, price, imageUrl) {
  const existingItem = cartItems.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ id, name, price, imageUrl, quantity: 1 });
  }
  updateCart();
}

// Function to remove an item from the cart
function removeItemFromCart(id) {
  const itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1);
  }
  updateCart();
}

// Function to update cart display and summary
function updateCart() {
  // Clear existing items
  cartItemsContainer.innerHTML = "";

  // Add items to the DOM
  cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.dataset.id = item.id;
    cartItem.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}" class="item-image">
      <div class="item-details">
        <h2 class="item-name">${item.name}</h2>
        <p class="item-price">₹ <span class="price">${item.price}</span></p>
        <div class="quantity-controls">
          <button class="decrement" onclick="changeQuantity(${item.id}, -1)">-</button>
          <span class="quantity">${item.quantity}</span>
          <button class="increment" onclick="changeQuantity(${item.id}, 1)">+</button>
        </div>
        <button class="remove-item" onclick="removeItemFromCart(${item.id})">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  // Update summary
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  totalItemsElement.textContent = totalItems;
  totalPriceElement.textContent = totalPrice;
}

// Function to change item quantity
function changeQuantity(id, change) {
  const item = cartItems.find((item) => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeItemFromCart(id);
    }
  }
  updateCart();
}

// Sample call to add item to cart (for testing)
addItemToCart(1, "Honey Waxing & Threading", 696, "image1.jpg");
addItemToCart(2, "Waxing, Facials & Face Wax", 1099, "image2.jpg");
