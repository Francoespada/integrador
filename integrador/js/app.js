window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    const topNav = document.querySelector("nav");
    const figure = document.querySelector("figure");
    header.classList.toggle("headerAbajo",window.scrollY>0 );
    topNav.classList.toggle("topNavAbajo",window.scrollY>0 );
    figure.classList.toggle("figureArriba",window.scrollY>0);
})


const menuNav = document.querySelector(".menu-nav");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu(){
    menuNav.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);




function clickMenu(){



}

