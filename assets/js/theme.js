// Toggle hamburger menu
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const burgerX = document.querySelector('.burgerX')
    const nav = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('menu-active');
        // Animate burger
        burger.classList.toggle('toogle');

    });
}

navSlide();