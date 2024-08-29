const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

var typed = new Typed(".movingtext", {
    strings : ["Software Engineer", "Web Designer", "Everyday Student"],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 75,
    loop: true
})