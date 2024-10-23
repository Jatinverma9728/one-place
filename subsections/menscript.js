document.addEventListener("scroll", function () {
  const middleSection = document.querySelector(".middle-section");
  middleSection.scrollTop = window.pageYOffset;
});
