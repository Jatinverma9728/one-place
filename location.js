document.querySelectorAll(".controls").forEach((control) => {
  let selectedLocation = null;

  const locationPin = control.querySelector(".location-pin");
  const locationDisplay = control.querySelector(".location-display");
  const loadingIndicator = control.querySelector(".loading");

  locationPin.addEventListener("click", () => {
    loadingIndicator.style.display = "block"; // Show loading text

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          selectedLocation = { latitude, longitude };

          const address = await reverseGeocode(latitude, longitude);
          locationDisplay.textContent = `${address}`;
          loadingIndicator.style.display = "none"; // Hide loading text
        },
        (error) => {
          handleGeolocationError(error);
          loadingIndicator.style.display = "none"; // Hide loading text
        }
      );
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
        errorMessage = "Location access denied by the user.";
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        errorMessage = "The request to get user location timed out.";
        break;
      default:
        errorMessage = "An unknown error occurred.";
    }
    alert(errorMessage);
  }
});
