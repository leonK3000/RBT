let headerElem = document.querySelector('header');
let classHeaderSmall = 'header_small';

window.addEventListener('scroll', function() {
    if (pageYOffset >= 200) {
        headerElem.classList.add(classHeaderSmall)
    } else if (pageYOffset < 200) {
        headerElem.classList.remove(classHeaderSmall)
    }
});



