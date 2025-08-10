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
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  if (!sessionStorage.getItem("loaderShown")) {
    // Show loader, hide main content initially
    loader.style.display = "flex";
    mainContent.style.display = "none";

    // After 3 seconds hide loader and show content
    setTimeout(() => {
      loader.style.display = "none";
      mainContent.style.display = "block";
      sessionStorage.setItem("loaderShown", "true");
    }, 3000);
  } else {
    // If loaderShown before, show main content immediately
    loader.style.display = "none";
    mainContent.style.display = "block";
  }
});