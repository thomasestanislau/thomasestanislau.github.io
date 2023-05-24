import initAnimationScroll from "./modules/animacao-scroll.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initScrollSuave from "./modules/scroll-suave.js";
import initTabNav from "./modules/tabnav.js";


function navFixed() {
    
    function transitionMenu() {
        const nav = document.querySelector('nav');
        nav.classList.toggle("fixed", window.scrollY > 0)
    }
    window.addEventListener('scroll', transitionMenu)
}


initTabNav();
initScrollSuave();
initAnimationScroll();
navFixed();
initMenuMobile();
