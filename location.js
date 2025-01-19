document.querySelectorAll(".controls").forEach((control) => {
  let selectedLocation = null;

  const locationPin = control.querySelector(".location-pin");
  const locationDisplay = control.querySelector(".location-display");
  const loadingIndicator = control.querySelector(".loading");

  // Load saved location from localStorage
  const savedLocation = localStorage.getItem("userLocation");
  if (savedLocation) {
    const { address } = JSON.parse(savedLocation);
    locationDisplay.textContent = address;
    selectedLocation = JSON.parse(savedLocation);
  }

  locationPin.addEventListener("click", () => {
    if (selectedLocation) return; // Skip fetching if location is already set

    loadingIndicator.style.display = "block"; // Show loading text

    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            fetchLocation(); // Fetch location directly
          } else if (permissionStatus.state === "prompt") {
            fetchLocation(); // Prompt user for location access
          } else {
            alert("Please enable location permissions in your browser.");
            loadingIndicator.style.display = "none"; // Hide loading text
          }
        })
        .catch((error) => {
          console.error("Permission check failed:", error);
          alert("An error occurred while checking permissions.");
          loadingIndicator.style.display = "none"; // Hide loading text
        });
    } else {
      alert("Geolocation is not supported by this browser.");
      loadingIndicator.style.display = "none"; // Hide loading text
    }
  });

  function fetchLocation() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        selectedLocation = { latitude, longitude };

        try {
          const address = await reverseGeocode(latitude, longitude);
          selectedLocation.address = address;

          // Save to localStorage
          localStorage.setItem(
            "userLocation",
            JSON.stringify(selectedLocation)
          );

          // Update location display
          locationDisplay.textContent = address;
        } catch {
          alert("Failed to fetch the address. Please try again.");
        } finally {
          loadingIndicator.style.display = "none"; // Hide loading text
        }
      },
      (error) => {
        handleGeolocationError(error);
        loadingIndicator.style.display = "none"; // Hide loading text
      }
    );
  }

  async function reverseGeocode(lat, lon) {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const data = await response.json();
    return data.display_name || "Unknown Location";
  }

  function handleGeolocationError(error) {
    let errorMessage = "An error occurred while fetching location.";
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = "Location access denied by the user.";
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        errorMessage = "The request to get user location timed out.";
        break;
    }
    alert(errorMessage);
  }
});
