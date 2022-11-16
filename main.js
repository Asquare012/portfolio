let box = document.querySelector("#side-menu");
let button = document.querySelector("#action");
let img = document.querySelector("#change");
box.style.right = "-60%";

button.addEventListener("click", show);
let num = 2;

function show() {
    if (box.style.right == "-60%") {
        img.src = "close.svg";
        box.style.right = "0";
    } else {
        box.style.right = "-60%";
        img.src = "hamburger.svg";
    }
}