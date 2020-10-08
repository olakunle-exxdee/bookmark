const hamburger = document.querySelector(".hamburger");
const navbar2 = document.querySelector(".navbar__two");

const btns = document.querySelectorAll(".feature__content2 .item-feature");
const bookmarks = document.querySelectorAll(".feature__content2 .bookmark");
const feature = document.querySelector(".feature__content2");

btns.forEach((btn) => {
  btn.classList.remove("active");
  console.log(btn.target);
});

// feature.addEventListener("click", function (e) {
//   e.preventDefault();
//   const id = e.target.dataset.id;
//   console.log(e.target);
//   if (id) {
//     btns.forEach((btn) => {
//       btn.classList.add("active");
//     });
//   }
// });

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
  delay: 600,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
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
