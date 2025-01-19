const themeToggle = document.getElementById("theme-toggle");

// Function to apply the correct theme
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true; // Ensure the toggle reflects the dark mode state
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.checked = false; // Ensure the toggle reflects the light mode state
  }
}

// Load the saved theme from localStorage when the page loads
const savedTheme = localStorage.getItem("theme") || "light"; // Default to 'light'
applyTheme(savedTheme);

// Add event listener for the theme toggle
themeToggle.addEventListener("change", () => {
  const selectedTheme = themeToggle.checked ? "dark" : "light";
  applyTheme(selectedTheme);
  localStorage.setItem("theme", selectedTheme); // Save the selected theme to localStorage
});
