// MENU HAMBURGUESA

const openMenuBtn = document.querySelector('.openMenu');
const closeMenuBtn = document.querySelector(".closeMenu");
const ulMenu =  document.querySelector('.menu');

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    ulMenu.classList.toggle("menuOpened");
}