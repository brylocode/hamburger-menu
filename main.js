const hamburger = document.querySelector('.hamburger-js');
const menu = document.querySelector('.menu-js')
const menuLinks = document.querySelectorAll('.menu-link');


const openMenu = () => {
    hamburger.classList.toggle('hamburger-active');
    menu.classList.toggle('menu-active');

    if (menu.classList.contains('menu-active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'visible'
    }
}

const closeMenu = () => {
    menu.classList.remove('menu-active')
}

menuLinks.forEach(el => {
    el.addEventListener('click', closeMenu)
})

hamburger.addEventListener('click', openMenu)