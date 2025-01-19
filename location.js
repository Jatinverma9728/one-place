document.querySelectorAll(".controls").forEach((control) => {
  let selectedLocation = null;
  let isFetching = false; // Prevent multiple simultaneous fetches

  const locationPin = control.querySelector(".location-pin");
  const locationDisplay = control.querySelector(".location-display");
  const loadingIndicator = control.querySelector(".loading");

  // Load the saved location from localStorage (if available)
  const savedLocation = localStorage.getItem("userLocation");
  if (savedLocation) {
    const { address } = JSON.parse(savedLocation);
    locationDisplay.textContent = address;
    selectedLocation = JSON.parse(savedLocation);
  }

  locationPin.addEventListener("click", () => {
    if (selectedLocation || isFetching) return; // Skip if location is already fetched or fetching

    loadingIndicator.style.display = "block"; // Show loading text
    isFetching = true; // Set fetching flag

    if (navigator.geolocation) {
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
            isFetching = false; // Reset fetching flag
          }
        },
        (error) => {
          handleGeolocationError(error);
          loadingIndicator.style.display = "none"; // Hide loading text
          isFetching = false; // Reset fetching flag
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      loadingIndicator.style.display = "none"; // Hide loading text
      isFetching = false; // Reset fetching flag
    }
  });

  // Function to fetch address using reverse geocoding
  async function reverseGeocode(lat, lon) {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const data = await response.json();
    return data.display_name || "Unknown Location";
  }

  // Handle geolocation errors
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
