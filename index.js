const join = document.querySelector(".join");
const popup = document.querySelector(".pop-up");
const cross = document.querySelector("i");
const bg = document.querySelector("section");

join.addEventListener("click", () => {
  popup.classList.add("active");
  bg.classList.add("blur");
});

cross.addEventListener("click", () => {
  popup.classList.remove("active");
  bg.classList.remove("blur");
});

// bg.addEventListener("click", () => {
//   if (!popup.classList.contains("hidden")) {
//     popup.classList.add("hidden");
//     bg.classList.remove("blur");
//   }
// });

window.addEventListener("keyup", (e) => {
  if (e.key == "Escape") {
    popup.classList.remove("active");
    bg.classList.remove("blur");
  }
});
