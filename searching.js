const dynamicTexts = [
  "AC service",
  "home cleaning",
  "plumbing",
  "electrician",
  "painting",
];

const searchableContent = [
  { name: "ac service", link: "/subsections/applinces/ac.html" },
  { name: "air cooler", link: "subsections/applinces/cooler.html" },
  { name: "chemeny", link: "subsections/applinces/chimney.html" },
  { name: "gyser", link: "subsections/applinces/gyser.html" },
  { name: "inverter", link: "subsections/applinces/inverter.html" },
  { name: "water purifier", link: "subsections/applinces/ro.html" },
  { name: "laptop", link: "subsections/applinces/laptop.html" },
  { name: "microwave", link: "subsections/applinces/microwave.html" },
  { name: "mixer grinder", link: "subsections/applinces/jmc.html" },
  { name: "refrigator", link: "subsections/applinces/fridge.html" },
  { name: "tv", link: "subsections/applinces/tv.html" },
  { name: "washing machine", link: "subsections/applinces/washing.html" },
  { name: "Plumbing services", link: "subsections/plumber.html" },
  { name: "Electrician services", link: "subsections/electrician.html" },
  { name: "carpenter", link: "subsections/carpenter.html" },
  { name: "mens", link: "subsections/menhair.html" },
  { name: "women", link: "subsections/girls.html" },
  { name: "women saloon", link: "subsections/girls.html" },
  { name: "makeup", link: "subsections/girls.html" },
  { name: "spa for men", link: "subsections/spa.html" },
  { name: "spa for women", link: "spa-for-girls-heading" },
  { name: "hair care", link: "/subsections/girls.html#hairbleach" },
  { name: "facial", link: "/subsections/girls.html#facial" },
  { name: "cleanup", link: "/subsections/girls.html#facial" },
  { name: "bleach", link: "/subsections/girls.html#hairbleach" },
  { name: "detan", link: "/subsections/girls.html#hairbleach" },
  { name: "threading", link: "/subsections/girls.html#threading" },
  { name: "face waxing", link: "/subsections/girls.html#threading" },
  {
    name: "waxing",
    link: "/subsections/girls.html#haircut-and-beard-styling",
  },
  { name: "manicure", link: "/subsections/girls.html#detan" },
  { name: "padicure", link: "/subsections/girls.html#detan" },
  {
    name: "stress relief for women/girls",
    link: "/subsections/spa.html#stressrelief",
  },
  { name: "masssage for womens and girls", link: "subsections/spa.html" },
  { name: "pain relief", link: "/subsections/spa.html#painrelief" },
  { name: "natural skincare", link: "/subsections/spa.html#skincare" },
  {
    name: "hair cut for mens",
    link: "/subsections/menhair.html#haircut-and-beard-styling",
  },
  {
    name: "bread",
    link: "/subsections/menhair.html#haircut-and-beard-styling",
  },
  { name: "hair colour", link: "/subsections/menhair.html#hair-color" },
  {
    name: "facial for mens",
    link: "/subsections/menhair.html#facialand-cleanup",
  },
  {
    name: "manicure & pedicure for mens",
    link: "/subsections/menhair.html#pedicure",
  },
  { name: "massage for mens", link: "subsections/spa.html" },
  {
    name: "post workout massage for mens",
    link: "/subsections/menhair.html#massage",
  },
  { name: "men saloon", link: "/subsections/menhair.html" },
  {
    name: "hair cutting",
    link: "/subsections/menhair.html#haircut-and-beard-styling",
  },
  { name: "drill & hang", link: "/subsections/carpenter.html#clothes" },
  {
    name: "wooden door repair",
    link: "/subsections/carpenter.html#clothes",
  },
  {
    name: "cupboard repairing",
    link: "/subsections/carpenter.html#cupboard",
  },
  {
    name: "switch/socket replacements",
    link: "/subsections/electrician.html#switch",
  },
  { name: "Door lock repair", link: "/subsections/carpenter.html#door" },
  { name: "channel repairng", link: "/painting" },
  { name: "WIFI", link: "/subsections/electrician.html#applinces" },
  { name: "CCTV", link: "/subsections/electrician.html#applinces" },
  { name: "curtain rod", link: "/subsections/carpenter.html#window" },
  { name: "cart", link: "/cart page/cart.html" },
  { name: "help", link: "https://wa.me/qr/AIVEWBGXII5JF1" },
  { name: "customer support", link: "https://wa.me/qr/AIVEWBGXII5JF1" },
  { name: "contact", link: "/contact page/contact.html" },
  // Add more items/content that you want searchable
];

function typeDynamicText(dynamicTextElement, currentIndex) {
  let text = dynamicTexts[currentIndex];
  let index = 0;

  const typingInterval = setInterval(() => {
    if (index < text.length) {
      dynamicTextElement.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
      setTimeout(() => {
        let eraseIndex = text.length;
        const eraseInterval = setInterval(() => {
          if (eraseIndex > 0) {
            dynamicTextElement.textContent = text.substring(0, eraseIndex - 1);
            eraseIndex--;
          } else {
            clearInterval(eraseInterval);
            setTimeout(() => {
              currentIndex = (currentIndex + 1) % dynamicTexts.length;
              typeDynamicText(dynamicTextElement, currentIndex);
            }, 1000);
          }
        }, 100);
      }, 2000);
    }
  }, 150);
}

function searchContent(query, suggestionsElement) {
  // Filter the content based on the search query
  const results = searchableContent.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  // Clear previous suggestions
  suggestionsElement.innerHTML = "";

  // Show suggestions
  if (results.length > 0) {
    suggestionsElement.style.display = "block";
    results.forEach((result) => {
      const suggestionItem = document.createElement("div");
      suggestionItem.classList.add("suggestion-item");
      suggestionItem.textContent = result.name;
      suggestionItem.onclick = () => (window.location.href = result.link); // Redirect to the link
      suggestionsElement.appendChild(suggestionItem);
    });
  } else {
    suggestionsElement.style.display = "none";
  }
}

function setupSearch(inputElement, suggestionsElement) {
  inputElement.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (query) {
      searchContent(query, suggestionsElement);
    } else {
      suggestionsElement.style.display = "none";
    }
  });
}

// Apply dynamic text animation to multiple elements
document
  .querySelectorAll(".dynamic-text")
  .forEach((dynamicTextElement, index) => {
    typeDynamicText(dynamicTextElement, 0); // Start typing from the first text in the array for each instance
  });

// Setup search functionality for each search box
document.querySelectorAll(".search-box").forEach((inputElement, index) => {
  const suggestionsElement = document.getElementById(
    `suggestions-${index + 1}`
  );
  setupSearch(inputElement, suggestionsElement);
});
