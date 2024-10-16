// Get the modal element
let modal = document.getElementById("modal");
let btn = document.getElementById("Book-A-Professional");
let closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Get the modal elements
let womenIconSpaSaloonModal = document.getElementById(
  "modal-for-women-spa-saloon-icon"
);
let womenIconSpaSaloonCard = document.getElementById("womem-saloon-spa-modal");

// Get the close button
let closeBtnWomenIconSpaSaloon = document.getElementsByClassName(
  "close-modal-for-women-spa-saloon-icon"
)[0];

// When the user clicks on the card, open the modal
womenIconSpaSaloonCard.onclick = function () {
  womenIconSpaSaloonModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtnWomenIconSpaSaloon.onclick = function () {
  womenIconSpaSaloonModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == womenIconSpaSaloonModal) {
    womenIconSpaSaloonModal.style.display = "none";
  }
};

// Men's Salon Modal
let mensSalonModal = document.getElementById("modal-for-mens-salon");
let mensSalonBtn = document.getElementById("mens-salon-modal");
let closeMensSalon = document.getElementsByClassName("close-modal-mens")[0];

mensSalonBtn.onclick = function () {
  mensSalonModal.style.display = "block";
};

closeMensSalon.onclick = function () {
  mensSalonModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == mensSalonModal) {
    mensSalonModal.style.display = "none";
  }
};

// AC Repair Modal
let messageBtn = document.getElementById("modal-for-ac-repair");
let acRepairBtn = document.getElementById("ac-repair-modal");
let closeACRepair = document.getElementsByClassName("close-modal-ac")[0];

acRepairBtn.onclick = function () {
  messageBtn.style.display = "block";
};

closeACRepair.onclick = function () {
  messageBtn.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == messageBtn) {
    messageBtn.style.display = "none";
  }
};

// Painter & waterproofing Modal
let painterWater = document.getElementById("modal-for-waterproofing");

let waterproofing = document.getElementById("painter-modal");

let closeWaterproofing = document.getElementsByClassName(
  "close-modal-waterproofing"
)[0];

waterproofing.onclick = function () {
  painterWater.style.display = "block";
};

closeWaterproofing.onclick = function () {
  painterWater.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == painterWater) {
    painterWater.style.display = "none";
  }
};

// electrician and plumber Modal
let elecplumb = document.getElementById("modal-for-electrician");

let electricianModal = document.getElementById("electrician-modal");

let closeElectrician = document.getElementsByClassName(
  "close-modal-electrician"
)[0];

electricianModal.onclick = function () {
  elecplumb.style.display = "block";
};

closeElectrician.onclick = function () {
  elecplumb.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == elecplumb) {
    elecplumb.style.display = "none";
  }
};


// modal for message btn 
const messageButton = document.getElementById('message-button');
const chatboxModal = document.getElementById('chatbox-modal');
const closeChatbox = document.getElementById('close-chatbox');

messageButton.addEventListener('click', () => {
  chatboxModal.classList.add('open'); // Show and slide up the chatbox
  messageButton.classList.add('hidden'); // Fade out the message button
});

closeChatbox.addEventListener('click', () => {
  chatboxModal.classList.remove('open'); // Hide the chatbox
  setTimeout(() => {
    messageButton.classList.remove('hidden'); // Fade the message button back in after chatbox is closed
  }, 200); // Delay to allow chatbox animation to finish
});
