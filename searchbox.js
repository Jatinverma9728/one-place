const dynamicTexts = [
  "AC service",
  "home cleaning",
  "plumbing",
  "electrician",
  "painting",
];

function typeDynamicText(dynamicTextElement, currentIndex) {
  let text = dynamicTexts[currentIndex];
  let index = 0;

  // Typing animation
  const typingInterval = setInterval(() => {
    if (index < text.length) {
      dynamicTextElement.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
      setTimeout(() => {
        // De-typing (erasing) animation
        let eraseIndex = text.length;
        const eraseInterval = setInterval(() => {
          if (eraseIndex > 0) {
            dynamicTextElement.textContent = text.substring(0, eraseIndex - 1);
            eraseIndex--;
          } else {
            clearInterval(eraseInterval);
            setTimeout(() => {
              currentIndex = (currentIndex + 1) % dynamicTexts.length;
              typeDynamicText(dynamicTextElement, currentIndex); // Start typing the next text
            }, 1000); // Pause before starting the next typing
          }
        }, 100); // De-typing speed
      }, 2000); // Wait before erasing
    }
  }, 150); // Typing speed
}

// Apply dynamic text animation to multiple elements
document
  .querySelectorAll(".dynamic-text")
  .forEach((dynamicTextElement, index) => {
    typeDynamicText(dynamicTextElement, 0); // Start typing from the first text in the array for each instance
  });
