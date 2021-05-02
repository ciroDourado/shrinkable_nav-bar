let nav  = document.getElementById('shrinkable_nav')
nav.style.transitionDuration = '0.35s';


window.addEventListener('scroll', () => {
    window.scrollTop == 0 || window.pageYOffset == 0?
        applyInitialAttributes():
        applyShrinkedAttributes();
}, false)


function extractValueFrom(string) {
    return string.match(/(\d+)/);
} // extractValueFrom


let initialHeight  = nav.offsetHeight
let shrinkedHeight = initialHeight*(3/4)


function applyShrinkedAttributes() {
    nav.style.height = shrinkedHeight + 'px'
    nav.style.fontSize = '15px'
} // applyShrinkedAttributes


function applyInitialAttributes() {
    nav.style.height = initialHeight  + 'px'
    nav.style.fontSize = '16px'
} // applyInitialAttributes
