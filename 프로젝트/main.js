'use strict';

const moreButton = document.querySelector(".navbar-more");
const menu = document.querySelector(".navbar-menu");
const icon = document.querySelector(".navbar-icon");

moreButton.addEventListener('click', () => {
    menu.classList.toggle("active");
    icon.classList.toggle("active");
});
console.log("Hello");