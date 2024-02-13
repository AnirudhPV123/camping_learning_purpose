/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/* Menu hidden outside click */
document.onclick = function(e){
    if(!navMenu.contains(e.target) && !navToggle.contains(e.target) && !navClose.contains(e.target)){
        navMenu.classList.remove('show-menu')
    }
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__image-2',1.2 , {opacity: 0, y: 200, delay :.1})
gsap.from('.home__image-3',1.2 , {opacity: 0, y: 200, delay :.5})
gsap.from('.home__data',1.2 , {opacity: 0, y: -60, delay :1})
gsap.from('.home__bird-1',1.2 , {opacity: 0, x: -80, delay :1.1})
gsap.from('.home__bird-2',1.2 , {opacity: 0, x: 80, delay :1.2})
gsap.from('.home__image-1',1.2 , {opacity: 0, y: 200, delay :1.2})
gsap.from('.home__image-4',1.2 , {opacity: 0, y: 200, delay :1.3})

