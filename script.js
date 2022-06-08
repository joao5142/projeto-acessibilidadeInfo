const buttonAumentarFonte = document.getElementById("aumentarFonte");
const buttonDiminuirFonte = document.getElementById("diminuirFonte");
const htmlEl = document.querySelector("html");
const switchLight = document.getElementById("switchLight");
const main = document.getElementById("main");
const header = document.getElementById("header");
const sectionBanner = document.getElementById("sectionBanner");
let font = 16;
let isDark = false;

buttonAumentarFonte.addEventListener("click", () => {
  font = font <= 18 ? font + 2 : font;
  htmlEl.style.fontSize = `${font}px`;
});

buttonDiminuirFonte.addEventListener("click", () => {
  font = font >= 16 ? font - 2 : font;
  htmlEl.style.fontSize = `${font}px`;
});
switchLight.addEventListener("click", (e) => {
  main.classList.toggle("dark");

  if (!isDark) {
    switchLight.src = "assets/lightbulb-dark.svg";
    isDark = true;
  } else {
    switchLight.src = "assets/lightbulb-light.svg";
    isDark = false;
  }
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= sectionBanner.offsetHeight) {
    header.classList.add("d-none");
  } else {
    header.classList.remove("d-none");
  }
});
