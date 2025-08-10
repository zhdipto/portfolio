let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScrollY) {
    // Scrolling Up
    navbar.classList.remove("-translate-y-full");
  } else {
    // Scrolling Down
    navbar.classList.add("-translate-y-full");
  }
  lastScrollY = window.scrollY;
});