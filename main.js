// side menu
let box = document.querySelector("#side-menu");
let button = document.querySelector("#action");
let img = document.querySelector("#change");
let menuItem = document.querySelector(".menu-item");

button.addEventListener("click", show);

function show() {
  if (box.style.height == "70%") {
    img.src = "hamburger.svg";
    box.style.height = "0";
    menuItem.style.display = "none";
  } else {
    img.src = "close.svg";
    box.style.height = "70%";

    menuItem.style.display = "block";
  }
}
