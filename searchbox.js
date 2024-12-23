const inputField = document.getElementById("search-input");
const texts = [
  "Kitchen cleaning",
  "Plumber",
  "Hair spa",
  "Carpanter",
  "AC repair",
  "Electrician",
  "Applinces repair",
];
let currentTextIndex = 0;
let charIndex = 0;
let isDeleting = false;
let pauseEnd = false;
let isFocused = false; // Tracks input focus state

function typeAnimation() {
  if (isFocused) return; // Do nothing if input is focused (user interaction)

  const currentText = texts[currentTextIndex];

  if (!pauseEnd) {
    // Typing and Deleting Logic
    if (isDeleting) {
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        pauseEnd = true;
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to next word
      }
    } else {
      charIndex++;
      if (charIndex === currentText.length) {
        isDeleting = true;
        pauseEnd = true;
      }
    }
    inputField.setAttribute(
      "placeholder",
      `Search for '${currentText.slice(0, charIndex)}'`
    );
  } else {
    // Pause before typing or deleting
    setTimeout(() => {
      pauseEnd = false;
    }, 200); // Pause for 2 seconds
  }

  // Adjust speed dynamically
  const typingSpeed = isDeleting ? 100 : 150;
  const delay = pauseEnd ? 1000 : typingSpeed;
  setTimeout(typeAnimation, delay);
}

// Event listeners for input focus/blur
inputField.addEventListener("focus", () => {
  isFocused = true; // Stop animation when input is focused
  inputField.setAttribute("placeholder", ""); // Clear placeholder
});

inputField.addEventListener("blur", () => {
  isFocused = false; // Resume animation on blur
  typeAnimation();
});

// Start the animation initially
typeAnimation();
