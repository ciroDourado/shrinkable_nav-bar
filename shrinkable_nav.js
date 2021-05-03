let nav  = document.getElementsByTagName('nav')[0]
let navBackground = document.getElementById('navBackground')


window.addEventListener('scroll', () => {
    window.scrollTop == 0 || window.pageYOffset == 0?
        expandNav():
        shrinkNav();
}, false)



function shrinkNav() {
    nav.classList.remove('defaultNav')
    nav.classList.add('shrinkedNav')

    navBackground.classList.remove('acryllicOff')
    navBackground.classList.add('acryllicOn')
} // shrinkNav


function expandNav() {
    nav.classList.remove('shrinkedNav')
    nav.classList.add('defaultNav')

    navBackground.classList.remove('acryllicOn')
    navBackground.classList.add('acryllicOff')
} // expandNav
