// Generalize modal functionality
function setupModal(modalId, triggerId, closeClass) {
  const modal = document.getElementById(modalId);
  const trigger = document.getElementById(triggerId);
  const closeBtn = document.getElementsByClassName(closeClass)[0];

  // Open modal on trigger click
  trigger.onclick = function () {
    modal.style.display = "block";
  };

  // Close modal on close button click
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Close modal on click outside the modal
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Setup all modals
setupModal("modal", "Book-A-Professional", "close-btn-for-pro-book");
setupModal(
  "modal-for-women-spa-saloon-icon",
  "womem-saloon-spa-modal",
  "close-modal-for-women-spa-saloon-icon"
);
setupModal("modal-for-mens-salon", "mens-salon-modal", "close-modal-mens");
setupModal("modal-for-ac-repair", "ac-repair-modal", "close-modal-ac");
setupModal(
  "modal-for-waterproofing",
  "painter-modal",
  "close-modal-waterproofing"
);
setupModal(
  "modal-for-electrician",
  "electrician-modal",
  "close-modal-electrician"
);

// Modal for message button
const messageButton = document.getElementById("message-button");
const chatboxModal = document.getElementById("chatbox-modal");
const closeChatbox = document.getElementById("close-chatbox");

messageButton.addEventListener("click", () => {
  chatboxModal.classList.add("open"); // Show and slide up the chatbox
  messageButton.classList.add("hidden"); // Fade out the message button
});

closeChatbox.addEventListener("click", () => {
  chatboxModal.classList.remove("open"); // Hide the chatbox
  setTimeout(() => {
    messageButton.classList.remove("hidden"); // Fade the message button back in after chatbox is closed
  }, 200); // Delay to allow chatbox animation to finish
});

window.addEventListener("click", (event) => {
  if (event.target === chatboxModal) {
    chatboxModal.classList.remove("open"); // Hide the chatbox if clicked outside
    setTimeout(() => {
      messageButton.classList.remove("hidden");
    }, 200);
  }
});
