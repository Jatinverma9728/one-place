// Function to set notification state
function setNotificationState(state) {
  localStorage.setItem("notificationsEnabled", state ? "true" : "false");
}

// Function to check if notifications are enabled
function areNotificationsEnabled() {
  return localStorage.getItem("notificationsEnabled") === "true";
}

// Apply initial state to the toggle button on page load
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("notification-toggle");
  const notificationsEnabled = areNotificationsEnabled();

  toggle.checked = notificationsEnabled;

  // Event listener to update notification state
  toggle.addEventListener("change", () => {
    const newState = toggle.checked;
    setNotificationState(newState);

    if (!newState) {
     alert("Notifications have been disabled.");
    } else {
      alert("Notifications have been enabled.");
    }
  });
});

// Example: Wrap notifications in a check
function sendNotification(message) {
  if (areNotificationsEnabled()) {
    // Replace this logic with your actual notification logic
    console.log("Notification sent:", message);
    // If using the Notification API:
    // new Notification(message);
  } else {
    console.log("Notification blocked:", message);
  }
}

// Example usage
sendNotification("This is a test notification!");
// alert('hello')