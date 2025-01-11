const swiperContainers = document.querySelectorAll(".swiper-container");
swiperContainers.forEach((container) => {
  const cardWrapper = container.querySelector(".card-wrapper");
  const leftButton = container.querySelector(".button.left");
  const rightButton = container.querySelector(".button.right");
  const cards = container.querySelectorAll(".card");
  const cardWidth = cards[0].getBoundingClientRect().width + 16; // Including margin
  const visibleCards = Math.floor(container.offsetWidth / cardWidth);
  let offset = 0;

  const updateButtons = () => {
    if (offset === 0) leftButton.classList.add("hidden");
    else leftButton.classList.remove("hidden");
    if (offset <= -(cards.length - visibleCards) * cardWidth)
      rightButton.classList.add("hidden");
    else rightButton.classList.remove("hidden");
  };

  const slide = (direction) => {
    offset += direction * cardWidth;
    offset = Math.max(offset, -(cards.length - visibleCards) * cardWidth);
    offset = Math.min(offset, 0);
    cardWrapper.style.transform = `translateX(${offset}px)`;
    updateButtons();
  };

  rightButton.addEventListener("click", () => slide(-1));
  leftButton.addEventListener("click", () => slide(1));

  let startX = 0;
  let isDragging = false;

  container.addEventListener("touchstart", (e) => {
    if (window.innerWidth <= 768) {
      startX = e.touches[0].clientX;
      isDragging = true;
    }
  });

  container.addEventListener("touchmove", (e) => {
    if (isDragging && window.innerWidth <= 768) {
      const currentX = e.touches[0].clientX;
      if (currentX - startX > 50) {
        slide(1);
        isDragging = false;
      } else if (startX - currentX > 50) {
        slide(-1);
        isDragging = false;
      }
    }
  });

  container.addEventListener("touchend", () => {
    isDragging = false;
  });

  updateButtons();
});
