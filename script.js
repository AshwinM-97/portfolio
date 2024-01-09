const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "block";
  }, 6000);
});
