let nav  = document.getElementsByTagName('nav')[0]
nav.style.transitionDuration = '0.35s';


window.addEventListener('scroll', () => {
    window.scrollTop == 0 || window.pageYOffset == 0?
        expandNav():
        shrinkNav();
}, false)



function shrinkNav() {
    nav.classList.remove('defaultNav')
    nav.classList.add('shrinkedNav')
} // applyShrinkedAttributes


function expandNav() {
    nav.classList.remove('shrinkedNav')
    nav.classList.add('defaultNav')
} // applyInitialAttributes
