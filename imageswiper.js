function initializeSwiper(containerId) {
  const container = document.getElementById(containerId);
  const cardWrapper = container.querySelector(".card-wrapper");
  const leftBtn = container.querySelector(".button.left");
  const rightBtn = container.querySelector(".button.right");
  const cardWidth = cardWrapper.querySelector(".card").offsetWidth + 16; // Card width + margin
  let currentScroll = 0;

  function updateButtons() {
    const maxScroll = cardWrapper.scrollWidth - cardWrapper.clientWidth;
    leftBtn.disabled = currentScroll <= 0;
    rightBtn.disabled = currentScroll >= maxScroll;
  }

  rightBtn.addEventListener("click", () => {
    const maxScroll = cardWrapper.scrollWidth - cardWrapper.clientWidth;
    currentScroll = Math.min(currentScroll + cardWidth, maxScroll);
    cardWrapper.style.transform = `translateX(-${currentScroll}px)`;
    updateButtons();
  });

  leftBtn.addEventListener("click", () => {
    currentScroll = Math.max(currentScroll - cardWidth, 0);
    cardWrapper.style.transform = `translateX(-${currentScroll}px)`;
    updateButtons();
  });

  window.addEventListener("resize", () => {
    currentScroll = 0;
    cardWrapper.style.transform = "translateX(0)";
    updateButtons();
  });

  updateButtons();
}

// Initialize multiple swiper sections
initializeSwiper("swiper1");
initializeSwiper("swiper2");
initializeSwiper("swiper3");
initializeSwiper("swiper4");
initializeSwiper("swiper5");
initializeSwiper("swiper6");
