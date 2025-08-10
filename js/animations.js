document.addEventListener("DOMContentLoaded", () => {
  const glitchText = document.querySelector(".glitch");
  if (glitchText) {
    setInterval(() => {
      glitchText.classList.toggle("text-spiderPink");
      glitchText.classList.toggle("text-spiderCyan");
    }, 150);
  }
});