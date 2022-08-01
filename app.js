let btnShow = document.querySelector(".show-hidden");

function show() {
    let nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

function hamb() {
    let menu = document.querySelector(".show-hidden");
    menu.classList.toggle("active");
}
btnShow.addEventListener("click", hamb);
btnShow.addEventListener("click", show);