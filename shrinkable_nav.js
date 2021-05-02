let nav  = document.getElementsByTagName('nav')[0]


window.addEventListener('scroll', () => {
    window.scrollTop == 0 || window.pageYOffset == 0?
        expandNav():
        shrinkNav();
}, false)



function shrinkNav() {
    nav.classList.remove('defaultNav')
    nav.classList.add('shrinkedNav')
} // shrinkNav


function expandNav() {
    nav.classList.remove('shrinkedNav')
    nav.classList.add('defaultNav')
} // expandNav
