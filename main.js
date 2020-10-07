const hamburger = document.querySelector(".hamburger");
const navbar2 = document.querySelector(".navbar__two");

const btn = document.querySelector(".btn1");

btn.addEventListener("click", (e) => {
  e.preventDefault();
});

window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

let showMenu = false;

hamburger.addEventListener("click", showNav);
function showNav() {
  if (!showMenu) {
    navbar2.classList.add("open");
    showMenu = true;
  } else {
    navbar2.classList.remove("open");
    showMenu = false;
  }
}
