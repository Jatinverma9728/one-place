document.querySelectorAll(".controls").forEach((control) => {
  let selectedLocation = null;

  const locationPin = control.querySelector(".location-pin");
  const locationDisplay = control.querySelector(".location-display");
  const loadingIndicator = control.querySelector(".loading");

  // Check if a location is already saved in localStorage
  const savedLocation = localStorage.getItem("userLocation");
  if (savedLocation) {
    const { address } = JSON.parse(savedLocation);
    locationDisplay.textContent = address;
    selectedLocation = JSON.parse(savedLocation);
  }

  locationPin.addEventListener("click", async () => {
    if (selectedLocation) {
      alert("Location already fetched.");
      return;
    }

    loadingIndicator.style.display = "block"; // Show loading text

    if (navigator.geolocation) {
      try {
        // Attempt to get the user's location
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            selectedLocation = { latitude, longitude };

            const address = await reverseGeocode(latitude, longitude);
            selectedLocation.address = address;

            // Save the location to localStorage
            localStorage.setItem("userLocation", JSON.stringify(selectedLocation));

            updateLocationDisplays(address);
            loadingIndicator.style.display = "none"; // Hide loading text
          },
          (error) => {
            handleGeolocationError(error);
            loadingIndicator.style.display = "none"; // Hide loading text
          },
          {
            enableHighAccuracy: true, // Try to use GPS for better accuracy
            timeout: 10000, // Wait for up to 10 seconds
            maximumAge: 0, // Do not use a cached location
          }
        );
      } catch (error) {
        alert("An unexpected error occurred while accessing your location.");
        console.error(error);
        loadingIndicator.style.display = "none";
      }
    } else {
      alert("Geolocation is not supported by this browser.");
      loadingIndicator.style.display = "none"; // Hide loading text
    }
  });

  async function reverseGeocode(lat, lon) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      return data.display_name || "Unknown Location";
    } catch {
      return "Unable to fetch address.";
    }
  }

  function handleGeolocationError(error) {
    let errorMessage = "An error occurred while fetching location.";
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = "Location access denied by the user. Please allow access.";
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = "Location information is unavailable. Please enable location.";
        break;
      case error.TIMEOUT:
        errorMessage = "The request to get user location timed out.";
        break;
      default:
        errorMessage = "An unknown error occurred.";
    }
    alert(errorMessage);
  }

  // Update all location displays
  function updateLocationDisplays(address) {
    document.querySelectorAll(".location-display").forEach((display) => {
      display.textContent = address;
    });
  }
});
